import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const hankenGrotesk = Hanken_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-sans",
});

const funnelDisplay = Funnel_Display({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "HumVentures - Empowering Human Potential",
  description: "Strategic ventures and innovation focused on human potential",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.variable} ${funnelDisplay.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
