import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Pintera Login",
  description: "Login page UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 min-h-screen">
        <Header />
{/* 
        <Image
          className="w-screen opacity-10 fixed"
          src="/ref/desktop.png"
          alt="screne"
          width={1000}
          height={1000}
        ></Image> */}
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
