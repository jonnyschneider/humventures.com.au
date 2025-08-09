'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, PhoneIcon, CalendarIcon } from '@heroicons/react/24/outline'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'How We Work', href: '/how-we-work' },
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

const contactOptions = [
  {
    name: 'Start with The Spark',
    description: 'Quick strategic assessment and immediate insights',
    href: '/contact',
    icon: EnvelopeIcon,
  },
  {
    name: 'Schedule a Call',
    description: 'Discuss your strategic challenges with our team',
    href: '/contact?type=call',
    icon: CalendarIcon,
  },
  {
    name: 'Visit Our Office',
    description: 'Meet us in person for deeper collaboration',
    href: '/contact?type=visit',
    icon: MapPinIcon,
  },
]

const callsToAction = [
  { name: 'Book consultation', href: '/contact', icon: PhoneIcon },
  { name: 'Send message', href: '/contact?type=message', icon: EnvelopeIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-daintree-500 border-b border-white/10">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">HumVentures</span>
            <img
              src="/images_static/Humble-Gold.svg"
              alt="HumVentures"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12 lg:items-center lg:justify-center lg:flex-1">
          <Popover className="relative isolate z-50">
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-serif font-medium text-white hover:text-daintree-100">
              Services
              <ChevronDownIcon aria-hidden="true" className="size-4" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="fixed left-0 right-0 bg-white shadow-lg transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in z-50"
              style={{ top: '80px' }}
            >
              {/* Presentational element for shadow */}
              <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-lg ring-1 ring-gray-900/5" />
              <div className="relative bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {servicesOptions.map((item) => (
                    <div key={item.name} className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50">
                      <div className="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-mulberry-600" />
                      </div>
                      <Link href={item.href} className="mt-6 block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 border-x border-gray-900/5">
                      <Link
                        href="/services"
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <EnvelopeIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        View all services
                      </Link>
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <PhoneIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        Discuss your needs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-serif font-medium text-white hover:text-daintree-100"
            >
              {item.name}
            </Link>
          ))}
          
          <Popover className="relative isolate z-50">
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-serif font-medium text-white hover:text-daintree-100">
              Contact
              <ChevronDownIcon aria-hidden="true" className="size-4" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="fixed left-0 right-0 bg-white shadow-lg transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in z-50"
              style={{ top: '80px' }}
            >
              {/* Presentational element for shadow */}
              <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-lg ring-1 ring-gray-900/5" />
              <div className="relative bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {contactOptions.map((item) => (
                    <div key={item.name} className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50">
                      <div className="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-mulberry-600" />
                      </div>
                      <Link href={item.href} className="mt-6 block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 border-x border-gray-900/5">
                      {callsToAction.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* Empty div to balance the layout */}
        </div>
      </nav>
      
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-daintree-500 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="p-6">
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
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-serif font-medium text-white hover:bg-daintree-400"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-serif font-semibold text-white border-t border-white/10 pt-6">
                    Contact Options
                  </div>
                  {contactOptions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-sm font-serif font-medium text-white hover:bg-daintree-400"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}