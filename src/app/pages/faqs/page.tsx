'use client'
import React, { useState } from 'react'
import MenuFour from '@/components/Header/Menu/MenuFour'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Faqs = () => {
  const [activeTab, setActiveTab] = useState<string | undefined>('General')
  const [activeQuestion, setActiveQuestion] = useState<string | undefined>('')

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab)
  }

  const handleActiveQuestion = (question: string) => {
    setActiveQuestion(prevQuestion => prevQuestion === question ? undefined : question)
  }

  return (
    <>
      <div id="header" className='relative w-full'>
        <MenuFour props="bg-white" />
        <Breadcrumb heading='FAQs' subHeading='FAQs' />
      </div>
      <div className='faqs-block md:py-20 py-10'>
        <div className="container">
          <div className="flex justify-between">
            <div className="left w-1/4">
              <div className="menu-tab flex flex-col gap-5">
                {[
                  'General', 'shipping', 'Exchange & Return', 'Payment'
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`tab-item inline-block w-fit heading6 has-line-before text-secondary2 hover:text-black duration-300 ${activeTab === item ? 'active' : ''}`}
                    onClick={() => handleActiveTab(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="right w-2/3">
              <div className={`tab-question flex flex-col gap-5 ${activeTab === 'General' ? 'active' : ''}`}>
                <div
                  className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '1' ? 'open' : ''}`}
                  onClick={() => handleActiveQuestion('1')}
                >
                  <div className="heading flex items-center justify-between gap-6">
                    <div className="heading6">What is your business hour?</div>
                    <Icon.CaretRight size={24} />
                  </div>
                  <div className="content body1 text-secondary">You can shop online from our website 24/7. Our outlets are open from 10am-9pm.
                  Click to check our Store Locations
                  </div>
                </div>
                <div
                  className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '2' ? 'open' : ''}`}
                  onClick={() => handleActiveQuestion('2')}
                >
                  <div className="heading flex items-center justify-between gap-6">
                    <div className="heading6">What are your standard measurements?</div>
                    <Icon.CaretRight size={24} />
                  </div>
                  <div className="content body1 text-secondary">You can check our size chart. Size Chart is added with the product picture. For any difficulties DM or call us directly.</div>
                </div>
              </div>
              <div className={`tab-question flex flex-col gap-5 ${activeTab === 'shipping' ? 'active' : ''}`}>
                <div
                  className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '2' ? 'open' : ''}`}
                  onClick={() => handleActiveQuestion('2')}
                >
                  <div className="heading flex items-center justify-between gap-6">
                    <div className="heading6">What are my shipping options?</div>
                    <Icon.CaretRight size={24} />
                  </div>
                  <div className="content body1 text-secondary">We have standard shipping policy in corporation with “Pathao &Street Fast” delivery service all over the country.</div>
                </div>
                <div
                  className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '3' ? 'open' : ''}`}
                  onClick={() => handleActiveQuestion('3')}
                >
                  <div className="heading flex items-center justify-between gap-6">
                    <div className="heading6">Can I change my shipping address?</div>
                    <Icon.CaretRight size={24} />
                  </div>
                  <div className="content body1 text-secondary">We have one shipping address per order. Once an order is placed you cannot change the shipping address.</div>
                </div>
                <div
                  className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '4' ? 'open' : ''}`}
                  onClick={() => handleActiveQuestion('4')}
                >
                  <div className="heading flex items-center justify-between gap-6">
                    <div className="heading6">When will my order ship?</div>
                    <Icon.CaretRight size={24} />
                  </div>
                  <div className="content body1 text-secondary">We will ship the order on the same day order is confirmed.</div>
                </div>
                <div
                  className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '5' ? 'open' : ''}`}
                  onClick={() => handleActiveQuestion('5')}
                >
                  <div className="heading flex items-center justify-between gap-6">
                    <div className="heading6">How do I track my order?</div>
                    <Icon.CaretRight size={24} />
                  </div>
                  <div className="content body1 text-secondary">If you want to track your order, kindly get in touch via our Facebook, Instagram page or call us directly also we will update you about your shipment after dispatch your order from our delivery hub.</div>
                </div>
              </div>
              <div className={`tab-question flex flex-col gap-5 ${activeTab === 'Exchange & Return' ? 'active' : ''}`}>
                <div
                  className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '1' ? 'open' : ''}`}
                  onClick={() => handleActiveQuestion('1')}
                >
                  <div className="heading flex items-center justify-between gap-6">
                    <div className="heading6">How many days will I get to exchange a product?</div>
                    <Icon.CaretRight size={24} />
                  </div>
                  <div className="content body1 text-secondary">Exchange is applicable within 3 days in case of stock availability. Product under sale/discount will not be exchanged. No exchange for accessories items as well.</div>
                </div>
                <div
                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '2' ? 'open' : ''}`}
                    onClick={() => handleActiveQuestion('2')}
                >
                  <div className="heading flex items-center justify-between gap-6">
                    <div className="heading6">Is there any return policy available?</div>
                    <Icon.CaretRight size={24} />
                  </div>
                  <div className="content body1 text-secondary">Return policy is applicable at the time of delivery. A customer can return the parcel by paying the delivery charge only. After receiving the parcel there will be no return/refund.
                </div>
                </div>
                <div
                  className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '3' ? 'open' : ''}`}
                  onClick={() => handleActiveQuestion('3')}
                >
                  <div className="heading flex items-center justify-between gap-6">
                    <div className="heading6">Can I pick up my order from any store?</div>
                    <Icon.CaretRight size={24} />
                  </div>
                  <div className="content body1 text-secondary">For online orders we will ship it to the mentioned address. We don’t have store pickup options.</div>
                </div>
                <div
                  className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '4' ? 'open' : ''}`}
                  onClick={() => handleActiveQuestion('4')}
                >
                  <div className="heading flex items-center justify-between gap-6">
                    <div className="heading6">What happens if I receive a faulty item?</div>
                    <Icon.CaretRight size={24} />
                  </div>
                  <div className="content body1 text-secondary">If you receive a faulty item, kindly get in touch with us within 24 hours and we will send you a new product.</div>
                </div>
              </div>
              <div className={`tab-question flex flex-col gap-5 ${activeTab === 'Payment' ? 'active' : ''}`}>
                <div
                  className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '2' ? 'open' : ''}`}
                  onClick={() => handleActiveQuestion('2')}
                >
                  <div className="heading flex items-center justify-between gap-6">
                    <div className="heading6">What payment methods do you accept?</div>
                    <Icon.CaretRight size={24} />
                  </div>
                  <div className="content body1 text-secondary">We accept secure online payments through BKash and Nagad on our website. Also, cash on deliver available all over Bangladesh.</div>
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

export default Faqs