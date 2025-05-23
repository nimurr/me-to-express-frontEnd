'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { CiLock } from "react-icons/ci";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showOthersDropdown, setShowOthersDropdown] = useState(false);
    const [showMobileOthers, setShowMobileOthers] = useState(false);
    const dropdownRef = useRef(null);

    const router = useRouter(); // Hook to access the current route


    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Consultants', href: '/consultants' },
        { name: 'Services', href: '#' },
        { name: 'Reviews', href: '#' },
        {
            name: 'Others',
            dropdown: [
                { name: 'Countries', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'About Us', href: '#' },
                { name: 'Contact Us', href: '#' },
            ],
        },
    ];

    // Close dropdowns function
    const closeDropdowns = () => {
        setShowOthersDropdown(false);
        setShowMobileOthers(false);
    };

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdowns();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Function to determine if the link is active
    const isActive = (href) => router.pathname === href;

    console.log(router);

    return (
        <header className="bg-[#ffffff9c] backdrop-blur-lg border-b border-secondary fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-5">
                    <div className="text-xl font-bold text-secondary">
                        <img className='w-20' src="/Images/Auth/logo.png" alt="" />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-10 text-gray-700 font-medium relative">
                        {navItems.map((item, index) =>
                            item.dropdown ? (
                                <div key={index} className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => {
                                            setShowOthersDropdown(!showOthersDropdown);
                                        }}
                                        className="flex items-center gap-1 hover:text-secondary text-sm transition"
                                    >
                                        {item.name} <FiChevronDown className="mt-0.5" />
                                    </button>
                                    {showOthersDropdown && (
                                        <div className="absolute left-0 mt-8 w-40 bg-white border rounded shadow-md py-1 z-10">
                                            {item.dropdown.map((subItem, i) => (
                                                <a
                                                    key={i}
                                                    href={subItem.href}
                                                    onClick={closeDropdowns}
                                                    className={`block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 ${isActive(subItem.href) ? 'text-primary' : ''}`}
                                                >
                                                    {subItem.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`hover:text-secondary text-sm transition ${isActive(item.href) ? 'text-primary' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            )
                        )}
                    </nav>

                    {/* Desktop Login */}
                    <div className="hidden md:block">
                        <Link href="/login" className="flex font-semibold items-center gap-2 px-4 py-2 border border-primary text-primary rounded hover:bg-secondary hover:text-white transition">
                            <CiLock className='text-xl' /> Login / Register
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md px-4 pb-4">
                    <nav className="flex flex-col space-y-3 text-gray-700 font-medium">
                        {navItems.map((item, index) =>
                            item.dropdown ? (
                                <div key={index}>
                                    <button
                                        onClick={() => setShowMobileOthers(prev => !prev)}
                                        className="flex justify-between items-center w-full text-left hover:text-secondary transition text-sm"
                                    >
                                        {item.name}
                                        <FiChevronDown
                                            className={`transform transition duration-200 ${showMobileOthers ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {showMobileOthers && (
                                        <div className="pl-4 mt-5 space-y-3">
                                            {item.dropdown.map((subItem, i) => (
                                                <a
                                                    key={i}
                                                    href={subItem.href}
                                                    onClick={() => {
                                                        closeDropdowns();
                                                        setIsOpen(false);
                                                    }}
                                                    className={`block text-sm text-gray-600 hover:text-secondary ${isActive(subItem.href) ? 'text-primary' : ''}`}
                                                >
                                                    {subItem.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`hover:text-secondary text-sm transition ${isActive(item.href) ? 'text-primary' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            )
                        )}
                        <Link href="/login" className="mt-2 font-semibold flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition">
                            <CiLock className='text-xl ' /> Login / Register
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
