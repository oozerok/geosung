"use client"

import { FileText, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function QuickInquiry() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-[2px]">
      <div className="flex flex-col bg-slate-800 text-white shadow-2xl">
        <Link 
          href="/customer" 
          className="w-16 h-16 flex flex-col items-center justify-center gap-1 hover:bg-blue-600 transition-all border-b border-white/10 group"
        >
          <FileText className="w-6 h-6" />
          <span className="text-[10px] font-bold">견적문의</span>
        </Link>
      </div>
      
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="w-16 h-16 bg-slate-900 text-white flex flex-col items-center justify-center gap-1 hover:bg-black transition-all animate-in fade-in slide-in-from-right duration-300"
        >
          <ArrowUp className="w-6 h-6" />
          <span className="text-[10px] font-bold">TOP</span>
        </button>
      )}
    </div>
  )
}
