'use client';
import React, { useEffect, useState } from 'react';

const popularCountryCodes = ['GB', 'US', 'CA', 'AU', 'DE', 'FR', 'JP', 'IT', 'NL', 'NZ'];

const PopulerCountry = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch('https://restcountries.com/v3.1/all');
                const data = await res.json();
                const filtered = data.filter(country =>
                    popularCountryCodes.includes(country.cca2)
                );
                const sorted = popularCountryCodes.map(code =>
                    filtered.find(country => country.cca2 === code)
                );
                setCountries(sorted);
            } catch (err) {
                console.error('Failed to fetch countries:', err);
            }
        };
        fetchCountries();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:my-20 my-5">
            <h2 className="text-3xl font-semibold text-primary mb-8">Popular Countries</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-6">
                {countries.map((country, index) => (
                    <div
                        key={index}
                        className="bg-white shadow hover:shadow-lg rounded-xl p-4 flex flex-col items-center transition"
                    >
                        <img
                            src={country.flags?.png}
                            alt={country.name?.common}
                            className="w-16 h-10 object-contain mb-3"
                        />
                        <p className="text-center text-sm font-medium">{country.name?.common}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopulerCountry;
