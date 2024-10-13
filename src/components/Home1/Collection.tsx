'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { useRouter } from 'next/navigation';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
// import Fade from 'react-reveal'

const Collection = () => {
    const router = useRouter()
    const axiosPublic = useAxiosPublic();
    const {data: collectionInfo = []} = useQuery({
    queryKey: ["collectionInfo"],
    queryFn: async () => {
        const res = await axiosPublic.get('/layout/collection/');
        return res.data;
    },
    })

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className="collection-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Explore Collections</div>
                </div>
                <div className="list-collection section-swiper-navigation md:mt-10 mt-6 sm:px-5 px-4">
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={2}
                        navigation
                        loop={true}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 12,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className='h-full'
                    >
                        {collectionInfo.map((item: any) => (
                          <SwiperSlide key={item._id}>
                            <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick(item.path)}>
                                <div className="bg-img">
                                    <Image
                                        src={item.imgUrl}
                                        width={1000}
                                        height={600}
                                        alt={item.path}
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">{item.label}</div>
                            </div>
                        </SwiperSlide>
                        ) )}
                        
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Collection