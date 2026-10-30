import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Quote, Compass, Target, Award } from 'lucide-react';
import { useTranslation } from '../LanguageContext';
import { CORE_VALUES } from '../data';

interface AboutUsProps {
  onRequestQuote: () => void;
  onNavigate?: (path: string) => void;
  showFullProfile?: boolean;
}

export default function AboutUs({ onRequestQuote, onNavigate, showFullProfile = false }: AboutUsProps) {
  const { language, t } = useTranslation();

  const getLocalizedStrings = () => {
    switch (language) {
      case 'ar':
        return {
          readMore: showFullProfile ? 'طلب تسعيرة رسمية' : 'استكشف قصتنا الكاملة',
          peopleTitle: 'فرقنا وشركاؤنا عبر إثيوبيا',
          peopleDesc: 'المزارعون وفرق المعالجة وخبراء اللوجستيات والإدارة في مجموعة كاجو هم الركيزة الحقيقية لنجاحنا الدولي منذ عام ١٩٨٥.',
          originTag: 'مرتفعات إيلوبابور وجيما • أصول البن',
          warehouseTag: 'مرافق المعالجة والمستودعات المملوكة',
          processingTag: 'محطات الغسيل والتقشير الجاف',
          harvestTag: 'مناطق الحصاد • إثيوبيا',
          growersTag: 'شركاء الزراعة المستدامة',
          teamTag: 'فريق التجارة واللوجستيات'
        };
      case 'am':
        return {
          readMore: showFullProfile ? 'መደበኛ ዋጋ ይጠይቁ' : 'ሙሉ ታሪካችንን ይመልከቱ',
          peopleTitle: 'ሰዎቻችን እና አጋሮቻችን',
          peopleDesc: 'የቡና አብቃይ ማህበረሰቦች፣ የማቀነባበሪያ ባለሙያዎች እና የካጆ ግሩፕ የሎጅስቲክስና አመራር ቡድኖች ከ1985 ጀምሮ የስኬታችን እውነተኛ ምሰሶዎች ናቸው።',
          originTag: 'ኢሉባቦር እና ጅማ • የቡና መገኛዎች',
          warehouseTag: 'የራሳችን የቡና ማቀነባበሪያ እና መጋዘን',
          processingTag: 'የቡና ማጠቢያ እና ደረቅ መፈልፈያ ጣቢያዎች',
          harvestTag: 'የምርት ቀጠናዎች • ኢትዮጵያ',
          growersTag: 'የአርሶ አደር አጋሮች',
          teamTag: 'የኤክስፖርት እና ሎጅስቲክስ ቡድን'
        };
      case 'om':
        return {
          readMore: showFullProfile ? 'GATII GAAFADHAA' : 'SEENAA GUUTUU DUBBISI',
          peopleTitle: 'Namoota fi Michoota Keenya',
          peopleDesc: 'Qonnaan bultoonni, ogeeyyiin qopheessuu bunaa fi gareen bulchiinsa Kajo Group utubaa milkaa’ina daldala addunyaa keenyaati.',
          originTag: 'ILLUBABOR FI JIMMAA • MADDA BUNAA',
          warehouseTag: 'WARSHAA QOPHEESSUU FI KUUSAA KEENYA',
          processingTag: 'BUUFATA DHIQANNAA FI HULLING',
          harvestTag: 'KUTAA OOMISHAA • ITOOPHIYAA',
          growersTag: 'MICHOOTA QONNAAN BULTOOTAA',
          teamTag: 'GAREE DALDALA ALAA'
        };
      default:
        return {
          readMore: showFullProfile ? 'REQUEST CORPORATE QUOTE' : 'EXPLORE FULL PROFILE',
          peopleTitle: 'Our People, Growers & Partners',
          peopleDesc: 'Across highland coffee origins, processing plants, and our Addis Ababa headquarters, dedicated Ethiopian professionals power Kajo Group’s four-decade legacy.',
          originTag: 'ILLUBABOR & JIMMA • HIGHLAND COFFEE ORIGINS',
          warehouseTag: 'OWNED PROCESSING & WAREHOUSE FACILITY',
          processingTag: 'WASHING & DRY HULLING STATIONS',
          harvestTag: 'ORIGIN HARVESTS • ETHIOPIA',
          growersTag: 'FARMING COMMUNITIES',
          teamTag: 'GLOBAL TRADE & QC TEAM'
        };
    }
  };

  const local = getLocalizedStrings();

  const handlePrimaryAction = () => {
    if (!showFullProfile && onNavigate) {
      onNavigate('/story');
    } else {
      onRequestQuote();
    }
  };

  return (
    <section id="about" className="py-20 bg-[#F6F1E7] relative overflow-hidden">
      {/* SECTION 1: ABOUT US (1985 GC Kajo Import Export -> 2012 GC illu Import Export) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Header & Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-5 ${language === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <span className="font-sans font-extrabold text-[10px] tracking-[0.22em] text-[#4A5D23] uppercase block mb-2">
              {t.about.sectionTag}
            </span>
            <h2 className="font-display font-light text-[#2E1E15] tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-[1.15] text-balance">
              {t.about.title}
            </h2>
          </motion.div>

          {/* Core Description Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className={`lg:col-span-7 ${language === 'ar' ? 'text-right' : 'text-left'} space-y-4 pt-1`}
          >
            <p className="font-sans text-[#4A3325] text-xs sm:text-[13.5px] leading-relaxed font-medium">
              {t.about.paragraph1}
            </p>
            <p className="font-sans text-[#634838] text-xs sm:text-[13px] leading-relaxed">
              {t.about.paragraph2}
            </p>
            <div>
              <button
                onClick={handlePrimaryAction}
                className="font-sans font-bold text-[11px] tracking-[0.2em] text-[#4A5D23] hover:text-[#39481A] inline-flex items-center gap-1.5 uppercase transition-all duration-200 border-b border-[#C9B699] hover:border-[#4A5D23] pb-1 cursor-pointer"
              >
                {local.readMore} <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* SECTION 1.5: LUXURIOUS ASYMMETRIC PHOTO COLLAGE */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          {/* Left Tall Coffee Harvest Image */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 relative group overflow-hidden shadow-2xl border border-[#DCD0BC]"
          >
            <img
              src="/3.webp"
              alt="Ethiopian Highland Coffee Harvest"
              referrerPolicy="no-referrer"
              className="w-full h-[550px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-[#241710]/15 group-hover:bg-transparent transition-colors duration-500" />
            <div className={`absolute bottom-4 ${language === 'ar' ? 'right-4' : 'left-4'} text-[#FAF7F0] text-[10px] tracking-widest uppercase font-mono bg-[#241710]/85 px-3 py-1.5 backdrop-blur-xs select-none`}>
              {local.originTag}
            </div>
          </motion.div>

          {/* Right Section holding two offset images */}
          <div className="md:col-span-7 flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
              {/* Owned Warehouse & Container Dispatch */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="relative group overflow-hidden shadow-xl sm:mt-16 border border-[#DCD0BC]"
              >
                <img
                  src="/6.webp"
                  alt="Kajo Group Coffee Processing and Warehouse Facility"
                  referrerPolicy="no-referrer"
                  className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#241710]/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className={`absolute bottom-3 ${language === 'ar' ? 'right-3' : 'left-3'} text-[#FAF7F0] text-[9px] tracking-wider uppercase font-mono bg-[#2E1E15]/92 px-2.5 py-1 select-none`}>
                  {local.warehouseTag}
                </div>
              </motion.div>

              {/* Owned Washing & Sun-Drying Stations */}
              <motion.div
                initial={{ opacity: 0, x: 60, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="relative group overflow-hidden shadow-2xl border border-[#DCD0BC]"
              >
                <img
                  src="/5.webp"
                  alt="Coffee Washing Station and Sun Drying Beds"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#241710]/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className={`absolute bottom-3 ${language === 'ar' ? 'left-3' : 'right-3'} text-[#FAF7F0] text-[9px] tracking-wider uppercase font-mono bg-[#4A5D23]/95 px-2.5 py-1 select-none`}>
                  {local.processingTag}
                </div>
              </motion.div>
            </div>

            {/* Corporate Culture Strip tucked cleanly beneath the right offset pair */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className={`bg-[#FAF7F0] border border-[#DCD0BC] p-5 sm:p-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}
            >
              <span className="font-sans font-extrabold text-[10px] tracking-[0.22em] text-[#4A5D23] uppercase block mb-1.5">
                {t.about.cultureTag}
              </span>
              <p className="font-sans text-[#634838] text-xs sm:text-[13px] leading-relaxed">
                {t.about.cultureText}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SECTION 2: MISSION & VISION (PDF Page 5) */}
      <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#DCD0BC] pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Wide Coffee Processing Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group overflow-hidden shadow-xl border border-[#DCD0BC]"
          >
            <img
              src="/7.webp"
              alt="Kajo Group Sun-Dried Coffee Conditioning"
              referrerPolicy="no-referrer"
              className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/80 via-transparent to-transparent" />
            <div className={`absolute bottom-5 ${language === 'ar' ? 'right-5 text-right' : 'left-5 text-left'} text-[#FAF7F0]`}>
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#A8B986] block">
                KAJO GROUP • EST. 1985 GC
              </span>
              <span className="font-display text-lg sm:text-xl font-light tracking-wide">
                40+ Years of Purpose-Driven Trade
              </span>
            </div>
          </motion.div>

          {/* Right Mission & Vision Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className={`lg:col-span-7 space-y-5 ${language === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {/* Mission */}
            <div className="bg-[#FAF7F0] border border-[#DCD0BC] p-5 sm:p-6 shadow-xs">
              <div className={`flex items-center gap-2 mb-2.5 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Target className="w-4 h-4 text-[#4A5D23] shrink-0" />
                <h3 className="font-display font-medium text-[#2E1E15] text-xl sm:text-2xl leading-tight">
                  {t.about.missionTitle}
                </h3>
              </div>
              <p className="font-sans text-[#634838] text-xs sm:text-[13px] leading-relaxed">
                {t.about.missionText}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#ECE3D3]/65 border border-[#DCD0BC] p-5 sm:p-6 shadow-xs">
              <div className={`flex items-center gap-2 mb-2.5 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Compass className="w-4 h-4 text-[#4A3325] shrink-0" />
                <h3 className="font-display font-medium text-[#2E1E15] text-xl sm:text-2xl leading-tight">
                  {t.about.visionTitle}
                </h3>
              </div>
              <p className="font-sans text-[#634838] text-xs sm:text-[13px] leading-relaxed">
                {t.about.visionText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SECTION 3: MESSAGE FROM THE FOUNDER & OUR MANAGEMENT (PDF Pages 7 & 12) */}
      <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#DCD0BC] pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Founder's Message Dark Coffee Brown Executive Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.85 }}
            className={`lg:col-span-7 bg-[#2E1E15] text-[#FAF7F0] p-6 sm:p-9 border border-[#4A3325] border-t-4 border-t-[#6B8238] shadow-2xl relative flex flex-col justify-between ${language === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(#FAF7F008_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="relative z-10">
              <div className={`flex items-center justify-between gap-4 mb-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <span className="font-mono font-bold text-[10px] tracking-[0.25em] text-[#A8B986] uppercase">
                  {t.about.founderTag}
                </span>
                <Quote className="w-6 h-6 text-[#C9B699] opacity-80 shrink-0" />
              </div>

              <h3 className="font-display font-light text-2xl sm:text-[1.75rem] text-[#FAF7F0] tracking-wide mb-4">
                {t.about.founderTitle}
              </h3>

              <p className="font-display italic font-light text-sm sm:text-[15.5px] text-[#EFE7D8] leading-relaxed">
                {t.about.founderMessage}
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-5 border-t border-[#FAF7F0]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-sans font-extrabold text-[11px] tracking-widest uppercase text-[#FAF7F0] block">
                  {t.about.founderName}
                </span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#C9B699] block mt-0.5">
                  {t.about.founderRole}
                </span>
              </div>
              <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#A8B986]">
                EST. 1985 GC • ETHIOPIA
              </span>
            </div>
          </motion.div>

          {/* Our Management Executive Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className={`lg:col-span-5 bg-[#FAF7F0] border border-[#DCD0BC] p-6 sm:p-8 flex flex-col justify-between ${language === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <div className="space-y-4">
              <div className={`inline-flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Award className="w-4 h-4 text-[#4A5D23]" />
                <span className="font-sans font-extrabold text-[10px] tracking-[0.22em] text-[#4A5D23] uppercase">
                  {t.about.managementTag}
                </span>
              </div>

              <h3 className="font-display font-light text-[#2E1E15] text-2xl sm:text-[1.75rem] leading-tight text-balance">
                {t.about.managementTitle}
              </h3>

              <p className="font-sans text-[#4A3325] text-xs sm:text-[13px] leading-relaxed">
                {t.about.managementText1}
              </p>

              <p className="font-sans text-[#634838] text-xs sm:text-[13px] leading-relaxed">
                {t.about.managementText2}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#DCD0BC] grid grid-cols-3 gap-3 text-center">
              <div>
                <span className="font-display font-medium text-xl sm:text-2xl text-[#2E1E15] block tabular-nums">1985</span>
                <span className="font-sans font-bold text-[8.5px] tracking-widest uppercase text-[#634838] block mt-1">
                  {t.about.countriesServed}
                </span>
              </div>
              <div className="border-x border-[#DCD0BC] px-2">
                <span className="font-display font-medium text-xl sm:text-2xl text-[#4A5D23] block tabular-nums">10</span>
                <span className="font-sans font-bold text-[8.5px] tracking-widest uppercase text-[#634838] block mt-1">
                  {t.about.yearsExp}
                </span>
              </div>
              <div>
                <span className="font-display font-medium text-xl sm:text-2xl text-[#2E1E15] block tabular-nums">100%</span>
                <span className="font-sans font-bold text-[8.5px] tracking-widest uppercase text-[#634838] block mt-1">
                  {t.about.qualityGuaranteed}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SECTION 4: 10 CORE VALUES (PDF Page 6) */}
      <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#DCD0BC] pt-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-sans font-extrabold text-[10px] tracking-[0.22em] text-[#4A5D23] uppercase block mb-2">
            {t.about.coreValuesTag}
          </span>
          <h3 className="font-display font-light text-[#2E1E15] text-2xl sm:text-3xl lg:text-4xl leading-tight">
            {t.about.coreValuesTitle}
          </h3>
          <div className="w-10 h-0.5 bg-[#4A5D23] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-[#DCD0BC]">
          {CORE_VALUES.map((val, idx) => (
            <motion.div
              key={val.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.35) }}
              className="p-5 border-r border-b border-[#DCD0BC] bg-[#FAF7F0] hover:bg-[#ECE3D3]/60 transition-colors flex flex-col justify-between text-left"
            >
              <div>
                <span className="font-mono font-bold text-[11px] text-[#4A5D23] tracking-widest block mb-2 tabular-nums">
                  {val.number}
                </span>
                <h4 className="font-display font-bold text-[15px] sm:text-base text-[#2E1E15] mb-1.5 leading-snug">
                  {val.title}
                </h4>
                <p className="font-sans text-[11px] text-[#634838] leading-relaxed">
                  {val.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION 5: THE PEOPLE OF ETHIOPIA / POLAROID COLLAGE */}
      <div className="mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-[#DCD0BC] pt-20">
        {/* Descriptive intro */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <h4 className="font-display font-light text-[#2E1E15] text-2xl sm:text-3xl leading-tight mb-3">
            {local.peopleTitle}
          </h4>
          <p className="font-sans text-[#634838] text-xs sm:text-[13px] leading-relaxed">
            {local.peopleDesc}
          </p>
        </motion.div>

        {/* Polaroid stack */}
        <div className="relative max-w-3xl mx-auto h-[380px] sm:h-[420px] flex items-center justify-center">
          {/* Polaroid 1 */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: 30, rotate: -18 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className={`absolute ${language === 'ar' ? 'right-4 sm:right-12' : 'left-4 sm:left-12'} hover:rotate-0 hover:scale-105 z-10 transition-all duration-300 bg-[#FAF7F0] p-3.5 sm:p-4 pb-10 sm:pb-12 shadow-xl border border-[#DCD0BC] w-[200px] sm:w-[260px]`}
          >
            <div className="aspect-square overflow-hidden bg-[#ECE3D3]">
              <img
                src="/8.webp"
                alt="Ethiopian Coffee Farming Community"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-25 object-center"
              />
            </div>
            <div className="mt-4 font-sans font-bold text-[9px] sm:text-xs text-[#634838] tracking-widest text-center select-none">
              {local.harvestTag}
            </div>
          </motion.div>

          {/* Polaroid 2 */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.92, rotate: 12 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 4 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute hover:rotate-0 hover:scale-105 z-20 transition-all duration-300 bg-[#FAF7F0] p-3.5 sm:p-4 pb-10 sm:pb-12 shadow-2xl border border-[#DCD0BC] w-[210px] sm:w-[270px]"
          >
            <div className="aspect-square overflow-hidden bg-[#ECE3D3]">
              <img
                src="/9.webp"
                alt="Ethiopian Community Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter sepia-[0.1]"
              />
            </div>
            <div className="mt-4 font-sans font-bold text-[9px] sm:text-xs text-[#2E1E15] tracking-widest text-center select-none">
              {local.growersTag}
            </div>
          </motion.div>

          {/* Polaroid 3 */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: 30, rotate: 15 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: -3 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className={`absolute ${language === 'ar' ? 'left-4 sm:left-12' : 'right-4 sm:right-12'} hover:rotate-0 hover:scale-105 z-10 transition-all duration-300 bg-[#FAF7F0] p-3.5 sm:p-4 pb-10 sm:pb-12 shadow-lg border border-[#DCD0BC] w-[190px] sm:w-[250px]`}
          >
            <div className="aspect-square overflow-hidden bg-[#ECE3D3]">
              <img
                src="/10.webp"
                alt="Kajo Group Processing and Supply Team"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-110 object-bottom"
              />
            </div>
            <div className="mt-4 font-sans font-bold text-[9px] sm:text-xs text-[#634838] tracking-widest text-center select-none">
              {local.teamTag}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
