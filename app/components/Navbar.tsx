'use client';

import { useState, useEffect, useCallback, startTransition } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, BookOpen } from 'lucide-react';

import { navLinks } from '../lib/data';
import { NavItem } from '../lib/types';

function CurriculumDropdown({ items, isOpen, onClose }: { items: NavItem[]; isOpen: boolean; onClose: () => void }) {
  return (
    <div
      role="menu"
      aria-label="Curriculum options"
      className={`absolute left-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 transition-all duration-200 origin-top-left ${
        isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'
      }`}
    >
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          role="menuitem"
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
          onClick={onClose}
        >
          <div
            className={`w-9 h-9 ${item.color || 'bg-gray-100 text-primary'} rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
          >
            {item.icon ? <item.icon size={18} /> : <BookOpen size={18} />}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-bold text-text-dark group-hover:text-primary transition-colors truncate">
              {item.label}
            </div>
            {item.description && (
              <div className="text-xs text-text-muted leading-relaxed line-clamp-1">{item.description}</div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [curriculumOpen, setCurriculumOpen] = useState(false);
  const curriculumItem = navLinks.find((link) => link.isMega);
  const pathname = usePathname();

  const navBg = isScrolled || mobileMenuOpen || curriculumOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setMobileMenuOpen(false);
      setCurriculumOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => setMobileMenuOpen((prev) => !prev), []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        navBg ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 relative z-[110]" aria-label="Mnara School Home">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transform rotate-3 shadow-md">
              <span className="text-white font-heading font-black text-xl -rotate-3">M</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-xl leading-tight transition-colors ${navBg ? 'text-primary' : 'text-white'}`}>
                Mnara
              </span>
              <span className={`text-[0.65rem] font-bold tracking-[0.2em] uppercase transition-colors ${navBg ? 'text-text-muted' : 'text-white/80'}`}>
                School
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.isMega ? (
                  <div
                    className="relative"
                    onMouseLeave={() => setCurriculumOpen(false)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        setCurriculumOpen(false);
                      }
                    }}
                  >
                    <button
                      onClick={() => setCurriculumOpen((prev) => !prev)}
                      onMouseEnter={() => setCurriculumOpen(true)}
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') setCurriculumOpen(false);
                      }}
                      aria-expanded={curriculumOpen}
                      aria-haspopup="true"
                      className={`flex items-center gap-1.5 font-heading text-sm font-semibold transition-all duration-300 py-2 ${
                        navBg
                          ? curriculumOpen ? 'text-primary' : 'text-text-dark hover:text-primary'
                          : 'text-white hover:text-white/80'
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${curriculumOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <CurriculumDropdown
                      items={curriculumItem?.children || []}
                      isOpen={curriculumOpen}
                      onClose={() => setCurriculumOpen(false)}
                    />
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`relative font-heading text-sm font-semibold transition-all duration-300 py-2 hover:text-primary ${
                      navBg
                        ? pathname === link.href ? 'text-primary' : 'text-text-dark'
                        : 'text-white'
                    }`}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 relative z-[110]">

            {/* Apply Now CTA */}
            <Link
              href="/admissions"
              className="hidden sm:flex items-center justify-center px-6 py-2.5 bg-gold hover:bg-[#c49735] text-white font-heading text-sm font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Apply Now
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                navBg ? 'bg-gray-100 text-text-dark' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[105] bg-white lg:hidden overflow-hidden flex flex-col transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex-1 overflow-y-auto px-6 pt-28 pb-12">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <div key={link.label} className="flex flex-col gap-4 border-b border-gray-50 pb-6 last:border-0">
                {link.isMega ? (
                  <div className="flex flex-col gap-4">
                    <span className="text-2xl font-bold font-heading text-text-dark">{link.label}</span>
                    <div className="grid gap-3 ml-2">
                      {link.children?.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-3 text-base text-text-muted hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className={`w-8 h-8 ${item.color || 'bg-gray-100'} rounded-lg flex items-center justify-center shrink-0`}>
                            {item.icon ? <item.icon size={16} /> : <BookOpen size={16} />}
                          </div>
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-2xl font-bold font-heading ${pathname === link.href ? 'text-primary' : 'text-text-dark'}`}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

          </div>
        </div>

        <div className="p-6 border-t border-gray-100 bg-white">
          <Link
            href="/admissions"
            className="w-full h-14 bg-gold text-white font-heading font-black text-lg flex items-center justify-center rounded-2xl shadow-lg active:scale-95 transition-transform"
            onClick={() => setMobileMenuOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}
