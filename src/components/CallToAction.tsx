interface CallToActionProps {
  variant?: 'default' | 'white'
  className?: string
}

export default function CallToAction({ variant = 'default', className = '' }: CallToActionProps) {
  const bgClass = variant === 'white' ? 'bg-white' : 'bg-white'
  const headingClass = variant === 'white' ? 'text-daintree-500' : 'text-daintree-500'
  const textClass = variant === 'white' ? 'text-gray-900' : 'text-gray-900'
  const primaryLinkClass = variant === 'white' 
    ? 'text-sm/6 font-semibold text-daintree-500 hover:text-daintree-400'
    : 'text-sm/6 font-semibold text-daintree-500 hover:text-daintree-400'

  return (
    <div className={`${bgClass} py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-display font-bold tracking-tight ${headingClass} sm:text-4xl`}>
            Spark into action
          </h2>
          <p className={`mx-auto mt-6 max-w-xl text-lg/8 ${textClass}`}>
            Zap challenges and power-up opportunities. 
            It starts with <span className="font-display font-bold tracking-tight">The Spark</span><span className="material-symbols-outlined text-driftwood-500 text-xl align-super" aria-hidden="true">bolt</span>
            No lengthy proposals, just immediate insights.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-mulberry-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-mulberry-400"
            >
              Start with The Spark
            </a>
            <a
              href="/how-we-work-v3"
              className={primaryLinkClass}
            >
              See How We Work <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}