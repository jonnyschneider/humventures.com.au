import Link from 'next/link'
import Navigation from '@/components/Navigation'
import CallToAction from '@/components/CallToAction'
import StatsSection from '@/components/StatsSection'

export default function Home() {
  return (
    <div className="bg-daintree-700">
      <Navigation variant="dark" position="absolute" />

      <div className="relative isolate overflow-hidden pt-10">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(10%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-daintree-850 to-driftwood-200 opacity-25 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-5xl font-display font-semibold tracking-tight text-balance text-white sm:text-7xl">
                Strategic Clarity for Scaling Digital Product Teams
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-daintree-50 sm:text-xl/8">
                We help SaaS leadership teams get strategic clarity through rapid expert evaluation, 
                then partner with them to execute what matters most.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="#services" className="text-sm/6 font-semibold text-white">
                  Core Services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-daintree-800 to-driftwood-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
      <div className="bg-daintree-700 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 id="services" className="text-base/7 font-semibold text-driftwood-500">Core Services</h2>
              <p className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                Everything you need to move from strategy to execution
              </p>
              <p className="mt-6 text-lg/8 text-gray-100">
                Strategy facilitation, rapid experimentation, and product diligence for growth-stage SaaS teams.
                Each service designed to drive immediate value and confident action.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-2xl font-display font-semibold tracking-tight mb-3 text-white">
                    <span className="material-symbols-outlined icon-large text-driftwood-500" aria-hidden="true">delivery_truck_speed</span>
                    Strategy that delivers
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-100">
                    <p className="flex-auto">
                      Turn strategic thinking into confident action through our Four Moves framework:
                      Strategic Diagnosis, Direction Setting, Implementation Design, and Go & See.
                    </p>
                    <p className="mt-6">
                      <a href="/services/strategy-that-delivers" className="text-sm/6 font-semibold text-driftwood-500 hover:text-driftwood-400">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-2xl font-display font-semibold tracking-tight mb-3 text-white">
                    <span className="material-symbols-outlined icon-large text-driftwood-500" aria-hidden="true">science</span>
                    Rapid Experimentation
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-100">
                    <p className="flex-auto">
                      Customer-led validation through fast learning cycles. 10+ years of proven framework
                      to design experiments, get data fast, and validate assumptions before big investments.
                    </p>
                    <p className="mt-6">
                      <a href="/services/rapid-experimentation" className="text-sm/6 font-semibold text-driftwood-500 hover:text-driftwood-400">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-2xl font-display font-semibold tracking-tight mb-3 text-white">
                    <span className="material-symbols-outlined icon-large text-driftwood-500" aria-hidden="true">assessment</span>
                    Product Diligence
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-100">
                    <p className="flex-auto">
                      Expert evaluation for investment decisions across four dimensions: Commercial viability,
                      Customer Value, Technical Potential, and Team Capability assessment.
                    </p>
                    <p className="mt-6">
                      <a href="/services/product-advisory" className="text-sm/6 font-semibold text-driftwood-500 hover:text-driftwood-400">
                        Get started <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              </dl>
          </div>
        </div>

        <StatsSection 
          title="Different"
          subtitle="Real results from proven approaches to strategy, experimentation, and product development."
          variant="dark"
          stats={[
            {
              title: "Beyond the Agency",
              description: "We believe one-size-fits-none. That's why we create teams on-demand from a network of specialists, giving you the exact expertise you need to win."
            },
            {
              title: "The Expert Shortcut", 
              description: "We know the playbooks, but we don't let them slow us down. We cut through the noise and get to what matters, delivering tangible results fast."
            },
            {
              title: "Leave it better",
              description: "Our work isn't finished until your teams are stronger, smarter, and equipped to thrive long after we've gone."
            }
          ]}
        />
        <CallToAction className="mt-20" />
      </div>
    </div>
  );
}
