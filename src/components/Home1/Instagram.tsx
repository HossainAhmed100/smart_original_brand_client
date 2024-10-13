'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/hooks/useAxiosPublic';

const Instagram = () => {
    const axiosPublic = useAxiosPublic();
    const {data: instagramImages = []} = useQuery({
        queryKey: ["instagramImages"],
        queryFn: async () => {
          const res = await axiosPublic.get('/layout/instagramImage');
          return res.data;
        },
      })
    return (
        <>
            <div className="instagram-block md:pt-20 py-10">
                <div className="container">
                    <div className="heading">
                        <div className="heading3 text-center">Smart Original On Instagram</div>
                        <div className="text-center mt-3">#SmartOriginal</div>
                    </div>
                    <div className="list-instagram md:mt-10 mt-6">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 4000,
                            }}
                            breakpoints={{
                                500: {
                                    slidesPerView: 2,
                                    spaceBetween: 16,
                                },
                                680: {
                                    slidesPerView: 3,
                                    spaceBetween: 16,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 16,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 16,
                                },
                            }}
                        >
                            {instagramImages.map((item: any) => (
                                <SwiperSlide key={item._id}>
                                <Link href={'https://www.instagram.com/smartoriginalbrand'} target='_blank' className="item relative block rounded-[32px] overflow-hidden">
                                    <Image
                                        src={item.imageUrl}
                                        width={300}
                                        height={300}
                                        alt='1'
                                        className='h-full w-full duration-500 relative'
                                    />
                                    <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                        <div className="icon-instagram text-2xl text-black"></div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            ))} 
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Instagram