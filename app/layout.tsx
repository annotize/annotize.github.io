import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Annotize",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-8 xl:gap-16 min-h-screen px-2 md:px-8 lg:px-16 xl:px-32 py-2 md:py-4">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
