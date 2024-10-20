'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import { motion } from 'framer-motion'
import useProduct from '@/hooks/useProduct';
import usePrCategory from '@/hooks/useCategory';
import { ProductCategoryType } from '@/type/ProductCategoryType';

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const WomenFashion: React.FC<Props> = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>('Jacket');
    const [products, isLoading] = useProduct();
    const [prCategory] = usePrCategory();
    const handleTabClick = (type: string) => {
        setActiveTab(type);
    };

    const filteredProducts = products.filter((product: ProductType) => product.category === activeTab);

    return (
        <>
            <div className="tab-features-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex items-center justify-between gap-5 flex-wrap">
                        <div className="heading3">men{String.raw`'s`} Fashion</div>
                        <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl">
                            {prCategory.map((type: ProductCategoryType) => (
                                <div
                                    key={type.path}
                                    className={`tab-item relative text-secondary py-2 px-5 cursor-pointer duration-500 hover:text-black ${activeTab === type.path ? 'active' : ''}`}
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

                    <div className="list-product hide-product-sold min-h-[500px] grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                        <Link href={"/shop/breadcrumb1"} className="banner rounded-[20px] overflow-hidden relative flex items-center justify-center">
                            <div className="heading4 text-white text-center">Trouses For <br />Men</div>
                            <Image
                                src={'https://firebasestorage.googleapis.com/v0/b/smart-original-brand.appspot.com/o/lauoytImages%2F14.png?alt=media&token=68d06553-a50f-457f-9d72-08aababcac74'}
                                width={1000}
                                height={1000}
                                alt='banner13'
                                className='absolute top-0 left-0 w-full h-full object-cover z-[-1] duration-500'
                            />
                        </Link>
                        {filteredProducts.slice(start, limit).map((prd, index) => (
                            <Product key={index} data={prd} type='grid' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WomenFashion