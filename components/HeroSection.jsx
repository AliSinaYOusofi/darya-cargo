import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import cargoImage from "/public/images/cargo1.jpg"; // Replace with your image path
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fragile from '../public/images/fragile.jpg'
import cargoLogistic from '../public/images/cargo logistic.jpg'
import customClearence from '../public/images/custom clearence.jpg'
import warehouse from '../public/images/warhouse.jpg'
import logisticParking from '../public/images/logistic packing.jpg'

export default function HeroSection() {
    const sliderRef = useRef(null); // Reference for the slider

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    // Create an array to hold carousel items with services
    const carouselItems = [
        {
            title: "Worldwide Commercial Cargo Logistics",
            description: "We provide efficient and secure logistics solutions for commercial shipments, ensuring timely delivery across international destinations.",
            image: cargoLogistic,
        },
        {
            title: "Professional Packing Services",
            description: "Using high-quality materials, we ensure safe and professional packing for all commercial goods, protecting shipments throughout their journey.",
            image: logisticParking,
        },
        {
            title: "Customs Clearance Management",
            description: "Our team handles all necessary customs documentation with accuracy and speed, ensuring a seamless customs clearance process.",
            image: customClearence,
        },
        {
            title: "Modern and Secure Warehousing",
            description: "Darya Cargo offers safe and well-maintained warehousing solutions for storage, providing clients with peace of mind.",
            image: warehouse,
        },
        {
            title: "Efficient Customs Support at Destination",
            description: "Our international network facilitates swift customs clearance in destination countries, reducing delays.",
            image: cargoImage,
        },
        {
            title: "Special Handling for Sensitive Cargo",
            description: "We employ special handling protocols for sensitive and high-value shipments, ensuring they reach their destination securely.",
            image: fragile,
        },
    ];

    return (
        <div className="relative mt-10">
            <Slider ref={sliderRef} {...settings}>
                {carouselItems.map((item, index) => (
                    <div key={index} className="relative w-full">
                        <Image
                            className="h-[500px] w-full object-cover" // Ensure height is 500px
                            src={item.image}
                            alt={`Cargo Image ${index + 1}`}
                            priority
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                            <h1 className="text-3xl md:text-6xl font-bold md:mb-4 mb-2 darya-cargo-text">{item.title}</h1>
                            <p className="text-lg md:text-xl w-[80%] lg:w-[60%] big-text">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Centered Navigation Buttons */}
            <div className="absolute hidden inset-0 md:flex items-center justify-between px-4">
                <button
                    className="bg-gray-600 text-white rounded-full p-2 hover:bg-gray-700 transition duration-200"
                    onClick={() => sliderRef.current.slickPrev()}
                >
                    <FaChevronLeft className="h-6 w-6" />
                </button>
                <button
                    className="bg-gray-600 text-white rounded-full p-2 hover:bg-gray-700 transition duration-200"
                    onClick={() => sliderRef.current.slickNext()}
                >
                    <FaChevronRight className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
}
