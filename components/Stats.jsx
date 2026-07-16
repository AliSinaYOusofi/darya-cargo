"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 1000, suffix: "+", label: "Shipments delivered", note: "Across air, sea and land in 2024" },
  { value: 2000, suffix: "+", label: "Packages handled", note: "Packed and processed last year" },
  { value: 500, suffix: "", label: "Active clients", note: "Businesses that ship with us" },
  { value: 45, suffix: "+", label: "Countries served", note: "Through our partner network" },
];

const CargoStats = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray(".stat-value").forEach((el) => {
        const target = Number(el.dataset.target);
        const counter = { v: 0 };
        gsap.to(counter, {
          v: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(counter.v).toLocaleString();
          },
        });
      });
    });
  }, []);

  return (
    <section className="bg-brand-950">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl" data-reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent md:text-xs">
            By the numbers
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Trusted with cargo, measured in miles.
          </h2>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
          {stats.map(({ value, suffix, label, note }) => (
            <div key={label} className="bg-brand-950 p-8 md:p-10">
              <dd className="font-mono text-4xl font-semibold tracking-tight text-white md:text-5xl">
                <span className="stat-value" data-target={value}>
                  0
                </span>
                <span className="text-accent">{suffix}</span>
              </dd>
              <dt className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-white/80">
                {label}
              </dt>
              <p className="mt-2 text-sm leading-relaxed text-white/45">{note}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default CargoStats;
