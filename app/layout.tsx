import type { Metadata } from "next";
import {
  Catamaran,
  Cormorant_Garamond,
  Noto_Serif_Tamil,
  Noto_Serif_Devanagari,
  Hind,
} from "next/font/google";
import "./globals.css";
import MusicProvider from "@/app/components/MusicProvider";

// Body font — covers Latin + Tamil
const catamaran = Catamaran({
  subsets: ["latin", "tamil"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

// Display font — Latin (English + Marathi Latin fallback)
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Display font — Tamil script
const notoSerifTamil = Noto_Serif_Tamil({
  subsets: ["tamil"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display-ta",
  display: "swap",
});

// Display font — Devanagari (Marathi)
const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display-mr",
  display: "swap",
});

// Body font — Devanagari + Latin (Marathi pages)
const hind = Hind({
  subsets: ["devanagari", "latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body-mr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Radhika & Avinash — July 2026",
  description: "Join us as we celebrate the union of Radhika and Avinash on 1–2 July 2026 in Chennai.",
  openGraph: {
    title: "Radhika & Avinash — July 2026",
    description: "Join us as we celebrate the union of Radhika and Avinash on 1–2 July 2026 in Chennai.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${catamaran.variable} ${cormorantGaramond.variable} ${notoSerifTamil.variable} ${notoSerifDevanagari.variable} ${hind.variable}`}
    >
      <body className="bg-cream text-[#2C1A0E] font-body min-h-screen">
        <MusicProvider>{children}</MusicProvider>
      </body>
    </html>
  );
}
