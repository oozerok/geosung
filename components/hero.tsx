"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const banners = [
    {
      src: "/banner1.png",
      tag: "25 YEARS OF TECHNOLOGY",
      title: <>신뢰의 가공기술로 <br className="hidden lg:block" /><span className="text-blue-400">초정밀 부품</span>의 미래를 열어갑니다.</>,
      desc: "방위산업, 조선, 유압 시스템 등 전 산업분야의 핵심 부품 가공 전문 파트너, 거성정밀입니다."
    },
    {
      src: "/banner2.png",
      tag: "PRECISION & QUALITY",
      title: <>한계를 넘어서는 <br className="hidden lg:block" /><span className="text-blue-400">0.001mm</span>의 완벽함.</>,
      desc: "최첨단 5축 가공기와 MCT 설비로 정밀한 설계 도면을 완벽한 실물로 구현해 드립니다."
    },
    {
      src: "/banner3.png",
      tag: "GLOBAL PARTNERSHIP",
      title: <>당신의 성공을 가공하는 <br className="hidden lg:block" /><span className="text-blue-400">최상의 기술 파트너</span></>,
      desc: "정밀 가공부터 유압 부품 조립까지 이어지는 체계적인 솔루션으로 고객사의 가치를 높입니다."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [banners.length])

  return (
    <section className="relative w-full h-[600px] lg:h-[800px] overflow-hidden bg-slate-900">
      {/* Background Slides */}
      {banners.map((banner, index) => (
        <div 
          key={banner.src}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          <img 
            src={banner.src} 
            alt={`Banner ${index + 1}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
      ))}

      {/* Content Container */}
      <div className="container mx-auto px-6 h-full flex flex-col items-center justify-center relative z-10 text-center">
        {banners.map((banner, index) => (
          <div 
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
            }`}
          >
            <span className={`text-white/80 text-lg lg:text-xl font-medium tracking-[0.3em] mb-6 transition-all duration-700 delay-100 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
              {banner.tag}
            </span>
            
            <h2 className={`text-4xl lg:text-7xl font-bold text-white leading-tight mb-10 tracking-tight transition-all duration-700 delay-300 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {banner.title}
            </h2>
            
            <p className={`text-white/90 text-lg lg:text-xl font-medium max-w-3xl leading-relaxed mb-12 transition-all duration-700 delay-500 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {banner.desc}
            </p>
          </div>
        ))}

        {/* Indicator dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide ? "w-16 bg-blue-500" : "w-12 bg-white/20 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
