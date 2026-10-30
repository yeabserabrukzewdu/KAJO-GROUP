import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { useTranslation } from '../LanguageContext';

export default function WhatsAppToggle() {
  const { language } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const phoneNum = '25111706050'; // Official Kajo Group / illu Import Export phone (+251 11 70 60 50)

  const buildWaUrl = (text: string) =>
    `https://wa.me/${phoneNum}?text=${encodeURIComponent(text.trim())}`;

  const getLocalizedRepresentativeTitle = () => {
    switch (language) {
      case 'ar':
        return 'مكتب التجارة الدولية • أديس أبابا';
      case 'am':
        return 'ዓለም አቀፍ የንግድ ክፍል • አዲስ አበባ';
      case 'om':
        return 'Kutaa Daldala Addunyaa • Finfinnee';
      default:
        return 'Global Trade Desk • Addis Ababa';
    }
  };

  const getLocalizedWelcomeMsg = () => {
    switch (language) {
      case 'ar':
        return 'مرحباً بكم في مجموعة كاجو (إيلو للاستيراد والتصدير)!';
      case 'am':
        return 'ወደ ካጆ ግሩፕ (ኢሉ አስመጪ እና ላኪ) እንኳን በደህና መጡ!';
      case 'om':
        return 'Gara Kajo Group (illu Import Export) baga nagaan dhuftan!';
      default:
        return 'Welcome to Kajo Group • illu Import Export!';
    }
  };

  const getLocalizedDescMsg = () => {
    switch (language) {
      case 'ar':
        return 'كيف يمكن لفريق التصدير والاستثمار مساعدتكم اليوم؟ نلبي طلبات البن الأخضر الإثيوبي، التوابل والبقوليات والبذور الزيتية، خام الليثيوم، والشراكات عبر قطاعاتنا العشرة.';
      case 'am':
        return 'እንዴት ልንረዳዎ እንችላለን? በአረንጓዴ ቡና፣ በቅመማ ቅመም፣ ጥራጥሬ እና የቅባት እህሎች፣ በሊቲየም ማዕድን ኤክስፖርት ወይም በ10 የኢንቨስትመንት ዘርፎቻችን ላይ ለሚኖርዎት ጥያቄ ዝግጁ ነን።';
      case 'om':
        return 'Akkamitti isin gargaaruu dandeenya? Al-ergii Buna Magariisaa, Mi’eessituu, Midhaan Dheedhii fi Sanyii Zayitaa, Albuuda Liitiyeemii ykn dameewwan invastimantii 10 irratti isin keessummeessuuf qophiidha.';
      default:
        return 'How can our trade desk assist you today? Connect with us regarding Ethiopian Green Bean Coffee, Spices, Pulses & Oilseeds, Lithium Ore exports, or our 10 investment divisions.';
    }
  };

  const getLocalizedCommonTopics = () => {
    switch (language) {
      case 'ar':
        return 'استفسارات سريعة';
      case 'am':
        return 'ፈጣን ጥያቄዎች';
      case 'om':
        return 'Gaaffiiwwan Ariifachiisoo';
      default:
        return 'Direct Trade Inquiries';
    }
  };

  const quickTopics = [
    {
      label:
        language === 'ar'
          ? '☕ تسعير البن الأخضر الإثيوبي'
          : language === 'am'
          ? '☕ የአረንጓዴ ቡና ኤክስፖርት ዋጋ'
          : language === 'om'
          ? '☕ Gatii Buna Magariisaa'
          : '☕ Green Bean Coffee Quote',
      text: "Hello Kajo Group! I would like to request specifications and FOB/CIF pricing for Ethiopian Green Bean Coffee exports."
    },
    {
      label:
        language === 'ar'
          ? '🌾 التوابل والبقوليات والسمسم'
          : language === 'am'
          ? '🌾 ቅመማ ቅመም፣ ጥራጥሬ እና ሰሊጥ'
          : language === 'om'
          ? '🌾 Mi’eessituu, Midhaan fi Saliixa'
          : '🌾 Spices, Pulses & Oilseeds',
      text: "Hello Kajo Group! Please share current availability and pricing for Ethiopian Spices, Pulses, and Sesame/Oilseeds."
    },
    {
      label:
        language === 'ar'
          ? '💎 خام الليثيوم وقطاعات الاستثمار'
          : language === 'am'
          ? '💎 የሊቲየም ማዕድን እና ኢንቨስትመንት'
          : language === 'om'
          ? '💎 Albuuda Liitiyeemii fi Invastimantii'
          : '💎 Lithium Ore & Investments',
      text: "Hello Kajo Group! We would like to discuss Lithium Ore export specifications / corporate partnership opportunities."
    }
  ];

  const getLocalizedPlaceholder = () => {
    switch (language) {
      case 'ar':
        return 'اكتب استفسارك التجاري...';
      case 'am':
        return 'የንግድ ጥያቄዎን እዚህ ይጻፉ...';
      case 'om':
        return 'Gaaffii daldalaa keessan barreessaa...';
      default:
        return 'Type your trade inquiry...';
    }
  };

  return (
    <div className={`fixed bottom-6 ${language === 'ar' ? 'left-6' : 'right-6'} z-50 font-sans select-none`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute bottom-20 ${language === 'ar' ? 'left-0' : 'right-0'} w-[330px] sm:w-[360px] bg-[#FAF7F0] border border-[#DCD0BC] shadow-2xl flex flex-col ${
              language === 'ar' ? 'text-right' : 'text-left'
            } overflow-hidden`}
          >
            {/* Widget Header */}
            <div className="bg-[#2E1E15] p-5 text-[#FAF7F0] relative border-b-2 border-[#6B8238]">
              <div className="absolute inset-0 bg-[radial-gradient(#FAF7F008_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <div className={`flex justify-between items-start relative z-10 ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#241710] border-2 border-[#A8B986] flex items-center justify-center text-xs font-bold font-display text-[#FAF7F0]">
                      KG
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#8BA34E] rounded-full border-2 border-[#2E1E15]" />
                  </div>
                  <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                    <h4 className="font-display font-medium text-sm tracking-wide text-[#FAF7F0] uppercase">
                      Kajo Group • illu
                    </h4>
                    <span
                      className={`text-[10px] text-[#DFD3BF] flex items-center gap-1.5 uppercase font-bold tracking-wider ${
                        language === 'ar' ? 'justify-end' : ''
                      }`}
                    >
                      <span className="w-1.5 h-1.5 bg-[#A8B986] rounded-full" />
                      {getLocalizedRepresentativeTitle()}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#C9B699] hover:text-[#FAF7F0] transition-colors p-1 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content area */}
            <div className="p-5 space-y-4 bg-[#F6F1E7] max-h-[350px] overflow-y-auto">
              <div
                className={`bg-[#FAF7F0] p-4 border border-[#DCD0BC] shadow-xs ${
                  language === 'ar' ? 'rounded-l-xl rounded-br-xl' : 'rounded-r-xl rounded-bl-xl'
                } text-xs space-y-2 leading-relaxed text-[#4A3325]`}
              >
                <p className="font-semibold text-[#2E1E15]">{getLocalizedWelcomeMsg()}</p>
                <p>{getLocalizedDescMsg()}</p>
              </div>

              {/* Quick pre-filled prompt triggers using standard anchor tags */}
              <div className="space-y-1.5">
                <span
                  className={`text-[9px] font-sans font-extrabold tracking-wider text-[#7D6352] uppercase block ${
                    language === 'ar' ? 'text-right' : 'text-left'
                  }`}
                >
                  {getLocalizedCommonTopics()}
                </span>
                <div className={`flex flex-wrap gap-1.5 ${language === 'ar' ? 'justify-end' : ''}`}>
                  {quickTopics.map((topic) => (
                    <a
                      key={topic.label}
                      href={buildWaUrl(topic.text)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="bg-[#FAF7F0] border border-[#DCD0BC] hover:border-[#4A5D23] hover:bg-[#EAEEE0]/60 hover:text-[#39481A] text-[10px] text-[#4A3325] px-3 py-1.5 rounded-md transition-colors font-medium text-left"
                    >
                      {topic.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Message input footer */}
            <div
              className={`p-3 border-t border-[#DCD0BC] bg-[#FAF7F0] flex gap-2 items-center ${
                language === 'ar' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={getLocalizedPlaceholder()}
                className={`flex-1 px-3 py-2 bg-[#F6F1E7] border border-[#DCD0BC] text-[#2E1E15] placeholder:text-[#7D6352]/70 focus:border-[#4A5D23] focus:ring-1 focus:ring-[#4A5D23]/20 outline-none text-xs transition-all ${
                  language === 'ar' ? 'text-right' : 'text-left'
                }`}
              />
              <a
                href={buildWaUrl(message || 'Hello Kajo Group! I would like to connect with your trade desk.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setMessage('');
                  setIsOpen(false);
                }}
                className="bg-[#4A5D23] hover:bg-[#39481A] text-[#FAF7F0] p-2.5 rounded-full transition-colors shadow-md flex items-center justify-center shrink-0"
                title="Connect with Kajo Group"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#4A5D23] hover:bg-[#39481A] text-[#FAF7F0] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group relative border-2 border-[#FAF7F0] cursor-pointer"
        aria-label="Contact Kajo Group on WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#FAF7F0]">
            <path d="M12.031 2C6.492 2 2 6.484 2 12.022c0 1.97.574 3.805 1.554 5.358L2.008 22l4.825-1.517c1.52.892 3.287 1.412 5.198 1.412 5.54 0 10.03-4.484 10.03-10.022C22.062 6.484 17.57 2 12.03 2zm.029 17.07a7.027 7.027 0 0 1-3.582-.977l-.256-.147-2.659.836.852-2.592-.169-.264a7.014 7.014 0 0 1-1.083-3.737c0-3.882 3.167-7.04 7.062-7.04 3.884 0 7.04 3.158 7.04 7.04-1e-4 3.88-3.155 7.037-7.005 7.041zm3.843-5.238c-.21-.105-1.246-.613-1.439-.682-.193-.07-.333-.105-.473.105-.14.21-.543.682-.665.82-.123.14-.246.158-.456.053-.21-.105-.886-.327-1.689-1.039-.623-.553-1.043-1.237-1.165-1.447-.123-.21-.013-.324.092-.428.095-.095.21-.246.316-.368.105-.123.14-.21.21-.35.07-.14.035-.263-.017-.368-.053-.105-.473-1.14-.649-1.56-.171-.41-.344-.354-.473-.36l-.403-.008c-.14 0-.368.053-.561.263-.193.21-.737.719-.737 1.754s.754 2.035.86 2.175c.105.14 1.484 2.263 3.59 3.175.5.217.891.347 1.196.443.504.162.963.14 1.326.085.405-.06 1.246-.508 1.421-.999.175-.491.175-.912.123-.999-.052-.087-.193-.14-.403-.245z" />
          </svg>
        )}
      </button>
    </div>
  );
}
