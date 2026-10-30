export type Language = 'en' | 'ar' | 'am' | 'om';

export interface TranslationDictionary {
  common: {
    requestQuote: string;
    contactUs: string;
    ourStory: string;
    ourProducts: string;
    importsLogistics: string;
    estate: string;
    directFarm: string;
    addisAbaba: string;
    close: string;
    submit: string;
    loading: string;
    success: string;
    error: string;
    allRightsReserved: string;
  };
  nav: {
    home: string;
    estate: string;
    story: string;
    products: string;
    logistics: string;
    contact: string;
  };
  hero: {
    tagline: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    exploreProducts: string;
    exploreLogistics: string;
    yearsValue: string;
    yearsLabel: string;
    countriesValue: string;
    countriesLabel: string;
    qualityValue: string;
    qualityLabel: string;
    segmentCoffee: string;
    segmentPulses: string;
    segmentLithium: string;
    segmentLogistics: string;
  };
  about: {
    sectionTag: string;
    title: string;
    intro: string;
    paragraph1: string;
    paragraph2: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    cultureTag: string;
    cultureText: string;
    founderTag: string;
    founderTitle: string;
    founderMessage: string;
    founderName: string;
    founderRole: string;
    managementTag: string;
    managementTitle: string;
    managementText1: string;
    managementText2: string;
    coreValuesTag: string;
    coreValuesTitle: string;
    countriesServed: string;
    countriesDesc: string;
    qualityGuaranteed: string;
    qualityDesc: string;
    yearsExp: string;
    yearsDesc: string;
  };
  products: {
    sectionTag: string;
    title: string;
    subtitle: string;
    coffeeTitle: string;
    coffeeTagline: string;
    coffeeDesc: string;
    pulsesTitle: string;
    pulsesTagline: string;
    pulsesDesc: string;
    lithiumTitle: string;
    lithiumTagline: string;
    lithiumDesc: string;
    specifications: string;
    varieties: string;
    keyFeatures: string;
    exploreDetails: string;
    orderSample: string;
    coffeeSpecs: {
      origins: string;
      infrastructure: string;
      moisture: string;
      grades: string;
      screen: string;
      packaging: string;
    };
    pulsesSpecs: {
      oilseeds: string;
      pulses: string;
      spices: string;
      purity: string;
      moisture: string;
      compliance: string;
    };
    lithiumSpecs: {
      minerals: string;
      industries: string;
      assay: string;
      sizing: string;
      logistics: string;
      licensing: string;
    };
  };
  services: {
    sectionTag: string;
    title: string;
    subtitle: string;
  };
  sustainability: {
    sectionTag: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  logistics: {
    sectionTag: string;
    title: string;
    subtitle: string;
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    getInTouch: string;
    address: string;
    addressVal: string;
    phone: string;
    email: string;
    whatsapp: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    companyLabel: string;
    interestLabel: string;
    messageLabel: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderPhone: string;
    placeholderCompany: string;
    placeholderMessage: string;
    selectInterest: string;
    interestCoffee: string;
    interestPulses: string;
    interestLithium: string;
    interestInvestments: string;
    successMsg: string;
    sendButton: string;
    mapTitle: string;
    mapDesc: string;
  };
  quoteModal: {
    title: string;
    subtitle: string;
    submitQuote: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    common: {
      requestQuote: "Request Quote",
      contactUs: "Contact Us",
      ourStory: "About Kajo Group",
      ourProducts: "Export Excellence",
      importsLogistics: "Diverse Investments",
      estate: "Kajo Group",
      directFarm: "ESTABLISHED 1985 GC • ILLU IMPORT EXPORT",
      addisAbaba: "ADDIS ABABA, ETHIOPIA",
      close: "Close",
      submit: "Submit",
      loading: "Sending...",
      success: "Successfully Sent!",
      error: "An error occurred. Please try again.",
      allRightsReserved: "All Rights Reserved."
    },
    nav: {
      home: "KAJO GROUP",
      estate: "KAJO GROUP",
      story: "OUR STORY",
      products: "EXPORT EXCELLENCE",
      logistics: "DIVERSE INVESTMENTS",
      contact: "CONTACT"
    },
    hero: {
      tagline: "Ambassadors of Ethiopian Heritage Since 1985 GC",
      titleLine1: "KAJO GROUP",
      titleLine2: "IMPORT & EXPORT",
      description: "Founded in 1985 GC as Kajo Import Export and operating globally with our flagship trade arm illu Import Export—specializing in Ethiopian Green Bean Coffee, Spices, Pulses & Oilseeds, Lithium Ore, and 10 diversified investment divisions.",
      exploreProducts: "Explore Exports",
      exploreLogistics: "Diverse Investments",
      yearsValue: "1985",
      yearsLabel: "Established (GC)",
      countriesValue: "10",
      countriesLabel: "Business Divisions",
      qualityValue: "100%",
      qualityLabel: "Quality Standards",
      segmentCoffee: "Green Bean Coffee",
      segmentPulses: "Spices, Pulses & Oilseeds",
      segmentLithium: "Lithium Ore",
      segmentLogistics: "Diverse Investments"
    },
    about: {
      sectionTag: "ABOUT US • EST. 1985 GC",
      title: "Ambassadors of Ethiopian Heritage on the Global Stage",
      intro: "Four decades of ethical international trade, procurement mastery, and diversified industrial leadership.",
      paragraph1: "Established in Ethiopia in 1985 GC under the name “Kajo Import Export”, Kajo Group has grown over four decades into one of Ethiopia’s premier global business houses. In 2012 GC, our international trading flagship underwent a strategic evolution as illu Import Export to reflect our expanding global footprint and dynamic market presence across continents.",
      paragraph2: "Regarding the Export Pillars of our business, we specialize in exporting finest Ethiopian origin green bean coffee, spices, pulses, oilseeds, and high-grade lithium ore. Backed by deep-rooted procurement expertise, owned coffee washing and dry hulling stations, and 10 diversified domestic investment lines, we stand as a trusted and competent partner in the global trade community.",
      missionTitle: "Our Mission",
      missionText: "To be a leading global player in the import and export industry, renowned for our unwavering commitment to superior quality and customer satisfaction. We aim to achieve this by consistently delivering high-quality Ethiopian origin products to international markets, fostering sustainable relationships with our partners, and contributing significantly to the development and prosperity of Ethiopia—upholding the highest standards of ethical business practices, social responsibility, and environmental stewardship.",
      visionTitle: "Our Vision",
      visionText: "To be the premier choice for import and export solutions worldwide, recognized for our relentless pursuit of excellence, innovation, and integrity. We envision expanding our global footprint across diverse industries, continually diversifying our business interests, and pioneering groundbreaking initiatives that promote economic growth, job creation, and technological advancement in Ethiopia.",
      cultureTag: "OUR CORPORATE CULTURE",
      cultureText: "Our culture is a testament to our history of excellence. Rooted in diversity and innovation, we prioritize ethics, sustainability, and adaptability. Customer satisfaction is our driving force. We celebrate success, engage with our communities, and embrace a global mindset as we make a positive impact in the world.",
      founderTag: "MESSAGE FROM THE FOUNDER",
      founderTitle: "Mr. Kelifa Abajorga",
      founderMessage: "“Building the largest import and export company in Ethiopia has been one of my greatest achievements. Entrepreneurship is exciting, rewarding, and challenging. It takes courage, research, and dedication to bring a vision to life. At Kajo Group and illu Import Export, we’re proud to contribute to Ethiopia’s rapid economic growth through international trade. Our dedicated team shares this commitment, and together, we focus on delivering quality services and products. Our goal is to make goods and services accessible to all at a lower cost. Thank you for being part of our journey, and let’s shape the future of international trade together.”",
      founderName: "Mr. Kelifa Abajorga",
      founderRole: "Founder, Kajo Group & illu Import Export",
      managementTag: "OUR MANAGEMENT",
      managementTitle: "Dynamic, Globally Experienced Leadership",
      managementText1: "At Kajo Group, we foster a team of highly educated, dynamic, and ambitious professionals who embody innovation, self-confidence, and a proactive approach to navigating the nuances of international trade.",
      managementText2: "Carefully selected for standout communication skills, robust academic backgrounds, and multicultural international achievements, our holistic leadership approach is the cornerstone of our global success.",
      coreValuesTag: "GUIDING PRINCIPLES",
      coreValuesTitle: "Our 10 Core Values",
      countriesServed: "Established (GC)",
      countriesDesc: "Founded as Kajo Import Export in 1985 GC, evolving into a global Ethiopian trade powerhouse.",
      qualityGuaranteed: "Quality Standards",
      qualityDesc: "Owned coffee washing stations, dry hulling plants, and rigorous laboratory inspection.",
      yearsExp: "Investment Sectors",
      yearsDesc: "Diversified across healthcare, agro-processing, freight, hospitality, construction, manufacturing, and IT."
    },
    products: {
      sectionTag: "EXPORT EXCELLENCE",
      title: "High-Quality Ethiopian Origin Exports",
      subtitle: "Kajo Group’s core strength lies in the export of superior Ethiopian origin commodities—combining deep procurement expertise with advanced processing techniques.",
      coffeeTitle: "Green Bean Coffee",
      coffeeTagline: "Premium Ethiopian washed and sun-dried green bean Arabica coffee for international roasters.",
      coffeeDesc: "We specialize in exporting premium green bean coffee from Ethiopia to international markets. Through our owned washing stations, dry hulling facilities, and central coffee processing and warehouse infrastructure, every lot undergoes meticulous sourcing, testing, and grading to guarantee remarkable consistency.",
      pulsesTitle: "Spices, Pulses, and Oilseeds",
      pulsesTagline: "Superior-quality Ethiopian spices, machine-cleaned pulses, and high-purity oilseeds.",
      pulsesDesc: "Our expertise extends across the export of Ethiopian spices, pulses, and oilseeds renowned worldwide for their natural quality and purity—including Humera and Wollega sesame seeds, niger seeds, green mung beans, chickpeas, kidney beans, korarima, black cumin, turmeric, and ginger.",
      lithiumTitle: "Lithium Ore",
      lithiumTagline: "Powering global electronics, electric vehicles (EVs), and renewable energy sectors.",
      lithiumDesc: "We are at the forefront of the lithium export industry in Ethiopia, providing a diverse range of high-grade spodumene and lepidolite lithium ore products to meet the growing demands of global electronics, electric vehicle battery, and clean renewable energy industries.",
      specifications: "Technical Specifications",
      varieties: "Export Classifications & Lines",
      keyFeatures: "Quality & Procurement Standards",
      exploreDetails: "Explore In-Depth Specifications",
      orderSample: "Request Commercial Quote",
      coffeeSpecs: {
        origins: "Origin Regions: Illubabor, Jimma, Sidamo, Yirgacheffe, Guji, Limu & Harrar",
        infrastructure: "Processing Facilities: Owned Washing Stations, Dry Hulling & Central Warehouses",
        moisture: "Moisture Content: 10.5% – 11.8% Strictly Calibrated",
        grades: "Export Grades: Specialty Grade 1 & 2 | Commercial Grade 3 – 5",
        screen: "Screen Sizes: Screen 14 to 18 Uniform Grading",
        packaging: "Packaging: 60kg Jute Export Bags with GrainPro Liners"
      },
      pulsesSpecs: {
        oilseeds: "Oilseeds: Humera & Wollega Sesame Seeds, Niger Seeds (Noug), Soybeans",
        pulses: "Pulses: Green Mung Beans, Chickpeas, Red Kidney & White Pea Beans, Lentils",
        spices: "Spices: Korarima, Black Cumin, Ginger, Turmeric & Red Pepper",
        purity: "Purity Standard: 99.0% – 99.5%+ Machine Cleaned & Color Sorted",
        moisture: "Moisture Content: Under 6.5% (Oilseeds) | Under 12.0% (Pulses & Spices)",
        compliance: "Certifications: Phytosanitary, Fumigation & Origin Clearance"
      },
      lithiumSpecs: {
        minerals: "Mineral Types: Spodumene & Lepidolite Lithium-Bearing Pegmatite Ores",
        industries: "Key Sectors: Electronics, Electric Vehicles (EVs) & Renewable Energy",
        assay: "Quality Assurance: Pre-Shipment Geochemical Laboratory Assay Verification",
        sizing: "Preparation: Crushed, Screened & Graded to Buyer Specifications",
        logistics: "Freight Handling: Inland Heavy Haulage & Port Bulk/Container Export",
        licensing: "Compliance: Official Ethiopian Mineral Export & Origin Documentation"
      }
    },
    services: {
      sectionTag: "COFFEE PRODUCTION QUALITY POLICY",
      title: "Quality Policy in Our Coffee Line",
      subtitle: "At Kajo Group & illu Import Export, our coffee production line is governed by six uncompromising quality principles—from highland cherry selection to final container dispatch."
    },
    sustainability: {
      sectionTag: "SOCIAL RESPONSIBILITY & STEWARDSHIP",
      title: "Giving Back to Our Communities & Sustaining Ethiopia",
      paragraph1: "At Kajo Group, our commitment extends far beyond commercial trade. Guided by our Core Values of Social Responsibility and Environmental Stewardship, we actively invest in community welfare, job creation, healthcare access, and ethical farming partnerships across Ethiopia.",
      paragraph2: "We champion sustainable agricultural practices that minimize our environmental footprint, promote responsible resource management, and create enduring economic prosperity for smallholder farmers, employees, and the communities in which we operate."
    },
    logistics: {
      sectionTag: "STRATEGIC CONGLOMERATE PORTFOLIO",
      title: "Diverse Investments Across 10 Key Sectors",
      subtitle: "Kajo Group has strategically diversified its business interests across healthcare, agro-processing, global freight, hospitality, real estate, manufacturing, construction, and enterprise IT."
    },
    contact: {
      sectionTag: "HEADQUARTERS • ADDIS ABABA",
      title: "Connect With Kajo Group",
      subtitle: "Reach our international trade and investment desk in Arada Sub City, Addis Ababa for bulk export contracts, import distribution partnerships, and freight inquiries.",
      getInTouch: "Get In Touch",
      address: "Headquarters",
      addressVal: "Arada Sub City, Habtegiorgis Street, Addis Ababa, Ethiopia",
      phone: "Telephone",
      email: "Corporate Email",
      whatsapp: "Direct Trade Desk",
      formTitle: "Send an Official Trade Inquiry",
      nameLabel: "Full Name / Representative",
      emailLabel: "Corporate Email Address",
      phoneLabel: "Telephone / WhatsApp",
      companyLabel: "Organization / Company Name",
      interestLabel: "Primary Business Division",
      messageLabel: "Detailed Specifications (Grades, Packaging, Incoterms, Schedule)",
      placeholderName: "e.g., Klaus Weber / Global Commodities GmbH",
      placeholderEmail: "e.g., procurement@company.com",
      placeholderPhone: "e.g., +251 11 70 60 50",
      placeholderCompany: "e.g., International Roasters & Minerals Ltd",
      placeholderMessage: "Specify required coffee grade, spice/oilseed purity, lithium ore Li2O target, or investment division inquiry...",
      selectInterest: "All Export & Investment Divisions",
      interestCoffee: "Green Bean Coffee Export",
      interestPulses: "Spices, Pulses & Oilseeds Export",
      interestLithium: "Lithium Ore Export",
      interestInvestments: "Diverse Investments & Import Partnerships",
      successMsg: "Inquiry Received by Kajo Group Trade Desk",
      sendButton: "Transmit Official Inquiry",
      mapTitle: "Ethiopian Sourcing & Operations Network",
      mapDesc: "Headquartered on Habtegiorgis Street in Arada Sub City, Addis Ababa, coordinating regional coffee washing stations, dry hulling plants, mineral corridors, and global freight."
    },
    quoteModal: {
      title: "Request Corporate Quotation",
      subtitle: "Share your target commodity specifications, volume, and destination port to receive a tailored commercial offer from Kajo Group.",
      submitQuote: "Submit Official Quote Request"
    }
  },
  ar: {
    common: {
      requestQuote: "طلب عرض سعر",
      contactUs: "اتصل بنا",
      ourStory: "عن مجموعة كاجو",
      ourProducts: "التميز في التصدير",
      importsLogistics: "الاستثمارات المتنوعة",
      estate: "مجموعة كاجو",
      directFarm: "تأسست عام 1985م • إيلو للاستيراد والتصدير",
      addisAbaba: "أديس أبابا، إثيوبيا",
      close: "إغلاق",
      submit: "إرسال",
      loading: "جاري الإرسال...",
      success: "تم الإرسال بنجاح!",
      error: "حدث خطأ. يرجى المحاولة مرة أخرى.",
      allRightsReserved: "جميع الحقوق محفوظة."
    },
    nav: {
      home: "مجموعة كاجو",
      estate: "مجموعة كاجو",
      story: "قصتنا",
      products: "التميز في التصدير",
      logistics: "الاستثمارات المتنوعة",
      contact: "اتصل بنا"
    },
    hero: {
      tagline: "سفراء التراث الإثيوبي منذ عام 1985م",
      titleLine1: "مجموعة كاجو",
      titleLine2: "للاستيراد والتصدير",
      description: "تأسست عام 1985م باسم كاجو للاستيراد والتصدير وتعمل عالمياً عبر ذراعها التجاري إيلو للاستيراد والتصدير — متخصصون في تصدير البن الأخضر الإثيوبي، التوابل والبقوليات والبذور الزيتية، وخام الليثيوم، إلى جانب 10 قطاعات استثمارية متنوعة.",
      exploreProducts: "استكشف الصادرات",
      exploreLogistics: "الاستثمارات المتنوعة",
      yearsValue: "1985",
      yearsLabel: "سنة التأسيس",
      countriesValue: "10",
      countriesLabel: "قطاعات استثمارية",
      qualityValue: "100%",
      qualityLabel: "ضمان الجودة",
      segmentCoffee: "البن الأخضر الإثيوبي",
      segmentPulses: "التوابل والبقوليات والبذور الزيتية",
      segmentLithium: "خام الليثيوم",
      segmentLogistics: "الاستثمارات المتنوعة"
    },
    about: {
      sectionTag: "من نحن • منذ 1985م",
      title: "سفراء التراث الإثيوبي على الساحة العالمية",
      intro: "أربعة عقود من التجارة الدولية الأخلاقية والريادة الصناعية المتنوعة.",
      paragraph1: "تأسست شركتنا في إثيوبيا عام 1985م تحت اسم «كاجو للاستيراد والتصدير» (Kajo Import Export)، وفي عام 2012م شهد ذراعنا التجاري تطوراً استراتيجياً باسم «إيلو للاستيراد والتصدير» ليعكس نمو المجموعة وحضورها الديناميكي تحت مظلة مجموعة كاجو (Kajo Group).",
      paragraph2: "تتمحور ركائز التصدير لدينا حول البن الأخضر الإثيوبي عالي الجودة، والتوابل والبقوليات والبذور الزيتية، وخام الليثيوم. وبفضل خبرتنا العريقة في التوريد وامتلاكنا لمحطات غسيل وتقشير البن ومستودعات المعالجة، نعد شريكاً موثوقاً في التجارة العالمية.",
      missionTitle: "رسالتنا",
      missionText: "أن نكون لاعباً عالمياً رائداً في صناعة الاستيراد والتصدير، معروفين بالتزامنا الراسخ بالجودة الفائقة ورضا العملاء من خلال تقديم منتجات إثيوبية عالية الجودة للأسواق الدولية، وبناء شراكات مستدامة، والمساهمة الفاعلة في ازدهار إثيوبيا.",
      visionTitle: "رؤيتنا",
      visionText: "أن نكون الخيار الأول لحلول الاستيراد والتصدير عالمياً، مع التوسع عبر قطاعات صناعية متنوعة وإطلاق مبادرات رائدة تعزز النمو الاقتصادي وخلق فرص العمل والتقدم التكنولوجي في إثيوبيا.",
      cultureTag: "ثقافتنا المؤسسية",
      cultureText: "ثقافتنا شهادة على تاريخنا الحافل بالتميز؛ متجذرة في التنوع والابتكار والأخلاقيات والاستدامة، ويقودنا رضا العملاء والعقلية العالمية لإحداث أثر إيجابي مستدام.",
      founderTag: "رسالة المؤسس",
      founderTitle: "السيد خليفة أباجورجا",
      founderMessage: "«إن بناء واحدة من أكبر شركات الاستيراد والتصدير في إثيوبيا هو من أعظم إنجازاتي. ريادة الأعمال تتطلب الشجاعة والبحث والتفاني لتحويل الرؤية إلى واقع. في مجموعة كاجو وإيلو للاستيراد والتصدير، نفخر بالمساهمة في النمو الاقتصادي السريع لإثيوبيا عبر التجارة الدولية، وهدفنا هو جعل السلع والخدمات متاحة للجميع بتكلفة أقل. شكراً لكونكم جزءاً من رحلتنا، ولنصنع مستقبل التجارة الدولية معاً.»",
      founderName: "السيد خليفة أباجورجا (Mr. Kelifa Abajorga)",
      founderRole: "المؤسس، مجموعة كاجو وإيلو للاستيراد والتصدير",
      managementTag: "إدارتنا",
      managementTitle: "قيادة ديناميكية بخبرة دولية",
      managementText1: "تلتزم مجموعة كاجو ببناء فريق إداري من الكفاءات المؤهلة والطموحة ممن يجسدون الابتكار والثقة والمبادرة في بيئة الأعمال الدولية.",
      managementText2: "يتم اختيار قادتنا بعناية لمهاراتهم التواصلية المتميزة وخلفياتهم الأكاديمية القوية وخبراتهم المتعددة الثقافات.",
      coreValuesTag: "مبادئنا الراسخة",
      coreValuesTitle: "قيمنا الأساسية العشر",
      countriesServed: "سنة التأسيس",
      countriesDesc: "تأسست كاجو للاستيراد والتصدير عام 1985م بخبرة تمتد لأربعة عقود.",
      qualityGuaranteed: "معايير الجودة",
      qualityDesc: "محطات غسيل وتقشير ومستودعات مملوكة للمجموعة لضمان أعلى جودة.",
      yearsExp: "قطاعات استثمارية",
      yearsDesc: "تنوع استراتيجي يشمل الأدوية، الشحن، الفنادق، التصنيع، البناء، وتقنية المعلومات."
    },
    products: {
      sectionTag: "التميز في التصدير",
      title: "صادرات إثيوبية عالية الجودة",
      subtitle: "تكمن القوة الأساسية لمجموعة كاجو في تصدير المنتجات ذات المنشأ الإثيوبي الأصيل بأعلى معايير الجودة العالمية.",
      coffeeTitle: "البن الأخضر (Green Bean Coffee)",
      coffeeTagline: "تصدير حبوب البن الأخضر الإثيوبي الفاخر المغسول والمجفف طبيعياً للأسواق الدولية.",
      coffeeDesc: "نتخصص في تصدير أجود حبوب البن الأخضر الإثيوبي إلى الأسواق العالمية، مدعومين بمحطات الغسيل والتقشير الجاف ومرافق المعالجة والمستودعات المملوكة لنا لضمان ثبات النكهة والجودة.",
      pulsesTitle: "التوابل والبقوليات والبذور الزيتية",
      pulsesTagline: "توابل إثيوبية أصيلة وبقوليات وبذور زيتية عالية النقاوة.",
      pulsesDesc: "تمتد خبرتنا لتشمل تصدير التوابل والبقوليات والبذور الزيتية الإثيوبية الشهيرة بجودتها الفائقة، بما في ذلك سمسم حميرا ووليجا، بذور النيجر، الماش الأخضر، الحمص، الفاصوليا، الهيل الإثيوبي، الحبة السوداء، الكركم والزنجبيل.",
      lithiumTitle: "خام الليثيوم (Lithium Ore)",
      lithiumTagline: "في طليعة مصدري خام الليثيوم لتلبية طلب قطاعات الإلكترونيات والمركبات الكهربائية والطاقة المتجددة.",
      lithiumDesc: "نقف في طليعة صناعة تصدير الليثيوم، حيث نوفر مجموعة متنوعة من خامات الليثيوم عالية الجودة لتلبية الطلب المتزايد في قطاعات الإلكترونيات وبطاريات السيارات الكهربائية والطاقة المتجددة.",
      specifications: "المواصفات الفنية",
      varieties: "الأصناف وخطوط التصدير",
      keyFeatures: "معايير الجودة والتوريد",
      exploreDetails: "استكشف المواصفات التفصيلية",
      orderSample: "طلب تسعيرة تجارية",
      coffeeSpecs: {
        origins: "مناطق المنشأ: إيلوبابور، جيما، سيدامو، ييرغاشيفي، غوجي، ليمو وهرر",
        infrastructure: "مرافق المعالجة: محطات غسيل وتقشير جاف ومستودعات مملوكة للمجموعة",
        moisture: "نسبة الرطوبة: 10.5% – 11.8% مضبوطة بدقة",
        grades: "درجات التصدير: الدرجة المختصة 1 و2 | الدرجات التجارية 3 إلى 5",
        screen: "مقاس الغربال: غربال 14 إلى 18 متجانس",
        packaging: "التعبئة: أكياس جوت 60 كجم مبطنة بـ GrainPro"
      },
      pulsesSpecs: {
        oilseeds: "البذور الزيتية: سمسم حميرا ووليجا الأبيض، بذور النيجر، فول الصويا",
        pulses: "البقوليات: الماش الأخضر، الحمص، الفاصوليا الحمراء والبيضاء، العدس",
        spices: "التوابل: الهيل الإثيوبي (كواراريما)، الحبة السوداء، الزنجبيل، الكركم والفلفل",
        purity: "نسبة النقاء: 99.0% – 99.5%+ منقاة ومفروزة ضوئياً",
        moisture: "الرطوبة: أقل من 6.5% للبذور الزيتية | أقل من 12% للبقوليات والتوابل",
        compliance: "الشهادات: شهادة الصحة النباتية والتبخير والمنشأ"
      },
      lithiumSpecs: {
        minerals: "أنواع الخام: خامات السبودومين والليبيدوليت الحاملة لليثيوم",
        industries: "القطاعات المستهدفة: الإلكترونيات، السيارات الكهربائية والطاقة المتجددة",
        assay: "ضمان الجودة: فحص وتحليل مخبري جيوكيميائي معتمد قبل الشحن",
        sizing: "التجهيز: تكسير وغربلة وتصنيف حسب مواصفات المشتري",
        logistics: "اللوجستيات: نقل بري ثقيل وشحن بحري بالحاويات أو السائب",
        licensing: "التراخيص: وثائق تصدير ومنشأ معدنية رسمية معتمدة"
      }
    },
    services: {
      sectionTag: "سياسة الجودة في إنتاج البن",
      title: "سياسة الجودة في خط إنتاج القهوة",
      subtitle: "نلتزم في مجموعة كاجو وإيلو للاستيراد والتصدير بستة مبادئ صارمة للجودة بدءاً من انتقاء الحبوب وحتى التغليف والشحن."
    },
    sustainability: {
      sectionTag: "المسؤولية الاجتماعية والبيئية",
      title: "رد الجميل لمجتمعنا وحماية بيئتنا",
      paragraph1: "يمتد التزام مجموعة كاجو إلى ما هو أبعد من التجارة؛ إذ نؤمن برد الجميل للمجتمع ودعم التنمية الاجتماعية والرعاية الصحية وخلق فرص العمل في إثيوبيا.",
      paragraph2: "نطبق ممارسات أعمال مستدامة تقلل الأثر البيئي وتعزز الإدارة المسؤولة للموارد بالشراكة مع المزارعين والمجتمعات المحلية."
    },
    logistics: {
      sectionTag: "محفظة استثمارية متكاملة",
      title: "استثمارات متنوعة في 10 قطاعات استراتيجية",
      subtitle: "نوعت مجموعة كاجو استثماراتها لتشمل الأدوية والمستلزمات الطبية، الشحن العالمي، الفنادق والشقق الفندقية، معالجة البن، التصنيع، البناء، إدارة العقارات، المشروبات، وحلول الحاسب."
    },
    contact: {
      sectionTag: "المقر الرئيسي • أديس أبابا",
      title: "تواصل مع مجموعة كاجو",
      subtitle: "تواصل مع مكتب التجارة الدولية والاستثمار في منطقة أرادا الفرعية، شارع هبتي جيورجيس، أديس أبابا.",
      getInTouch: "تواصل معنا",
      address: "المقر الرئيسي",
      addressVal: "منطقة أرادا الفرعية، شارع هبتي جيورجيس، أديس أبابا، إثيوبيا",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      whatsapp: "مكتب التجارة المباشر",
      formTitle: "أرسل استفساراً تجارياً رسمياً",
      nameLabel: "الاسم الكامل / الممثل",
      emailLabel: "البريد الإلكتروني للشركة",
      phoneLabel: "الهاتف / واتساب",
      companyLabel: "اسم الشركة / المؤسسة",
      interestLabel: "القطاع التجاري المطلوب",
      messageLabel: "التفاصيل والمواصفات المطلوبة (الكميات، شروط الشحن، الدرجة)",
      placeholderName: "مثال: شركة التجارة العالمية",
      placeholderEmail: "مثال: procurement@company.com",
      placeholderPhone: "مثال: +251 11 70 60 50",
      placeholderCompany: "مثال: شركة المحامص والمعادن الدولية",
      placeholderMessage: "يرجى تحديد درجة البن أو نقاوة البذور أو مواصفات خام الليثيوم والكميات المطلوبة...",
      selectInterest: "جميع قطاعات التصدير والاستثمار",
      interestCoffee: "تصدير البن الأخضر",
      interestPulses: "تصدير التوابل والبقوليات والبذور الزيتية",
      interestLithium: "تصدير خام الليثيوم",
      interestInvestments: "الاستثمارات المتنوعة وشراكات التوزيع",
      successMsg: "تم استلام استفساركم بنجاح لدى مجموعة كاجو",
      sendButton: "إرسال الاستفسار الرسمي",
      mapTitle: "شبكة العمليات والتوريد في إثيوبيا",
      mapDesc: "يقع مقرنا في شارع هبتي جيورجيس بمنطقة أرادا في قلب أديس أبابا لتنسيق محطات معالجة البن ومناطق التعدين والشحن الدولي."
    },
    quoteModal: {
      title: "طلب عرض سعر تجاري",
      subtitle: "يرجى تحديد المنتج والكمية وميناء الوصول لتلقي عرض رسمي من مجموعة كاجو.",
      submitQuote: "إرسال طلب التسعيرة"
    }
  },
  am: {
    common: {
      requestQuote: "ዋጋ ይጠይቁ",
      contactUs: "ያግኙን",
      ourStory: "ስለ ካጆ ግሩፕ",
      ourProducts: "የኤክስፖርት ልህቀት",
      importsLogistics: "ዘርፈ-ብዙ ኢንቨስትመንቶች",
      estate: "ካጆ ግሩፕ",
      directFarm: "በ1985 ዓ.ም (GC) የተመሰረተ • ኢሉ አስመጪ እና ላኪ",
      addisAbaba: "አዲስ አበባ፣ ኢትዮጵያ",
      close: "ዝጋ",
      submit: "ላክ",
      loading: "በመላክ ላይ...",
      success: "በተሳካ ሁኔታ ተልኳል!",
      error: "ስህተት ተከስቷል። እባክዎ እንደገና ይሞክሩ።",
      allRightsReserved: "መብቱ በህግ የተጠበቀ ነው።"
    },
    nav: {
      home: "ካጆ ግሩፕ",
      estate: "ካጆ ግሩፕ",
      story: "ታሪካችን",
      products: "የኤክስፖርት ልህቀት",
      logistics: "ዘርፈ-ብዙ ኢንቨስትመንቶች",
      contact: "ያግኙን"
    },
    hero: {
      tagline: "ከ1985 ዓ.ም (GC) ጀምሮ የኢትዮጵያ ቅርስና ጥራት አምባሳደር",
      titleLine1: "ካጆ ግሩፕ",
      titleLine2: "አስመጪ እና ላኪ",
      description: "በ1985 ዓ.ም (GC) በ«ካጆ አስመጪ እና ላኪ» ስም የተመሰረተውና በዓለም አቀፍ የንግድ ክንፉ «ኢሉ አስመጪ እና ላኪ» የሚንቀሳቀሰው ካጆ ግሩፕ፤ አረንጓዴ ቡና፣ ቅመማ ቅመም፣ ጥራጥሬና የቅባት እህሎች፣ የሊቲየም ማዕድን እና 10 የኢንቨስትመንት ዘርፎችን ያስተዳድራል።",
      exploreProducts: "ኤክስፖርቶችን ይመልከቱ",
      exploreLogistics: "ኢንቨስትመንቶች",
      yearsValue: "1985",
      yearsLabel: "የተመሰረተበት (GC)",
      countriesValue: "10",
      countriesLabel: "የቢዝነስ ዘርፎች",
      qualityValue: "100%",
      qualityLabel: "የጥራት ዋስትና",
      segmentCoffee: "አረንጓዴ ቡና (Green Bean Coffee)",
      segmentPulses: "ቅመማ ቅመም፣ ጥራጥሬ እና የቅባት እህሎች",
      segmentLithium: "የሊቲየም ማዕድን (Lithium Ore)",
      segmentLogistics: "ዘርፈ-ብዙ ኢንቨስትመንቶች"
    },
    about: {
      sectionTag: "ስለ እኛ • ከ1985 ዓ.ም (GC) ጀምሮ",
      title: "በዓለም መድረክ የኢትዮጵያ ቅርስና የንግድ ልህቀት አምባሳደሮች",
      intro: "የአራት አስርት ዓመታት ታማኝ ዓለም አቀፍ ንግድ እና ዘርፈ-ብዙ ኢንቨስትመንት።",
      paragraph1: "ድርጅታችን ከ1985 ዓ.ም (GC) ጀምሮ «ካጆ አስመጪ እና ላኪ» በሚል ስያሜ በኢትዮጵያ ተመስርቶ በዓለም አቀፍ ንግድ ላይ ሲሳተፍ ቆይቷል። በ2012 ዓ.ም (GC) የኩባንያውን እድገትና ተለዋዋጭ የገበያ ተሳትፎ ለማንጸባረቅ «ኢሉ አስመጪ እና ላኪ» በሚል ስትራቴጂካዊ የንግድ ብራንድ በካጆ ግሩፕ ጥላ ስር ተጠናክሯል።",
      paragraph2: "በኤክስፖርት ዘርፍ ከፍተኛ ጥራት ያለው የኢትዮጵያ አረንጓዴ ቡና፣ ቅመማ ቅመም፣ ጥራጥሬና የቅባት እህሎች እንዲሁም የሊቲየም ማዕድን ለዓለም ገበያ እናቀርባለን። የራሳችን የቡና ማጠቢያ፣ የደረቅ ቡና መፈልፈያና ማቀነባበሪያ መጋዘኖች እንዲሁም 10 ዘርፈ-ብዙ የኢንቨስትመንት መስኮች ታማኝ የዓለም ንግድ አጋር አድርገውናል።",
      missionTitle: "ተልዕኳችን",
      missionText: "በላቀ ጥራትና በደንበኞች እርካታ የሚታወቅ ግንባር ቀደም ዓለም አቀፍ የአስመጪና ላኪ ተቋም መሆን፤ ጥራት ያላቸው የኢትዮጵያ ምርቶችን በቀጣይነት ለዓለም ገበያ በማቅረብና ዘላቂ አጋርነትን በመገንባት ለኢትዮጵያ እድገትና ብልጽግና የጎላ አስተዋጽኦ ማበርከት።",
      visionTitle: "ራዕያችን",
      visionText: "በልህቀት፣ በፈጠራና በታማኝነት የሚመረጥ ቀዳሚ ዓለም አቀፍ የአስመጪና ላኪ መፍትሔ ሰጪ መሆን፤ በተለያዩ ኢንዱስትሪዎች አሻራችንን በማስፋት ለኢትዮጵያ የኢኮኖሚ እድገት፣ የስራ ዕድል ፈጠራና የቴክኖሎጂ ሽግግር ፈር ቀዳጅ መሆን።",
      cultureTag: "የድርጅታችን ባህል",
      cultureText: "ባህላችን ለልህቀት ታሪካችን ምስክር ነው። በብዝሃነትና በፈጠራ ላይ ተመስርተን ለስነ-ምግባር፣ ለዘላቂነትና ለደንበኞች እርካታ ቅድሚያ እንሰጣለን።",
      founderTag: "የመስራቹ መልዕክት",
      founderTitle: "አቶ ከሊፋ አባጆርጋ",
      founderMessage: "«በኢትዮጵያ ውስጥ ግዙፍ የአስመጪና ላኪ ኩባንያ መገንባት ከታላላቅ ስኬቶቼ አንዱ ነው። ሥራ ፈጣሪነት ድፍረትን፣ ጥናትንና ቁርጠኝነትን ይጠይቃል። በካጆ ግሩፕ እና በኢሉ አስመጪና ላኪ በዓለም አቀፍ ንግድ አማካኝነት ለኢትዮጵያ ፈጣን የኢኮኖሚ እድገት የበኩላችንን በማበርከታችን እንኮራለን። ዓላማችን ጥራት ያላቸውን ምርቶችና አገልግሎቶች በተመጣጣኝ ዋጋ ለሁሉም ተደራሽ ማድረግ ነው። የጉዟችን አካል ስለሆኑ እናመሰግናለን፤ የዓለም አቀፍ ንግድን ነገ በጋራ እንቅረጽ።»",
      founderName: "አቶ ከሊፋ አባጆርጋ (Mr. Kelifa Abajorga)",
      founderRole: "መስራች፣ ካጆ ግሩፕ እና ኢሉ አስመጪና ላኪ",
      managementTag: "አመራራችን",
      managementTitle: "ተለዋዋጭና ዓለም አቀፍ ልምድ ያለው አመራር",
      managementText1: "በካጆ ግሩፕ በከፍተኛ ደረጃ የተማሩ፣ ንቁና ፈጠራን የተላበሱ ባለሙያዎችን ያቀፈ የማኔጅመንት ቡድን ገንብተናል።",
      managementText2: "በጠንካራ የትምህርት ዝግጅት፣ በላቀ የተግባቦት ክህሎትና በዓለም አቀፍ የንግድ ልምድ የተመረጡ መሪዎቻችን የስኬታችን መሰረት ናቸው።",
      coreValuesTag: "መሪ መርሆዎቻችን",
      coreValuesTitle: "10 ዋና እሴቶቻችን",
      countriesServed: "የተመሰረተበት ዓ.ም",
      countriesDesc: "በ1985 ዓ.ም (GC) በካጆ አስመጪና ላኪ ስም የተጀመረ የ40+ ዓመታት ልምድ።",
      qualityGuaranteed: "የጥራት ቁጥጥር",
      qualityDesc: "የራሳችን የቡና ማጠቢያ፣ መፈልፈያና ማቀነባበሪያ መጋዘኖች።",
      yearsExp: "የኢንቨስትመንት ዘርፎች",
      yearsDesc: "በመድኃኒት፣ በጭነት፣ በሆቴል፣ በማኑፋክቸሪንግ፣ በኮንስትራክሽንና በአይቲ የተሰማራ።"
    },
    products: {
      sectionTag: "የኤክስፖርት ልህቀት",
      title: "ከፍተኛ ጥራት ያላቸው የኢትዮጵያ የኤክስፖርት ምርቶች",
      subtitle: "የካጆ ግሩፕ ዋነኛ ጥንካሬ ጥራት ያላቸውን የኢትዮጵያ ምርቶች በዘመናዊ የግዥና የማቀነባበሪያ ቴክኒኮች ለዓለም ገበያ ማቅረብ ነው።",
      coffeeTitle: "አረንጓዴ ቡና (Green Bean Coffee)",
      coffeeTagline: "ፕሪሚየም የኢትዮጵያ የታጠበና የተፈጥሮ አረንጓዴ ቡና ለዓለም አቀፍ ገበያ።",
      coffeeDesc: "ከፍተኛ ጥራት ያለው የኢትዮጵያ አረንጓዴ ቡናን ለዓለም ገበያ በመላክ ላይ ልዩ ብቃት አለን። በራሳችን የቡና ማጠቢያ ጣቢያዎች፣ የደረቅ ቡና መፈልፈያዎች እና የማቀነባበሪያ መጋዘኖች አማካኝነት ወጥ የሆነ ጥራትና ጣዕም እናረጋግጣለን።",
      pulsesTitle: "ቅመማ ቅመም፣ ጥራጥሬ እና የቅባት እህሎች",
      pulsesTagline: "በጥራታቸው የታወቁ የኢትዮጵያ ቅመማ ቅመሞች፣ ጥራጥሬዎች እና የቅባት እህሎች።",
      pulsesDesc: "የሁመራና የወለጋ ሰሊጥ፣ ኑግ፣ አኩሪ አተር፣ አረንጓዴ ማሽ፣ ሽምብራ፣ ቦሎቄ፣ ኮረሪማ፣ ጥቁር አዝሙድ፣ እርድና ዝንጅብልን ጨምሮ ከፍተኛ ንፅህና ያላቸውን የኢትዮጵያ ምርቶች ለዓለም ገበያ እንልካለን።",
      lithiumTitle: "የሊቲየም ማዕድን (Lithium Ore)",
      lithiumTagline: "ለኤሌክትሮኒክስ፣ ለኤሌክትሪክ ተሽከርካሪዎች (EVs) እና ለታዳሽ ኃይል ዘርፎች የሚውል የሊቲየም ማዕድን።",
      lithiumDesc: "በሊቲየም ማዕድን ኤክስፖርት ኢንዱስትሪ ግንባር ቀደም በመሆን ለኤሌክትሮኒክስ፣ ለኤሌክትሪክ ተሽከርካሪ ባትሪዎች እና ለታዳሽ ኃይል ማከማቻ የሚውሉ ጥራት ያላቸው የሊቲየም ምርቶችን እናቀርባለን።",
      specifications: "ቴክኒካዊ መግለጫዎች",
      varieties: "የኤክስፖርት ምድቦች",
      keyFeatures: "የጥራት እና የአቅርቦት መስፈርቶች",
      exploreDetails: "ዝርዝር መግለጫዎችን ይመልከቱ",
      orderSample: "የንግድ ዋጋ ይጠይቁ",
      coffeeSpecs: {
        origins: "የምርት አካባቢዎች፡ ኢሉባቦር፣ ጅማ፣ ሲዳሞ፣ ይርጋጨፌ፣ ጉጂ፣ ሊሙ እና ሐረር",
        infrastructure: "ማቀነባበሪያ፡ የራሳችን የቡና ማጠቢያ፣ መፈልፈያና ማከማቻ መጋዘኖች",
        moisture: "የእርጥበት መጠን፡ 10.5% – 11.8% በጥብቅ የተመጠነ",
        grades: "ደረጃዎች፡ ስፔሻሊቲ ደረጃ 1 እና 2 | ኮሜርሻል ደረጃ 3 – 5",
        screen: "የስክሪን መጠን፡ ስክሪን 14 እስከ 18 ወጥ ደረጃ",
        packaging: "ማሸጊያ፡ 60 ኪ.ግ የጁት ጆንያ ከGrainPro ጋር"
      },
      pulsesSpecs: {
        oilseeds: "የቅባት እህሎች፡ የሁመራና ወለጋ ሰሊጥ፣ ኑግ፣ አኩሪ አተር",
        pulses: "ጥራጥሬዎች፡ አረንጓዴ ማሽ፣ ሽምብራ፣ ቀይና ነጭ ቦሎቄ፣ ምስር",
        spices: "ቅመማ ቅመም፡ ኮረሪማ፣ ጥቁር አዝሙድ፣ ዝንጅብል፣ እርድና በርበሬ",
        purity: "የንፅህና ደረጃ፡ 99.0% – 99.5%+ በማሽን የተበጠረ",
        moisture: "እርጥበት፡ ከ6.5% በታች (የቅባት እህሎች) | ከ12% በታች (ጥራጥሬና ቅመም)",
        compliance: "ሰርተፊኬቶች፡ የፊቶሳኒተሪ፣ የፉሚጌሽን እና የትውልድ ሀገር ማረጋገጫ"
      },
      lithiumSpecs: {
        minerals: "የማዕድን ዓይነቶች፡ ስፖዱሚን (Spodumene) እና ሌፒዶላይት (Lepidolite) ሊቲየም",
        industries: "ኢንዱስትሪዎች፡ ኤሌክትሮኒክስ፣ የኤሌክትሪክ ተሽከርካሪዎች (EVs) እና ታዳሽ ኃይል",
        assay: "የጥራት ቁጥጥር፡ ከመጫኑ በፊት የላብራቶሪ ይዘት ምርመራ (Assay)",
        sizing: "ዝግጅት፡ በገዢው መስፈርት መሰረት የተፈጨና የተመጠነ",
        logistics: "ሎጅስቲክስ፡ የከባድ ጭነት ትራንስፖርት እና የወደብ ኮንቴይነር/ጅምላ ጭነት",
        licensing: "ህጋዊነት፡ ሙሉ የኢትዮጵያ ማዕድን ኤክስፖርት ፈቃድና ሰነድ"
      }
    },
    services: {
      sectionTag: "የቡና ምርት የጥራት ፖሊሲ",
      title: "በቡና ምርት መስመራችን የጥራት ፖሊሲ",
      subtitle: "ከምርጥ የቡና ፍሬ መረጣ እስከ መጨረሻው እሽግ ድረስ በስድስት ዋና የጥራት መርሆዎች እንመራለን።"
    },
    sustainability: {
      sectionTag: "ማህበራዊ ኃላፊነት እና የአካባቢ ጥበቃ",
      title: "ለማህበረሰባችንና ለአካባቢያችን ዘላቂ ልማት ቁርጠኞች ነን",
      paragraph1: "በካጆ ግሩፕ ለማህበረሰቡ መልሶ መስጠትና ለማህበራዊ ልማት አስተዋጽኦ ማበርከት የእሴቶቻችን አካል ነው። በጤና አቅርቦት፣ በስራ ዕድል ፈጠራና በአርሶ አደሮች ድጋፍ ላይ በንቃት እንሳተፋለን።",
      paragraph2: "የአካባቢ ተጽዕኖን የሚቀንሱ ዘላቂ የአሰራር ዘዴዎችንና ኃላፊነት የተሞላበት የተፈጥሮ ሀብት አጠቃቀምን እናበረታታለን።"
    },
    logistics: {
      sectionTag: "ስትራቴጂካዊ የኢንቨስትመንት መስኮች",
      title: "በ10 ዋና ዘርፎች የተሰማራ ዘርፈ-ብዙ ኢንቨስትመንት",
      subtitle: "ካጆ ግሩፕ በቡና ማቀነባበሪያ፣ በመድኃኒትና የህክምና መሳሪያዎች ስርጭት፣ በጭነት ትራንስፖርት፣ በሆቴልና አፓርትመንት፣ በማኑፋክቸሪንግ፣ በኮንስትራክሽንና በኮምፒውተር ቴክኖሎጂ ዘርፎች ይሰራል።"
    },
    contact: {
      sectionTag: "ዋና መስሪያ ቤት • አዲስ አበባ",
      title: "ከካጆ ግሩፕ ጋር ይገናኙ",
      subtitle: "ለጅምላ የኤክስፖርት ውሎች፣ ለገቢ ምርቶች ስርጭት እና ለሎጅስቲክስ አገልግሎት በአራዳ ክፍለ ከተማ የሚገኘውን ዋና መስሪያ ቤታችንን ያግኙ።",
      getInTouch: "ያግኙን",
      address: "ዋና መስሪያ ቤት",
      addressVal: "አራዳ ክፍለ ከተማ፣ ሀብተጊዮርጊስ ጎዳና፣ አዲስ አበባ፣ ኢትዮጵያ",
      phone: "ስልክ",
      email: "ኢሜይል",
      whatsapp: "ቀጥታ የንግድ መስመር",
      formTitle: "ኦፊሴላዊ የንግድ መልዕክት ይላኩ",
      nameLabel: "ሙሉ ስም / ተወካይ",
      emailLabel: "የስራ ኢሜይል አድራሻ",
      phoneLabel: "ስልክ / ዋትስአፕ",
      companyLabel: "የድርጅት ስም",
      interestLabel: "ዋና የንግድ ዘርፍ",
      messageLabel: "ዝርዝር መስፈርቶች (ደረጃ፣ መጠን፣ ማሸጊያ፣ መድረሻ ወደብ)",
      placeholderName: "ምሳሌ፡ Global Roasters Ltd",
      placeholderEmail: "ምሳሌ፡ info@company.com",
      placeholderPhone: "ምሳሌ፡ +251 11 70 60 50",
      placeholderCompany: "ምሳሌ፡ International Trade Corp",
      placeholderMessage: "የሚፈልጉትን የቡና ደረጃ፣ የቅመም/ሰሊጥ መጠን ወይም የሊቲየም ማዕድን ዝርዝር ይጥቀሱ...",
      selectInterest: "ሁሉም የኤክስፖርት እና ኢንቨስትመንት ዘርፎች",
      interestCoffee: "የአረንጓዴ ቡና ኤክስፖርት",
      interestPulses: "ቅመማ ቅመም፣ ጥራጥሬ እና የቅባት እህሎች",
      interestLithium: "የሊቲየም ማዕድን ኤክስፖርት",
      interestInvestments: "ዘርፈ-ብዙ ኢንቨስትመንት እና ስርጭት",
      successMsg: "ጥያቄዎ ለካጆ ግሩፕ የንግድ ክፍል ደርሷል",
      sendButton: "የንግድ ጥያቄውን ይላኩ",
      mapTitle: "የኢትዮጵያ የአቅርቦት እና የስራ መረብ",
      mapDesc: "በአዲስ አበባ አራዳ ክፍለ ከተማ ሀብተጊዮርጊስ ጎዳና የሚገኘው ዋና መስሪያ ቤታችን የቡና ማቀነባበሪያዎችን፣ የማዕድንና የወደብ ሎጅስቲክስን ያስተባብራል።"
    },
    quoteModal: {
      title: "የንግድ ዋጋ ጥያቄ ያቅርቡ",
      subtitle: "የሚፈልጉትን ምርት፣ መጠንና መድረሻ ሀገር ይግለጹ፤ የካጆ ግሩፕ ባለሙያዎች ዝርዝር ዋጋ ያቀርቡልዎታል።",
      submitQuote: "የዋጋ ጥያቄውን ያስገቡ"
    }
  },
  om: {
    common: {
      requestQuote: "Gatii Gaafadhaa",
      contactUs: "Nu Quunnamaa",
      ourStory: "Waa'ee Kajo Group",
      ourProducts: "Al-ergii Olaanaa",
      importsLogistics: "Investimantii Adda Addaa",
      estate: "Kajo Group",
      directFarm: "BARA 1985 GC HUNDEEFFAME • ILLU IMPORT EXPORT",
      addisAbaba: "FINFINNEE, ITOOPHIYAA",
      close: "Cufi",
      submit: "Ergi",
      loading: "Ergamaa jira...",
      success: "Milkaa'inaan Ergameera!",
      error: "Dogoggorri uumameera. Irra deebi'ii yaali.",
      allRightsReserved: "Mirgi Hunduu Seeraan Eegamaadha."
    },
    nav: {
      home: "KAJO GROUP",
      estate: "KAJO GROUP",
      story: "SEENAA KEENYA",
      products: "AL-ERGII OLAANAA",
      logistics: "INVESTIMANTII",
      contact: "QUUNNAMAA"
    },
    hero: {
      tagline: "Bara 1985 GC Irraa Eegalee Ambaasaaddara Hambaa Itoophiyaa",
      titleLine1: "KAJO GROUP",
      titleLine2: "IMPORT & EXPORT",
      description: "Bara 1985 GC maqaa Kajo Import Export jedhuun hundeeffamee damee daldala addunyaa illu Import Export waliin hojjeta — Buna Magariisa Itoophiyaa, Mi'eessituu, Midhaan Agadaa fi Zayitaa, Lithium Ore fi dameewwan investimantii 10.",
      exploreProducts: "Al-ergii Ilaalaa",
      exploreLogistics: "Investimantii Keenya",
      yearsValue: "1985",
      yearsLabel: "Bara Hundeeffamaa",
      countriesValue: "10",
      countriesLabel: "Dameewwan Hojii",
      qualityValue: "100%",
      qualityLabel: "Qulqullina Mirkanaa'e",
      segmentCoffee: "Buna Magariisa (Green Bean)",
      segmentPulses: "Mi'eessituu, Midhaan & Sanyii Zayitaa",
      segmentLithium: "Albuuda Liitiyeemii (Lithium Ore)",
      segmentLogistics: "Investimantii Adda Addaa"
    },
    about: {
      sectionTag: "WAA'EE KEENYA • BARA 1985 GC",
      title: "Wድድር Addunyaa Irratti Ambaasaaddara Hambaa fi Qulqullina Itoophiyaa",
      intro: "Waggoota afurtamaaf daldala addunyaa amanamaa fi investimantii babal'aa.",
      paragraph1: "Dhaabbanni keenya bara 1985 GC maqaa “Kajo Import Export” jedhuun Itoophiyaatti hundeeffamee daldala addunyaa irratti bobba'aa tureera. Bara 2012 GC guddinaa fi jijjiirama gabaa addunyaa calaqqisiisuuf dameen daldala keenya “illu Import Export” jedhamuun Kajo Group jalatti caalmaatti cimeera.",
      paragraph2: "Utubaalee al-ergii keenya keessatti buna magariisa Itoophiyaa qulqullina olaanaa qabu, mi'eessituu, midhaan agadaa, sanyii zayitaa fi albuuda Lithium Ore gara biyyoota addunyaatti ergina. Buufataalee dhiqannaa bunaa, warshaa fi mankuusaa mataa keenyaa qabaachuun michuu daldalaa amanamaa nu taasiseera.",
      missionTitle: "Ergama Keenya",
      missionText: "Industirii daldala alaa fi galchifataa keessatti qulqullina olaanaa fi quufinsa maamiltootaatiin adda duree addunyaa ta'uu; oomishaalee Itoophiyaa qulqulluu gabaa addunyaaf dhiyeessuun guddinaa fi badhaadhina Itoophiyaatiif gumaacha guddaa gochuu.",
      visionTitle: "Mul'ata Keenya",
      visionText: "Furmaata daldala alaa fi galchifataatiif filannoo jalqabaa addunyaa ta'uu; industiriiwwan adda addaa keessatti babal'achuun guddina dinagdee, carraa hojii uumuu fi teeknooloojii Itoophiyaa keessatti tarkaanfachiisuu.",
      cultureTag: "AADAA HOJII KEENYA",
      cultureText: "Aadaan keenya seenaa qulqullina keenyaatiif ragaa dha. Naamusa, itti-fufiinsa, kalaqaa fi quufinsa maamiltootaa dursa kennina.",
      founderTag: "ERGAA HUNDEESSAA",
      founderTitle: "Obbo Kelifa Abajorga",
      founderMessage: "“Itoophiyaa keessatti dhaabbata daldala alaa fi galchifataa guddaa ijaaruun milkaa'ina koo gurguddoo keessaa tokko. Kajo Group fi illu Import Export keessatti karaa daldala addunyaatiin guddina dinagdee Itoophiyaatiif gumaachuu keenyaatti ni boonna. Kaayyoon keenya meeshaalee fi tajaajila qulqulluu gatii madaalawaan hundaaf dhiyeessuudha. Qaama imala keenyaa ta'uu keessaniif galatoomaa; egeree daldala addunyaa waliin haa ijaarru.”",
      founderName: "Obbo Kelifa Abajorga (Mr. Kelifa Abajorga)",
      founderRole: "Hundeessaa, Kajo Group & illu Import Export",
      managementTag: "HOGGANSA KEENYA",
      managementTitle: "Garee Hoggansaa Muuxannoo Addunyaa Qabu",
      managementText1: "Kajo Group keessatti ogeeyyii barumsa olaanaa, kalaqaa fi murannoo qaban kanneen daldala addunyaa sirriitti hubatan horanneerra.",
      managementText2: "Dandeettii quunnamtii, muuxannoo addunyaa fi hojii gareetiin adda duree ta'uun keenya bu'uura milkaa'ina keenyaati.",
      coreValuesTag: "DUUDHAALEE KEENYA",
      coreValuesTitle: "Duudhaalee Bu'uuraa 10",
      countriesServed: "Bara Hundeeffamaa",
      countriesDesc: "Bara 1985 GC Kajo Import Export jedhamuun kan eegale muuxannoo waggaa 40+.",
      qualityGuaranteed: " Sadarkaa Qulqullinaa",
      qualityDesc: "Buufataalee dhiqannaa bunaa, warshaa fi mankuusaa mataa keenyaa.",
      yearsExp: "Dameewwan Investimantii",
      yearsDesc: "Qoricha, geejjiba, hoteela, warshaa, ijaarsa, qabeenya fi IT keessatti."
    },
    products: {
      sectionTag: "AL-ERGII OLAANAA",
      title: "Oomishaalee Al-ergii Qulqulluu Itoophiyaa",
      subtitle: "Cimina guddaan Kajo Group oomishaalee Itoophiyaa qulqullina olaanaa qaban mala ammayyaatiin qopheessee gabaa addunyaatti dhiyeessuudha.",
      coffeeTitle: "Buna Magariisa (Green Bean Coffee)",
      coffeeTagline: "Buna magariisa Arabikaa Itoophiyaa dhiqamee fi aduun goge gabaa addunyaatiif.",
      coffeeDesc: "Buna magariisa Itoophiyaa qulqullina olaanaa qabu gara gabaa addunyaatti erguun beekamna. Buufataalee dhiqannaa, warshaa fi mankuusaa mataa keenyaan qulqullina walfakkaataa mirkaneessina.",
      pulsesTitle: "Mi'eessituu, Midhaan Agadaa fi Sanyii Zayitaa",
      pulsesTagline: "Mi'eessituu, midhaan agadaa fi sanyii zayitaa Itoophiyaa qulqullina olaanaa qaban.",
      pulsesDesc: "Saliixii Humaraa fi Wallaggaa, nuugii, baaqelaa sooyaa, maashii magariisa, shumburaa, boloqqee, kororimaa, abasuuda gurraacha, irdii fi jinjibila qulqullina olaanaan qopheessinee ergina.",
      lithiumTitle: "Albuuda Liitiyeemii (Lithium Ore)",
      lithiumTagline: "Industirii elektirooniksii, konkolaattota elektirikaa (EVs) fi anniisaa haaromsamaaf.",
      lithiumDesc: "Industirii al-ergii Lithium Ore keessatti adda duree ta'uun fedhii industirii elektirooniksii, baatirii EV fi anniisaa haaromsamaa guutuuf oomisha ליቲyeemii qulqulluu dhiyeessina.",
      specifications: "Ibsa Teeknikaa",
      varieties: "Gosa Oomishaalee Al-ergii",
      keyFeatures: "Ulaagaalee Qulqullinaa",
      exploreDetails: "Ibsa Bal'aa Ilaalaa",
      orderSample: "Gatii Daldalaa Gaafadhaa",
      coffeeSpecs: {
        origins: "Naannoo Madda: Iluu Abbaa Boor, Jimmaa, Sidaamoo, Yirgaacheffee, Gujii, Limmuu & Harar",
        infrastructure: "Bu'uura Qophii: Buufata Dhiqannaa, Dry Hulling fi Mankuusaa Dhuunfaa",
        moisture: "Jiidhinsa: 10.5% – 11.8% To'atamaa",
        grades: "Sadarkaa: Specialty Grade 1 & 2 | Commercial Grade 3 – 5",
        screen: "Hamma Iskiriinii: Screen 14 hanga 18",
        packaging: "Paakeejii: Jooniyaa Juutii 60kg GrainPro waliin"
      },
      pulsesSpecs: {
        oilseeds: "Sanyii Zayitaa: Saliixii Humaraa & Wallaggaa, Nuugii, Sooyaa",
        pulses: "Midhaan Agadaa: Maashii Magariisa, Shumburaa, Boloqqee, Misira",
        spices: "Mi'eessituu: Kororimaa, Abasuuda Gurraacha, Jinjibila, Irdii & Barbaree",
        purity: "Qulqullina: 99.0% – 99.5%+ Maashiniin Qulqullaa'e",
        moisture: "Jiidhinsa: 6.5% Gadi (Sanyii Zayitaa) | 12% Gadi (Midhaan & Mi'eessituu)",
        compliance: "Waraqaa Ragaa: Phytosanitary, Fumigation & Ragaa Madda Biyyaa"
      },
      lithiumSpecs: {
        minerals: "Gosa Albuudaa: Spodumene & Lepidolite Lithium Ore",
        industries: "Industiriiwwan: Elektirooniksii, Konkolaattota Elektirikaa (EVs) & Anniisaa",
        assay: "Mirkaneessa: Qorannoo Laaboraatoorii Ji'ookeemikaalaa Fe'umsa Duraa",
        sizing: "Qophii: Fedhii Bitaa Irratti Hundaa'ee Kan Caccabee fi Calalame",
        logistics: "Geejjiba: Geejjiba Fe'umsa Ulfaataa fi Doonii Buufataa",
        licensing: "Seerummaa: Hayyama Al-ergii Albuudaa Itoophiyaa Guutuu"
      }
    },
    services: {
      sectionTag: "IMAAMMATA QULQULLINA BUNAA",
      title: "Imaammata Qulqullina Oomisha Bunaa Keenyaa",
      subtitle: "Kajo Group fi illu Import Export keessatti adeemsi oomisha bunaa keenya qajeelfamoota qulqullinaa jahaan hogganama."
    },
    sustainability: {
      sectionTag: "ITTI GAAFATAMUMMAA HAWAASUMMAA",
      title: "Hawaasa Keenya Deeggaruu fi Naannoo Eeguu",
      paragraph1: "Waadaan Kajo Group daldala qofa irratti hin daangeffamu; misooma hawaasaa, dhiyeessii fayyaa, carraa hojii uumuu fi qonnaan bultoota deeggaruu irratti ciminaan hojjenna.",
      paragraph2: "Hojimaata daldalaa naannoo eeguu fi qabeenya uumamaa itti-gaafatamummaan bulchuu hordofna."
    },
    logistics: {
      sectionTag: "INVESTIMANTII BAAY'INA QABU",
      title: "Dameewwan Investimantii Ijoo 10",
      subtitle: "Kajo Group qorichaa fi meeshaalee yaalaa, geejjiba fe'umsaa, hoteelaa fi apartaamaa, qophii bunaa, warshaa, ijaarsa, bulchiinsa qabeenyaa fi IT irratti invest godheera."
    },
    contact: {
      sectionTag: "WAJJIRA GUDDAA • FINFINNEE",
      title: "Kajo Group Quunnamaa",
      subtitle: "Waliigaltee al-ergii jumlaa, raabsaa galchifataa fi tajaajila geejjibaatiif waajjira keenya Kutaa Magaalaa Araadaa, Daandii Habtagiyoorgis jiru quunnamaa.",
      getInTouch: "Nu Quunnamaa",
      address: "Waajjira Guddaa",
      addressVal: "Kutaa Magaalaa Araadaa, Daandii Habtagiyoorgis, Finfinnee, Itoophiyaa",
      phone: "Bilbila",
      email: "Imeeyilii",
      whatsapp: " Sarara Daldalaa Kallattii",
      formTitle: "Gaaffii Daldalaa Ergaa",
      nameLabel: "Maqaa Guutuu / Bakka Bu'aa",
      emailLabel: "Imeeyilii Dhaabbataa",
      phoneLabel: "Bilbila / WhatsApp",
      companyLabel: "Maqaa Dhaabbataa",
      interestLabel: "Damee Daldalaa Filatame",
      messageLabel: "Ibsa Bal'aa (Sadarkaa, Hamma, Paakeejii, Buufata)",
      placeholderName: "fkn, Global Commodities Ltd",
      placeholderEmail: "fkn, procurement@company.com",
      placeholderPhone: "fkn, +251 11 70 60 50",
      placeholderCompany: "fkn, International Roasters Corp",
      placeholderMessage: "Sadarkaa bunaa, sanyii zayitaa ykn Lithium Ore fi hamma barbaaddan ibsaa...",
      selectInterest: "Dameewwan Al-ergii fi Investimantii Hunda",
      interestCoffee: "Al-ergii Buna Magariisaa",
      interestPulses: "Mi'eessituu, Midhaan Agadaa fi Sanyii Zayitaa",
      interestLithium: "Al-ergii Lithium Ore",
      interestInvestments: "Investimantii Adda Addaa & Raabsaa",
      successMsg: "Ergaan Keessan Kajo Group Bira Gaheera",
      sendButton: "Gaaffii Daldalaa Ergi",
      mapTitle: "cimdii Hojii fi Dhiyeessii Itoophiyaa",
      mapDesc: "Finfinnee Kutaa Magaalaa Araadaa, Daandii Habtagiyoorgis irraa buufataalee qophii bunaa, naannoo albuudaa fi geejjiba addunyaa qindeessina."
    },
    quoteModal: {
      title: "Gatii Daldalaa Gaafadhaa",
      subtitle: "Oomisha, hamma barbaaddanii fi biyya geessitan guutaa; ogeeyyiin Kajo Group gatii madaalawaa isiniif dhiyeessu.",
      submitQuote: "Gaaffii Gatii Ergi"
    }
  }
};
