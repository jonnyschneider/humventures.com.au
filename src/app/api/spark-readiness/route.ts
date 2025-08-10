import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // Validate required fields
    if (!formData.email || !formData.situation || !formData.challenge || !formData.timeline || !formData.role) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create formatted email content
    const emailContent = `
New Spark Readiness Check Submission

Contact Information:
Email: ${formData.email}
Role: ${formData.role}

Assessment Responses:
1. Situation: ${formData.situation}

2. Challenge: ${formData.challenge}

3. Timeline Driver: ${formData.timeline}

4. Role: ${formData.role}

Additional Information:
${formData.additionalInfo || 'None provided'}

---
Submitted: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}
    `

    // Send to Slack webhook (immediate notification)
    if (process.env.SLACK_WEBHOOK_URL) {
      try {
        const slackMessage = {
          text: "🔥 New Spark Readiness Check Submission",
          blocks: [
            {
              type: "header",
              text: {
                type: "plain_text",
                text: "🔥 New Spark Readiness Check"
              }
            },
            {
              type: "section",
              fields: [
                {
                  type: "mrkdwn",
                  text: `*Email:* ${formData.email}`
                },
                {
                  type: "mrkdwn", 
                  text: `*Role:* ${formData.role}`
                }
              ]
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Situation(s):*\n${Array.isArray(formData.situation) ? formData.situation.map((s: string) => `• ${s}`).join('\n') : formData.situation}`
              }
            },
            {
              type: "section", 
              text: {
                type: "mrkdwn",
                text: `*Challenge(s):*\n${Array.isArray(formData.challenge) ? formData.challenge.map((c: string) => `• ${c}`).join('\n') : formData.challenge}`
              }
            },
            {
              type: "section",
              text: {
                type: "mrkdwn", 
                text: `*Timeline Driver(s):*\n${Array.isArray(formData.timeline) ? formData.timeline.map((t: string) => `• ${t}`).join('\n') : formData.timeline}`
              }
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `Submitted: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}`
              }
            }
          ] as any[]
        }

        if (formData.additionalInfo) {
          slackMessage.blocks.push({
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*Additional Info:*\n${formData.additionalInfo}`
            }
          })
        }

        await fetch(process.env.SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(slackMessage)
        })
      } catch (slackError) {
        console.error('Slack notification failed:', slackError)
        // Don't fail the whole request if Slack fails
      }
    }

    // Log for backup
    console.log('Spark Readiness Form Submission:', {
      email: formData.email,
      role: formData.role,
      situation: formData.situation,
      challenge: formData.challenge,
      timeline: formData.timeline,
      additionalInfo: formData.additionalInfo,
      submittedAt: new Date().toISOString()
    })

    // TODO: Future email setup
    // Example with Resend (when you're ready):
    /*
    import { Resend } from 'resend'
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    // Send acknowledgment to user
    await resend.emails.send({
      from: 'spark@humventures.com.au',
      to: formData.email,
      cc: 'spark@humventures.com.au',
      subject: 'Thanks for your Spark Readiness Check',
      text: `Hi there,\n\nThanks for completing our Spark Readiness Check. We'll review your responses and get back to you within 24 hours.\n\nBest,\nThe HumVentures Team`,
      replyTo: 'spark@humventures.com.au'
    })
    
    // Send internal notification
    await resend.emails.send({
      from: 'forms@humventures.com.au',
      to: 'spark@humventures.com.au',
      subject: `New Spark Readiness Check - ${formData.role}`,
      text: emailContent,
      replyTo: formData.email
    })
    */
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully',
        followUp: getFollowUpMessage(formData)
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function getFollowUpMessage(formData: {
  situation: string | string[]
  challenge: string | string[]
  timeline: string | string[]
  role: string
}): string {
  // Tailored follow-up based on responses
  const { situation, challenge, timeline, role } = formData
  
  // Strategic decision scenarios
  const situationStr = Array.isArray(situation) ? situation.join(' ') : situation
  if (situationStr.includes('strategic decision')) {
    return "Given you're facing a major strategic decision, we'll prioritize connecting you with our team within 24 hours to discuss how The Spark can help you navigate this critical choice."
  }
  
  // Scaling challenges
  if (situationStr.includes('scaling successfully')) {
    return "Scaling challenges require experienced guidance. We'll reach out within 24 hours to explore how our rapid experimentation approach can help you solve these new problems efficiently."
  }
  
  // Leadership needs
  if (situationStr.includes('leadership')) {
    return "Interim leadership needs are time-sensitive. We'll connect you with our product leadership team within 24 hours to discuss immediate next steps."
  }
  
  // Alignment issues
  if (situationStr.includes('aligned')) {
    return "Leadership alignment is crucial for execution. We'll contact you within 24 hours to explore how our strategic clarity framework can help get everyone on the same page."
  }
  
  // Timeline-driven responses
  const timelineStr = Array.isArray(timeline) ? timeline.join(' ') : timeline
  if (timelineStr.includes('Investment') || timelineStr.includes('M&A')) {
    return "Given your timeline constraints, we'll prioritize this and reach out within 12 hours to discuss how we can support you through this critical period."
  }
  
  // Default response
  return "We'll review your responses and get back to you within 24 hours with next steps tailored to your specific situation."
}