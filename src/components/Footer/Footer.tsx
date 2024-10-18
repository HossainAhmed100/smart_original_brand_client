import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
return (
<>
<div id="footer" className='footer'>
<div className="footer-main bg-surface">
<div className="container">
    <div className="content-footer py-[60px] flex justify-between flex-wrap gap-y-8">
        <div className="company-infor basis-1/4 max-lg:basis-full pr-7">
            <Link href={'/'} className="logo">
                <Image src="https://firebasestorage.googleapis.com/v0/b/smart-original-brand.appspot.com/o/lauoytImages%2Flogoline.png?alt=media&token=9d80f142-37eb-48d5-be73-c37ee0dd2cfd" width={170} height={25} alt='brand logo'/>
            </Link>
            <div className='flex gap-3 mt-3'>
                <div className="flex flex-col ">
                    <span className="text-button">Mail:</span>
                    <span className="text-button mt-3">Phone:</span>
                    <span className="text-button mt-3">Address:</span>
                </div>
                <div className="flex flex-col ">
                    <span className=''>smartbd1425@gmail.com</span>
                    <span className='mt-3'>+880 1975-859249</span>
                    <span className='mt-3 pt-px'>Block #E, Holding #365/1, West Saheb Para, Mizmizi, Siddirganj, Narayanganj</span>
                </div>
            </div>
        </div>
        <div className="right-content flex flex-wrap gap-y-8 basis-3/4 max-lg:basis-full">
            <div className="list-nav flex justify-between basis-2/3 max-md:basis-full gap-4">
                <div className="item flex flex-col basis-1/3 ">
                    <div className="text-button-uppercase pb-3">Infomation</div>
                    <Link className='caption1 has-line-before duration-300 w-fit' href={'/pages/contact'}>Contact us</Link>
                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/my-account'}>My Account</Link>
                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/return-refund'}>Order  & Returns</Link>
                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/faqs'}>FAQs</Link>
                </div>
                <div className="item flex flex-col basis-1/3 ">
                    <div className="text-button-uppercase pb-3">Quick Shop</div>
                    <Link className='caption1 has-line-before duration-300 w-fit' href={'/shop/breadcrumb1'}>Women</Link>
                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/shop/breadcrumb1'}>Men</Link>
                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/shop/breadcrumb1'}>Clothes</Link>
                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/shop/breadcrumb1'}>Accessories</Link>
                </div>
                <div className="item flex flex-col basis-1/3 ">
                    <div className="text-button-uppercase pb-3">Customer Services</div>
                    <Link className='caption1 has-line-before duration-300 w-fit' href={'/pages/faqs'}>Orders FAQs</Link>
                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/faqs'}>Shipping</Link>
                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/return-refund'}>Privacy Policy</Link>
                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/return-refund'}>Return & Refund</Link>
                </div>
            </div>
            <div className="newsletter basis-1/3 pl-7 max-md:basis-full max-md:pl-0">
                <div className="text-button-uppercase">Newletter</div>
                <div className="caption1 mt-3">Sign up for our newsletter and get 10% off your first purchase</div>
                <div className="input-block w-full h-[52px] mt-4">
                    <form className='w-full h-full relative' action="post">
                        <input type="email" placeholder='Enter your e-mail' className='caption1 w-full h-full pl-4 pr-14 rounded-xl border border-line' required />
                        <button className='w-[44px] h-[44px] bg-[#fc8934] flex items-center justify-center rounded-xl absolute top-1 right-1'>
                            <Icon.ArrowRight size={24} color='#fff' />
                        </button>
                    </form>
                </div>
                <div className="list-social flex items-center gap-6 mt-4">
                    <Link href={'https://www.facebook.com/Smartoriginalbrand'} target='_blank'>
                        <div className="icon-facebook text-2xl text-[#fc8934]"></div>
                    </Link>
                    <Link href={'https://www.instagram.com/Smartoriginalbrand'} target='_blank'>
                        <div className="icon-instagram text-2xl text-[#fc8934]"></div>
                    </Link>
                    <Link href={'https://www.twitter.com/Smartoriginalbrand'} target='_blank'>
                        <div className="icon-twitter text-2xl text-[#fc8934]"></div>
                    </Link>
                    <Link href={'https://www.youtube.com/Smartoriginalbrand'} target='_blank'>
                        <div className="icon-youtube text-2xl text-[#fc8934]"></div>
                    </Link>
                    <Link href={'https://www.pinterest.com/Smartoriginalbrand'} target='_blank'>
                        <div className="icon-pinterest text-2xl text-[#fc8934]"></div>
                    </Link>
                </div>
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