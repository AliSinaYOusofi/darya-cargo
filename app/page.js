"use client"

import Image from "next/image";
import cargoImage from '/public/images/WhatsApp Image 2024-10-13 at 13.35.50_cc0eb8ac.jpg'
import Logo from '/public/images/logo.jpg'
import gsap from "gsap";
import { useEffect } from "react";

export default function Home() {

  useEffect( () => {
    const timeline1 = gsap.timeline();

    timeline1.fromTo(".background-image", { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      });

    timeline1.fromTo(
      ".logo",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5, 
        
      }
    );

    timeline1.fromTo(
      ".darya-cargo-text",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: .5, 
      }
      
    );

    timeline1.fromTo(
      ".big-text",
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        scale: 1,
        duration: 1, 
        y: 1
      }

    );

    timeline1.fromTo(
      ".coming-soon-text",
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        scale: 1,
        duration: 1, 
        y: 1
      }
    );
  }, [])
  
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      
      <main className="relative w-full h-screen">
      
        <div className="logo absolute top-4 left-4  z-20">
      
          <Image
            className=" h-[70px] w-[70px]  md:w-[120px] md:h-[120px]  rounded-full"
            src={Logo}
            alt="Cargo Image"
            priority
          />
        </div>

        <Image
          className="md:object-cover blur-[1px] object-cover background-image"
          src={cargoImage}
          alt="Cargo Image"
          layout="fill"
          priority
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <div className="absolute w-[90%] mx-auto inset-0 flex flex-col items-center justify-center  text-center z-20">
          
        <div className="flex flex-col items-center justify-center text-center">
          
          <h1 className="text-white darya-cargo-text text-5xl sm:text-8xl lg:text-[10vw] font-extrabold mt-6">
            Darya Cargo
          </h1>
          
        </div>


          <div>
            <p className="text-lg big-text sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mt-4">
              We are a leading cargo company based in Afghanistan, providing comprehensive transportation solutions for domestic and international markets. Our services include freight forwarding, customs clearance, and logistics management. With a strong partner network and a commitment to excellence, we streamline supply chains and enable businesses to connect with global markets, ensuring reliable and timely deliveries.
            </p>
            
          </div>
          
          <h2 className="text-gray-200 coming-soon-text mt-10 text-3xl sm:text-5xl lg:text-6xl tracking-wide uppercase">
            Coming Soon
          </h2>
        </div>
      </main>
    </div>
  );
}
