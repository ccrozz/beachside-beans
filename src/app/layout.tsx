import type { Metadata } from "next";
import { Bangers, Montserrat, Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";

const bangers = Bangers({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${bangers.variable} ${montserrat.variable} ${caveat.variable}`}
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
