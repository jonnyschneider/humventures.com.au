import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Navigation variant="dark" position="absolute" />

      <div className="relative isolate overflow-hidden pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-5xl font-display font-semibold tracking-tight text-balance text-white sm:text-7xl">
                Strategic Clarity for Growth-Stage SaaS Teams
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                We help SaaS leadership teams get strategic clarity through rapid expert evaluation, 
                then partner with them to execute what matters most.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Start with The Spark
                </Link>
                <Link href="/how-we-work-v3" className="text-sm/6 font-semibold text-white">
                  How we work <span aria-hidden="true">→</span>
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
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>

      {/* Value proposition section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-driftwood-500">Expert Evaluation</h2>
            <p className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-daintree-500 sm:text-5xl lg:text-balance">
              Everything starts with understanding what matters
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Every engagement begins with our rapid &quot;The Spark&quot; - expert evaluation that reveals 
              strategic blind spots and confirms your instincts in half a day.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-display font-semibold text-daintree-500">
                  <span className="material-symbols-outlined text-driftwood-500 text-xl" aria-hidden="true">search_insights</span>
                  Expert Evaluation
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">
                    Rapid &quot;The Spark&quot; assessment that reveals strategic blind spots and hidden opportunities 
                    in half a day.
                  </p>
                  <p className="mt-6">
                    <Link href="/how-we-work-v3" className="text-sm/6 font-semibold text-driftwood-500 hover:text-driftwood-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-display font-semibold text-daintree-500">
                  <span className="material-symbols-outlined text-driftwood-500 text-xl" aria-hidden="true">lightbulb</span>
                  Strategic Clarity
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">
                    Turn complex challenges into clear direction through proven strategy facilitation 
                    for leadership teams.
                  </p>
                  <p className="mt-6">
                    <Link href="/how-we-work-v3" className="text-sm/6 font-semibold text-driftwood-500 hover:text-driftwood-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-display font-semibold text-daintree-500">
                  <span className="material-symbols-outlined text-driftwood-500 text-xl" aria-hidden="true">rocket_launch</span>
                  Execution Partnership
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">
                    Stay engaged to execute what matters most through rapid experimentation 
                    and ongoing advisory.
                  </p>
                  <p className="mt-6">
                    <Link href="/results" className="text-sm/6 font-semibold text-driftwood-500 hover:text-driftwood-600">
                      See results <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
