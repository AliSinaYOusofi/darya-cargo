import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export const metadata = {
    title: "Darya Cargo - Reliable International Shipping & Logistics Solutions",
    description: "Darya Cargo offers fast, reliable, and affordable international shipping and logistics services. We specialize in cargo transport, freight forwarding, and supply chain management worldwide. Contact us for inquiries!",
    keywords: "Darya Cargo, international shipping, logistics, contact, freight forwarding, cargo transport, supply chain management",
};

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-6 ">
            {/* Centered Contact Us Section */}
            <div className="w-full max-w-6xl p-12 rounded-lg mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-[#015049]">Contact Us</h1>
                <p className="text-lg md:text-2xl mb-12 text-center">
                    We're here to help. Reach out to us via the contact methods below.
                </p>

                <div className="flex flex-col space-y-6 mb-10">
                    <div className="flex items-center justify-center  space-x-2 md:space-x-4">
                        <FaEnvelope className="text-blue-500 w-8 h-8" />
                        <a href="mailto:info@daryacargo.com" className="text-lg  md:text-xl font-medium hover:text-blue-500">
                            info@daryacargo.com
                        </a>
                    </div>

                    <div className="flex items-center justify-center  space-x-2 md:space-x-4">
                        <FaPhone className="text-green-500 w-8 h-8" />
                        
                        <a href="tel:+93782868883" className="text-lg md:text-xl font-medium hover:text-green-500">
                            +93 (782) 868-883
                        </a>
                    </div>

                    <div className="flex items-center justify-center space-x-2 md:space-x-4">
                        <FaWhatsapp className="text-green-500 w-8 h-8" />
                        <a 
                            href="https://wa.me/93782868883" 
                            className="text-lg md:text-xl font-medium hover:text-green-500" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            +93 (782) 868-883
                        </a>
                    </div>


                    {/* <div className="flex items-center justify-center md:space-x-4">
                        <FaMapMarkerAlt className="text-red-500 w-8 h-8" />
                        <p className="text-lg md:text-xl font-medium">
                            Kabul, Afghanistan
                        </p>
                    </div> */}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg md:text-xl">
                        We're available for any inquiries. Reach out via email, phone, or leave us a message here.
                    </p>
                </div>
            </div>
        </div>
    );
}
