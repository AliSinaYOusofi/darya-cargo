import React from "react";

export const ServiceCard = ({ icon, header, description, index = 0 }) => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-950/[0.08] md:p-10">
      {/* Soft brand wash revealed on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Oversized ghost index */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-5 right-2 select-none font-mono text-[5.5rem] font-semibold leading-none tracking-tighter text-slate-100 transition-colors duration-500 group-hover:text-brand-100"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-950 text-xl text-accent shadow-lg shadow-brand-950/15 transition-all duration-500 ease-out group-hover:scale-105 group-hover:bg-accent group-hover:text-brand-950">
          {icon}
        </div>

        <h3 className="mt-8 text-xl font-semibold tracking-tight text-brand-950">
          {header}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>

      {/* Accent rule that draws across on hover */}
      <div className="relative mt-auto pt-8" aria-hidden>
        <span className="block h-px w-10 bg-slate-200 transition-all duration-500 ease-out group-hover:w-full group-hover:bg-accent" />
      </div>
    </div>
  );
};
