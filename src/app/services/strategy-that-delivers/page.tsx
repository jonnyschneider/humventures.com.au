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
                  Great products need direction before velocity. We help leaders imagine bold futures while finding practical paths forward.
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
                   By combining ambitious thinking with deep product experience, we turn complex choices into confident action.
                   Whether you&apos;re scaling a successful product or transforming capabilities, we bring clarity to what&apos;s possible and what&apos;s next.
                </p>
                <ul role="list" className="mt-8 space-y-8">
                  <li className="flex gap-x-3">
                    <span className="material-symbols-outlined icon-large text-driftwood-500 mt-1">stethoscope</span>
                    <span>
                      <strong className="font-semibold text-driftwood-500">1. Diagnosis</strong> Get to the heart of 
                      what&apos;s really happening with your business. We cut through assumptions and surface the core challenges 
                      that matter most for your growth trajectory.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="material-symbols-outlined icon-large text-driftwood-500 mt-1">mountain_flag</span>
                    <span>
                      <strong className="font-semibold text-driftwood-500">2. Strategic Clarity.</strong> You have the vision, we build the conviction. 
                      We help leadership teams get aligned on the few right things that will deliver maximum impact, so you can focus energy and 
                      resources where they matter most.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="material-symbols-outlined icon-large text-driftwood-500 mt-1">conversion_path</span>
                    <span>
                      <strong className="font-semibold text-driftwood-500">3. Implementation Design.</strong> We connect strategy to action, 
                      bringing a product mindset to design the systems and operating model your teams need to move beyond planning and start 
                      moving, fast.
                    </span>
                  </li>
                </ul>
                <h2 className="mt-16 text-2xl font-display font-bold tracking-tight text-daintree-500">From Strategy to Action</h2>
                <p className="mt-8">
                      With a clear direction and an aligned operating model, we enter a virtuous loop of strategy and action. While <i>Good Strategy</i> is 
                      planned; <i>Successful Strategy</i> is refined in the field. For digital product innovation, we accelerate that process with 
                      validated learning and <a href="/services/rapid-experimentation" className="font-semibold text-mulberry-500 hover:text-mulberry-400">
                      Rapid Experimentation <span aria-hidden="true">→</span>
                  </a>           
                </p>
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-display font-semibold text-daintree-500 mb-3">Ready to get started?</h3>
                  <p className="text-gray-600 mb-4">
                    Begin with our rapid &quot;The Spark&quot; - half a day of expert analysis that reveals strategic blind spots 
                    and confirms your instincts.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="/contact"
                      className="rounded-md bg-mulberry-500 px-4 py-2 text-sm font-semibold text-white hover:bg-mulberry-400"
                    >
                      Start with The Spark
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