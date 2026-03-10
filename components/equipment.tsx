import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Zap, Cog } from "lucide-react"
import Image from "next/image"

const machines = [
  {
    name: "DOOSAN PUMA V8300M",
    type: "Vertical CNC Lathe",
    qty: "4대",
    desc: "대형 실린더 및 샤프트 가공용 수직 선반",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "MAKINO V55 5-Axis",
    type: "Vertical Machining Center",
    qty: "2대",
    desc: "복합 형상 고정밀 밀링 및 5축 복합 가공기",
    img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "HYUNDAI WIA F650",
    type: "Horizontal Machining Center",
    qty: "3대",
    desc: "고강성 중량물 자동 생산 라인",
    img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1000&auto=format&fit=crop"
  },
]

export default function Equipment() {
  return (
    <section id="equipment" className="bg-[#f8f9fb] py-32 relative overflow-hidden">
      {/* Decorative Texture */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-900/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-700 font-bold text-lg mb-4 tracking-wider">OUR INFRASTRUCTURE</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              품질의 격차를 만드는 <br />
              거성정밀의 생산 인프라
            </h3>
          </div>
          <div className="text-slate-600 max-w-sm text-lg border-l-4 border-blue-600 pl-6 leading-relaxed font-medium">
            최신 스마트 팩토리 시스템과 고성능 정밀 장비를 구축하여, 
            가장 까다로운 선급 규격도 완벽하게 대응합니다.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {machines.map((m) => (
            <Card key={m.name} className="rounded-none border-none shadow-xl bg-white group overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={m.img} alt={m.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <CardContent className="p-8">
                <div className="text-xs font-bold text-blue-600 uppercase mb-2">
                  {m.type}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 transition-colors group-hover:text-blue-600">
                  {m.name}
                </h3>
                <p className="text-slate-500 mb-8 h-12 leading-relaxed">
                  {m.desc}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <span className="font-bold text-slate-900">보유 수량</span>
                  <span className="text-2xl font-black text-blue-600">{m.qty}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Statistics Bar - From PDF "회사개요" */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t-2 border-slate-900 pt-16">
          {[
            { label: "설립일", value: "2000. 09. 16" },
            { label: "보유 장비", value: "30여 대" },
            { label: "전문 인력", value: "11명" },
            { label: "선급 인증", value: "100% 대응" }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-slate-500 font-bold text-sm mb-2">{stat.label}</p>
              <p className="text-2xl md:text-3xl font-black text-slate-950">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
