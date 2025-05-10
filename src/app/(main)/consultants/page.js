'use client';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import Link from 'next/link';

const consultants = [
    {
        id: 1,
        agency: 'GlobalEdu Agency',
        image: '/Images/TopConsultants/1730279048_shutterstock_2304685361.avif',
        bio: 'Helping students with UK, USA, and Canada admissions for 10+ years.',
        rating: 4.8,
        reviews: 150,
        location: 'Dhaka, Bangladesh',
        services: 'Visa, Counseling, SOP Writing',
    },
    {
        id: 2,
        agency: 'StudyBridge Consultants',
        image: '/Images/TopConsultants/1730279048_shutterstock_2304685361.avif',
        bio: 'Specialized in visa support and SOP writing for top universities.',
        rating: 4.6,
        reviews: 120,
        location: 'Rangpur, Bangladesh',
        services: 'Visa, SOP Writing',
    },
    {
        id: 3,
        agency: 'EduWorld Services',
        image: '/Images/TopConsultants/1730279048_shutterstock_2304685361.avif',
        bio: 'Trusted partner for Australia & New Zealand education pathways.',
        rating: 4.7,
        reviews: 135,
        location: 'Banasree, Dhaka',
        services: 'University Application, Counseling',
    },
    {
        id: 4,
        agency: 'Pathway Abroad',
        image: '/Images/TopConsultants/1730279048_shutterstock_2304685361.avif',
        bio: 'One-stop solution for IELTS, counseling, and application support.',
        rating: 4.9,
        reviews: 200,
        location: 'Khilkhet, Dhaka',
        services: 'IELTS Prep, Counseling, Application Support',
    },
    {
        id: 5,
        agency: 'Pathway Abroad',
        image: '/Images/TopConsultants/1730279048_shutterstock_2304685361.avif',
        bio: 'One-stop solution for IELTS, counseling, and application support.',
        rating: 4.9,
        reviews: 200,
        location: 'Khilkhet, Dhaka',
        services: 'IELTS Prep, Counseling, Application Support',
    },
    {
        id: 6,
        agency: 'Pathway Abroad',
        image: '/Images/TopConsultants/1730279048_shutterstock_2304685361.avif',
        bio: 'One-stop solution for IELTS, counseling, and application support.',
        rating: 4.9,
        reviews: 200,
        location: 'Khilkhet, Dhaka',
        services: 'IELTS Prep, Counseling, Application Support',
    },
    {
        id: 7,
        agency: 'Pathway Abroad',
        image: '/Images/TopConsultants/1730279048_shutterstock_2304685361.avif',
        bio: 'One-stop solution for IELTS, counseling, and application support.',
        rating: 4.9,
        reviews: 200,
        location: 'Khilkhet, Dhaka',
        services: 'IELTS Prep, Counseling, Application Support',
    },
];
const TopRatedConsultants = () => {
    const [filter, setFilter] = useState({
        country: '',
        minRating: 0,
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Adjust as needed

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prevFilter) => ({
            ...prevFilter,
            [name]: value,
        }));
    };

    const filteredConsultants = consultants.filter((consultant) => {
        const matchesCountry = filter.country
            ? consultant.location.toLowerCase().includes(filter.country.toLowerCase())
            : true;
        const matchesRating = consultant.rating >= filter.minRating;

        return matchesCountry && matchesRating;
    });

    // Get the current consultants for the current page
    const indexOfLastConsultant = currentPage * itemsPerPage;
    const indexOfFirstConsultant = indexOfLastConsultant - itemsPerPage;
    const currentConsultants = filteredConsultants.slice(indexOfFirstConsultant, indexOfLastConsultant);

    const totalPages = Math.ceil(filteredConsultants.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 md:py-16">
            <div className="mb-8">
                <label htmlFor="country" className="mb-2 block">Search by Country or Rating:</label>
                <div className='flex gap-2'>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={filter.country}
                        onChange={handleFilterChange}
                        placeholder="Enter country"
                        className="border p-2 rounded"
                    />
                    <select
                        id="minRating"
                        name="minRating"
                        value={filter.minRating}
                        onChange={handleFilterChange}
                        className="border p-2 rounded"
                    >
                        <option value={0}>All Ratings</option>
                        <option value={4}>4 & above</option>
                        <option value={4.5}>4.5 & above</option>
                        <option value={5}>5</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {currentConsultants.map((consultant) => (
                    <div key={consultant.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <img
                            src={consultant.image}
                            alt={consultant.agency}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{consultant.agency}</h3>
                            <p className="mt-2 text-sm text-primary">{consultant.services}</p>
                            <p className="text-sm text-gray-600 my-2">{consultant.bio}</p>
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <div className="flex items-center text-yellow-400">
                                    <FaStar className="mr-1" />
                                    <span>{consultant.rating} ({consultant.reviews})</span>
                                </div>
                                <div className="flex items-center">
                                    <CiLocationOn className="mr-1" />
                                    <span>{consultant.location}</span>
                                </div>
                            </div>
                            <Link href={`/consultants/${consultant.id}`} className='mt-2 inline-block bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary-dark'>View Details</Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom Pagination */}
            <div className="mt-8 flex justify-center">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 mx-1  rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed bg-gray-200' : ' text-white bg-primary'}`}
                >
                    Prev
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 mx-1  rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed bg-gray-200' : ' text-white bg-primary'}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TopRatedConsultants;
