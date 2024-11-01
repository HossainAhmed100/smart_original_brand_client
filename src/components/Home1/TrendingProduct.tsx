"use client";
import React from 'react'
import Product from '../Product/Product'
import useProduct from '@/hooks/useProduct';
import Loading from '../Other/Loading';
import Link from 'next/link';

interface Props {
    start: number;
    limit: number;
}

const TrendingProduct: React.FC<Props> = ({ start, limit }) => {
    const [products, isLoading] = useProduct();
    return (
        <>
            <div className="tab-features-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">
                        Trending Products
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        {isLoading && <Loading />}
                    </div>
                    <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                        {products.slice(start, limit).map((prd) => (
                            <Product key={prd._id} data={prd} type='grid' />
                        ))}
                    </div>
                    <div className='flex items-center justify-center w-full py-2'>
                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">View All Products</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingProduct