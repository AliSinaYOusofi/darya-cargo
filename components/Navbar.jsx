"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";
import { HiArrowUpRight } from "react-icons/hi2";
import Logo from "../public/images/logo.jpg";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinelRef = useRef(null);

  // A sentinel at the very top of the page tells us when the user has
  // scrolled, regardless of which element is the actual scroll container.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);

    const onScroll = () => {
      if (window.scrollY > 16) setScrolled(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-10"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "border-b border-slate-900/[0.08] bg-white/85 shadow-[0_1px_2px_rgba(8,38,34,0.04)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="Darya Cargo logo"
              className="h-9 w-9 rounded-full object-cover ring-1 ring-white/20 md:h-10 md:w-10"
              priority
            />
            <span className="flex flex-col leading-none">
              <span
                className={`text-base font-bold tracking-tight transition-colors md:text-lg ${
                  solid ? "text-brand-950" : "text-white"
                }`}
              >
                Darya Cargo
              </span>
              <span
                className={`mt-1 font-mono text-[10px] uppercase tracking-[0.25em] transition-colors ${
                  solid ? "text-slate-500" : "text-white/60"
                }`}
              >
                دریا کارگو
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative text-sm font-medium transition-colors ${
                    solid
                      ? pathname === href
                        ? "text-brand-700"
                        : "text-slate-600 hover:text-brand-950"
                      : pathname === href
                      ? "text-accent"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                  {pathname === href && (
                    <span
                      className={`absolute -bottom-2 left-0 h-0.5 w-full rounded-full ${
                        solid ? "bg-brand-700" : "bg-accent"
                      }`}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-brand-950 transition-all duration-300 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
            >
              Get a quote
              <HiArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className={`-mr-2 md:hidden ${solid ? "text-brand-950" : "text-white"}`}>
            <Hamburger size={22} toggled={open} toggle={setOpen} label="Toggle menu" rounded />
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`fixed inset-x-0 bottom-0 top-16 z-40 bg-white transition-all duration-300 md:hidden ${
            open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
          }`}
        >
          <nav className="flex h-full flex-col justify-between px-6 pb-10 pt-8">
            <ul className="space-y-2">
              {links.map(({ href, label }, i) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between border-b border-slate-100 py-5 text-2xl font-semibold tracking-tight ${
                      pathname === href ? "text-brand-700" : "text-brand-950"
                    }`}
                  >
                    {label}
                    <span className="font-mono text-xs text-slate-400">0{i + 1}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 text-base font-semibold text-brand-950"
              >
                Get a quote
                <HiArrowUpRight className="h-4 w-4" />
              </Link>
              <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
                info@daryacargo.com
              </p>
            </div>
          </nav>
        </div>
      </header>

      {/* Reserve nav height on pages without a full-bleed hero */}
      {!isHome && <div aria-hidden="true" className="h-16 md:h-20" />}
    </>
  );
}
