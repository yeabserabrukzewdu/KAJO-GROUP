import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ASSET_IMAGES } from '../assets';
import { useTranslation } from '../LanguageContext';

interface HeroProps {
  onExploreCategory: (category: string) => void;
  onRequestQuote: () => void;
}

export default function Hero({ onExploreCategory, onRequestQuote }: HeroProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { language, t } = useTranslation();

  const handleScrollDown = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setIsVideoPlaying(true);
        })
        .catch(() => {
          // Graceful fallback to high-res highland image if autoplay is restricted
        });
    }
  }, []);

  const getHeroTitles = () => {
    switch (language) {
      case 'ar':
        return {
          l1: 'سفراء التراث الإثيوبي',
          l2: 'مجموعة كاجو العالمية',
          l3: 'للتصدير والتجارة منذ ١٩٨٥'
        };
      case 'am':
        return {
          l1: 'የኢትዮጵያ ቅርስ አምባሳደሮች',
          l2: 'ካጆ ግሩፕ ዓለም አቀፍ',
          l3: 'አስመጪ እና ላኪ ከ1985 ጀምሮ'
        };
      case 'om':
        return {
          l1: 'Ambaasaaddaroota',
          l2: 'Dhaala Itoophiyaa',
          l3: 'fi Daldala Addunyaa'
        };
      default:
        return {
          l1: 'Ambassadors of',
          l2: 'Ethiopian Heritage',
          l3: '& Global Exports'
        };
    }
  };

  const titles = getHeroTitles();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#241710]"
    >
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0">
        {/* Underlay Video Element */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onPlaying={() => setIsVideoPlaying(true)}
          onPlay={() => setIsVideoPlaying(true)}
          onLoadedData={() => setIsVideoPlaying(true)}
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        >
          <source
            src="https://res.cloudinary.com/dlfdjcuat/video/upload/v1782983864/hero_llow_dcltdq.mp4"
            type="video/mp4"
          />
        </video>

        {/* Fading Background Image Placeholder - Ethiopian Highland Landscape */}
        <img
          src={ASSET_IMAGES.ethiopianFarmLandscape}
          alt="Kajo Group Ethiopian Highland Origins"
          referrerPolicy="no-referrer"
          className={`absolute inset-0 w-full h-full object-cover object-center scale-105 filter brightness-90 transition-opacity duration-1000 ease-out ${
            isVideoPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#241710]/60 via-[#2E1E15]/40 to-[#241710]/70 z-[1]" />
      </div>

      {/* Warm coffee & olive atmospheric accents */}
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-[#4A5D23]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-[#2E1E15]/35 rounded-full blur-3xl pointer-events-none" />

      {/* Main Centered Editorial Layout */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-16">
        {/* Small spacing header */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans font-extrabold text-[10px] tracking-[0.3em] text-[#DFD3BF] uppercase block mb-2.5"
        >
          {t.common.directFarm}
        </motion.span>

        {/* Refined Serif Display Headings */}
        <div className="space-y-1.5 text-balance">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-display font-light text-[#FAF7F0] leading-snug tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] italic"
          >
            {titles.l1}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="font-display font-medium text-[#FAF7F0] leading-[1.08] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem]"
          >
            {titles.l2}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="font-display font-light text-[#EFE7D8] leading-snug tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] italic"
          >
            {titles.l3}
          </motion.h3>
        </div>

        {/* Concise sub-description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-5 font-sans font-normal text-[#EFE7D8]/90 text-xs sm:text-[13.5px] max-w-2xl leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* Minimal Interactive Export Pillar Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-7 flex flex-wrap justify-center gap-2.5 sm:gap-3"
        >
          <button
            onClick={() => onExploreCategory('coffee')}
            className="px-4 py-2.5 border border-[#FAF7F0]/30 hover:border-[#A8B986] bg-[#241710]/40 hover:bg-[#4A5D23]/35 text-[#FAF7F0] font-sans font-bold text-[9.5px] tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            {t.hero.segmentCoffee}
          </button>
          <button
            onClick={() => onExploreCategory('pulses')}
            className="px-4 py-2.5 border border-[#FAF7F0]/30 hover:border-[#A8B986] bg-[#241710]/40 hover:bg-[#4A5D23]/35 text-[#FAF7F0] font-sans font-bold text-[9.5px] tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            {t.hero.segmentPulses}
          </button>
          <button
            onClick={() => onExploreCategory('lithium')}
            className="px-4 py-2.5 border border-[#FAF7F0]/30 hover:border-[#A8B986] bg-[#241710]/40 hover:bg-[#4A5D23]/35 text-[#FAF7F0] font-sans font-bold text-[9.5px] tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            {t.hero.segmentLithium}
          </button>
          <button
            onClick={onRequestQuote}
            className="px-5 py-2.5 bg-[#4A5D23] hover:bg-[#39481A] border border-[#6B8238]/40 text-[#FAF7F0] font-sans font-bold text-[9.5px] tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer shadow-lg whitespace-nowrap"
          >
            {t.common.requestQuote}
          </button>
        </motion.div>
      </div>

      {/* Center Bouncing Down Chevron scroll action */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={handleScrollDown}
          className="text-[#DFD3BF] hover:text-[#FAF7F0] transition-colors duration-300 flex flex-col items-center gap-1 cursor-pointer group"
          aria-label="Scroll to content"
        >
          <span className="text-[9px] tracking-[0.3em] font-sans font-extrabold uppercase opacity-75 group-hover:opacity-100 transition-opacity">
            SCROLL
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce text-[#FAF7F0]" />
        </button>
      </div>

      {/* Floating circular scroll button in bottom-right */}
      <div className="absolute bottom-8 right-8 z-30 hidden sm:block">
        <div
          className="w-12 h-12 rounded-full bg-[#FAF7F0] shadow-xl flex items-center justify-center text-[#2E1E15] border border-[#DCD0BC] cursor-pointer hover:bg-[#ECE3D3] transition-colors"
          onClick={handleScrollDown}
        >
          <ChevronDown className="w-5 h-5 transform rotate-180 text-[#2E1E15]" />
        </div>
      </div>
    </section>
  );
}
