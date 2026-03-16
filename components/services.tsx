import { Settings, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const businessItems = [
    { title: "CNC 선반 가공", href: "/business", img: "/cnc2.png" },
    { title: "MCT 복합 가공", href: "/business/mct", img: "/mct.png" },
    { title: "5축 및 특수 가공", href: "/business/5axis", img: "/5axis.png" },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Quick Nav Row */}

        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-4">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">거성정밀 <span className="text-blue-700">핵심 사업분야</span></h2>
            <p className="text-slate-500 mt-4 font-medium text-lg italic">The Highest Level of Technical Precision</p>
          </div>
          <Link href="/business" className="flex items-center gap-2 px-6 py-3 border-2 border-slate-200 rounded-full font-bold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
            사업분야 전체보기 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {businessItems.map((item, i) => (
            <div key={i} className="group relative h-[450px] overflow-hidden rounded-2xl bg-slate-900 shadow-xl">
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full flex flex-col items-center">
                <h4 className="text-2xl font-bold text-white mb-6 tracking-tight text-center">{item.title}</h4>
                <div className="w-12 h-1 bg-blue-500 mb-8 transform group-hover:scale-x-150 transition-transform" />
                <Link href={item.href} className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm rounded-lg opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-500 hover:bg-blue-600 hover:border-blue-600">
                  자세히 보기
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
