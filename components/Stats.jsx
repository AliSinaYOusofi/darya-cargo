"use client";
import React, { useEffect } from "react";
import { FaShip, FaBoxOpen, FaUsers, FaGlobe } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const CargoStats = () => {
  
  useGSAP(() => {
      const boxes = gsap.utils.toArray(".stat");
      boxes.forEach((box) => {
        gsap.from(box, {
          opacity: 0,
          y: 100,
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "bottom bottom",
            scrub: true,
            toggleActions: "play pause resume reset",
          },
        });
      });
    }, []);
  return (
    <div className="stats mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 p-10 rounded-xl">
      <div className="stat bg-gradient-to-br from-[#064f47] to-[#075c52] rounded-lg p-8 flex flex-col items-center transition duration-300 ease-in-out hover:shadow-lg hover:shadow-[#0a6d61]/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10 blur-sm"></div>
        <div className="stat-figure text-[#00504A] bg-white p-2 rounded-full text-7xl mb-3 z-10">
          <FaShip />
        </div>
        <div className="stat-title text-xl font-bold text-white z-10">
          Shipments Delivered
        </div>
        <div className="stat-value text-3xl font-extrabold text-white z-10">
          1000+
        </div>
        <div className="stat-desc text-white mt-2 z-10">
          Total shipments in 2024
        </div>
      </div>

      <div className="stat bg-gradient-to-br from-[#064f47] to-[#075c52] rounded-lg p-8 flex flex-col items-center transition duration-300 ease-in-out hover:shadow-lg hover:shadow-[#0a6d61]/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10 blur-sm"></div>
        <div className="stat-figure text-[#00504A] bg-white p-2 rounded-full text-7xl mb-3 z-10">
          <FaBoxOpen />
        </div>
        <div className="stat-title text-xl font-bold text-white z-10">
          Packages Handled
        </div>
        <div className="stat-value text-3xl font-extrabold text-white z-10">
          2000+
        </div>
        <div className="stat-desc text-white mt-2 z-10">Over the last year</div>
      </div>

      <div className="stat bg-gradient-to-br from-[#064f47] to-[#075c52] rounded-lg p-8 flex flex-col items-center transition duration-300 ease-in-out hover:shadow-lg hover:shadow-[#0a6d61]/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10 blur-sm"></div>
        <div className="stat-figure text-[#00504A] bg-white p-2 rounded-full text-7xl mb-3 z-10">
          <FaUsers />
        </div>
        <div className="stat-title text-xl font-bold text-white z-10">
          Active Clients
        </div>
        <div className="stat-value text-3xl font-extrabold text-white z-10">
          500
        </div>
        <div className="stat-desc text-white mt-2 z-10">
          Registered users on our platform
        </div>
      </div>

      <div className="stat bg-gradient-to-br from-[#064f47] to-[#075c52] rounded-lg p-8 flex flex-col items-center transition duration-300 ease-in-out hover:shadow-lg hover:shadow-[#0a6d61]/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10 blur-sm"></div>
        <div className="stat-figure text-[#00504A] bg-white p-2 rounded-full text-7xl mb-3 z-10">
          <FaGlobe />
        </div>
        <div className="stat-title text-xl font-bold text-white z-10">
          Global Reach
        </div>
        <div className="stat-value text-3xl font-extrabold text-white z-10">
          45+
        </div>
        <div className="stat-desc text-white mt-2 z-10">Countries served</div>
      </div>
    </div>
  );
};

export default CargoStats;
