import React from 'react'
import Image from 'next/image';
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFour from '@/components/Header/Menu/MenuFour'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'
import Link from 'next/link';

interface OurValuesCardProps {
  title: string;
  desc: string;
}

const AboutUs = () => {
  return (
    <>
      <div id="header" className='relative w-full'>
        <MenuFour props="bg-white" />
        <Breadcrumb heading='About Us' subHeading='About Us' />
      </div>
      <div className='about font-bangla md:pt-20 pt-10'>
        <div className="about-us-block">
          <div className="container">
            <div className="md:pb-20 pb-10">
              <Image 
                className='w-full cover rounded-lg shadow-lg' 
                width={1000} 
                height={1000} 
                src="https://firebasestorage.googleapis.com/v0/b/smart-original-brand.appspot.com/o/image%2Fabout-banner.jpg?alt=media&token=fed7abec-2e2a-4a0d-b09b-9bbf2ba4e592" 
                alt='About us Page Banner Image'
              />
            </div>
            <div className="text flex items-center justify-center">
              <div className="content w-full max-w-6xl text-start">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Smart Original Brand</h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Where style meets comfort and sustainability! Founded in 2000, our mission is to provide high-quality, fashion-forward clothing that empowers individuals to express their unique identities.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  At Smart Original Brand, we believe that fashion should be inclusive and accessible to everyone. Our collections are thoughtfully designed with a diverse range of styles, sizes, and price points, ensuring that every person can find something they love. We draw inspiration from global trends while maintaining a commitment to timeless elegance, allowing you to create a wardrobe that lasts.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <span className="font-semibold text-green-600">Sustainability</span> is at the heart of our brand. We strive to minimize our environmental impact by sourcing eco-friendly materials and implementing ethical production practices. Each piece is crafted with care, ensuring that you not only look good but also feel good about your choices.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Join us on our journey to redefine fashion. Explore our latest collections, find your perfect fit, and express yourself with confidence. Thank you for being a part of the Smart Original Brand family!
                </p>
              </div>
            </div>
            <div className="content w-full py-10 text-center">
              <h2 className='text-2xl font-semibold py-4 text-gray-800'>Our Values</h2>
              <ul className='list-none grid md:grid-cols-2 gap-6 text-left'>
                <li>
                  <OurValuesCard title="Quality" desc="We prioritize exceptional craftsmanship and materials." />
                </li>
                <li>
                  <OurValuesCard title="Inclusivity" desc="Fashion for all shapes, sizes, and styles." />
                </li>
                <li>
                  <OurValuesCard title="Sustainability" desc="Ethical practices for a better planet." />
                </li>
                <li>
                  <OurValuesCard title="Community" desc="We support local artisans and charities." />
                </li>
              </ul>
              <h3 className='text-lg font-medium py-6 text-gray-700'>
                Feel free to connect with us on social media or reach out with any questions. Happy shopping!
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

const OurValuesCard: React.FC<OurValuesCardProps> = ({ title, desc }) => {
  return (
    <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full p-6">
      <div className="flex items-center mb-4">
        <h5 className="text-slate-800 text-xl font-semibold">
          {title}
        </h5>
      </div>
      <p className="text-slate-600 leading-normal font-light">
        {desc}
      </p>
    </div>
  );
}

export default AboutUs;
