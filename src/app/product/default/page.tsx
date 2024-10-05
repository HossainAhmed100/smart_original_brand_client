'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import Default from '@/components/Product/Detail/Default';
import Footer from '@/components/Footer/Footer'
import useProduct from '@/hooks/useProduct';

const ProductDefault = () => {
    const searchParams = useSearchParams()
    let productId = searchParams.get('id')
    const [products, isLoading] = useProduct();
    if (productId === null) {
        productId = '1'
    }

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-white" />
                <BreadcrumbProduct data={products} productPage='default' productId={productId} />
            </div>
            <Default productId={productId} />
            <Footer />
        </>
    )
}

export default ProductDefault