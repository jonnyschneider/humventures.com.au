interface StatItem {
  title: string
  description: string
}

interface StatsSectionProps {
  title: string
  subtitle: string
  stats: StatItem[]
  variant?: 'dark' | 'light'
  className?: string
}

export default function StatsSection({ 
  title, 
  subtitle, 
  stats, 
  variant = 'dark',
  className = '' 
}: StatsSectionProps) {
  const isDark = variant === 'dark'
  const titleColor = isDark ? 'text-white' : 'text-gray-900'
  const subtitleColor = isDark ? 'text-gray-300' : 'text-gray-600'
  const cardBg = isDark ? 'bg-white/10 backdrop-blur' : 'bg-gray-50'
  const cardTextColor = isDark ? 'text-white' : 'text-gray-900'
  const cardDescColor = isDark ? 'text-white' : 'text-gray-600'

  return (
    <div className={`mx-auto mt-20 max-w-7xl px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="text-center">
          <h2 className={`text-4xl font-display font-semibold tracking-tight text-balance sm:text-5xl ${titleColor}`}>
            {title}
          </h2>
          <p className={`mt-4 text-lg/8 ${subtitleColor}`}>
            {subtitle}
          </p>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
          {stats?.map((stat, index) => (
            <div key={index} className={`flex flex-col p-8 ${cardBg}`}>
              <dt className={`text-sm/6 ${cardDescColor}`}>{stat.description}</dt>
              <dd className={`order-first text-xl mb-4 font-display font-semibold tracking-tight ${cardTextColor}`}>
                {stat.title}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}