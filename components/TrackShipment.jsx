"use client"; // This line is for Next.js 13+ app directory usage
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TrackYourShipments = () => {
  // Use the useGSAP hook to animate buttons and text on scroll
  useGSAP(() => {
    // Animate the title
    gsap.from(".title", {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: ".title",
        start: "top 80%", // Start animation when the title is 80% from the top of the viewport
        toggleActions: "play none none reverse", // Control the animation play state
      },
    });

    // Animate the subtitle
    gsap.from(".subtitle", {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: ".subtitle",
        start: "top 80%", // Start animation when the subtitle is 80% from the top of the viewport
        toggleActions: "play none none reverse", // Control the animation play state
        scrub: true
      },
    });

    // Animate the buttons
    const buttons = gsap.utils.toArray(".tracking-button"); // Get all buttons with class 'tracking-button'

    buttons.forEach((button) => {
      gsap.from(button, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: button,
          start: "top 80%", // Start animation when the button is 80% from the top of the viewport
          toggleActions: "play none none reverse", // Control the animation play state
          scrub: true
        },
      });
    });
  }, []);

  return (
    <div className="relative h-fit mt-20 border-2 border-gray-300 p-10 mx-auto w-[90%] rounded-md flex flex-col justify-center items-center text-center space-y-6">
      <h2 className="title text-3xl md:text-8xl font-bold tracking-wider mb-4 text-black">Track Your Shipments</h2>
      <p className="subtitle text-xl md:text-3xl font-medium mx-auto mb-8 text-black">
        Choose a carrier below to track your shipment’s journey in real-time.
      </p>
      <div className="flex flex-col justify-center items-center space-y-4">
        <a
          href="https://www.ups.com/track"
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-button flex items-center text-black text-lg font-semibold py-3 px-6 rounded-md shadow-lg transform transition duration-300 hover:-translate-y-1"
        >
          <Image
            src="https://seeklogo.com/images/U/ups-united-parcel-service-logo-DC08EF8E0D-seeklogo.com.png"
            alt="UPS Logo"
            width={40}
            height={40}
            className="mr-4"
          />
          Track with UPS
        </a>
        <a
          href="https://www.turkishcargo.com.tr/en/online-services/track-your-shipments"
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-button flex items-center text-black text-lg font-semibold py-3 px-6 rounded-md shadow-lg transform transition duration-300 hover:-translate-y-1"
        >
          <Image
            src="https://seeklogo.com/images/T/turkish-airlines-logo-25BACC2D0C-seeklogo.com.png"
            alt="Turkish Airlines Cargo Logo"
            width={40}
            height={40}
            className="mr-4"
          />
          Track with Turkish Airlines Cargo
        </a>
      </div>
    </div>
  );
};

export default TrackYourShipments;
