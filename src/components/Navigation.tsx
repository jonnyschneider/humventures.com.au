'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, PhoneIcon, CalendarIcon } from '@heroicons/react/24/outline'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const navigation = [
  { name: 'How We Work', href: '/how-we-work'},
  { name: 'Results', href: '/results' },
  { name: 'Insights', href: '/insights' },
  { name: 'About', href: '/about' },
]

const servicesOptions = [
  {
    name: 'Strategic Clarity',
    description: 'Four Moves framework for strategic diagnosis and direction setting',
    href: '/services/strategy-that-delivers',
    icon: EnvelopeIcon,
  },
  {
    name: 'Rapid Experimentation',
    description: 'Fast learning cycles to validate assumptions and de-risk decisions',
    href: '/services/rapid-experimentation',
    icon: CalendarIcon,
  },
  {
    name: 'Product Diligence',
    description: 'Expert evaluation across commercial, customer, technical and team dimensions',
    href: '/services/product-advisory#diligence',
    icon: MapPinIcon,
  },
  {
    name: 'Interim Product Leadership',
    description: 'On-demand senior product expertise to bridge capability gaps',
    href: '/services/product-advisory#fractional',
    icon: PhoneIcon,
  },
]



interface NavigationProps {
  variant?: 'light' | 'dark'
  position?: 'absolute' | 'relative'
}

export default function Navigation({ variant = 'dark', position = 'absolute' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const isDark = variant === 'dark'
  const textColor = isDark ? 'text-white' : 'text-daintree-700'
  const mobileTextColor = isDark ? 'text-white' : 'text-gray-900'
  const mobileBg = isDark ? 'bg-daintree-700' : 'bg-white'
  
  return (
    <header className={`${position === 'absolute' ? 'absolute' : 'relative'} inset-x-0 top-0 z-50`}>
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Humble Ventures</span>
            <img
              src="/images_static/Humble-Gold.svg"
              alt="Humble Ventures"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:items-center lg:justify-center lg:flex-1">
          <Popover className="relative isolate z-50">
            <PopoverButton className={`inline-flex items-center gap-x-1 text-sm/6 font-semibold ${textColor}`}>
              Services
              <ChevronDownIcon aria-hidden="true" className="size-4" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="fixed left-0 right-0 bg-white shadow-md transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in z-50"
              style={{ top: '80px' }}
            >
              {/* Presentational element for shadow */}
              <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-md ring-1 ring-gray-900/5" />
              <div className="relative bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-5 lg:px-8 xl:gap-x-8">
                  {servicesOptions.map((item) => (
                    <div key={item.name} className="group relative rounded-lg p-3 text-sm/6 hover:bg-gray-50">
                      <Link href={item.href} className="block font-bold text-driftwood-500">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-driftwood-500">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex justify-center">
                      <Link
                        href="/services"
                        className="flex items-center justify-center p-3 text-sm/6 font-semibold text-white hover:bg-driftwood-400"
                      >
                        View all services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className={`text-sm/6 font-semibold ${textColor}`}>
              {item.name}
            </Link>
          ))}
          
          <Popover className="relative isolate z-50">
            <PopoverButton className={`inline-flex items-center gap-x-1 text-sm/6 font-semibold ${textColor}`}>
              Contact
              <ChevronDownIcon aria-hidden="true" className="size-4" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="fixed left-0 right-0 bg-white shadow-md transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in z-50"
              style={{ top: '80px' }}
            >
              {/* Presentational element for shadow */}
              <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-md ring-1 ring-gray-900/5" />
              <div className="relative bg-white">
                <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
                  <div className="flex justify-center items-center gap-8 text-sm/6 text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="inline-flex rounded">
                        <span className="material-symbols-outlined icon-medium text-driftwood-500">store</span>
                      </div>
                      <div>
                        <div className="font-bold text-daintree-500">Humble Studios</div>
                        <div>Brunswick West, VIC Australia 3055</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="inline-flex rounded">
                        <span className="material-symbols-outlined icon-medium text-driftwood-500">send</span>
                      </div>
                      <a href="mailto:hello@humventures.com.au" className="text-daintree-500 hover:text-daintree-600">
                        hello@humventures.com.au
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="inline-flex rounded">
                        <span className="material-symbols-outlined icon-medium text-driftwood-500">mobile</span>
                      </div>
                      <a href="tel:+61418690519" className="text-daintree-500 hover:text-daintree-600">
                        +61 418 690 519
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto ${mobileBg} p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10`}>
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">HumVentures</span>
              <img
                src="/images_static/Humble-Gold.svg"
                alt="HumVentures"
                className="h-6 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${mobileTextColor} hover:bg-white/5`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <div className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${mobileTextColor} border-t border-white/10 pt-6`}>
                  Services
                </div>
                {servicesOptions.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-sm/6 font-semibold ${mobileTextColor} hover:bg-white/5`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <div className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${mobileTextColor} border-t border-white/10 pt-6`}>
                  Contact
                </div>
                <div className="space-y-4 px-3 py-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined icon-medium text-driftwood-500">store</span>
                    <div>
                      <div className={`font-bold ${mobileTextColor}`}>Humble Studios</div>
                      <div className={`text-sm ${mobileTextColor} opacity-75`}>Brunswick West, VIC Australia 3055</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined icon-medium text-driftwood-500">send</span>
                    <a href="mailto:hello@humventures.com.au" className={`${mobileTextColor} hover:text-driftwood-500`}>
                      hello@humventures.com.au
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined icon-medium text-driftwood-500">mobile</span>
                    <a href="tel:+61418690519" className={`${mobileTextColor} hover:text-driftwood-500`}>
                      +61 418 690 519
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}