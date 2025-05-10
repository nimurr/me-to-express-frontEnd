'use client';
import React from 'react';

const FindConsultant = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Side – Image or Illustration */}
                    <div className="flex justify-center">
                        <img
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/help-assistance-3d-icon-download-in-png-blend-fbx-gltf-file-formats--support-character-guest-service-professional-growth-leadership-teamwork-pack-business-icons-9169597.png?f=webp"
                            alt="Consultant Help"
                            className="w-full"
                        />
                    </div>

                    {/* Right Side – Form */}
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-4">
                            Need Help Finding a Consultant?
                        </h2>
                        <p className="text-gray-600 mb-6 text-base">
                            Let us help you find the best consultant based on your goals, preferred study destination, and academic background.
                        </p>

                        <form className="space-y-4 bg-white p-6 rounded-lg shadow">
                            <input
                                type="text"
                                placeholder="Your Full Name"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Preferred Country"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="text"
                                placeholder="Academic Background"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <textarea
                                placeholder="Tell us about your study plan"
                                rows="4"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-md transition"
                            >
                                Find Me a Consultant
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindConsultant;
