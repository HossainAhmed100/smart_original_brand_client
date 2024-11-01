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
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/UserContext';
import Logo from "@/assets/logos/logoline.png";

interface DesktopNavUlLiProps {
  handleTypeClick: (type: string) => void;
  path: string;
  title: string;
}

interface Props {
props: string
}

const MenuFour: React.FC<Props> = ({ props }) => {
const pathname = usePathname()
const { user } = useUser();
const { openLoginPopup, handleLoginPopup } = useLoginPopup()
const { openMenuMobile, handleMenuMobile } = useMenuMobile()
const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null)
const { openModalCart } = useModalCartContext()

const [searchKeyword, setSearchKeyword] = useState('');
const { cartState } = useCart()
const { openModalWishlist } = useModalWishlistContext()
const { openModalSearch } = useModalSearchContext()
const router = useRouter()

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
    router.push(`/shop/breadcrumb-img?gender=${gender}`);
  };

  const handleCategoryClick = (category: string) => {
    router.push(`/shop/breadcrumb-img?category=${category}`);
  };

  const handleTypeClick = (type: string) => {
    router.push(`/shop/breadcrumb-img?type=${type}`);
  };

  
  const handleSearch = () => {
    // router.push(`/search-result?query=${value}`)
    // setSearchKeyword('')
    openModalSearch()
}

  return (
  <>
  <div className={`header-menu style-one ${fixedHeader ? 'fixed' : 'absolute'} top-0 left-0 right-0 w-full md:h-[74px] h-[56px] ${props}`}>
    <div className="container mx-auto h-full">
      <div className="header-main flex items-center justify-between h-full">
        <div className="menu-mobile-icon lg:hidden flex items-center" onClick={handleMenuMobile}>
          <i className="icon-category text-2xl"></i>
        </div>
        <Link href={'/'} className='flex items-center lg:hidden'>
          <Image src={Logo} width={170} priority height={25} alt='brand logo'/>
        </Link>
        <div onClick={() => {handleSearch()}} className="form-search relative max-lg:hidden z-[1]">
            <Icon.MagnifyingGlass
                size={16}
                className='absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer'
                
            />
            <span className=' h-10 rounded-lg p-3 text-gray-200 border border-line caption2 w-full pl-9 pr-4'>What are you looking for?</span>
            {/* <input
                type="text"
                placeholder='What are you looking for?'
                className=' h-10 rounded-lg border border-line caption2 w-full pl-9 pr-4'
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchKeyword)}
            /> */}
        </div>
        <div className="menu-main h-full xl:w-full flex items-center justify-center max-lg:hidden xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">
        <ul className='flex items-center gap-8 h-full'>
          <li className='h-full relative'>
            <Link href="/" className={`text-button-uppercase duration-300 h-full flex items-center justify-center gap-1 ${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li className='h-full relative'>
            <Link href="/shop/breadcrumb-img" className={`text-button-uppercase duration-300 h-full flex items-center justify-center gap-1 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}>
              Shop
            </Link>
          </li>
          <li className='h-full relative'>
            <Link href="/shop/breadcrumb-img?type=winter-collections" className={`text-button-uppercase duration-300 h-full flex items-center justify-center gap-1`}>
            Winter Special
            </Link>
          </li>
          <li className='h-full flex items-center justify-center logo'>
          <Link href={'/'} className='heading4'>
          <Image src="https://firebasestorage.googleapis.com/v0/b/smart-original-brand.appspot.com/o/lauoytImages%2Flogoline.png?alt=media&token=9d80f142-37eb-48d5-be73-c37ee0dd2cfd" width={170} height={25} alt='brand logo'/>
          </Link>
          </li>
          <li className='h-full'>
          <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
          MAN
          </Link>
          <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
          <div className="container">
          <div className="flex justify-between py-8">
          <div className="nav-link basis-2/3 flex justify-between pr-12">
            <div className="nav-item">
              <Link href="/shop/breadcrumb-img?type=bottom" className="text-button-uppercase link cursor-pointer duration-300 pb-2">
                BOTTOM
              </Link>
              <ul>
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="jeans" title="Jeans" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="chinos" title="Chinos" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="formal" title="Formal" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="joggers" title="Joggers" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="cargo" title="Cargo" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="shorts" title="Shorts" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="pajama" title="Pajama" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="gurkha-pants" title="Gurkha Pants" />
              </ul>
            </div>
            <div className="nav-item">
              <Link href="/shop/breadcrumb-img?type=shirt" className="text-button-uppercase link cursor-pointer duration-300 pb-2">
                Shirt
              </Link>
              <ul>
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="formal" title="Formal" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="casual" title="Casual" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="half-sleeve" title="Half Sleeve" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="full-sleeve" title="Full Sleeve" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="printed" title="Printed" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="solid" title="Solid" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="club" title="Club" />
              </ul>
            </div>
            <div className="nav-item">
              <Link href="/shop/breadcrumb-img?type=polo" className="text-button-uppercase link cursor-pointer duration-300 pb-2">
                Polo
              </Link>
              <ul>
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="mens-polo" title="Mens Polo" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="classic-fit" title="Classic Fit" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="long-sleeve" title="Long Sleeve" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="pocket-polos" title="Pocket Polos" />
              </ul>
            </div>
            <div className="nav-item">
              <Link href="/shop/breadcrumb-img?type=T-Shirt" className="text-button-uppercase link cursor-pointer duration-300 pb-2">
                T-Shirt
              </Link>
              <ul>
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="swift-shirt" title="Swift Shirt" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="v-neck" title="V-Neck" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="relaxed-fit" title="Relaxed Fit" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="athletic-fit" title="Athletic Fit" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="special-interest" title="Special Interest T-Shirt" />
              </ul>
            </div>
            <div className="nav-item">
              <div className="text-button-uppercase pb-2">Winter</div>
              <ul>
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="blazer" title="Blazer" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="jacket" title="Jacket" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="sweater" title="Sweater" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="hoodie" title="Hoodie" />
              </ul>
            </div>
            <div className="nav-item">
              <div className="text-button-uppercase pb-2">Others</div>
              <ul>
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="panjabi" title="Panjabi" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="pajama" title="Pajama" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="shall" title="Shall" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="cap" title="Cap" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="shocks" title="Shocks" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="belt" title="Belt" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="wallet" title="Wallet" />
              </ul>
            </div>
          </div>
          </div>
          </div>
          </div>
          </li>
          <li className='h-full'>
          <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
          WOMEN
          </Link>
          <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
          <div className="container">
          <div className="flex justify-between py-8">
            <div className="nav-link basis-2/3 flex justify-between xl:pr-14 pr-5">
              <div className="nav-item">
                <div className="text-button-uppercase pb-2">T-Shirt</div>
                <ul>
                  <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-t-shirt" title="Womens T-Shirt" />
                  <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-polo-shirt" title="Womens Polo Shirt" />
                  <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-swift-shirt" title="Womens Swift Shirt" />
                  <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-threepiece" title="Exclusive Threepiece" />
                </ul>
              </div>
              <div className="nav-item">
                <div className="text-button-uppercase pb-2">Winter</div>
                <ul>
                  <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-blazer" title="Blazer" />
                  <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-jacket" title="Jacket" />
                  <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-sweater" title="Sweater" />
                  <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-hoodie" title="Hoodie" />
                </ul>
              </div>
            </div>
          </div>
          </div>
          </div>
          </li>
          <li className='h-full'>
          <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
          KIDS
          </Link>
          <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
          <div className="container">
          <div className="flex justify-between py-8">
            <div className="nav-link basis-2/3 flex justify-between xl:pr-14 pr-5">
            <div className="nav-item">
              <Link
                href="/shop/breadcrumb-img?type=bottom"
                className="text-button-uppercase link cursor-pointer duration-300 pb-2"
              >
                BOTTOM
              </Link>
              <ul>
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-jeans" title="Jeans" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-chinos" title="Chinos" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-joggers" title="Joggers" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-cargo" title="Cargo" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-pajama" title="Pajama" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-gurkha-pants" title="Gurkha Pants" />
              </ul>
            </div>
            <div className="nav-item">
              <Link
                href="/shop/breadcrumb-img?type=shirt"
                className="text-button-uppercase link cursor-pointer duration-300 pb-2"
              >
                Shirt
              </Link>
              <ul>
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-formal" title="Formal" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-casual" title="Casual" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-half-sleeve" title="Half Sleeve" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-full-sleeve" title="Full Sleeve" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-printed" title="Printed" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-solid" title="Solid" />
              </ul>
            </div>
            <div className="nav-item">
              <Link
                href="/shop/breadcrumb-img?type=polo"
                className="text-button-uppercase link cursor-pointer duration-300 pb-2"
              >
                Polo
              </Link>
              <ul>
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-mans-polo" title="Kids Polo" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-classic-fit" title="Classic Fit" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-long-sleeve" title="Long Sleeve" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-pocket-polos" title="Pocket Polos" />
              </ul>
            </div>
            <div className="nav-item">
              <Link
                href="/shop/breadcrumb-img?type=T-Shirt"
                className="text-button-uppercase link cursor-pointer duration-300 pb-2"
              >
                T-Shirt
              </Link>
              <ul>
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-swift-shirt" title="Swift Shirt" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-v-neck" title="V-Neck" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-relaxed-fit" title="Relaxed Fit" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-athletic-fit" title="Athletic Fit" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-special-interest" title="Special Interest T-Shirt" />
              </ul>
            </div>
            <div className="nav-item">
              <div className="text-button-uppercase pb-2">Winter</div>
              <ul>
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-blazer" title="Blazer" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-jacket" title="Jacket" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-sweater" title="Sweater" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-hoodie" title="Hoodie" />
              </ul>
            </div>
            <div className="nav-item">
              <div className="text-button-uppercase pb-2">Others</div>
              <ul>
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-panjabi" title="Panjabi" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-pajama" title="Pajama" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-cap" title="Cap" />
                <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-shocks" title="Shocks" />
              </ul>
            </div>
            </div>
          </div>
          </div>
          </div>
          </li>
        </ul>
        </div>
        <div className="right flex gap-12 z-[1]">
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
            </div>
          </div>
          }
          <div className="max-md:hidden wishlist-icon flex items-center cursor-pointer" onClick={openModalWishlist}>
            <Icon.Heart size={24} color='black' />
          </div>
          <div className="cart-icon flex items-center relative cursor-pointer" onClick={openModalCart}>
            <Icon.Handbag size={24} color='black' />
            <span className="quantity cart-quantity absolute -right-1.5 -top-1.5 text-xs text-white bg-black w-4 h-4 flex items-center justify-center rounded-full">{cartState.cartArray.length}</span>
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
              <li>
                <a href={'/'} className='text-xl font-semibold flex items-center justify-between mt-5'>
                  Home
                  <span className='text-right'>
                    <Icon.CaretRight size={20} />
                  </span>
                </a>
              </li>
              <li>
                <Link href={'/shop/breadcrumb-img'} className='text-xl font-semibold flex items-center justify-between mt-5'>
                  Shop
                  <span className='text-right'>
                    <Icon.CaretRight size={20} />
                  </span>
                </Link>
              </li>
              <li>
                <a href={'/shop/breadcrumb-img?type=winter-collections'} className='text-xl font-semibold flex items-center justify-between mt-5'>
                Winter Special
                  <span className='text-right'>
                    <Icon.CaretRight size={20} />
                  </span>
                </a>
              </li>
              <li className={`${openSubNavMobile === 2 ? 'open' : ''}`} onClick={() => handleOpenSubNavMobile(2)} >
                <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>
                  Man
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
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="jeans" title="Jeans" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="chinos" title="Chinos" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="joggers" title="Joggers" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="cargo" title="Cargo" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="shorts" title="Shorts" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="gurkha-pants" title="Gurkha Pants" />
                      </ul>
                    </div>
                    <div className="nav-item">
                      <div className="text-button-uppercase pb-2">Shirt</div>
                      <ul>
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="formal" title="Formal" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="casual" title="Casual" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="half-sleeve" title="Half Sleeve" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="full-sleeve" title="Full Sleeve" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="printed" title="Printed" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="solid" title="Solid" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="club" title="Club" />
                      </ul>
                    </div>
                    <div className="nav-item">
                      <div className="text-button-uppercase pb-2">T-Shirt</div>
                      <ul>
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="v-neck" title="V-Neck" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="relaxed-fit" title="Relaxed Fit" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="athletic-fit" title="Athletic Fit" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="special-interest" title="Special Interest T-Shirt" />
                      </ul>
                    </div>
                    <div className="nav-item">
                      <div className="text-button-uppercase pb-2">Outwear</div>
                      <ul>
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="blazer" title="Blazer" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="jacket" title="Jacket" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="sweater" title="Sweater" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="hoodie" title="Hoodie" />
                      </ul>
                    </div>
                    <div className="nav-item">
                      <div className="text-button-uppercase pb-2">Winter</div>
                      <ul>
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="blazer" title="Blazer" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="jacket" title="Jacket" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="sweater" title="Sweater" />
                        <DesktopNavUlLi handleTypeClick={handleTypeClick} path="hoodie" title="Hoodie" />
                      </ul>
                    </div>

                    </div>
                  </div>
                </div>
              </li>
              <li className={`${openSubNavMobile === 3 ? 'open' : ''}`} onClick={() => handleOpenSubNavMobile(3)} >
                <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>
                  WOMAN
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
                  <div className="text-button-uppercase pb-2">T-Shirt</div>
                  <ul>
                    <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-t-shirt" title="Womens T-Shirt" />
                    <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-polo-shirt" title="Womens Polo Shirt" />
                    <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-swift-shirt" title="Womens Swift Shirt" />
                    <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-threepiece" title="Exclusive Threepiece" />
                  </ul>
                </div>
                <div className="nav-item">
                  <div className="text-button-uppercase pb-2">Winter</div>
                  <ul>
                    <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-blazer" title="Blazer" />
                    <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-jacket" title="Jacket" />
                    <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-sweater" title="Sweater" />
                    <DesktopNavUlLi handleTypeClick={handleTypeClick} path="women-hoodie" title="Hoodie" />
                  </ul>
                </div>
                </div>
                </div>
                </div>
                </div>
              </li>
              <li className={`${openSubNavMobile === 4 ? 'open' : ''}`} onClick={() => handleOpenSubNavMobile(4)} >
                <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>
                  Kids
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
                  <Link
                    href="/shop/breadcrumb-img?type=bottom"
                    className="text-button-uppercase link cursor-pointer duration-300 pb-2"
                  >
                    BOTTOM
                  </Link>
                    <ul>
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-jeans" title="Jeans" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-chinos" title="Chinos" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-joggers" title="Joggers" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-cargo" title="Cargo" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-pajama" title="Pajama" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-gurkha-pants" title="Gurkha Pants" />
                    </ul>
                  </div>
                  <div className="nav-item">
                    <Link
                      href="/shop/breadcrumb-img?type=shirt"
                      className="text-button-uppercase link cursor-pointer duration-300 pb-2"
                    >
                      Shirt
                    </Link>
                    <ul>
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-formal" title="Formal" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-casual" title="Casual" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-half-sleeve" title="Half Sleeve" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-full-sleeve" title="Full Sleeve" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-printed" title="Printed" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-solid" title="Solid" />
                    </ul>
                  </div>
                  <div className="nav-item">
                    <Link
                      href="/shop/breadcrumb-img?type=polo"
                      className="text-button-uppercase link cursor-pointer duration-300 pb-2"
                    >
                      Polo
                    </Link>
                    <ul>
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-mans-polo" title="Kids Polo" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-classic-fit" title="Classic Fit" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-long-sleeve" title="Long Sleeve" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-pocket-polos" title="Pocket Polos" />
                    </ul>
                  </div>
                  <div className="nav-item">
                    <Link
                      href="/shop/breadcrumb-img?type=T-Shirt"
                      className="text-button-uppercase link cursor-pointer duration-300 pb-2"
                    >
                      T-Shirt
                    </Link>
                    <ul>
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-swift-shirt" title="Swift Shirt" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-v-neck" title="V-Neck" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-relaxed-fit" title="Relaxed Fit" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-athletic-fit" title="Athletic Fit" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-special-interest" title="Special Interest T-Shirt" />
                    </ul>
                  </div>
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">Winter</div>
                    <ul>
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-blazer" title="Blazer" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-jacket" title="Jacket" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-sweater" title="Sweater" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-hoodie" title="Hoodie" />
                    </ul>
                  </div>
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">Others</div>
                    <ul>
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-panjabi" title="Panjabi" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-pajama" title="Pajama" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-cap" title="Cap" />
                      <DesktopNavUlLi handleTypeClick={handleTypeClick} path="kids-shocks" title="Shocks" />
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

const DesktopNavUlLi = ({ handleTypeClick, path, title }: DesktopNavUlLiProps) => {
  return(
    <li>
      <div onClick={() => handleTypeClick(path)} 
      className={`link text-secondary duration-300 cursor-pointer`}>
        {title}
      </div>
    </li> 
  )
}

export default MenuFour