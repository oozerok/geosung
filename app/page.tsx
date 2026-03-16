import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import { Metadata } from "next"
import { CheckCircle2, Factory, ShieldCheck, Users, Ruler } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"
import Counter from "@/components/counter"

const siteUrl = "https://geosungprecision.com";
export const metadata: Metadata = {
  title: {
    default: "거성정밀 | CNC / MCT 정밀가공 전문",
    template: "%s | 거성정밀",
  },
  description:
    "거성정밀은 CNC 선반, MCT, 정밀부품 가공을 중심으로 산업용 핵심 부품 가공 솔루션을 제공합니다.",
  keywords: [
    "거성정밀",
    "CNC 가공",
    "정밀가공",
    "선반가공",
    "MCT 가공",
    "부산 정밀가공",
    "부산 CNC 가공",
    "산업부품 가공",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "거성정밀 | CNC 정밀가공 전문",
    description:
      "CNC 선반, MCT, 정밀부품 가공 전문업체 거성정밀",
    url: siteUrl,
    siteName: "거성정밀",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function MainPage() {
  return (
    <>
      <Hero />
      
      {/* 4-Column Quick Links Section */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-6 p-8 bg-white shadow-sm border border-slate-100 rounded-xl hover:shadow-md transition-shadow h-full">
                <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center shrink-0">
                  <Factory className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">첨단 가공 설비</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium tracking-tight">최신 CNC/MCT 정밀 설비 보유</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex items-center gap-6 p-8 bg-white shadow-sm border border-slate-100 rounded-xl hover:shadow-md transition-shadow h-full">
                <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">철저한 품질관리</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium tracking-tight">엄격한 자체 품질 검수 시스템</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex items-center gap-6 p-8 bg-white shadow-sm border border-slate-100 rounded-xl hover:shadow-md transition-shadow h-full">
                <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center shrink-0">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">기술 전문 인력</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium tracking-tight">수십 년 경력의 가공 마스터</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-6 p-8 bg-white shadow-sm border border-slate-100 rounded-xl hover:shadow-md transition-shadow h-full">
                <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">완벽한 납기 준수</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium tracking-tight">신속하고 정확한 제품 공급</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <ScrollReveal>
        <Portfolio />
      </ScrollReveal>
      
      {/* Middle Content Banner - Engineering Blueprint Graphic Version */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <ScrollReveal delay={0.2} className="lg:w-1/2">
              <div className="inline-block px-4 py-1 bg-blue-600 text-white text-[10px] font-black tracking-[0.3em] mb-8 uppercase">Precision Heritage</div>
              <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] mb-10 tracking-tight">
                25년 가공 외길,<br />
                <span className="text-blue-500">거성정밀</span>의 자부심입니다.
              </h2>
              <p className="text-slate-400 text-lg lg:text-xl leading-relaxed mb-12 font-medium">
                거성정밀은 2000년 설립 이후 오직 정밀 가공 한 분야에만 매진해 왔습니다. 
                작은 나사 하나부터 거대한 엔진 부품까지, 우리가 만든 부품이 대한민국 산업의 
                심장이 된다는 사명감으로 임하고 있습니다.
              </p>
              
              <div className="grid grid-cols-2 gap-10">
                <div className="border-l-2 border-blue-600 pl-6">
                  <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">
                    <Counter target={1500} suffix="+" />
                  </div>
                  <div className="text-xs text-slate-500 font-bold tracking-widest uppercase">Project Success</div>
                </div>
                <div className="border-l-2 border-slate-800 pl-6">
                  <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">
                    <Counter target={100} suffix="%" />
                  </div>
                  <div className="text-xs text-slate-500 font-bold tracking-widest uppercase">Precision Guarantee</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="lg:w-1/2 relative">
              {/* Engineering Blueprint Graphic Container */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] bg-[#0a192f] group">
                {/* Blueprint Background Grid */}
                <div className="absolute inset-0 opacity-20" style={{ 
                  backgroundImage: 'linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }} />
                
                {/* Abstract Technical Lines & Shapes */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <svg viewBox="0 0 400 300" className="w-full h-full text-blue-500/40 stroke-current fill-none transition-transform duration-1000 group-hover:scale-105" strokeWidth="1">
                    <circle cx="200" cy="150" r="120" strokeDasharray="8 4" />
                    <circle cx="200" cy="150" r="100" />
                    <circle cx="200" cy="150" r="40" strokeWidth="2" className="text-blue-400" />
                    <line x1="200" y1="0" x2="200" y2="300" strokeDasharray="4 4" />
                    <line x1="0" y1="150" x2="400" y2="150" strokeDasharray="4 4" />
                    <path d="M80 150 L80 50 M320 150 L320 50" strokeDasharray="2 2" />
                    <rect x="140" y="100" width="120" height="100" rx="10" strokeWidth="2" className="text-blue-400" />
                    <path d="M140 150 L100 150 M260 150 L300 150" strokeWidth="2" className="text-blue-400" />
                    <text x="200" y="50" textAnchor="middle" fontSize="10" className="fill-blue-400 font-bold uppercase tracking-tighter">Optimal Tolerance</text>
                    <text x="330" y="155" fontSize="10" className="fill-blue-400 font-bold uppercase tracking-tighter">Precision Finish</text>
                  </svg>
                </div>

                {/* Floating Technical Info Box */}
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-blue-900/40 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-700 group-hover:bg-blue-800/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                      <Ruler className="w-6 h-6" />
                    </div>
                    <div className="text-white font-black tracking-tight uppercase text-sm">Optimal Precision Solutions</div>
                  </div>
                  <p className="text-slate-300 text-sm font-medium leading-relaxed">
                    고객사의 요구 사양을 완벽하게 충족하는 <br />
                    거성정밀만의 숙련된 가공 기술과 철저한 공정 관리입니다.
                  </p>
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* <ScrollReveal>
        <Services />
      </ScrollReveal>

      <ScrollReveal>
        <Portfolio />
      </ScrollReveal> */}
      
      {/* Bottom CTA Section - Simplified Minimal Version */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="bg-slate-900 rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-3xl lg:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
                  최고의 정밀함이 필요하신가요? <br />
                  <span className="text-blue-400">거성의 기술로 답해드립니다.</span>
                </h3>
                
                <p className="text-slate-400 font-medium text-lg mb-12 leading-relaxed">
                  단순한 가공을 넘어 고객사의 성공을 위한 최적의 설계를 제안합니다. <br className="hidden md:block" />
                  정직한 견적과 완벽한 품질로 보답하겠습니다.
                </p>
                
                <Link 
                  href="/customer" 
                  className="inline-flex items-center gap-3 px-12 py-5 bg-blue-600 text-white font-black rounded-xl text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 group"
                >
                  견적 문의하기
                  <CheckCircle2 className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
