import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@component/style/globals.css";
import { Header } from "@component/layouts/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GameStoreX Test Task",
  description: "Made with love :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
