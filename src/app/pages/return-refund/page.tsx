import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'

export const metadata = {
    title: 'Return and Refund Page | Smart Original Brand Online Shop',
    description: 'Smart Original Brand Online Shop',
  }
  export default function ReturnAndRefund() {
      return (
        <>
        <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
          <div id="header" className='relative w-full'>
            <MenuOne props="bg-transparent" />
            <Breadcrumb heading='Return and Refund' subHeading='Policy' />
          </div>
        <div className="container mx-auto font-bangla max-w-4xl px-4 py-12 md:px-6 md:py-16">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">রিটার্ন এন্ড রিফান্ড পলিসি</h1>
          <p className="mb-8 text-gray-500">
          ১. ত্রুটিপূর্ ণঅথবা ভুল পর্য পপলল পর্য হালে পাওয়ার ০৩ (তেন) কার্ ণতিবলের মলযয জানালে হলব। তনলের
            পর্লকান উপালয় পর্াগালর্াগ কলর একটি গুগল ফম ণপূরর্ করলে হলব।
          </p>
          <p className="mb-8 text-gray-500">
          ২. আনবক্সিং-এর েময় তভতিও করলে হলব র্া প্রিাক্ট তমতেিং বা িযালমলজর প্রমার্ তহলেলব উপস্থাপন করলে
          পালরন।
          </p>
          <p className="mb-8 text-gray-500">
          ৩. ত্রুটিতবহীন পলর্যর এসলেঞ্জ করার পেলে পিতলভাতর োজণতিগুর্ হলব (প্রিাক্ট তরিান ণপনয়া এবিং পুনরায়
            নেুন পর্য পাঠালনার জনয)।
          </p>
          <p className="mb-8 text-gray-500">
          ৪. স্টক তিয়ালরন্স অফালরর পেলে তরিান ণ/এসলেঞ্জ পতলতে স্টলকর উপর তিলপন্ড করলব।
          </p>
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Return & Refund Policy</h1>
          <p className="mb-8 text-gray-500">
          1. Please contact us within 03 working days of receiving the parcel if there is any damaged or wrong
product. Customer has to fill up a google form to get solution.
          </p>
          <p className="mb-8 text-gray-500">
          2. Please keep record of unboxing the parcel with a video or picture which may be needed for any claim
          </p>
          <p className="mb-8 text-gray-500">
          3. 2X delivery cost may be applicable for change of undamaged/right products.

          </p>
          <p className="mb-8 text-gray-500">
          4. Return & exchange policies are not applicable for stock clearance or special promotional offers. It will
completely depend on stockhttps://www.facebook.com/Smartoriginalbrand/
          </p>
          <div className="space-y-8">
          <div className='flex gap-3 mt-3'>
                <div className="flex flex-col ">
                    <span className="text-button">Mail:</span>
                    <span className="text-button mt-3">Phone:</span>
                    <span className="text-button mt-3">Facebook:</span>
                </div>
                <div className="flex flex-col ">
                    <span className=''>smartbd1425@gmail.com</span>
                    <span className='mt-3'>+880 1975-859249</span>
                    <span className='mt-3 pt-px'>https://www.facebook.com/Smartoriginalbrand/</span>
                </div>
            </div>
          </div>
        </div>
        <Footer />
        </>
      )
    }