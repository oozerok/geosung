import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function KeyProducts() {
  const products = [
    {
      category: "HYDRAULIC",
      title: "유압 부품 (LIMIT V/V)",
      desc: "정밀 유압 시스템의 핵심인 리미트 밸브 및 고압 제어 부품",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1000&auto=format&fit=crop"
    },
    {
      category: "DEFENSE",
      title: "방위산업 부품 (BLOCK)",
      desc: "엄격한 군사 규격을 만족하는 고강도 정밀 가공 블록 및 핵심 모듈",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop"
    },
    {
      category: "AEROSPACE",
      title: "항공기 부품 (쪼인트, 벨크랭크)",
      desc: "항공기 구동축 및 제어 시스템용 초경량·고정밀 특수 부품",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?q=80&w=1000&auto=format&fit=crop"
    },
    {
      category: "MARINE",
      title: "조선기자재 (SLEEVE, 쪼인트)",
      desc: "대형 선박의 엔진 및 추진 시스템용 고내구성 정밀 부품",
      image: "https://images.unsplash.com/photo-1559139225-421502ef4848?q=80&w=1000&auto=format&fit=crop"
    }
  ]

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-blue-500 font-black text-xl mb-4 tracking-[0.3em]">PRODUCTION LINE</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            불가능을 가능케 하는 <br />
            초정밀 가공 포트폴리오
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
          {products.map((p, i) => (
            <div key={i} className="group relative aspect-[3/4] overflow-hidden bg-slate-900 border border-white/10">
              <Image 
                src={p.image} 
                alt={p.title} 
                fill 
                className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-blue-500 font-black text-xs tracking-widest mb-3 block">{p.category}</span>
                <h4 className="text-2xl font-black text-white mb-4 leading-tight">{p.title}</h4>
                <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-6 leading-relaxed">
                  {p.desc}
                </p>
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
