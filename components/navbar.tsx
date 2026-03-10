"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [aboutDropdown, setAboutDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "핵심기술", href: "/#services" },
    { name: "생산설비", href: "/#equipment" },
    { name: "제작사례", href: "/product" },
  ]

  const aboutLinks = [
    { name: "인사말", href: "/about/greeting" },
    { name: "연혁", href: "/about/history" },
    { name: "오시는 길", href: "/about/location" },
  ]

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white border-b-2 border-slate-900 py-3 shadow-md" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/#" className="flex items-center gap-4 group">
          <div className={cn(
            "relative w-11 h-11 flex items-center justify-center rounded-none border-2 transition-all duration-300",
            scrolled ? "bg-white border-slate-900" : "bg-white border-white"
          )}>
            <Image 
              src="/logo.png" 
              alt="거성정밀 로고" 
              width={34}
              height={34}
              priority
              className="object-contain"
            />
          </div>
          
          <div className="flex flex-col">
            <span className={cn(
              "text-2xl font-black tracking-tighter transition-colors leading-none",
              scrolled ? "text-slate-950" : "text-white"
            )}>
              거성정밀
            </span>
            <span className={cn(
              "text-[10px] font-bold tracking-[0.3em] transition-colors mt-1 opacity-80",
              scrolled ? "text-blue-700" : "text-blue-200"
            )}>
              GEOSUNG PRECISION
            </span>
          </div>
        </Link>

        {/* desktop menu */}
        <nav className="hidden lg:flex gap-10 items-center">
          {/* About Us Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <button className={cn(
              "flex items-center gap-1 text-[15px] font-bold transition-all hover:text-blue-600 tracking-tight",
              scrolled ? "text-slate-900" : "text-white"
            )}>
              회사소개 <ChevronDown className="w-4 h-4" />
            </button>
            
            {aboutDropdown && (
              <div className="absolute top-full left-0 pt-4 w-48 animate-in fade-in slide-in-from-top-2">
                <div className="bg-white border-2 border-slate-900 shadow-xl overflow-hidden">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-5 py-3 text-[14px] font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors border-b last:border-0 border-slate-100"
                      onClick={() => setAboutDropdown(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-[15px] font-bold transition-all hover:text-blue-600 tracking-tight",
                scrolled ? "text-slate-900" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button size="lg" className={cn(
            "ml-6 px-8 rounded-none font-black text-sm tracking-widest transition-all",
            scrolled ? "bg-slate-950 hover:bg-blue-700 text-white" : "bg-white hover:bg-blue-500 text-slate-900 hover:text-white"
          )} asChild>
            <Link href="/#contact">견적문의</Link>
          </Button>
        </nav>
                                                                                                                 
        {/* mobile button */}
        <button
          className={cn(
            "lg:hidden p-2 transition-colors",
            scrolled ? "text-slate-900" : "text-white"
          )}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col p-8 gap-6">
            <div className="text-blue-400 font-bold text-sm border-b border-slate-800 pb-2">회사소개</div>
            {aboutLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-xl font-black text-white hover:text-blue-400 pl-4"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="text-blue-400 font-bold text-sm border-b border-slate-800 pb-2 mt-4">메뉴</div>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-xl font-black text-white hover:text-blue-400 pl-4"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="mt-4 w-full h-16 bg-blue-600 text-lg font-black rounded-none" asChild onClick={() => setOpen(false)}>
              <Link href="/contact">견적문의</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
