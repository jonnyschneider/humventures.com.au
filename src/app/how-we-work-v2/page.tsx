import Navigation from '@/components/Navigation'

export default function HowWeWorkV2() {
  return (
    <div className="bg-gray-900">
      <Navigation variant="dark" position="relative" />
      
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-indigo-400">Our approach</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-display font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Principles that drive results
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-300">
            These aren&apos;t just buzzwords. They&apos;re battle-tested principles from working with growth-stage SaaS teams 
            facing real scaling challenges.
          </p>
          
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            
            {/* Pattern Recognition - Large left panel */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-500/20 rounded-lg mb-4">
                    <span className="text-xl">🎯</span>
                  </div>
                  <p className="mt-2 text-lg font-display font-medium tracking-tight text-white max-lg:text-center">
                    Pattern Recognition
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    Most teams try the same failed approaches. We&apos;ve seen this movie before - here&apos;s what actually works.
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm p-8">
                  <div className="bg-gray-700/50 rounded-lg p-6 h-full">
                    <blockquote className="text-sm italic text-gray-300 mb-4">
                      &quot;You left the strategy offsite believing it was crystal clear and you&apos;re all on the same page. 
                      By half-quarter, product, sales, and marketing all believe they&apos;re talking about the same thing...&quot;
                    </blockquote>
                    <div className="space-y-2 text-xs text-gray-400">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span>Sales promising what doesn&apos;t exist</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>Product obsessing over wrong details</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Clear execution framework</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/10 lg:rounded-l-4xl" />
            </div>

            {/* Execution Over Theory - Top right */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-green-500/20 rounded-lg mb-4">
                    <span className="text-xl">⚡</span>
                  </div>
                  <p className="mt-2 text-lg font-display font-medium tracking-tight text-white max-lg:text-center">
                    Execution Over Theory
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    We don&apos;t just theorize - we go deep quickly and lead with action.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-6 w-full max-w-xs">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold">3 days</div>
                      <div className="text-sm opacity-90">Strategy → Action</div>
                      <div className="text-xs opacity-75 mt-2">Not 3 months of planning</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/10 max-lg:rounded-t-4xl" />
            </div>

            {/* Bridge Strategy & Teams - Middle right */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-500/20 rounded-lg mb-4">
                    <span className="text-xl">🌉</span>
                  </div>
                  <p className="mt-2 text-lg font-display font-medium tracking-tight text-white max-lg:text-center">
                    Bridge Strategy & Teams
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    Translate &quot;top down&quot; strategy then get &quot;in the trenches&quot; to execute &quot;bottom up&quot;.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2 px-8">
                  <div className="relative w-full max-w-48">
                    <div className="bg-gray-600 rounded-t-lg p-3 text-center text-xs font-medium text-gray-200">
                      Executive Vision
                    </div>
                    <div className="bg-indigo-500 h-8 flex items-center justify-center">
                      <span className="text-white text-xs">Translation Layer</span>
                    </div>
                    <div className="bg-gray-600 rounded-b-lg p-3 text-center text-xs font-medium text-gray-200">
                      Team Execution
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/10" />
            </div>

            {/* Rapid Experimentation - Large right panel */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-500/20 rounded-lg mb-4">
                    <span className="text-xl">🔬</span>
                  </div>
                  <p className="mt-2 text-lg font-display font-medium tracking-tight text-white max-lg:text-center">
                    Rapid Experimentation
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    10+ years of refinement. Small bets, fast learning, validated decisions.
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow p-8">
                  <div className="bg-gray-950/50 rounded-lg p-6 h-full text-white">
                    <div className="mb-4">
                      <div className="text-xs text-gray-300 mb-2">Experiment Framework</div>
                      <div className="space-y-3">
                        <div className="bg-blue-600 rounded p-3">
                          <div className="text-sm font-medium">1. Map Risky Assumptions</div>
                          <div className="text-xs opacity-80">What could kill this idea?</div>
                        </div>
                        <div className="bg-green-600 rounded p-3">
                          <div className="text-sm font-medium">2. Design Cheap Tests</div>
                          <div className="text-xs opacity-80">Learn fast, spend little</div>
                        </div>
                        <div className="bg-purple-600 rounded p-3">
                          <div className="text-sm font-medium">3. Get Real Data</div>
                          <div className="text-xs opacity-80">Customer truth, not opinions</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-300">
                      Result: 90% faster time to market, millions saved on bad ideas
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/10 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </div>
          </div>

          {/* Bottom section with two additional principles */}
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            
            {/* No Best Practice Dogma */}
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-red-500/20 rounded-lg mb-4">
                    <span className="text-xl">🚫</span>
                  </div>
                  <p className="mt-2 text-lg font-display font-medium tracking-tight text-white">
                    No Best Practice Dogma
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-300">
                    What works at Amazon or Spotify probably won&apos;t work in your organization. 
                    We focus on better practice, not best practice.
                  </p>
                  <div className="mt-4 text-xs text-gray-400 italic">
                    &quot;Proudly uncertified&quot; - Results matter, not frameworks
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/10" />
            </div>

            {/* Partnership Approach */}
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-yellow-500/20 rounded-lg mb-4">
                    <span className="text-xl">🤝</span>
                  </div>
                  <p className="mt-2 text-lg font-display font-medium tracking-tight text-white">
                    Partnership Approach
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-300">
                    We don&apos;t just consult and disappear. Once clients see results, they typically want 
                    to continue the partnership for ongoing execution support.
                  </p>
                  <div className="mt-4 text-xs text-gray-400">
                    &quot;Let&apos;s try a small thing for 2 weeks&quot; → Long-term strategic partnership
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/10" />
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-indigo-900/30 border border-indigo-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                See These Principles in Action
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Every engagement starts with our rapid &quot;Sniff Test&quot; - half a day of expert pattern recognition 
                that reveals what matters most for your specific situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Start with the Sniff Test
                </a>
                <a
                  href="/results"
                  className="rounded-md bg-gray-800 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-gray-600 hover:bg-gray-700"
                >
                  See Results
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}