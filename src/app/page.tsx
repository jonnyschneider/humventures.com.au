export default function Home() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-display font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Strategic Clarity for Growth-Stage SaaS Teams
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We help SaaS leadership teams get strategic clarity through rapid expert evaluation, 
            then partner with them to execute what matters most.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Start with the Sniff Test
            </a>
            <a href="/how-we-work" className="text-sm font-semibold leading-6 text-gray-900">
              How we work <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        
        {/* Value proposition section */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-display font-semibold leading-7 text-gray-900">
                Expert Evaluation
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Rapid "Sniff Test" assessment that reveals strategic blind spots and hidden opportunities 
                  in half a day.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-display font-semibold leading-7 text-gray-900">
                Strategic Clarity
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Turn complex challenges into clear direction through proven strategy facilitation 
                  for leadership teams.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-display font-semibold leading-7 text-gray-900">
                Execution Partnership
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Stay engaged to execute what matters most through rapid experimentation 
                  and ongoing advisory.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
