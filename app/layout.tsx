import "./globals.css";
import Link from "next/link";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children,} : {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={cn("font-sans", geist.variable)}>
      <body className="bg-white text-gray-900">

        <nav className="flex justify-between items-center px-10 py-5 border-b">

          <div className="text-xl font-bold">
            MyCompany
          </div>

          <div className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/service">Service</Link>
            <Link href="/contact">Contact</Link>
          </div>

        </nav>

        {children}

      </body>
    </html>
  )
}