'use client'
import React from 'react'
import Image from 'next/image';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Benefit from '@/components/Home1/Benefit'
import Instagram from '@/components/Home1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

const AboutUs = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='About Us' subHeading='About Us' />
            </div>
            <div className='about font-bangla md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="heading3 text-center">I{String.raw`'m`} obsessed with the dress Pippa Middleton wore to her brother{String.raw`'s`} wedding.</div>
                                <div className="body1 text-center md:mt-7 mt-5">Kim Kardashian West needs no introduction. In the 14 years since she first graced our screens in Keeping Up With The Kardashians, she has built her KKW beauty empire, filmed her show, wrapped her show, become a billionaire, studied law, campaigned for the rights of death row inmates, travelled the world to attend events such as Paris Fashion Week, raised four children and launched her wildly successful shapewear brand SKIMS.</div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'https://firebasestorage.googleapis.com/v0/b/smart-original-brand.appspot.com/o/lauoytImages%2Fabout-us1.png?alt=media&token=72e28088-72dc-4d6b-9ca4-8e7d61a940a6'}
                                    width={2000}
                                    height={3000}
                                    alt='bg-img'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'https://firebasestorage.googleapis.com/v0/b/smart-original-brand.appspot.com/o/lauoytImages%2Fabout-us2.png?alt=media&token=ae0164c9-139a-4146-a0c3-970d27937ab2'}
                                    width={2000}
                                    height={3000}
                                    alt='bg-img'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'https://firebasestorage.googleapis.com/v0/b/smart-original-brand.appspot.com/o/lauoytImages%2Fabout-us3.png?alt=media&token=9c1a8f1d-da97-4738-be19-e258c010cabb'}
                                    width={2000}
                                    height={3000}
                                    alt='bg-img'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Benefit props="md:pt-20 pt-10" />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}

export default AboutUs