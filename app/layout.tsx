import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import { Exo } from "next/font/google";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const exo = Exo({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "MakeViews",
  description: "Donnons vie à vos idées votre vision notre création",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${exo.className} antialiased  `}
      >
        {" "}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
