import CallToAction from '@/components/CallToAction'
import Navigation from '@/components/Navigation'

const productDiligenceFeatures = [
  {
    name: 'Context-driven Assessment',
    description: 'Unlike standardised rubrics, we combine domain learning with digital product expertise to understand your specific market dynamics and competitive positioning.',
    icon: 'psychology',
  },
  {
    name: 'Strategic Insights, Not Scores',
    description: 'Highly adaptive process laser-focused on insights that matter for your investment thesis. Strategic clarity on strengths and trade-offs rather than binary scores.',
    icon: 'insights',
  },
  {
    name: 'Buy and Sell Side Support',
    description: 'Whether you\'re acquiring or divesting, we support both sides of the transaction with complementary diligence expertise.',
    icon: 'handshake',
  },
]

const fractionalLeadershipFeatures = [
  {
    name: 'Strategic Product Direction',
    description: 'Set product vision and roadmap aligned with business objectives. Bridge executive strategy with team execution.',
    icon: 'flag',
  },
  {
    name: 'Product Capability Building',
    description: 'Build product management capability within your organization, developing skills and systems for sustained product excellence.',
    icon: 'school',
  },
  {
    name: 'End-to-end Product Operations',
    description: 'Manage complete product development lifecycle with effective strategy integration across your entire product operating model.',
    icon: 'settings',
  },
]

export default function ProductAdvisory() {
  return (
    <div>
      <Navigation variant="light" position="relative" />
      
      {/* Hero Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base/7 font-semibold text-driftwood-500">Product Advisory</p>
            <h1 className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-daintree-500 sm:text-5xl">
              Product Leadership when you need it most
            </h1>
            <p className="mt-6 text-lg/8 text-gray-700">
              Whether you need product evaluation for investment decisions or experienced leadership 
              to guide your product team, we provide the expertise to make confident product choices.
            </p>
          </div>
        </div>
      </div>

      {/* Product Diligence Section */}
      <div id="diligence" className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-driftwood-500">Due Diligence</h2>
                <p className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-daintree-500 sm:text-5xl">
                  Product Diligence
                </p>
                <p className="mt-6 text-lg/8 text-gray-700">
                  Context-driven product assessment that complements financial and technical diligence. 
                  Strategic insights on strengths and trade-offs—not binary scores.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {productDiligenceFeatures.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-driftwood-500">
                        <span className="material-symbols-outlined absolute top-1 left-1 text-driftwood-500" style={{fontSize: '20px'}} aria-hidden="true">
                          {feature.icon}
                        </span>
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              alt="Product Diligence Process"
              src="https://cdn.sanity.io/images/6i6wbquj/staging/fff04bd149caf18162c37d85211e92f1a44dda0c-595x471.svg"
              width={595}
              height={471}
              className="w-full max-w-lg py-3 rounded-md shadow-md ring-1 ring-gray-400/10 sm:max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </div>

      {/* Fractional Product Leadership Section */}
      <div id="fractional" className="overflow-hidden bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Customer Quote */}
            <div className="relative px-6 pt-16 pb-8 sm:pt-20 lg:px-8 lg:pt-32 text-white bg-daintree-500 rounded-lg
          ">
              <div className="mx-auto max-w-2xl lg:ml-0 lg:max-w-lg">
                <div className="inline-flex items-center justify-center mb-6">
                  <img
                    alt="Black Nova"
                    src="https://cdn.sanity.io/images/6i6wbquj/staging/7d7fa599ffbc4b256766e5911a0aa6b4dd1ae884-800x284.png"
                    width={200}
                    height={71}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                
                {/* Integrated Testimonial */}
                <div className="border-t border-white/20 pt-6">
                  <blockquote className="text-xl/7 text-white mb-4">
                    <p>
                      "We are extremely impressed, and feel comforted that the product strategy for our portfolio company is in very safe and capable hands."
                    </p>
                  </blockquote>
                  <div className="flex items-center gap-x-3">
                    <div className="text-sm">
                      <div className="font-semibold text-white">Jo Robyn</div>
                      <div className="text-gray-100">Operating Partner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pt-4 lg:pl-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-driftwood-500">Interim Leadership</h2>
                <p className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-daintree-500 sm:text-5xl">
                  Fractional Product Leadership
                </p>
                <p className="mt-6 text-lg/8 text-gray-700">
                  Experienced product leadership operating at every scale—from global tech to startups. 
                  20+ years across diverse domains with both consulting and senior leadership experience.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {fractionalLeadershipFeatures.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-driftwood-500">
                        <span className="material-symbols-outlined absolute top-1 left-1 text-driftwood-500" style={{fontSize: '20px'}} aria-hidden="true">
                          {feature.icon}
                        </span>
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  )
}