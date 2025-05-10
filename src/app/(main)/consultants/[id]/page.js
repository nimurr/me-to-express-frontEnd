'use client';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Default Swiper styles
import 'swiper/css/navigation'; // Optional: If using navigation
import 'swiper/css/pagination'; // Optional: If using pagination
import { Autoplay, Pagination } from 'swiper/modules';



const Page = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 md:my-10 my-5">
            {/* Hero Image Section */}
            <div className='mt-10 bg-[url("/Images/TopConsultants/1730279048_shutterstock_2304685361.avif")] bg-cover bg-center rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] h-[50vh]'>
            </div>

            {/* Agency Overview */}
            <div className='my-5'>
                <h2 className='text-3xl font-semibold text-primary '>GlobalEdu Agency</h2>
                <h3 className=''>Visa, Counseling, SOP Writing</h3>
                <div className='flex justify-between items-center flex-wrap'>
                    <div className="flex items-center text-yellow-400 gap-1 my-2">
                        <FaStar className='-mt-1' />
                        <span className="text-sm font-medium">{4.5} (150)</span>
                    </div>
                    <span className='flex items-center gap-1 text-gray-500'>
                        <CiLocationOn className='text-xl' />United States
                    </span>
                </div>
            </div>

            {/* Agency Description */}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa facere aliquid sed voluptate molestias. Voluptas, nam laudantium, sequi, eveniet ex sunt quisquam quo nostrum sint enim culpa ipsa beatae modi eligendi repellat! Quaerat delectus consequatur, non dolorum reiciendis optio magni nam iure, dolore maxime sint in asperiores laudantium similique ut distinctio quo ipsam fuga laborum sit! Nostrum dolorem, eum, neque, repudiandae totam vero magnam voluptas corrupti explicabo voluptatibus exercitationem voluptatum distinctio cum fugiat perspiciatis tempore rem mollitia! Repellendus fugiat quas molestiae pariatur a aliquam possimus veritatis, consequatur praesentium laborum rem, expedita soluta et cupiditate? Minus nam sapiente alias quas aspernatur.
            </p>

            {/* Services Section */}
            <div className='my-5'>
                <h2 className='text-3xl font-semibold text-primary'>Our Services</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Visa Counseling:</strong> Personalized advice on visa applications and documentation.</li>
                    <li><strong>SOP Writing:</strong> Expert writing services for Statement of Purpose (SOP) to enhance your chances of approval.</li>
                    <li><strong>Career Counseling:</strong> Guidance for international study options and career paths.</li>
                    <li><strong>Document Verification:</strong> Ensuring your documents meet international standards.</li>
                </ul>
            </div>

            {/* About Us Section */}
            <div className='my-5'>
                <h2 className='text-3xl font-semibold text-primary'>About Us</h2>
                <p>
                    GlobalEdu Agency has been serving students and professionals for over 10 years, helping them navigate the complexities of international studies and visa applications. We are committed to providing reliable, trustworthy, and professional services.
                </p>
            </div>

            {/* Contact Section */}
            <div className='my-5'>
                <h2 className='text-3xl font-semibold text-primary '>Contact</h2>
                <p>Email: <a href="mailto:info@globaledu.com" className="hover:text-white transition">info@globaledu.com</a></p>
                <p>Phone: +1 123-456-7890</p>
            </div>

            {/* Add Some Student Reviews */}
            <div className="pt-10 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-semibold text-center text-secondary mb-8">Student Reviews</h2>

                    {/* Swiper Slider */}
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        centeredSlides={true} // Center the active slide
                        loop={true} // Enable looping
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="mb-12"
                    >
                        {/* Review 1 */}
                        <SwiperSlide>
                            <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg p-6">
                                <p className="text-gray-700 text-sm mb-4">
                                    "This course changed my life! The instructors were fantastic, and the content was exactly what I needed."
                                </p>
                                <div className="flex items-center space-x-3">
                                    <img src="https://cdn-icons-png.flaticon.com/512/236/236832.png" alt="Student 1" className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <p className="font-semibold text-gray-900">John Doe</p>
                                        <p className="text-sm text-gray-500">Student</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Review 2 */}
                        <SwiperSlide>
                            <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg p-6">
                                <p className="text-gray-700 text-sm mb-4">
                                    "An incredible learning experience! I feel much more confident in my skills after completing this program."
                                </p>
                                <div className="flex items-center space-x-3">
                                    <img src="https://cdn-icons-png.flaticon.com/512/236/236832.png" alt="Student 2" className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Jane Smith</p>
                                        <p className="text-sm text-gray-500">Graduate</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Review 3 */}
                        <SwiperSlide>
                            <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg p-6">
                                <p className="text-gray-700 text-sm mb-4">
                                    "Great content and well-structured. I would highly recommend this to anyone looking to improve their skills!"
                                </p>
                                <div className="flex items-center space-x-3">
                                    <img src="https://cdn-icons-png.flaticon.com/512/236/236832.png" alt="Student 3" className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Mark Wilson</p>
                                        <p className="text-sm text-gray-500">Alumnus</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg p-6">
                                <p className="text-gray-700 text-sm mb-4">
                                    "Great content and well-structured. I would highly recommend this to anyone looking to improve their skills!"
                                </p>
                                <div className="flex items-center space-x-3">
                                    <img src="https://cdn-icons-png.flaticon.com/512/236/236832.png" alt="Student 3" className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Mark Wilson</p>
                                        <p className="text-sm text-gray-500">Alumnus</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* You can add more SwiperSlide components here as needed */}
                    </Swiper>

                </div>
            </div>

            <style jsx>{`
                :global(.swiper-pagination) {
                    margin-top: 40px;
                    text-align: center;
                    position: relative;
                }
                :global(.swiper-pagination-bullet) {
                    width: 15px;
                    height: 15px;
                    display: inline-block;
                    border-radius: 50%;
                    background: #ccc;
                    margin: 0 5px;
                }
                :global(.swiper-pagination-bullet-active) {
                    background: #d00b53;
                }
            `}</style>

        </div>
    );
};

export default Page;
