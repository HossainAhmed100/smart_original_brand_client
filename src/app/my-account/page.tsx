// pages/myaccount.tsx
'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import MenuFour from '@/components/Header/Menu/MenuFour';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer';
import { useUser } from '@/context/UserContext';
import Swal from 'sweetalert2';
import Loading from '@/components/Other/Loading';

const MyAccount: React.FC = () => {
    const { user, setUser } = useUser(); // Access user and setUser using the custom hook
    const router = useRouter();

    // Redirect to login page if user is not logged in
    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    // Handle logout
    const handleLogout = () => {
        // Clear user details from local storage
        localStorage.removeItem('user');
        // Set user state to null using the context's setUser
        setUser(null);

        // Show success message using SweetAlert
        Swal.fire({
            title: 'Logged out',
            text: 'You have successfully logged out.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            // Redirect to login page after showing the success message
            router.push('/login');
        });
    };

    // Render the page only if the user is logged in
    if (!user) {
        return <Loading />; // Optionally, you can return a loader here while redirecting
    }

    return (
        <>
            <div id="header" className='relative w-full'>
                <MenuFour props="bg-white" />
                <Breadcrumb heading='My Account' subHeading='My Account' />
            </div>
            <div className="cart-block md:py-20 py-10">
                <div className="container">
                    <div className="content-main lg:px-[60px] md:px-4 flex gap-y-8 max-md:flex-col w-full">
                        <div className="left xl:w-1/3 md:w-5/12 w-full xl:pr-[40px] lg:pr-[28px] md:pr-[16px]">
                            <div className="user-info bg-surface md:px-8 px-5 md:py-10 py-6 md:rounded-[20px] rounded-xl">
                                <div className="heading flex flex-col items-center justify-center">
                                    <div className="name heading6 mt-4 text-center">
                                        {user.fullName} {/* Display user's full name */}
                                    </div>
                                    <div className="mail heading6 font-normal normal-case text-center mt-1">
                                        {user.phone} {/* Display user's phone number */}
                                    </div>
                                </div>
                                <div className="menu-tab lg:mt-10 mt-6">
                                    <div className="item px-5 py-4 flex items-center gap-3 cursor-pointer">
                                        <Icon.User size={20} weight='bold' />
                                        <div className="heading6">Account Details</div>
                                    </div>
                                    <div className="item px-5 py-4 flex items-center gap-3 cursor-pointer mt-2" onClick={handleLogout}>
                                        <Icon.SignOut size={20} weight='bold' />
                                        <div className="heading6">Logout</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right xl:w-2/3 md:w-7/12 w-full xl:pl-[40px] lg:pl-[28px] md:pl-[16px] flex items-center">
                            <div className="text-content w-full">
                                <form className="">
                                    <div className="heading5 pb-4">Information</div>
                                    <div className='grid sm:grid-cols-2 gap-4 gap-y-5'>
                                        <div className="first-name">
                                            <input
                                                className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                                                id="fullName"
                                                type="text"
                                                placeholder='Full name'
                                                value={user.fullName}
                                                readOnly
                                            />
                                        </div>
                                        <div className="phone-number">
                                            <input
                                                className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                                                id="phoneNumber"
                                                type="text"
                                                placeholder="Phone number"
                                                value={user.phone}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyAccount;
