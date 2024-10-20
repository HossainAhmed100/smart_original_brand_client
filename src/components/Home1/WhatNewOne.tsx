'use client'

import React, { useState } from 'react'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import { motion } from 'framer-motion'
import useProduct from '@/hooks/useProduct'
import Loading from '../Other/Loading'
import usePrCategory from '@/hooks/useCategory'
import { ProductCategoryType } from '@/type/ProductCategoryType'

interface Props {
  start: number;
  limit: number;
}

const WhatNewOne: React.FC<Props> = ({ start, limit }) => {
  const [activeTab, setActiveTab] = useState<string>('T-Shirt');
  const [products, isLoading] = useProduct();
  const [prCategory] = usePrCategory();

  const handleTabClick = (type: string) => {
    setActiveTab(type);
  };

  // Explicitly define product type in filter function
  const filteredProducts = products.filter((product: ProductType) => product.category === activeTab);
  return (
    <>
      <div className="whate-new-block md:pt-20 pt-10">
        <div className="container">
          <div className="heading flex flex-col items-center text-center">
            <div className="heading3">What{String.raw`'s`} new</div>
            <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl mt-6">
              {prCategory.map((type: ProductCategoryType) => (
                <div
                  key={type.path}
                  className={`tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black ${activeTab === type.path ? 'active' : ''}`}
                  onClick={() => handleTabClick(type.path)}
                >
                  {activeTab === type.path && (
                    <motion.div layoutId='active-pill' className='absolute inset-0 rounded-2xl bg-white'></motion.div>
                  )}
                  <span className='relative text-button-uppercase z-[1]'>
                    {type.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full flex items-center justify-center'>
          {isLoading && <Loading />}
          </div>
          <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
            {filteredProducts.slice(start, limit).map((prd: ProductType, index: number) => (
              <Product data={prd} type='grid' key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatNewOne;
