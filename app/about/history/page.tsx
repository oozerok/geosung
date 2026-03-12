import SubBanner from "@/components/sub-banner"
import SubNav from "@/components/sub-nav"
import { Award, Rocket, TrendingUp, Cpu, ShieldCheck, Factory, History } from "lucide-react"

export default function AboutHistoryPage() {
  const aboutNav = [
    { name: "인사말", href: "/about" },
    { name: "회사개요", href: "/about/overview" },
    { name: "연혁", href: "/about/history" },
    { name: "오시는길", href: "/about/location" },
  ]

  const history = [
    {
      period: "2024 ~ Present",
      title: "기술 혁신 및 미래 성장 가속화",
      icon: <Rocket className="w-6 h-6" />,
      items: [
        { year: "2026.03", text: "공식 홈페이지 전면 리뉴얼 및 온라인 고객 소통 강화" },
        { year: "2025.10", text: "대형 CNC 선반(SE2600) 및 자동화 설비 10대 추가 확충" },
        { year: "2025.01", text: "스마트 공정 관리 시스템(MES) 고도화 추진" },
        { year: "2024.05", text: "신규 특수 소재 가공 공정 특허 출원" }
      ]
    },
    {
      period: "2020 ~ 2023",
      title: "정밀 가공 솔루션 다변화",
      icon: <Cpu className="w-6 h-6" />,
      items: [
        { year: "2023.03", text: "화천 5축 가공기(D2-5AX) 도입 및 정밀 가공 역량 강화" },
        { year: "2022.11", text: "방위산업 부품 품질 보증 시스템 최우수 등급 획득" },
        { year: "2021.08", text: "글로벌 강소기업 유망 가공 파트너사 선정" },
        { year: "2020.06", text: "ISO 9001:2015 품질경영시스템 인증 획득" }
      ]
    },
    {
      period: "2010 ~ 2019",
      title: "사업 영역 확대 및 기술 안정화",
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        { year: "2018.12", text: "조선 기자재 핵심 슬리브 및 조인트 부품 양산 체제 구축" },
        { year: "2015.04", text: "공장 생산 설비 레이아웃 최적화 및 확장 이전" },
        { year: "2014.07", text: "고성능 머시닝센터(VESTA-1000) 시리즈 도입" },
        { year: "2010.07", text: "현대위아 CNC 선반 SKT100 시리즈 집중 도입" }
      ]
    },
    {
      period: "2000 ~ 2009",
      title: "거성정밀 태동 및 기반 구축",
      icon: <Factory className="w-6 h-6" />,
      items: [
        { year: "2008.07", text: "기계 부품 정밀 가공용 MCT 설비 최초 가동" },
        { year: "2005.10", text: "주요 방산 협력사 정식 외주 가공 업체 등록" },
        { year: "2002.03", text: "CNC 선반 초정밀 가공 원천 기술 확보" },
        { year: "2000.09", text: "9월 16일 거성정밀 설립 (부산 사상구)" }
      ]
    }
  ]

  return (
    <>
      <SubBanner 
        title="연혁" 
        currentPath={["회사소개", "연혁"]} 
      />
      <SubNav items={aboutNav} activeItem="연혁" />

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-black mb-6 border border-blue-100 uppercase tracking-widest">
              <History className="w-4 h-4" />
              History
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">멈추지 않는 도전의 역사</h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              거성정밀은 2000년 첫 걸음을 뗀 순간부터 지금까지 <br className="hidden md:block" />
              대한민국 정밀 가공 산업의 역사를 함께 써내려 오고 있습니다.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Main Center Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-slate-200 to-slate-100 md:-translate-x-1/2 rounded-full opacity-30" />

            <div className="space-y-32">
              {history.map((section, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Point on Line */}
                  <div className="absolute left-0 md:left-1/2 top-0 -translate-y-1/2 md:-translate-x-1/2 w-14 h-14 bg-white rounded-2xl border-4 border-blue-600 shadow-xl z-20 flex items-center justify-center text-blue-600 group">
                    {section.icon}
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-[45%] group">
                    <div className="relative p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 hover:border-blue-200 transition-all duration-500 overflow-hidden">
                      {/* Background Year Accent */}
                      <div className={`absolute -top-4 font-black text-slate-50 text-[8rem] leading-none select-none -z-0 opacity-50 group-hover:text-blue-50 transition-colors ${i % 2 === 1 ? "-left-4 text-left" : "-right-4 text-right"}`}>
                        {section.period.split(' ~ ')[0]}
                      </div>

                      <div className="relative z-10">
                        <div className="text-blue-600 font-black text-sm tracking-widest uppercase mb-4">
                          {section.period}
                        </div>
                        <h4 className="text-2xl font-black text-slate-900 mb-10 tracking-tight">
                          {section.title}
                        </h4>
                        
                        <div className="space-y-6">
                          {section.items.map((item, idx) => (
                            <div key={idx} className="flex gap-4 group/item">
                              <span className="text-blue-700 font-black text-sm pt-1 shrink-0">{item.year}</span>
                              <p className="text-slate-600 font-bold leading-relaxed text-sm group-hover/item:text-slate-900 transition-colors">
                                {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Summary / Future Message */}
          <div className="mt-40 text-center max-w-4xl mx-auto">
            <div className="p-12 md:p-20 bg-slate-900 rounded-[3rem] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600 opacity-10 skew-x-12 translate-x-32" />
              <div className="relative z-10">
                <ShieldCheck className="w-16 h-16 text-blue-500 mx-auto mb-8" />
                <h4 className="text-white text-3xl md:text-4xl font-black mb-6 tracking-tight">
                  새로운 25년을 향한 도약
                </h4>
                <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                  과거의 성과에 안주하지 않고, 거성정밀은 세계 최고의 정밀도를 자랑하는 <br className="hidden md:block" />
                  글로벌 리딩 파트너로 성장해 나갈 것을 약속드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
