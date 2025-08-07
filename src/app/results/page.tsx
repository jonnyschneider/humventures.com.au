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
            <img
              alt="Technology startup office"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
              className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
            />
            <div className="absolute inset-0 lg:w-1/2 bg-black bg-opacity-60"></div>
            
            <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
              {/* Client Info Overlay */}
              <div className="relative px-6 pt-16 pb-8 sm:pt-20 lg:px-8 lg:pt-32 text-white">
                <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-6">
                    <span className="text-2xl font-display font-bold text-white">P</span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-white mb-2">Phantm</h3>
                  <p className="text-sm text-gray-200 mb-1">Industry: SaaS Technology</p>
                  <p className="text-sm text-gray-300 mb-8">Mission: Revolutionizing customer feedback through AI-powered insights</p>
                  
                  {/* Integrated Testimonial */}
                  <div className="border-t border-white/20 pt-6">
                    <blockquote className="text-lg/7 text-gray-100 italic mb-4">
                      <p>
                        "The strategic clarity process cut through months of internal debate in just 3 days. 
                        More importantly, the rapid experimentation approach helped us validate our biggest bets 
                        before committing serious resources."
                      </p>
                    </blockquote>
                    <div className="flex items-center gap-x-3">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-10 rounded-full"
                      />
                      <div className="text-sm">
                        <div className="font-semibold text-white">Michael Chen</div>
                        <div className="text-gray-300">Head of Product Strategy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-start-2 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                  <h2 className="text-base/8 font-semibold text-brand-plum">Case Study</h2>
                  <p className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Strategy to Action with the Decision Stack
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-600">
                    Rapid strategy facilitation followed by customer validation experiments that 
                    de-risked their solution and secured investment funding.
                  </p>
                  <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-sm/6 text-gray-600">days to strategic clarity</dt>
                      <dd className="order-first text-3xl font-display font-semibold tracking-tight text-gray-900">3</dd>
                    </div>
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-sm/6 text-gray-600">hours to first customer feedback</dt>
                      <dd className="order-first text-3xl font-display font-semibold tracking-tight text-gray-900">24</dd>
                    </div>
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-sm/6 text-gray-600">weeks to de-risk solution</dt>
                      <dd className="order-first text-3xl font-display font-semibold tracking-tight text-gray-900">6</dd>
                    </div>
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-sm/6 text-gray-600">weeks to win investment</dt>
                      <dd className="order-first text-3xl font-display font-semibold tracking-tight text-gray-900">12</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* IAG Case Study */}
          <div className="relative bg-white">
            <img
              alt="Corporate office building"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
              className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
            />
            <div className="absolute inset-0 lg:left-1/2 lg:w-1/2 bg-black bg-opacity-60"></div>
            
            <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
              {/* Stats */}
              <div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl lg:ml-0 lg:max-w-lg">
                  <h2 className="text-base/8 font-semibold text-brand-gold">Case Study</h2>
                  <p className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Enterprise Innovation at Scale
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-600">
                    Transformed digital innovation speed and ROI through rapid experimentation framework,
                    saving millions by killing bad ideas early.
                  </p>
                  <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-sm/6 text-gray-600">lower cost of customer learning</dt>
                      <dd className="order-first text-3xl font-display font-semibold tracking-tight text-gray-900">90%</dd>
                    </div>
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-sm/6 text-gray-600">product experiments</dt>
                      <dd className="order-first text-3xl font-display font-semibold tracking-tight text-gray-900">20</dd>
                    </div>
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-sm/6 text-gray-600">customers in testing</dt>
                      <dd className="order-first text-3xl font-display font-semibold tracking-tight text-gray-900">2,000+</dd>
                    </div>
                    <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                      <dt className="text-sm/6 text-gray-600">bad ideas killed early</dt>
                      <dd className="order-first text-3xl font-display font-semibold tracking-tight text-gray-900">4</dd>
                    </div>
                  </dl>
                </div>
              </div>
              
              {/* Client Info Overlay */}
              <div className="relative px-6 pt-16 pb-8 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32 text-white">
                <div className="mx-auto max-w-2xl lg:ml-0 lg:max-w-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-6">
                    <span className="text-lg font-display font-bold text-white">IAG</span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-white mb-2">Major Insurance Group</h3>
                  <p className="text-sm text-gray-200 mb-1">Industry: Financial Services & Insurance</p>
                  <p className="text-sm text-gray-300 mb-8">Mission: Protecting what matters most through innovative insurance solutions</p>
                  
                  {/* Integrated Testimonial */}
                  <div className="border-t border-white/20 pt-6">
                    <blockquote className="text-lg/7 text-gray-100 italic mb-4">
                      <p>
                        "Despite significant investment in capabilities, new customer initiatives took 6 months to launch, 
                        often missing the mark on results. The rapid experimentation framework delivered 90% faster 
                        time to market and helped us kill bad ideas before wasting millions."
                      </p>
                    </blockquote>
                    <div className="flex items-center gap-x-3">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-10 rounded-full"
                      />
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
