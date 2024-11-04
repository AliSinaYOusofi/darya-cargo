"use client"

import Image from "next/image";
import Logo from '/public/images/logo.jpg';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { FaBox, FaGlobe, FaPlane, FaShip, FaShippingFast, FaTruck } from "react-icons/fa";
import { ServiceCard } from "@/components/ServiceCard";
import CargoStats from "@/components/Stats";
import { useGSAP } from "@gsap/react";
import TrackYourShipments from "@/components/TrackShipment";
import AnimatedText from "@/components/RiverDarya";
gsap.registerPlugin(ScrollTrigger);
const services = [
  { icon: <FaShippingFast className="text-blue-600" />, header: 'Express Shipping', description: 'Fast and reliable express shipping for urgent deliveries worldwide.' },
  { icon: <FaBox className="text-blue-600" />, header: 'Warehousing Solutions', description: 'Secure storage and inventory management for your cargo needs.' },
  { icon: <FaPlane className="text-blue-600" />, header: 'Air Freight', description: 'Efficient air freight services for rapid international shipping.' },
  { icon: <FaShip className="text-blue-600" />, header: 'Ocean Freight', description: 'Cost-effective and reliable ocean freight solutions for large shipments.' },
  { icon: <FaTruck className="text-blue-600" />, header: 'Ground Transportation', description: 'Comprehensive ground transport services to meet regional delivery needs.' },
  { icon: <FaGlobe className="text-blue-600" />, header: 'Customs Clearance', description: 'Professional customs clearance to ensure hassle-free import and export.' },
];

export default function Home() {
  const servicesRef = useRef(null);

  useEffect(() => {
    
    const timeline1 = gsap.timeline();
    const serviceRefCurr = servicesRef.current;

    timeline1.fromTo(".logo", { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 0.5 });
    timeline1.fromTo(".background-image", { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.5 });
    timeline1.fromTo(".darya-cargo-text", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.5 });
    timeline1.fromTo(".big-text", { opacity: 0, y: -100 }, { opacity: 1, y: 1, duration: 1 });
    timeline1.fromTo(".coming-soon-text", { opacity: 0, y: -100 }, { opacity: 1, y: 1, duration: 1 });
    
  }, []);

  useGSAP(() => {
    const boxes = gsap.utils.toArray(".service");
    boxes.forEach((box) => {
      gsap.from(box, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: box,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          toggleActions: "play pause resume reset"
        },
      });
    });
  }, []);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="relative w-full h-screen">
        <Navbar />
        <HeroSection />

        <section className="py-12 w-[90%] mx-auto">
          <div ref={servicesRef} className="container mx-auto px-4">
            <h2  className="services text-3xl md:text-9xl font-semibold text-center mb-20 text-white mt-20">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                  <div className="service">
                    <ServiceCard
                      key={index}
                      icon={service.icon}
                      header={service.header}
                      description={service.description}
                      
                    />
                  </div>
                
              ))}
            </div>
          </div>
        </section>

        <TrackYourShipments />

        <CargoStats />

        <AnimatedText />
        <Footer />
      </main>
    </div>
  );
}
