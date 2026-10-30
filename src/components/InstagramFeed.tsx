import React from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Globe,
  Phone,
  Mail
} from 'lucide-react';
import { useTranslation } from '../LanguageContext';
import { WHY_KAJO_ITEMS } from '../data';

export const InstagramFeed: React.FC = () => {
  const { language } = useTranslation();

  const getHeaderCopy = () => {
    switch (language) {
      case 'ar':
        return {
          tag: 'لماذا مجموعة كاجو؟',
          title: 'ثماني ركائز للتميز في التجارة العالمية',
          desc: 'اختيار مجموعة كاجو وذراعها التجاري الدولي (إيلو للاستيراد والتصدير) يعني الشراكة مع مؤسسة إثيوبية عريقة تأسست عام ١٩٨٥ وتلتزم بأعلى معايير النزاهة والجودة.'
        };
      case 'am':
        return {
          tag: 'ለምን ካጆ ግሩፕን ይመርጣሉ?',
          title: 'የዓለም አቀፍ ንግድ ስኬታችን 8 ቁልፍ ምሰሶዎች',
          desc: 'ከ1985 (እ.ኤ.አ) ጀምሮ የካበተ ልምድ ያለው ካጆ ግሩፕ እና ኢሉ አስመጪና ላኪ በጥራት፣ በታማኝነት እና በዘርፈ-ብዙ አቅም አስተማማኝ የንግድ አጋርዎ ናቸው።'
        };
      case 'om':
        return {
          tag: 'MAALIIF KAJO GROUP FILATTU?',
          title: 'Utubaalee Milkaa’ina Daldala Addunyaa Saddeet',
          desc: 'Kajo Group fi illu Import Export filachuun dhaabbata bara 1985 GC irraa eegalee amanamummaa, qulqullinaa fi muuxannoo addunyaatiin beekamu waliin hojjechuudha.'
        };
      default:
        return {
          tag: 'WHY KAJO GROUP • ILLU IMPORT EXPORT',
          title: 'Eight Pillars of Global Trade Excellence',
          desc: 'Choosing Kajo Group means partnering with a proven Ethiopian business house established in 1985 GC—dedicated to quality assurance, ethical trade, and long-term mutual growth.'
        };
    }
  };

  const copy = getHeaderCopy();

  return (
    <section className="py-20 border-t border-[#DCD0BC] bg-[#ECE3D3]/55 relative overflow-hidden" id="why-kajo">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4A5D23]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#4A3325]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FAF7F0] border border-[#DCD0BC] mb-3 shadow-xs"
          >
            <Award className="w-3.5 h-3.5 text-[#4A5D23]" />
            <span className="font-sans font-extrabold text-[9.5px] tracking-[0.22em] text-[#4A5D23] uppercase">
              {copy.tag}
            </span>
          </motion.div>

          <h2 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl text-[#2E1E15] tracking-tight mb-3 text-balance">
            {copy.title}
          </h2>
          <p className="text-xs sm:text-[13px] text-[#634838] leading-relaxed font-sans">
            {copy.desc}
          </p>
        </div>

        {/* CORPORATE EXECUTIVE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FAF7F0] border border-[#DCD0BC] shadow-xl overflow-hidden"
        >
          {/* Top Executive Strip */}
          <div className="p-5 sm:p-7 bg-[#2E1E15] text-[#FAF7F0] flex flex-col lg:flex-row items-center justify-between gap-5 border-b-4 border-[#6B8238]">
            <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
              <img
                src="/kajo-logo.svg"
                alt="Kajo Group • illu Import Export"
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain shrink-0"
              />
              <div className="sm:border-l sm:border-[#FAF7F0]/15 sm:pl-4">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-0.5">
                  <span className="font-display font-medium text-lg sm:text-xl text-[#FAF7F0] tracking-wide">
                    Kajo Group • illu Import Export
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#A8B986] shrink-0" />
                </div>
                <p className="text-[11.5px] text-[#DFD3BF] font-sans">
                  Arada Sub City, Habtegiorgis Street, Addis Ababa, Ethiopia • Est. 1985 GC
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+25111706050"
                className="px-3.5 py-2 bg-[#FAF7F0]/10 hover:bg-[#FAF7F0]/15 border border-[#FAF7F0]/15 text-[#FAF7F0] font-mono font-bold text-[11px] tracking-wider flex items-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#A8B986]" />
                <span>+251 11 70 60 50</span>
              </a>
              <a
                href="mailto:info@illuimportexport.com"
                className="px-4 py-2 bg-[#4A5D23] hover:bg-[#39481A] text-[#FAF7F0] font-sans font-extrabold text-[10.5px] uppercase tracking-widest flex items-center gap-2 transition-colors shadow-md"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>info@illuimportexport.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 8 PILLARS ARCHITECTURAL GRID (PDF Page 9) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#DCD0BC] border-b border-[#DCD0BC]">
            {WHY_KAJO_ITEMS.slice(0, 4).map((item, idx) => (
              <div key={item.title} className="p-5 sm:p-6 hover:bg-[#F6F1E7] transition-colors text-left">
                <span className="font-mono font-bold text-[9.5px] text-[#4A5D23] tracking-widest uppercase block mb-1.5">
                  0{idx + 1} • ADVANTAGE
                </span>
                <h3 className="font-display font-bold text-[15px] sm:text-base text-[#2E1E15] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-[11.5px] text-[#634838] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#DCD0BC]">
            {WHY_KAJO_ITEMS.slice(4, 8).map((item, idx) => (
              <div key={item.title} className="p-5 sm:p-6 hover:bg-[#F6F1E7] transition-colors text-left">
                <span className="font-mono font-bold text-[9.5px] text-[#4A5D23] tracking-widest uppercase block mb-1.5">
                  0{idx + 5} • ADVANTAGE
                </span>
                <h3 className="font-display font-bold text-[15px] sm:text-base text-[#2E1E15] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-[11.5px] text-[#634838] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Verification Bar */}
          <div className="bg-[#F6F1E7] px-6 py-4 border-t border-[#DCD0BC] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7D6352]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#4A5D23] shrink-0" />
              <span className="font-sans font-semibold text-[#4A3325]">
                Founded by Mr. Kelifa Abajorga • Trusted Ethiopian Export & Investment House Since 1985 GC
              </span>
            </div>
            <a
              href="https://www.illuimportexport.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#4A5D23] hover:text-[#39481A] hover:underline"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>www.illuimportexport.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
