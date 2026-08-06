import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/home/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://idrdrei.com"),

  title: {
    default: "Dr. Andrei Martin | Board-Certified Ophthalmologist",
    template: "%s | Dr. Andrei Martin",
  },

  description:
    "Board-certified ophthalmologist with fellowship training in ocular oncology, specializing in ocular oncology, cataract surgery, laser vision correction, and comprehensive eye care. Clinics in Quezon City, Makati, and Antipolo.",

  keywords: [
    "Dr. Andrei Martin",
    "ophthalmologist",
    "board-certified ophthalmologist",
    "ocular oncologist",
    "ocular oncology",
    "eye tumors",
    "choroidal melanoma",
    "retinoblastoma",
    "conjunctival tumors",
    "orbital tumors",
    "cataract surgery",
    "LASIK",
    "SMILE Pro",
    "PRK",
    "laser vision correction",
    "comprehensive eye care",
    "eye doctor Philippines",
    "Quezon City ophthalmologist",
    "Makati ophthalmologist",
    "Antipolo ophthalmologist",
  ],

  authors: [
    {
      name: "Dr. Andrei Martin",
      url: "https://idrdrei.com",
    },
  ],

  creator: "Dr. Andrei Martin",
  publisher: "Dr. Andrei Martin",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Dr. Andrei Martin | Board-Certified Ophthalmologist",
    description:
      "Board-certified ophthalmologist with fellowship training in ocular oncology, specializing in ocular oncology, cataract surgery, laser vision correction, and comprehensive eye care.",
    url: "https://idrdrei.com",
    siteName: "Dr. Andrei Martin",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Andrei Martin",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Andrei Martin | Board-Certified Ophthalmologist",
    description:
      "Board-certified ophthalmologist with fellowship training in ocular oncology, specializing in ocular oncology, cataract surgery, laser vision correction, and comprehensive eye care.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#FAFAF7] text-[#111]">
        <Navbar />

        <main>{children}</main>

        <ScrollToTop />
      </body>
    </html>
  );
}