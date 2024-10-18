'use client';
import React from 'react';
import TopNavOne from '@/components/Header/TopNav/TopNavOne';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer';
import { useForm, SubmitHandler } from "react-hook-form";
import useAxiosPublic from '@/hooks/useAxiosPublic';
import toast from 'react-hot-toast';

type Inputs = {
  fullName: string;
  email: string;
  message: string;
};

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const axiosPublic = useAxiosPublic();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axiosPublic.post('/layout/contact', data);
      
      if (response.status === 201) {
        toast.success('Message sent successfully!');
        reset()
      } else {
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('An error occurred while sending your message.');
    }
  };

  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading="Contact us" subHeading="Contact us" />
      </div>
      <div className="contact-us md:py-20 py-10">
        <div className="container">
          <div className="flex justify-between max-lg:flex-col gap-y-10">
            <div className="left lg:w-2/3 lg:pr-4">
              <div className="heading3">Drop Us A Line</div>
              <div className="body1 text-secondary2 mt-3">
                Use the form below to get in touch with the sales team
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="md:mt-6 mt-4">
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 gap-y-5">
                  <div className="name">
                    <input
                      {...register("fullName", { required: true })}
                      className="border-line px-4 py-3 w-full rounded-lg"
                      id="username"
                      type="text"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  <div className="email">
                    <input
                      {...register("email", { required: true })}
                      className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                      id="email"
                      type="email"
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                  <div className="message sm:col-span-2">
                    <textarea
                      {...register("message", { required: true })}
                      className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                      id="message"
                      rows={3}
                      placeholder="Your Message *"
                      required
                    />
                  </div>
                </div>
                <div className="block-button md:mt-6 mt-4">
                  <button type="submit" className="button-main bg-[#fc8934]">Send message</button>
                </div>
              </form>
            </div>
            <div className="right lg:w-1/4 lg:pl-4">
              <div className="item">
                <div className="heading4">Our Store</div>
                <p className="mt-3">Block #E, Holding #365/1, West Saheb Para, Mizmizi, Siddirganj, Narayanganj</p>
                <p className="mt-3">
                  Phone: <span className="whitespace-nowrap">+880 1975-859249</span>
                </p>
                <p className="mt-1">
                  Email: <span className="whitespace-nowrap">smartbd1425@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
