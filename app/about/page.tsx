import SubBanner from "@/components/sub-banner"
import SubNav from "@/components/sub-nav"
import { Quote } from "lucide-react"

export default function AboutGreetingPage() {
  const aboutNav = [
    { name: "인사말", href: "/about" },
    { name: "회사개요", href: "/about/overview" },
    { name: "연혁", href: "/about/history" },
    { name: "오시는길", href: "/about/location" },
  ]

  return (
    <>
      <SubBanner 
        title="인사말" 
        currentPath={["회사소개", "인사말"]} 
      />
      <SubNav items={aboutNav} activeItem="인사말" />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Centered Heading */}
          <div className="text-center mb-20 relative">
            <Quote className="w-16 h-16 text-blue-500/10 absolute -top-8 left-1/2 -translate-x-1/2" />
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.3] relative z-10">
              "고객의 신뢰와 만족을 위해 <br />
              <span className="text-blue-700">최고의 정밀도</span>를 제공합니다."
            </h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-10" />
          </div>
          
          {/* Greeting Message Body */}
          <div className="space-y-8 text-lg md:text-xl text-slate-600 leading-relaxed font-medium text-center md:text-left px-4 md:px-10">
            <p>
              안녕하십니까. 저희 거성정밀을 방문해 주셔서 진심으로 감사드립니다.
            </p>
            <p>
              거성정밀은 2000년 설립 이래 오직 '정밀 가공'이라는 한 길만을 걸어오며, 
              축적된 노하우와 독보적인 기술력을 바탕으로 대한민국 산업 발전의 
              작은 밑거름이 되어 왔습니다.
            </p>
            <p>
              급변하는 글로벌 시장 환경 속에서도 저희는 현실에 안주하지 않고 
              지속적인 설비 투자와 기술 개발, 그리고 철저한 품질 관리 시스템을 통해 
              방위산업, 조선, 유압 시스템 등 다양한 분야에서 고객사로부터 그 가치를 
              인정받고 있습니다.
            </p>
            <p>
              단순한 부품 가공을 넘어, 고객사의 성공이 곧 우리의 성공이라는 
              파트너십 정신으로 최고의 품질과 정확한 납기를 약속드립니다. 
              앞으로도 거성정밀은 끊임없는 혁신을 통해 세계 최고의 정밀 가공 
              전문 기업으로 도약하겠습니다.
            </p>
            <p className="pt-8 font-bold text-slate-900">
              거성정밀 임직원 일동
            </p>
          </div>

          {/* Formal Signature Section */}
          <div className="mt-20 flex flex-col items-center md:items-end md:pr-10 border-t border-slate-100 pt-12">
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Representative Director</div>
                <div className="text-3xl font-black text-slate-900 flex items-baseline gap-2">
                  대표이사 <span className="text-blue-700 text-4xl">변 우 영</span>
                </div>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-blue-700/20 flex items-center justify-center text-blue-700">
                <span className="font-serif font-bold text-lg leading-tight text-center">거성<br/>정밀</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="font-serif italic text-4xl text-slate-200 select-none">Byeon Woo-Young</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
