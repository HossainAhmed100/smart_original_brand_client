"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import TopNavOne from '@/components/Header/TopNav/TopNavOne';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useUser } from '@/context/UserContext';

const Register: React.FC = () => {
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();
  const axiosPublic = useAxiosPublic();
  const { setUser } = useUser(); // Use the user context

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    const phonePattern = /^[0-9]{11}$/; // Ensure phone number is exactly 11 digits
    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phonePattern.test(phone)) {
      newErrors.phone = 'Phone number must be 11 digits';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axiosPublic.post('/auth/register', {
        fullName,
        phone,
        password,
      });

      // Store user details in context
      setUser({ fullName, phone });

      Swal.fire('Success', response.data.message, 'success');
      router.push('/');
    } catch (error: any) {
      Swal.fire('Error', error.response?.data?.message || 'Something went wrong', 'error');
    }
  };

  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading='Create An Account' subHeading='Create An Account' />
      </div>
      <div className="register-block md:py-20 py-10">
        <div className="container">
          <div className="content-main flex gap-y-8 max-md:flex-col">
            <div className="left md:w-1/2 w-full lg:pr-[60px] md:pr-[40px] md:border-r border-line">
              <div className="heading4">Register</div>
              <form className="md:mt-7 space-y-4 mt-4" onSubmit={handleRegister}>
                <div className="phone">
                  <input
                    className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                    type="text"
                    placeholder="Type your full name*"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>
                <div className="phone">
                  <input
                    className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                    type="tel"
                    placeholder="Type your Phone number*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div className="password">
                  <input
                    className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                    type="password"
                    placeholder="Type your password*"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>
                <div className="flex items-center justify-between mt-5">
                  <div className='flex items-center'>
                    <div className="block-input">
                      <input type="checkbox" name='remember' id='remember' />
                      <Icon.CheckSquare size={20} weight='fill' className='icon-checkbox' />
                    </div>
                    <label htmlFor='remember' className="pl-2 cursor-pointer">Remember me</label>
                  </div>
                </div>
                <div className="block-button md:mt-7 mt-4">
                  <button type="submit" className="button-main bg-[#fc8934]">Register now</button>
                </div>
              </form>
            </div>
            <div className="right md:w-1/2 w-full lg:pl-[60px] md:pl-[40px] flex items-center">
              <div className="text-content">
                <div className="heading4">Already have an account?</div>
                <div className="mt-2 text-secondary">Welcome back. Sign in to access your personalized experience, saved preferences, and more. Were thrilled to have you with us again!</div>
                <div className="block-button md:mt-7 mt-4">
                  <Link href={'/login'} className="button-main bg-[#fc8934]">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
