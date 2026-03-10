import Image from "next/image"

export default function GreetingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Sub Hero */}
      <section className="relative pt-40 pb-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">인사말</h1>
          <p className="text-blue-400 font-bold tracking-widest uppercase text-sm">CEO GREETING</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 relative aspect-[3/4] w-full bg-slate-100 border-2 border-slate-900 overflow-hidden">
               {/* 대표자 이미지 자리 (이미지가 없을 경우 로고나 상징적 이미지로 대체 가능) */}
               <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold italic text-xl p-8 text-center bg-slate-50">
                거성정밀은 <br /> 기술로 신뢰를 <br /> 쌓아갑니다.
               </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-8 leading-tight">
                "최고의 회사가 되기 위해 <br /> 끊임없이 노력하겠습니다."
              </h2>
              
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>안녕하십니까?</p>
                <p>
                  저희 <strong>거성정밀</strong>은 오랜 기간 동안 기술의 축적된 노하우를 겸비하고 있으며, 
                  최고의 기술력과 철저한 품질관리를 바탕으로 오늘도 정진하고 있습니다.
                </p>
                <p>
                  <strong>정직, 근면, 친절, 미래지향적 경영</strong>이라는 사훈 아래 
                  임직원 모두가 하나되어 최고의 자리를 계속 이어 나갈 것을 고객 여러분께 약속 드립니다.
                </p>
                <p className="pt-8">감사합니다.</p>
                
                <div className="pt-10 border-t border-slate-100 flex items-end gap-4">
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-2">Representative Director</p>
                    <p className="text-2xl font-black text-slate-950">대표이사 변 우 영</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-black text-slate-900 mb-16">경영 이념</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "정직", desc: "신뢰를 바탕으로 한 투명한 경영" },
              { title: "근면", desc: "기술 연마를 향한 끊임없는 노력" },
              { title: "친절", desc: "고객을 최우선으로 생각하는 마음" },
              { title: "미래지향", desc: "새로운 기술로 앞서가는 혁신" }
            ].map((p, i) => (
              <div key={i} className="bg-white p-10 border-2 border-slate-100 hover:border-blue-600 transition-all group">
                <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600">{p.title}</h4>
                <p className="text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
