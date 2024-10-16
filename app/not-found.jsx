"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

import deliveryTruck from "/public/images/not-found.jpg";

export default function Custom404() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center `}
    >
      
      <Image
        src={deliveryTruck}
        alt="Cargo not found"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-[1]" // Send the image behind the text
      />

      <div className="text-center z-10 text-red-900">
        <h1 className="text-7xl md:text-10xl font-bold mb-6">
          404
        </h1>

        <h1 className="text-7xl md:text-10xl font-bold mb-6">
          NOT-FOUND
        </h1>

        <p className="text-lg md:text-2xl mb-8 text-white">
          Oops! The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className={`px-8 py-4 rounded-full text-white text-lg font-semibold shadow-lg transition-all transform hover:scale-105 bg-green-500`}
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
