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
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center px-6 text-center transition-all duration-1000 ease-out ${
          mounted
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Logo / Brand */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-light tracking-[0.3em] text-white uppercase">
            L.A. Agency
          </h1>
          <div className="mt-2 h-px w-24 mx-auto bg-[#c4a484]" />
          <p className="mt-3 text-xs sm:text-sm tracking-[0.25em] text-white/60 uppercase">
            Vienna
          </p>
        </div>

        {/* Coming Soon */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.2em] text-[#c4a484] uppercase mb-10 sm:mb-16">
          Coming Soon
        </h2>

        {/* Divider */}
        <div className="w-px h-16 sm:h-24 bg-white/20 mb-10 sm:mb-16" />

        {/* Contact Info */}
        <div className="space-y-4 sm:space-y-5">
          <p className="text-sm sm:text-base font-light tracking-[0.1em] text-white/90">
            Lidija Lajvazi
          </p>

          <a
            href="tel:+436643782030"
            className="block text-sm sm:text-base font-light tracking-[0.05em] text-white/70 hover:text-[#c4a484] transition-colors duration-300"
          >
            +43 664 3782030
          </a>

          <a
            href="mailto:hello@la-agency-vienna.com"
            className="block text-sm sm:text-base font-light tracking-[0.05em] text-white/70 hover:text-[#c4a484] transition-colors duration-300"
          >
            hello@la-agency-vienna.com
          </a>
        </div>
      </div>
    </div>
  );
}
