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
                  Customer-led validation through fast learning cycles. 10+ years of proven framework 
                  to design experiments, get data fast, and validate assumptions before big investments.
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div className="w-full max-w-xl rounded-xl bg-gray-50 shadow-sm ring-1 ring-gray-400/10 p-8">
              <h3 className="text-xl font-display font-semibold text-daintree-500 mb-4">Speed of Customer Learning</h3>
              <p className="text-gray-600 mb-6 text-sm">
                The fastest way to reduce risk is to reduce the cost of experimentation. 
                Instead of building features and hoping customers want them, we design 
                cheap tests that generate real customer insights in days, not months.
              </p>
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="monday"
              >
                <AccordionItem value="monday" className="border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-daintree-500">
                    Monday: Decide what to learn
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
                    Tuesday: Design experiments to learn the right things
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
                    Wednesday: Test with customer
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
                    Thursday: Get the data, understand what it says
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3 text-balance text-gray-600 text-sm">
                    <p>
                      Gather results and customer feedback. Look for both quantitative data 
                      and qualitative insights that reveal the 'why' behind customer behavior.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="friday" className="border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-daintree-500">
                    Friday: Decide what to learn next
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3 text-balance text-gray-600 text-sm">
                    <p>
                      Analyze results and decide: pivot, persevere, or kill the idea. 
                      Use insights to design next week's experiments.
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
                  Most teams waste months building features customers don't want. Our rapid experimentation framework 
                  helps you validate assumptions fast, with real customer data, before making big investments.
                </p>
                <ul role="list" className="mt-8 space-y-8">
                  <li className="flex gap-x-3">
                    <span className="material-symbols-outlined icon-large text-driftwood-500 mt-1">science</span>
                    <span>
                      <strong className="font-semibold text-driftwood-500">Hypothesis Design.</strong> Turn business assumptions 
                      into testable hypotheses. We help you identify the riskiest assumptions and design cheap, fast experiments 
                      to validate or invalidate them.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="material-symbols-outlined icon-large text-driftwood-500 mt-1">speed</span>
                    <span>
                      <strong className="font-semibold text-driftwood-500">Fast Learning Cycles.</strong> Get meaningful data 
                      in days, not months. Our framework emphasizes speed and iteration, helping you learn what customers 
                      actually want before committing resources.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="material-symbols-outlined icon-large text-driftwood-500 mt-1">analytics</span>
                    <span>
                      <strong className="font-semibold text-driftwood-500">Data-Driven Decisions.</strong> Move beyond opinions 
                      and gut feelings. We help you design experiments that generate clear, actionable insights about customer 
                      behavior and market demand.
                    </span>
                  </li>
                </ul>
                
                <p className="mt-8">
                  Every experiment produces actionable insights that inform your next move. We help you interpret results, 
                  iterate on successful experiments, and kill ideas that don't work—fast. The goal is validated learning 
                  that de-risks your growth investments.
                </p>
                
                <h2 className="mt-16 text-2xl font-display font-bold tracking-tight text-daintree-500">From Experiment to Scale</h2>
                <p className="mt-6">
                  The interactive experiment guide in the sidebar shows our three core validation approaches. Each type addresses 
                  different risk areas and uses specific methods designed for speed and accuracy.
                </p>
                
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-display font-semibold text-daintree-500 mb-3">Ready to experiment?</h3>
                  <p className="text-gray-600 mb-4">
                    Start with our rapid "Sniff Test" to identify your riskiest assumptions, then design experiments 
                    to validate them quickly.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="/contact"
                      className="rounded-md bg-mulberry-500 px-4 py-2 text-sm font-semibold text-white hover:bg-mulberry-400"
                    >
                      Start Experimenting
                    </a>
                    <a
                      href="/results"
                      className="rounded-md bg-daintree-500 px-4 py-2 text-sm font-semibold text-white hover:bg-daintree-400"
                    >
                      See Results
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}