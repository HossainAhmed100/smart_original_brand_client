'use client'

import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';

const ModalNewsletter = () => {
const [open, setOpen] = useState<boolean>(false)
const router = useRouter()
const handlePromoOffers = () => {
  // redirect to shop with category selected
  router.push(`/shop/breadcrumb1`);
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
      <Image height={600} width={600} alt='Popip Promo Banner' src={"https://firebasestorage.googleapis.com/v0/b/smart-original-brand.appspot.com/o/lauoytImages%2Fpromonanner.jpg?alt=media&token=4256a56f-1008-4a46-a989-4323500f8cb9"} />
    </div>
    </div>
  </div>
  </div>
  </div>
)
}

export default ModalNewsletter
