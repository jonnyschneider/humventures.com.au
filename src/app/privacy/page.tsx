import Navigation from '@/components/Navigation'

export default function PrivacyNotice() {
  return (
    <div>
      <Navigation variant="light" position="relative" />
      <div className="bg-white px-6 py-32 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl text-base/7 text-gray-700 dark:text-gray-300">
          <h1 className="text-4xl font-display font-semibold tracking-tight text-pretty text-daintree-500 sm:text-5xl">
            Privacy Notice
          </h1>
          <p className="text-xl/8 mt-8 font-bold">Last Updated: Dec. 2024</p>
          <p className="mt-6 text-xl/8">
            Humble Ventures Pty Ltd is committed to protecting your privacy and handling your personal information with care and transparency. We adhere to the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth).
          </p>
          <div className="mt-10 max-w-2xl text-gray-600 dark:text-gray-400">
            <p>
              This privacy policy explains how we collect, use, and protect your personal information when you interact with us, use our services, or visit our website.
            </p>
            
            <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
              What Personal Information Do We Collect?
            </h2>
            
            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-white">
              Information You Provide to Us
            </h3>
            <p className="mt-4">
              We collect personal information that you provide directly to us, including:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Name and contact details (email, phone number, address)</li>
              <li>Professional information (job title, company name, industry)</li>
              <li>Business requirements and objectives</li>
              <li>Survey responses and research participation data</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-white">
              Information We Collect Automatically
            </h3>
            <p className="mt-4">
              When you visit our website or use our digital services, we may automatically collect:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Website usage data (pages visited, time spent, interactions)</li>
              <li>Cookie data and analytics information</li>
              <li>Communication history and preferences</li>
            </ul>
            <p className="mt-4">
              This information is collected through industry-standard analytics and business tools that help us improve our services and your experience.
            </p>

            <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
              How We Use Your Personal Information
            </h2>
            <p className="mt-6">
              We use your personal information to:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Deliver our strategy and implementation advice services</li>
              <li>Conduct product innovation and customer research</li>
              <li>Provide you with information about our services</li>
              <li>Improve our service offerings and customer experience</li>
              <li>Maintain our business relationships and communications</li>
              <li>Meet our legal and regulatory obligations</li>
              <li>Process payments and maintain business records</li>
            </ul>

            <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
              Our Approach to Sensitive Information
            </h2>
            <p className="mt-6">
              We generally avoid collecting sensitive information (such as information about your health, religion, or political affiliations). However, in specific circumstances where it's necessary for our services (particularly in customer research), we may collect sensitive information with your explicit consent. This information will only be used for the specific purpose for which it was collected.
            </p>

            <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
              Security of Your Information
            </h2>
            <p className="mt-6">
              We are committed to ensuring that your information is secure. To prevent unauthorised access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
            </p>
            <p className="mt-6">
              While we implement appropriate security measures to protect your information, no internet-based system is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.
            </p>

            <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
              Sharing Your Information
            </h2>
            <p className="mt-6">
              We may share your personal information with:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Our team members who need it to provide our services</li>
              <li>Service providers who help us operate our business</li>
              <li>Third-party tools and platforms we use to deliver our services</li>
              <li>Other parties with your consent</li>
              <li>Where required by law</li>
            </ul>
            <p className="mt-6">
              We do not sell your personal information to third parties.
            </p>

            <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
              International Data Transfers
            </h2>
            <p className="mt-6">
              While we primarily operate in Australia, some of our service providers may store data internationally. When this occurs, we take steps to ensure these providers handle your information in accordance with Australian privacy laws and our privacy obligations.
            </p>

            <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
              Your Privacy Rights
            </h2>
            <p className="mt-6">
              You have the right to:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Access your personal information</li>
              <li>Request corrections to your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request deletion of your information (where appropriate)</li>
              <li>Complain about a privacy breach</li>
            </ul>

            <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
              How We Use Cookies
            </h2>
            <p className="mt-6">
              A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
            </p>
            <p className="mt-6">
              We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
            </p>
            <p className="mt-6">
              Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
            </p>
            <p className="mt-6">
              You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
            </p>

            <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
              Updates to This Policy
            </h2>
            <p className="mt-6">
              We may update this privacy policy from time to time. We encourage you to check this page from time to time for any significant changes. When we do make changes, we'll revise the 'last updated' date at the top of this page.
            </p>

            <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="mt-6">
              If you have questions about this privacy policy or how we handle your information, please contact us at:
            </p>
            <p className="mt-4 font-medium text-gray-900 dark:text-white">
              info@humventures.com.au
            </p>
            <p className="mt-6">
              This privacy policy explains our general practices. When we collect personal information for specific purposes (such as research studies), we may provide additional privacy information relevant to that collection.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}