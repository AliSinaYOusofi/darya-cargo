"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { HiArrowRight } from "react-icons/hi2";
import ship from "../public/images/cargo.jpg";
import containerYard from "../public/images/logistic packing.jpg";
import handling from "../public/images/fragile.jpg";

gsap.registerPlugin(ScrollTrigger);

const facts = [
  { value: "Kabul", label: "Headquarters" },
  { value: "45+", label: "Countries served" },
  { value: "24/7", label: "Cargo support" },
];

const values = [
  {
    number: "01",
    title: "Reliability first",
    body: "Every shipment is tracked, protected and delivered on schedule — we treat your cargo as if it were our own.",
  },
  {
    number: "02",
    title: "Global network",
    body: "A trusted web of partners across 45+ countries keeps your goods moving on every route — by air, sea and land.",
  },
  {
    number: "03",
    title: "Customs expertise",
    body: "We handle documentation and clearance so your imports and exports cross borders without friction.",
  },
  {
    number: "04",
    title: "Client partnership",
    body: "Customized solutions built around your supply chain — not the other way around.",
  },
];

export default function AboutContent() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Hero elements rise in sequence on load
      gsap.from(".about-hero-el", {
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.2,
      });

      // Shared reveal system (same contract as the home page):
      // data-reveal fades an element up once; data-reveal-group staggers children.
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
    <main>
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="relative flex min-h-[78svh] flex-col justify-end overflow-hidden bg-brand-950">
        <Image
          src={ship}
          alt="Aerial view of a loaded container ship at sea"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/70 to-brand-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/25 to-brand-950/50" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-44 md:px-8 md:pb-20">
          <p className="about-hero-el font-mono text-[11px] uppercase tracking-[0.35em] text-accent md:text-xs">
            About Darya Cargo
          </p>

          <h1 className="about-hero-el mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Moving Afghan trade forward.
          </h1>

          <p className="about-hero-el mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            From Kabul to ports around the world — we carry the goods, the
            paperwork and the promise behind every shipment.
          </p>

          <div className="about-hero-el mt-14 grid grid-cols-3 gap-6 border-t border-white/15 pt-8 md:mt-16">
            {facts.map(({ value, label }) => (
              <div key={label}>
                <p className="font-mono text-xl font-semibold tracking-tight text-white md:text-3xl">
                  {value}
                </p>
                <p className="mt-1.5 text-[11px] uppercase tracking-[0.15em] text-white/50 md:text-[13px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ Story ------------------------------ */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div data-reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand-600 md:text-xs">
                Our story
              </p>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl md:text-5xl">
                One partner for the whole journey.
              </h2>
            </div>

            <div className="mt-8 space-y-6" data-reveal-group>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                Darya Cargo is a logistics company based in Afghanistan,
                specializing in the efficient transportation and delivery of
                goods at home and across the world. From freight forwarding and
                customs clearance to packing and warehousing, we handle the
                details so your cargo arrives safely and on time.
              </p>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                With a strong network of partners and a focus on customer
                satisfaction, we streamline supply chains and support the
                growth of Afghan businesses — connecting manufacturing, retail
                and more to global markets with reliable, customized solutions.
              </p>
            </div>
          </div>

          <div className="relative" data-reveal>
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={containerYard}
                alt="Shipping containers stacked in a cargo yard"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03] lg:aspect-[4/5]"
                sizes="(min-width: 1024px) 44rem, 100vw"
              />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-accent px-6 py-4 shadow-xl shadow-brand-950/10 md:left-8">
              <p className="font-mono text-2xl font-semibold tracking-tight text-brand-950">
                1,000+
              </p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.15em] text-brand-900/70">
                Shipments delivered
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ Values ------------------------------ */}
      <section className="border-y border-slate-200/70 bg-brand-50/40">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand-600 md:text-xs">
              What we stand for
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl md:text-5xl">
              The standards behind every shipment.
            </h2>
          </div>

          <div
            className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2"
            data-reveal-group
          >
            {values.map(({ number, title, body }) => (
              <div key={number} className="flex gap-6">
                <span className="font-mono text-sm font-semibold text-accent-dark">
                  {number}
                </span>
                <div className="border-l border-slate-200 pl-6">
                  <h3 className="text-lg font-semibold tracking-tight text-brand-950 md:text-xl">
                    {title}
                  </h3>
                  <p className="mt-2.5 max-w-md text-base leading-relaxed text-slate-600">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------- CTA ------------------------------- */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div
          className="relative overflow-hidden rounded-3xl bg-brand-950"
          data-reveal
        >
          <Image
            src={handling}
            alt=""
            fill
            sizes="(min-width: 1280px) 80rem, 100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/80 to-brand-950/50" />

          <div className="relative z-10 px-8 py-16 text-center md:px-16 md:py-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent md:text-xs">
              Work with us
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Let&rsquo;s move your next shipment.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Tell us where your cargo needs to go — we&rsquo;ll take care of
              the rest.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-brand-950 transition-all duration-300 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/25 md:text-base"
              >
                Get a quote
                <HiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#services"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10 md:text-base"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
