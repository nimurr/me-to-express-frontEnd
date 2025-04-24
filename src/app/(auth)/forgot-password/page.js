import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div className='h-screen bg-gradient-to-b  from-[#f9f5ff] to-[#e585ac] '>
            <Link href="/">
                <img className='md:pl-10 pt-10  w-48 mx-auto md:ml-0' src="/Images/Auth/logo.png" alt="" />
            </Link>
            <div className='flex justify-center mt-20'>
                <div className='min-w-96'>
                    <h2 className='text-3xl font-medium text-center'>Forgot Password?</h2>
                    <p className='text-center mt-5 text-gray-600'>Please enter your email address <br /> to reset
                        your password.</p>
                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="email">Email</label>
                        <input placeholder='Enter your email' className='mt-2 w-full p-2 border border-primary rounded-md focus:outline-0 ring-0 bg-white' type="email" name="email" id="email" />
                    </div>
                    <Link href={'/verify-otp'} className='mt-5 block'>
                        <button className='cursor-pointer w-full p-2 bg-primary font-semibold text-white rounded-md'>Send OTP</button>
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default Page;
