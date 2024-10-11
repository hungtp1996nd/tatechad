import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const chpFire = localFont({
  weight: "400",
  src: "../fonts/pixelmix.ttf",
  variable: "--font-chpfire",
});

export const metadata: Metadata = {
  title: "$BELTALIK",
  description: "Vitalik Buterin has emerged as a surprising candidate for the 2024 Nobel Prize in Economics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chpFire.variable} bg-black `}>
        {children}
      </body>
    </html>
  );
}
