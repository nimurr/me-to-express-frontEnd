'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa';

const reviews = [
    {
        id: 1,
        name: "Ayesha Rahman",
        image: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
        country: "🇬🇧 UK",
        feedback: "GlobalEdu helped me secure admission and visa for my dream university in the UK. Highly professional and supportive!",
        rating: 4.9
    },
    {
        id: 2,
        name: "Tanvir Ahmed",
        image: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
        country: "🇨🇦 Canada",
        feedback: "Thanks to StudyBridge Consultants, I received my Canadian study permit without any hassle!",
        rating: 4.8
    },
    {
        id: 3,
        name: "Mariam Hossain",
        image: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
        country: "🇺🇸 USA",
        feedback: "The SOP writing and counseling services were top-notch. Highly recommend Pathway Abroad!",
        rating: 5.0
    },
    {
        id: 4,
        name: "Mariam Hossain",
        image: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
        country: "🇺🇸 USA",
        feedback: "The SOP writing and counseling services were top-notch. Highly recommend Pathway Abroad!",
        rating: 5.0
    },
];

const StudentReviews = () => {
    return (
        <div className='bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 md:my-20 my-5'>
                <h2 className='text-3xl font-semibold text-primary mb-8'>Hear from Students</h2>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}

                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className='bg-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-6 hover:shadow-lg transition h-full'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className='w-14 h-14 rounded-full object-cover'
                                    />
                                    <div>
                                        <h4 className='font-semibold text-lg'>{review.name}</h4>
                                        <p className='text-sm text-gray-500'>{review.country}</p>
                                    </div>
                                </div>

                                <p className='text-gray-700 mb-4 text-sm'>“{review.feedback}”</p>

                                <div className='flex items-center text-yellow-500'>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`-mt-1 ${i < Math.round(review.rating) ? '' : 'text-gray-300'}`}
                                        />
                                    ))}
                                    <span className='ml-2 text-sm text-gray-600'>{review.rating.toFixed(1)}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Style the pagination below the swiper */}
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
        </div>
    );
};

export default StudentReviews;
