import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import BreadCrumbsNav from "@/components/BreadCrumbsNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hungry-For-Knowladge",
  description: "Website for people who are hungry for knowladge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <Navbar />
        <main style={{ marginTop: "100px", position: "relative" }}>
          <BreadCrumbsNav />
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
