'use client'

import Navigation from '@/components/Navigation'
import SparkReadinessForm from '@/components/SparkReadinessForm'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

const sparkFeatures = [
  {
    name: 'No extensive discovery.',
    description: 'We don\'t need to memorise your business model to add value.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'No elaborate pitches.',
    description: 'Our best sales motion is doing the work with you.',
    icon: LockClosedIcon,
  },
  {
    name: 'No drawn-out warm-up periods.',
    description: 'We bring decades of product experience to bear on your specific challenge, immediately.',
    icon: ServerIcon,
  },
]

const howItWorksFeatures = [
  {
    name: 'Start Fast',
    description: 'We focus on understanding the problem you\'re trying to solve, not every detail of how you got here.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Work Together',
    description: 'Rather than disappearing to craft recommendations, we solve problems alongside your team in real-time.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Create Options',
    description: 'By the end, you\'ll have concrete next steps and clarity on what\'s possible—whether that\'s continuing with us or taking the work forward independently.',
    icon: FingerPrintIcon,
  },
]

export default function StartWithTheSpark() {
  return (
      <div>
        <Navigation variant="light" position="relative" />

        {/* Hero Section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-base/7 font-semibold text-driftwood-500">Start with The Spark</p>
              <h1 className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-daintree-500 sm:text-5xl">
                Do the work. Skip the dance.
              </h1>
              <p className="mt-6 text-lg/8 text-gray-700">
                Most consulting starts with lengthy discovery phases, endless PowerPoints, and teams that take weeks to understand what you already know about your business. We think that's backwards.
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">Our answer is <span className="font-display font-bold tracking-tight">The Spark</span><span className="material-symbols-outlined text-driftwood-500 text-xl align-super" aria-hidden="true">bolt</span><br /> It's how we shortcut to value in days not months.</p>
              
              {/* Hero CTAs */}
              <div className="mt-10 flex flex-col gap-4 items-center">
                <button
                  onClick={() => document.getElementById('readiness-check')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center rounded-md bg-mulberry-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-mulberry-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-mulberry-600"
                >
                  Take the 2 min Spark Ready Check
                </button>
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ36BX5IqJI1GHCHA91HLNRW0FeWWK6x_Vp26fSW-csP1p76yv5CikqrTIPJRC6BRsbnn2NmIiqG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Skip to booking <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* What is The Spark? - Dark Section */}
        <div className="bg-daintree-700 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-base/7 font-semibold text-driftwood-500">What is The Spark?</h2>
              <p className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                A focused engagement designed to cut through the noise
              </p>
              <p className="mt-6 text-lg/8 text-gray-200">
                In a day, half-day, or short sprint, we go from first conversation to tangible progress on what matters most.
              </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-200 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
              {sparkFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-driftwood-500" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-200 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
              {howItWorksFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-driftwood-500" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
            
          </div>
        </div>

        {/* Pull Quote - Full Width Centered */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <svg
            aria-hidden="true"
            className="absolute left-1/2 -top-[40rem] -z-10 h-[64rem] w-[100vw] max-w-[1400px] -translate-x-1/2 stroke-gray-900/10 [mask:radial-gradient(64rem_64rem_at_50%_0%,white,transparent)]"
          >
            <defs>
              <pattern
                id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M0.5 0V200M200 0.5L0 0.499983" />
              </pattern>
            </defs>
            <rect fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <figure>
            <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900 sm:text-2xl/8">
              <p>
                "We'd rather demonstrate value quickly than spend weeks convincing you we might be useful. Most clients who experience how we work want to do more work together—that's our growth model."
              </p>
            </blockquote>
          </figure>
        </div>

        {/* Two Column Section */}
        <div className="bg-white pt-18 sm:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-16">
              <div className="text-base/7 text-gray-700">
                <h2 className="text-2xl font-display font-bold tracking-tight text-gray-900">Why we do this</h2>
                <p className="mt-6">
                  Some consulting optimises for long engagements and sustained margin. We optimise for impact.
                </p>
                <p className="mt-4">
                  <strong className="font-semibold text-gray-900">For you</strong><br />Low-risk way to assess fit and see immediate progress on challenges that matter.
                </p>
                <p className="mt-2">
                  <strong className="font-semibold text-gray-900">For us</strong><br />Sustainable way to show our approach without the overhead of traditional sales infrastructure.
                </p>
              </div>
              <div className="mt-10 text-base/7 text-gray-700 lg:mt-0">
                <h2 className="text-2xl font-display font-bold tracking-tight text-gray-900">What happens next</h2>
                <p className="mt-6">
                  The Spark typically leads to one of our core offerings—Strategic Clarity, Rapid Experimentation, or Interim Product Leadership—but only if the value exchange makes sense for both sides.
                </p>
                <p className="mt-4">
                  We're not interested in being around longer than we're genuinely useful.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Readiness Check Section */}
        <div id="readiness-check" className="py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-semibold text-daintree-900 sm:text-4xl">Ready to skip the dance?</h2>
                <p className="mt-6 text-lg/8 text-daintree-700">
                  Take our quick readiness check to see if <span className="font-display font-bold tracking-tight">The Spark</span><span className="material-symbols-outlined text-driftwood-500 text-xl align-super" aria-hidden="true">bolt</span> is right for your situation.
                </p>
              </div>
              
              {/* Spark Readiness Form */}
              <div>
                <SparkReadinessForm />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
