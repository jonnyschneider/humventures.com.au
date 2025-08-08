import Link from 'next/link'
import Navigation from '@/components/Navigation'
import CallToAction from '@/components/CallToAction'
import StatsSection from '@/components/StatsSection'
import CoreServices from '@/components/CoreServices';

export default function Home() {
  return (
    <div className="bg-daintree-700">
      <Navigation variant="dark" position="absolute" />

      <div className="relative isolate overflow-hidden pt-10">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(10%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-daintree-850 to-driftwood-200 opacity-25 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-5xl font-display font-semibold tracking-tight text-balance text-white sm:text-7xl">
                Strategic Clarity for Scaling Digital Product Teams
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-daintree-50 sm:text-xl/8">
                We help leaders get clarity, then make it happen.         
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="#services" className="text-sm/6 font-semibold text-white">
                  Core Services <span aria-hidden="true">→</span>
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
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-daintree-800 to-driftwood-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
      <div className="bg-daintree-700 py-24 sm:py-32">
        <CoreServices />
        <StatsSection 
          title="Different"
          subtitle="Real results from proven approaches to strategy, experimentation, and product development."
          variant="dark"
          stats={[
            {
              title: "Beyond the Agency",
              description: "We believe one-size-fits-none. That's why we create teams on-demand from a network of specialists, giving you the exact expertise you need to win."
            },
            {
              title: "The Expert Shortcut", 
              description: "We know the playbooks, but we don't let them slow us down. We cut through the noise and get to what matters, delivering tangible results fast."
            },
            {
              title: "Leave it better",
              description: "Our work isn't finished until your teams are stronger, smarter, and equipped to thrive long after we've gone."
            }
          ]}
        />
        <CallToAction className="mt-20" />
      </div>
    </div>
  );
}
