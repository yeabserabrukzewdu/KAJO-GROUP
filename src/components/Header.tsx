import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Phone, Mail, Globe } from 'lucide-react';
import { useTranslation } from '../LanguageContext';

interface HeaderProps {
  onRequestQuote: () => void;
  currentPage: string;
  onNavigate: (path: string) => void;
}

export default function Header({ onRequestQuote, currentPage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(href);
  };

  const navLinks = [
    { name: t.nav.estate, href: '/' },
    { name: t.nav.story, href: '/story' },
    { name: t.nav.products, href: '/products' },
    { name: t.nav.logistics, href: '/logistics' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-[#FAF7F0]/12 ${
        isScrolled
          ? 'bg-[#241710]/96 backdrop-blur-md shadow-2xl text-[#FAF7F0]'
          : 'bg-[#2E1E15]/80 backdrop-blur-[3px] text-[#FAF7F0]'
      }`}
    >
      {/* 1. Top Tier: Heritage & Direct Corporate Desk */}
      <div className="hidden lg:flex items-center justify-between h-[30px] px-8 sm:px-12 border-b border-[#FAF7F0]/10 text-[#DFD3BF]">
        <div className="flex items-center gap-4 text-[9px] font-sans tracking-[0.2em] uppercase font-bold">
          <span className="text-[#C9B699] font-mono tracking-[0.3em]">{t.common.directFarm}</span>
          <span className="text-[#FAF7F0]/25">•</span>
          <span className="text-[#A8B986]">{t.common.addisAbaba}</span>
        </div>
        <div className="flex items-center gap-6 text-[9.5px] font-mono tracking-wider text-[#DFD3BF]">
          <a href="tel:+25111706050" className="inline-flex items-center gap-1.5 hover:text-[#FAF7F0] transition-colors">
            <Phone className="w-3 h-3 text-[#A8B986]" />
            <span>+251 11 70 60 50</span>
          </a>
          <a href="mailto:info@illuimportexport.com" className="inline-flex items-center gap-1.5 hover:text-[#FAF7F0] transition-colors">
            <Mail className="w-3 h-3 text-[#A8B986]" />
            <span>info@illuimportexport.com</span>
          </a>
        </div>
      </div>

      {/* 2. Main Navigation Tier (Bottom Tier) */}
      <div className="h-[68px] flex items-center justify-between px-4 sm:px-8">
        {/* Left Side: Kajo Group Logo */}
        <div className="flex items-center h-full">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center group"
          >
            <img
              src="/kajo-logo.svg"
              alt="Kajo Group • illu Import Export Logo"
              referrerPolicy="no-referrer"
              className="h-12 sm:h-14 w-auto mr-3 object-contain"
            />
          </a>
        </div>

        {/* Right Side Content - Navigation buttons aligned on the right side */}
        <div className="hidden lg:flex items-stretch h-full">
          <nav className="flex items-stretch pr-6">
            {navLinks.map((link) => {
              const isActive =
                (currentPage === 'home' && link.href === '/') ||
                (currentPage === 'story' && link.href === '/story') ||
                (currentPage === 'products' && link.href === '/products') ||
                (currentPage === 'logistics' && link.href === '/logistics');

              return (
                <div key={link.name} className="relative flex items-stretch px-4">
                  {/* Top olive green bar active indicator */}
                  {isActive && (
                    <div className="absolute top-0 left-4 right-4 h-[3px] bg-[#6B8238]" />
                  )}
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center font-sans font-bold text-[10.5px] tracking-[0.25em] transition-colors duration-200 ${
                      isActive ? 'text-[#FAF7F0]' : 'text-[#DFD3BF] hover:text-[#FAF7F0]'
                    }`}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}
          </nav>

          {/* Request Quote - Solid Olive Green Box */}
          <div className="flex items-stretch">
            <button
              id="header-quote-btn"
              onClick={onRequestQuote}
              className="bg-[#4A5D23] hover:bg-[#39481A] px-7 h-full flex items-center justify-center font-sans font-bold text-[10.5px] tracking-[0.25em] text-[#FAF7F0] transition-all duration-300 uppercase cursor-pointer relative"
            >
              {t.common.requestQuote}
            </button>

            {/* Contact Link */}
            <div className="relative flex items-stretch px-6 border-l border-[#FAF7F0]/12">
              {currentPage === 'contact' && (
                <div className="absolute top-0 left-6 right-6 h-[3px] bg-[#6B8238]" />
              )}
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className={`flex items-center font-sans font-bold text-[10.5px] tracking-[0.25em] transition-colors duration-200 ${
                  currentPage === 'contact' ? 'text-[#FAF7F0]' : 'text-[#DFD3BF] hover:text-[#FAF7F0]'
                }`}
              >
                {t.nav.contact}
              </a>
            </div>

            {/* Language dropdown switcher */}
            <div className="relative flex items-center px-5 border-l border-[#FAF7F0]/12 text-[#DFD3BF] text-[10.5px] font-sans font-bold tracking-widest gap-1.5">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 hover:text-[#FAF7F0] transition-colors cursor-pointer uppercase h-full"
                aria-label="Change language"
              >
                <Globe className="w-3.5 h-3.5 text-[#A8B986]" />
                <span>{language.toUpperCase()}</span>
              </button>

              {isLangOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)} />
                  <div className="absolute top-[68px] right-0 w-36 bg-[#241710] border border-[#FAF7F0]/15 rounded-none shadow-2xl z-50 py-1 flex flex-col">
                    {(['en', 'ar', 'am', 'om'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setIsLangOpen(false);
                        }}
                        className={`px-4 py-2 text-[10.5px] tracking-wider uppercase hover:bg-[#38251A] transition-colors w-full cursor-pointer ${
                          language === 'ar' ? 'text-right' : 'text-left'
                        } ${
                          language === lang ? 'text-[#A8B986] font-extrabold bg-[#2E1E15]' : 'text-[#DFD3BF]'
                        }`}
                      >
                        {lang === 'en' ? 'English' : lang === 'ar' ? 'العربية' : lang === 'am' ? 'አማርኛ' : 'Oromoo'}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex lg:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 text-[#DFD3BF] hover:text-[#FAF7F0] transition-colors focus:outline-none"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[68px] bg-[#241710]/98 border-b border-[#4A3325] shadow-2xl transition-all duration-300 ease-in-out z-40 transform origin-top ${
          isOpen ? 'scale-y-100 opacity-100 pointer-events-auto' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-[#241710]/98">
          {[
            { name: t.nav.estate, href: '/' },
            { name: t.nav.story, href: '/story' },
            { name: t.nav.products, href: '/products' },
            { name: t.nav.logistics, href: '/logistics' },
            { name: t.nav.contact, href: '/contact' },
          ].map((link) => {
            const isActive =
              (currentPage === 'home' && link.href === '/') ||
              (currentPage === 'story' && link.href === '/story') ||
              (currentPage === 'products' && link.href === '/products') ||
              (currentPage === 'logistics' && link.href === '/logistics') ||
              (currentPage === 'contact' && link.href === '/contact');

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-4 py-3 font-sans font-bold text-xs tracking-widest transition-all duration-200 uppercase border ${
                  isActive
                    ? 'text-[#FAF7F0] bg-[#4A5D23]/30 border-[#6B8238]'
                    : 'text-[#DFD3BF] hover:text-[#FAF7F0] hover:bg-[#2E1E15] border-transparent'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          {/* Mobile Language Switcher */}
          <div className="pt-4 border-t border-[#FAF7F0]/10 px-4 flex flex-col gap-2">
            <span className="text-[10px] text-[#C9B699] font-sans tracking-widest flex items-center gap-2 uppercase">
              <Globe className="w-3.5 h-3.5 text-[#A8B986]" />
              Language / ቋንቋ / اللغة / Afaan
            </span>
            <div className="flex gap-2">
              {(['en', 'ar', 'am', 'om'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setIsOpen(false);
                  }}
                  className={`flex-1 py-2 text-[10px] font-sans font-bold tracking-widest border transition-all text-center cursor-pointer ${
                    language === lang
                      ? 'border-[#6B8238] text-[#FAF7F0] bg-[#4A5D23]'
                      : 'border-[#FAF7F0]/15 text-[#DFD3BF] hover:border-[#FAF7F0]/30'
                  }`}
                >
                  {lang === 'en' ? 'EN' : lang === 'ar' ? 'العربية' : lang === 'am' ? 'AM' : 'OM'}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#FAF7F0]/10 px-4">
            <button
              id="mobile-quote-btn"
              onClick={() => {
                setIsOpen(false);
                onRequestQuote();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#4A5D23] hover:bg-[#39481A] text-[#FAF7F0] font-sans font-extrabold text-xs tracking-widest shadow-md transition-colors uppercase rounded-none cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              {t.common.requestQuote}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
