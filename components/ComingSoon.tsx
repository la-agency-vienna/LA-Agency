'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function ComingSoon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/z13/4.jpg"
        alt="L.A. Agency Vienna"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center px-6 text-center transition-all duration-1000 ease-out ${
          mounted
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Brand Name */}
        <h1 className="text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-black tracking-tight text-white uppercase leading-[0.85]">
          L.A. Agency
        </h1>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-bold tracking-[0.4em] text-white/50 uppercase">
          Vienna
        </p>

        {/* Coming Soon - big and bold */}
        <div className="mt-8 sm:mt-12 mb-10 sm:mb-14">
          <div className="h-[2px] w-16 sm:w-24 mx-auto bg-[#c4a484] mb-6 sm:mb-8" />
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-[0.15em] text-[#c4a484] uppercase">
            Coming Soon
          </h2>
          <div className="h-[2px] w-16 sm:w-24 mx-auto bg-[#c4a484] mt-6 sm:mt-8" />
        </div>

        {/* Contact Info */}
        <div className="space-y-3 sm:space-y-4">
          <p className="text-base sm:text-lg font-bold tracking-[0.08em] text-white">
            Lidija Ajvazi
          </p>

          <a
            href="tel:+436643782030"
            className="block text-sm sm:text-base font-semibold tracking-wide text-white/70 hover:text-[#c4a484] transition-colors duration-300"
          >
            +43 664 3782030
          </a>

          <a
            href="mailto:hello@la-agency-vienna.com"
            className="block text-sm sm:text-base font-semibold tracking-wide text-white/70 hover:text-[#c4a484] transition-colors duration-300"
          >
            hello@la-agency-vienna.com
          </a>
        </div>
      </div>
    </div>
  );
}
