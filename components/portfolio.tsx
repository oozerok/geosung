import Image from "next/image"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const items = [
    { title: "DEFENSE PARTS", category: "방위산업 부품", href: "/portfolio/category/defense", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" },
    { title: "HYDRAULIC PARTS", category: "유압 부품", href: "/portfolio/category/hydraulic", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop" },
    { title: "MARINE PARTS", category: "조선기자재", href: "/portfolio/category/marine", img: "https://images.unsplash.com/photo-1559139225-421502ef4848?q=80&w=800&auto=format&fit=crop" },
  ]

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-700 font-black text-sm tracking-[0.4em] mb-4 uppercase">Portfolio</h2>
          <h3 className="text-4xl font-bold text-slate-900 tracking-tight">주요 생산 제품</h3>
          <div className="w-16 h-1 bg-slate-200 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 bg-white border border-slate-200">
          {items.map((item, i) => (
            <Link key={i} href={item.href} className="group relative aspect-square overflow-hidden border-r border-b border-slate-200 last:border-r-0 block">
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95" 
              />
              
              {/* Hover Overlay - Mobile: semi-transparent by default, Desktop: hidden until hover */}
              <div className="absolute inset-0 bg-blue-700/60 lg:bg-blue-700/80 flex flex-col items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
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
            전체 제품 확인하기
          </Link>
        </div>
      </div>
    </section>
  )
}
