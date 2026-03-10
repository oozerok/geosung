import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#001f3f]">
      {/* Background - 조선/해양 중공업 느낌의 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559139225-421502ef4848?q=80&w=2070&auto=format&fit=crop')",
          opacity: 0.5
        }}
      />
      
      {/* Blue Gradient Overlay - 깊은 바다와 신뢰의 블루 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003366] via-[#003366]/80 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1.5 bg-blue-600 text-white text-sm font-bold mb-8 tracking-wider">
            SINCE 2012 | 조선기자재 부품 정밀가공 전문
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-[1.2] mb-8">
            대한민국 조선 산업의 <br />
            <span className="text-blue-400">품질 표준을 만드는</span> 정밀 기술
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mb-12 leading-relaxed font-medium">
            거성정밀은 선박 엔진 부품부터 대형 유압 시스템까지, <br className="hidden md:block" />
            극한의 환경에서도 변함없는 성능을 보장하는 초정밀 가공 솔루션을 제공합니다.
          </p>

          <div className="flex flex-wrap gap-5">
            <Button size="lg" className="h-16 px-10 bg-blue-600 hover:bg-blue-700 text-white rounded-none text-lg font-bold transition-all" asChild>
              <Link href="/#contact" className="flex items-center gap-2">
                견적 및 기술 상담
                <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 border-white text-white hover:bg-white hover:text-[#003366] rounded-none text-lg font-bold transition-all" asChild>
              <Link href="/product">주요 실적 보기</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* 하단 장식선 - 정교함 강조 */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-600" />
    </section>
  )
}
