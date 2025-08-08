import Navigation from '@/components/Navigation'
import CallToAction from '@/components/CallToAction'

export default function CoreServices() {
    return (
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-driftwood-500">Core Services</h2>
                    <p className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                    Everything you need to turn vision into velocity
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-100">
                    Strategic clarity, rapid experimentation, and product advisory for scaling digital teams.
                    Each service designed to drive immediate value and confident action.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    <div className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-2xl font-display font-semibold tracking-tight mb-3 text-white">
                        <span className="material-symbols-outlined icon-large text-driftwood-500" aria-hidden="true">delivery_truck_speed</span>
                        Strategy that Delivers
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-100">
                        <p className="flex-auto">
                            Great products need direction before velocity. We help leaders imagine bold futures while finding practical paths forward.
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
                            Don't bet the farm on untested ideas. Keep learning cycles small and fast, find what works, and scale with confidence.
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
                        Product Advisory
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-100">
                        <p className="flex-auto">
                            Build a product-led operating model, get interim leadership, or product diligence on your deal flow. Understand what you've got, and how to grow it.
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
    )
}