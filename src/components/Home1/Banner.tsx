import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Banner = () => {
    return (
        <>
            <div className="banner-block style-one grid sm:grid-cols-2 gap-5 md:pt-20 pt-10">
                <Link href={'/shop/breadcrumb-img'} className="banner-item relative block overflow-hidden duration-500">
                    <div className="banner-img">
                        <Image
                            src={'https://firebasestorage.googleapis.com/v0/b/smart-original-brand.appspot.com/o/lauoytImages%2F1.png?alt=media&token=c1b9c2b2-3fba-4400-98cc-daf6497c7cb1'}
                            width={2000}
                            height={1300}
                            alt='banner1'
                            priority={true}
                            className='duration-1000'
                        />
                    </div>
                    <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <div className="heading2 text-[#8e013e] bg-white">Best Sellers</div>
                        <div className="text-button text-[#8e013e] relative inline-block pb-1 border-b-2 border-[#8e013e] duration-500 mt-2">Shop Now</div>
                    </div>
                </Link>
                <Link href={'/shop/breadcrumb-img'} className="banner-item relative block overflow-hidden duration-500">
                    <div className="banner-img">
                        <Image
                            src={'https://firebasestorage.googleapis.com/v0/b/smart-original-brand.appspot.com/o/lauoytImages%2FnewArriverls_54534.png?alt=media&token=ca1fcc4d-f525-44df-9e98-212166d575ca'}
                            width={2000}
                            height={1300}
                            alt='banner2'
                            priority={true}
                            className='duration-1000'
                        />
                    </div>
                    <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <div className="heading2 text-[#29323c] bg-white">New Arrivals</div>
                        <div className="text-button text-black relative inline-block pb-1 border-b-2 border-black duration-500 mt-2">Shop Now</div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Banner