import Navigation from '@/components/Navigation'

export default function Resources() {
  return (
    <div>
      <Navigation variant="light" position="relative" />
      <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-display font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Resources
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Insights, tools, and the free e-book on Design Thinking, Lean, and Agile.
          </p>
        </div>

        {/* Featured Book */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                    ⭐⭐⭐⭐⭐ Published by O&apos;Reilly Media
                  </span>
                </div>
                <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                  Understanding Design Thinking, Lean, and Agile
                </h2>
                <p className="text-gray-600 mb-6">
                  This 70-page quick-read takes you through the mindsets, methods, and how to bring 
                  it all together when leading digital product teams. Succinct, light on theory, 
                  and packed with practical guidance based on applied learning from doing the work.
                </p>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700"
                  >
                    Download Free PDF
                  </a>
                  <a
                    href="#"
                    className="ml-4 inline-flex items-center text-sm font-semibold text-gray-900 hover:text-gray-600"
                  >
                    Read Chapter 1 Online <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-48 h-64 bg-gray-100 rounded-lg">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📖</div>
                    <div className="font-display font-semibold text-gray-700">Book Cover</div>
                    <div className="text-sm text-gray-500">70 pages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insights Section */}
        <div className="mx-auto mt-20 max-w-6xl">
          <h2 className="text-center text-3xl font-display font-semibold tracking-tight text-gray-900 mb-12">
            Insights & Case Studies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Phantm Case Study */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  Case Study
                </span>
              </div>
              <h3 className="text-lg font-display font-semibold text-gray-900 mb-3">
                How Phantm Turned Strategy into Action
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                From strategic clarity to customer validation in 3 days, leading to investment 
                funding within 12 weeks using the Decision Stack framework.
              </p>
              <a href="/results" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                Read the story <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* IAG Innovation */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">
                  Innovation
                </span>
              </div>
              <h3 className="text-lg font-display font-semibold text-gray-900 mb-3">
                Enterprise Innovation at Scale
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                How a major insurer achieved 90% faster time to market through rapid experimentation, 
                testing 20 ideas with 2,000+ customers.
              </p>
              <a href="/results" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                Read the story <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Up Bank Operations */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                  Operations
                </span>
              </div>
              <h3 className="text-lg font-display font-semibold text-gray-900 mb-3">
                Building Competitive Advantage
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                How Neobank Up maintained 100% brand whimsy with 0% compromise on customer 
                technology through effective product operations.
              </p>
              <a href="/results" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                Read the story <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tools & Frameworks */}
        <div className="mx-auto mt-20 max-w-4xl">
          <h2 className="text-center text-3xl font-display font-semibold tracking-tight text-gray-900 mb-12">
            Tools & Frameworks
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-display font-semibold text-gray-900 mb-3">
                Four Moves of Actionable Strategy
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Strategic diagnosis, direction setting, implementation design, and go-and-see validation. 
                The framework that turns strategic thinking into confident action.
              </p>
              <a href="/services" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-display font-semibold text-gray-900 mb-3">
                Rapid Experimentation System
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Complete framework with 10+ years of refinement. Simple goals, risky assumptions, 
                designed experiments, and fast learning cycles.
              </p>
              <a href="/services" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6">
              Get insights on strategic clarity and rapid execution for growth-stage SaaS teams.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="rounded-r-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
            Ready to Apply These Insights?
          </h3>
          <p className="text-gray-600 mb-6">
            Start with our rapid expert evaluation to identify what matters most for your team.
          </p>
          <a
            href="/contact"
            className="rounded-md bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Start with The Spark
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
