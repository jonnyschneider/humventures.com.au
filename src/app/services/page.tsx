import Navigation from '@/components/Navigation'
import CallToAction from '@/components/CallToAction'

export default function Services() {
  return (
    <div className="bg-daintree-700">
      <Navigation variant="dark" position="relative" />
      
      <div className="bg-daintree-700 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-driftwood-500">Core Services</h2>
              <p className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                Everything you need to move from strategy to execution
              </p>
              <p className="mt-6 text-lg/8 text-daintree-50">
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
                  <dd className="mt-4 flex flex-auto flex-col text-base/7 text-daintree-50">
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
                  <dd className="mt-4 flex flex-auto flex-col text-base/7 text-daintree-50">
                    <p className="flex-auto">
                      Customer-led validation through fast learning cycles. 10+ years of proven framework
                      to design experiments, get data fast, and validate assumptions before big investments.
                    </p>
                    <p className="mt-6">
                      <a href="/services/rapid-experimentation" className="text-sm/6 font-semibold text-driftwood-500 hover:text-driftwood-400">
                        See results <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-2xl font-display font-semibold tracking-tight mb-3 text-white">
                    <span className="material-symbols-outlined icon-large text-driftwood-500" aria-hidden="true">assessment</span>
                    Product Diligence
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base/7 text-daintree-50">
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
        <CallToAction className="mt-20" />
      </div>
    </div>
  );
}
