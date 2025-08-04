import Navigation from '@/components/Navigation'

export default function Services() {
  return (
    <div>
      <Navigation variant="light" position="relative" />
      <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-display font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Strategy facilitation, rapid experimentation, and product diligence for growth-stage SaaS teams.
          </p>
        </div>

        {/* Three Core Services */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Strategy Facilitation */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900">
                  Strategy Facilitation
                </h3>
                <p className="text-gray-600 mt-2">
                  Turn strategic thinking into confident action
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Four Moves of Actionable Strategy</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Strategic Diagnosis - revealing opportunities and barriers</li>
                    <li>• Direction Setting - creating alignment around decisions</li>
                    <li>• Implementation Design - building execution foundation</li>
                    <li>• Go and See - transition from strategy to action</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Best For</h4>
                  <p className="text-sm text-gray-600">
                    Leadership teams with vision and conviction but struggling with execution momentum.
                    You know where you want to go but need clarity on the practical path forward.
                  </p>
                </div>
              </div>
            </div>

            {/* Rapid Experimentation */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900">
                  Rapid Experimentation
                </h3>
                <p className="text-gray-600 mt-2">
                  Customer-led validation through fast learning cycles
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Approach</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Simple goals and metrics that matter</li>
                    <li>• Focus attention on risky assumptions first</li>
                    <li>• Design experiments to learn the right things</li>
                    <li>• Get data fast, decide what to learn next</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Best For</h4>
                  <p className="text-sm text-gray-600">
                    Teams with strategic clarity who need to validate assumptions before big investments.
                    Perfect follow-on to strategy facilitation.
                  </p>
                </div>
                
                <div className="pt-2">
                  <div className="bg-green-50 p-3 rounded text-sm">
                    <strong className="text-green-800">10+ years experience</strong><br/>
                    <span className="text-green-700">Complete framework with proven materials and results</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Diligence */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                  <span className="text-xl">🔍</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900">
                  Product Diligence
                </h3>
                <p className="text-gray-600 mt-2">
                  Expert evaluation for investment decisions
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Four Evaluation Dimensions</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Commercial - investment thesis validation</li>
                    <li>• Customer Value - product-market fit assessment</li>
                    <li>• Technical Potential - architecture and scale readiness</li>
                    <li>• Team Capability - delivery and cultural resilience</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Best For</h4>
                  <p className="text-sm text-gray-600">
                    VCs and PE firms evaluating Australian SaaS companies. Complements technical DD
                    with product insights that shape future returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Different */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold tracking-tight text-gray-900">
              What Makes Us Different
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-display font-semibold text-gray-900 mb-3">
                Execution, Not Just Theory
              </h3>
              <p className="text-gray-600">
                We don't just theorize - we go deep quickly and lead with action. 
                Known for tackling the hardest problems with immediate impact.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-display font-semibold text-gray-900 mb-3">
                Strategy + Implementation
              </h3>
              <p className="text-gray-600">
                We bridge executive vision with team execution. Translate "top down" 
                strategy then get "in the trenches" to execute "bottom up" with teams.
              </p>
            </div>
          </div>
        </div>

        {/* Service Flow Integration */}
        <div className="mx-auto mt-20 max-w-4xl text-center">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
              Services Work Better Together
            </h3>
            <p className="text-gray-600 mb-6">
              Most successful engagements follow our proven service flows, starting with strategic clarity
              and moving to validated execution.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/how-we-work-v3"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
              >
                See How We Work
              </a>
              <a
                href="/contact"
                className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700"
              >
                Start with Sniff Test
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
