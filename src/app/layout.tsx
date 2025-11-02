import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/server/client/server";
import "./globals.css";
import { getSession } from "@/lib/auth";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TODO",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html className="h-full" lang="en">
      <body className={`flex h-full flex-col antialiased ${inter.variable}`}>
        <Navbar user={session?.user} />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
