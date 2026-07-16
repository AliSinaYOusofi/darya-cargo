"use client";

import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import warehouse from "../public/images/warhouse.jpg";

gsap.registerPlugin(ScrollTrigger);

const methods = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "info@daryacargo.com",
    note: "Replies within 24 hours",
    href: "mailto:info@daryacargo.com",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+93 (782) 868-883",
    note: "Sat – Thu, 8:00 – 17:00",
    href: "tel:+93782868883",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+93 (782) 868-883",
    note: "Fastest way to reach us",
    href: "https://wa.me/93782868883",
    external: true,
  },
];

const office = [
  { label: "Head office", value: "Kabul, Afghanistan" },
  { label: "Working hours", value: "Saturday – Thursday, 8:00 – 17:00" },
  { label: "Cargo support", value: "24/7 for active shipments" },
];

export default function ContactContent() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Hero elements rise in sequence on load
      gsap.from(".contact-hero-el", {
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.2,
      });

      // Shared reveal system (same contract as the home page)
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
      <section className="relative flex flex-col justify-end overflow-hidden bg-brand-950">
        <Image
          src={warehouse}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/75 to-brand-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/30 to-brand-950/60" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-44 md:px-8 md:pb-24">
          <p className="contact-hero-el font-mono text-[11px] uppercase tracking-[0.35em] text-accent md:text-xs">
            Contact us
          </p>

          <h1 className="contact-hero-el mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&rsquo;s talk cargo.
          </h1>

          <p className="contact-hero-el mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Questions, quotes or a shipment already on the move — reach us on
            the channel that suits you and we&rsquo;ll take it from there.
          </p>
        </div>
      </section>

      {/* --------------------------- Contact grid --------------------------- */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Office panel */}
          <div
            className="relative overflow-hidden rounded-3xl bg-brand-950 p-8 md:p-10 lg:col-span-2"
            data-reveal
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl"
            />

            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent md:text-xs">
              Darya Cargo
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
              From Kabul, to anywhere.
            </h2>

            <div className="mt-10 space-y-8">
              {office.map(({ label, value }) => (
                <div key={label} className="border-l border-white/15 pl-5">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-white/50">
                    {label}
                  </p>
                  <p className="mt-1.5 font-medium text-white md:text-lg">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact methods */}
          <div className="flex flex-col gap-6 lg:col-span-3" data-reveal-group>
            {methods.map(({ icon, label, value, note, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex flex-1 items-center gap-6 rounded-3xl border border-slate-200/80 bg-white p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-950/[0.08] md:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-950 text-xl text-accent shadow-lg shadow-brand-950/15 transition-all duration-500 ease-out group-hover:scale-105 group-hover:bg-accent group-hover:text-brand-950">
                  {icon}
                </div>

                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-600">
                    {label}
                  </p>
                  <p className="mt-1 truncate text-lg font-semibold tracking-tight text-brand-950 md:text-xl">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{note}</p>
                </div>

                <HiArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-dark" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
