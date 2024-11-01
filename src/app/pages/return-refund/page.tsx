import MenuFour from '@/components/Header/Menu/MenuFour'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'
import Link from 'next/link';

export const metadata = {
    title: 'Return and Refund Page | Smart Original Brand Online Shop',
    description: 'Smart Original Brand Online Shop',
  }
export default function ReturnAndRefund() {
return (
  <>
    <div id="header" className='relative w-full'>
      <MenuFour props="bg-white" />
      <Breadcrumb heading='Return and Refund' subHeading='Policy' />
    </div>
    <div className="container mx-auto font-bangla max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">রিটার্ন এন্ড রিফান্ড পলিসি</h1>
      <p className="mb-8 text-gray-500">
      ১.  ত্রুটিপূর্ণ অথবা ভুল পণ্য পেলে পণ্য হাতে পাওয়ার ০৩ (তিন) কার্যদিবসের মধ্যে জানাতে হবে। নিচের যেকোন উপায়ে যোগাযোগ করে একটি গুগল ফর্ম পূরণ করতে হবে।
      </p>
      <p className="mb-8 text-gray-500">
      ২. আনবক্সিং-এর সময় ভিডিও করতে হবে যা প্রডাক্ট মিসিং বা ড্যামেজের প্রমাণ হিসেবে উপস্থাপন করতে পারেন।
      </p>
      <p className="mb-8 text-gray-500">
      ৩. ত্রুটিবিহীন পণ্যের এক্সচেঞ্জ করার ক্ষেত্রে ডেলিভারি চার্জ দ্বিগুণ হবে (প্রডাক্ট রিটার্ন নেয়া এবং পুনরায় নতুন পণ্য পাঠানোর জন্য)।
      </p>
      <p className="mb-8 text-gray-500">
      ৪. স্টক ক্লিয়ারেন্স অফারের ক্ষেত্রে রিটার্ন/এক্সচেঞ্জ পলিসি স্টকের উপর ডিপেন্ড করবে।
      </p>
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Return & Refund Policy</h1>
      <p className="mb-8 text-gray-500">
      1. Please contact us within 03 working days of receiving the parcel if there is any damaged or wrong product. Customer has to fill up a google form to get solution.
      </p>
      <p className="mb-8 text-gray-500">
      2.  Please keep record of unboxing the parcel with a video or picture which may be needed for any claim.
      </p>
      <p className="mb-8 text-gray-500">
      3. 2X delivery cost may be applicable for change of undamaged/right products.
      </p>
      <p className="mb-8 text-gray-500">
      4. Return & exchange policies are not applicable for stock clearance or special promotional offers. It will
      completely depend on stock.
      </p>
      <div className="space-y-8">
        <div className='flex gap-3 mt-3'>
          <div className="flex flex-col ">
            <span className="text-button">Mail:</span>
            <span className="text-button mt-3">Phone:</span>
            <span className="text-button mt-3">Facebook:</span>
          </div>
          <div className="flex flex-col ">
            <Link href="mailto:support@smartoriginalbrand.com" className=''>support@smartoriginalbrand.com</Link>
            <Link href="tel:+8809613660320" className='mt-3'>+880 9613-660320</Link>
            <Link target='_blank' href="https://www.facebook.com/Smartoriginalbrand/" className='mt-3 pt-px'>https://www.facebook.com/Smartoriginalbrand/</Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
)
}