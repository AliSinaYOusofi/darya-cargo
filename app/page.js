"use client"

import Image from "next/image";
import cargoImage from '/public/images/WhatsApp Image 2024-10-13 at 13.35.50_cc0eb8ac.jpg'
import Logo from '/public/images/WhatsApp Image 2024-10-13 at 13.36.48_3da1269d.jpg'
import gsap from "gsap";
import { useEffect } from "react";

export default function Home() {

  useEffect( () => {
    const timeline1 = gsap.timeline();

    timeline1.fromTo(".background-image", { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

    timeline1.fromTo(
      ".logo",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8, 
        ease: "back.out(1.7)",
      }
    );

    timeline1.fromTo(
      ".coming-soon-text",
      { opacity: 0, scale: 0.3 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5, 
        ease: "bounce.out",
      }
      
    );

    timeline1.fromTo(
      ".dot1",
      { opacity: 0, scale: 0.3 },
      {
        opacity: 1,
        scale: 1,
        duration: 1, 
        ease: "bounce.out",
      }

    );

    timeline1.fromTo(
      ".dot2",
      { opacity: 0, scale: 0.3 },
      {
        opacity: 1,
        scale: 1,
        duration: 1, 
        ease: "bounce.out",
      }

    );

    timeline1.fromTo(
      ".dot3",
      { opacity: 0, scale: 0.3 },
      {
        opacity: 1,
        scale: 1,
        duration: 1, 
        ease: "bounce.out",
      }

    );
  }, [])
  
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">

      <main className="relative w-full h-screen">
        
        <div className=" .logo">
          <Image
            className="absolute logo top-4 h-[60px] w-[60px] left-4 md:w-[100px] md:h-[100px] z-[99] rounded-full"
            src={Logo}
            alt="Cargo Image"
            priority
          />
        </div>


        <Image
          className="md:object-cover object-cover background-image"
          src={cargoImage}
          alt="Cargo Image"
          layout="fill"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-4xl sm:text-8xl lg:text-[10vw] font-bold text-center">
          
          <p className="text-white coming-soon-text ">
            Coming Soon
          </p>
          
          <span  className="dot1">.</span>
          <span className="dot2">.</span>
          <span className="dot3">.</span>
          
        </div>
      </main>
    </div>
  );
}
