"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HiArrowRight, HiArrowDown } from "react-icons/hi2";
import port from "../public/images/cargo1.jpg";
import containers from "../public/images/cargo logistic.jpg";
import warehouse from "../public/images/warhouse.jpg";

const slides = [port, containers, warehouse];
const SLIDE_DURATION = 7000;

const highlights = [
  { value: "1,000+", label: "Shipments delivered" },
  { value: "45+", label: "Countries served" },
  { value: "500+", label: "Active clients" },
  { value: "24/7", label: "Cargo support" },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".hero-el", {
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.2,
      });
    });
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-brand-950">
      {/* Crossfading backgrounds */}
      {slides.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className={`object-cover ${i === index ? "hero-zoom" : ""}`}
          />
        </div>
      ))}

      {/* Readability scrims */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/75 to-brand-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-brand-950/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-40 md:px-8 md:pb-20">
        <p className="hero-el font-mono text-[11px] uppercase tracking-[0.35em] text-accent md:text-xs">
          Freight · Customs · Warehousing
        </p>

        <h1 className="hero-el mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Reliable cargo from Afghanistan to the world.
        </h1>

        <p className="hero-el mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          Darya Cargo handles freight forwarding, customs clearance, packing and
          warehousing — one partner for your shipment&rsquo;s entire journey.
        </p>

        <div className="hero-el mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-brand-950 transition-all duration-300 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/25 md:text-base"
          >
            Get a quote
            <HiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href="#services"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10 md:text-base"
          >
            Explore services
            <HiArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </div>

        {/* Highlights strip */}
        <div className="hero-el mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-4 md:mt-20">
          {highlights.map(({ value, label }) => (
            <div key={label}>
              <p className="font-mono text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {value}
              </p>
              <p className="mt-1.5 text-xs uppercase tracking-[0.15em] text-white/50 md:text-[13px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
