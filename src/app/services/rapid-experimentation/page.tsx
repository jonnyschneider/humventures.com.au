import CallToAction from '@/components/CallToAction'
import Navigation from '@/components/Navigation'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function RapidExperimentation() {
  return (
    <div>
      <Navigation variant="light" position="relative" />
      
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base/7 font-semibold text-driftwood-500">Customer Validation</p>
                <h1 className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-daintree-500 sm:text-5xl">
                  Rapid Experimentation
                </h1>
                <p className="mt-6 text-xl/8 text-gray-700">
                  Customer-led validation through fast learning cycles. Get the data you need to make confident decisions before big investments
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div className="w-full max-w-xl rounded-xl bg-gray-50 shadow-sm ring-1 ring-gray-400/10 p-8">
              <h3 className="text-xl font-display font-semibold text-daintree-500 mb-4">Building a Learning Culture</h3>
              <p className="mb-6 text-sm">
                The cost of experimentation is lower than ever, yet more experiments don&apos;t guarantee more success. 
                We help you build a culture of experimentation where the goal isn&apos;t to prove you&apos;re right, but to discover what&apos;s right. 
                By building wisdom with your teams, week after week, you can turn assumptions into confident decisions faster.
              </p>
              <p className="mb-6 text-sm">
                Whether continuous and ongoing, or in short, intensive bursts, the steps to de-risking your ideas and generating validated learning are the same. Here&apos;s how it works:
              </p>
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="monday"
              >
                <AccordionItem value="monday" className="border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-daintree-500">
                    Decide what to learn
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3 text-balance text-gray-600 text-sm">
                    <p>
                      Start the week by identifying your riskiest assumptions. What needs to be true 
                      for your idea to succeed? Design specific, testable hypotheses.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="tuesday" className="border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-daintree-500">
                    Design experiments to learn the right things
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3 text-balance text-gray-600 text-sm">
                    <p>
                      Create the simplest possible test to validate your hypothesis. Focus on 
                      speed and cost-efficiency over perfection.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="wednesday" className="border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-daintree-500">
                    Test with customer
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3 text-balance text-gray-600 text-sm">
                    <p>
                      Launch your experiment to real customers. Keep it simple, measure what matters, 
                      and resist the urge to perfect before testing.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="thursday" className="border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-daintree-500">
                    Get the data, understand what it says
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3 text-balance text-gray-600 text-sm">
                    <p>
                      Gather results and customer feedback. Look for both quantitative data 
                      and qualitative insights that reveal the &apos;why&apos; behind customer behavior.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="friday" className="border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-daintree-500">
                    Decide what to learn next
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3 text-balance text-gray-600 text-sm">
                    <p>
                      Analyze results and decide: pivot, persevere, or kill the idea. 
                      Use insights to design next week&apos;s experiments.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 lg:max-w-lg">
                <p>
                  Most teams waste months building features customers don&apos;t want. Our rapid experimentation framework 
                  helps you validate assumptions fast, with real customer data, before making big investments.
                </p>
                <ul role="list" className="mt-8 space-y-8">
                  <li className="flex gap-x-3">
                    <span className="material-symbols-outlined icon-large text-driftwood-500 mt-1">science</span>
                    <span>
                      <strong className="font-bold text-driftwood-500">De-risk Your Assumptions.</strong> Turn business assumptions 
                      into testable hypotheses. We help you identify the risky assumptions and design cheap, fast experiments 
                      that deliver validated learning at the speed of decision making.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="material-symbols-outlined icon-large text-driftwood-500 mt-1">speed</span>
                    <span>
                      <strong className="font-bold text-driftwood-500">Fast Learning Cycles.</strong> When speed matters, get meaningful 
                      data in days, not months. Learn what customers actually want, and measure behaviour before betting on gut feels alone.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="material-symbols-outlined icon-large text-driftwood-500 mt-1">analytics</span>
                    <span>
                      <strong className="font-bold text-driftwood-500">Data-informed Decisions.</strong> Move beyond opinions and intuition. 
                      The right experiments generate clear, actionable insights for decisions you need to make.
                    </span>
                  </li>
                </ul>
                <h2 className="mt-16 text-2xl font-display font-bold tracking-tight text-daintree-500">From Action to Outcome</h2>
                <p className="mt-8">
                  Every experiment produces actionable insights that inform your next move. We help you interpret results, 
                  iterate on successful experiments, and kill ideas that don&apos;t work—fast. The goal is validated learning 
                  that de-risks your growth investments.
                </p>
                <div className="mt-10 flex items-right justify-right gap-x-6">
                  <a
                    href="/services/product-advisory"
                    className="rounded-md bg-mulberry-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-mulberry-400"
                  >
                    Go Product Advisory<span aria-hidden="true">→</span>
                  </a>
                </div>        
              </div>
            </div>
          </div>
        </div>
        <CallToAction /> 
      </div>
    </div>
  )
}