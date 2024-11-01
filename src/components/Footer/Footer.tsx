import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SocialButtonTop from '../SocialButtonTop/SocialButtonTop';
import Logo from "@/assets/logos/logoline.png";

const Footer = () => {
  return (
  <>
  <div id="footer" className='footer'>
    <SocialButtonTop />
  <div className="footer-main bg-surface">
  <div className="container">
    <div className="content-footer py-[60px] flex justify-between flex-wrap gap-y-8">
      <div className="company-infor basis-1/4 max-lg:basis-full pr-7">
        <Link href={'/'} className="logo">
        <Image src={Logo} width={170} priority height={25} alt='brand logo'/>
        </Link>
        <div className='flex gap-3 mt-3'>
          <div className="flex flex-col ">
            <span className="text-button">Mail:</span>
            <span className="text-button mt-3">Phone:</span>
          </div>
          <div className="flex flex-col ">
            <Link href="mailto:support@smartoriginalbrand@gmail.com" className='text-sm'>support@smartoriginalbrand.com</Link>
            <Link href="tel:+8809613660320" className='mt-4'>+880 9613-660320</Link>
          </div>
        </div>
      </div>
      <div className="right-content flex flex-wrap gap-y-8 basis-3/4 max-lg:basis-full">
        <div className="list-nav flex justify-between basis-2/3 max-md:basis-full gap-4">
          <div className="item flex flex-col basis-1/3 ">
            <div className="text-button-uppercase pb-3">Infomation</div>
            <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/about'}>About us</Link>
            <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/contact'}>Contact us</Link>
            <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/my-account'}>My Account</Link>
          </div>
          <div className="item flex flex-col basis-1/3 ">
            <div className="text-button-uppercase pb-3">Quick Shop</div>
            <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/shop/breadcrumb-img'}>Men</Link>
            <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/shop/breadcrumb-img'}>Kids</Link>
            <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/shop/breadcrumb-img'}>Women</Link>
          </div>
          <div className="item flex flex-col basis-1/3 ">
            <div className="text-button-uppercase pb-3">Customer Services</div>
            <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/faqs'}>FAQs</Link>
            <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/faqs'}>Orders FAQs</Link>
            <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/return-refund'}>Return & Refund</Link>
          </div>
        </div>
        <div className="newsletter basis-1/3 pl-7 max-md:basis-full max-md:pl-0">
          <div className="text-button-uppercase">Store Location</div>
          <div className="caption1 mt-3">Block #E, Holding #365/1, <br/> West Saheb Para, Mizmizi,  <br/>Siddirganj, Narayanganj</div>
        </div>
      </div>
    </div>
    <div className="footer-bottom py-3 flex items-center justify-between gap-5 max-lg:justify-center max-lg:flex-col border-t border-line">
      <div className="w-full">
        <div className="copyright caption1 w-full text-center text-secondary">©2024 OSSP - One Stop Service Provider. All Rights Reserved.</div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </>
  )
}

export default Footer