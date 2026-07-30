import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppCTA from "./components/WhatsAppCTA";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#A02021",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mnara.sc.ke"),
  title: {
    template: "%s | Mnara School",
    default: "Mnara School | Cambridge & Islamic Education in Kileleshwa, Nairobi",
  },
  description:
    "Mnara School, Kileleshwa (off Nyeri Road), Nairobi: Cambridge IGCSE and AlBaseer Islamic Curriculum from Early Years to Secondary. Book a tour or enquire about admissions today.",
  keywords: [
    "Mnara School",
    "school in Nairobi",
    "kindergarten Nairobi",
    "primary school Kenya",
    "Cambridge curriculum Kenya",
    "Islamic School Nairobi",
    "AlBaseer Curriculum",
    "IGCSE Nairobi",
    "international school Kenya",
    "best school Nairobi",
    "nursery school Nairobi",
    "secondary school Kenya",
    "primary school Nairobi",
    "early years foundation Nairobi",
    "lower secondary school Kenya",
  ],
  authors: [{ name: "Mnara School", url: "https://mnara.sc.ke" }],
  creator: "Mnara School",
  publisher: "Mnara School",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Mnara School | Quality Education in Nairobi, Kenya",
    description:
      "A safe, nurturing school where children grow in confidence, character, and academic excellence — guided every step of the way. Cambridge IGCSE & AlBaseer Islamic Curriculum.",
    url: "https://mnara.sc.ke",
    siteName: "Mnara School",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "https://mnara.sc.ke/images/hero-1.webp",
        width: 1920,
        height: 1080,
        alt: "Mnara School — guiding every child to shine in Nairobi, Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mnara School | Quality Education in Nairobi, Kenya",
    description:
      "A safe, nurturing school where children grow in confidence, character, and academic excellence.",
    images: ["https://mnara.sc.ke/images/hero-1.webp"],
    creator: "@MnaraSchool",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "KE-30",
    "geo.placename": "Nairobi",
    "og:country-name": "Kenya",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://mnara.sc.ke/#organization",
  name: "Mnara School",
  description:
    "Mnara School is a nurturing educational institution in Nairobi, Kenya, offering Cambridge IGCSE and AlBaseer International Islamic Curriculum from Early Years through Secondary education.",
  url: "https://mnara.sc.ke",
  logo: {
    "@type": "ImageObject",
    url: "https://mnara.sc.ke/images/logo.png",
    width: 512,
    height: 512,
  },
  telephone: "+254713801024",
  email: "info@mnara.sc.ke",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kileleshwa, off Nyeri Road",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi",
    postalCode: "00100",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.2864,
    longitude: 36.7739,
  },
  sameAs: [
    "https://www.facebook.com/MnaraSchool/",
    "https://twitter.com/MnaraSchool",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+254713801024",
      contactType: "admissions",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili", "Arabic"],
    },
    {
      "@type": "ContactPoint",
      email: "info@mnara.sc.ke",
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili", "Arabic"],
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "12:00",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Educational Programs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "Early Years Foundation",
          description: "Play-based learning for ages 3-7",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "Primary School",
          description: "Cambridge & AlBaseer curriculum for ages 6-11",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "Lower Secondary",
          description: "Key Stage 3 for ages 12-14",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "Upper Secondary",
          description: "Cambridge IGCSE preparation for ages 15-16",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://mnara.sc.ke/#website",
  name: "Mnara School",
  url: "https://mnara.sc.ke",
  description:
    "Mnara School — a warm, safe nest in Nairobi where young minds are nurtured, supported, and prepared to soar.",
  publisher: {
    "@type": "Organization",
    "@id": "https://mnara.sc.ke/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://mnara.sc.ke/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mnara.sc.ke/#localbusiness",
  name: "Mnara School",
  image: "https://mnara.sc.ke/images/logo.png",
  url: "https://mnara.sc.ke",
  telephone: "+254713801024",
  email: "info@mnara.sc.ke",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kileleshwa, off Nyeri Road",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi",
    postalCode: "00100",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.2864,
    longitude: 36.7739,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "12:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:font-bold focus:text-sm"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppCTA />
        <GoogleAnalytics />
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="json-ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
