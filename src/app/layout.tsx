import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orkka Solutions | Technology Staffing & Consulting",
  description:
    "Orkka Solutions connects companies with exceptional technology professionals across AI/ML, data, security, development, cloud, SAP, and every field in between.",
  keywords: [
    "technology staffing",
    "tech recruiting",
    "AI ML staffing",
    "data engineering recruiter",
    "cybersecurity staffing",
    "SAP consulting",
    "DevOps staffing",
    "cloud engineers",
    "AI infrastructure consulting",
  ],
  metadataBase: new URL("https://orkkasolutions.com"),
  openGraph: {
    title: "Orkka Solutions | Technology Staffing & Consulting",
    description:
      "The right tech talent, right when you need it. Staffing across every technology domain.",
    url: "https://orkkasolutions.com",
    siteName: "Orkka Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
