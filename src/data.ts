import {
  ProductDetail,
  StatItem,
  CoreValueItem,
  QualityPrinciple,
  WhyKajoItem,
  InvestmentDivision,
} from './types';
import { ASSET_IMAGES } from './assets';

export const STATS: StatItem[] = [
  {
    id: 'heritage',
    value: '1985',
    label: 'Established (GC)',
    description: 'Four decades of continuous international trade heritage founded under Kajo Import Export in Ethiopia.'
  },
  {
    id: 'investments',
    value: '10',
    label: 'Business Divisions',
    description: 'Strategically diversified across agro-processing, healthcare, freight, hospitality, construction, manufacturing, and IT.'
  },
  {
    id: 'quality',
    value: '100%',
    label: 'Quality Assurance',
    description: 'Owned coffee washing stations, dry hulling plants, and central warehouses enforcing strict export standards.'
  }
];

export const PRODUCTS: ProductDetail[] = [
  {
    id: 'coffee',
    name: 'Green Bean Coffee',
    tagline: 'Premium Ethiopian origin washed and natural green bean Arabica coffee exported to international markets.',
    description: 'As a flagship export pillar of Kajo Group and illu Import Export, we specialize in procuring, processing, and exporting finest Ethiopian origin green bean coffee. Backed by our own washing stations, dry hulling facilities, and central coffee processing and warehouse facilities, we maintain end-to-end quality control, consistency, and uniform cup excellence from harvest to international port delivery.',
    image: ASSET_IMAGES.coffeeExport,
    color: 'coffee',
    accentColor: '#4A3325',
    specifications: [
      { label: 'Origin Regions', value: 'Illubabor, Jimma, Sidamo, Yirgacheffe, Guji, Limu & Harrar' },
      { label: 'Processing Infrastructure', value: 'Owned Washing Stations, Dry Hulling & Central Warehouses' },
      { label: 'Moisture Content', value: '10.5% – 11.8% Strictly Controlled' },
      { label: 'Export Grades', value: 'Specialty Grade 1 & 2 | Commercial Grade 3 to 5' },
      { label: 'Screen Sizing', value: 'Screen 14 – 18 Uniform Calibration' },
      { label: 'Packaging Standard', value: '60kg Export Jute Bags with GrainPro Hermetic Liners' }
    ],
    varieties: [
      { name: 'Washed Highland Arabica', description: 'Clean, bright, and complex green beans processed at our dedicated wet washing stations—renowned for floral aromatics and crisp citrus notes.' },
      { name: 'Sun-Dried Natural Arabica', description: 'Slow-cured on raised drying beds and milled at our dry hulling facilities for rich body, sweet berry undertones, and uniform bean density.' },
      { name: 'Illubabor & Jimma Forest Lots', description: 'Signature southwestern Ethiopian green bean coffees cherished by global roasters for balanced chocolaty sweetness and remarkable consistency.' },
      { name: 'Specialty Single-Origin Micro-Lots', description: 'Rigorously cupped and traceable lots meeting stringent specialty roasting specifications across Europe, Asia, the Middle East, and North America.' }
    ],
    features: [
      'Direct ownership of coffee washing stations, dry hulling plants, and conditioning warehouses',
      'Rigorous multi-stage cupping, moisture verification, and physical defect screening from harvest to packaging',
      'Ethical and sustainable sourcing supporting Ethiopian coffee farming communities and ecosystems',
      'Consistent flavor profile and export-grade reliability tailored for international roasters and wholesalers'
    ]
  },
  {
    id: 'pulses',
    name: 'Spices, Pulses, and Oilseeds',
    tagline: 'Superior-quality Ethiopian origin spices, pulses, and high-purity oilseeds procured with advanced techniques.',
    description: 'Our export expertise extends deeply into Ethiopian spices, pulses, and oilseeds—globally recognized for their natural aroma, nutritional density, and superior organic purity. Combining four decades of domestic procurement knowledge with modern cleaning, grading, and warehouse conditioning techniques, Kajo Group delivers dependable bulk volumes to food processors, spice houses, and commodity importers worldwide.',
    image: ASSET_IMAGES.spicesPulsesExport,
    color: 'olive',
    accentColor: '#4A5D23',
    specifications: [
      { label: 'Oilseed Portfolio', value: 'Whitish Humera & Wollega Sesame, Niger Seeds (Noug), Soybeans' },
      { label: 'Pulses Portfolio', value: 'Green Mung Beans, Kabuli & Desi Chickpeas, Kidney & White Pea Beans' },
      { label: 'Spices Portfolio', value: 'Ethiopian Korarima, Black Cumin, Turmeric, Ginger & Red Chilies' },
      { label: 'Purity Level', value: '99.0% – 99.5%+ Machine Cleaned & Sortex Graded' },
      { label: 'Moisture Threshold', value: 'Under 6.5% (Oilseeds) | Under 12% (Pulses & Spices)' },
      { label: 'Phytosanitary Compliance', value: 'Full Laboratory Testing, Fumigation & Origin Certification' }
    ],
    varieties: [
      { name: 'Humera & Wollega Sesame Seeds', description: 'World-renowned Ethiopian white sesame prized for sweet nutty flavor, uniform seed size, and high natural oil content exceeding 50%.' },
      { name: 'Ethiopian Culinary & Extraction Spices', description: 'Aromatic highland Korarima (cardamom), black cumin (Nigella sativa), dried ginger, turmeric fingers, and vibrant capsicum varieties.' },
      { name: 'Export-Grade Pulses & Beans', description: 'Uniformly graded green mung beans, chickpeas, red kidney beans, white pea beans, and lentils calibrated for global food manufacturers.' },
      { name: 'Niger Seeds (Noug) & Oilseeds', description: 'Nutrient-rich Ethiopian oilseeds procured from prime agricultural belts and cleaned to strict international import tolerances.' }
    ],
    features: [
      'Deep procurement network across Ethiopia’s premier sesame, pulse, and spice producing regions',
      'Advanced cleaning, gravity separation, and optical sorting ensuring highest export purity standards',
      'Strict adherence to international food safety, moisture, and phytosanitary export regulations',
      'Flexible bulk containerization in new multi-layer polypropylene or food-grade jute export bags'
    ]
  },
  {
    id: 'lithium',
    name: 'Lithium Ore',
    tagline: 'At the forefront of Ethiopia’s lithium export sector, powering global electronics, EVs, and renewable energy.',
    description: 'Kajo Group stands at the forefront of the lithium export industry in Ethiopia, supplying a diverse range of high-grade lithium mineral products to meet surging international demand. Sourced responsibly from Ethiopia’s mineral-rich pegmatite belts, our lithium ore exports serve industrial partners across electronics manufacturing, electric vehicle (EV) battery supply chains, and utility-scale renewable energy storage.',
    image: ASSET_IMAGES.lithiumOreExport,
    color: 'espresso',
    accentColor: '#2E1E15',
    specifications: [
      { label: 'Mineral Classifications', value: 'Spodumene & Lepidolite Lithium-Bearing Pegmatite Ores' },
      { label: 'Target Industries', value: 'EV Battery Supply Chains, Consumer Electronics & Grid Energy Storage' },
      { label: 'Quality Verification', value: 'Independent Geochemical Assay & Grade Verification Pre-Shipment' },
      { label: 'Sizing & Preparation', value: 'Crushed, Screened & Bulk Graded to Buyer Metallurgical Specs' },
      { label: 'Export Logistics', value: 'Dedicated Heavy-Freight Corridor & Port Bulk/Container Dispatch' },
      { label: 'Regulatory Standing', value: 'Fully Licensed Ethiopian Mineral Export & Origin Documentation' }
    ],
    varieties: [
      { name: 'Spodumene Lithium Ore', description: 'High-grade hard-rock lithium aluminosilicate mineral prized for battery-grade lithium carbonate and lithium hydroxide refining.' },
      { name: 'Lepidolite Mineral Concentrates', description: 'Crystalline lithium-rich mica ore suited for specialized metallurgical extraction, ceramics, and advanced electronics applications.' },
      { name: 'Custom Industrial Ore Lots', description: 'Tailored particle sizing and verified Li2O grade lots prepared for international refiners and clean-energy supply chain partners.' }
    ],
    features: [
      'Pioneering position in Ethiopia’s strategic critical-minerals and lithium ore export corridor',
      'Comprehensive laboratory assay testing and transparent chemical composition certification per lot',
      'Integrated inland heavy freight transport via Kajo Group’s dedicated logistics infrastructure',
      'Responsible resource management aligned with our environmental stewardship and community values'
    ]
  }
];

export const CORE_VALUES: CoreValueItem[] = [
  {
    number: '01',
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty, ethics, and transparency in all our dealings—the foundation upon which we build trust with partners, clients, and stakeholders.'
  },
  {
    number: '02',
    title: 'Quality',
    description: 'We are committed to delivering products and services of the highest quality, consistently meeting and exceeding international customer expectations.'
  },
  {
    number: '03',
    title: 'Innovation',
    description: 'We embrace innovation as a driving force in our business, constantly seeking creative solutions to meet the evolving needs of our clients and markets.'
  },
  {
    number: '04',
    title: 'Customer-Centric',
    description: 'Our customers are at the heart of everything we do. We listen to their needs, respond promptly, and provide exceptional service to build long-lasting relationships.'
  },
  {
    number: '05',
    title: 'Social Responsibility',
    description: 'We believe in giving back to the community and contributing to social development, actively supporting initiatives that make a positive impact on society.'
  },
  {
    number: '06',
    title: 'Environmental Stewardship',
    description: 'We are dedicated to sustainable business practices that minimize our environmental footprint and promote responsible resource management.'
  },
  {
    number: '07',
    title: 'Teamwork',
    description: 'Collaboration and teamwork are integral to our success. We value and respect the diverse talents and perspectives of our team members.'
  },
  {
    number: '08',
    title: 'Adaptability',
    description: 'We thrive in dynamic environments and adapt to change with agility, staying ahead of industry trends and emerging global opportunities.'
  },
  {
    number: '09',
    title: 'Global Perspective',
    description: 'We embrace a global mindset, fostering international relationships and leveraging global opportunities for sustainable mutual growth.'
  },
  {
    number: '10',
    title: 'Continuous Improvement',
    description: 'We are committed to ongoing learning and improvement, always striving to enhance our processes, products, and services.'
  }
];

export const QUALITY_PRINCIPLES: QualityPrinciple[] = [
  {
    number: '01',
    title: 'Premium Sourcing',
    description: 'We meticulously select the finest Ethiopian coffee beans from premier highland origins, ensuring they meet our stringent quality standards.'
  },
  {
    number: '02',
    title: 'Rigorous Testing',
    description: 'Our coffee undergoes rigorous testing, moisture calibration, and quality control measures at every stage of production, from harvesting to packaging.'
  },
  {
    number: '03',
    title: 'Consistency',
    description: 'We maintain consistent quality across all our coffee varieties, ensuring a remarkable and uniform taste experience for our global customers.'
  },
  {
    number: '04',
    title: 'Sustainability',
    description: 'We prioritize sustainable farming practices and ethical sourcing to support both our natural environment and local farming communities.'
  },
  {
    number: '05',
    title: 'Customer Satisfaction',
    description: 'We are dedicated to exceeding customer expectations, offering a tailored premium coffee export experience that delights our international clientele.'
  },
  {
    number: '06',
    title: 'Continuous Improvement',
    description: 'We constantly seek opportunities to enhance our coffee production and processing facilities, staying at the forefront of industry innovation.'
  }
];

export const WHY_KAJO_ITEMS: WhyKajoItem[] = [
  {
    title: 'Proven Excellence Since 1985',
    description: 'With a rich history dating back to 1984/1985 GC under Kajo Import Export and strategic expansion as illu Import Export, we boast four decades of trusted global trade.'
  },
  {
    title: 'Diverse Multi-Sector Portfolio',
    description: 'Our extensive business portfolio spans 10 strategic sectors—offering a one-stop partner from international commodity trade to pharmaceuticals, manufacturing, hospitality, and IT.'
  },
  {
    title: 'Global Reach & Market Insight',
    description: 'Well-connected across international markets, our global perspective unlocks worldwide trade opportunities while contributing to Ethiopia’s economic growth.'
  },
  {
    title: 'Uncompromising Quality Assurance',
    description: 'Quality is at the core of everything we do—backed by owned coffee washing stations, dry hulling plants, central warehouses, and strict testing protocols.'
  },
  {
    title: 'Customer-Centric Execution',
    description: 'We prioritize customer satisfaction with responsive communication, dependable contract fulfillment, and tailored logistics solutions.'
  },
  {
    title: 'Innovation & Market Adaptability',
    description: 'Our culture of agility and innovation keeps us ahead of global commodity and industrial trends—from specialty coffee processing to lithium ore exports.'
  },
  {
    title: 'Corporate Social Responsibility',
    description: 'We actively invest in community welfare, healthcare distribution, job creation, and environmental sustainability across Ethiopia.'
  },
  {
    title: 'Experienced Visionary Leadership',
    description: 'Led by Founder Mr. Kelifa Abajorga and a highly educated, internationally experienced management team committed to excellence and integrity.'
  }
];

export const DIVERSE_INVESTMENTS: InvestmentDivision[] = [
  {
    id: 'coffee-processing-warehouse',
    sector: 'Agro-Processing',
    name: 'Coffee Processing & Warehouse Facility',
    tagline: 'Owned Processing & Conditioning Infrastructure',
    scaleMetric: 'Owned',
    focusMetric: 'QC & Grading',
    statusMetric: 'Export Ready',
    description: 'We own dedicated coffee processing and modern warehouse facilities, ensuring end-to-end quality control, climate-appropriate conditioning, and absolute consistency across all green bean coffee exports.',
    highlights: [
      'In-house color sorting, screen calibration, and export grading lines',
      'High-capacity ventilated storage preserving optimal green bean moisture',
      'Dedicated cupping and physical analysis laboratory on site',
      'Direct container stuffing and export dispatch supervision'
    ],
    image: '/6.webp'
  },
  {
    id: 'washing-dry-hulling',
    sector: 'Agro-Processing',
    name: 'Washing Station & Dry Hulling Facilities',
    tagline: 'Origin Wet & Dry Coffee Milling Stations',
    scaleMetric: 'Origin',
    focusMetric: 'Wet & Dry Mill',
    statusMetric: '100% Traceable',
    description: 'Our strategic upstream investment in coffee processing includes regional washing stations and dry hulling facilities, directly enhancing cup clarity, physical preparation, and traceability of our coffee products.',
    highlights: [
      'Eco-pulping and clean mountain-water fermentation tanks',
      'Raised African sun-drying beds for uniform parchment curing',
      'Precision dry hulling machinery minimizing bean breakage',
      'Direct partnership and fair value sharing with smallholder growers'
    ],
    image: '/5.webp'
  },
  {
    id: 'pharma-medical',
    sector: 'Healthcare & FMCG',
    name: 'Pharmaceutical & Medical Supplies Distribution',
    tagline: 'Healthcare Access & Medical Supply Chains',
    scaleMetric: 'National',
    focusMetric: 'Medical Grade',
    statusMetric: 'GDP Compliant',
    description: 'We are actively involved in the importation and distribution of essential pharmaceutical products and medical supplies across Ethiopia, contributing directly to improved healthcare access and clinical reliability.',
    highlights: [
      'Temperature-monitored storage and compliant pharmaceutical warehousing',
      'Distribution to hospitals, clinics, pharmacies, and healthcare institutions',
      'Partnerships with accredited international pharmaceutical manufacturers',
      'Strict regulatory adherence and batch-level traceability'
    ],
    image: ASSET_IMAGES.pharmaDistribution
  },
  {
    id: 'freight-services',
    sector: 'Logistics & Trade',
    name: 'Global & Inland Freight Services',
    tagline: 'Efficient Multimodal Movement of Goods',
    scaleMetric: 'Global',
    focusMetric: 'Land & Sea',
    statusMetric: 'End-to-End',
    description: 'We offer reliable, high-capacity freight services designed to facilitate the efficient, timely movement of export commodities and imported industrial goods along regional corridors and global shipping lanes.',
    highlights: [
      'Seamless inland haulage connecting Addis Ababa, origin mills, and Djibouti port',
      'Full container load (FCL), bulk mineral, and specialized cargo coordination',
      'Experienced customs documentation, port clearance, and transit management',
      'Real-time shipment coordination for international trade partners'
    ],
    image: '/14.webp'
  },
  {
    id: 'hotel-apartments',
    sector: 'Hospitality & Real Estate',
    name: 'Hotel and Executive Apartments',
    tagline: 'Premier Hospitality & Traveler Accommodations',
    scaleMetric: 'Hospitality',
    focusMetric: 'Full Service',
    statusMetric: 'Addis Ababa',
    description: 'Our hospitality division operates welcoming hotels and serviced executive apartments, offering comfortable, well-appointed accommodations tailored to international business travelers, diplomats, and tourists.',
    highlights: [
      'Prime urban locations with convenient access to commercial districts',
      'Short-stay hotel suites and long-stay executive serviced apartments',
      'Warm Ethiopian hospitality paired with modern international amenities',
      'Dedicated guest services, conferencing, and business support'
    ],
    image: ASSET_IMAGES.hospitalityProperty
  },
  {
    id: 'manufacturing',
    sector: 'Industrial & Tech',
    name: 'Manufacturing Division',
    tagline: 'Domestic Industrial Production & Value Addition',
    scaleMetric: 'Industrial',
    focusMetric: 'High Output',
    statusMetric: 'ISO Aligned',
    description: 'Our manufacturing division ensures the reliable domestic production of high-quality industrial and consumer products engineered to meet growing Ethiopian and regional market demands while creating local employment.',
    highlights: [
      'Modern production lines focused on operational efficiency and durability',
      'Making essential goods accessible at competitive lower costs',
      'Strict quality control from raw material intake to finished output',
      'Supporting Ethiopia’s industrial self-reliance and job creation'
    ],
    image: ASSET_IMAGES.geshaProcessingPlant
  },
  {
    id: 'construction',
    sector: 'Industrial & Tech',
    name: 'Construction Business Line',
    tagline: 'Infrastructure & Commercial Development',
    scaleMetric: 'Civil & Bldg',
    focusMetric: 'Infrastructure',
    statusMetric: 'Active Projects',
    description: 'We engage in commercial, residential, and civil construction projects, contributing tangibly to urban modernization and critical infrastructure development across Ethiopia.',
    highlights: [
      'Commercial complexes, industrial warehouses, and residential developments',
      'Experienced civil engineers, project managers, and safety supervisors',
      'Timely project execution adhering to structural engineering codes',
      'Sustainable building practices and reliable material procurement'
    ],
    image: ASSET_IMAGES.ethiopianFarmLandscape
  },
  {
    id: 'rental-property',
    sector: 'Hospitality & Real Estate',
    name: 'Rental and Property Management',
    tagline: 'Commercial & Residential Portfolio Management',
    scaleMetric: 'Portfolio',
    focusMetric: 'Asset Mgmt',
    statusMetric: 'Full Lifecycle',
    description: 'We manage a diversified portfolio of commercial and residential properties, providing professional leasing, tenant relations, and comprehensive facility management services.',
    highlights: [
      'Prime commercial office, retail, warehouse, and residential leasing',
      'Preventive maintenance, security, and building operations management',
      'Long-term asset value preservation and high tenant retention',
      'Transparent administration for corporate and institutional tenants'
    ],
    image: ASSET_IMAGES.hospitalityProperty
  },
  {
    id: 'beverage-distribution',
    sector: 'Healthcare & FMCG',
    name: 'Beverage and Soft Drinks Distribution',
    tagline: 'High-Velocity Consumer Beverage Supply',
    scaleMetric: 'FMCG',
    focusMetric: 'Retail & Bulk',
    statusMetric: 'Wide Fleet',
    description: 'We operate a streamlined beverage and soft drinks distribution network, catering to diverse consumer preferences across retail, hospitality, and wholesale channels with dependable stock availability.',
    highlights: [
      'Dedicated distribution fleet ensuring rapid restocking across urban and regional hubs',
      'Organized warehousing and rotation for optimal product freshness',
      'Supplying supermarkets, hotels, restaurants, and wholesale distributors',
      'Consistent volume fulfillment during peak seasonal demand'
    ],
    image: ASSET_IMAGES.cargoLogistics
  },
  {
    id: 'computer-solution',
    sector: 'Industrial & Tech',
    name: 'Computer Solution & Enterprise IT',
    tagline: 'Top-Tier IT Hardware & Technology Solutions',
    scaleMetric: 'Enterprise',
    focusMetric: 'IT & Hardware',
    statusMetric: 'Tech Ready',
    description: 'Elevating enterprises with top-tier IT infrastructure, commercial computer products, and technology solutions—empowering businesses and institutions across Ethiopia to unleash their digital potential.',
    highlights: [
      'Supply of enterprise workstations, servers, networking gear, and peripherals',
      'Genuine hardware sourcing from recognized global technology brands',
      'IT consultation, deployment support, and corporate procurement packages',
      'Advancing technological modernization across Ethiopian enterprises'
    ],
    image: ASSET_IMAGES.pharmaDistribution
  }
];
