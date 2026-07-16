"use client";

import React from "react";
import Image from "next/image";
import containers from "../public/images/cargo logistic.jpg";

const pillars = [
  {
    number: "01",
    title: "Our mission",
    body: "To provide reliable, secure and professional logistics services from Afghanistan to global destinations, offering a seamless experience for every client.",
  },
  {
    number: "02",
    title: "Our vision",
    body: "To be Afghanistan's trusted name in international cargo logistics, known for quality service and customer satisfaction.",
  },
];

const MissionAndVision = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-last lg:order-first" data-reveal>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src={containers}
              alt="Shipping containers stacked at a cargo terminal"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03] lg:aspect-[4/5]"
              sizes="(min-width: 1024px) 44rem, 100vw"
            />
          </div>
          <div className="absolute -bottom-5 left-6 rounded-2xl bg-accent px-6 py-4 shadow-xl shadow-brand-950/10 md:left-8">
            <p className="font-mono text-2xl font-semibold tracking-tight text-brand-950">
              Kabul → World
            </p>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.15em] text-brand-900/70">
              Connecting Afghan trade
            </p>
          </div>
        </div>

        <div>
          <div data-reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand-600 md:text-xs">
              Who we are
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl md:text-5xl">
              Built to connect Afghan trade with the world.
            </h2>
          </div>

          <div className="mt-12 space-y-10" data-reveal-group>
            {pillars.map(({ number, title, body }) => (
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
      </div>
    </section>
  );
};

export default MissionAndVision;
