import Navigation from '@/components/Navigation'
import CallToAction from '@/components/CallToAction'
import StatsSection from '@/components/StatsSection'
import LogoCloud from '@/components/LogoCloud'

export default function Results() {
  return (
    <div>
      <Navigation variant="light" position="relative" />
      <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-display font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Results
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Real outcomes from strategic clarity and rapid execution.
          </p>
        </div>

        {/* Featured Results - Vertical Stack */}
        <div className="mx-auto mt-16 max-w-7xl space-y-16">
          
          {/* Phantm Case Study */}
          <div className="relative bg-white">
            
            <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
              {/* Client Info Overlay */}
              <div className="relative px-6 pt-16 pb-8 sm:pt-20 lg:px-8 lg:pt-32 text-white bg-daintree-700">
                <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                  <div className="inline-flex items-center justify-center mb-6">
                    <img
                      alt="Phantm"
                      src="https://cdn.sanity.io/images/6i6wbquj/staging/84cf9299963c7491a35888cbb7300fa691bf2650-500x167.svg"
                      width={300}
                      height={48}
                      className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                    />
                  </div>
                  {/* Industry and Mission
                  <p className="text-sm text-gray-200 mb-1">Industry: SaaS Technology</p>
                  <p className="text-sm text-gray-300 mb-8">Mission: Revolutionizing customer feedback through AI-powered insights</p>
                  */}

                  {/* Integrated Testimonial */}
                  <div className="border-t border-white/20 pt-6">
                    <blockquote className="text-xl/7 text-gray-100 mb-4">
                      <p className="mb-4">
                        "We needed a jolt, not a gentle transition. The Decision Stack was our catalyst, and Jonny brought the experience and energy to move us forward—at a speed we hadn't seen before. 
                      </p> 
                      <p>In just two months we had a new product strategy, a viable technology pathway, and a team delivering outcomes at pace."</p>
                    </blockquote>
                    <div className="flex items-center gap-x-3">
                      <div className="text-sm">
                        <div className="font-semibold text-white">Elliot Costello</div>
                        <div className="text-gray-300">—CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-start-2 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                  <h2 className="text-base/8 font-semibold text-driftwood-500">Case Study</h2>
                  <p className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Strategy to Action with the Decision Stack
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-600">
                    Rapid strategy facilitation followed by customer validation experiments that 
                    de-risked their solution and secured investment funding.
                  </p>
                  <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-md/6 text-gray-700">days to strategic clarity</dt>
                      <dd className="order-first text-6xl font-display font-semibold tracking-tight text-gray-900">3</dd>
                    </div>
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-md/6 text-gray-700">hours to first customer feedback</dt>
                      <dd className="order-first text-6xl font-display font-semibold tracking-tight text-gray-900">24</dd>
                    </div>
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-md/6 text-gray-700">weeks to de-risk solution</dt>
                      <dd className="order-first text-6xl font-display font-semibold tracking-tight text-gray-900">6</dd>
                    </div>
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-md/6 text-gray-700">weeks to win investment</dt>
                      <dd className="order-first text-6xl font-display font-semibold tracking-tight text-gray-900">12</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* IAG Case Study */}
          <div className="relative bg-white">

            <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
              {/* Stats */}
              <div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl lg:ml-0 lg:max-w-lg">
                  <h2 className="text-base/8 font-semibold text-driftwood-500">Case Study</h2>
                  <p className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Enterprise Innovation at Scale
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-600">
                    Transformed digital innovation speed and ROI through rapid experimentation framework,
                    saving millions by killing bad ideas early.
                  </p>
                  <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-md/6 text-gray-700">lower cost of customer learning</dt>
                      <dd className="order-first text-6xl font-display font-semibold tracking-tight text-gray-900">90%</dd>
                    </div>
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-md/6 text-gray-700">product experiments</dt>
                      <dd className="order-first text-6xl font-display font-semibold tracking-tight text-gray-900">20</dd>
                    </div>
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-md/6 text-gray-700">customers in testing</dt>
                      <dd className="order-first text-6xl font-display font-semibold tracking-tight text-gray-900">2,000+</dd>
                    </div>
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-md/6 text-gray-700">bad ideas killed early</dt>
                      <dd className="order-first text-6xl font-display font-semibold tracking-tight text-gray-900">4</dd>
                    </div>
                  </dl>
                </div>
              </div>
              
              {/* Client Info Overlay */}
              <div className="relative px-6 pt-16 pb-8 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32 text-white bg-daintree-700">
                <div className="mx-auto max-w-2xl lg:ml-0 lg:max-w-lg">
                  <h3 className="text-2xl font-display font-semibold text-white mb-2">Major Insurance Group</h3>
    
                  {/* Industry and Mission }
                  <p className="text-sm text-gray-200 mb-1">Industry: Financial Services & Insurance</p>
                  <p className="text-sm text-gray-300 mb-8">Mission: Protecting what matters most through innovative insurance solutions</p>
                  */}
                  {/* Integrated Testimonial */}
                  <div className="border-t border-white/20 pt-6">
                    <blockquote className="text-xl/7 text-gray-100 mb-4">
                      <p>
                        "Customer initiatives were taking 6 months to launch, and often missed the mark, despite our investment in new capabilities. The rapid experimentation approach delivered 90% faster 
                        time to market and helped us kill bad ideas before wasting millions."
                      </p>
                    </blockquote>
                    <div className="flex items-center gap-x-3">
                      <div className="text-sm">
                        <div className="font-semibold text-white">Jasper Streit</div>
                        <div className="text-gray-300">Executive Manager Digital</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <StatsSection 
          title="Common Success Patterns"
          subtitle="Consistent outcomes across our client engagements demonstrate proven approaches to strategic clarity and execution."
          variant="light"
          stats={[
            {
              title: "Rapid Clarity",
              description: "Strategic challenges that seemed complex become clear direction within days, not months."
            },
            {
              title: "Validated Execution", 
              description: "Customer learning cycles de-risk big decisions and validate strategic bets before major investment."
            },
            {
              title: "Sustained Momentum",
              description: "Teams gain confidence and capability to continue executing independently with ongoing advisory support."
            }
          ]}
        />
        <LogoCloud />
        <CallToAction />
      </div>
    </div>
    </div>
  );
}
