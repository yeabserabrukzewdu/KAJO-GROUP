export type PageKey = 'home' | 'story' | 'products' | 'contact' | 'logistics';

export function applySeoForPage(page: PageKey, language: string = 'en') {
  let title = "Kajo Group | Ethiopian Import, Export & Diverse Investments";
  let description = "Established in 1985 GC in Ethiopia, Kajo Group (and flagship trade arm illu Import Export) exports premium green bean coffee, spices, pulses, oilseeds, and lithium ore worldwide.";

  if (language === 'ar') {
    switch (page) {
      case 'home':
        title = "مجموعة كاجو (Kajo Group) | الاستيراد والتصدير والاستثمارات المتنوعة في إثيوبيا";
        description = "تأسست عام 1985م في إثيوبيا، وتتخصص مجموعة كاجو (وشركة إيلو للاستيراد والتصدير) في تصدير البن الأخضر، والتوابل والبقوليات والبذور الزيتية، وخام الليثيوم عالمياً.";
        break;
      case 'story':
        title = "قصتنا ورؤيتنا | مجموعة كاجو (Kajo Group)";
        description = "سفراء التراث الإثيوبي منذ عام 1985م بقيادة المؤسس السيد خليفة أباجورجا. تعرف على رسالتنا ورؤيتنا وقيمنا الأساسية العشر.";
        break;
      case 'products':
        title = "التميز في التصدير | مجموعة كاجو (Kajo Group)";
        description = "اكتشف ركائز التصدير لدى مجموعة كاجو: البن الأخضر الإثيوبي الفاخر، التوابل والبقوليات والبذور الزيتية، وخام الليثيوم للأسواق العالمية.";
        break;
      case 'logistics':
        title = "الاستثمارات المتنوعة واللوجستيات | مجموعة كاجو";
        description = "عشرة قطاعات استثمارية استراتيجية تشمل معالجة البن، الأدوية والمستلزمات الطبية، الشحن، الفنادق والعقارات، التصنيع، البناء، وحلول الحاسب.";
        break;
      case 'contact':
        title = "اتصل بنا | مجموعة كاجو • إيلو للاستيراد والتصدير";
        description = "تواصل مع مقرنا الرئيسي في أرادا، شارع هبتي جيورجيس، أديس أبابا، إثيوبيا (+251 11 70 60 50 | info@illuimportexport.com).";
        break;
    }
  } else if (language === 'am') {
    switch (page) {
      case 'home':
        title = "ካጆ ግሩፕ (Kajo Group) | የኢትዮጵያ አስመጪ፣ ላኪ እና ዘርፈ-ብዙ ኢንቨስትመንት";
        description = "ከ1985 ዓ.ም (GC) ጀምሮ በኢትዮጵያ የተመሰረተው ካጆ ግሩፕ (ኢሉ አስመጪ እና ላኪ) ጥራት ያለው አረንጓዴ ቡና፣ ቅመማ ቅመም፣ ጥራጥሬ፣ የቅባት እህሎች እና የሊቲየም ማዕድን ለዓለም ገበያ ያቀርባል።";
        break;
      case 'story':
        title = "ታሪካችን፣ ተልዕኮ እና ራዕይ | ካጆ ግሩፕ";
        description = "በመስራቹ አቶ ከሊፋ አባጆርጋ የሚመራው የካጆ ግሩፕ የ40+ ዓመታት የንግድ ልህቀት፣ 10 እሴቶች እና የአመራር ፍልስፍና።";
        break;
      case 'products':
        title = "የኤክስፖርት ልህቀት | ካጆ ግሩፕ";
        description = "የኢትዮጵያ አረንጓዴ ቡና፣ ቅመማ ቅመም፣ ጥራጥሬና የቅባት እህሎች እንዲሁም የሊቲየም ማዕድን (Lithium Ore) ኤክስፖርት።";
        break;
      case 'logistics':
        title = "ዘርፈ-ብዙ ኢንቨስትመንቶች | ካጆ ግሩፕ";
        description = "በቡና ማቀነባበሪያ፣ በመድኃኒት ስርጭት፣ በጭነት ትራንስፖርት፣ በሆቴል፣ በማኑፋክቸሪንግ፣ በኮንስትራክሽን እና በአይቲ ዘርፎች የተሰማራ።";
        break;
      case 'contact':
        title = "ያግኙን | ካጆ ግሩፕ • አዲስ አበባ፣ ኢትዮጵያ";
        description = "አራዳ ክፍለ ከተማ፣ ሀብተጊዮርጊስ ጎዳና፣ አዲስ አበባ፣ ኢትዮጵያ | ስልክ፡ +251 11 70 60 50 | info@illuimportexport.com";
        break;
    }
  } else if (language === 'om') {
    switch (page) {
      case 'home':
        title = "Kajo Group | Daldala Alaa, Galchifataa fi Investimantii Adda Addaa";
        description = "Bara 1985 GC kan hundeeffame Kajo Group (illu Import Export) buna magariisa, mi'eessituu, midhaan dibataa fi Lithium Ore gara gabaa addunyaatti erga.";
        break;
      case 'story':
        title = "Seenaa, Ergama & Mul'ata Keenya | Kajo Group";
        description = "Hundeessaa Obbo Kelifa Abajorga jalatti waggoota 40 oliif daldala addunyaa fi misooma Itoophiyaa keessatti adda duree.";
        break;
      case 'products':
        title = "Oomishaalee Al-ergii Olaanaa | Kajo Group";
        description = "Buna magariisa qulqulluu, mi'eessituu, midhaan agadaa fi zayitaa, akkasumas Lithium Ore sadarkaa addunyaa guutu.";
        break;
      case 'logistics':
        title = "Investimantii Adda Addaa | Kajo Group";
        description = " Dameewwan investimantii 10: qopheessuu bunaa, qoricha, geejjiba fe'umsaa, hoteela, warshaa, ijaarsa fi IT.";
        break;
      case 'contact':
        title = "Nu Quunnamaa | Kajo Group • Finfinnee, Itoophiyaa";
        description = "Kutaa Magaalaa Araadaa, Daandii Habtagiyoorgis, Finfinnee, Itoophiyaa | +251 11 70 60 50 | info@illuimportexport.com";
        break;
    }
  } else {
    switch (page) {
      case 'home':
        title = "Kajo Group | Ethiopian Import, Export & Diverse Investments";
        description = "Established in 1985 GC in Ethiopia, Kajo Group (and flagship trade arm illu Import Export) exports premium green bean coffee, spices, pulses, oilseeds, and lithium ore worldwide.";
        break;
      case 'story':
        title = "About Us, Mission & Founder's Message | Kajo Group";
        description = "Founded in 1985 GC by Mr. Kelifa Abajorga as Kajo Import Export and expanded with illu Import Export—discover our mission, vision, 10 core values, and leadership.";
        break;
      case 'products':
        title = "Export Excellence | Coffee, Spices, Oilseeds & Lithium Ore | Kajo Group";
        description = "Explore Kajo Group's core export pillars: Ethiopian Green Bean Coffee, Spices, Pulses & Oilseeds, and Lithium Ore backed by rigorous quality control.";
        break;
      case 'logistics':
        title = "Diverse Investments & Freight Operations | Kajo Group";
        description = "Discover Kajo Group's 10 diversified business divisions across coffee processing, pharmaceuticals, global freight, hospitality, manufacturing, construction, property, and IT.";
        break;
      case 'contact':
        title = "Contact Kajo Group | Arada Sub City, Addis Ababa, Ethiopia";
        description = "Connect with Kajo Group (illu Import Export) at Arada Sub City, Habtegiorgis Street, Addis Ababa, Ethiopia. Tel: +251 11 70 60 50 | info@illuimportexport.com.";
        break;
    }
  }

  document.title = title;

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);

  const jsonLdScript = document.getElementById('structured-data-jsonld');
  if (jsonLdScript) {
    try {
      const baseUrl = "https://www.illuimportexport.com";
      const pageUrl = page === 'home' ? `${baseUrl}/` : `${baseUrl}/${page}`;

      let homeLabel = "Home";
      let pageLabel =
        page === 'story'
          ? 'Our Story'
          : page === 'products'
          ? 'Export Excellence'
          : page === 'logistics'
          ? 'Diverse Investments'
          : page === 'contact'
          ? 'Contact'
          : 'Home';

      if (language === 'ar') {
        homeLabel = "الرئيسية";
        if (page === 'story') pageLabel = "قصتنا";
        else if (page === 'products') pageLabel = "التميز في التصدير";
        else if (page === 'logistics') pageLabel = "الاستثمارات المتنوعة";
        else if (page === 'contact') pageLabel = "اتصل بنا";
      } else if (language === 'am') {
        homeLabel = "መነሻ";
        if (page === 'story') pageLabel = "ስለ እኛ";
        else if (page === 'products') pageLabel = "ኤክስፖርት";
        else if (page === 'logistics') pageLabel = "ኢንቨስትመንቶች";
        else if (page === 'contact') pageLabel = "ያግኙን";
      } else if (language === 'om') {
        homeLabel = "Mana";
        if (page === 'story') pageLabel = "Seenaa Keenya";
        else if (page === 'products') pageLabel = "Al-ergii";
        else if (page === 'logistics') pageLabel = "Investimantii";
        else if (page === 'contact') pageLabel = "Quunnamaa";
      }

      let webPageType = "WebPage";
      if (page === 'story') webPageType = "AboutPage";
      else if (page === 'products') webPageType = "CollectionPage";
      else if (page === 'contact') webPageType = "ContactPage";

      const breadcrumbListElement = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": homeLabel,
          "item": `${baseUrl}/`
        }
      ];

      if (page !== 'home') {
        breadcrumbListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": pageLabel,
          "item": pageUrl
        });
      }

      const organizationNode = {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Kajo Group (illu Import Export)",
        "foundingDate": "1985",
        "founder": {
          "@type": "Person",
          "name": "Mr. Kelifa Abajorga"
        },
        "url": baseUrl,
        "description": description,
        "slogan": "Ambassadors of Ethiopian heritage on the global stage",
        "logo": `${baseUrl}/kajo-logo.svg`,
        "image": `${baseUrl}/og-image.svg`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Arada Sub City, Habtegiorgis Street",
          "addressLocality": "Addis Ababa",
          "addressCountry": "ET"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+251-11-70-60-50",
            "contactType": "sales",
            "email": "info@illuimportexport.com",
            "areaServed": "Worldwide",
            "availableLanguage": ["English", "Amharic", "Arabic", "Oromo"]
          }
        ],
        "areaServed": "Worldwide",
        "knowsAbout": [
          "Ethiopian green bean coffee",
          "Ethiopian spices export",
          "pulses and oilseeds export",
          "lithium ore export",
          "pharmaceutical and medical supplies distribution",
          "freight services",
          "hospitality and property management",
          "manufacturing and construction",
          "enterprise computer solutions"
        ]
      };

      const websiteNode = {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Kajo Group",
        "description": description,
        "publisher": {
          "@id": `${baseUrl}/#organization`
        }
      };

      const webpageNode = {
        "@type": webPageType,
        "@id": `${pageUrl}#page`,
        "url": pageUrl,
        "name": title,
        "description": description,
        "inLanguage": language === 'ar' ? 'ar' : language === 'am' ? 'am' : language === 'om' ? 'om' : 'en-US',
        "isPartOf": {
          "@id": `${baseUrl}/#website`
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbListElement
        }
      };

      const newSchema = {
        "@context": "https://schema.org",
        "@graph": [organizationNode, websiteNode, webpageNode]
      };

      jsonLdScript.textContent = JSON.stringify(newSchema);
    } catch (e) {
      console.error('Error updating JSON-LD schema dynamically:', e);
    }
  }
}
