import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import {twMerge} from 'tailwind-merge'

const dmSans = DM_Sans ({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hiprofeet.ng",
  description: "Africa's Leading Social Media Marketing Agency",
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  )
}