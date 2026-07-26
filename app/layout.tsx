import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://digitup.cl"),
  title: "Digitup | Servicios TI, Automatización y Soporte en Antofagasta",
  description:
    "Soluciones TI para empresas en Antofagasta y Chile: automatización de procesos, reportabilidad, integraciones, cloud y soporte tecnológico.",
  keywords: [
    "consultoría TI Antofagasta",
    "soporte TI Antofagasta",
    "automatización de procesos Antofagasta",
    "consultoría TI Chile",
    "soluciones cloud Chile",
    "reportabilidad y analítica",
    "transformación digital empresas",
    "desarrollo de soluciones a medida",
  ],
  openGraph: {
    title: "Digitup | Servicios TI, Automatización y Soporte en Antofagasta",
    description:
      "Soluciones TI para fortalecer la gestión operativa de empresas: automatización, reportabilidad, integraciones, cloud y soporte tecnológico.",
    url: "https://digitup.cl",
    siteName: "Digitup",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://digitup.cl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Digitup - Soluciones TI para fortalecer la gestión operativa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitup | Servicios TI, Automatización y Soporte en Antofagasta",
    description:
      "Soluciones TI para empresas en Antofagasta y Chile: automatización, reportabilidad, integraciones, cloud y soporte tecnológico.",
    images: ["https://digitup.cl/opengraph-image"],
  },
  alternates: {
    canonical: "https://digitup.cl",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Digitup",
  url: "https://digitup.cl",
  image: "https://digitup.cl/opengraph-image",
  description:
    "Soluciones TI para empresas: automatización de procesos, reportabilidad, integraciones, cloud, soporte tecnológico y soluciones a medida.",
  areaServed: [
    {
      "@type": "City",
      name: "Antofagasta",
      addressCountry: "CL",
    },
    {
      "@type": "Country",
      name: "Chile",
    },
  ],
  telephone: "+56933541437",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+56933541437",
    contactType: "sales",
    areaServed: "CL",
    availableLanguage: "es",
  },
  makesOffer: [
    "Servicios TI",
    "Automatización de procesos",
    "Reportabilidad y BI",
    "Integraciones de sistemas",
    "Cloud y colaboración",
    "Soporte TI",
    "Desarrollo de soluciones a medida",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      areaServed: "Antofagasta, Chile",
    },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="flex min-h-full flex-col pt-20">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3117EQBN7L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3117EQBN7L');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <Header />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
