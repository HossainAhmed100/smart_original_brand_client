'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import { useForm } from "react-hook-form";
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import { useCart } from '@/context/CartContext'
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from '@/hooks/useAxiosPublic'
import toast from 'react-hot-toast'

const Checkout = () => {
    const searchParams = useSearchParams()
    let discount = searchParams.get('discount')
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [deliveryCharge, setDeliveryCharge] = useState(0);
    const {data: deliveryChargeInfo = []} = useQuery({
    queryKey: ["deliveryChargeInfo"],
    queryFn: async () => {
    const res = await axiosPublic.get('/layout/deliveryCharge');
    const charges = res.data[0].deliveryCost;
    setDeliveryCharge(charges)  
    return res.data;
    },
    })
    const { cartState } = useCart();
    let [totalCart, setTotalCart] = useState<number>(0)

    cartState.cartArray.map(item => totalCart += item.price * item.quantity)

    const handleOptionChange = (cost: any) => {
    setDeliveryCharge(cost);
    }

    const onSubmit = async (data: any) => {
      const phone = data.phoneNumber; 
      const address = data.fulladdress; 
      const fullName = data.fullName; 
      const deliveryNotes = ""; 
      const status = "newOrder"; 
      const {deliveryArea, deliveryCost} = deliveryChargeInfo.find((item: any) => item.deliveryCost === deliveryCharge);
      const deliveryChargeDetails = {deliveryArea, deliveryCost};
      const myCart = cartState.cartArray;
      
      const info = { fullName, phone, address, deliveryNotes, status, deliveryChargeDetails, myCart };
      console.log("🚀 ~ onSubmit ~ info:", info);
    
      try {
        const response = await axiosPublic.post('/orders/', info);
        
        if (response.status === 200) {
          console.log("Order created successfully:", response.data);
          // You can add success toast here
          toast.success("Order placed successfully");
        } else {
          console.error("Error placing order:", response.data);
          // You can add error toast here
          toast.error("Failed to place order");
        }
      } catch (error) {
        console.error("Error occurred while placing order:", error);
        // You can add error toast here
        toast.error("Error occurred while placing order");
      }
    };
      

return (
<>
<TopNavOne props="style-one" slogan="New customers save 10% with the code GET10" />
<div id="header" className='relative w-full'>
<MenuOne props="bg-transparent" />
<Breadcrumb heading='Shopping cart' subHeading='Shopping cart' />
</div>
<div className="cart-block md:py-20 py-10">
<div className="container">
<div className="content-main flex justify-between">
    <div className="left w-1/2">
        <div className="information mt-5">
            <div className="heading5">Information</div>
            <div className="form-checkout mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid sm:grid-cols-2 gap-4 gap-y-5 flex-wrap">
                        <div className="">
                            <input {...register("fullName", { required: true })} className="border-line px-4 py-3 w-full rounded-lg" type="text" 
                            placeholder="Name (আপনার নাম লিখুন)" required />
                        </div>
                        <div className="">
                            <input {...register("phoneNumber", { required: true })} className="border-line px-4 py-3 w-full rounded-lg" type="number" 
                            placeholder="Mobile Number (মোবাইল নাম্বার)" required />
                        </div>
                        <div className="col-span-full">
                            <textarea {...register("fulladdress", { required: true })} className="border border-line px-4 py-3 w-full rounded-lg" placeholder="Full Address (সম্পূর্ন ঠিকানা)"></textarea>
                        </div>
                        <div>
                        <div>
                            <h3>শিপিং মেথড:</h3>
                            {deliveryChargeInfo.map((option: any, index: any) => (
                                <div key={index}>
                                <input
                                    type="radio"
                                    id={option.deliveryCost}
                                    name={option.deliveryCost}
                                    value={option.deliveryCost}
                                    checked={deliveryCharge === option.deliveryCost}
                                    onChange={() => handleOptionChange(option.deliveryCost)}
                                />
                                <label htmlFor={option.deliveryCost}>{option.deliveryArea}</label>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="col-span-full">
                            <textarea className="border border-line px-4 py-3 w-full rounded-lg" id="note" name="note" placeholder="আপনার স্পেশাল কোন রিকোয়ারমেন্ট থাকলে এখানে লিখুন"></textarea>
                        </div>
                    </div>
                    <div className="block-button md:mt-10 mt-6">
                        <button type="submit" className='button-main bg-[#fc8934] w-full'>আপনার অর্ডার কনফার্ম করতে ক্লিক করুন</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div className="right w-5/12">
        <div className="checkout-block">
            <div className="heading5 pb-3">Your Order</div>
            <div className="list-product-checkout">
                {cartState.cartArray.length < 1 ? (
                    <p className='text-button pt-3'>No product in cart</p>
                ) : (
                    cartState.cartArray.map((product) => (
                        <>
                    <div className="item flex items-center justify-between w-full pb-5 border-b border-line gap-6 mt-5">
                    <div className="bg-img w-[100px] aspect-square flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={product.thumbImage[0]}
                        width={500}
                        height={500}
                        alt='img'
                        className='w-full h-full'
                      />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <div>
                            <div className="name text-title">{product.name}</div>
                            <div className="caption1 text-secondary mt-2">
                                <span className='size capitalize'>{product.selectedSize || product.sizes[0]}</span>
                                <span>/</span>
                                <span className='color capitalize'>{product.selectedColor || product.variation[0].color}</span>
                            </div>
                        </div>
                        <div className="text-title">
                            <span className='quantity'>{product.quantity}</span>
                            <span className='px-1'>x</span>
                            <span>
                            ৳{product.price}.00
                            </span>
                        </div>
                      </div>
                        </div>
                    </>
                    ))
                )}
            </div>
            <div className="discount-block py-5 flex justify-between border-b border-line">
                <div className="text-title">Discounts</div>
                <div className="text-title">-৳<span className="discount">{discount}</span><span>.00</span></div>
            </div>
            <div className="ship-block py-5 flex justify-between border-b border-line">
                <div className="text-title">Shipping</div>
                <div className="text-title">৳{deliveryCharge}</div>
            </div>
            <div className="total-cart-block pt-5 flex justify-between">
                <div className="heading5">Total</div>
                <div className="heading5 total-cart">৳{totalCart - Number(discount) + deliveryCharge}.00</div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
<Footer />
</>
)
}

export default Checkout