'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/hooks/useAxiosPublic';


const TrendingNow = () => {
    const router = useRouter()
    const axiosPublic = useAxiosPublic();
    const {data: categoryInfo = []} = useQuery({
        queryKey: ["categoryInfo"],
        queryFn: async () => {
            const res = await axiosPublic.get('/layout/category/');
            return res.data;
        },
        })

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className="trending-block style-nine md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Trending Category
                    </div>
                    <div className="list-trending section-swiper-navigation style-small-border mx-auto style-center style-outline md:mt-10 mt-6">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            
                            navigation
                            loop={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                                1290: {
                                    slidesPerView: 5,
                                    spaceBetween: 30,
                                },
                            }}
                            className='h-full'
                        >
                            
                            {
                                categoryInfo.map((item: any) => (
                            <SwiperSlide key={item._id}>
                                <div className="trending-item block relative cursor-pointer" onClick={() => handleTypeClick(item.path)}>
                                    <div className="bg-img rounded-2xl overflow-hidden">
                                        <Image
                                            src={item.imgUrl}
                                            width={1000}
                                            height={1000}
                                            alt={item.path}
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="trending-name bg-white absolute bottom-5 left-1/2 -translate-x-1/2 w-[140px] h-10 rounded-xl flex items-center justify-center duration-500 hover:bg-black hover:text-white">
                                        <span className='heading6'>{item.label}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingNow