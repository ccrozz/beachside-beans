import type { Metadata } from "next";
import { Abril_Fatface, Caveat, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beachsidebeans.com"),
  title: "Beachside Beans | Fresh Roasted Coffee · Satellite Beach, FL",
  description:
    "Craft coffee roasted fresh daily by Dan in Satellite Beach, Florida. For surfers, skaters, and Space Coast locals. Shop online, shipped to your door.",
  openGraph: {
    title: "Beachside Beans Coffee Roastery",
    description:
      "Every good day starts with a great cup (and some good waves 🏄‍♂️🤙)",
    url: "https://beachsidebeans.com",
    siteName: "Beachside Beans",
    images: [
      {
        url: "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/bfabec5c-6bfd-4dbb-8ccc-d5de1b059d8d/434404292_122129953916206786_281201664147367328_n.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${abrilFatface.variable} ${dmMono.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen bg-sand font-body text-roast antialiased">
        <Navbar />
        {children}
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
