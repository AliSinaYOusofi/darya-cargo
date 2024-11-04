import React from 'react';
import CargoImage from '../../public/images/6184552.jpg';
import Image from 'next/image';

export const metadata = {
    title: "Darya Cargo - Reliable International Shipping & Logistics Solutions",
    description: "Darya Cargo offers fast, reliable, and affordable international shipping and logistics services. We specialize in cargo transport, freight forwarding, and supply chain management worldwide. Contact us for inquiries!",
    keywords: "Darya Cargo, international shipping, logistics, about, freight forwarding, cargo transport, supply chain management",
};

export default function Page() {
    return (
        <div className="flex flex-col items-center p-6 min-h-screen">
            <div className="w-full max-w-6xl p-6 rounded-lg">
                <h1 className="text-4xl md:text-8xl font-bold mb-10 text-center text-[#064f47]">Darya Cargo</h1>

                <div className="flex flex-col md:flex-row items-center md:space-x-10">
                    <div className="flex-1 mb-8 md:mb-0">
                        <p className="text-lg mb-4">
                            We are a cargo company based in Afghanistan, specializing in the efficient transportation and delivery of goods both domestically and internationally. Our services include freight forwarding, customs clearance, and handling logistics for various industries, ensuring safe and timely delivery. With a strong network of partners and a focus on customer satisfaction, we aim to streamline supply chains and support the growth of businesses in Afghanistan, connecting them to global markets with reliable solutions. Darya Cargo works with clients to help them exceed industry standards and improve performance by offering customized and reliable solutions that optimize their supply chain. We focus on connecting businesses to global markets while ensuring efficient, safe, and timely delivery across industries like manufacturing, retail, and more.
                        </p>
                    </div>

                    <div className="flex-1">
                        <Image
                            className="rounded-lg"
                            src={CargoImage}
                            alt="Cargo Image"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
