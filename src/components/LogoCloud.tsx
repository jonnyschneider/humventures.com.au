interface LogoCloudProps {
  className?: string
}

export default function LogoCloud({ className = '' }: LogoCloudProps) {
  return (
    
    
    <div className={`bg-white py-24 sm:py-32 ${className}`}>
              <div className="py-14 sm:py-22">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <p className="text-3xl font-display font-bold tracking-tight text-daintree-500 sm:text-5xl lg:text-balance">
                  Meet some of our clients
                </p>        
              </div>
            </div>
          </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="SavvyCal"
            src="https://cdn.sanity.io/images/6i6wbquj/staging/f17834bbf1472c17cfeb9dbc03fb9aa868f4fe6e-331x134.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Airtree"
            src="https://cdn.sanity.io/images/6i6wbquj/staging/100d20324a9864d80b069c55463abb8de609d450-1261x338.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Up"
            src="https://cdn.sanity.io/images/6i6wbquj/staging/7f29b99ffeb4dc6d86611266a438418c82e738b7-1000x1000.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 ew-full object-contain lg:col-span-1"
          />
          <img
            alt="Tuple"
            src="https://cdn.sanity.io/images/6i6wbquj/staging/349ef4e1c608f53ddb1948711aa7ad6cb7884203-325x129.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Statamic"
            src="https://cdn.sanity.io/images/6i6wbquj/staging/c6aa269b15aa5a8c1cfa2abfe74ef310733070f1-178x44.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  )
}