export default function HistoryPage() {
  const historyData = [
    { year: "2025", desc: "SE2200L, SE2200A, SE2600, DNM 4500 등 최신 설비 대거 확충 및 스마트 팩토리 고도화" },
    { year: "2023", desc: "D2-5AX 5축 가공기 및 LYNK2100A 등 정밀 복합 가공 설비 도입" },
    { year: "2020", desc: "VESTA-1000+10K 머시닝센터 도입 및 사업장 생산 라인 재정비" },
    { year: "2012", desc: "두산 Mynx6500/50 및 F500 도입, 조선기자재 정밀가공 역량 강화" },
    { year: "2008", desc: "VX400 머시닝센터 도입 및 방산·항공기 부품 가공 분야 진출" },
    { year: "2000", desc: "거성정밀 설립 (9월 16일), 부산 사상구 삼락동 터전 마련" },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Sub Hero */}
      <section className="relative pt-40 pb-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">연혁</h1>
          <p className="text-blue-400 font-bold tracking-widest uppercase text-sm">COMPANY HISTORY</p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-slate-900 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-24">
              {historyData.map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Point */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 border-4 border-white rounded-full -translate-x-1/2 z-10 hidden md:block" />
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-right'}`}>
                    <div className="bg-slate-50 p-8 border-2 border-slate-100 hover:border-slate-900 transition-all">
                      <span className="text-4xl font-black text-blue-600 block mb-4 tracking-tighter">{item.year}</span>
                      <p className="text-xl font-bold text-slate-900 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview in History Page */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8">거성정밀 개요</h2>
              <div className="grid grid-cols-2 gap-x-12 gap-y-8 text-lg">
                <div>
                  <p className="text-blue-400 text-sm font-bold uppercase mb-2">Company Name</p>
                  <p className="font-bold">거성정밀</p>
                </div>
                <div>
                  <p className="text-blue-400 text-sm font-bold uppercase mb-2">Established</p>
                  <p className="font-bold">2000. 09. 16</p>
                </div>
                <div>
                  <p className="text-blue-400 text-sm font-bold uppercase mb-2">President</p>
                  <p className="font-bold">변 우 영</p>
                </div>
                <div>
                  <p className="text-blue-400 text-sm font-bold uppercase mb-2">Workforce</p>
                  <p className="font-bold">11명 (정예 기술 인력)</p>
                </div>
              </div>
            </div>
            <div className="p-10 border-2 border-slate-800 bg-slate-900">
               <h3 className="text-2xl font-black mb-6">주요 사업 영역</h3>
               <ul className="space-y-4 text-slate-400 font-medium">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> 조선기자재 정밀 가공</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> 유압 및 일반 기계 부품</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> 항공기 및 방위산업 부품</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> 특수 목적용 소형 정밀 부품</li>
               </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
