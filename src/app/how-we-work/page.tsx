import Navigation from '@/components/Navigation'

export default function HowWeWork() {
  return (
    <div>
      <Navigation variant="light" position="relative" />
      <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-display font-semibold tracking-tight text-gray-900 sm:text-6xl">
            How We Work
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Two proven pathways from strategic clarity to execution results.
          </p>
        </div>

        {/* Sniff Test Introduction */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-display font-semibold tracking-tight text-gray-900">
              Start with the &quot;Sniff Test&quot;
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Every engagement begins with our rapid expert evaluation - half a day of focused analysis 
              that reveals strategic blind spots and confirms your instincts.
            </p>
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-display font-bold text-gray-900">$4,950</div>
                  <div className="text-sm text-gray-600">Perceived Value</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-green-600">&lt;$1,000</div>
                  <div className="text-sm text-gray-600">Your Investment</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Expert evaluation + leadership interviews + strategic insights write-up + prioritized focus areas
              </div>
            </div>
          </div>
        </div>

        {/* Service Flows */}
        <div className="mx-auto mt-20 max-w-6xl">
          <h2 className="text-center text-3xl font-display font-semibold tracking-tight text-gray-900 mb-16">
            Two Service Flows
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Flow 1: Growth-Stage SaaS */}
            <div className="relative">
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
                  Growth-Stage SaaS Teams
                </h3>
                <p className="text-gray-600 mb-6">
                  For leadership teams scaling from ~120+ employees, $5-35M ARR, 
                  facing the &quot;tipping point&quot; where existing approaches aren&apos;t scaling.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">&quot;Sniff Test&quot;</h4>
                      <p className="text-sm text-gray-600">Rapid expert evaluation of strategic challenges</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-blue-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Strategy Facilitation</h4>
                      <p className="text-sm text-gray-600">Leadership team alignment and clear direction setting</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-blue-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Rapid Experimentation</h4>
                      <p className="text-sm text-gray-600">Validate strategy through fast customer learning cycles</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-green-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Anchor Retainer</h4>
                      <p className="text-sm text-gray-600">Ongoing partnership or interim CPTO role</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flow 2: PE-Backed */}
            <div className="relative">
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
                  PE-Backed Companies
                </h3>
                <p className="text-gray-600 mb-6">
                  For private equity firms and portfolio companies needing expert product insights 
                  that complement traditional technical and commercial diligence.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-purple-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Product Diligence</h4>
                      <p className="text-sm text-gray-600">Four-lens evaluation of product potential and scaling readiness</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-purple-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Post-Deal Strategy</h4>
                      <p className="text-sm text-gray-600">Leadership facilitation for portfolio company strategic alignment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-green-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fractional Advisory</h4>
                      <p className="text-sm text-gray-600">Ongoing retainer for operating model and growth initiatives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Pattern Recognition */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-display font-semibold text-gray-900 mb-4 text-center">
              The Most Common Pattern We See
            </h3>
            <blockquote className="text-lg italic text-gray-700 text-center">
              &quot;You left the strategy offsite believing it was crystal clear and you&apos;re all on the same page. 
              By half-quarter, product, sales, and marketing all believe they&apos;re talking about the same thing, 
              but in fact sales is promising things that don&apos;t exist and aren&apos;t on the roadmap, Product is 
              obsessed about a detail that doesn&apos;t matter at this scale, and go to market teams are confused 
              about how to communicate the mess.&quot;
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <a
            href="/contact"
            className="rounded-md bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Start with the Sniff Test
          </a>
          <p className="mt-4 text-sm text-gray-600">
            Half a day of expert analysis. Less than $1,000. Strategic insights that matter.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
