import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexusLabs | Soluciones IT para PyMEs en Rosario, Santa Fe",
  description: "Transformamos PyMEs mediante tecnología inteligente. Infraestructura IT, automatización, desarrollo web, Business Intelligence y videovigilancia en Rosario, Argentina.",
  keywords: [
    "soporte IT Rosario",
    "soluciones tecnológicas Rosario",
    "desarrollo web Rosario",
    "infraestructura IT Rosario",
    "automatización empresas Rosario",
    "cámaras de seguridad Rosario",
    "Power BI Rosario",
    "consultoría IT Rosario",
    "transformación digital Rosario",
    "cloud computing Rosario",
    "PyMEs tecnología",
    "NexusLabs",
  ],
  authors: [{ name: "NexusLabs" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://nexuslabs.com.ar",
    siteName: "NexusLabs",
    title: "NexusLabs | Soluciones IT para PyMEs en Rosario",
    description: "Infraestructura IT, automatización, desarrollo y soluciones digitales para empresas modernas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NexusLabs - Tecnología para PyMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusLabs | Soluciones IT para PyMEs",
    description: "Transformamos empresas mediante tecnología inteligente en Rosario, Argentina.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
