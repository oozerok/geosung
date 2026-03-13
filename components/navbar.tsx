"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { 
      name: "회사소개", 
      href: "/about",
      sub: [
        { name: "인사말", href: "/about" },
        { name: "회사개요", href: "/about/overview" },
        { name: "연혁", href: "/about/history" },
        { name: "오시는길", href: "/about/location" }
      ]
    },
    { 
      name: "사업분야", 
      href: "/business",
      sub: [
        { name: "CNC 선반 가공", href: "/business" },
        { name: "MCT 복합 가공", href: "/business/mct" },
        { name: "5축 및 특수 가공", href: "/business/5axis" },
        { name: "대형 부품 가공", href: "/business/large" }
      ]
    },
    { 
      name: "가공사례", 
      href: "/portfolio",
      sub: [
        { name: "방위산업부품", href: "/portfolio/category/defense" },
        { name: "유압부품", href: "/portfolio/category/hydraulic" },
        { name: "조선기자재", href: "/portfolio/category/marine" }
      ]
    },
    { 
      name: "설비현황", 
      href: "/technology",
      sub: [
        { name: "주요설비", href: "/technology" }
      ]
    },
    { 
      name: "고객지원", 
      href: "/customer/notice",
      sub: [
        { name: "공지사항", href: "/customer/notice" },
        { name: "견적문의", href: "/customer" }
      ]
    },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200" 
          : "bg-transparent border-b border-white/10"
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between h-20 lg:h-24">
          <a href="/" className="flex items-center gap-4 group">
            <div className={`transition-all duration-500 rounded-xl flex items-center justify-center p-1.5 ${
              !isScrolled ? "bg-white shadow-lg shadow-white/10" : "bg-transparent"
            }`}>
              <img 
                src="/logo.png?v=2" 
                alt="거성 로고" 
                className={`w-auto transition-all duration-500 ${
                  isScrolled ? "h-10 lg:h-12" : "h-12 lg:h-14"
                }`} 
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl lg:text-3xl font-black leading-none tracking-tighter transition-colors duration-500 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}>거성정밀</span>
              <span className={`text-[10px] lg:text-[11px] font-black tracking-[0.2em] mt-1.5 uppercase transition-colors duration-500 ${
                isScrolled ? "text-blue-600 opacity-80" : "text-blue-400"
              }`}>Geosung Precision</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center h-full">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative h-full flex items-center px-8 group cursor-pointer"
                onMouseEnter={() => setActiveMenu(link.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link 
                  href={link.href}
                  className={`text-[17px] font-bold transition-colors duration-500 ${
                    isScrolled ? "text-slate-800 hover:text-blue-700" : "text-white hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </Link>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-2xl border-t-2 border-blue-700 py-4 px-2 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0`}>
                  {link.sub.map((subItem) => (
                    <Link 
                      key={subItem.name} 
                      href={subItem.href} 
                      className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button 
            className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-slate-900" : "text-white"}`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[9999] overflow-y-auto animate-in slide-in-from-right duration-300">
          <div className="p-6 flex flex-col gap-2">
            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
              <a href="/" className="flex items-center gap-3">
                <img src="/logo.png?v=2" alt="거성 로고" className="h-10 w-auto" />
                <span className="text-xl font-black text-slate-900">거성정밀</span>
              </a>
              <button className="p-2 text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={35} />
              </button>
            </div>
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-slate-100 last:border-0 pb-4">
                <div className="flex items-center justify-between py-4">
                  <span className="text-xl font-bold text-slate-900">{link.name}</span>
                  <ChevronDown className="text-slate-400" />
                </div>
                <div className="grid grid-cols-2 gap-2 pl-4">
                  {link.sub.map((sub) => (
                    <Link 
                      key={sub.name} 
                      href={sub.href} 
                      className="text-sm text-slate-500 py-2 font-medium" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
