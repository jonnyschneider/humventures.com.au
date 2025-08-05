import Navigation from '@/components/Navigation'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function StrategyThatDelivers() {
  return (
    <div>
      <Navigation variant="light" position="relative" />
      
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base/7 font-semibold text-driftwood-500">Strategic Facilitation</p>
                <h1 className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-daintree-500 sm:text-5xl">
                  Strategy that delivers
                </h1>
                <p className="mt-6 text-xl/8">
                  Turn strategic thinking into confident action through our Four Moves framework. 
                  No lengthy workshops or theoretical exercises—just practical tools that create immediate clarity and momentum.
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt="Actionable Strategy Framework"
              src="/strategy-loop-light.svg"
              className="w-full max-w-xl rounded-med"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 lg:max-w-lg">
                <p>
                  Most strategy facilitation stops at creating PowerPoint decks that gather dust. Our Four Moves framework 
                  bridges the gap between strategic thinking and real execution, giving leadership teams the clarity and 
                  confidence to act decisively.
                </p>
                <ul role="list" className="mt-8 space-y-8">
                  <li className="flex gap-x-3">
                    <span className="material-symbols-outlined icon-large text-driftwood-500 mt-1">stethoscope</span>
                    <span>
                      <strong className="font-semibold text-driftwood-500">1. Strategic Diagnosis.</strong> Get to the heart of 
                      what&apos;s really happening with your business. We cut through assumptions and surface the core challenges 
                      that matter most for your growth trajectory.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="material-symbols-outlined icon-large text-driftwood-500 mt-1">mountain_flag</span>
                    <span>
                      <strong className="font-semibold text-driftwood-500">2. Direction Setting.</strong> Transform insights into 
                      clear strategic direction. We help leadership teams align on where to focus energy and resources for 
                      maximum impact.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="material-symbols-outlined icon-large text-driftwood-500 mt-1">conversion_path</span>
                    <span>
                      <strong className="font-semibold text-driftwood-500">3. Implementation Design.</strong> Bridge strategy and 
                      execution with practical roadmaps. We design the systems, processes, and team structures needed to 
                      turn strategy into reality.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  The Go & See principle ensures strategies stay connected to reality. We build in regular check-ins and 
                  course corrections, keeping your team responsive to market feedback and emerging opportunities.
                </p>
                <h2 className="mt-16 text-2xl font-display font-bold tracking-tight text-daintree-500">From Strategy to Action</h2>
                <p className="mt-6">
                  Every engagement produces three key deliverables: a Strategic Clarity Document that captures the essential 
                  insights, an Implementation Roadmap with clear next steps, and ongoing Advisory Support to ensure momentum 
                  continues. You get strategy that actually delivers results.
                </p>
                
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-display font-semibold text-daintree-500 mb-3">Ready to get started?</h3>
                  <p className="text-gray-600 mb-4">
                    Begin with our rapid &quot;Sniff Test&quot; - half a day of expert analysis that reveals strategic blind spots 
                    and confirms your instincts.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="/contact"
                      className="rounded-md bg-mulberry-500 px-4 py-2 text-sm font-semibold text-white hover:bg-mulberry-400"
                    >
                      Start with Sniff Test
                    </a>
                    <a
                      href="/how-we-work-v3"
                      className="rounded-md bg-daintree-500 px-4 py-2 text-sm font-semibold text-white hover:bg-daintree-400"
                    >
                      See How We Work
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}