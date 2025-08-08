import Navigation from '@/components/Navigation'
import LogoCloud from '@/components/LogoCloud'

export default function About() {
  return (
    <div>
      <Navigation variant="light" position="relative" />

      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-display font-semibold tracking-tight text-pretty text-daintree-500 sm:text-5xl">
                  Meet Jonny
                </h1>
                <p className="mt-6 text-xl/8 text-gray-700">
                  Jonny has a 20+ year career shipping customer value through strategic design and tech innovation at companies like ThoughtWorks, AWS, and NAB. Today, he helps leaders scale product success, advising VCs, scale-ups, and innovators in Australia.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            alt=""
            src="https://cdn.sanity.io/images/6i6wbquj/staging/a081617b87d720e8c0fb35f1c5e24fab7e94db0a-2000x1428.jpg"
            className="aspect-3/2 object-cover object-[30%] lg:aspect-auto lg:size-full"
          />
        </div>
      </div>
      <div id="clients"><LogoCloud /></div>
    </div>
  )
}
