import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Shalin Chhetri | Full Stack Developer",
  description: "Computer Science Student at TMU. Building intelligent, scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
