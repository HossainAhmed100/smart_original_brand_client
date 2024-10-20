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
                            src={'https://firebasestorage.googleapis.com/v0/b/smart-original-brand.appspot.com/o/lauoytImages%2F1.png?alt=media&token=edc1f30e-5abe-46d9-94d2-7e2bc7ef7551'}
                            width={2000}
                            height={1300}
                            alt='banner1'
                            priority={true}
                            className='duration-1000'
                        />
                    </div>
                    <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <div className="heading2 text-[#c19c87] bg-white">Best Sellers</div>
                        <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">Shop Now</div>
                    </div>
                </Link>
                <Link href={'/shop/breadcrumb-img'} className="banner-item relative block overflow-hidden duration-500">
                    <div className="banner-img">
                        <Image
                            src={'https://firebasestorage.googleapis.com/v0/b/smart-original-brand.appspot.com/o/lauoytImages%2F2%20copy.png?alt=media&token=5b90d8a4-6902-41eb-b17e-37d3652a5bb3'}
                            width={2000}
                            height={1300}
                            alt='banner2'
                            priority={true}
                            className='duration-1000'
                        />
                    </div>
                    <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <div className="heading2 text-[#99a55e] bg-white">New Arrivals</div>
                        <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">Shop Now</div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Banner