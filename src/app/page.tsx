export default function Home() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-serif font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Empowering Human Potential
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-serif">
            We partner with visionaries and organizations to unlock human potential through strategic ventures, 
            innovation frameworks, and purposeful growth initiatives.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-serif font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Get started
            </a>
            <a href="/about" className="text-sm font-serif font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
