import React from 'react'
import SliderOne from '@/components/Slider/SliderOne'
import Collection from '@/components/Home1/Collection'
import Instagram from '@/components/Home1/Instagram'
import Footer from '@/components/Footer/Footer'
import TrendingNow from '@/components/Home1/TrendingNow'
import MenFashion from '@/components/Home1/MenFashion'
import WomenFashion from '@/components/Home1/WomenFashion'
import ModalNewsletter from '@/components/Modal/ModalNewsletter'
import Banner from '@/components/Home1/Banner'
import MenuFour from '@/components/Header/Menu/MenuFour'
import TabFeatures from '@/components/Home1/TabFeatures'
import TrendingProduct from '@/components/Home1/TrendingProduct'

export default function Home() {
  return (
  <>
    <div id="header" className='relative w-full'>
      <MenuFour props="bg-white" />
      <SliderOne />
    </div>
    <TrendingNow />
    <TrendingProduct start={10} limit={18} />
    <Collection />
    <TabFeatures start={0} limit={6} />
    <Banner />
    <MenFashion start={0} limit={3} />
    <WomenFashion start={0} limit={3} />
    <Instagram />
    <Footer />
    <ModalNewsletter />
  </>
  )
}

