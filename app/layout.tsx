import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppCTA from "./components/WhatsAppCTA";
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
  metadataBase: new URL("https://www.mnaraschool.com"),
  title: {
    template: "%s | Mnara School",
    default: "Mnara School | Guiding Every Child to Shine",
  },
  description:
    "Mnara School — a warm, safe nest in Nairobi where young minds are nurtured, supported, and prepared to soar. Campuses in Dennis Pritt, Kasuku, and Karen.",
  keywords: [
    "Mnara School",
    "school in Nairobi",
    "kindergarten Nairobi",
    "primary school Kenya",
    "Cambridge curriculum Kenya",
    "Islamic School",
    "AlBaseer Curriculum",
    "IGCSE",
    "Islamic Education",
    "Nairobi",
    "IGCSE Nairobi",
    "international school Kenya",
    "best school Nairobi",
    "nursery school Nairobi",
    "secondary school Kenya",
  ],
  authors: [{ name: "Mnara School", url: "https://www.mnaraschool.com" }],
  creator: "Mnara School",
  publisher: "Mnara School",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Mnara School | Guiding Every Child to Shine",
    description:
      "A safe, nurturing school where children grow in confidence, character, and academic excellence — guided every step of the way.",
    url: "https://www.mnaraschool.com",
    siteName: "Mnara School",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/images/hero-1.webp",
        width: 1920,
        height: 1080,
        alt: "Mnara School — guiding every child to shine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mnara School | Guiding Every Child to Shine",
    description:
      "A safe, nurturing school where children grow in confidence, character, and academic excellence.",
    images: ["/images/hero-1.webp"],
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
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.svg",
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
        color: "#A02021",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "KE-30",
    "geo.placename": "Nairobi",
    "og:country-name": "Kenya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Mnara School",
              description:
                "A safe, nurturing school where children grow in confidence, character, and academic excellence.",
              url: "https://www.mnaraschool.com",
              logo: "https://www.mnaraschool.com/favicon.svg",
              telephone: "+254713801024",
              email: "info@mnara.co.ke",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kileleshwa, off Nyeri Road",
                addressLocality: "Nairobi",
                addressRegion: "KE",
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
            }),
          }}
        />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Mnara School",
              url: "https://www.mnaraschool.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.mnaraschool.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
