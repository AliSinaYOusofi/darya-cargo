"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Logo from "../public/images/logo.jpg";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Express Shipping",
  "Air & Ocean Freight",
  "Customs Clearance",
  "Warehousing",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="Darya Cargo logo"
              className="h-11 w-11 rounded-full object-cover ring-1 ring-white/15"
            />
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight">Darya Cargo</span>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                دریا کارگو
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
            International shipping and logistics from Afghanistan to the world —
            freight forwarding, customs clearance, packing and warehousing under
            one roof.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            Navigate
          </h3>
          <ul className="mt-5 space-y-3">
            {navigation.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-9 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service} className="text-sm text-white/55">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            Get in touch
          </h3>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                href="mailto:info@daryacargo.com"
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <FaEnvelope className="h-4 w-4 text-white/40 transition-colors group-hover:text-accent" />
                info@daryacargo.com
              </a>
            </li>
            <li>
              <a
                href="tel:+93782868883"
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <FaPhoneAlt className="h-4 w-4 text-white/40 transition-colors group-hover:text-accent" />
                +93 (782) 868-883
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/93782868883"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <FaWhatsapp className="h-4 w-4 text-white/40 transition-colors group-hover:text-accent" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/40 sm:flex-row md:px-8">
          <p>© {currentYear} Darya Cargo. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.2em]">
            Kabul · Afghanistan
          </p>
        </div>
      </div>
    </footer>
  );
}
