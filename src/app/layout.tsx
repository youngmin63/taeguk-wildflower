"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import Toast from "@/components/Toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <title>태국야생화</title>
        <meta name="description" content="아름다운 야생화를 만나보세요" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <TopHeader />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
