import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import {
  FacebookIcon,
  TwitterIcon,
} from './SocialIcons';
import { navLinks } from '../lib/data';

const socialLinks = [
  { icon: FacebookIcon, href: 'https://www.facebook.com/MnaraSchool/', label: 'Facebook' },
  { icon: TwitterIcon, href: 'https://twitter.com/MnaraSchool', label: 'Twitter' },
];

export default function Footer() {
  // Logic to group navLinks
  const companyLinks = navLinks.filter(link => 
    ['Home', 'About Us', 'Contact Us'].includes(link.label)
  );
  


  const coCurricularLink = navLinks.find(link => link.label === 'Co-Curricular');
  const programLinks = coCurricularLink?.children?.slice(0, 8) || [];

  return (
    <footer className="relative bg-secondary text-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Branding */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-300 shadow-xl shadow-primary/20">
                <span className="text-white font-heading font-black text-2xl -rotate-3 group-hover:-rotate-6 transition-transform duration-300">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl leading-tight tracking-tight">Mnara</span>
                <span className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-primary-light">School</span>
              </div>
            </Link>
            
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold text-white/90">
                Structured Learning. <br />
                <span className="text-gold">Elevated Futures.</span>
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Empowering the next generation through innovative education and structured guidance. We nurture young minds to soar to their full potential.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 text-white/70 hover:text-white hover:-translate-y-1"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-8 relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-white/60 hover:text-primary-light text-sm flex items-center gap-2 group transition-colors"
                  >
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/admissions" className="text-white/60 hover:text-gold text-sm flex items-center gap-2 group transition-colors">
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="text-white/60 hover:text-primary-light text-sm flex items-center gap-2 group transition-colors">
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  Curriculum
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs (Co-curricular) */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-8 relative inline-block">
              Programs
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {programLinks.map((program) => (
                <li key={program.label}>
                  <Link 
                    href={program.href} 
                    className="text-white/60 hover:text-gold text-sm flex items-center gap-2 group transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h5 className="text-sm font-bold text-white mb-2">Need Help?</h5>
              <Link href="/contact" className="text-xs text-white/50 hover:text-primary transition-colors flex items-center gap-2">
                Talk to our support <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-8">
            <div>
              <h4 className="font-heading font-bold text-lg mb-8 relative inline-block">
                Get in Touch
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></span>
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-white/60 text-sm group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:text-primary transition-colors">
                    <Phone size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/30 uppercase font-bold tracking-wider">Call Us</span>
                    <span>+254 713 801 024</span>
                  </div>
                </li>
                <li className="flex items-center gap-4 text-white/60 text-sm group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:text-primary transition-colors">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/30 uppercase font-bold tracking-wider">Email Us</span>
                    <span>info@mnara.co.ke</span>
                  </div>
                </li>
                <li className="flex items-center gap-4 text-white/60 text-sm group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:text-primary transition-colors">
                    <MapPin size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/30 uppercase font-bold tracking-wider">Visit Us</span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Mnara+School+Nairobi+Kileleshwa+Off+Nyeri+Road"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors underline underline-offset-2"
                    >
                      Mnara School Nairobi, Kileleshwa, Off Nyeri Road
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs font-medium">
            &copy; {new Date().getFullYear()} Mnara School. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8">
            <Link href="/privacy-policy" className="text-white/40 hover:text-white text-xs transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white/40 hover:text-white text-xs transition-colors underline-offset-4 hover:underline">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-white/40 hover:text-white text-xs transition-colors underline-offset-4 hover:underline">
              Cookie Policy
            </Link>
          </div>
          
          <div className="flex items-center gap-2 text-white/20 text-[0.6rem] uppercase tracking-[0.2em]">
            <span>Powered by</span>
            <span className="font-bold text-white/40">Safaristack</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
