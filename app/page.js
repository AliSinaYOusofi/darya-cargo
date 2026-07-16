"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaBox,
  FaGlobe,
  FaPlane,
  FaShip,
  FaShippingFast,
  FaTruck,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import CargoStats from "@/components/Stats";
import MissionAndVision from "@/components/MissionVision";
import TrackYourShipments from "@/components/TrackShipment";
import BrandMarquee from "@/components/RiverDarya";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: <FaShippingFast />, header: 'Express Shipping', description: 'Fast and reliable express shipping for urgent deliveries worldwide.' },
  { icon: <FaBox />, header: 'Warehousing Solutions', description: 'Secure storage and inventory management for your cargo needs.' },
  { icon: <FaPlane />, header: 'Air Freight', description: 'Efficient air freight services for rapid international shipping.' },
  { icon: <FaShip />, header: 'Ocean Freight', description: 'Cost-effective and reliable ocean freight solutions for large shipments.' },
  { icon: <FaTruck />, header: 'Ground Transportation', description: 'Comprehensive ground transport services to meet regional delivery needs.' },
  { icon: <FaGlobe />, header: 'Customs Clearance', description: 'Professional customs clearance to ensure hassle-free import and export.' },
];

export default function Home() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Section header: eyebrow and heading rise in sequence
      gsap.from(".services > *", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".services",
          start: "top 85%",
          once: true,
        },
      });

      // Cards: staggered rise as each row enters the viewport
      gsap.set(".service", { opacity: 0, y: 64, scale: 0.96 });
      ScrollTrigger.batch(".service", {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
            overwrite: true,
          }),
      });

      // Shared reveal system used by the remaining sections: data-reveal
      // fades an element up once; data-reveal-group staggers its children.
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 32,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray("[data-reveal-group]").forEach((group) => {
        gsap.from(group.children, {
          opacity: 0,
          y: 32,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: group, start: "top 85%", once: true },
        });
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        <section id="services" className="scroll-mt-24 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="services mx-auto max-w-2xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand-600 md:text-xs">
                What we do
              </p>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl md:text-5xl">
                Cargo services for every route.
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div key={service.header} className="service h-full">
                  <ServiceCard
                    icon={service.icon}
                    header={service.header}
                    description={service.description}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <CargoStats />
        <MissionAndVision />
        <TrackYourShipments />
        <BrandMarquee />
      </main>
      <Footer />
    </>
  );
}
