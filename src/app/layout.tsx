import { Inter, Inter_Tight } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

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
      <body className="flex h-full flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
