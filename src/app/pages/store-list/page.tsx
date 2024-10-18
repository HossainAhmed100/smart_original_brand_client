'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'

const StoreList = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
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