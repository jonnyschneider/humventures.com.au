import Navigation from '@/components/Navigation'

export default function HowWeWorkV3() {
  return (
    <div className="bg-daintree-500 text-neutral-950 text-med">
      <Navigation variant="dark" position="relative" />
      
      <div className="bg-daintree-500 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-med font-semibold text-white">How we work</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-display font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Thinkers who build. Builders who think.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xl text-white">
            Replace this strapline
          </p>
          
          <div className="mt-10 grid gap-4 sm:mt-16 grid-cols-1 lg:grid-cols-3">
            
            {/* Beyond the playbook - 2 columns */}
            <div className="relative ">
              <div className="absolute inset-px rounded border border-white"  />
              <div className="relative flex h-full flex-col overflow-hidden rounded lg:rounded">
                <div className="px-8 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-8">
                  <div className="inline-flex rounded mb-6">
                    <span className="material-symbols-outlined icon-large text-white">fork_left</span>
                  </div>
                  <p className="text-xl font-display font-semibold tracking-tight text-white mb-3">
                    Beyond the playbook.
                  </p>
                  <p className="text-white leading-relaxed mb-4">
                    Everyone&apos;s got a playbook. We&apos;ve even written one. But real success starts with first principles—knowing 
                    when to follow the rules and when to break them.
                  </p>
                  <p className="text-white leading-relaxed mb-4 font-semibold">
                    Because mindset beats methodology, every time.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded shadow-sm outline outline-white/10 lg:rounded" />
            </div>

            {/* Day one value - Top right */}
            <div className="relative lg:col-start-3">
              <div className="absolute inset-px rounded border bg-white"  />
              <div className="relative flex h-full flex-col overflow-hidden rounded">
                <div className="px-8 pt-8 pb-6 sm:px-10 sm:pt-10">
                  <div className="inline-flex rounded mb-6">
                    <span className="material-symbols-outlined icon-large text-driftwood-500">timer</span>
                  </div>
                  <p className="text-xl font-display font-semibold tracking-tight mb-3">
                    Day one value.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Your challenges don&apos;t wait for lengthy setups and process decks. We cut straight to what matters, 
                    because we&apos;ve seen enough to know where to start and what works.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded shadow-sm outline outline-white/10 max-lg:rounded" />
            </div>

            {/* Small teams, Big Impact - Single column, transparent with gold border */}
            <div className="relative lg:row-start-2 lg:col-start-3">
              <div className="absolute inset-px rounded border border-white"  />
              <div className="relative flex h-full flex-col overflow-hidden rounded">
                <div className="px-8 pt-8 pb-6 sm:px-10 sm:pt-10">
                  <div className="inline-flex rounded mb-6">
                    <span className="material-symbols-outlined icon-large text-white">atr</span>
                  </div>
                  <p className="text-xl font-display font-semibold tracking-tight text-white mb-3">
                    Small teams, Big Impact.
                  </p>
                  <p className="text-white text-med mb-4">
                    No bloat, no armies of juniors. Just 1-3 seasoned experts who can play multiple positions.
                  </p>
                  <p className="text-white text-med mb-4 font-semibold">
                    Because sometimes the fastest way to solve hard problems is to have fewer people in the room.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded shadow-sm outline outline-driftwood-500/20" />
            </div>

            {/* Dream team, on demand - Single column */}
            <div className="relative lg:row-start-3 lg:col-start-2">
              <div className="absolute inset-px rounded border border-white"  />
              <div className="relative flex h-full flex-col overflow-hidden rounded">
                <div className="px-8 pt-8 pb-6 sm:px-10 sm:pt-10 text-white">
                  <div className="inline-flex rounded mb-6">
                    <span className="material-symbols-outlined icon-large text-driftwood-500">hotel_class</span>
                  </div>
                  <p className="text-xl font-display font-semibold tracking-tight mb-3">
                    Dream team, on demand.
                  </p>
                  <p className="leading-relaxed mb-4">
                    We don&apos;t hire employees. Instead, we build networks of exceptional talent and trusted partners 
                    who come together to solve your challenges.
                  </p>
                  <p className="leading-relaxed mb-4 font-semibold">
                    You get the team you need, not whoever&apos;s available.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded shadow-sm outline outline-white/10" />
            </div>
            {/* The goldilocks of global teams */}
            <div className="relative lg:row-start-3">
              <div className="absolute inset-px rounded border bg-white"  />
              <div className="relative flex h-full flex-col overflow-hidden rounded">
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10">
                  <div className="inline-flex rounded mb-6">
                    <span className="material-symbols-outlined icon-large text-driftwood-500">skillet</span>
                  </div>
                  <p className="text-xl font-display font-semibold tracking-tight mb-3">
                    The goldilocks of global teams.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Product innovation needs local leadership, but offshore costs. We put senior experts on-site, 
                    backed by world-class delivery partners in friendly time zones.
                  </p>
                  <p className="leading-relaxed mb-4 font-semibold">
                    All the capability, half the cost.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded shadow-sm outline outline-white/10" />
            </div>

            {/* No lock-in, just results */}
            <div className="relative lg:row-start-2 lg:col-start-2">
              <div className="absolute inset-px rounded border bg-white"  />
              <div className="relative flex h-full flex-col overflow-hidden rounded">
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10">
                  <div className="inline-flex rounded mb-6">
                    <span className="material-symbols-outlined icon-large text-driftwood-500">vpn_key</span>
                  </div>
                  <p className="text-xl font-display font-semibold tracking-tight mb-3">
                    No lock-in, just results.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Fixed plans and big-upfront contracts are for nervous vendors. We earn trust by delivering value fast, 
                    with flexible engagement models that fit your operating model.
                  </p>
                  <p className="leading-relaxed mb-4 font-semibold">
                    It&apos;s one reason our ask-back rate is 100%
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded shadow-sm outline outline-white/10" />
            </div>

            {/* Thinkers who build - Single column */}
            <div className="relative lg:row-start-4 lg:col-start-3">
              <div className="absolute inset-px rounded border bg-white"  />
              <div className="relative flex h-full flex-col overflow-hidden rounded">
                <div className="px-8 pt-8 pb-6 sm:px-10 sm:pt-10">
                  <div className="inline-flex rounded mb-6">
                    <span className="material-symbols-outlined icon-large text-driftwood-500">timer</span>
                  </div>
                  <p className="text-xl font-display font-semibold tracking-tight mb-3">
                    Thinkers who build. Builders who think.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Others stop at the strategy deck. We bring both the vision and the know-how to make it real, adapting as we learn. Because good ideas only matter when they work.
                  </p>
                  <p className="leading-relaxed mb-4 font-semibold">
                    You get the team you need, not whoever&apos;s available.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded shadow-sm outline outline-white/10" />
            </div>
          </div>

          {/* Service Flow Timeline: TailwindPlus UI Block */}
          <div className="bg-white py-24 sm:py-32 mt-16 rounded">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-med font-semibold text-driftwood-500">Our Service Flow</h2>
                <p className="mt-2 text-3xl font-display font-semibold tracking-tight text-daintree-500 sm:text-4xl">
                  Start small, scale to your need
                </p>
                <p className="mt-6 text-lg">
                  We start with immediate value and small commitments, and offer flexibility for continued partnership
                </p>
              </div>
              
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                <div>
                  <time className="flex items-center text-sm/6 font-semibold text-driftwood-500">
                    <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-2 flex-none">
                      <circle r={2} cx={2} cy={2} fill="currentColor" />
                    </svg>
                    DAYS
                    <div
                      aria-hidden="true"
                      className="absolute -ml-2 h-0.5 w-screen -translate-x-full bg-driftwood-500 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    />
                  </time>
                  <p className="mt-6 text-lg/8 font-display font-semibold tracking-tight">Strategic Clarity</p>
                  <p className="mt-1 text-med">
                    Rapid &quot;The Spark&quot; and strategy facilitation reveals what matters most. No lengthy discovery - immediate insights and clear direction.
                  </p>
                </div>
                
                <div>
                  <time className="flex items-center text-med/6 font-semibold text-driftwood-500">
                    <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-2 flex-none">
                      <circle r={2} cx={2} cy={2} fill="currentColor" />
                    </svg>
                    WEEKS
                    <div
                      aria-hidden="true"
                      className="absolute -ml-2 h-0.5 w-screen -translate-x-full bg-driftwood-500 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    />
                  </time>
                  <p className="mt-6 text-lg/8 font-display font-semibold tracking-tight text-gray-900">Rapid Experimentation</p>
                  <p className="mt-1 text-med">
                    Fast learning cycles through customer validation. Design cheap tests, get real data, validate assumptions before big investments.
                  </p>
                </div>
                
                <div>
                  <time className="flex items-center text-sm/6 font-semibold text-driftwood-500">
                    <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-2 flex-none">
                      <circle r={2} cx={2} cy={2} fill="currentColor" />
                    </svg>
                    MONTHS
                    <div
                      aria-hidden="true"
                      className="absolute -ml-2 h-0.5 w-screen -translate-x-full bg-driftwood-500 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    />
                  </time>
                  <p className="mt-6 text-lg/8 font-display font-semibold tracking-tight text-gray-900">Execution Support</p>
                  <p className="mt-1 text-med">
                    Hands-on implementation with your team. Bridge strategy to execution, build internal capability, and ensure momentum continues.
                  </p>
                </div>
                
                <div>
                  <time className="flex items-center text-sm/6 font-semibold text-driftwood-500">
                    <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-2 flex-none">
                      <circle r={2} cx={2} cy={2} fill="currentColor" />
                    </svg>
                    ONGOING
                    <div
                      aria-hidden="true"
                      className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    />
                  </time>
                  <p className="mt-6 text-lg/8 font-display font-semibold tracking-tight text-gray-900">Advisory Partnership</p>
                  <p className="mt-1 text-med">
                    Fractional advisory role for strategic guidance. No lock-in contracts - flexible support as challenges evolve and teams grow.
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white border border-driftwood-500/20 rounded p-8">
              <h3 className="text-xl font-display font-semibold text-daintree-500 mb-4">
                Ready to experience the difference?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Start with our rapid &quot;The Spark&quot; - half a day of expert analysis that reveals what matters most. 
                No lengthy proposals, no big upfront commitments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="rounded-md bg-mulberry-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-mulberry-500/80"
                >
                  Start with The Spark
                </a>
                <a
                  href="/results"
                  className="rounded-md bg-daintree-500 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-daintree-500 hover:bg-daintree-500/80"
                >
                  See Our Results
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
