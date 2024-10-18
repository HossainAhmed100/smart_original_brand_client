import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import SliderOne from '@/components/Slider/SliderOne'
import WhatNewOne from '@/components/Home1/WhatNewOne'
import productData from '@/data/Product.json'
import Collection from '@/components/Home1/Collection'
import Instagram from '@/components/Home1/Instagram'
import Footer from '@/components/Footer/Footer'
import TrendingNow from '@/components/Home1/TrendingNow'
import MenFashion from '@/components/Home1/MenFashion'
import WomenFashion from '@/components/Home1/WomenFashion'
import Deal from '@/components/Home1/Deal'
import ModalNewsletter from '@/components/Modal/ModalNewsletter'
import Banner from '@/components/Home1/Banner'
import FlashSale from '@/components/Home1/FlashSale'

export default function Home() {
  return (
    <>
      <TopNavOne props="style-one" slogan="আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন: +880 1975-859249" />
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-transparent" />
        <SliderOne />
      </div>
      <TrendingNow />
      <Deal data={productData} start={4} limit={8} />
      <WhatNewOne start={0} limit={4} />
      <Collection />
      <Banner />
      <MenFashion data={productData} start={0} limit={3} />
      <FlashSale />
      <WomenFashion data={productData} start={0} limit={3} />
      <Instagram />
      <Footer />
      <ModalNewsletter />
    </>
  )
}

