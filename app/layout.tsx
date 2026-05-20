import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Newsreader } from "next/font/google";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorBlob } from "@/components/CursorBlob";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { TopNav } from "@/components/TopNav";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alexi Claasen — Curriculum Vitae 2026",
  description:
    "Key Account Manager — Regional Sales. Ten years building contractor relationships into regional revenue across KwaZulu-Natal and Gauteng.",
  authors: [{ name: "Alexi Claasen" }],
  openGraph: {
    title: "Alexi Claasen — Curriculum Vitae 2026",
    description:
      "Key Account Manager — Regional Sales. Ten years across KZN and Gauteng.",
    type: "profile",
    locale: "en_ZA",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1f5a3b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`theme-forest ${plexSans.variable} ${plexMono.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <body>
        <span id="top" />
        <ScrollProgress />
        <div className="top-strip no-print" aria-hidden>
          <i /><i /><i />
        </div>
        <CursorBlob />
        <TopNav />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <ThemeSwitcher />
      </body>
    </html>
  );
}
