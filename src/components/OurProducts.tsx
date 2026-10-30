import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Sprout, Gem, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data';
import { ProductDetail } from '../types';
import { ASSET_IMAGES } from '../assets';
import { useTranslation } from '../LanguageContext';

interface OurProductsProps {
  onSelectProduct: (product: ProductDetail) => void;
  showAllSections?: boolean;
}

export default function OurProducts({ onSelectProduct, showAllSections = false }: OurProductsProps) {
  const [activeTab, setActiveTab] = useState<'coffee' | 'pulses' | 'lithium'>('coffee');
  const { language, t } = useTranslation();

  const getLocalizedProduct = (product: typeof PRODUCTS[0]) => {
    switch (product.id) {
      case 'coffee':
        return {
          ...product,
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
                  ' Sassaabbii irraa hanga paakeejii gochuutti qorannoo qulqullinaa fi jiidhinaa cimaa',
                  'Hawaasa qonnaan bultoota bunaa fi naannoo kan deeggaru dhiyeessii itti-fufiinsa qabu',
                  'Dhandhama wal-fakkaataa fi dhiyeessii amanamaa gabaa addunyaatiif'
                ]
              : product.features,
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
              : product.varieties
        };
      case 'pulses':
        return {
          ...product,
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
              : product.features,
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
                  { name: 'Saliixa Adii Humaraa fi Wallaggaa', description: 'Saliixa adii Itoophiyaa dhandhama gaarii fi qዘይita uumamaa 50%+ qabuun addunyaarratti beekamu.' },
                  { name: 'Mi’eessituuwwan Itoophiyaa', description: 'Korariimaa, habasuudaa, irdii, zinjibila gogaa fi barbaree qulqullina olaanaa qaban.' },
                  { name: 'Midhaan Dheedhii Al-ergii', description: 'Maashoo magariisa, shumburaa, bolooqee diimaa fi adii akkasumas misira filatamaa.' },
                  { name: 'Nuugii fi Sanyiiwwan Zayitaa', description: 'Sanyiiwwan zayitaa Itoophiyaa qulqullina olaanaan calalamanii gabaa addunyaaf qophaa’an.' }
                ]
              : product.varieties
        };
      case 'lithium':
        return {
          ...product,
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
              : product.features,
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
              : product.varieties
        };
      default:
        return product;
    }
  };

  const currentRawProduct = PRODUCTS.find((p) => p.id === activeTab) || PRODUCTS[0];
  const currentProduct = getLocalizedProduct(currentRawProduct);

  const getProductImage = (id: string) => {
    switch (id) {
      case 'coffee':
        return ASSET_IMAGES.coffeeExport;
      case 'pulses':
        return ASSET_IMAGES.spicesPulsesExport;
      case 'lithium':
        return ASSET_IMAGES.lithiumOreExport;
      default:
        return ASSET_IMAGES.coffeeExport;
    }
  };

  const getProductIcon = (id: string) => {
    switch (id) {
      case 'coffee':
        return <Coffee className="w-4 h-4 text-[#4A3325] inline-block" />;
      case 'pulses':
        return <Sprout className="w-4 h-4 text-[#4A5D23] inline-block" />;
      case 'lithium':
        return <Gem className="w-4 h-4 text-[#634838] inline-block" />;
      default:
        return null;
    }
  };

  const getTabLabel = (tab: 'coffee' | 'pulses' | 'lithium') => {
    switch (tab) {
      case 'coffee':
        return t.hero.segmentCoffee;
      case 'pulses':
        return t.hero.segmentPulses;
      case 'lithium':
        return t.hero.segmentLithium;
    }
  };

  if (showAllSections) {
    return (
      <section id="products" className="bg-[#ECE3D3]/55 py-16 relative overflow-hidden border-t border-[#DCD0BC]">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4A5D23]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#4A3325]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Section Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-sans font-extrabold text-[10px] tracking-[0.22em] text-[#4A5D23] uppercase block mb-2">
              {t.products.sectionTag}
            </span>
            <h2 className="font-display font-light text-[#2E1E15] tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
              {t.products.title}
            </h2>
            <p className="font-sans text-[#634838] text-xs sm:text-[13.5px] leading-relaxed">
              {t.products.subtitle}
            </p>
            <div className="w-10 h-0.5 bg-[#4A5D23] mx-auto mt-5"></div>
          </div>

          {PRODUCTS.map((rawProduct, index) => {
            const product = getLocalizedProduct(rawProduct);
            const isEven = index % 2 === 0;
            return (
              <div
                key={product.id}
                id={`product-${product.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-[#DCD0BC] first:border-t-0 first:pt-0 overflow-hidden"
              >
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -60 : 60, scale: 0.97 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-5 relative group ${!isEven ? 'lg:order-last' : ''}`}
                >
                  <div className="absolute -inset-4 border border-[#DCD0BC]/70 scale-95 pointer-events-none select-none z-0" />
                  <div className="absolute -inset-1 border border-[#C9B699] pointer-events-none select-none z-0" />

                  <div className="relative z-10 overflow-hidden shadow-xl bg-[#ECE3D3]">
                    <img
                      src={getProductImage(product.id)}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-[450px] object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/60 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF7F0]/95 backdrop-blur-md text-[#2E1E15] font-mono font-bold text-[9px] tracking-widest uppercase shadow-md border border-[#DCD0BC]">
                        {getProductIcon(product.id)}
                        <span className="ml-1">KAJO GROUP • {product.id.toUpperCase()} PILLAR</span>
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className={`lg:col-span-7 ${language === 'ar' ? 'text-right' : 'text-left'}`}
                >
                  <div className="bg-[#FAF7F0] p-6 sm:p-8 border border-[#DCD0BC] shadow-lg relative">
                    <span className="font-sans font-extrabold text-[10px] tracking-[0.22em] text-[#4A5D23] uppercase block mb-1.5">
                      EXPORT PILLAR 0{index + 1} • ILLU IMPORT EXPORT
                    </span>

                    <h3 className="font-display font-light text-[#2E1E15] tracking-tight text-xl sm:text-2xl lg:text-3xl leading-tight mb-1.5">
                      {product.name}
                    </h3>

                    <p className="font-sans font-bold text-[10px] text-[#634838] tracking-widest uppercase mb-4 leading-relaxed">
                      {product.tagline}
                    </p>

                    <p className="font-sans text-[#4A3325] text-xs sm:text-[13px] leading-relaxed mb-5">
                      {product.description}
                    </p>

                    {/* Highlights Bullet Rows */}
                    <div className="space-y-4">
                      <h4 className="font-sans font-extrabold text-[11px] tracking-wider text-[#2E1E15] uppercase border-b border-[#DCD0BC] pb-2">
                        {t.products.keyFeatures}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-[#634838] text-[11px] font-sans leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4A5D23] mt-1.5 shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Primary Varieties Grid */}
                    <div className="mt-6 pt-5 border-t border-[#DCD0BC] space-y-3">
                      <h4 className="font-sans font-extrabold text-[11px] tracking-wider text-[#4A5D23] uppercase">
                        {t.products.varieties}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.varieties.map((variety, idx) => (
                          <div key={idx} className="bg-[#F6F1E7] p-3 border border-[#DCD0BC] rounded-sm">
                            <span className="font-sans font-extrabold text-xs text-[#2E1E15] block mb-1">
                              {variety.name}
                            </span>
                            <span className="font-sans text-[11px] text-[#634838] leading-normal block">
                              {variety.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 pt-6 border-t border-[#DCD0BC] flex flex-wrap items-center justify-between gap-4">
                      <button
                        id={`explore-all-btn-${product.id}`}
                        onClick={() => onSelectProduct(rawProduct)}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4A5D23] hover:bg-[#39481A] text-[#FAF7F0] font-sans font-extrabold text-xs tracking-widest shadow-md hover:shadow-lg transition-all duration-300 uppercase rounded-none cursor-pointer"
                      >
                        {t.products.exploreDetails}
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <span className="text-[10px] font-mono font-bold text-[#39481A] uppercase tracking-widest bg-[#EAEEE0] border border-[#4A5D23]/20 px-2.5 py-1">
                        EXPORT QUALITY ASSURED
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-[#ECE3D3]/60 border-t border-b border-[#DCD0BC] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4A5D23]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#4A3325]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT SIDE: Dynamic High-End Image Presentation */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 border border-[#DCD0BC]/75 scale-95 pointer-events-none select-none z-0" />
            <div className="absolute -inset-1 border border-[#C9B699] pointer-events-none select-none z-0" />

            <div className="relative z-10 overflow-hidden shadow-2xl bg-[#ECE3D3]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={getProductImage(activeTab)}
                  alt={currentProduct.name}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="w-full h-[460px] object-cover object-center"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 z-20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF7F0]/95 backdrop-blur-md text-[#2E1E15] font-mono font-bold text-[9px] tracking-widest uppercase shadow-md border border-[#DCD0BC]">
                  KAJO GROUP • ETHIOPIAN ORIGIN EXPORTS
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Warm Parchment Card content block */}
          <div className={`lg:col-span-7 ${language === 'ar' ? 'text-right' : 'text-left'} lg:pl-4`}>
            <div className="bg-[#FAF7F0] p-6 sm:p-9 border border-[#DCD0BC] shadow-xl relative">
              <span className="font-sans font-extrabold text-[10px] tracking-[0.22em] text-[#4A5D23] uppercase block mb-2">
                {t.products.sectionTag}
              </span>

              <h2 className="font-display font-light text-[#2E1E15] tracking-tight text-2xl sm:text-3xl lg:text-[2.125rem] leading-tight mb-3 text-balance">
                {t.products.title}
              </h2>

              <p className="font-sans text-[#634838] text-xs sm:text-[13px] leading-relaxed mb-6">
                {t.products.subtitle}
              </p>

              {/* Category Segmented Tabs Selector */}
              <div className="flex flex-wrap border-b border-[#DCD0BC] pb-3 mb-6 gap-4 sm:gap-5 justify-start">
                {(['coffee', 'pulses', 'lithium'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 text-[10px] sm:text-[11px] font-sans font-extrabold tracking-[0.18em] uppercase relative transition-colors duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === tab ? 'text-[#4A5D23]' : 'text-[#7D6352] hover:text-[#2E1E15]'
                    }`}
                  >
                    {getProductIcon(tab)}
                    <span>{getTabLabel(tab)}</span>

                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A5D23]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Dynamic Tab Panel Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-3 min-h-[145px]"
                >
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#2E1E15] leading-tight">
                    {currentProduct.name}
                  </h3>

                  <p className="font-sans font-bold text-[9.5px] text-[#4A5D23] tracking-widest uppercase">
                    {currentProduct.tagline}
                  </p>

                  <p className="font-sans text-[#634838] text-xs sm:text-[13px] leading-relaxed">
                    {currentProduct.description}
                  </p>

                  {/* Highlights Bullet Rows */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-[#DCD0BC] mt-3">
                    {currentProduct.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[#634838] text-[11px] font-sans leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4A5D23] mt-1.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Button */}
              <div className="mt-6 pt-5 border-t border-[#DCD0BC] flex flex-wrap items-center justify-between gap-4">
                <button
                  id={`explore-btn-${currentProduct.id}`}
                  onClick={() => onSelectProduct(currentRawProduct)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#4A5D23] hover:bg-[#39481A] text-[#FAF7F0] font-sans font-extrabold text-[11px] tracking-[0.2em] shadow-md hover:shadow-lg transition-all duration-200 uppercase rounded-none cursor-pointer"
                >
                  {t.products.exploreDetails}
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <span className="text-[9.5px] font-mono font-bold text-[#7D6352] uppercase tracking-widest">
                  EST. 1985 GC • ETHIOPIAN ORIGIN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
