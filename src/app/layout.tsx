import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

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
      <body className="m-0">
        {/* <Image
          className="w-screen opacity-10 fixed"
          src="/ref/login.png"
          alt="screne"
          width={1000}
          height={1000}
        ></Image> */}
        {children}
      </body>
    </html>
  );
}
