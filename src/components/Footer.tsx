import React from 'react';
import { Globe, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { useTranslation } from '../LanguageContext';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { language, t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  const getLocalizedDesc = () => {
    switch (language) {
      case 'ar':
        return 'تأسست عام ١٩٨٥م تحت اسم كاجو للاستيراد والتصدير وتعمل عالمياً عبر ذراعها التجاري (إيلو للاستيراد والتصدير) — رائدة في تصدير البن الأخضر، التوابل والبقوليات والبذور الزيتية، وخام الليثيوم، إضافة إلى ١٠ قطاعات استثمارية في إثيوبيا.';
      case 'am':
        return 'በ1985 (እ.ኤ.አ) በካጆ አስመጪና ላኪ ስም የተመሰረተ እና በ2012 በኢሉ አስመጪና ላኪ ዓለም አቀፍ ንግዱን ያሰፋ — በአረንጓዴ ቡና፣ ቅመማ ቅመም፣ ጥራጥሬና የቅባት እህሎች፣ በሊቲየም ማዕድን እና በ10 የኢንቨስትመንት ዘርፎች ግንባር ቀደም።';
      case 'om':
        return 'Bara 1985 GC maqaa Kajo Import Export jedhuun kan hundeeffamee fi illu Import Export waliin addunyaarratti kan hojjetu — Buna Magariisa, Mi’eessituu, Midhaan Dheedhii fi Sanyii Zayitaa, Albuuda Liitiyeemii fi dameewwan invastimantii 10 irratti bobba’ee argama.';
      default:
        return 'Established in Ethiopia in 1985 GC under Kajo Import Export and operating globally with our flagship trade division illu Import Export—delivering Ethiopian Green Bean Coffee, Spices, Pulses & Oilseeds, Lithium Ore, and 10 diversified investments.';
    }
  };

  const getLocalizedQuickLinks = () => {
    switch (language) {
      case 'ar':
        return 'روابط سريعة';
      case 'am':
        return 'ፈጣን ሊንኮች';
      case 'om':
        return 'Geessituuwwan';
      default:
        return 'Quick Links';
    }
  };

  const getLocalizedDivisions = () => {
    switch (language) {
      case 'ar':
        return 'ركائز التصدير والأعمال';
      case 'am':
        return 'የኤክስፖርት እና የስራ ዘርፎች';
      case 'om':
        return 'Dameewwan Keenya';
      default:
        return 'Export & Investments';
    }
  };

  const getLocalizedContactInfo = () => {
    switch (language) {
      case 'ar':
        return 'معلومات الاتصال الرسمية';
      case 'am':
        return 'የአድራሻ መረጃ';
      case 'om':
        return 'Teessoo Keenya';
      default:
        return 'Headquarters Contact';
    }
  };

  const getLocalizedMadeIn = () => {
    switch (language) {
      case 'ar':
        return 'سفراء التراث الإثيوبي منذ ١٩٨٥';
      case 'am':
        return 'ከ1985 ጀምሮ የኢትዮጵያ ቅርስ አምባሳደር';
      case 'om':
        return 'Bara 1985 GC Irraa Boonsaan Itoophiyaa Irraa';
      default:
        return 'Ambassadors of Ethiopian Heritage Since 1985 GC';
    }
  };

  return (
    <footer className="bg-[#241710] text-[#FAF7F0] pt-16 pb-8 border-t border-[#4A3325] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#FAF7F0]/12">
          {/* Brand/About Col (4 cols) */}
          <div className={`md:col-span-4 flex flex-col items-start ${language === 'ar' ? 'text-right' : 'text-left'} space-y-6`}>
            <img
              src="/kajo-logo.svg"
              alt="Kajo Group • illu Import Export Logo"
              referrerPolicy="no-referrer"
              className="h-14 w-auto object-contain"
            />

            <p className="font-sans text-xs text-[#DFD3BF] leading-relaxed max-w-sm">
              {getLocalizedDesc()}
            </p>

            <div className="flex gap-2.5">
              <a
                href="tel:+25111706050"
                className="w-8 h-8 rounded-lg bg-[#FAF7F0]/5 hover:bg-[#4A5D23] border border-[#FAF7F0]/12 flex items-center justify-center text-[#DFD3BF] hover:text-[#FAF7F0] transition-all"
                title="Call +251 11 70 60 50"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@illuimportexport.com"
                className="w-8 h-8 rounded-lg bg-[#FAF7F0]/5 hover:bg-[#4A5D23] border border-[#FAF7F0]/12 flex items-center justify-center text-[#DFD3BF] hover:text-[#FAF7F0] transition-all"
                title="Email info@illuimportexport.com"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.illuimportexport.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#FAF7F0]/5 hover:bg-[#4A5D23] border border-[#FAF7F0]/12 flex items-center justify-center text-[#DFD3BF] hover:text-[#FAF7F0] transition-all"
                title="www.illuimportexport.com"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className={`md:col-span-2 flex flex-col items-start ${language === 'ar' ? 'text-right' : 'text-left'} space-y-4`}>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#A8B986]">
              {getLocalizedQuickLinks()}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#DFD3BF] font-sans">
              <li>
                <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="hover:text-[#FAF7F0] transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="/story" onClick={(e) => handleLinkClick(e, '/story')} className="hover:text-[#FAF7F0] transition-colors">
                  {t.nav.story}
                </a>
              </li>
              <li>
                <a href="/products" onClick={(e) => handleLinkClick(e, '/products')} className="hover:text-[#FAF7F0] transition-colors">
                  {t.nav.products}
                </a>
              </li>
              <li>
                <a href="/logistics" onClick={(e) => handleLinkClick(e, '/logistics')} className="hover:text-[#FAF7F0] transition-colors">
                  {t.nav.logistics}
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')} className="hover:text-[#FAF7F0] transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Export & Investment Pillars (2 cols) */}
          <div className={`md:col-span-2 flex flex-col items-start ${language === 'ar' ? 'text-right' : 'text-left'} space-y-4`}>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#A8B986]">
              {getLocalizedDivisions()}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#DFD3BF] font-sans">
              <li>
                <a href="/products" onClick={(e) => handleLinkClick(e, '/products')} className="hover:text-[#FAF7F0] transition-colors">
                  {t.hero.segmentCoffee}
                </a>
              </li>
              <li>
                <a href="/products" onClick={(e) => handleLinkClick(e, '/products')} className="hover:text-[#FAF7F0] transition-colors">
                  {t.hero.segmentPulses}
                </a>
              </li>
              <li>
                <a href="/products" onClick={(e) => handleLinkClick(e, '/products')} className="hover:text-[#FAF7F0] transition-colors">
                  {t.hero.segmentLithium}
                </a>
              </li>
              <li>
                <a href="/logistics" onClick={(e) => handleLinkClick(e, '/logistics')} className="hover:text-[#FAF7F0] transition-colors">
                  {t.hero.segmentLogistics}
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact Info (4 cols) */}
          <div className={`md:col-span-4 flex flex-col items-start ${language === 'ar' ? 'text-right' : 'text-left'} space-y-4`}>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#A8B986]">
              {getLocalizedContactInfo()}
            </h4>
            <ul className="space-y-3.5 text-xs text-[#DFD3BF] font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A8B986] shrink-0 mt-0.5" />
                <span>{t.contact.addressVal}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A8B986] shrink-0" />
                <a href="tel:+25111706050" className="hover:text-[#FAF7F0] transition-colors">
                  +251 11 70 60 50
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#A8B986] shrink-0" />
                <a href="mailto:info@illuimportexport.com" className="hover:text-[#FAF7F0] transition-colors break-all">
                  info@illuimportexport.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#A8B986] shrink-0" />
                <a
                  href="https://www.illuimportexport.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF7F0] transition-colors"
                >
                  www.illuimportexport.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#C9B699] font-sans">
          <span>
            © {currentYear} KAJO GROUP (ILLU IMPORT EXPORT). {t.common.allRightsReserved}
          </span>
          <div className="flex items-center gap-1.5">
            <span>{getLocalizedMadeIn()}</span>
            <Heart className="w-3.5 h-3.5 text-[#8BA34E] fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
}
