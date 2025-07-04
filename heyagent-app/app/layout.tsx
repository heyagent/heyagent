import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Generate AI Apps with ease | HeyAgent",
  description: "Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours of Effort and Use our robust Deployable code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} antialiased`}
      >
        <Navbar />
        <div className="min-h-screen">
          {children}
        </div>
        <div className="mt-24">
          <Footer />
        </div>
      </body>
    </html>
  );
}
