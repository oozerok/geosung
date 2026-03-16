import Image from "next/image"
import { Plus } from "lucide-react"
import Link from "next/link"
import { portfolioData } from "@/lib/portfolio-data"

export default function Portfolio() {
  // 각 카테고리별로 대표 항목 하나씩 추출
  const categoriesToShow = ["defense", "hydraulic", "marine"]
  const items = categoriesToShow
    .map(slug => portfolioData.find(item => item.slug === slug))
    .filter((item): item is any => item !== undefined)

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-700 font-black text-sm tracking-[0.4em] mb-4 uppercase">Portfolio</h2>
          <h3 className="text-4xl font-bold text-slate-900 tracking-tight">주요 가공사례</h3>
          <div className="w-16 h-1 bg-slate-200 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 bg-white border border-slate-200">
          {items.map((item, i) => (
            <Link key={i} href={`/portfolio/${item.id}`} className="group relative aspect-square overflow-hidden border-r border-b border-slate-200 last:border-r-0 block">
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95" 
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/40 lg:bg-blue-700/80 flex flex-col items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white mb-6 transform lg:-translate-y-4 lg:group-hover:translate-y-0 transition-transform">
                  <Plus className="w-6 h-6" />
                </div>
                <span className="text-white/70 text-sm font-bold tracking-widest mb-2">{item.category}</span>
                <h4 className="text-xl font-bold text-white text-center px-6">{item.title}</h4>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/portfolio" className="inline-flex items-center justify-center px-10 py-4 bg-white border-2 border-slate-200 text-slate-800 font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all rounded-md shadow-sm">
            전체 가공사례 확인하기
          </Link>
        </div>
      </div>
    </section>
  )
}
