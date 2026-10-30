import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  Sparkles,
  Search,
  X,
  FileText,
  ShieldCheck,
  MessageCircle,
  Building2,
  Globe2,
  Award
} from 'lucide-react';
import { useTranslation } from '../LanguageContext';
import { DIVERSE_INVESTMENTS, WHY_KAJO_ITEMS } from '../data';
import { InvestmentDivision } from '../types';

interface LogisticsPageProps {
  onRequestQuote: () => void;
}

const SECTORS = [
  'ALL',
  'Agro-Processing',
  'Healthcare & FMCG',
  'Logistics & Trade',
  'Hospitality & Real Estate',
  'Industrial & Tech'
] as const;

export default function LogisticsPage({ onRequestQuote }: LogisticsPageProps) {
  const { language } = useTranslation();
  const [selectedSector, setSelectedSector] = useState<string>('ALL');
  const [activeDivisionId, setActiveDivisionId] = useState<string>(DIVERSE_INVESTMENTS[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);

  const filteredDivisions = DIVERSE_INVESTMENTS.filter((item) => {
    const matchesSector = selectedSector === 'ALL' || item.sector === selectedSector;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.tagline.toLowerCase().includes(q) ||
      item.sector.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q);
    return matchesSector && matchesSearch;
  });

  const activeDivision: InvestmentDivision =
    DIVERSE_INVESTMENTS.find((d) => d.id === activeDivisionId) || DIVERSE_INVESTMENTS[0];

  const getSectorCount = (sector: string) => {
    if (sector === 'ALL') return DIVERSE_INVESTMENTS.length;
    return DIVERSE_INVESTMENTS.filter((d) => d.sector === sector).length;
  };

  return (
    <div className="bg-[#F6F1E7]">
      {/* SECTION 1: STRATEGIC DIVERSIFICATION OVERVIEW (PDF Page 8) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className={`lg:col-span-7 space-y-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <span className="font-sans font-extrabold text-[11px] tracking-[0.3em] text-[#4A5D23] uppercase block">
              KAJO GROUP • DIVERSE INVESTMENTS
            </span>
            <h2 className="font-display font-light text-[#2E1E15] tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-tight">
              One Trusted Partner Across Ten Strategic Industries
            </h2>
            <p className="font-sans text-[#634838] text-sm sm:text-base leading-relaxed">
              Beyond our international export leadership under illu Import Export, Kajo Group operates a resilient, vertically integrated ecosystem of ten specialized business lines across Ethiopia—driving job creation, healthcare access, infrastructure growth, and lower-cost availability of essential goods and services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4A5D23] shrink-0 mt-0.5" />
                <span className="text-xs text-[#4A3325] font-bold tracking-tight uppercase">
                  Owned Coffee Washing, Dry Hulling & Warehouses
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4A5D23] shrink-0 mt-0.5" />
                <span className="text-xs text-[#4A3325] font-bold tracking-tight uppercase">
                  Pharmaceutical, Medical & Beverage Distribution
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4A5D23] shrink-0 mt-0.5" />
                <span className="text-xs text-[#4A3325] font-bold tracking-tight uppercase">
                  Hotel, Executive Apartments & Property Management
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4A5D23] shrink-0 mt-0.5" />
                <span className="text-xs text-[#4A3325] font-bold tracking-tight uppercase">
                  Freight Services, Manufacturing, Construction & IT
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Executive Metrics Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`lg:col-span-5 bg-[#2E1E15] p-8 text-[#FAF7F0] border border-[#4A3325] border-t-4 border-t-[#6B8238] shadow-2xl relative ${language === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(#FAF7F008_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <span className="font-mono text-[9px] text-[#A8B986] tracking-[0.3em] uppercase block mb-4">
              KAJO GROUP ENTERPRISE FOOTPRINT
            </span>
            <h3 className="font-display font-light text-2xl tracking-tight uppercase mb-8 border-b border-[#FAF7F0]/15 pb-4">
              Multi-Sector Synergies
            </h3>

            <div className="space-y-6">
              <div>
                <span className="font-display font-light text-3xl text-[#FAF7F0] block tabular-nums">10 Divisions</span>
                <span className="text-[10px] font-sans font-bold text-[#C9B699] tracking-wider uppercase block mt-1">
                  Integrated Business Portfolio
                </span>
                <p className="text-[11px] text-[#DFD3BF]/85 mt-1 leading-relaxed">
                  Uniting agro-processing, healthcare, freight, hospitality, real estate, construction, manufacturing, and enterprise IT.
                </p>
              </div>

              <div className="border-t border-[#FAF7F0]/12 pt-6">
                <span className="font-display font-light text-3xl text-[#FAF7F0] block tabular-nums">Since 1985 GC</span>
                <span className="text-[10px] font-sans font-bold text-[#C9B699] tracking-wider uppercase block mt-1">
                  Four Decades of Proven Reliability
                </span>
                <p className="text-[11px] text-[#DFD3BF]/85 mt-1 leading-relaxed">
                  Founded as Kajo Import Export and strengthened in 2012 GC through our global trading arm illu Import Export.
                </p>
              </div>

              <div className="border-t border-[#FAF7F0]/12 pt-6">
                <span className="font-display font-light text-3xl text-[#A8B986] block">End-to-End</span>
                <span className="text-[10px] font-sans font-bold text-[#C9B699] tracking-wider uppercase block mt-1">
                  Owned Supply Chain Infrastructure
                </span>
                <p className="text-[11px] text-[#DFD3BF]/85 mt-1 leading-relaxed">
                  Direct control over washing stations, dry hulling plants, central warehouses, and freight logistics.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: 10 BUSINESS DIVISIONS INTERACTIVE PORTFOLIO (PDF Page 8) */}
      <section className="py-24 bg-[#ECE3D3]/55 border-t border-b border-[#DCD0BC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-sans font-extrabold text-[11px] tracking-[0.3em] text-[#4A5D23] uppercase block mb-3">
              PORTFOLIO DIRECTORY
            </span>
            <h2 className="font-display font-light text-[#2E1E15] tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-4">
              Explore Our 10 Business Lines
            </h2>
            <p className="font-sans text-[#634838] text-sm leading-relaxed mb-8">
              Filter by industry sector or inspect any division below to explore Kajo Group’s operational capabilities and partnership opportunities.
            </p>

            {/* Search & Sector Filter Bar */}
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#7D6352]">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pharmaceuticals, freight, hotel, coffee, IT..."
                  className="w-full py-3.5 pl-11 pr-10 bg-[#FAF7F0] hover:bg-[#FAF7F0] focus:bg-[#FAF7F0] border border-[#DCD0BC] rounded-lg text-[#2E1E15] placeholder:text-[#7D6352]/80 text-xs font-sans tracking-wide transition-all focus:outline-none focus:ring-1 focus:ring-[#4A5D23] focus:border-[#4A5D23] shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-4 flex items-center text-[#7D6352] hover:text-[#2E1E15] transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Sector Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {SECTORS.map((sector) => {
                  const count = getSectorCount(sector);
                  return (
                    <button
                      key={sector}
                      onClick={() => {
                        setSelectedSector(sector);
                        const firstMatch = DIVERSE_INVESTMENTS.find(
                          (d) => sector === 'ALL' || d.sector === sector
                        );
                        if (firstMatch) setActiveDivisionId(firstMatch.id);
                      }}
                      className={`px-4 py-2 border font-sans font-bold text-[10px] tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 rounded-sm cursor-pointer ${
                        selectedSector === sector
                          ? 'bg-[#4A5D23] text-[#FAF7F0] border-[#4A5D23] shadow-md'
                          : 'bg-[#FAF7F0] text-[#4A3325] border-[#DCD0BC] hover:border-[#4A5D23]'
                      }`}
                    >
                      <span>{sector}</span>
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded-sm font-mono font-bold tabular-nums ${
                          selectedSector === sector
                            ? 'bg-[#FAF7F0]/20 text-[#FAF7F0]'
                            : 'bg-[#ECE3D3] text-[#4A3325]'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divisions Grid */}
          {filteredDivisions.length === 0 ? (
            <div className="text-center py-16 px-4 bg-[#FAF7F0] border border-[#DCD0BC] rounded-2xl max-w-lg mx-auto">
              <div className="w-12 h-12 bg-[#ECE3D3] rounded-full flex items-center justify-center mx-auto mb-4 text-[#634838]">
                <Search className="w-5 h-5" />
              </div>
              <p className="font-sans text-[#634838] text-xs leading-relaxed uppercase tracking-wider font-bold">
                No matching business divisions found.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSector('ALL');
                }}
                className="mt-4 px-4 py-2 bg-[#4A5D23] hover:bg-[#39481A] text-[#FAF7F0] font-sans font-bold text-[9px] tracking-widest uppercase rounded-sm transition-all cursor-pointer"
              >
                Show All 10 Divisions
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDivisions.map((division, idx) => (
                <motion.div
                  key={division.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.35) }}
                  className="bg-[#FAF7F0] border border-[#DCD0BC] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group relative"
                >
                  {/* Card Image */}
                  <div
                    onClick={() => {
                      setActiveDivisionId(division.id);
                      setIsDetailModalOpen(true);
                    }}
                    className="relative h-52 overflow-hidden bg-[#ECE3D3] cursor-pointer"
                  >
                    <img
                      src={division.image}
                      alt={division.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute top-3 left-3 flex flex-col gap-1 pointer-events-none">
                      <span className="text-[8.5px] font-mono tracking-widest text-[#39481A] bg-[#EAEEE0]/95 border border-[#4A5D23]/25 px-2.5 py-0.5 uppercase font-bold rounded-sm shadow-xs">
                        {division.sector}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/30 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <span className="text-[9px] font-sans font-extrabold tracking-[0.2em] text-[#4A5D23] uppercase block mb-1 tabular-nums">
                      DIVISION 0{DIVERSE_INVESTMENTS.findIndex((d) => d.id === division.id) + 1}
                    </span>

                    <h3
                      onClick={() => {
                        setActiveDivisionId(division.id);
                        setIsDetailModalOpen(true);
                      }}
                      className="font-display font-bold text-lg text-[#2E1E15] hover:text-[#4A5D23] transition-colors duration-200 cursor-pointer leading-snug"
                    >
                      {division.name}
                    </h3>

                    <p className="text-xs text-[#634838] mt-2 line-clamp-2 leading-relaxed">
                      {division.description}
                    </p>

                    {/* Micro Metrics */}
                    <div className="grid grid-cols-3 gap-1 py-2.5 px-2 bg-[#F6F1E7] border border-[#DCD0BC] rounded-lg my-4 text-center">
                      <div className="border-r border-[#DCD0BC]">
                        <span className="text-[7.5px] font-sans font-extrabold text-[#7D6352] tracking-wider uppercase block">
                          Scope
                        </span>
                        <span className="font-display font-bold text-[11px] text-[#2E1E15] block mt-0.5 truncate px-1">
                          {division.scaleMetric}
                        </span>
                      </div>
                      <div className="border-r border-[#DCD0BC]">
                        <span className="text-[7.5px] font-sans font-extrabold text-[#7D6352] tracking-wider uppercase block">
                          Focus
                        </span>
                        <span className="font-display font-bold text-[11px] text-[#2E1E15] block mt-0.5 truncate px-1">
                          {division.focusMetric}
                        </span>
                      </div>
                      <div>
                        <span className="text-[7.5px] font-sans font-extrabold text-[#7D6352] tracking-wider uppercase block">
                          Standing
                        </span>
                        <span className="font-display font-bold text-[11px] text-[#4A5D23] block mt-0.5 truncate px-1">
                          {division.statusMetric}
                        </span>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="grid grid-cols-2 gap-2 mt-auto pt-2">
                      <button
                        onClick={() => {
                          setActiveDivisionId(division.id);
                          setIsDetailModalOpen(true);
                        }}
                        className="py-2.5 px-3 bg-[#ECE3D3] hover:bg-[#DCD0BC] border border-[#DCD0BC] text-[#2E1E15] font-sans font-bold text-[9px] tracking-wider uppercase rounded-lg transition-all text-center cursor-pointer"
                      >
                        View Overview
                      </button>
                      <button
                        onClick={onRequestQuote}
                        className="py-2.5 px-3 bg-[#4A5D23] hover:bg-[#39481A] text-[#FAF7F0] font-sans font-bold text-[9px] tracking-wider uppercase rounded-lg transition-all shadow-sm hover:shadow-md text-center cursor-pointer"
                      >
                        Partner Inquiry
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* IMMERSIVE DIVISION DETAIL MODAL */}
      <AnimatePresence>
        {isDetailModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDetailModalOpen(false)}
              className="fixed inset-0 bg-[#241710]/80 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-[#FAF7F0] rounded-3xl w-full max-w-4xl shadow-2xl relative z-10 overflow-hidden border border-[#DCD0BC]"
            >
              {/* Image Banner */}
              <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-[#ECE3D3]">
                <img
                  src={activeDivision.image}
                  alt={activeDivision.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/92 via-[#2E1E15]/45 to-transparent" />

                <button
                  onClick={() => setIsDetailModalOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#241710]/45 hover:bg-[#241710]/70 text-[#FAF7F0] backdrop-blur-md border border-[#FAF7F0]/25 flex items-center justify-center transition-colors shadow-lg z-20 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6 text-left z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm border border-[#A8B986]/35 bg-[#4A5D23]/80 text-[#FAF7F0] backdrop-blur-md text-[9px] font-bold uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Kajo Group • {activeDivision.sector}
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#FAF7F0] tracking-tight">
                    {activeDivision.name}
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#EFE7D8] font-medium mt-1 uppercase tracking-widest">
                    {activeDivision.tagline}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 max-h-[calc(100vh-24rem)] overflow-y-auto text-left">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-7 space-y-6">
                    <div>
                      <h4 className="font-display font-bold text-base text-[#2E1E15] mb-2 uppercase tracking-wider">
                        Division Overview
                      </h4>
                      <p className="font-sans text-[#4A3325] text-sm leading-relaxed">
                        {activeDivision.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <h4 className="font-display font-bold text-base text-[#2E1E15] uppercase tracking-wider">
                        Operational Capabilities
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {activeDivision.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-2.5">
                            <Sparkles className="w-4 h-4 text-[#4A5D23] shrink-0 mt-0.5" />
                            <span className="text-xs text-[#634838] leading-relaxed font-sans">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 space-y-6">
                    <div className="bg-[#F6F1E7] rounded-2xl border border-[#DCD0BC] p-5 sm:p-6 shadow-xs">
                      <h4 className="font-display font-bold text-sm text-[#2E1E15] mb-4 inline-flex items-center gap-2 uppercase tracking-wider">
                        <FileText className="w-4 h-4 text-[#4A5D23]" />
                        Division Profile
                      </h4>

                      <div className="space-y-3 font-sans text-xs">
                        <div className="flex flex-col border-b border-[#DCD0BC] pb-2.5">
                          <span className="text-[#7D6352] font-bold uppercase tracking-widest text-[8.5px]">
                            Operational Scope
                          </span>
                          <span className="text-[#2E1E15] font-display font-bold mt-1 text-sm">
                            {activeDivision.scaleMetric}
                          </span>
                        </div>
                        <div className="flex flex-col border-b border-[#DCD0BC] pb-2.5">
                          <span className="text-[#7D6352] font-bold uppercase tracking-widest text-[8.5px]">
                            Core Specialization
                          </span>
                          <span className="text-[#2E1E15] font-display font-bold mt-1 text-sm">
                            {activeDivision.focusMetric}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#7D6352] font-bold uppercase tracking-widest text-[8.5px]">
                            Operational Standing
                          </span>
                          <span className="text-[#4A5D23] font-display font-bold mt-1 text-sm">
                            {activeDivision.statusMetric}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#2E1E15] text-[#FAF7F0] rounded-2xl p-5 sm:p-6 border border-[#4A3325] shadow-sm relative overflow-hidden">
                      <h4 className="font-display font-bold text-sm text-[#FAF7F0] uppercase tracking-wider">
                        Connect With Division Desk
                      </h4>
                      <p className="font-sans text-[11px] text-[#DFD3BF] mt-1 leading-relaxed">
                        Partner with Kajo Group for bulk distribution, freight coordination, commercial leasing, or institutional supply contracts.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5">
                        <button
                          onClick={() => {
                            setIsDetailModalOpen(false);
                            onRequestQuote();
                          }}
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-[#4A5D23] hover:bg-[#39481A] rounded-xl text-[#FAF7F0] font-sans font-bold text-[9px] tracking-widest uppercase transition-all duration-300 shadow-md cursor-pointer"
                        >
                          <span>Request Proposal</span>
                          <FileText className="w-3.5 h-3.5" />
                        </button>
                        <a
                          href="tel:+25111706050"
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-[#4A3325] hover:bg-[#634838] border border-[#FAF7F0]/15 rounded-xl text-[#FAF7F0] font-sans font-bold text-[9px] tracking-widest uppercase transition-all duration-300 shadow-md"
                        >
                          <span>+251 11 70 60 50</span>
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SECTION 3: WHY KAJO GROUP / ILLU IMPORT EXPORT? (PDF Page 9) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl mb-16">
          <span className="font-sans font-extrabold text-[11px] tracking-[0.3em] text-[#4A5D23] uppercase block mb-3">
            STRATEGIC ADVANTAGES
          </span>
          <h2 className="font-display font-light text-[#2E1E15] tracking-tight text-3xl sm:text-4xl lg:text-5xl">
            Why Partner With Kajo Group?
          </h2>
          <p className="font-sans text-[#634838] text-sm leading-relaxed mt-4">
            Choosing Kajo Group and illu Import Export means partnering with a dynamic, ethical, and forward-thinking enterprise dedicated to mutual global prosperity since 1985 GC.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_KAJO_ITEMS.map((item, idx) => (
            <div key={item.title} className="border border-[#DCD0BC] p-7 bg-[#FAF7F0] space-y-3 hover:bg-[#ECE3D3]/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#EAEEE0] border border-[#4A5D23]/20 text-[#4A5D23] flex items-center justify-center">
                {idx % 3 === 0 ? (
                  <Award className="w-4 h-4" />
                ) : idx % 3 === 1 ? (
                  <Building2 className="w-4 h-4" />
                ) : (
                  <Globe2 className="w-4 h-4" />
                )}
              </div>
              <h4 className="font-display font-bold text-lg text-[#2E1E15] leading-snug">
                {item.title}
              </h4>
              <p className="font-sans text-xs text-[#634838] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
