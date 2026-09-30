import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
});

// Download from fontshare.com and put in public/fonts
const satoshi = localFont({
  src: [
    { path: "../../public/fonts/Satoshi-Regular.woff2", weight: "400" },
    { path: "../../public/fonts/Satoshi-Medium.woff2", weight: "500" },
    { path: "../../public/fonts/Satoshi-Bold.woff2", weight: "700" },
  ],
  variable: "--font-satoshi",
});

const clash = localFont({
  src: "../../public/fonts/ClashDisplay-Bold.woff2",
  weight: "700",
  variable: "--font-clash",
});

export const metadata: Metadata = {
  title: "ByteSpace",
  description: "Get access to hundreds of courses available.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${satoshi.variable} ${clash.variable}`}>
      <body>{children}</body>
    </html>
  );
}