import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Truck, Building2, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../LanguageContext';
import { ASSET_IMAGES } from '../assets';

interface LogisticsSectionProps {
  onExploreLogistics: () => void;
  evImg?: string;
}

export default function LogisticsSection({ onExploreLogistics }: LogisticsSectionProps) {
  const { language, t } = useTranslation();

  const getLocalizedCopy = () => {
    switch (language) {
      case 'ar':
        return {
          m1Title: 'التصنيع والمعالجة',
          m1Desc: 'محطات غسيل وتقشير البن ومستودعاتنا ومصانع الإنتاج والبناء.',
          m2Title: 'الشحن وتقنية المعلومات',
          m2Desc: 'خدمات الشحن البري والبحري وحلول الحاسوب وتكنولوجيا المؤسسات.',
          m3Title: 'الرعاية الصحية والضيافة',
          m3Desc: 'توزيع الأدوية والمستلزمات الطبية والفنادق والشقق وإدارة العقارات.',
          btn: 'استكشف جميع القطاعات العشرة',
          imgBadge: 'محفظة أعمال متكاملة',
          imgCaption: '١٠ قطاعات استثمارية في إثيوبيا'
        };
      case 'am':
        return {
          m1Title: 'ማኑፋክቸሪንግ እና ማቀነባበሪያ',
          m1Desc: 'የቡና ማጠቢያ፣ መፈልፈያ፣ መጋዘን፣ ማኑፋክቸሪንግ እና የኮንስትራክሽን ዘርፎች።',
          m2Title: 'የጭነት ትራንስፖርት እና አይቲ',
          m2Desc: 'ቀልጣፋ የጭነት አገልግሎት እና ዘመናዊ የኮምፒውተርና ቴክኖሎጂ መፍትሄዎች።',
          m3Title: 'ጤና፣ ሆቴል እና ንብረት አስተዳደር',
          m3Desc: 'የመድኃኒትና ህክምና እቃዎች ስርጭት፣ የመጠጥ ስርጭት፣ ሆቴሎች እና አፓርትመንቶች።',
          btn: 'ሁሉንም 10 የኢንቨስትመንት ዘርፎች ይመልከቱ',
          imgBadge: 'ዘርፈ-ብዙ ኢንቨስትመንት',
          imgCaption: '10 ስትራቴጂካዊ የቢዝነስ ዘርፎች'
        };
      case 'om':
        return {
          m1Title: 'Qopheessuu fi Warshaa',
          m1Desc: 'Buufata dhiqannaa bunaa, kuusaa, warshaa oomishaa fi ijaarsa.',
          m2Title: 'Fe’umsaa fi Teekinoolojii IT',
          m2Desc: 'Tajaajila geejjiba fe’umsaa fi furmaata kompiitaraa ammayyaa.',
          m3Title: 'Fayyaa fi Keessummeessuu',
          m3Desc: 'Raabsaa qorichaa, dhugaatii, hoteelota, apaartimantoota fi bulchiinsa qabeenyaa.',
          btn: 'DAMEEWWAN INVASTIMANTII 10 ILAALAA',
          imgBadge: 'PORTFOLIO BAL’AA',
          imgCaption: 'DAMEEWWAN DALDALAA 10 ITOOPHIYAA KEESSATTI'
        };
      default:
        return {
          m1Title: 'Agro & Industrial',
          m1Desc: 'Owned coffee washing, hulling & warehouses, manufacturing, and construction.',
          m2Title: 'Freight & Enterprise IT',
          m2Desc: 'Multimodal freight services alongside top-tier computer & IT solutions.',
          m3Title: 'Healthcare & Hospitality',
          m3Desc: 'Pharmaceutical & medical supplies, beverages, hotels, apartments & real estate.',
          btn: 'EXPLORE ALL 10 INVESTMENT DIVISIONS',
          imgBadge: 'KAJO GROUP PORTFOLIO',
          imgCaption: '10 STRATEGIC INVESTMENT DIVISIONS'
        };
    }
  };

  const copy = getLocalizedCopy();

  return (
    <section className="py-20 border-t border-[#DCD0BC] bg-[#F6F1E7] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#4A5D23]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden">
          {/* LEFT SIDE: Immersive description and feature metrics */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 ${language === 'ar' ? 'text-right' : 'text-left'} space-y-5`}
          >
            <span className="font-sans font-extrabold text-[10px] tracking-[0.22em] text-[#4A5D23] uppercase block">
              {t.logistics.sectionTag}
            </span>
            <h2 className="font-display font-light text-[#2E1E15] tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance">
              {t.logistics.title}
            </h2>
            <p className="font-sans text-[#634838] text-xs sm:text-[13.5px] leading-relaxed">
              {t.logistics.subtitle}
            </p>

            {/* Micro value-prop icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-[#DCD0BC]">
              <div className="space-y-1.5">
                <div className={`w-8 h-8 rounded-full bg-[#EAEEE0] border border-[#4A5D23]/20 text-[#4A5D23] flex items-center justify-center ${language === 'ar' ? 'mr-0 ml-auto' : ''}`}>
                  <Building2 className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-[11.5px] text-[#2E1E15] uppercase tracking-wider">
                  {copy.m1Title}
                </h4>
                <p className="text-[11px] text-[#634838] leading-relaxed">
                  {copy.m1Desc}
                </p>
              </div>

              <div className="space-y-1.5">
                <div className={`w-8 h-8 rounded-full bg-[#ECE3D3] border border-[#C9B699] text-[#4A3325] flex items-center justify-center ${language === 'ar' ? 'mr-0 ml-auto' : ''}`}>
                  <Truck className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-[11.5px] text-[#2E1E15] uppercase tracking-wider">
                  {copy.m2Title}
                </h4>
                <p className="text-[11px] text-[#634838] leading-relaxed">
                  {copy.m2Desc}
                </p>
              </div>

              <div className="space-y-1.5">
                <div className={`w-8 h-8 rounded-full bg-[#EAEEE0] border border-[#4A5D23]/20 text-[#4A5D23] flex items-center justify-center ${language === 'ar' ? 'mr-0 ml-auto' : ''}`}>
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-[11.5px] text-[#2E1E15] uppercase tracking-wider">
                  {copy.m3Title}
                </h4>
                <p className="text-[11px] text-[#634838] leading-relaxed">
                  {copy.m3Desc}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreLogistics}
                className="font-sans font-extrabold text-[10px] tracking-[0.22em] text-[#4A5D23] hover:text-[#39481A] inline-flex items-center gap-1.5 uppercase transition-all duration-200 border-b border-[#C9B699] hover:border-[#4A5D23] pb-1 cursor-pointer"
              >
                {copy.btn} <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Visual representation of Kajo Group's Diversified Investments */}
          <div className="lg:col-span-6 relative flex items-center justify-center h-[360px] sm:h-[400px] overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? -65 : 65, rotate: 1.5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full shadow-2xl overflow-hidden border-8 border-[#FAF7F0] outline outline-1 outline-[#DCD0BC] z-10 group"
            >
              <img
                src={ASSET_IMAGES.hospitalityProperty}
                alt="Kajo Group Diverse Investments in Addis Ababa"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/75 via-transparent to-transparent" />

              <div className={`absolute bottom-5 ${language === 'ar' ? 'right-5 text-right' : 'left-5 text-left'} text-[#FAF7F0]`}>
                <span className="font-sans font-extrabold text-[8px] tracking-[0.28em] uppercase text-[#A8B986] block mb-1">
                  {copy.imgBadge}
                </span>
                <p className="font-display font-light text-base sm:text-lg tracking-wide leading-tight uppercase">
                  {copy.imgCaption}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
