'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import productData from '@/data/Product.json'
import { ProductType } from '@/type/ProductType';
import { useModalCartContext } from '@/context/ModalCartContext'
import { useCart } from '@/context/CartContext'
import { countdownTime } from '@/store/countdownTime'
import CountdownTimeType from '@/type/CountdownType';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const ModalCart = ({ serverTimeLeft }: { serverTimeLeft: CountdownTimeType }) => {
  const [timeLeft, setTimeLeft] = useState(serverTimeLeft);
  const router = useRouter();

  useEffect(() => {
      const timer = setInterval(() => {
          setTimeLeft(countdownTime());
      }, 1000);

      return () => clearInterval(timer);
  }, []);

  const [activeTab, setActiveTab] = useState<string | undefined>('')
  const { isModalOpen, closeModalCart } = useModalCartContext();
  const { cartState, addToCart, removeFromCart, updateCart } = useCart()

  const handleAddToCart = (productItem: ProductType) => {
      if (!cartState.cartArray.find(item => item._id === productItem._id)) {
          addToCart({ ...productItem });
          updateCart(productItem._id, productItem.quantityPurchase, '', '')
      } else {
          updateCart(productItem._id, productItem.quantityPurchase, '', '')
      }
  };

  const handleActiveTab = (tab: string) => {
      setActiveTab(tab)
  }

  let moneyForFreeship = 5000;
  let [totalCart, setTotalCart] = useState<number>(0);
  let [discountCart, setDiscountCart] = useState<number>(0);

  cartState.cartArray.map(item => totalCart += item.price * item.quantity);

  const handleOrderCheckout: any = () => {
    if(cartState.cartArray.length > 0) {
      closeModalCart()
      router.push("/checkout")
    } else{
      toast.error("Please add something to your cart");
    }
      
  }
    return (
        <>
        <div className={`modal-cart-block`} onClick={closeModalCart}>
        <div
            className={`modal-cart-main flex ${isModalOpen ? 'open' : ''}`}
            onClick={(e) => { e.stopPropagation() }}
        >
        <div className="right cart-block w-full py-6 relative overflow-hidden">
            <div className="heading px-6 pb-3 flex items-center justify-between relative">
                <div className="heading5">Shopping Cart</div>
                <div
                    className="close-btn absolute right-6 top-0 w-6 h-6 rounded-full bg-surface flex items-center justify-center duration-300 cursor-pointer hover:bg-[#fc8934] hover:text-white"
                    onClick={closeModalCart}
                >
                    <Icon.X size={14} />
                </div>
            </div>
            <div className="heading banner mt-3 px-6">
                <div className="text">Buy <span className="text-button"> ৳<span className="more-price">{moneyForFreeship - totalCart > 0 ? (<>{moneyForFreeship - totalCart}</>) : (0)}</span>.00 </span>
                    <span>more to get </span>
                    <span className="text-button">freeship</span></div>
                <div className="tow-bar-block mt-3">
                    <div
                        className="progress-line"
                        style={{ width: totalCart <= moneyForFreeship ? `${(totalCart / moneyForFreeship) * 100}%` : `100%` }}
                    ></div>
                </div>
            </div>
            <div className="list-product px-6">
                {cartState.cartArray.map((product) => (
                    <div key={product._id} className='item py-5 flex items-center justify-between gap-3 border-b border-line'>
                        <div className="infor flex items-center gap-3 w-full">
                            <div className="bg-img w-[100px] aspect-square flex-shrink-0 rounded-lg overflow-hidden">
                                <Image
                                    src={product.images[0]}
                                    width={300}
                                    height={300}
                                    alt={product.name}
                                    className='w-full h-full'
                                />
                            </div>
                            <div className='w-full'>
                                <div className="flex items-center justify-between w-full">
                                    <div className="name text-button">{product.name}</div>
                                    <div
                                        className="remove-cart-btn caption1 font-semibold text-red underline cursor-pointer"
                                        onClick={() => removeFromCart(product._id)}
                                    >
                                        Remove
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-2 mt-3 w-full">
                                    <div className="flex items-center text-secondary2 capitalize">
                                        {product.selectedSize || product.sizes[0]}/{product.selectedColor || product.variation[0].color}
                                    </div>
                                    <div className="product-price text-title">৳{product.price}.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="footer-modal bg-white absolute bottom-0 left-0 w-full">
                <div className="flex items-center justify-center lg:gap-14 gap-8 px-6 py-4 border-b border-line">
                    <div
                        className="item flex items-center gap-3 cursor-pointer"
                        onClick={() => handleActiveTab('note')}
                    >
                        <Icon.NotePencil className='text-xl' />
                        <div className="caption1">Note</div>
                    </div>
                    <div
                        className="item flex items-center gap-3 cursor-pointer"
                        onClick={() => handleActiveTab('coupon')}
                    >
                        <Icon.Tag className='text-xl' />
                        <div className="caption1">Coupon</div>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-6 px-6">
                    <div className="heading5">Subtotal</div>
                    <div className="heading5">৳{totalCart}.00</div>
                </div>
                <div className="block-button text-center p-6">
                    <div className="flex items-center gap-4">
                        <div
                            
                            className='button-main bg-[#fc8934] font-bangla text-base font-medium w-full text-center uppercase'
                            onClick={handleOrderCheckout}
                        >
                            আপনার অর্ডার কনফার্ম করতে ক্লিক করুন
                        </div>
                    </div>
                    <div onClick={closeModalCart} className="text-button-uppercase mt-4 text-center has-line-before cursor-pointer inline-block">Or continue shopping</div>
                </div>
                <div className={`tab-item note-block ${activeTab === 'note' ? 'active' : ''}`}>
                    <div className="px-6 py-4 border-b border-line">
                        <div className="item flex items-center gap-3 cursor-pointer">
                            <Icon.NotePencil className='text-xl' />
                            <div className="caption1">Note</div>
                        </div>
                    </div>
                    <div className="form pt-4 px-6">
                        <textarea name="form-note" id="form-note" rows={4} placeholder='Add special instructions for your order...' className='caption1 py-3 px-4 bg-surface border-line rounded-md w-full'></textarea>
                    </div>
                    <div className="block-button text-center pt-4 px-6 pb-6">
                        <div className='button-main w-full text-center' onClick={() => setActiveTab('')}>Save</div>
                        <div onClick={() => setActiveTab('')} className="text-button-uppercase mt-4 text-center has-line-before cursor-pointer inline-block">Cancel</div>
                    </div>
                </div>
                <div className={`tab-item note-block ${activeTab === 'coupon' ? 'active' : ''}`}>
                    <div className="px-6 py-4 border-b border-line">
                        <div className="item flex items-center gap-3 cursor-pointer">
                            <Icon.Tag className='text-xl' />
                            <div className="caption1">Add A Coupon Code</div>
                        </div>
                    </div>
                    <div className="form pt-4 px-6">
                        <div className="">
                            <label htmlFor='select-discount' className="caption1 text-secondary">Enter Code</label>
                            <input className="border-line px-5 py-3 w-full rounded-xl mt-3" id="select-discount" type="text" placeholder="Discount code" />
                        </div>
                    </div>
                    <div className="block-button text-center pt-4 px-6 pb-6">
                        <div className='button-main w-full text-center' onClick={() => setActiveTab('')}>Apply</div>
                        <div onClick={() => setActiveTab('')} className="text-button-uppercase mt-4 text-center has-line-before cursor-pointer inline-block">Cancel</div>
                    </div>
                </div>
            </div>  
        </div>
        </div>
        </div>
        </>
    )
}

export default ModalCart