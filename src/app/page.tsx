import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import SliderOne from '@/components/Slider/SliderOne'
import WhatNewOne from '@/components/Home1/WhatNewOne'
import productData from '@/data/Product.json'
import Collection from '@/components/Home1/Collection'
import TabFeatures from '@/components/Home1/TabFeatures'
import Banner from '@/components/Home1/Banner'
import Benefit from '@/components/Home1/Benefit'
import testimonialData from '@/data/Testimonial.json'
import Testimonial from '@/components/Home1/Testimonial'
import Instagram from '@/components/Home1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'
import FlashSale from '@/components/Home1/FlashSale'
import SliderEleven from '@/components/Slider/SliderEleven'
import TrendingNow from '@/components/Home1/TrendingNow'
import MenFashion from '@/components/Home1/MenFashion'
import WomenFashion from '@/components/Home1/WomenFashion'
import Deal from '@/components/Home1/Deal'

export default function Home() {
  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-transparent" />
        <SliderOne />
      </div>
      <TrendingNow />
      <Deal data={productData} start={4} limit={8} />
      <WhatNewOne start={0} limit={4} />
      <Collection />
      <FlashSale />
      <Banner />
      <MenFashion data={productData} start={0} limit={3} />
      <SliderEleven />
      <WomenFashion data={productData} start={0} limit={3} />
      <Benefit props="md:py-20 py-10" />
      <Testimonial data={testimonialData} limit={6} />
      <Instagram />
      <Brand />
      <Footer />
    </>
  )
}

