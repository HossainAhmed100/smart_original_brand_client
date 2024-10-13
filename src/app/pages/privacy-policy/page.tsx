import Link from 'next/link';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Privacy Policy Page | Smart Original Brand Online Shop',
  description: 'Smart Original Brand Online Shop',
}

export default function PrivacyPolicyPage() {
    return (
      <>
      <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
        <div id="header" className='relative w-full'>
          <MenuOne props="bg-transparent" />
          <Breadcrumb heading='Privacy Policy' subHeading='Policy' />
        </div>
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <p className="mt-4 text-gray-500">
              At Smart Original Brand E-Commerce, we are committed to protecting the privacy and security of your personal information.
              This privacy policy explains how we collect, use, and safeguard your data.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">What information do we collect?</h2>
            <p className="mt-4 text-gray-500">
              We collect the following personal information from you:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Billing information (e.g., credit card details)</li>
              <li>Shipping address</li>
              <li>Order history</li>
              <li>Any other information you provide to us</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">How do we use your information?</h2>
            <p className="mt-4 text-gray-500">
              We use your personal information for the following purposes:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>To process and fulfill your orders</li>
              <li>To provide customer support and respond to your inquiries</li>
              <li>To personalize your shopping experience</li>
              <li>To improve our products and services</li>
              <li>To send you marketing communications (if you have opted in)</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Who do we share your information with?</h2>
            <p className="mt-4 text-gray-500">
              We may share your personal information with the following third parties:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>Payment processors to handle your financial transactions</li>
              <li>Shipping carriers to deliver your orders</li>
              <li>
                Third-party service providers who assist us in operating our business (e.g., web hosting, analytics,
                customer support)
              </li>
              <li>
                Law enforcement agencies or other governmental entities, if required by law or to protect our rights
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">How do we protect your information?</h2>
            <p className="mt-4 text-gray-500">
              We take the security of your personal information seriously. We use a variety of security measures to
              protect your data, including:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>Encryption of sensitive data during transmission and storage</li>
              <li>Secure servers and firewalls to prevent unauthorized access to our systems</li>
              <li>Regular security audits and updates to our systems and procedures</li>
              <li>
                Strict access controls and employee training to ensure only authorized personnel can access your
                information
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Your rights and choices</h2>
            <p className="mt-4 text-gray-500">
              You have the following rights regarding your personal information:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>Access: You can request a copy of the personal information we hold about you.</li>
              <li>
                Correction: You can request that we correct any inaccurate or incomplete personal information we hold
                about you.
              </li>
              <li>Deletion: You can request that we delete your personal information, subject to certain exceptions.</li>
              <li>Opt-out: You can opt-out of receiving marketing communications from us at any time.</li>
            </ul>
            <p className="mt-4 text-gray-500">
              If you have any questions or concerns about our privacy practices, please contact us at{" "}
              <Link href="/contact" className="text-blue-500 hover:underline">
                smartoriginalbrand@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
      </>
    )
  }