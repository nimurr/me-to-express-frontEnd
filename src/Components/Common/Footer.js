'use client';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">GlobalEdu</h3>
                        <p className="text-gray-400 text-sm">
                            Empowering students worldwide to achieve their academic dreams through expert consultancy and personalized guidance.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="/about" className="hover:text-white transition">About</a></li>
                            <li><a href="/services" className="hover:text-white transition">Services</a></li>
                            <li><a href="/consultants" className="hover:text-white transition">Consultants</a></li>
                            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>Email: <a href="mailto:info@globaledu.com" className="hover:text-white transition">info@globaledu.com</a></li>
                            <li>Phone: <a href="tel:+880123456789" className="hover:text-white transition">+880 123 456 789</a></li>
                            <li>Address: 123 Education St, Dhaka, Bangladesh</li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Get the latest updates and offers.
                        </p>
                        <form className="flex flex-col bg-white rounded-lg sm:flex-row items-center">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full sm:w-auto flex-grow px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="mt-2 w-full sm:mt-0 sm:ml-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                            <FaTwitter />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                            <FaInstagram />
                        </a>
                    </div>

                    {/* Legal Links */}
                    <div className="flex space-x-4 text-gray-400 text-sm">
                        <a href="/terms" className="hover:text-white transition">Terms of Service</a>
                        <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-4 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} GlobalEdu. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
