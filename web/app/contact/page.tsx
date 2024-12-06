'use client';

import React, { useState } from 'react';
import Navbar from '@/app/components/Navbar';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div
            className="min-h-screen flex flex-col mt-4"
            style={{
                backgroundImage: `url('/images/homeBg.jpg')`, // Update the path to your image
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Navbar />
            <div className="flex-grow flex items-center justify-center mt-12">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg ">
                    <h1 className="text-3xl font-semibold text-center mb-6" style={{ color: '#2c7074' }}>Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition h-32 resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                            style={{ backgroundColor: '#2c7074' }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
