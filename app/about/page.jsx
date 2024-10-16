import React from 'react';
import { FaTruck, FaGlobe, FaHandshake, FaIndustry } from 'react-icons/fa';
import { GiCargoShip } from "react-icons/gi";

export const metadata = {
    title: "Darya Cargo - Reliable International Shipping & Logistics Solutions",
    description: "Darya Cargo offers fast, reliable, and affordable international shipping and logistics services. We specialize in cargo transport, freight forwarding, and supply chain management worldwide. Contact us for inquiries!",
    keywords: "Darya Cargo, international shipping, logistics, about, freight forwarding, cargo transport, supply chain management",
};

export default function Page() {
    return (
        <div className="flex flex-col items-center p-6 min-h-screen ">
            <div className="w-full max-w-6xl p-6 rounded-lg ">
                <h1 className="text-4xl md:text-9xl  md:mb-4 darya-cargo-text font-bold mb-10 text-center text-[#015049] ">Darya Cargo</h1>
                
                <p className="text-lg mb-8 flex items-center md:mt-20">
                    {/* <GiCargoShip className="text-blue-500   w-32 h-32 mr-4" /> */}
                    We are a cargo company based in Afghanistan, specializing in the efficient transportation and delivery of goods both domestically and internationally. Our services include freight forwarding, custom clearance, and handling logistics for various industries, ensuring safe and timely delivery.
                </p>
                
                <p className="text-lg  mb-8 flex items-center">
                    {/* <FaGlobe className="text-green-500 w-20 h-20 mr-4" /> */}
                    With a strong network of partners and a focus on customer satisfaction, we aim to streamline supply chains and support the growth of businesses in Afghanistan, connecting them to global markets with reliable solutions.
                </p>
                
                <p className="text-lg  mb-8 flex items-center">
                    {/* <FaHandshake className="text-yellow-500 w-20 h-20 mr-4" /> */}
                    Darya Cargo works with clients to help them exceed industry standards and improve performances by offering customized and reliable solutions that optimize their supply chain.
                </p>
                
                <p className="text-lg  mb-8 flex items-center">
                    {/* <FaIndustry className="text-purple-500 w-20 h-20 mr-4" /> */}
                    We focus on connecting businesses to global markets while ensuring efficient, safe, and timely delivery across industries like manufacturing, retail, and more.
                </p>
            </div>
        </div>
    );
}
