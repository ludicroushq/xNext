import type { Metadata } from "next";
import { Inter, Inter_Tight as InterTight } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { x } from "@/x";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const interTight = InterTight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  metadataBase: new URL(x.config.baseURL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={twMerge(inter.variable, interTight.variable, "h-full")}
    >
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
