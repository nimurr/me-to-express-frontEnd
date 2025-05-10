'use client';
import React from 'react';

const JoinAsConsultant = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 md:my-20 my-5 text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">Want to Join as a Consultant?</h2>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                We are always looking for experienced, passionate, and dedicated consultants to join our growing team.
            </p>

            <div className="bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-xl p-8 max-w-2xl mx-auto">
                <form className="space-y-5">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea
                        rows="4"
                        placeholder="Tell us briefly about your experience"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JoinAsConsultant;
