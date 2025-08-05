import Navigation from '@/components/Navigation'

export default function About() {
  return (
    <div>
      <Navigation variant="light" position="relative" />
      <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-display font-semibold tracking-tight text-gray-900 sm:text-6xl">
            About
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Strategic expertise for growth-stage SaaS leadership teams.
          </p>
        </div>

        {/* Founder Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-semibold tracking-tight text-gray-900 mb-6">
                Jonny Schneider
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Author of &quot;Understanding Design Thinking, Lean, and Agile&quot; with a 20+ year career 
                shipping customer value through strategic design and tech innovation.
              </p>
              <p className="text-gray-600 mb-6">
                Previously at ThoughtWorks, AWS, and NAB, Jonny helps growth-stage SaaS leadership teams 
                get strategic clarity through rapid expert evaluation, then partners with them to execute 
                what matters most.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-display font-semibold text-gray-900 mb-3">
                  Current Positioning
                </h3>
                <blockquote className="text-gray-700 italic">
                  &quot;I help growth-stage SaaS leadership teams get strategic clarity, 
                  then stay to execute what matters most.&quot;
                </blockquote>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-6">
                What Makes This Different
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Execution Focus</h4>
                  <p className="text-sm text-gray-600">
                    Doesn&apos;t just theorize - goes deep quickly and leads with action. 
                    Known for tackling the hardest problems with immediate impact.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Actionable Strategy</h4>
                  <p className="text-sm text-gray-600">
                    Bridges executive vision with team execution. Translates &quot;top down&quot; 
                    strategy then gets &quot;in the trenches&quot; to execute &quot;bottom up&quot; with teams.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pattern Recognition</h4>
                  <p className="text-sm text-gray-600">
                    Demonstrates understanding across industries through observations, 
                    likely consequences, and friction points most teams have already tried.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mx-auto mt-20 max-w-6xl">
          <h2 className="text-center text-3xl font-display font-semibold tracking-tight text-gray-900 mb-12">
            Experience & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="font-display font-semibold text-gray-900 mb-3">
                Strategy Facilitation
              </h3>
              <p className="text-sm text-gray-600">
                Established tools and approaches for leadership teams. 
                Can be delivered with minimal prep when business context is understood.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="font-display font-semibold text-gray-900 mb-3">
                Rapid Experimentation
              </h3>
              <p className="text-sm text-gray-600">
                <strong>Most developed system:</strong> 10+ years experience, dozens of executions. 
                Complete framework with materials. Can &quot;airdrop&quot; and deliver impressive results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <span className="text-xl">🔍</span>
              </div>
              <h3 className="font-display font-semibold text-gray-900 mb-3">
                Product Diligence
              </h3>
              <p className="text-sm text-gray-600">
                Systematic approach with variety of tools and automation. 
                Scalable despite inherent uncertainty in assessment work.
              </p>
            </div>
          </div>
        </div>

        {/* Client Diversity */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
              Generalist Strength
            </h3>
            <p className="text-gray-600 mb-4">
              Recent clients span supply chain logistics, packaging sustainability, fintech, 
              energy infrastructure, eCommerce, and retail energy.
            </p>
            <p className="text-sm text-gray-500">
              Pattern recognition across industries provides unique perspective on what works 
              and what doesn&apos;t, regardless of domain specifics.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6">
            Every engagement begins with understanding your specific strategic challenges.
          </p>
          <a
            href="/contact"
            className="rounded-md bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Start with the Sniff Test
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
