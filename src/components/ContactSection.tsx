import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Globe } from 'lucide-react';
import { QuoteRequest, ProductCategoryKey } from '../types';
import EthiopiaMap from './EthiopiaMap';
import { sendQuoteRequest } from '../lib/emailService';
import { useTranslation } from '../LanguageContext';
import { InstagramFeed } from './InstagramFeed';

export default function ContactSection() {
  const { language, t } = useTranslation();

  const [formData, setFormData] = useState<QuoteRequest>({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    productCategory: 'all',
    estimatedVolume: '',
    destinationCountry: '',
    additionalMessage: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitError(null);

    try {
      const res = await sendQuoteRequest(formData);
      if (res.success) {
        setIsSent(true);
      } else {
        setSubmitError(res.error || 'Unknown error occurred while dispatching inquiry');
      }
    } catch (err: any) {
      console.error('Quote request submission failed', err);
      setSubmitError(err?.message || 'An unexpected failure occurred.');
    } finally {
      setIsSending(false);
    }
  };

  const handleForceSubmit = () => {
    setIsSent(true);
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
    setIsSent(false);
    setSubmitError(null);
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
        return 'الكمية المطلوبة وتكرار الشحن *';
      case 'am':
        return 'የተገመተው የትዕዛዝ መጠን *';
      case 'om':
        return 'Hanga Ajajaa Tilmaamame *';
      default:
        return 'Estimated Order Volume & Schedule *';
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

  return (
    <div id="contact" className="bg-[#F6F1E7]">
      {/* PART 1: HEADQUARTERS MAP & CORPORATE CONTACT FORM (PDF Page 13) */}
      <section className="py-20 border-t border-[#DCD0BC] bg-[#F6F1E7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start overflow-hidden">
            {/* LEFT COLUMN: Map & Ethiopian Footprint */}
            <motion.div
              initial={{ opacity: 0, x: -70, rotate: -1.5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <div className={`border border-[#DCD0BC] p-6 sm:p-7 shadow-xl bg-[#FAF7F0] ${language === 'ar' ? 'text-right' : 'text-left'} relative`}>
                <span className="font-sans font-extrabold text-[10px] text-[#4A5D23] tracking-widest uppercase block mb-1.5">
                  {language === 'ar'
                    ? 'المقر الرئيسي ومناطق التوريد'
                    : language === 'am'
                    ? 'ዋና መስሪያ ቤት እና የምርት መገኛዎች'
                    : language === 'om'
                    ? 'WAJJIRA MUUMMEE FI MADDA OOMISHAA'
                    : 'HEADQUARTERS & ORIGIN NETWORK'}
                </span>
                <h3 className="font-display font-light text-[#2E1E15] text-xl sm:text-2xl mb-3">
                  {t.contact.mapTitle}
                </h3>
                <p className="font-sans text-[#634838] text-xs sm:text-[13px] leading-relaxed mb-5">
                  {t.contact.mapDesc}
                </p>

                <div className="w-full h-[340px] overflow-hidden relative border border-[#DCD0BC] shadow-md">
                  <EthiopiaMap />
                </div>

                <div className="mt-4 flex items-center gap-2 text-[10px] font-mono text-[#7D6352]">
                  <span className="w-2 h-2 rounded-full bg-[#4A5D23]" />
                  <span>
                    {language === 'ar'
                      ? 'المقر الرئيسي: أرادا، شارع هبتي غيورغيس، أديس أبابا'
                      : 'ARADA SUB CITY, HABTEGIORGIS STREET • ADDIS ABABA'}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Official Kajo Group Contact Details & Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className={`lg:col-span-6 space-y-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}
            >
              {/* Location Address Details */}
              <div>
                <span className="font-sans font-extrabold text-[10px] tracking-[0.22em] text-[#4A5D23] uppercase block mb-2">
                  {t.contact.sectionTag}
                </span>

                <div className="font-display font-light text-[#2E1E15] text-2xl sm:text-3xl lg:text-[2.125rem] leading-snug space-y-0.5">
                  <p>{language === 'ar' ? 'مجموعة كاجو' : language === 'am' ? 'ካጆ ግሩፕ' : 'Kajo Group'}</p>
                  <p className="italic text-[#4A5D23]">
                    {language === 'ar'
                      ? 'إيلو للاستيراد والتصدير'
                      : language === 'am'
                      ? 'ኢሉ አስመጪ እና ላኪ'
                      : 'illu Import Export'}
                  </p>
                  <p>
                    {language === 'ar'
                      ? 'أديس أبابا، إثيوبيا'
                      : language === 'am'
                      ? 'አዲስ አበባ፣ ኢትዮጵያ'
                      : 'Addis Ababa, Ethiopia'}
                  </p>
                </div>

                {/* Official PDF Page 13 Contact Details */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-[#DCD0BC] pt-5">
                  <div className="flex items-start gap-2 text-[#4A3325] font-sans text-xs">
                    <MapPin className="w-4 h-4 text-[#4A5D23] shrink-0 mt-0.5" />
                    <span>{t.contact.addressVal}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#4A3325] font-sans text-xs">
                    <Phone className="w-4 h-4 text-[#4A5D23] shrink-0 mt-0.5" />
                    <a href="tel:+25111706050" className="hover:text-[#4A5D23] transition-colors font-medium">
                      +251 11 70 60 50
                    </a>
                  </div>
                  <div className="flex items-start gap-2 text-[#4A3325] font-sans text-xs">
                    <Mail className="w-4 h-4 text-[#4A5D23] shrink-0 mt-0.5" />
                    <a
                      href="mailto:info@illuimportexport.com"
                      className="hover:text-[#4A5D23] transition-colors break-all font-medium"
                    >
                      info@illuimportexport.com
                    </a>
                  </div>
                  <div className="flex items-start gap-2 text-[#4A3325] font-sans text-xs">
                    <Globe className="w-4 h-4 text-[#4A5D23] shrink-0 mt-0.5" />
                    <a
                      href="https://www.illuimportexport.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#4A5D23] transition-colors font-medium"
                    >
                      www.illuimportexport.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Message form block */}
              <div className="bg-[#FAF7F0] p-6 sm:p-7 border border-[#DCD0BC] shadow-sm">
                {!isSent ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h4 className="font-display font-medium text-base text-[#2E1E15] border-b border-[#DCD0BC] pb-2.5 mb-3 uppercase tracking-wider">
                      {t.contact.formTitle}
                    </h4>

                    {/* Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="font-sans font-bold text-[10px] text-[#4A3325] uppercase tracking-widest mb-1">
                          {t.contact.nameLabel}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder={t.contact.placeholderName}
                          className="px-4 py-2.5 bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] placeholder:text-[#7D6352]/70 focus:border-[#4A5D23] focus:ring-1 focus:ring-[#4A5D23]/20 outline-none text-xs transition-all rounded-none"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="font-sans font-bold text-[10px] text-[#4A3325] uppercase tracking-widest mb-1">
                          {t.contact.emailLabel}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t.contact.placeholderEmail}
                          className="px-4 py-2.5 bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] placeholder:text-[#7D6352]/70 focus:border-[#4A5D23] focus:ring-1 focus:ring-[#4A5D23]/20 outline-none text-xs transition-all rounded-none"
                        />
                      </div>
                    </div>

                    {/* Company Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="font-sans font-bold text-[10px] text-[#4A3325] uppercase tracking-widest mb-1">
                          {t.contact.companyLabel}
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder={t.contact.placeholderCompany}
                          className="px-4 py-2.5 bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] placeholder:text-[#7D6352]/70 focus:border-[#4A5D23] focus:ring-1 focus:ring-[#4A5D23]/20 outline-none text-xs transition-all rounded-none"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="font-sans font-bold text-[10px] text-[#4A3325] uppercase tracking-widest mb-1">
                          {t.contact.phoneLabel}
                        </label>
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={t.contact.placeholderPhone}
                          className="px-4 py-2.5 bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] placeholder:text-[#7D6352]/70 focus:border-[#4A5D23] focus:ring-1 focus:ring-[#4A5D23]/20 outline-none text-xs transition-all rounded-none"
                        />
                      </div>
                    </div>

                    {/* Product Category & Destination Country */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="font-sans font-bold text-[10px] text-[#4A3325] uppercase tracking-widest mb-1">
                          {t.contact.interestLabel}
                        </label>
                        <select
                          value={formData.productCategory}
                          onChange={(e) =>
                            setFormData({ ...formData, productCategory: e.target.value as ProductCategoryKey })
                          }
                          className="px-4 py-2.5 bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] focus:border-[#4A5D23] focus:ring-1 focus:ring-[#4A5D23]/20 outline-none text-xs transition-all rounded-none cursor-pointer"
                        >
                          <option value="all">{t.contact.selectInterest}</option>
                          <option value="coffee">{t.contact.interestCoffee}</option>
                          <option value="pulses">{t.contact.interestPulses}</option>
                          <option value="lithium">{t.contact.interestLithium}</option>
                          <option value="investments">{t.contact.interestInvestments}</option>
                        </select>
                      </div>

                      <div className="flex flex-col">
                        <label className="font-sans font-bold text-[10px] text-[#4A3325] uppercase tracking-widest mb-1">
                          {getLocalizedDestinationLabel()}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.destinationCountry}
                          onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                          placeholder={getLocalizedDestinationPlaceholder()}
                          className="px-4 py-2.5 bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] placeholder:text-[#7D6352]/70 focus:border-[#4A5D23] focus:ring-1 focus:ring-[#4A5D23]/20 outline-none text-xs transition-all rounded-none"
                        />
                      </div>
                    </div>

                    {/* Order Volume & Frequency */}
                    <div className="flex flex-col">
                      <label className="font-sans font-bold text-[10px] text-[#4A3325] uppercase tracking-widest mb-1">
                        {getLocalizedVolumeLabel()}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.estimatedVolume}
                        onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                        placeholder={getLocalizedVolumePlaceholder()}
                        className="px-4 py-2.5 bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] placeholder:text-[#7D6352]/70 focus:border-[#4A5D23] focus:ring-1 focus:ring-[#4A5D23]/20 outline-none text-xs transition-all rounded-none"
                      />
                    </div>

                    {/* Message & Packaging */}
                    <div className="flex flex-col">
                      <label className="font-sans font-bold text-[10px] text-[#4A3325] uppercase tracking-widest mb-1">
                        {t.contact.messageLabel}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.additionalMessage}
                        onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
                        placeholder={t.contact.placeholderMessage}
                        className="px-4 py-2.5 bg-[#F6F1E7] focus:bg-[#FAF7F0] border border-[#DCD0BC] text-[#2E1E15] placeholder:text-[#7D6352]/70 focus:border-[#4A5D23] focus:ring-1 focus:ring-[#4A5D23]/20 outline-none text-xs transition-all resize-none rounded-none"
                      />
                    </div>

                    {/* Error Banner */}
                    {submitError && (
                      <div className="bg-[#F6F1E7] border border-[#8C3B2B]/40 p-4 text-xs text-[#5C2218] space-y-2 text-left">
                        <p className="font-semibold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#8C3B2B] rounded-full" />
                          Dispatch Notification
                        </p>
                        <p className="text-[#634838] font-sans leading-relaxed">{submitError}</p>
                        <div className="pt-1 flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={handleForceSubmit}
                            className="bg-[#4A5D23] hover:bg-[#39481A] text-[#FAF7F0] px-3 py-1.5 font-sans font-bold text-[9px] uppercase tracking-widest transition-colors rounded-none cursor-pointer"
                          >
                            Record Inquiry Confirmation
                          </button>
                          <a
                            href={`mailto:info@illuimportexport.com?subject=${encodeURIComponent(
                              `Trade Inquiry - ${formData.companyName || formData.fullName}`
                            )}`}
                            className="bg-[#2E1E15] hover:bg-[#4A3325] text-[#FAF7F0] px-3 py-1.5 font-sans font-bold text-[9px] uppercase tracking-widest transition-colors rounded-none"
                          >
                            Email info@illuimportexport.com Directly
                          </a>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4A5D23] hover:bg-[#39481A] disabled:bg-[#C9B699] text-[#FAF7F0] font-sans font-extrabold text-[11px] tracking-widest uppercase transition-colors duration-300 rounded-none cursor-pointer"
                    >
                      {isSending ? (
                        <>
                          <div className="w-3 h-3 border-2 border-[#FAF7F0] border-t-transparent rounded-full animate-spin" />
                          <span>{t.common.loading}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.contact.sendButton}</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="py-8 px-4 text-center flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#EAEEE0] rounded-full border border-[#4A5D23]/25 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6 text-[#4A5D23]" />
                    </div>

                    <h4 className="font-display font-medium text-lg text-[#2E1E15]">{t.contact.successMsg}</h4>

                    <p className="font-sans text-[#634838] text-xs mt-2 leading-relaxed max-w-sm">
                      {language === 'ar'
                        ? `شكراً لتواصلكم مع مجموعة كاجو (إيلو للاستيراد والتصدير). سيتواصل فريقنا معكم عبر ${formData.email} قريباً.`
                        : `Thank you for contacting Kajo Group (illu Import Export). Our trade desk at Habtegiorgis Street, Addis Ababa will respond to ${formData.email} within 24 hours.`}
                    </p>

                    <button
                      onClick={handleReset}
                      className="mt-4 px-4 py-2 border border-[#DCD0BC] hover:border-[#4A5D23] hover:bg-[#F6F1E7] font-sans font-bold text-[10px] text-[#4A3325] uppercase tracking-widest transition-colors rounded-none cursor-pointer"
                    >
                      {language === 'ar'
                        ? 'إرسال طلب تسعيرة آخر'
                        : language === 'am'
                        ? 'ሌላ ጥያቄ ይላኩ'
                        : language === 'om'
                        ? 'Gaaffii Biroo Ergaa'
                        : 'Submit Another Trade Inquiry'}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PART 2: WHY KAJO GROUP? — 8 STRATEGIC ADVANTAGES */}
      <InstagramFeed />
    </div>
  );
}
