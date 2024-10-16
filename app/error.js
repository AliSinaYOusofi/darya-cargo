"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

import deliveryTruck from "/public/images/not-found.jpg"; // Make sure to update this path as necessary

export default function CustomError() {
    
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className={`relative min-h-screen flex flex-col items-center justify-center`}>
        
            <Image
                src={deliveryTruck}
                alt="Cargo error"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-[1]" // Send the image behind the text
            />

            <div className={`text-center z-10 ${theme === 'dark' ? 'text-red-300' : 'text-red-900'}`}>
                <h1 className="text-7xl md:text-9xl font-bold mb-6">
                    Oops!
                </h1>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Something Went Wrong
                </h1>

                <p className={`text-lg md:text-2xl mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                    We're sorry, but the page you were looking for has encountered an error.
                </p>

                <Link
                href="/"
                className={`px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all transform hover:scale-105 ${
                    theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-500 text-white hover:bg-green-600'
                }`}
                >
                    Go back to Home
                </Link>
            </div>
        </div>
    );
}
