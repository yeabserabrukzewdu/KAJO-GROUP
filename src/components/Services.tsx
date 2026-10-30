import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../LanguageContext';
import { QUALITY_PRINCIPLES } from '../data';

interface ServicesProps {
  cargoImg?: string;
  onRequestQuote: () => void;
}

export default function Services({ onRequestQuote }: ServicesProps) {
  const { language, t } = useTranslation();

  const getLocalizedStageLabels = () => {
    switch (language) {
      case 'ar':
        return {
          s1: '١. اختيار وحصاد كرز البن الناضج',
          s2: '٢. المعالجة في محطات الغسيل المملوكة',
          s3: '٣. التقشير الجاف والفرز ومراقبة الجودة',
          factsTag: 'حقائق وأرقام مجموعة كاجو',
          factsTitle: 'إرث التجارة والتصدير منذ ١٩٨٥',
          f1Label: 'تأسست في إثيوبيا (م)',
          f2Label: 'عاماً من الخبرة العالمية',
          f3Label: 'قطاعات استثمارية متنوعة',
          f4Label: 'التزام بسياسة الجودة',
          exploreBtn: 'اطلب عرض أسعار'
        };
      case 'am':
        return {
          s1: '1. ምርጥ የቡና ፍሬ ምርጫ እና ስብሰባ',
          s2: '2. በራሳችን የቡና ማጠቢያ ጣቢያዎች ማቀነባበር',
          s3: '3. ደረቅ መፈልፈያ፣ ማበጠር እና የጥራት ቁጥጥር',
          factsTag: 'ካጆ ግሩፕ • ቁልፍ እውነታዎች',
          factsTitle: 'የ40 ዓመታት የንግድ እና ኤክስፖርት ልምድ',
          f1Label: 'በኢትዮጵያ የተመሰረተበት (እ.ኤ.አ)',
          f2Label: 'ዓመታት በዓለም አቀፍ ንግድ',
          f3Label: 'ዘርፈ-ብዙ የኢንቨስትመንት መስኮች',
          f4Label: 'የጥራት ፖሊሲ ማረጋገጫ',
          exploreBtn: 'ዋጋ ይጠይቁ'
        };
      case 'om':
        return {
          s1: '1. Filannoo fi Sassaabbii Buna Bilchaataa',
          s2: '2. Qopheessuu Buufata Dhiqannaa Keenyaa',
          s3: '3. Warshaa Hulling Gogaa fi To’annoo Qulqullinaa',
          factsTag: 'ODEEFFANNOO KAJO GROUP',
          factsTitle: 'Dhaala Daldala Addunyaa Bara 1985 Irraa',
          f1Label: 'BARA HUNDEEFFAMAA (GC)',
          f2Label: 'WAGGOOTA DALDALA ADDUNYAA',
          f3Label: 'DAMEEWWAN INVASTIMANTII',
          f4Label: 'MIRKANEESSA IMAAMMATA QULQULLINAA',
          exploreBtn: 'GATII GAAFADHAA'
        };
      default:
        return {
          s1: '1. Premium Highland Cherry Selection',
          s2: '2. Owned Wet Washing Station Processing',
          s3: '3. Precision Dry Hulling & Warehouse QC',
          factsTag: 'KAJO GROUP • ILLU IMPORT EXPORT',
          factsTitle: 'Corporate & Export Facts',
          f1Label: 'ESTABLISHED IN ETHIOPIA (GC)',
          f2Label: 'YEARS OF GLOBAL TRADE',
          f3Label: 'DIVERSE BUSINESS DIVISIONS',
          f4Label: 'COFFEE QUALITY POLICY ASSURED',
          exploreBtn: 'INQUIRE NOW'
        };
    }
  };

  const labels = getLocalizedStageLabels();

  return (
    <div id="services">
      {/* PART 1: QUALITY POLICY IN OUR COFFEE PRODUCTION LINE (PDF Page 11) */}
      <section className="py-20 bg-[#F6F1E7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left aligned copy column */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:col-span-5 ${language === 'ar' ? 'text-right' : 'text-left'} space-y-5 relative`}
            >
              <div className="absolute -right-10 -top-20 opacity-[0.12] pointer-events-none w-80 h-80 select-none flex items-center justify-center">
                <img
                  src="/16.png"
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>

              <div className="relative z-10">
                <span className="font-sans font-extrabold text-[10px] tracking-[0.22em] text-[#4A5D23] uppercase block mb-2">
                  {t.services.sectionTag}
                </span>
                <h2 className="font-display font-light text-[#2E1E15] tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-[1.15] text-balance">
                  {t.services.title}
                </h2>

                <p className="font-sans text-[#634838] text-xs sm:text-[13.5px] leading-relaxed mt-4">
                  {t.services.subtitle}
                </p>

                <div className="pt-4">
                  <button
                    onClick={onRequestQuote}
                    className="font-sans font-bold text-[11px] tracking-[0.2em] text-[#4A5D23] hover:text-[#39481A] inline-flex items-center gap-1.5 uppercase transition-all duration-200 border-b border-[#C9B699] hover:border-[#4A5D23] pb-1 cursor-pointer"
                  >
                    {labels.exploreBtn} <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right aligned large coffee sorting & drying photo */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-7 relative group overflow-hidden shadow-2xl border border-[#DCD0BC]"
            >
              <img
                src="/4.webp"
                alt="Kajo Group Coffee Production Quality Control"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#241710]/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-4 right-4 text-[#FAF7F0] text-[9px] tracking-widest uppercase font-mono bg-[#2E1E15]/92 px-3 py-1.5 backdrop-blur-xs select-none">
                OWNED WASHING, DRY HULLING & WAREHOUSE QC
              </div>
            </motion.div>
          </div>

          {/* 6 COFFEE PRODUCTION QUALITY PRINCIPLES (PDF Page 11) */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#DCD0BC]">
            {QUALITY_PRINCIPLES.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: idx * 0.06 }}
                className="p-5 sm:p-6 border-r border-b border-[#DCD0BC] bg-[#FAF7F0] hover:bg-[#ECE3D3]/60 transition-colors text-left"
              >
                <span className="font-mono font-bold text-[10px] text-[#4A5D23] tracking-widest block mb-1.5 tabular-nums">
                  POLICY {item.number}
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#2E1E15] mb-1.5">
                  {item.title}
                </h3>
                <p className="font-sans text-[11.5px] text-[#634838] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 3-column coffee production stage close-up grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 overflow-hidden">
            {/* Column 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative group overflow-hidden shadow-lg border border-[#DCD0BC]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/17.webp"
                  alt="Ripe red Ethiopian coffee cherries"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/80 to-transparent flex items-end p-4">
                <span className="font-sans font-extrabold text-[10px] tracking-widest text-[#FAF7F0] uppercase">
                  {labels.s1}
                </span>
              </div>
            </motion.div>

            {/* Column 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="relative group overflow-hidden shadow-lg border border-[#DCD0BC]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/18.webp"
                  alt="Washed parchment coffee beans at Kajo Group station"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/80 to-transparent flex items-end p-4">
                <span className="font-sans font-extrabold text-[10px] tracking-widest text-[#FAF7F0] uppercase">
                  {labels.s2}
                </span>
              </div>
            </motion.div>

            {/* Column 3 */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative group overflow-hidden shadow-lg border border-[#DCD0BC]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/19.webp"
                  alt="Sun-dried natural coffee pods"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/80 to-transparent flex items-end p-4">
                <span className="font-sans font-extrabold text-[10px] tracking-widest text-[#FAF7F0] uppercase">
                  {labels.s3}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PART 2: KAJO GROUP CORPORATE & EXPORT FACTS */}
      <section className="relative py-20 text-[#FAF7F0] overflow-hidden bg-[#241710]">
        <div className="absolute inset-0 z-0">
          <img
            src="/14.webp"
            alt="Global maritime container shipping and freight operations"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-[0.32] sepia-[0.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/92 via-[#2E1E15]/60 to-[#241710]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans font-extrabold text-[10px] tracking-[0.3em] text-[#A8B986] uppercase block mb-2">
              {labels.factsTag}
            </span>
            <h2 className="font-display font-light text-[#FAF7F0] tracking-tight text-2xl sm:text-3xl lg:text-4xl mb-4">
              {labels.factsTitle}
            </h2>

            <div className="mb-10">
              <button
                onClick={onRequestQuote}
                className="font-sans font-extrabold text-[10px] tracking-[0.22em] text-[#C9B699] hover:text-[#FAF7F0] inline-flex items-center gap-1.5 uppercase transition-all duration-200 cursor-pointer border-b border-[#C9B699]/40 hover:border-[#FAF7F0] pb-1"
              >
                {labels.exploreBtn} <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b border-[#FAF7F0]/20 divide-y md:divide-y-0 md:divide-x divide-[#FAF7F0]/20 py-5 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="py-4 px-4 flex flex-col items-center justify-center text-center"
            >
              <span className="font-display font-medium text-3xl sm:text-4xl lg:text-[2.75rem] text-[#FAF7F0] tracking-tight block mb-1.5 tabular-nums">
                1985
              </span>
              <span className="font-sans font-extrabold text-[9px] lg:text-[9.5px] tracking-widest text-[#DFD3BF] uppercase">
                {labels.f1Label}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="py-4 px-4 flex flex-col items-center justify-center text-center"
            >
              <span className="font-display font-medium text-3xl sm:text-4xl lg:text-[2.75rem] text-[#A8B986] tracking-tight block mb-1.5 tabular-nums">
                40+
              </span>
              <span className="font-sans font-extrabold text-[9px] lg:text-[9.5px] tracking-widest text-[#DFD3BF] uppercase">
                {labels.f2Label}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="py-4 px-4 flex flex-col items-center justify-center text-center"
            >
              <span className="font-display font-medium text-3xl sm:text-4xl lg:text-[2.75rem] text-[#FAF7F0] tracking-tight block mb-1.5 tabular-nums">
                10
              </span>
              <span className="font-sans font-extrabold text-[9px] lg:text-[9.5px] tracking-widest text-[#DFD3BF] uppercase">
                {labels.f3Label}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="py-4 px-4 flex flex-col items-center justify-center text-center"
            >
              <span className="font-display font-medium text-3xl sm:text-4xl lg:text-[2.75rem] text-[#A8B986] tracking-tight block mb-1.5 tabular-nums">
                100%
              </span>
              <span className="font-sans font-extrabold text-[9px] lg:text-[9.5px] tracking-widest text-[#DFD3BF] uppercase">
                {labels.f4Label}
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
