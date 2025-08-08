const navigation = {
  solutions: [
    { name: 'Strategic Clarity', href: '/services/strategy-that-delivers' },
    { name: 'Rapid Experimentation', href: '/services/rapid-experimentation' },
    { name: 'Product Diligence', href: '/services/product-advisory#diligence' },
    { name: 'Interim Product Leadership', href: '/services/product-advisory#fractional' },
    { name: 'The Spark', href: '/services/start-with-the-spark' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'How We Work', href: '/how-we-work' },
    { name: 'Services', href: '/services' },
    { name: 'Results', href: '/results' },
    { name: 'Insights', href: '/insights' },
    { name: 'Privacy Notice', href: '/privacy' },
  ],
  ourwork: [
    { name: 'Clients', href: '/about#clients' },
    { name: 'Case Studies', href: '/results' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-daintree-700 text-white">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 text-daintree-50 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-white">Our Work</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.ourwork.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 text-daintree-50 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 text-daintree-50 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm/6 font-semibold text-white">Subscribe to our newsletter</h3>
            <p className="mt-2 text-sm/6 text-daintree-50">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full min-w-0 rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-daintree-100 sm:w-64 sm:text-sm/6 xl:w-full"
                suppressHydrationWarning
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-mulberry-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-mulberry-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mulberry-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="footer2_right-wrapper">
            <div className="w-layout-grid footer_acknowledgement-flags flex gap-x-4 mb-6">
              <a href="#" className="footer_acknowledgement-item w-inline-block">
                <div className="w-embed">
                  <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="15" width="44" height="15" fill="#CC0000"></rect>
                    <rect width="44" height="15" fill="black"></rect>
                    <circle cx="22" cy="15" r="7" fill="#FFFF00"></circle>
                  </svg>
                </div>
              </a>
              <a href="#" className="footer_acknowledgement-item w-inline-block">
                <div className="w-embed">
                  <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="24" width="44" height="6" fill="#009966"></rect>
                    <rect y="6" width="44" height="18" fill="#000099"></rect>
                    <rect width="44" height="6" fill="#009966"></rect>
                    <rect y="5.25" width="44" height="1.5" fill="black"></rect>
                    <rect y="23.25" width="44" height="1.5" fill="black"></rect>
                    <rect width="44" height="30" fill="url(#pattern0)"></rect>
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0" transform="translate(-0.0113636) scale(0.00200535 0.00294118)"></use>
                      </pattern>
                      <image id="image0" width="510" height="340" href="data:image/png;base64,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"></image>
                    </defs>
                  </svg>
                </div>
              </a>
            </div>
            <div className="w-layout-grid footer_acknowledgement-statement">
              <p className="text-size-small text-color-alternate text-sm/6 text-daintree-50">
                Humble Ventures acknowledges the Traditional Owners of Country throughout Australia and their connections to land, sea and community. We pay our respect to their elders past and present and extend that respect to all Aboriginal and Torres Strait Islander peoples today.
              </p>
            </div>
          </div>
          <p className="mt-8 text-sm/6 text-daintree-50 text-center">
            &copy; 2025 HumVentures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}