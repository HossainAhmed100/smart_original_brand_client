'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from 'next/navigation';
import useLoginPopup from '@/store/useLoginPopup';
import useMenuMobile from '@/store/useMenuMobile';
import { useModalCartContext } from '@/context/ModalCartContext';
import { useModalWishlistContext } from '@/context/ModalWishlistContext';
import { useModalSearchContext } from '@/context/ModalSearchContext';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';

interface Props {
    props: string;
}

const MenuOne: React.FC<Props> = ({ props }) => {
  const { user } = useUser();
    const router = useRouter()
    const pathname = usePathname()
    let [selectedType, setSelectedType] = useState<string | null>()
    const { openLoginPopup, handleLoginPopup } = useLoginPopup()
    const { openMenuMobile, handleMenuMobile } = useMenuMobile()
    const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null)
    const { openModalCart } = useModalCartContext()
    const { cartState } = useCart()
    const { openModalWishlist } = useModalWishlistContext()
    const { openModalSearch } = useModalSearchContext()

    const handleOpenSubNavMobile = (index: number) => {
        setOpenSubNavMobile(openSubNavMobile === index ? null : index)
    }

    const [fixedHeader, setFixedHeader] = useState(false)
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setFixedHeader(scrollPosition > 0 && scrollPosition < lastScrollPosition);
            setLastScrollPosition(scrollPosition);
        };

        // Gắn sự kiện cuộn khi component được mount
        window.addEventListener('scroll', handleScroll);

        // Hủy sự kiện khi component bị unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPosition]);

    const handleGenderClick = (gender: string) => {
        router.push(`/shop/breadcrumb1?gender=${gender}`);
    };

    const handleCategoryClick = (category: string) => {
        router.push(`/shop/breadcrumb1?category=${category}`);
    };

    const handleTypeClick = (type: string) => {
        setSelectedType(type)
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

  return (
  <>
    <div className={`header-menu style-one ${fixedHeader ? 'fixed' : 'absolute'} top-0 left-0 right-0 w-full md:h-[74px] h-[56px] ${props}`}>
      <div className="container mx-auto h-full">
          <div className="header-main flex justify-between h-full">
              <div className="menu-mobile-icon lg:hidden flex items-center" onClick={handleMenuMobile}>
                  <i className="icon-category text-2xl"></i>
              </div>
              <div className="left flex items-center gap-16">
                  <Link href={'/'} className='flex items-center max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2'>
                      <Image src="https://firebasestorage.googleapis.com/v0/b/smart-original-brand.appspot.com/o/lauoytImages%2Flogoline.png?alt=media&token=9d80f142-37eb-48d5-be73-c37ee0dd2cfd" width={170} height={25} alt='brand logo'/>
                  </Link>
                  <div className="menu-main h-full max-lg:hidden">
                  <ul className='flex items-center gap-8 h-full'>
                    <li className='h-full relative'>
                        <Link
                            href="/"
                            className={`text-button-uppercase duration-300 h-full flex items-center justify-center gap-1 ${pathname === '/' ? 'active' : ''}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li className='h-full'>
                      <Link
                        href="#!"
                        className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${pathname.includes('/man/') ? 'active' : ''}`}
                      >
                        MAN
                      </Link>
                      <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
                        <div className="container">
                      <div className="flex justify-between py-8">
                          <div className="nav-link basis-2/3 flex justify-between pr-12">
                            <div className="nav-item">
                              <div className="text-button-uppercase pb-2">Bottom</div>
                              <ul>
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('jeans')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Jeans
                                  </div>
                                </li>  
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('chinos')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Chinos
                                  </div>
                                </li>  
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('formal')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Formal
                                  </div>
                                </li>   
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('joggers')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Joggers
                                  </div>
                                </li> 
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('cargo')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Cargo
                                  </div>
                                </li>  
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('shorts')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Shorts
                                  </div>
                                </li>  
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('pajama')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Pajama
                                  </div>
                                </li>  
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('gurkha-pants')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Gurkha Pants
                                  </div>
                                </li>  
                              </ul>  
                            </div>
                            <div className="nav-item">
                            <div className="text-button-uppercase pb-2">Shirt</div>
                              <ul>
                              <li>
                                <div
                                onClick={() => handleTypeClick('formal')}
                                className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Formal
                                </div>
                              </li>
                              <li>
                                <div
                                onClick={() => handleTypeClick('casual')}
                                className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Casual
                                </div>
                              </li>
                              <li>
                                <div
                                onClick={() => handleTypeClick('half-sleeve')}
                                className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Half Sleeve
                                </div>
                              </li>
                              <li>
                                <div
                                onClick={() => handleTypeClick('full-sleeve')}
                                className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Full Sleeve
                                </div>
                              </li>
                              <li>
                                <div
                                onClick={() => handleTypeClick('printed')}
                                className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Printed
                                </div>
                              </li>
                              <li>
                              <div
                                onClick={() => handleTypeClick('solid')}
                                className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Solid
                                </div>
                              </li>
                              <li>
                              <div
                                onClick={() => handleTypeClick('club')}
                                className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Club
                                </div>
                              </li>
                              </ul>
                            </div>
                            <div className="nav-item">
                              <div className="text-button-uppercase pb-2">Polo</div>
                              <ul>
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('mans-polo')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Mens Polo
                                  </div>
                                </li>  
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('womens-polo')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Womens Polo
                                  </div>
                                </li>  
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('classic-fit')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Classic Fit
                                  </div>
                                </li>   
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('long-sleeve')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Long Sleeve
                                  </div>
                                </li> 
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('pocket-polos')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Pocket Polos
                                  </div>
                                </li>  
                              </ul>  
                            </div>
                            <div className="nav-item">
                            <div className="text-button-uppercase pb-2">T-Shirt</div>
                              <ul>
                              <li>
                                <div
                                onClick={() => handleTypeClick('v-neck')}
                                className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  V-Neck
                                </div>
                              </li>
                              <li>
                                <div
                                onClick={() => handleTypeClick('relaxed-fit')}
                                className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Relaxed Fit
                                </div>
                              </li>
                              <li>
                                <div
                                onClick={() => handleTypeClick('athletic-fit')}
                                className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Athletic Fit
                                </div>
                              </li>
                              <li>
                                <div
                                onClick={() => handleTypeClick('special-interest')}
                                className={`link text-secondary duration-300 cursor-pointer`}
                                >
                                  Special Interest T-Shirt
                                </div>
                              </li>
                              </ul>
                            </div>
                            <div className="nav-item">
                              <div className="text-button-uppercase pb-2">Outwear</div>
                              <ul>
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('blazer')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Blazer
                                  </div>
                                </li>
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('jacket')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Jacket
                                  </div>
                                </li>
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('sweater')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Sweater
                                  </div>
                                </li>
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('hoodie')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Hoodie
                                  </div>
                                </li>
                              </ul>  
                            </div>
                            <div className="nav-item">
                              <div className="text-button-uppercase pb-2">Winter</div>
                              <ul>
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('blazer')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Blazer
                                  </div>
                                </li>
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('jacket')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Jacket
                                  </div>
                                </li>
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('sweater')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Sweater
                                  </div>
                                </li>
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('hoodie')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  Hoodie
                                  </div>
                                </li>
                              </ul>  
                            </div>
                        </div>
                      </div>
                      </div>
                      </div>
                    </li>
                    <li className='h-full'>
                      <Link
                        href="#!"
                        className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${pathname.includes('/women/') ? 'active' : ''}`}
                      >
                        WOMAN
                      </Link>
                      <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
                        <div className="container">
                      <div className="flex justify-between py-8">
                          <div className="nav-link basis-2/3 flex justify-between pr-12">
                            <div className="nav-item">
                              <div className="text-button-uppercase pb-2">T-Shirt</div>
                              <ul>
                                <li>
                                  <div
                                  onClick={() => handleTypeClick('women-t-shirt')}
                                  className={`link text-secondary duration-300 cursor-pointer`}
                                  >
                                  T-Shirt
                                  </div>
                                </li>   
                              </ul>  
                            </div>
                        </div>
                      </div>
                      </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right flex gap-12">
                <div className="max-md:hidden search-icon flex items-center cursor-pointer relative">
                  <Icon.MagnifyingGlass size={24} color='black' onClick={openModalSearch} />
                  <div className="line absolute bg-line w-px h-6 -right-6"></div>
                </div>
                  <div className="list-action flex items-center gap-4">
                  {user ? <div className="user-icon flex items-center justify-center cursor-pointer">
                    <Link href={"/my-account"}><Icon.User size={24} color='black'/></Link>
                  </div> :
                  <div className="user-icon flex items-center justify-center cursor-pointer">
                  <Icon.User size={24} color='black' onClick={handleLoginPopup} />
                  <div
                    className={`login-popup absolute top-[74px] w-[320px] p-7 rounded-xl bg-white box-shadow-small 
                    ${openLoginPopup ? 'open' : ''}`}
                  >
                    <Link href={'/login'} className="button-main w-full bg-[#fc8934] text-center">Login</Link>
                    <div className="text-secondary text-center mt-3 pb-4">Don’t have an account?
                      <Link href={'/register'} className='text-[#fc8934] pl-1 hover:underline'>Register</Link>
                    </div>
                    <div className="bottom pt-4 border-t border-line"></div>
                    <Link href={'#!'} className='body1 hover:underline'>Support</Link>
                  </div>
                </div>
                  }
                  <div className="max-md:hidden wishlist-icon flex items-center cursor-pointer" onClick={openModalWishlist}>
                      <Icon.Heart size={24} color='black' />
                  </div>
                  <div className="cart-icon flex items-center relative cursor-pointer" onClick={openModalCart}>
                    <Icon.Handbag size={24} color='black' />
                    <span className="quantity cart-quantity absolute -right-1.5 -top-1.5 text-xs text-white bg-[#fc8934] w-4 h-4 flex items-center justify-center rounded-full">{cartState.cartArray.length}</span>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>

    <div id="menu-mobile" className={`${openMenuMobile ? 'open' : ''}`}>
      <div className="menu-container bg-white h-full">
        <div className="container h-full">
          <div className="menu-main h-full overflow-hidden">
            <div className="heading py-2 relative flex items-center justify-center">
            <div
              className="close-menu-mobile-btn absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface flex items-center justify-center"
              onClick={handleMenuMobile}
            >
              <Icon.X size={14} />
            </div>
            <Link href={'/'} className='flex items-center'>
                <Image src="https://firebasestorage.googleapis.com/v0/b/smart-original-brand.appspot.com/o/lauoytImages%2Flogoline.png?alt=media&token=9d80f142-37eb-48d5-be73-c37ee0dd2cfd" width={170} height={25} alt='brand logo'/>
            </Link>
            </div>
            <div className="form-search relative mt-2">
              <Icon.MagnifyingGlass size={20} className='absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer' />
              <input type="text" placeholder='What are you looking for?' className=' h-12 rounded-lg border border-line text-sm w-full pl-10 pr-4' />
            </div>
            <div className="list-nav mt-6">
              <ul>
                <li className={`${openSubNavMobile === 2 ? 'open' : ''}`} onClick={() => handleOpenSubNavMobile(2)} >
                  <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Man
                    <span className='text-right'>
                      <Icon.CaretRight size={20} />
                    </span>
                  </a>
                  <div className="sub-nav-mobile">
                    <div className="back-btn flex items-center gap-3" onClick={() => handleOpenSubNavMobile(2)} >
                      <Icon.CaretLeft /> Back
                    </div>
                    <div className="list-nav-item w-full pt-3 pb-12">
                      <div className="nav-link grid grid-cols-2 gap-5 gap-y-6">
                      <div className="nav-item">
                        <div className="text-button-uppercase pb-2">Bottom</div>
                        <ul>
                          <li>
                            <div
                            onClick={() => handleTypeClick('jeans')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Jeans
                            </div>
                          </li>  
                          <li>
                            <div
                            onClick={() => handleTypeClick('chinos')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Chinos
                            </div>
                          </li>  
                          <li>
                            <div
                            onClick={() => handleTypeClick('formal')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Formal
                            </div>
                          </li>   
                          <li>
                            <div
                            onClick={() => handleTypeClick('joggers')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Joggers
                            </div>
                          </li> 
                          <li>
                            <div
                            onClick={() => handleTypeClick('cargo')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Cargo
                            </div>
                          </li>  
                          <li>
                            <div
                            onClick={() => handleTypeClick('shorts')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Shorts
                            </div>
                          </li>  
                          <li>
                            <div
                            onClick={() => handleTypeClick('pajama')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Pajama
                            </div>
                          </li>  
                          <li>
                            <div
                            onClick={() => handleTypeClick('gurkha-pants')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Gurkha Pants
                            </div>
                          </li>  
                        </ul>  
                      </div>
                      <div className="nav-item">
                      <div className="text-button-uppercase pb-2">Shirt</div>
                        <ul>
                        <li>
                          <div
                          onClick={() => handleTypeClick('formal')}
                          className={`link text-secondary duration-300 cursor-pointer`}
                          >
                            Formal
                          </div>
                        </li>
                        <li>
                          <div
                          onClick={() => handleTypeClick('casual')}
                          className={`link text-secondary duration-300 cursor-pointer`}
                          >
                            Casual
                          </div>
                        </li>
                        <li>
                          <div
                          onClick={() => handleTypeClick('half-sleeve')}
                          className={`link text-secondary duration-300 cursor-pointer`}
                          >
                            Half Sleeve
                          </div>
                        </li>
                        <li>
                          <div
                          onClick={() => handleTypeClick('full-sleeve')}
                          className={`link text-secondary duration-300 cursor-pointer`}
                          >
                            Full Sleeve
                          </div>
                        </li>
                        <li>
                          <div
                          onClick={() => handleTypeClick('printed')}
                          className={`link text-secondary duration-300 cursor-pointer`}
                          >
                            Printed
                          </div>
                        </li>
                        <li>
                        <div
                          onClick={() => handleTypeClick('solid')}
                          className={`link text-secondary duration-300 cursor-pointer`}
                          >
                            Solid
                          </div>
                        </li>
                        <li>
                        <div
                          onClick={() => handleTypeClick('club')}
                          className={`link text-secondary duration-300 cursor-pointer`}
                          >
                            Club
                          </div>
                        </li>
                        </ul>
                      </div>
                      <div className="nav-item">
                        <div className="text-button-uppercase pb-2">Polo</div>
                        <ul>
                          <li>
                            <div
                            onClick={() => handleTypeClick('mans-polo')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Mens Polo
                            </div>
                          </li>  
                          <li>
                            <div
                            onClick={() => handleTypeClick('womens-polo')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Womens Polo
                            </div>
                          </li>  
                          <li>
                            <div
                            onClick={() => handleTypeClick('classic-fit')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Classic Fit
                            </div>
                          </li>   
                          <li>
                            <div
                            onClick={() => handleTypeClick('long-sleeve')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Long Sleeve
                            </div>
                          </li> 
                          <li>
                            <div
                            onClick={() => handleTypeClick('pocket-polos')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Pocket Polos
                            </div>
                          </li>  
                        </ul>  
                      </div>
                      <div className="nav-item">
                      <div className="text-button-uppercase pb-2">T-Shirt</div>
                        <ul>
                        <li>
                          <div
                          onClick={() => handleTypeClick('v-neck')}
                          className={`link text-secondary duration-300 cursor-pointer`}
                          >
                            V-Neck
                          </div>
                        </li>
                        <li>
                          <div
                          onClick={() => handleTypeClick('relaxed-fit')}
                          className={`link text-secondary duration-300 cursor-pointer`}
                          >
                            Relaxed Fit
                          </div>
                        </li>
                        <li>
                          <div
                          onClick={() => handleTypeClick('athletic-fit')}
                          className={`link text-secondary duration-300 cursor-pointer`}
                          >
                            Athletic Fit
                          </div>
                        </li>
                        <li>
                          <div
                          onClick={() => handleTypeClick('special-interest')}
                          className={`link text-secondary duration-300 cursor-pointer`}
                          >
                            Special Interest T-Shirt
                          </div>
                        </li>
                        </ul>
                      </div>
                      <div className="nav-item">
                        <div className="text-button-uppercase pb-2">Outwear</div>
                        <ul>
                          <li>
                            <div
                            onClick={() => handleTypeClick('blazer')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Blazer
                            </div>
                          </li>
                          <li>
                            <div
                            onClick={() => handleTypeClick('jacket')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Jacket
                            </div>
                          </li>
                          <li>
                            <div
                            onClick={() => handleTypeClick('sweater')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Sweater
                            </div>
                          </li>
                          <li>
                            <div
                            onClick={() => handleTypeClick('hoodie')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Hoodie
                            </div>
                          </li>
                        </ul>  
                      </div>
                      <div className="nav-item">
                        <div className="text-button-uppercase pb-2">Winter</div>
                        <ul>
                          <li>
                            <div
                            onClick={() => handleTypeClick('blazer')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Blazer
                            </div>
                          </li>
                          <li>
                            <div
                            onClick={() => handleTypeClick('jacket')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Jacket
                            </div>
                          </li>
                          <li>
                            <div
                            onClick={() => handleTypeClick('sweater')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Sweater
                            </div>
                          </li>
                          <li>
                            <div
                            onClick={() => handleTypeClick('hoodie')}
                            className={`link text-secondary duration-300 cursor-pointer`}
                            >
                            Hoodie
                            </div>
                          </li>
                        </ul>  
                      </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className={`${openSubNavMobile === 3 ? 'open' : ''}`} onClick={() => handleOpenSubNavMobile(3)} >
                  <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>WOMAN
                    <span className='text-right'>
                      <Icon.CaretRight size={20} />
                    </span>
                  </a>
                  <div className="sub-nav-mobile">
                  <div className="back-btn flex items-center gap-3" onClick={() => handleOpenSubNavMobile(3)} >
                    <Icon.CaretLeft /> Back
                  </div>
                  <div className="list-nav-item w-full pt-3 pb-12">
                  <div className="">
                  <div className="nav-link grid grid-cols-2 gap-5 gap-y-6 justify-between">
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-1">T-Shirt</div>
                    <ul>
                        <li>
                            <Link
                                href={'/shop/breadcrumb-img'}
                                className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                            >
                                T-Shirt
                            </Link>
                        </li>
                    </ul>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default MenuOne