'use client'

import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative flex items-center justify-center gap-x-6 bg-mulberry-500 px-6 py-2.5 sm:px-3.5">
      <p className="text-sm/6 text-white text-center">
        <a href="https://www.thedecisionstack.com/workshops/">
          <strong className="font-semibold">Strategy That Works</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-1 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
            Join our November Workshop with Martin Erikkson in Sydney, Melbourne, or UK. Limited Early Bird Tix Selling Fast&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="absolute right-6 sm:right-3.5">
        <button type="button" onClick={() => setIsVisible(false)} className="-m-3 p-3 focus-visible:-outline-offset-4">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-white" />
        </button>
      </div>
    </div>
  )
}