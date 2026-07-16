"use client";

import React from "react";
import { FaTruck, FaPlane } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const carriers = [
  {
    name: "UPS",
    description: "Track parcels and express deliveries worldwide.",
    href: "https://www.ups.com/track",
    icon: <FaTruck />,
  },
  {
    name: "Turkish Airlines Cargo",
    description: "Follow air freight shipments across the network.",
    href: "https://www.turkishcargo.com.tr/en/online-services/track-your-shipments",
    icon: <FaPlane />,
  },
];

const TrackYourShipments = () => {
  return (
    <section className="bg-brand-50">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand-600 md:text-xs">
            Live tracking
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl md:text-5xl">
            Follow your shipment, every mile of the way.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
            Your cargo travels with trusted international carriers. Use their
            tracking portals below to see your shipment&rsquo;s journey in real time.
          </p>
        </div>

        <div className="grid gap-4" data-reveal-group>
          {carriers.map(({ name, description, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-brand-100 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-950/[0.06] md:p-7"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-xl text-brand-700 transition-colors duration-300 group-hover:bg-brand-900 group-hover:text-accent">
                {icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-base font-semibold tracking-tight text-brand-950 md:text-lg">
                  Track with {name}
                </span>
                <span className="mt-0.5 block text-sm text-slate-500">
                  {description}
                </span>
              </span>
              <HiArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-700" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackYourShipments;
