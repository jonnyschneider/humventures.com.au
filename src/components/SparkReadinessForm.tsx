'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, CheckIcon } from '@heroicons/react/24/outline'

interface FormData {
  situation: string[]
  challenge: string[]
  timeline: string[]
  role: string
  email: string
  additionalInfo: string
}

const situationOptions = [
  "We're facing a major strategic decision (M&A, platform choice, buy vs build)",
  "We're scaling successfully but hitting new problems we haven't solved before",
  "We need experienced product/tech leadership but aren't ready for a permanent hire",
  "We need to get aligned as a leadership team on strategy and execution"
]

const challengeOptions = [
  "Strategy isn't translating into results fast enough",
  "Teams aren't executing at the pace/quality we need",
  "Too many priorities competing for attention",
  "Missing critical capabilities to achieve our goals"
]

const timelineOptions = [
  "Investment/funding milestone",
  "M&A activity (buying or being bought)",
  "Market/competitive pressure",
  "Internal capability constraints"
]

const roleOptions = [
  "CEO/Founder",
  "COO/CPO/CTO",
  "Head of Product/Digital/Tech",
  "PE Partner/Board Member"
]

export default function SparkReadinessForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    situation: [],
    challenge: [],
    timeline: [],
    role: '',
    email: '',
    additionalInfo: ''
  })

  const steps = [
    {
      title: "Which situation sounds most like yours?",
      field: 'situation' as keyof FormData,
      options: situationOptions,
      multiple: true
    },
    {
      title: "What's the underlying challenge?",
      field: 'challenge' as keyof FormData,
      options: challengeOptions,
      multiple: true
    },
    {
      title: "What's driving the timeline?",
      field: 'timeline' as keyof FormData,
      options: timelineOptions,
      multiple: true
    },
    {
      title: "What's your role?",
      field: 'role' as keyof FormData,
      options: roleOptions,
      multiple: false
    }
  ]

  const handleOptionSelect = (field: keyof FormData, value: string, isMultiple: boolean) => {
    if (isMultiple) {
      setFormData(prev => {
        const currentValues = prev[field] as string[]
        const isSelected = currentValues.includes(value)
        const newValues = isSelected 
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value]
        return { ...prev, [field]: newValues }
      })
    } else {
      setFormData(prev => ({ ...prev, [field]: value }))
      
      // Auto-advance for single choice questions (role)
      if (currentStep < steps.length - 1) {
        setTimeout(() => setCurrentStep(currentStep + 1), 300)
      } else {
        setTimeout(() => setCurrentStep(currentStep + 1), 300)
      }
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    try {
      // TODO: Replace with your actual submission logic
      const response = await fetch('/api/spark-readiness', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      // Handle error (show toast, etc.)
    } finally {
      setIsSubmitting(false)
    }
  }

  const canGoNext = () => {
    if (currentStep < steps.length) {
      const currentStep_data = steps[currentStep]
      if (!currentStep_data) return false
      
      const fieldValue = formData[currentStep_data.field]
      
      if (currentStep_data.multiple) {
        return Array.isArray(fieldValue) && fieldValue.length > 0
      } else {
        return fieldValue !== ''
      }
    }
    if (currentStep === steps.length) {
      return formData.email !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    }
    return false
  }

  const goNext = () => {
    if (currentStep < steps.length + 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const goPrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <CheckIcon className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">Thank you!</h3>
          <p className="mt-2 text-sm text-gray-600">
            We've received your Spark Readiness Check. We'll review your responses and get back to you within 24 hours with next steps.
          </p>
          <p className="mt-4 text-sm text-daintree-600 font-medium">
            In the meantime, feel free to <a href="mailto:hello@humventures.com.au" className="underline">reach out directly</a> if you have any questions.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Spark Readiness Check</h3>
          <span className="text-sm text-gray-500">
            {currentStep + 1} of {steps.length + 1}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-driftwood-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / (steps.length + 1)) * 100}%` }}
          />
        </div>
      </div>

      {/* Multiple Choice Steps */}
      {currentStep < steps.length && (
        <div className="space-y-6">
          <div className="mb-6">
            <h4 className="text-xl font-medium text-gray-900 mb-2">
              {steps[currentStep].title}
            </h4>
            {steps[currentStep].multiple && (
              <p className="text-sm text-gray-600">Select all that apply</p>
            )}
          </div>
          <div className="space-y-3">
            {steps[currentStep].options.map((option, index) => {
              const currentFieldValue = formData[steps[currentStep].field]
              const isSelected = steps[currentStep].multiple 
                ? Array.isArray(currentFieldValue) && currentFieldValue.includes(option)
                : currentFieldValue === option
              
              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(steps[currentStep].field, option, steps[currentStep].multiple)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:border-driftwood-300 ${
                    isSelected
                      ? 'border-driftwood-500 bg-driftwood-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded border-2 transition-all duration-200 ${
                      isSelected 
                        ? 'bg-driftwood-500 border-driftwood-500' 
                        : 'border-gray-300'
                    }`}>
                      {isSelected && (
                        <CheckIcon className="h-3 w-3 text-white m-0.5" />
                      )}
                    </div>
                    <span className="text-sm text-gray-700">{option}</span>
                  </div>
                </button>
              )
            })}
          </div>
          
          {steps[currentStep].multiple && (
            <div className="flex justify-end mt-6">
              <button
                onClick={goNext}
                disabled={!canGoNext()}
                className={`flex items-center px-6 py-2 text-sm font-medium rounded-md ${
                  canGoNext()
                    ? 'bg-driftwood-500 text-white hover:bg-driftwood-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue
                <ChevronRightIcon className="h-4 w-4 ml-1" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Contact Information Step */}
      {currentStep === steps.length && (
        <div className="space-y-6">
          <h4 className="text-xl font-medium text-gray-900 mb-6">
            Contact Information
          </h4>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-driftwood-500 focus:border-driftwood-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                Anything else we should know? (optional)
              </label>
              <textarea
                id="additionalInfo"
                rows={4}
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-driftwood-500 focus:border-driftwood-500"
                placeholder="Additional context that might help us prepare..."
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={goPrevious}
          disabled={currentStep === 0}
          className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
            currentStep === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          <ChevronLeftIcon className="h-4 w-4 mr-1" />
          Previous
        </button>

        {currentStep < steps.length ? (
          // Only show Next button for single-choice questions (role) or hide for multi-choice
          !steps[currentStep]?.multiple && (
            <button
              onClick={goNext}
              disabled={!canGoNext()}
              className={`flex items-center px-6 py-2 text-sm font-medium rounded-md ${
                canGoNext()
                  ? 'bg-driftwood-500 text-white hover:bg-driftwood-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next
              <ChevronRightIcon className="h-4 w-4 ml-1" />
            </button>
          )
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canGoNext() || isSubmitting}
            className={`px-6 py-2 text-sm font-medium rounded-md ${
              canGoNext() && !isSubmitting
                ? 'bg-mulberry-600 text-white hover:bg-mulberry-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        )}
      </div>
    </div>
  )
}