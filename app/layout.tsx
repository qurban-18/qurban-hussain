import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers from "@/redux/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qurban | Portfolio",
  description:
    "Qurban Hussain a full stack developer with 1+ year of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" className="!scroll-smooth">
        <body
          className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
        >
          <div className="bg-[#fbe2e3] w-[31.25rem] h-[31.25rem] absolute rounded-full blur-[10rem] sm:w-[68.75rem] top-[-6rem] right-[11rem] -z-10"></div>
          <div className="bg-[#dbd7fb] w-[50rem] h-[31.25rem] absolute rounded-full blur-[10rem] sm:w-[68.75rem] top-[-1rem] left-[-35rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10"></div>
          <Header />
          {children}
        </body>
      </html>
    </Providers>
  );
}
