"use client"

import Image from "next/image";
import Logo from '/public/images/logo.jpg'
import gsap from "gsap";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {

  useEffect( () => {
    const timeline1 = gsap.timeline();

    timeline1.fromTo(
      ".logo",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5, 
        
      }
    );

    timeline1.fromTo(".background-image", { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      });

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
      
        <Navbar />
        <HeroSection />
        <Footer />
      </main>
    </div>
  );
}
