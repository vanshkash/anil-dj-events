import { Geist } from "next/font/google";
import Navbar from "@/components/server/Navbar";
import Footer from "@/components/server/Footer";
import FloatingButtons from "@/components/server/FloatingButtons";
import { Toaster } from "react-hot-toast";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://anildjevents.in"),

  title: "Anil DJ & Events | Professional Sound & Lighting Services in Hapur, Noida & NCR",

  description:
  "Anil DJ & Events offers professional sound, lighting, DJ on wheels & live sound setups for college fests & corporate events across Hapur, Noida, Ghaziabad & Delhi NCR.",

  keywords: [
    "DJ service in Hapur",
    "Best DJ in Hapur",
    "DJ on wheels Hapur",
    "Wedding DJ Hapur",
    "Sound service in Hapur",
    "Stage setup in Hapur",
    "Lighting service Hapur",
    "Event management Hapur",
    "DJ service in Noida",
    "DJ service in Ghaziabad",
    "DJ service in NCR",
    "Corporate event DJ",
    "College fest DJ",
    "Wedding sound setup",
    "Live sound setup",
    "Music system on rent",
    "Event DJ near me",
    "DJ on wheels in Noida",
  ],

  authors: [{ name: "Anil DJ & Events" }],

  creator: "Anil DJ & Events",

  alternates: {
    canonical: "/",
  },

  robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},

  openGraph: {
    title: "Anil DJ & Events | DJ & Sound Service in Hapur, Ghaziabad & NCR",

    description:
      "Book professional DJ, sound, stage and lighting services for weddings, parties and events across Hapur, Noida, Ghaziabad & Delhi NCR.",

    url: "https://anildjevents.in",

    siteName: "Anil DJ & Events",

    locale: "en_IN",

    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Anil DJ & Events",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Anil DJ & Events | Best DJ Service in Hapur & NCR",

    description:
      "Professional DJ, wedding sound, stage & lighting setup service in Hapur, Ghaziabad, Noida & Delhi NCR.",

    images: ["/og-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="overflow-x-hidden scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body
        className={`${geist.className} overflow-x-hidden bg-neutral-950 text-white antialiased`}
      >
        {/* Global Background Glow */}
        <div className="fixed left-0 top-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="fixed right-0 top-[600px] md:top-[400px] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10">
          <Navbar />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#111827",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.1)",
              },
            }}
          />
          {children}
          <Footer />
          <FloatingButtons />
        </div>
      </body>
    </html>
  );
}
