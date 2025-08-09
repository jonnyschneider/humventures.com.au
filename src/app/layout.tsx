import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
//import Header from "@/components/Header";
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
  title: "Humble",
  description: "Strategy that ships. Results that stick.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className={`${hankenGrotesk.variable} ${funnelDisplay.variable} font-sans antialiased`}>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
