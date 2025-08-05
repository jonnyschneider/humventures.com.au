import Navigation from '@/components/Navigation'

const productDiligenceFeatures = [
  {
    name: 'Commercial Viability Assessment',
    description:
      'Deep dive into market size, competitive landscape, and revenue potential. We evaluate whether the opportunity is big enough to matter.',
    icon: 'trending_up',
  },
  {
    name: 'Customer Value Analysis',
    description: 'Rigorous assessment of customer pain points, willingness to pay, and product-market fit indicators.',
    icon: 'psychology',
  },
  {
    name: 'Technical Potential Review',
    description: 'Evaluation of technical feasibility, scalability constraints, and development risk factors.',
    icon: 'engineering',
  },
  {
    name: 'Team Capability Audit',
    description: 'Assessment of team skills, experience, and organizational readiness to execute the vision.',
    icon: 'groups',
  },
]

const fractionalLeadershipFeatures = [
  {
    name: 'Strategic Product Direction',
    description:
      'Set product vision and roadmap aligned with business objectives. Bridge executive strategy with team execution.',
    icon: 'flag',
  },
  {
    name: 'Team Development & Coaching',
    description: 'Mentor existing product managers and build product management capability within your organization.',
    icon: 'school',
  },
  {
    name: 'Process & Framework Implementation',
    description: 'Establish product development processes, experimentation frameworks, and decision-making systems.',
    icon: 'settings',
  },
  {
    name: 'Cross-functional Leadership',
    description: 'Lead product initiatives across engineering, design, marketing, and sales teams.',
    icon: 'hub',
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
              Expert product guidance when you need it most
            </h1>
            <p className="mt-6 text-lg/8 text-gray-700">
              Whether you need rigorous product evaluation for investment decisions or experienced leadership 
              to guide your product team, we provide the expertise to make confident product choices.
            </p>
          </div>
        </div>
      </div>

      {/* Product Diligence Section */}
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-driftwood-500">Due Diligence</h2>
                <p className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-daintree-500 sm:text-5xl">
                  Product Diligence
                </p>
                <p className="mt-6 text-lg/8 text-gray-700">
                  Expert evaluation for investment decisions across four critical dimensions. 
                  Get the clarity you need to make confident investment choices.
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
              src="/image.svg"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>

      {/* Fractional Product Leadership Section */}
      <div className="overflow-hidden bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <img
              alt="Fractional Product Leadership"
              src="/image.svg"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-mr-4 lg:-mr-0"
            />
            <div className="lg:pt-4 lg:pl-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-driftwood-500">Interim Leadership</h2>
                <p className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-daintree-500 sm:text-5xl">
                  Fractional Product Leadership
                </p>
                <p className="mt-6 text-lg/8 text-gray-700">
                  Experienced product leadership on demand. Bridge the gap between strategy and execution 
                  while building internal product capability.
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

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-display font-bold tracking-tight text-daintree-500 sm:text-4xl">
              Ready to get expert product guidance?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-gray-600">
              Start with our rapid "Sniff Test" to understand your product challenges and opportunities. 
              No lengthy proposals, just immediate insights.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-mulberry-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-mulberry-400"
              >
                Start with Sniff Test
              </a>
              <a
                href="/how-we-work-v3"
                className="text-sm/6 font-semibold text-daintree-500 hover:text-daintree-400"
              >
                See How We Work <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}