import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-cream text-[#2C1A0E] font-body min-h-screen">
        {children}
      </body>
    </html>
  );
}
