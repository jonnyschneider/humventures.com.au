import CallToAction from '@/components/CallToAction';
import LogoCloud from '@/components/LogoCloud';
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
        <LogoCloud />
        <CallToAction />
      </div>
    </div>
    </div>
  );
}
