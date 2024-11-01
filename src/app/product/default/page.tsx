'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation';
import MenuFour from '@/components/Header/Menu/MenuFour'
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
    <div id="header" className='relative w-full'>
      <MenuFour props="bg-white" />
      <BreadcrumbProduct data={products} productPage='default' productId={productId} />
    </div>
    <Default productId={productId} />
    <Footer />
  </>
  )
}

export default ProductDefault