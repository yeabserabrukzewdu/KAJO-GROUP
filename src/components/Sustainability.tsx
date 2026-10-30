import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../LanguageContext';

interface SustainabilityProps {
  onRequestQuote: () => void;
}

export default function Sustainability({ onRequestQuote }: SustainabilityProps) {
  const { language, t } = useTranslation();

  return (
    <section id="sustainability" className="py-20 bg-[#ECE3D3]/60 border-t border-[#DCD0BC] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#4A5D23]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden">
          {/* LEFT SIDE: Asymmetric vertical overlapping portrait images */}
          <div className="lg:col-span-6 relative flex items-center justify-center gap-4 h-[400px] overflow-hidden">
            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, x: -65, y: -24 }}
              whileInView={{ opacity: 1, x: 0, y: -24 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[140px] sm:w-[175px] h-[310px] shadow-xl group overflow-hidden border-4 border-[#FAF7F0] outline outline-1 outline-[#DCD0BC] z-10"
            >
              <img
                src="/20.jpg"
                alt="Ethiopian coffee grower portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-15 group-hover:scale-105 transition-all duration-500 object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/50 via-transparent to-transparent" />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="relative w-[150px] sm:w-[190px] h-[350px] shadow-2xl group overflow-hidden border-4 border-[#FAF7F0] outline outline-1 outline-[#DCD0BC] z-20"
            >
              <img
                src="/21.jpg"
                alt="Ethiopian agricultural community partner"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/55 via-transparent to-transparent" />
            </motion.div>

            {/* Image 3 */}
            <motion.div
              initial={{ opacity: 0, x: 65, y: 32 }}
              whileInView={{ opacity: 1, x: 0, y: 32 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative w-[135px] sm:w-[170px] h-[295px] shadow-lg group overflow-hidden border-4 border-[#FAF7F0] outline outline-1 outline-[#DCD0BC] z-10"
            >
              <img
                src="/23.jpg"
                alt="Local Ethiopian community member"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-25 group-hover:scale-105 transition-all duration-500 object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/50 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* RIGHT SIDE: Social Responsibility & Environmental Stewardship */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className={`lg:col-span-6 ${language === 'ar' ? 'text-right' : 'text-left'} space-y-4 lg:pl-6`}
          >
            <span className="font-sans font-extrabold text-[10px] tracking-[0.22em] text-[#4A5D23] uppercase block">
              {t.sustainability.sectionTag}
            </span>

            <h2 className="font-display font-light text-[#2E1E15] tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance">
              {t.sustainability.title}
            </h2>

            <p className="font-sans text-[#4A3325] text-xs sm:text-[13.5px] leading-relaxed">
              {t.sustainability.paragraph1}
            </p>

            <p className="font-sans text-[#634838] text-xs sm:text-[13px] leading-relaxed">
              {t.sustainability.paragraph2}
            </p>

            <div className="pt-2">
              <button
                onClick={onRequestQuote}
                className="font-sans font-bold text-[11px] tracking-[0.2em] text-[#4A5D23] hover:text-[#39481A] inline-flex items-center gap-1.5 uppercase transition-all duration-200 border-b border-[#C9B699] hover:border-[#4A5D23] pb-1 cursor-pointer"
              >
                {t.common.requestQuote} <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
