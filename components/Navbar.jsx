"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiArrowUpRight, HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
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

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Light (glass) bar when scrolled or off the hero; dark text on light bar.
  // While the mobile menu is open the bar sits over the dark overlay instead.
  const solid = (scrolled || !isHome) && !open;
  const onDark = !solid;

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-10"
      />

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-0 md:pt-0">
        <nav
          className={`rounded-2xl border transition-all duration-500 ease-out md:rounded-none md:border-x-0 md:border-t-0 ${
            solid
              ? "border-slate-900/[0.06] bg-white/80 shadow-[0_8px_30px_-12px_rgba(8,38,34,0.18)] backdrop-blur-xl backdrop-saturate-150 md:border-slate-900/[0.08] md:shadow-[0_1px_2px_rgba(8,38,34,0.04)]"
              : "border-transparent bg-transparent"
          }`}
        >
          <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-3 md:h-20 md:px-8">
            <Link href="/" className="flex items-center gap-2.5 md:gap-3">
              <Image
                src={Logo}
                alt="Darya Cargo logo"
                className={`h-9 w-9 rounded-full object-cover ring-2 transition-all md:h-10 md:w-10 ${
                  onDark ? "ring-white/15" : "ring-brand-950/5"
                }`}
                priority
              />
              <span className="flex flex-col leading-none">
                <span
                  className={`text-[15px] font-bold tracking-tight transition-colors md:text-lg ${
                    onDark ? "text-white" : "text-brand-950"
                  }`}
                >
                  Darya Cargo
                </span>
                <span
                  dir="rtl"
                  className={`mt-1 text-left text-[11px] font-medium transition-colors ${
                    onDark ? "text-white/55" : "text-slate-500"
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

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 active:scale-95 md:hidden ${
                onDark
                  ? "border-white/15 bg-white/10 text-white backdrop-blur-md"
                  : "border-brand-950/10 bg-brand-950 text-white shadow-md shadow-brand-950/20"
              }`}
            >
              <span className="sr-only">Menu</span>
              <span
                aria-hidden="true"
                className={`absolute h-[1.5px] w-[18px] rounded-full bg-current transition-all duration-300 ease-out ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-[1.5px] rounded-full bg-current transition-all duration-300 ease-out ${
                  open ? "w-[18px] -rotate-45" : "w-3 translate-x-[3px] translate-y-[4px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu — kept outside the header so `fixed` is relative to the
          viewport rather than the header's backdrop-filter containing block */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 overflow-hidden bg-brand-950 transition-[clip-path,visibility] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${
          open
            ? "visible [clip-path:circle(150%_at_calc(100%_-_2.75rem)_2.5rem)]"
            : "invisible [clip-path:circle(0%_at_calc(100%_-_2.75rem)_2.5rem)]"
        }`}
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        />

        <nav className="relative flex h-full flex-col px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-28">
          <p
            className={`font-mono text-[10px] uppercase tracking-[0.35em] text-white/40 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100 delay-200" : "translate-y-2 opacity-0"
            }`}
          >
            Navigation
          </p>

          <ul className="mt-6">
            {links.map(({ href, label }, i) => {
              const active = pathname === href;
              return (
                <li
                  key={href}
                  style={{ transitionDelay: open ? `${250 + i * 70}ms` : "0ms" }}
                  className={`border-b border-white/[0.08] transition-all duration-500 ease-out ${
                    open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  <Link
                    href={href}
                    tabIndex={open ? 0 : -1}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between py-5"
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        className={`font-mono text-[11px] ${active ? "text-accent" : "text-white/30"}`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`text-[2.5rem] font-semibold leading-none tracking-tight transition-colors ${
                          active ? "text-white" : "text-white/60 group-active:text-white"
                        }`}
                      >
                        {label}
                      </span>
                    </span>
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                        active
                          ? "border-accent bg-accent text-brand-950"
                          : "border-white/10 text-white/50 group-active:border-white/30"
                      }`}
                    >
                      <HiArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className={`mt-auto space-y-5 transition-all duration-500 ease-out ${
              open ? "translate-y-0 opacity-100 delay-500" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="divide-y divide-white/[0.08] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04]">
              {[
                { href: "mailto:info@daryacargo.com", Icon: HiOutlineEnvelope, label: "Email", value: "info@daryacargo.com" },
                { href: "tel:+93782868883", Icon: HiOutlinePhone, label: "Call us", value: "+93 782 868 883" },
              ].map(({ href, Icon, label, value }) => (
                <a
                  key={href}
                  href={href}
                  tabIndex={open ? 0 : -1}
                  className="flex items-center gap-4 px-4 py-3.5 transition-colors active:bg-white/[0.06]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Icon className="h-[18px] w-[18px] text-accent" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40">{label}</span>
                    <span className="mt-0.5 block truncate text-sm font-medium text-white">{value}</span>
                  </span>
                </a>
              ))}
            </div>

            <Link
              href="/contact"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-between rounded-full bg-accent py-2 pl-6 pr-2 text-base font-semibold text-brand-950 shadow-lg shadow-accent/20 transition-transform active:scale-[0.98]"
            >
              Get a quote
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-950 text-accent">
                <HiArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Reserve nav height on pages without a full-bleed hero */}
      {!isHome && <div aria-hidden="true" className="h-[68px] md:h-20" />}
    </>
  );
}
