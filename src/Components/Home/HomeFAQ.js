'use client';
import React, { useState } from 'react';

const faqs = [
    {
        question: 'How can I join as a consultant?',
        answer: 'To join as a consultant, please fill out our consultant registration form available on the "Join as a Consultant" page. Our team will review your application and get back to you within 3-5 business days.',
    },
    {
        question: 'What qualifications are required to become a consultant?',
        answer: 'We look for consultants with a strong background in education counseling, preferably with experience in international student placements. Relevant certifications and a proven track record are advantageous.',
    },
    {
        question: 'Is there any fee to become a consultant?',
        answer: 'No, joining our platform as a consultant is free of charge. However, we do have a vetting process to ensure quality and reliability.',
    },
    {
        question: 'How do I get matched with students?',
        answer: 'Once approved, your profile will be visible to students seeking guidance. Our system also recommends consultants to students based on their preferences and your expertise.',
    },
];

const HomeFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-primary mb-10">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg shadow-sm transition"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 focus:outline-none"
                            >
                                {faq.question}
                                <span className="text-3xl">
                                    {activeIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeFAQ;
