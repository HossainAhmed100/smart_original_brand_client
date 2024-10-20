'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import ShopBreadCrumb1 from '@/components/Shop/ShopBreadCrumb1'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'
import useProduct from '@/hooks/useProduct';

export default function BreadCrumb1() {
    const searchParams = useSearchParams()
    let [type,setType] = useState<string | null | undefined>()
    let datatype = searchParams.get('type')
    let gender = searchParams.get('gender')
    let category = searchParams.get('category')
    const [products, isLoading] = useProduct();
    useEffect(() => {
        setType(datatype);
    }, [datatype]);
    

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
            </div>
            <ShopBreadCrumb1 data={products} productPerPage={100} dataType={type} gender={gender} category={category} />
            <Footer />      
        </>
    )
}
