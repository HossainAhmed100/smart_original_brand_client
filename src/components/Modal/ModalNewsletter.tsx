'use client'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import PopUpBannerUrl from "@/assets/banner/popUpBanner.png";
import Image from 'next/image';
const ModalNewsletter = () => {
const [open, setOpen] = useState<boolean>(false)
const router = useRouter()

const handlePromoOffers = () => {
  router.push(`/shop/breadcrumb-img?collection=winter-collections`);
};

useEffect(() => {
  setTimeout(() => {
    setOpen(true)
  }, 3000)
}, [])

return (
  <div className="modal-newsletter" onClick={() => setOpen(false)}>
  <div className="container h-full flex items-center justify-center w-full">
  <div
    className={`modal-newsletter-main ${open ? 'open' : ''}`}
    onClick={(e) => { e.stopPropagation() }}
  >
    <div className="main-content rounded-sm overflow-hidden w-fit">
   
    <div onClick={handlePromoOffers}>
      <Image height={600} width={600} priority alt='Popip Promo Banner' src={PopUpBannerUrl} />
    </div>
    </div>
  </div>
  </div>
  </div>
)
}

export default ModalNewsletter
