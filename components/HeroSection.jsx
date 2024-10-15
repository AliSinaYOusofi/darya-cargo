import React from 'react'
import cargoImage from "/public/images/cargo.jpg"
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative">
        <div className="w-[90%]   mx-auto ">
            <Image
                className="md:h-fit h-[500px]  background-image rounded-lg"
                src={cargoImage}
                alt="Cargo Image"
                priority
            />
        </div>

        <div className="absolute top-10 w-fit h-fit   inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-9xl font-bold md:mb-4 mb-2 darya-cargo-text">Darya Cargo</h1>
            <p className="text-lg  md:text-xl w-[80%] lg:w-[60%] big-text text-gray-200">
                Darya Cargo offers fast, reliable, and affordable international
                shipping and logistics services. We specialize in cargo transport,
                freight forwarding, and supply chain management worldwide.
            </p>
        </div>
    </div>
  )
}
