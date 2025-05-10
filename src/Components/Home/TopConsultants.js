import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

const consultants = [
    {
        id: 1,
        agency: "GlobalEdu Agency",
        image: "/Images/TopConsultants/1730279048_shutterstock_2304685361.avif",
        bio: "Helping students with UK, USA, and Canada admissions for 10+ years.",
        rating: 4.8,
        reviews: 150,
        location: "Dhaka, Bangladesh",
        services: "Visa, Counseling, SOP Writing",
    },
    {
        id: 2,
        agency: "StudyBridge Consultants",
        image: "/Images/TopConsultants/1730279048_shutterstock_2304685361.avif",
        bio: "Specialized in visa support and SOP writing for top universities.",
        rating: 4.6,
        reviews: 120,
        location: "Rangpur , Bangladesh",
        services: "Visa, SOP Writing"
    },
    {
        id: 3,
        agency: "EduWorld Services",
        image: "/Images/TopConsultants/1730279048_shutterstock_2304685361.avif",
        bio: "Trusted partner for Australia & New Zealand education pathways.",
        rating: 4.7,
        reviews: 135,
        location: "Banasree , Dhaka",
        services: "University Application, Counseling"
    },
    {
        id: 4,
        agency: "Pathway Abroad",
        image: "/Images/TopConsultants/1730279048_shutterstock_2304685361.avif",
        bio: "One-stop solution for IELTS, counseling, and application support.",
        rating: 4.9,
        reviews: 200,
        location: "Khilkhet, Dhaka",
        services: "IELTS Prep, Counseling, Application Support"
    },
];

const TopConsultants = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:my-20 my-5'>
            <div className='flex justify-between flex-wrap items-center'>
                <h2 className='text-3xl font-semibold text-primary'>Top Consultants</h2>
                <Link href="/consultants" className='text-primary hover:text-primary-dark underline'> View All Consultants</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:mt-10 mt-5">
                {consultants.map((consultant) => (
                    <div key={consultant.id} className="bg-white rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] overflow-hidden hover:shadow-lg transition duration-300">
                        <img src={consultant.image} alt={consultant.agency} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{consultant.agency}</h3>
                            <h3 className='flex items-center gap-1 my-2 text-primary'>
                                {/* <img className='w-5' src="https://cdn-icons-png.flaticon.com/512/18610/18610175.png" alt="" />  */}
                                {consultant.services}
                            </h3>
                            <p className="text-sm text-gray-600 my-2">{consultant.bio}</p>
                            <div className='flex justify-between items-center flex-wrap'>
                                <div className="flex items-center text-yellow-400 gap-1">
                                    <FaStar className='-mt-1' />
                                    <span className="text-sm font-medium">{consultant.rating} ({consultant.reviews})</span>
                                </div>
                                <span className='flex items-center gap-1 text-gray-500'><CiLocationOn className='text-xl' />{consultant.location}</span>
                            </div>
                            <Link href={`/consultants/${consultant.id}`} className="mt-2 inline-block bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary-dark">View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopConsultants;
