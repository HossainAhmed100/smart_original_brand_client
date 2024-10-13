'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { ProductType } from '@/type/ProductType'
import Rate from '@/components/Other/Rate'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import SwiperCore from 'swiper/core';
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import { useWishlist } from '@/context/WishlistContext'
import { useModalWishlistContext } from '@/context/ModalWishlistContext'
import ModalSizeguide from '@/components/Modal/ModalSizeguide'
import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from '@/hooks/useAxiosPublic'
import { useRouter } from 'next/navigation'

SwiperCore.use([Navigation, Thumbs]);

interface Props {
    productId: string | number | null
}

const Default: React.FC<Props> = ({ productId }) => {
    console.log("🚀 ~ productId:", productId)
    const swiperRef: any = useRef();
    const [openPopupImg, setOpenPopupImg] = useState(false)
    const [openSizeGuide, setOpenSizeGuide] = useState<boolean>(false)
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
    const [activeColor, setActiveColor] = useState<string>('')
    const [activeSize, setActiveSize] = useState<string>('')
    const { addToCart, updateCart, cartState } = useCart()
    const { openModalCart } = useModalCartContext()
    const { addToWishlist, removeFromWishlist, wishlistState } = useWishlist()
    const { openModalWishlist } = useModalWishlistContext()
    const axiosPublic = useAxiosPublic();
    const router = useRouter();

    // Fetching the product data using useQuery
    const { data: productMain, isLoading } = useQuery<ProductType>({
        queryKey: ["products", productId],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products/productsById/${productId}`);
            return res.data;
        },
        enabled: !!productId,  // Only fetch data if productId exists
    });
    
    // let productMain = data.find(product => product._id === productId) as ProductType
    // if (productMain === undefined) {
    //     productMain = data[0]
    // }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!productMain) {
        return <div>Product not found</div>;
    }


    const percentSale = Math.floor(100 - ((productMain?.price / productMain?.originPrice) * 100));

    const convertedTag = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

    const handleOpenSizeGuide = () => {
        setOpenSizeGuide(true);
    };

    const handleCloseSizeGuide = () => {
        setOpenSizeGuide(false);
    };

    const handleSwiper = (swiper: SwiperCore) => {
        // Do something with the thumbsSwiper instance
        setThumbsSwiper(swiper);
    };

    const handleActiveColor = (item: string) => {
        setActiveColor(item)

        // // Find variation with selected color
        // const foundColor = productMain.variation.find((variation) => variation.color === item);
        // // If found, slide next to img
        // if (foundColor) {
        //     const index = productMain.images.indexOf(foundColor.image);

        //     if (index !== -1) {
        //         swiperRef.current?.slideTo(index);
        //     }
        // }
    }

    const handleActiveSize = (item: string) => {
        setActiveSize(item)
    }

    const handleIncreaseQuantity = () => {
        productMain.quantityPurchase += 1
        updateCart(productMain._id, productMain.quantityPurchase + 1, activeSize, activeColor);
    };

    const handleDecreaseQuantity = () => {
        if (productMain.quantityPurchase > 1) {
            productMain.quantityPurchase -= 1
            updateCart(productMain._id, productMain.quantityPurchase - 1, activeSize, activeColor);
        }
    };

    const handleAddToCart = () => {
        
        if (!cartState.cartArray.find(item => item._id === productMain._id)) {
            addToCart({ ...productMain });
            updateCart(productMain._id, productMain.quantityPurchase, activeSize, activeColor)
        } else {
            updateCart(productMain._id, productMain.quantityPurchase, activeSize, activeColor)
        }
        openModalCart()
    };

    const handleBuyNow = () => {
        
        if (!cartState.cartArray.find(item => item._id === productMain._id)) {
            addToCart({ ...productMain });
            updateCart(productMain._id, productMain.quantityPurchase, activeSize, activeColor)
        } else {
            updateCart(productMain._id, productMain.quantityPurchase, activeSize, activeColor)
        }
        openModalCart()
        router.push("/")
        
    };

    const handleAddToWishlist = () => {
        // if product existed in wishlit, remove from wishlist and set state to false
        if (wishlistState.wishlistArray.some(item => item._id === productMain._id)) {
            removeFromWishlist(productMain._id);
        } else {
            // else, add to wishlist and set state to true
            addToWishlist(productMain);
        }
        openModalWishlist();
    };


    // Ensure that productMain exists and is of the correct type
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!productMain) {
        return <div>Product not found</div>;
    }
    return (
        <>
            <div className="product-detail default">
                <div className="featured-product underwear md:py-20 py-10">
                <div className="container flex justify-between gap-y-6 flex-wrap">
                        <div className="list-img md:w-1/2 md:pr-[45px] w-full">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[Thumbs]}
                                className="mySwiper2 rounded-2xl overflow-hidden"
                            >
                                {productMain.images.map((item, index) => (
                                    <SwiperSlide
                                        key={index}
                                        onClick={() => {
                                            swiperRef.current?.slideTo(index);
                                            setOpenPopupImg(true)
                                        }}
                                    >
                                        <Image
                                            src={item}
                                            width={1000}
                                            height={1000}
                                            alt='prd-img'
                                            className='w-full aspect-[3/4] object-cover'
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Swiper
                                onSwiper={handleSwiper}
                                spaceBetween={0}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[Navigation, Thumbs]}
                                className="mySwiper style-rectangle"
                            >
                                {productMain.images.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={item}
                                            width={1000}
                                            height={1300}
                                            alt='prd-img'
                                            className='w-full aspect-[3/4] object-cover rounded-xl'
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className={`popup-img ${openPopupImg ? 'open' : ''}`}>
                                <span
                                    className="close-popup-btn absolute top-4 right-4 z-[2] cursor-pointer"
                                    onClick={() => {
                                        setOpenPopupImg(false)
                                    }}
                                >
                                    <Icon.X className="text-3xl text-white" />
                                </span>
                                <Swiper
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    modules={[Navigation, Thumbs]}
                                    navigation={true}
                                    loop={true}
                                    className="popupSwiper"
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper
                                    }}
                                >
                                    {productMain.images.map((item, index) => (
                                        <SwiperSlide
                                            key={index}
                                            onClick={() => {
                                                setOpenPopupImg(false)
                                            }}
                                        >
                                            <Image
                                                src={item}
                                                width={1000}
                                                height={1000}
                                                alt='prd-img'
                                                className='w-full aspect-[3/4] object-cover rounded-xl'
                                                onClick={(e) => {
                                                    e.stopPropagation(); // prevent
                                                }}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                        <div className="product-infor md:w-1/2 w-full lg:pl-[15px] md:pl-2">
                            <div className="flex justify-between">
                                <div>
                                    <div className="caption2 text-secondary font-semibold uppercase">{productMain.type}</div>
                                    <div className="heading4 mt-1">{productMain.name}</div>
                                </div>
                                <div
                                    className={`add-wishlist-btn w-12 h-12 flex items-center justify-center border border-line cursor-pointer rounded-xl duration-300 hover:bg-black hover:text-white ${wishlistState.wishlistArray.some(item => item._id === productMain._id) ? 'active' : ''}`}
                                    onClick={handleAddToWishlist}
                                >
                                    {wishlistState.wishlistArray.some(item => item._id === productMain._id) ? (
                                        <>
                                            <Icon.Heart size={24} weight='fill' className='text-white' />
                                        </>
                                    ) : (
                                        <>
                                            <Icon.Heart size={24} />
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center mt-3">
                                <Rate currentRate={productMain.rate} size={14} />
                                <span className='caption1 text-secondary'>(1.234 reviews)</span>
                            </div>
                            <div className="flex items-center gap-3 flex-wrap mt-5 pb-6 border-b border-line">
                                <div className="product-price heading5">৳{productMain.price}.00</div>
                                <div className='w-px h-4 bg-line'></div>
                                <div className="product-origin-price font-normal text-secondary2"><del>৳{productMain.originPrice}.00</del></div>
                                {productMain.originPrice && (
                                    <div className="product-sale caption2 font-semibold bg-[#fc8934] px-3 py-0.5 inline-block rounded-full">
                                        -{percentSale}%
                                    </div>
                                )}
                            </div>
                            <div className="list-action mt-6">
                                <div className="choose-color mt-5">
                                    <div className="text-title">Colors: <span className='text-title color'>{activeColor}</span></div>
                                    <div className="list-color flex items-center gap-2 flex-wrap mt-3">
                                        {productMain.variation.map((item, index) => (
                                            <div
                                                className={`color-item w-12 h-12 rounded-xl duration-300 relative ${activeColor === item.color ? 'active' : ''}`}
                                                key={index}
                                                onClick={() => handleActiveColor(item.color)}
                                            >
                                                <Image
                                                    src={item.colorImage}
                                                    width={100}
                                                    height={100}
                                                    alt='color'
                                                    className='rounded-xl'
                                                />
                                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                                    {item.color}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="choose-size mt-5">
                                    <div className="heading flex items-center justify-between">
                                        <div className="text-title">Size: <span className='text-title size'>{activeSize}</span></div>
                                        <div
                                            className="caption1 size-guide text-red underline cursor-pointer"
                                            onClick={handleOpenSizeGuide}
                                        >
                                            Size Guide
                                        </div>
                                        <ModalSizeguide data={productMain} isOpen={openSizeGuide} onClose={handleCloseSizeGuide} />
                                    </div>
                                    <div className="list-size flex items-center gap-2 flex-wrap mt-3">
                                        {productMain.sizes.map((item, index) => (
                                            <div
                                                className={`size-item ${item === 'freesize' ? 'px-3 py-2' : 'w-12 h-12'} flex items-center justify-center text-button rounded-full uppercase bg-white border border-line ${activeSize === item ? 'active' : ''}`}
                                                key={index}
                                                onClick={() => handleActiveSize(item)}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-title mt-5">Quantity:</div>
                                <div className="choose-quantity flex items-center lg:justify-between gap-5 gap-y-3 mt-3">
                                    <div className="quantity-block md:p-3 max-md:py-1.5 max-md:px-3 flex items-center justify-between rounded-lg border border-line sm:w-[180px] w-[120px] flex-shrink-0">
                                        <Icon.Minus
                                            size={20}
                                            onClick={handleDecreaseQuantity}
                                            className={`${productMain.quantityPurchase === 1 ? 'disabled' : ''} cursor-pointer`}
                                        />
                                        <div className="body1 font-semibold">{productMain.quantityPurchase}</div>
                                        <Icon.Plus
                                            size={20}
                                            onClick={handleIncreaseQuantity}
                                            className='cursor-pointer'
                                        />
                                    </div>
                                    <div onClick={handleAddToCart} className="button-main w-full text-center bg-black text-white border border-black">Add To Cart</div>
                                </div>
                                <div className="button-block mt-5">
                                    <div onClick={handleAddToCart} className="button-main bg-[#fc8934] w-full text-center">Buy It Now</div>
                                </div>
                                <div className="">
                                    <div className="more-infor">
                                    <div className="flex items-center gap-1 mt-3">
                                        <div className="text-title">SKU:</div>
                                        <div className="text-secondary">{productMain.sku}</div>
                                    </div>
                                    <div className="flex items-center gap-1 mt-3">
                                        <div className="text-title">Categories:</div>
                                        <div className="text-secondary capitalize">{productMain.category}, {productMain.gender}, {productMain.type}</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="desc-tab md:pb-20 pb-10">
                    <div className="container">
                        <div className="desc-block mt-8 bg-gray-00">
                            <div className={`desc-item description open `}>
                                <div className='grid md:grid-cols-2 gap-8 gap-y-5'>
                                    <div className="left">
                                        <div className="heading6">Description</div>
                                        <pre className="text-secondary mt-2">
                                        {productMain.description}
                                        </pre>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Semiller Products */}
            </div>
        </>
    )
}

export default Default