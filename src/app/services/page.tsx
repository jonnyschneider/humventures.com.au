import Navigation from '@/components/Navigation'
import CallToAction from '@/components/CallToAction'
import CoreServices from '@/components/CoreServices'

export default function Services() {
  return (
    <div className="bg-daintree-700">
      <Navigation variant="dark" position="relative" />
        <div className="bg-daintree-700 py-24 sm:py-32">
          <CoreServices />
        </div>
        <CallToAction />
    </div>
  );
}
