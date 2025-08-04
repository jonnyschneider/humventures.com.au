import React from 'react'
import Link from 'next/link'

interface BaseCardProps {
  className?: string
  children: React.ReactNode
}

interface ServiceCardProps extends BaseCardProps {
  variant: 'service'
  icon: string
  title: string
  subtitle: string
  description: string
  features: string[]
  bestFor: string
  highlight?: {
    title: string
    description: string
  }
}

interface ResultCardProps extends BaseCardProps {
  variant: 'result'
  logo: string
  company: string
  subtitle: string
  stats: Array<{
    value: string
    label: string
    color: 'blue' | 'green' | 'purple' | 'orange'
  }>
  description: string
  testimonial?: string
}

interface ResourceCardProps extends BaseCardProps {
  variant: 'resource'
  badge: {
    text: string
    color: 'blue' | 'green' | 'purple' | 'yellow'
  }
  title: string
  description: string
  link: {
    href: string
    text: string
  }
}

type CardProps = ServiceCardProps | ResultCardProps | ResourceCardProps

const colorClasses = {
  blue: 'bg-blue-50 text-blue-700 ring-blue-700/10',
  green: 'bg-green-50 text-green-700 ring-green-700/10',
  purple: 'bg-purple-50 text-purple-700 ring-purple-700/10',
  yellow: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
  orange: 'bg-orange-50 text-orange-700 ring-orange-700/10'
}

const statColors = {
  blue: 'text-blue-600',
  green: 'text-green-600',
  purple: 'text-purple-600',
  orange: 'text-orange-600'
}

const iconColors = {
  blue: 'bg-blue-100',
  green: 'bg-green-100',
  purple: 'bg-purple-100',
  orange: 'bg-orange-100'
}

export default function Card(props: CardProps) {
  const baseClasses = "bg-white p-8 rounded-lg border border-gray-200 shadow-sm"
  
  if (props.variant === 'service') {
    return (
      <div className={`${baseClasses} ${props.className || ''}`}>
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-12 h-12 ${iconColors.blue} rounded-lg mb-4`}>
            <span className="text-xl">{props.icon}</span>
          </div>
          <h3 className="text-xl font-display font-semibold text-gray-900">
            {props.title}
          </h3>
          <p className="text-gray-600 mt-2">
            {props.subtitle}
          </p>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">{props.description}</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {props.features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="pt-4 border-t border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2">Best For</h4>
            <p className="text-sm text-gray-600">
              {props.bestFor}
            </p>
          </div>
          
          {props.highlight && (
            <div className="pt-2">
              <div className="bg-green-50 p-3 rounded text-sm">
                <strong className="text-green-800">{props.highlight.title}</strong><br/>
                <span className="text-green-700">{props.highlight.description}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
  
  if (props.variant === 'result') {
    return (
      <div className={`${baseClasses} ${props.className || ''}`}>
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mb-4">
            <span className="text-2xl font-display font-bold text-gray-700">{props.logo}</span>
          </div>
          <h3 className="text-xl font-display font-semibold text-gray-900">
            {props.company}
          </h3>
          <p className="text-gray-600 text-sm">
            {props.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {props.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-2xl font-display font-bold ${statColors[stat.color]}`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <p className="text-sm text-gray-600">
          {props.description}
        </p>
        
        {props.testimonial && (
          <blockquote className="text-xs italic text-gray-500 border-l-2 border-gray-200 pl-3 mt-4">
            {props.testimonial}
          </blockquote>
        )}
      </div>
    )
  }
  
  if (props.variant === 'resource') {
    return (
      <div className={`${baseClasses} ${props.className || ''}`}>
        <div className="mb-4">
          <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${colorClasses[props.badge.color]}`}>
            {props.badge.text}
          </span>
        </div>
        <h3 className="text-lg font-display font-semibold text-gray-900 mb-3">
          {props.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {props.description}
        </p>
        <Link href={props.link.href} className="text-sm font-semibold text-blue-600 hover:text-blue-500">
          {props.link.text} <span aria-hidden="true">→</span>
        </Link>
      </div>
    )
  }
  
  return null
}