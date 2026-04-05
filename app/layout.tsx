import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitup.cl"),
  title: "Digitup | Consultoría TI y Automatización de Procesos",
  description:
    "Consultoría TI en Antofagasta y todo Chile. Automatización de procesos, soporte TI, reportabilidad, soluciones cloud y desarrollo a medida para empresas.",
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
    title: "Digitup | Consultoría TI y Automatización de Procesos",
    description:
      "Consultoría TI en Antofagasta y todo Chile. Automatización de procesos y soluciones tecnológicas para empresas.",
    url: "https://digitup.cl",
    siteName: "Digitup",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://digitup.cl/og-digitup.png",
        width: 1200,
        height: 630,
        alt: "Digitup - Consultoría TI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitup | Consultoría TI",
    description:
      "Automatización, cloud y desarrollo a medida para empresas.",
    images: ["https://digitup.cl/og-digitup.png"],
  },
  alternates: {
    canonical: "https://digitup.cl",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
return (
  <html
    lang="es"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
  >
    <head>
      <meta
        property="og:title"
        content="Digitup | Consultoría TI y Automatización de Procesos"
      />
      <meta
        property="og:description"
        content="Consultoría TI en Antofagasta y todo Chile. Automatización de procesos y soluciones tecnológicas para empresas."
      />
      <meta
        property="og:image"
        content="https://digitup.cl/og-digitup.png"
      />
      <meta property="og:url" content="https://digitup.cl" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Digitup | Consultoría TI y Automatización de Procesos"
      />
      <meta
        name="twitter:description"
        content="Consultoría TI en Antofagasta y todo Chile. Automatización de procesos y soluciones tecnológicas para empresas."
      />
      <meta
        name="twitter:image"
        content="https://digitup.cl/og-digitup.png"
      />
    </head>

    <body className="min-h-full flex flex-col">
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

      <Header />
      {children}
      <WhatsAppButton />
    </body>
  </html>
);
}