'use client'

import { useState } from 'react'
import { useStatsigClient } from '@statsig/react-bindings'

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
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const { client } = useStatsigClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const formData = new FormData()
      formData.append('fields[email]', email)
      
      const response = await fetch('https://assets.mailerlite.com/jsonp/667516/forms/103498605209322846/subscribe', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // MailerLite doesn't allow CORS, but form will still work
      })
      
      // Since we can't read the response due to CORS, assume success
      setStatus('success')
      setMessage('Thanks for subscribing! Check your email to confirm.')
      
      // Simple newsletter tracking
      client.logEvent('newsletter_signup', email.split('@')[1] || 'unknown')
      
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

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
            <h3 className="text-sm/6 font-semibold text-white">Subscribe to our Humble Opinions newsletter</h3>
            <p className="mt-2 text-sm/6 text-daintree-50">
              No fluff or cruft, just good stuff, once a month.
            </p>
            {status === 'success' ? (
              <div className="mt-6">
                <div className="rounded-md bg-green-500/10 p-4 border border-green-500/20">
                  <p className="text-sm text-green-400">{message}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 sm:flex sm:max-w-md">
                <label htmlFor="email-newsletter" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-newsletter"
                  type="email"
                  required
                  maxLength={256}
                  placeholder="Enter your email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full min-w-0 rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-daintree-100 sm:w-64 sm:text-sm/6 xl:w-full disabled:opacity-50"
                  suppressHydrationWarning
                />
                <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex w-full items-center justify-center rounded-md bg-mulberry-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-mulberry-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mulberry-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {status === 'error' && (
                  <div className="mt-2 sm:ml-4">
                    <p className="text-sm text-red-400">{message}</p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="footer2_right-wrapper">
            <div className="w-layout-grid footer_acknowledgement-flags flex gap-x-4 mb-6">
              <a href="#" className="footer_acknowledgement-item w-inline-block">
                <img src="https://cdn.sanity.io/images/6i6wbquj/staging/3829ce84e20567275d34d8ed8a09b6ba937ea7fc-432x216.svg" alt="Aboriginal Flag" width="44" height="30" />
              </a>
              <a href="#" className="footer_acknowledgement-item w-inline-block">
                <img src="https://cdn.sanity.io/images/6i6wbquj/staging/2c208096c03802ba6c0c8ed11939368e86b900e7-10x6.svg" alt="Torres Strait Islander Flag" width="44" height="30" />
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