'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import MenuFour from '@/components/Header/Menu/MenuFour'
import ShopBreadCrumbImg from '@/components/Shop/ShopBreadCrumbImg';
import Footer from '@/components/Footer/Footer'
import useProduct from '@/hooks/useProduct';

export default function BreadcrumbImg() {
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
      <div id="header" className='relative w-full'>
        <MenuFour props="bg-white" />
      </div>
      <ShopBreadCrumbImg data={products} productPerPage={100} dataType={type} gender={gender} category={category} />
      <Footer />
    </>
  )
}
