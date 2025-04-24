import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Hero = () => {
    return (
        <div className='relative h-[90vh] w-full bg-[url("/Images/Home/hero-back.jpg")] bg-no-repeat bg-center bg-cover flex items-center justify-center'>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

            {/* Content Container */}
            <div className="relative z-10 rounded-2xl max-w-5xl w-full mx-4 ">
                <div>
                    <h1 className="text-2xl md:text-6xl font-bold text-white text-center sm:mb-4 mb-2">One Platform for Every Solution.</h1>
                    <p className='text-white text-center sm:text-base text-sm'>Discover your dream university and start your educational journey with us.</p>
                </div>
                <div className="grid mt-5 shadow-[0_0_10px_0_rgba(0,0,0,0.5)] backdrop-blur-md p-8 rounded-2xl bg-primary grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    {/* Department Select */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white font-medium text-sm md:text-base">Department</label>
                        <select className="p-3 rounded-xl bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Choose Department</option>
                            <option>Engineering</option>
                            <option>Business</option>
                            <option>Medicine</option>
                            <option>Law</option>
                        </select>
                    </div>

                    {/* Major Select */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white font-medium text-sm md:text-base">Major</label>
                        <select className="p-3 rounded-xl bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Choose Major</option>
                            <option>Computer Science</option>
                            <option>Finance</option>
                            <option>Psychology</option>
                            <option>Mechanical Engineering</option>
                        </select>
                    </div>

                    {/* Country Select */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white font-medium text-sm md:text-base">Country</label>
                        <select className="p-3 rounded-xl bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Choose Country</option>
                            <option>USA</option>
                            <option>UK</option>
                            <option>Canada</option>
                            <option>Australia</option>
                        </select>
                    </div>

                    {/* Search Button */}
                    <button className="bg-secondary text-white font-semibold px-6 py-3 rounded-xl hover:bg-secondary transition-all duration-300 w-full mt-2 md:mt-6 space-x-2">
                        <span>Search</span>
                        <CiSearch className='inline-block mr-2  text-xl' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
