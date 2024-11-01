'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import { countdownTime } from '@/store/countdownTime'
import useProduct from '@/hooks/useProduct';

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const Deal: React.FC<Props> = ({ data, start, limit }) => {
    const [timeLeft, setTimeLeft] = useState(countdownTime());

    const [products, isLoading] = useProduct();

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(countdownTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="tab-features-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex items-center justify-between gap-5 flex-wrap">
                        <div className="left flex items-center gap-6 gap-y-3 flex-wrap">
                            <div className="heading3">Deals of the day</div>
                        </div>
                        <Link href={'/shop/breadcrumb-img'} className='text-button text-[#fc8934] pb-1 border-b-2 border-[#fc8934]'>View All Deals</Link>
                    </div>

                    <div className="list-product show-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                        {products.slice(start, limit).map((prd, index) => (
                            <Product key={index} data={prd} type='grid' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deal