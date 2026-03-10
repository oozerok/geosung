import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      title: "선박 엔진 정밀 부품",
      desc: "고온·고압의 극한 환경에서 작동하는 선박 엔진의 핵심 부품(Cylinder, Liner, Piston 등)을 초정밀 공차로 가공하여 최상의 엔진 성능을 보장합니다.",
      num: "01",
      img: "https://images.unsplash.com/photo-1590950672600-b6c867202390?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "유압 및 구동 시스템",
      desc: "대형 선박의 조향 및 구동을 담당하는 고정밀 유압 실린더와 구동축을 제작합니다. 우수한 내구성과 기밀성을 바탕으로 해양 환경의 혹독함을 견뎌냅니다.",
      num: "02",
      img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "특수 선박 기자재",
      desc: "LNG선, 쇄빙선 등 특수 목적 선박에 필요한 내저온성·내부식성 특수강 부품을 가공합니다. 엄격한 품질 관리를 통해 선급 인증 기준을 만족시킵니다.",
      num: "03",
      img: "https://images.unsplash.com/photo-1559139225-421502ef4848?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "방산 및 플랜트 부품",
      desc: "해군 함정 및 해양 플랜트에 사용되는 초정밀 방산 부품과 기계 장치를 제작합니다. 수십 년의 노하우로 완성된 최고 수준의 가공 품질을 제공합니다.",
      num: "04",
      img: "https://images.unsplash.com/photo-1581092921461-7d656054830b?q=80&w=1000&auto=format&fit=crop"
    }
  ]

  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="mb-24 relative z-10">
          <h2 className="text-blue-700 font-black text-xl mb-4 tracking-tighter">OUR SERVICES</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight">
            세계를 누비는 대형 선박의 <br />
            보이지 않는 가치를 만듭니다.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {services.map((s, i) => (
            <div key={i} className="group relative overflow-hidden min-h-[400px] border-t-2 border-slate-950 pt-10">
              {/* Card Background Image (Hidden normally, shows on hover or subtle) */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                <Image src={s.img} alt={s.title} fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
              </div>

              <span className="absolute -top-1 right-0 text-7xl font-black text-slate-50 group-hover:text-blue-50 transition-colors -z-10">
                {s.num}
              </span>
              <div className="max-w-xl">
                <h4 className="text-2xl font-black text-slate-950 mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 inline-block" />
                  {s.title}
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {s.desc}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
                  상세보기 <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
