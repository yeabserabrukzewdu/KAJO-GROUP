import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, FileText, ChevronRight, Sprout } from 'lucide-react';
import { ProductDetail } from '../types';
import { useTranslation } from '../LanguageContext';

interface ProductDetailModalProps {
  product: ProductDetail | null;
  onClose: () => void;
  onRequestQuote: (category: 'coffee' | 'pulses' | 'lithium') => void;
}

export default function ProductDetailModal({ product, onClose, onRequestQuote }: ProductDetailModalProps) {
  const { language, t } = useTranslation();

  if (!product) return null;

  const getLocalizedProduct = (p: ProductDetail) => {
    switch (p.id) {
      case 'coffee':
        return {
          ...p,
          name: t.products.coffeeTitle,
          tagline: t.products.coffeeTagline,
          description: t.products.coffeeDesc,
          features:
            language === 'ar'
              ? [
                  'ملكية مباشرة لمحطات غسيل البن ومصانع التقشير الجاف والمستودعات المركزية',
                  'فحص صارم للجودة والرطوبة والفرز البصري من الحصاد حتى التعبئة والتغليف',
                  'مصادر مستدامة وأخلاقية تدعم مجتمعات زراعة البن الإثيوبية',
                  'نكهة متسقة وموثوقية عالية لمحامص البن والمستوردين العالميين'
                ]
              : language === 'am'
              ? [
                  'የራሳችን የቡና ማጠቢያ ጣቢያዎች፣ ደረቅ መፈልፈያ ፋብሪካዎች እና ማከማቻ መጋዘኖች',
                  'ከምርት ስብሰባ እስከ ማሸግ ድረስ ጥብቅ የጥራት፣ የእርጥበት እና የደረጃ ምርመራ',
                  'የአካባቢውን የቡና አብቃይ ማህበረሰቦች እና ተፈጥሮን የሚደግፍ ዘላቂ የአቅርቦት ሰንሰለት',
                  'ለዓለም አቀፍ የቡና ቆዪዎች እና አስመጪዎች ወጥ የሆነ ጣዕም እና አስተማማኝ አቅርቦት'
                ]
              : language === 'om'
              ? [
                  'Buufata dhiqannaa bunaa, warshaa hulling gogaa fi kuusaa dhuunfaa keenyaa',
                  'Sassaabbii irraa hanga paakeejii gochuutti qorannoo qulqullinaa fi jiidhinaa cimaa',
                  'Hawaasa qonnaan bultoota bunaa fi naannoo kan deeggaru dhiyeessii itti-fufiinsa qabu',
                  'Dhandhama wal-fakkaataa fi dhiyeessii amanamaa gabaa addunyaatiif'
                ]
              : p.features,
          varieties:
            language === 'ar'
              ? [
                  { name: 'بن أرابيكا مغسول من المرتفعات', description: 'حبوب بن خضراء نظيفة ومشرقة تتم معالجتها في محطات الغسيل المملوكة لنا وتتميز بنكهات زهرية وحمضية متوازنة.' },
                  { name: 'بن أرابيكا مجفف طبيعياً', description: 'مجفف بعناية تحت أشعة الشمس على أسرة مرتفعة ومقشر في مصانعنا لقوام غني وحلاوة طبيعية.' },
                  { name: 'محاصيل غابات إيلوبابور وجيما', description: 'أصناف البن الإثيوبي الجنوبي الغربي الشهيرة بتوازنها الرائع وثبات جودتها.' },
                  { name: 'دفعات مختصة أحادية المصدر', description: 'محاصيل مختارة بعناية من ييرغاشيفي وسيدامو وغوجي وليمو وهرر للمحامص العالمية.' }
                ]
              : language === 'am'
              ? [
                  { name: 'የታጠበ የደጋ አረቢካ ቡና', description: 'በራሳችን የቡና ማጠቢያ ጣቢያዎች የተዘጋጀ፣ በጥሩ መዓዛው እና በንጹህ ጣዕሙ የሚታወቅ አረንጓዴ ቡና።' },
                  { name: 'በፀሐይ የደረቀ ተፈጥሯዊ አረቢካ', description: 'በከፍተኛ አልጋዎች ላይ በፀሐይ ደርቆ በደረቅ መፈልፈያ ፋብሪካችን የተዘጋጀ ጣፋጭ እና ወፍራም ጣዕም ያለው ቡና።' },
                  { name: 'የኢሉባቦር እና ጅማ የደን ቡና', description: 'በምዕራብ እና ደቡብ ምዕራብ ኢትዮጵያ የሚመረት፣ በዓለም አቀፍ ገበያ ተፈላጊ የሆነ ወጥ ጥራት ያለው ቡና።' },
                  { name: 'ልዩ ነጠላ-መገኛ (Specialty) ቡና', description: 'ከይርጋጨፌ፣ ሲዳሞ፣ ጉጂ፣ ሊሙ እና ሐረር በጥንቃቄ የተመረጡ ከፍተኛ ደረጃ የቡና ምርቶች።' }
                ]
              : language === 'om'
              ? [
                  { name: 'Buna Arabikaa Dhiqame', description: 'Buufata dhiqannaa keenya keessatti kan qophaa’e, urgaa fi qulqullina olaanaa kan qabu.' },
                  { name: 'Buna Uumamaan Aduun Gogfame', description: 'Siree ol-ka’aa irratti aduun gogfamee warshaa keenya keessatti kan qophaa’e.' },
                  { name: 'Buna Bosona Illubabor fi Jimmaa', description: 'Buna kibba-dhiha Itoophiyaa dhandhama madaalamaa fi wal-fakkaataa qabuun beekamu.' },
                  { name: 'Buna Addaa (Specialty Lots)', description: 'Yirgacheffe, Sidamo, Guji, Limu fi Harar irraa qulqullina olaanaan kan filataman.' }
                ]
              : p.varieties,
          specifications: [
            t.products.coffeeSpecs.origins,
            t.products.coffeeSpecs.infrastructure,
            t.products.coffeeSpecs.moisture,
            t.products.coffeeSpecs.grades,
            t.products.coffeeSpecs.screen,
            t.products.coffeeSpecs.packaging
          ]
        };
      case 'pulses':
        return {
          ...p,
          name: t.products.pulsesTitle,
          tagline: t.products.pulsesTagline,
          description: t.products.pulsesDesc,
          features:
            language === 'ar'
              ? [
                  'شبكة توريد واسعة عبر أهم مناطق إنتاج السمسم والبقوليات والتوابل في إثيوبيا',
                  'تنظيف آلي متقدم وفرز بصري يضمن أعلى درجات النقاء للتصدير (99%+)',
                  'التزام كامل بمعايير سلامة الأغذية الدولية وشهادات الصحة النباتية',
                  'تعبئة مرنة للكميات الكبيرة في أكياس بولي بروبيلين جديدة أو أكياس الجوت الغذائية'
                ]
              : language === 'am'
              ? [
                  'በኢትዮጵያ ዋና ዋና የሰሊጥ፣ የጥራጥሬ እና የቅመማ ቅመም አምራች አካባቢዎች ጠንካራ የግዥ መረብ',
                  'ከፍተኛ የኤክስፖርት ንፅህና ደረጃን (99%+) የሚያረጋግጥ ዘመናዊ የማሽን ማጽዳት እና ሶርቴክስ ምደባ',
                  'ከዓለም አቀፍ የምግብ ደህንነት፣ የእርጥበት መጠን እና የዕፅዋት ጤና ደንቦች ጋር ሙሉ ተገዢነት',
                  'በአዲስ ባለብዙ ሽፋን ፒፒ (PP) ወይም ለምግብ ተስማሚ በሆኑ የጁት ከረጢቶች አስተማማኝ ማሸጊያ'
                ]
              : language === 'om'
              ? [
                  'Naannoolee oomisha saliixaa, midhaan dheedhiifi mi’eessituu Itoophiyaa keessatti cimdaa bittaa cimaa',
                  'Qulqullina olaanaa (99%+) mirkaneessuuf maashinii ammayyaatiin qulqulleessuu fi calaluu',
                  'Ulaagaalee nageenya nyaataa fi fayyaa biqiltuu addunyaa guutuu',
                  'Paakeejii ammayyaa qulqullina oomishaa geejjiba irratti eegu'
                ]
              : p.features,
          varieties:
            language === 'ar'
              ? [
                  { name: 'سمسم حميرا وولليغا الأبيض', description: 'سمسم إثيوبي أبيض عالمي الشهرة يتميز بنكهة غنية ونسبة زيت طبيعية تتجاوز 50٪.' },
                  { name: 'التوابل الإثيوبية العطرية', description: 'الهيل الإثيوبي (كواريما)، الحبة السوداء، الكركم، الزنجبيل المجفف والفلفل الأحمر.' },
                  { name: 'البقوليات والفاصوليا للتصدير', description: 'الماش الأخضر، الحمص، الفاصوليا الحمراء والبيضاء والعدس بمعايير تصنيع غذائي عالمية.' },
                  { name: 'بذور النيجر (نوغ) والبذور الزيتية', description: 'بذور زيتية إثيوبية غنية بالعناصر الغذائية ومنقاة وفق أعلى معايير الاستيراد الدولية.' }
                ]
              : language === 'am'
              ? [
                  { name: 'የሁመራ እና ወለጋ ነጭ ሰሊጥ', description: 'በጣፋጭ ጣዕሙ እና ከ50% በላይ በሆነ የተፈጥሮ የዘይት ይዘቱ በዓለም የታወቀ የኢትዮጵያ ነጭ ሰሊጥ።' },
                  { name: 'የኢትዮጵያ ቅመማ ቅመሞች', description: 'ጥሩ መዓዛ ያላቸው ኮረሪማ፣ ጥቁር አዝሙድ፣ እርድ፣ ደረቅ ዝንጅብል እና ቀይ በርበሬ።' },
                  { name: 'ለኤክስፖርት የተዘጋጁ ጥራጥሬዎች', description: 'አረንጓዴ ማሾ፣ ሽምብራ፣ ቀይ እና ነጭ ቦሎቄ እንዲሁም ምስር በዓለም አቀፍ ደረጃ የተመደቡ።' },
                  { name: 'ኑግ እና የቅባት እህሎች', description: 'ከምርጥ የእርሻ ቀጠናዎች የተሰበሰቡ እና በጥራት የተዘጋጁ የኢትዮጵያ የቅባት እህሎች።' }
                ]
              : language === 'om'
              ? [
                  { name: 'Saliixa Adii Humaraa fi Wallaggaa', description: 'Saliixa adii Itoophiyaa dhandhama gaarii fi zayita uumamaa 50%+ qabuun addunyaarratti beekamu.' },
                  { name: 'Mi’eessituuwwan Itoophiyaa', description: 'Korariimaa, habasuudaa, irdii, zinjibila gogaa fi barbaree qulqullina olaanaa qaban.' },
                  { name: 'Midhaan Dheedhii Al-ergii', description: 'Maashoo magariisa, shumburaa, bolooqee diimaa fi adii akkasumas misira filatamaa.' },
                  { name: 'Nuugii fi Sanyiiwwan Zayitaa', description: 'Sanyiiwwan zayitaa Itoophiyaa qulqullina olaanaan calalamanii gabaa addunyaaf qophaa’an.' }
                ]
              : p.varieties,
          specifications: [
            t.products.pulsesSpecs.oilseeds,
            t.products.pulsesSpecs.pulses,
            t.products.pulsesSpecs.spices,
            t.products.pulsesSpecs.purity,
            t.products.pulsesSpecs.moisture,
            t.products.pulsesSpecs.compliance
          ]
        };
      case 'lithium':
        return {
          ...p,
          name: t.products.lithiumTitle,
          tagline: t.products.lithiumTagline,
          description: t.products.lithiumDesc,
          features:
            language === 'ar'
              ? [
                  'في طليعة قطاع تصدير خام الليثيوم والمعادن الاستراتيجية في إثيوبيا',
                  'فحص مخبري جيوكيميائي شامل وشهادة موثقة للتركيب المعدني لكل شحنة',
                  'نقل بري ثقيل متكامل عبر قسم خدمات الشحن التابع لمجموعة كاجو',
                  'إدارة مسؤولة للموارد تتماشى مع التزامنا البيئي والمجتمعي'
                ]
              : language === 'am'
              ? [
                  'በኢትዮጵያ የሊቲየም ማዕድን ኤክስፖርት ዘርፍ ግንባር ቀደም ተሳትፎ እና አቅርቦት',
                  'ለእያንዳንዱ ጭነት የተሟላ የላቦራቶሪ ምርመራ እና የማዕድን ይዘት ማረጋገጫ ሰርተፊኬት',
                  'በካጆ ግሩፕ የጭነት ትራንስፖርት ዘርፍ የተቀናጀ ከባድ የየብስ እና የወደብ ሎጅስቲክስ',
                  'ከአካባቢ ጥበቃ እና ማህበራዊ ኃላፊነት እሴቶቻችን ጋር የተጣጣመ ኃላፊነት የሚሰማው አሰራር'
                ]
              : language === 'om'
              ? [
                  'Damee al-ergii albuuda Liitiyeemii Itoophiyaa keessatti adda-duree ta’uun dhiyeessuu',
                  'Qorannoo laaboraatoorii fi waraqaa ragaa qulqullina albuudaa guutuu ta’e',
                  'Geejjiba lafoo fi buufata doonii qindaa’aa damee fe’umsaa Kajo Group waliin',
                  'Itti-fayyadama qabeenya uumamaa itti-gaafatamummaa fi eegumsa naannoo qabu'
                ]
              : p.features,
          varieties:
            language === 'ar'
              ? [
                  { name: 'خام الليثيوم سبودومين (Spodumene)', description: 'خام ليثيوم صخري عالي الجودة مثالي لتكرير كربونات وهيدروكسيد الليثيوم لبطاريات المركبات الكهربائية.' },
                  { name: 'مركزات معدن الليبيدوليت (Lepidolite)', description: 'خام ميكا غني بالليثيوم مناسب للاستخلاص المعدني المتخصص وصناعات الإلكترونيات والسيراميك.' },
                  { name: 'شحنات خام صناعية مخصصة', description: 'درجات نقاء وأحجام حبيبية مفصلة حسب المواصفات الفنية للمصافي وشركات الطاقة المتجددة.' }
                ]
              : language === 'am'
              ? [
                  { name: 'ስፖዱሚን (Spodumene) የሊቲየም ማዕድን', description: 'ለኤሌክትሪክ ተሽከርካሪ ባትሪዎች እና ለኢንዱስትሪ ማጣሪያ የሚውል ከፍተኛ ደረጃ ያለው የሊቲየም ማዕድን።' },
                  { name: 'ሌፒዶላይት (Lepidolite) የማዕድን ክምችት', description: 'ለልዩ የብረታ ብረት ማውጣት፣ ለሴራሚክስ እና ለዘመናዊ ኤሌክትሮኒክስ ኢንዱስትሪዎች ተስማሚ የሆነ ማዕድን።' },
                  { name: 'በደንበኛ ፍላጎት የተዘጋጁ የኢንዱስትሪ ጭነቶች', description: 'ለዓለም አቀፍ ማጣሪያዎች እና ለታዳሽ ኃይል አምራቾች በተፈለገው መጠን እና ደረጃ የተዘጋጀ አቅርቦት።' }
                ]
              : language === 'om'
              ? [
                  { name: 'Albuuda Liitiyeemii Spodumene', description: 'Albuuda liitiyeemii qulqullina olaanaa baatirii EV fi warshaalee humna haaromsamaaf oolu.' },
                  { name: 'Albuuda Lepidolite', description: 'Albuuda liitiyeemii warshaalee elektirooniksii fi meeshaalee ammayyaatiif mijataa ta’e.' },
                  { name: 'Dhiyeessii Industirii Fedhii Maamilaa Irratti Hundaa’e', description: 'Ulaagaa warshaalee addunyaa irratti hundaa’uun qophaa’ee kan ergamu.' }
                ]
              : p.varieties,
          specifications: [
            t.products.lithiumSpecs.minerals,
            t.products.lithiumSpecs.industries,
            t.products.lithiumSpecs.assay,
            t.products.lithiumSpecs.sizing,
            t.products.lithiumSpecs.logistics,
            t.products.lithiumSpecs.licensing
          ]
        };
    }
  };

  const localizedProduct = getLocalizedProduct(product);

  const parseSpec = (fullSpecString: string, fallbackLabel: string) => {
    const match = fullSpecString.match(/^([^:፡]+)[:፡]\s*(.*)$/);
    if (match) {
      return {
        label: match[1].trim(),
        value: match[2].trim()
      };
    }
    return {
      label: fallbackLabel,
      value: fullSpecString
    };
  };

  const getThemeColorClass = () => {
    switch (product.id) {
      case 'coffee':
        return 'text-[#2E1E15] bg-[#FAF7F0]/95 border-[#C9B699]';
      case 'pulses':
        return 'text-[#39481A] bg-[#EAEEE0]/95 border-[#4A5D23]/30';
      case 'lithium':
        return 'text-[#2E1E15] bg-[#ECE3D3]/95 border-[#C9B699]';
      default:
        return 'text-[#2E1E15] bg-[#FAF7F0] border-[#DCD0BC]';
    }
  };

  const getButtonBgClass = () => {
    switch (product.id) {
      case 'coffee':
        return 'bg-[#4A5D23] hover:bg-[#39481A]';
      case 'pulses':
        return 'bg-[#4A5D23] hover:bg-[#39481A]';
      case 'lithium':
        return 'bg-[#4A5D23] hover:bg-[#39481A]';
      default:
        return 'bg-[#4A5D23] hover:bg-[#39481A]';
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#241710]/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="bg-[#FAF7F0] rounded-3xl w-full max-w-4xl shadow-2xl relative z-10 overflow-hidden border border-[#DCD0BC]"
        >
          {/* Header Image Cover */}
          <div className="relative h-48 sm:h-64 md:h-72 w-full overflow-hidden">
            <img
              src={product.image}
              alt={localizedProduct.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/90 via-[#2E1E15]/45 to-transparent" />

            {/* Floating Close Button */}
            <button
              onClick={onClose}
              className={`absolute top-4 ${language === 'ar' ? 'left-4' : 'right-4'} w-10 h-10 rounded-full bg-[#241710]/40 hover:bg-[#241710]/70 text-[#FAF7F0] backdrop-blur-md border border-[#FAF7F0]/25 flex items-center justify-center transition-colors shadow-lg cursor-pointer`}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title Block on Image */}
            <div className={`absolute bottom-6 left-6 right-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-sm border text-xs font-bold uppercase mb-2 ${getThemeColorClass()}`}>
                <Sprout className="w-3.5 h-3.5 text-[#4A5D23]" />
                Kajo Group • Export Excellence
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#FAF7F0] tracking-tight">
                {localizedProduct.name}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#EFE7D8] font-medium mt-1 uppercase tracking-wider">
                {localizedProduct.tagline}
              </p>
            </div>
          </div>

          {/* Modal Core Content */}
          <div className={`p-6 sm:p-8 max-h-[calc(100vh-22rem)] overflow-y-auto ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Left description column */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <h4 className="font-display font-bold text-lg text-[#2E1E15] mb-2">
                    {language === 'ar'
                      ? 'نظرة عامة على قطاع التصدير'
                      : language === 'am'
                      ? 'የኤክስፖርት ምርት አጠቃላይ እይታ'
                      : language === 'om'
                      ? 'Ibsa Waliigalaa Al-ergii'
                      : 'Export Pillar Overview'}
                  </h4>
                  <p className="font-sans text-[#4A3325] text-sm sm:text-base leading-relaxed">
                    {localizedProduct.description}
                  </p>
                </div>

                {/* Regional Varieties list */}
                <div>
                  <h4 className="font-display font-bold text-lg text-[#2E1E15] mb-3">
                    {t.products.varieties}
                  </h4>
                  <div className="space-y-3.5">
                    {localizedProduct.varieties.map((variety) => (
                      <div
                        key={variety.name}
                        className="p-4 rounded-xl border border-[#DCD0BC] bg-[#F6F1E7] hover:border-[#C9B699] hover:bg-[#ECE3D3]/60 transition-all shadow-xs"
                      >
                        <h5 className="font-display font-bold text-sm text-[#2E1E15]">{variety.name}</h5>
                        <p className="font-sans text-xs text-[#634838] mt-1 leading-relaxed">{variety.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Premium Highlights Checklist */}
                <div>
                  <h4 className="font-display font-bold text-lg text-[#2E1E15] mb-3">
                    {t.products.keyFeatures}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {localizedProduct.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-[#4A3325] text-xs font-sans">
                        <div className="w-5 h-5 rounded-full bg-[#EAEEE0] border border-[#4A5D23]/25 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#4A5D23] font-bold" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right technical specs column */}
              <div className="md:col-span-5 space-y-6">
                <div className="bg-[#F6F1E7] rounded-2xl border border-[#DCD0BC] p-5 sm:p-6 shadow-xs">
                  <h4 className="font-display font-bold text-base text-[#2E1E15] mb-4 inline-flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#4A5D23]" />
                    {t.products.specifications}
                  </h4>

                  <div className="space-y-3 font-sans text-xs">
                    {localizedProduct.specifications.map((specString, idx) => {
                      const spec = parseSpec(specString, `Spec ${idx + 1}`);
                      return (
                        <div key={idx} className="flex flex-col border-b border-[#DCD0BC] pb-2 last:border-0 last:pb-0">
                          <span className="text-[#7D6352] font-medium uppercase tracking-wider">{spec.label}</span>
                          <span className="text-[#2E1E15] font-bold mt-0.5 text-sm">{spec.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Instant Quote Block */}
                <div className="bg-[#2E1E15] text-[#FAF7F0] rounded-2xl p-5 sm:p-6 border border-[#4A3325] shadow-sm relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#4A5D23]/20 rounded-full blur-xl" />

                  <h4 className="font-display font-bold text-base text-[#FAF7F0]">
                    {language === 'ar'
                      ? 'هل ترغب في عرض أسعار للتصدير؟'
                      : language === 'am'
                      ? 'የጅምላ ኤክስፖርት ዋጋ ይፈልጋሉ?'
                      : language === 'om'
                      ? 'Gatii Al-ergii Jumlaa Barbaadduu?'
                      : 'Ready for an Export Contract?'}
                  </h4>
                  <p className="font-sans text-xs text-[#DFD3BF] mt-1 leading-relaxed">
                    {language === 'ar'
                      ? 'تواصل مع مكتب التجارة الدولية في مجموعة كاجو للحصول على تسعيرة مخصصة ومواصفات الشحن إلى ميناء وجهتك.'
                      : language === 'am'
                      ? 'ለሚፈልጉት ሀገር፣ የጥራት ደረጃ እና የጭነት መጠን የተዘጋጀ ዋጋ ከካጆ ግሩፕ ዓለም አቀፍ የንግድ ክፍል ይጠይቁ።'
                      : language === 'om'
                      ? 'Biyya geessitan, sadarkaa qulqullinaa fi hanga fe’umsa keessaniif gatii addaa Kajo Group gaafadhaa.'
                      : 'Request a tailored FOB/CIF quotation from Kajo Group’s international trade desk in Addis Ababa.'}
                  </p>

                  <button
                    onClick={() => {
                      onClose();
                      onRequestQuote(product.id);
                    }}
                    className={`w-full mt-5 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-[#FAF7F0] font-sans font-bold text-xs tracking-wider uppercase shadow-md transition-all duration-300 cursor-pointer ${getButtonBgClass()}`}
                  >
                    {t.products.orderSample}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
