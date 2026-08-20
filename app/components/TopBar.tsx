import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';
import { FacebookIcon, TwitterIcon } from './SocialIcons';

const contactItems = [
  {
    icon: Phone,
    label: '+254 713 801 024',
    href: 'tel:+254713801024',
    ariaLabel: 'Call Mnara School',
    showOnMobile: true,
  },
  {
    icon: MapPin,
    label: 'Kileleshwa, off Nyeri Road',
    href: 'https://www.google.com/maps/search/?api=1&query=Mnara+School+Nairobi+Kileleshwa+Off+Nyeri+Road',
    ariaLabel: 'View Mnara School location on Google Maps',
    external: true,
    showOnMobile: false,
  },
  {
    icon: Mail,
    label: 'info@mnara.sc.ke',
    href: 'mailto:info@mnara.sc.ke',
    ariaLabel: 'Email Mnara School',
    showOnMobile: false,
  },
];

const socialLinks = [
  { icon: FacebookIcon, href: 'https://www.facebook.com/MnaraSchool/', label: 'Facebook' },
  { icon: TwitterIcon, href: 'https://twitter.com/MnaraSchool', label: 'Twitter' },
];

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-secondary text-white/80 text-sm font-body z-[101]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-3 sm:gap-5">
            {contactItems.map((item) => (
              <a
                key={item.ariaLabel}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                aria-label={item.ariaLabel}
                className={`hidden sm:flex items-center gap-2 px-3 py-2 rounded transition-colors duration-200 hover:text-white hover:bg-white/5 ${
                  item.showOnMobile ? 'sm:hidden lg:flex' : ''
                }`}
              >
                <item.icon size={16} className="text-gold shrink-0" />
                <span className="hidden md:inline truncate max-w-[220px]">{item.label}</span>
              </a>
            ))}

            {/* Mobile: phone only */}
            <a
              href="tel:+254713801024"
              aria-label="Call Mnara School"
              className="flex sm:hidden items-center gap-2 px-3 py-2 rounded transition-colors duration-200 hover:text-white hover:bg-white/5"
            >
              <Phone size={16} className="text-gold shrink-0" />
            </a>
          </div>

          {/* Right: Portal + Socials */}
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href="https://portal.mnara.sc.ke/login"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mnara School Portal Login"
              className="flex items-center gap-2 px-5 py-2 bg-gold hover:bg-[#c49735] rounded font-heading font-semibold text-white text-sm transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <ArrowRight size={14} className="shrink-0" />
              <span>Portal Login</span>
            </a>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-white/15" />

            {/* Social Icons */}
            <div className="flex items-center gap-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Mnara School on ${label}`}
                  className="w-9 h-9 flex items-center justify-center rounded transition-all duration-200 text-white/50 hover:text-white hover:bg-white/5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
