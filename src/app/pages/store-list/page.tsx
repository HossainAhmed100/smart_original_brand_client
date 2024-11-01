'use client'
import React from 'react'
import MenuFour from '@/components/Header/Menu/MenuFour'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'

const StoreList = () => {
  return (
    <>
      <div id="header" className='relative w-full'>
        <MenuFour props="bg-white" />
        <Breadcrumb heading='Store list' subHeading='Store list' />
      </div>
      <div className='store-list md:py-20 py-10'>
        <div className="container">
            
        </div>
      </div>
      <Footer />
    </>
  )
}

export default StoreList