import type { Metadata } from "next";
import { Alegreya, Alegreya_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const alegreyaSans = Alegreya_Sans({
  weight: ["400", "500", "700"],
  variable: "--font-alegreya-sans",
  subsets: ["latin"],
});

const alegreya = Alegreya({
  weight: ["400", "500", "700"],
  variable: "--font-alegreya",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STAR Story Index",
  description: "Interview prep — STAR stories by competency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${alegreyaSans.variable} ${alegreya.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
