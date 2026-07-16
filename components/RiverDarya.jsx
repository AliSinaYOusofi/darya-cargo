"use client";

import React from "react";

const words = ["Darya Cargo", "Reliable", "Global", "Logistics"];

// One copy of the marquee sequence; the track renders it twice and
// translates by -50% for a seamless loop.
const Sequence = () => (
  <div className="flex shrink-0 items-center">
    {Array.from({ length: 2 }).flatMap((_, pass) =>
      words.map((word, i) => (
        <React.Fragment key={`${pass}-${i}`}>
          <span className="text-outline whitespace-nowrap px-6 text-6xl font-bold uppercase tracking-tight md:px-10 md:text-8xl">
            {word}
          </span>
          <span aria-hidden="true" className="text-3xl text-accent md:text-4xl">
            ✦
          </span>
        </React.Fragment>
      ))
    )}
  </div>
);

const BrandMarquee = () => {
  return (
    <section aria-hidden="true" className="overflow-hidden border-y border-slate-200 bg-white py-12 md:py-16">
      <div className="animate-marquee flex w-max">
        <Sequence />
        <Sequence />
      </div>
    </section>
  );
};

export default BrandMarquee;
