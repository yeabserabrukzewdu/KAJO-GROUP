import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, Building, FileText, Globe } from 'lucide-react';
import { QuoteRequest, ProductCategoryKey } from '../types';
import { sendQuoteRequest } from '../lib/emailService';
import { useTranslation } from '../LanguageContext';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: ProductCategoryKey;
}

export default function QuoteModal({ isOpen, onClose, defaultCategory = 'all' }: QuoteModalProps) {
  const { language, t } = useTranslation();

  const [formData, setFormData] = useState<QuoteRequest>({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    productCategory: defaultCategory,
    estimatedVolume: '',
    destinationCountry: '',
    additionalMessage: ''
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      productCategory: defaultCategory
    }));
  }, [defaultCategory]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await sendQuoteRequest(formData);
      if (res.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(res.error || 'Unknown error occurred while dispatching inquiry');
      }
    } catch (err: any) {
      console.error('Quote request submission failed', err);
      setSubmitError(err?.message || 'An unexpected failure occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForceSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      companyName: '',
      phone: '',
      productCategory: 'all',
      estimatedVolume: '',
      destinationCountry: '',
      additionalMessage: ''
    });
    setIsSubmitted(false);
    onClose();
  };

  const getLocalizedDestinationLabel = () => {
    switch (language) {
      case 'ar':
        return 'بلد أو ميناء الوجهة المستهدف *';
      case 'am':
        return 'መድረሻ ሀገር / ወደብ *';
      case 'om':
        return 'Biyya / Buufata Gabaa *';
      default:
        return 'Target Destination Country / Port *';
    }
  };

  const getLocalizedDestinationPlaceholder = () => {
    switch (language) {
      case 'ar':
        return 'مثال: ألمانيا، الإمارات، الصين، الولايات المتحدة';
      case 'am':
        return 'ምሳሌ፡ ጀርመን፣ ዱባይ፣ ቻይና፣ አሜሪካ';
      case 'om':
        return 'Fkn: Germany, UAE, China, USA';
      default:
        return 'e.g. Germany, UAE, China, United States';
    }
  };

  const getLocalizedVolumeLabel = () => {
    switch (language) {
      case 'ar':
        return 'حجم الطلب المتوقع وتكرار الشحن *';
      case 'am':
        return 'የተገመተው የትዕዛዝ መጠን *';
      case 'om':
        return 'Hanga Ajajaa Tilmaamame *';
      default:
        return 'Estimated Order Volume & Frequency *';
    }
  };

  const getLocalizedVolumePlaceholder = () => {
    switch (language) {
      case 'ar':
        return 'مثال: حاوية 19.2 طن بن أخضر، 50 طن سمسم، أو شحنة خام ليثيوم';
      case 'am':
        return 'ምሳሌ፡ 1 ኮንቴይነር (19.2 ቶን ቡና)፣ 50 ቶን ሰሊጥ ወይም የሊቲየም ማዕድን';
      case 'om':
        return 'Fkn: Konteenara 1 Buna (19.2 MT), Saliixa 50 MT, ykn Albuuda Liitiyeemii';
      default:
        return 'e.g. 1 FCL Green Coffee (19.2 MT), 50 MT Sesame, or Lithium Ore Lot';
    }
  };

  const getLocalizedPrivacyText = () => {
    switch (language) {
      case 'ar':
        return 'تُعامل جميع بيانات شركتكم بسرية تامة لدى مكتب التجارة الدولية في مجموعة كاجو (إيلو للاستيراد والتصدير) في أديس أبابا.';
      case 'am':
        return 'የድርጅትዎ መረጃ በካጆ ግሩፕ (ኢሉ አስመጪ እና ላኪ) በሚስጥር የተጠበቀ ሲሆን ለንግድ ስምምነት ዝግጅት ብቻ ይውላል።';
      case 'om':
        return 'Odeeffannoon dhaabbata keessanii Kajo Group (illu Import Export) biratti iccitiidhaan kan eegamuudha.';
      default:
        return 'Your corporate details are kept strictly confidential and routed directly to Kajo Group’s international trade desk in Addis Ababa.';
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#241710]/80 backdrop-blur-md cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="bg-[#FAF7F0] rounded-2xl w-full max-w-2xl shadow-2xl relative z-10 overflow-hidden border border-[#DCD0BC]"
        >
          <div className="h-2 bg-gradient-to-r from-[#241710] via-[#4A3325] to-[#4A5D23] w-full" />

          <button
            onClick={onClose}
            className={`absolute top-4 ${language === 'ar' ? 'left-4' : 'right-4'} w-10 h-10 rounded-lg bg-[#ECE3D3] hover:bg-[#DCD0BC] text-[#2E1E15] flex items-center justify-center transition-colors cursor-pointer`}
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div className={`p-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <div className="mb-6">
                <span className="font-sans font-extrabold text-xs tracking-wider text-[#4A5D23] uppercase block mb-1">
                  Kajo Group • illu Import Export
                </span>
                <h3 className="font-display font-bold text-2xl text-[#2E1E15]">
                  {t.quoteModal.title}
                </h3>
                <p className="font-sans text-xs text-[#634838] mt-1 leading-relaxed">
                  {t.quoteModal.subtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="font-sans font-semibold text-xs text-[#4A3325] uppercase tracking-wider mb-1.5">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={t.contact.placeholderName}
                      className="px-4 py-2.5 rounded-lg bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] placeholder:text-[#7D6352]/70 focus:border-[#4A5D23] focus:ring-2 focus:ring-[#4A5D23]/15 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-sans font-semibold text-xs text-[#4A3325] uppercase tracking-wider mb-1.5">
                      {t.contact.emailLabel}
                    </label>
                    <div className="relative flex items-center">
                      <Mail className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} w-4 h-4 text-[#7D6352]`} />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.placeholderEmail}
                        className={`w-full ${language === 'ar' ? 'pr-11 pl-4' : 'pl-11 pr-4'} py-2.5 rounded-lg bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] placeholder:text-[#7D6352]/70 focus:border-[#4A5D23] focus:ring-2 focus:ring-[#4A5D23]/15 outline-none text-sm transition-all`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-sans font-semibold text-xs text-[#4A3325] uppercase tracking-wider mb-1.5">
                      {t.contact.companyLabel}
                    </label>
                    <div className="relative flex items-center">
                      <Building className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} w-4 h-4 text-[#7D6352]`} />
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder={t.contact.placeholderCompany}
                        className={`w-full ${language === 'ar' ? 'pr-11 pl-4' : 'pl-11 pr-4'} py-2.5 rounded-lg bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] placeholder:text-[#7D6352]/70 focus:border-[#4A5D23] focus:ring-2 focus:ring-[#4A5D23]/15 outline-none text-sm transition-all`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-sans font-semibold text-xs text-[#4A3325] uppercase tracking-wider mb-1.5">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contact.placeholderPhone}
                      className="px-4 py-2.5 rounded-lg bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] placeholder:text-[#7D6352]/70 focus:border-[#4A5D23] focus:ring-2 focus:ring-[#4A5D23]/15 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="font-sans font-semibold text-xs text-[#4A3325] uppercase tracking-wider mb-1.5">
                      {t.contact.interestLabel}
                    </label>
                    <div className="relative flex items-center">
                      <FileText className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} w-4 h-4 text-[#7D6352] pointer-events-none`} />
                      <select
                        value={formData.productCategory}
                        onChange={(e) =>
                          setFormData({ ...formData, productCategory: e.target.value as ProductCategoryKey })
                        }
                        className={`w-full ${language === 'ar' ? 'pr-11 pl-4' : 'pl-11 pr-4'} py-2.5 rounded-lg bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] focus:border-[#4A5D23] focus:ring-2 focus:ring-[#4A5D23]/15 outline-none text-sm cursor-pointer appearance-none transition-all`}
                      >
                        <option value="all">{t.contact.selectInterest}</option>
                        <option value="coffee">{t.contact.interestCoffee}</option>
                        <option value="pulses">{t.contact.interestPulses}</option>
                        <option value="lithium">{t.contact.interestLithium}</option>
                        <option value="investments">{t.contact.interestInvestments}</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-sans font-semibold text-xs text-[#4A3325] uppercase tracking-wider mb-1.5">
                      {getLocalizedDestinationLabel()}
                    </label>
                    <div className="relative flex items-center">
                      <Globe className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} w-4 h-4 text-[#7D6352]`} />
                      <input
                        type="text"
                        required
                        value={formData.destinationCountry}
                        onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                        placeholder={getLocalizedDestinationPlaceholder()}
                        className={`w-full ${language === 'ar' ? 'pr-11 pl-4' : 'pl-11 pr-4'} py-2.5 rounded-lg bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] placeholder:text-[#7D6352]/70 focus:border-[#4A5D23] focus:ring-2 focus:ring-[#4A5D23]/15 outline-none text-sm transition-all`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-sans font-semibold text-xs text-[#4A3325] uppercase tracking-wider mb-1.5">
                    {getLocalizedVolumeLabel()}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.estimatedVolume}
                    onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                    placeholder={getLocalizedVolumePlaceholder()}
                    className="px-4 py-2.5 rounded-lg bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] placeholder:text-[#7D6352]/70 focus:border-[#4A5D23] focus:ring-2 focus:ring-[#4A5D23]/15 outline-none text-sm transition-all"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-sans font-semibold text-xs text-[#4A3325] uppercase tracking-wider mb-1.5">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.additionalMessage}
                    onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
                    placeholder={t.contact.placeholderMessage}
                    className="px-4 py-2.5 rounded-lg bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] placeholder:text-[#7D6352]/70 focus:border-[#4A5D23] focus:ring-2 focus:ring-[#4A5D23]/15 outline-none text-sm transition-all resize-none"
                  />
                </div>

                <div className="flex items-start gap-2 text-[10px] text-[#634838] bg-[#F6F1E7] border border-[#DCD0BC] p-3 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-[#4A5D23] shrink-0 mt-0.5" />
                  <span>{getLocalizedPrivacyText()}</span>
                </div>

                {submitError && (
                  <div className="bg-[#F6F1E7] border border-[#8C3B2B]/40 rounded-lg p-4 text-xs text-[#5C2218] space-y-2">
                    <p className="font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#8C3B2B] rounded-full" />
                      Dispatch Notification
                    </p>
                    <p className="text-[#634838] font-sans leading-relaxed">{submitError}</p>
                    <div className="pt-1 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={handleForceSubmit}
                        className="bg-[#4A5D23] hover:bg-[#39481A] text-[#FAF7F0] px-3 py-1.5 rounded-md font-sans font-bold text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Record Inquiry Confirmation
                      </button>
                      <a
                        href={`mailto:info@illuimportexport.com?subject=${encodeURIComponent(
                          `Export Quote - ${formData.companyName || formData.fullName}`
                        )}`}
                        className="bg-[#2E1E15] hover:bg-[#4A3325] text-[#FAF7F0] px-3 py-1.5 rounded-md font-sans font-bold text-[10px] uppercase tracking-wider transition-colors"
                      >
                        Email info@illuimportexport.com
                      </a>
                    </div>
                  </div>
                )}

                <div className={`pt-2 flex ${language === 'ar' ? 'justify-start' : 'justify-end'} gap-3 border-t border-[#DCD0BC]`}>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-lg border border-[#DCD0BC] hover:border-[#C9B699] hover:bg-[#ECE3D3] font-sans font-bold text-xs text-[#634838] uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    {t.common.close}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-[#4A5D23] hover:bg-[#39481A] disabled:bg-[#C9B699] text-[#FAF7F0] font-sans font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-[#FAF7F0] border-t-transparent rounded-full animate-spin" />
                        <span>{t.common.loading}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.quoteModal.submitQuote}</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-12 text-center flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', damping: 15 }}
                className="w-20 h-20 bg-[#EAEEE0] rounded-full border border-[#4A5D23]/25 flex items-center justify-center mb-6"
              >
                <CheckCircle2 className="w-12 h-12 text-[#4A5D23]" />
              </motion.div>

              <h3 className="font-display font-bold text-2xl text-[#2E1E15]">
                {language === 'ar'
                  ? 'تم استلام طلب التسعيرة بنجاح'
                  : language === 'am'
                  ? 'ጥያቄዎ በስኬት ደርሷል'
                  : language === 'om'
                  ? 'Gaaffiin Keessan Milkiidhaan Qaqqabeera'
                  : 'Inquiry Received Successfully'}
              </h3>

              <p className="font-sans text-[#634838] text-sm mt-3 leading-relaxed max-w-md">
                {language === 'ar'
                  ? 'شكراً لاهتمامكم بالشراكة مع مجموعة كاجو (إيلو للاستيراد والتصدير). تم توجيه طلبكم إلى قسم التجارة الدولية في أديس أبابا.'
                  : language === 'am'
                  ? 'ከካጆ ግሩፕ (ኢሉ አስመጪ እና ላኪ) ጋር ለመስራት ፍላጎት ስላሳዩ እናመሰግናለን። ጥያቄዎ ለዓለም አቀፍ የንግድ ክፍላችን ተልኳል።'
                  : language === 'om'
                  ? 'Kajo Group (illu Import Export) waliin hojjechuuf fedhii agarsiistaniif galatoomaa. Gaaffiin keessan kutaa daldala addunyaa keenyaaf darbeera.'
                  : 'Thank you for partnering with Kajo Group (illu Import Export). Your inquiry has been routed to our international trade coordinators in Addis Ababa.'}
              </p>

              <div className="bg-[#F6F1E7] rounded-xl p-4 border border-[#DCD0BC] mt-6 text-left text-xs text-[#634838] font-sans max-w-sm space-y-1">
                <div>
                  <strong className="text-[#2E1E15]">Inquirer:</strong> {formData.fullName} ({formData.companyName || 'Corporate'})
                </div>
                <div>
                  <strong className="text-[#2E1E15]">Destination:</strong> {formData.destinationCountry}
                </div>
                <div>
                  <strong className="text-[#2E1E15]">Pillar:</strong> {formData.productCategory.toUpperCase()}
                </div>
                <div className="pt-2 border-t border-[#DCD0BC] mt-2 text-[10px] text-[#7D6352]">
                  Confirmation assigned for <strong>{formData.email}</strong> • Ref: KG-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>

              <button
                onClick={handleReset}
                className="mt-8 px-6 py-3 rounded-lg bg-[#2E1E15] hover:bg-[#4A3325] text-[#FAF7F0] font-sans font-bold text-sm shadow-md transition-colors cursor-pointer"
              >
                {language === 'ar'
                  ? 'العودة إلى الموقع'
                  : language === 'am'
                  ? 'ወደ ድህረ ገጽ ተመለስ'
                  : language === 'om'
                  ? 'Gara Marsariitiitti Deebi’i'
                  : 'Return to Kajo Group'}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
