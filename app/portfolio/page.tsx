import SubBanner from "@/components/sub-banner"
import SubNav from "@/components/sub-nav"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

export default function PortfolioPage() {
  const portfolioNav = [
    { name: "전체보기", href: "/portfolio" },
    { name: "방위산업부품", href: "/portfolio/category/defense" },
    { name: "유압부품", href: "/portfolio/category/hydraulic" },
    { name: "조선기자재", href: "/portfolio/category/marine" },
  ]

  const products = [
    { id: "limit-vv-body", title: "LIMIT V/V Body (Small)", category: "유압부품", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=600" },
    { id: "precision-block-a", title: "Precision Block A-Type", category: "방위산업", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600" },
    { id: "engine-sleeve-250", title: "Engine Sleeve 250mm", category: "조선기자재", img: "https://images.unsplash.com/photo-1559139225-421502ef4848?q=80&w=600" },
    { id: "control-valve-joint", title: "Control Valve Joint", category: "유압부품", img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?q=80&w=600" },
    { id: "connecting-rod-core", title: "Connecting Rod Core", category: "일반기계", img: "https://images.unsplash.com/photo-1530124560677-bdaea02c9a5b?q=80&w=600" },
    { id: "main-shaft-pinion", title: "Main Shaft Pinion", category: "일반기계", img: "https://images.unsplash.com/photo-1622744761448-f58694031649?q=80&w=600" },
    { id: "defense-housing-unit", title: "Defense Housing Unit", category: "방위산업", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" },
    { id: "hydraulic-piston-rod", title: "Hydraulic Piston Rod", category: "유압부품", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=600" },
    { id: "marine-joint-assembly", title: "Marine Joint Assembly", category: "조선기자재", img: "https://images.unsplash.com/photo-1559139225-421502ef4848?q=80&w=600" },
  ]

  return (
    <>
      <SubBanner 
        title="제품소개" 
        currentPath={["제품소개", "전체보기"]} 
      />
      <SubNav items={portfolioNav} activeItem="전체보기" />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Portfolio Toolbar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 bg-slate-50 p-6 rounded-2xl">
            <div className="flex gap-4">
              <span className="text-sm font-bold text-slate-500">Total <span className="text-blue-700">9</span> items</span>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <select className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 outline-none focus:border-blue-700 transition-colors">
                <option>제품명</option>
                <option>카테고리</option>
              </select>
              <div className="flex-1 md:w-64 relative">
                <input 
                  type="text" 
                  placeholder="검색어를 입력하세요"
                  className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-700 transition-colors"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
              <button className="px-6 py-2 bg-slate-900 text-white font-bold text-sm rounded-lg hover:bg-black transition-colors">
                검색
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((p, i) => (
              <Link key={i} href={`/portfolio/${p.id}`} className="group cursor-pointer block">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-sm mb-6 bg-slate-100">
                  <Image 
                    src={p.img} 
                    alt={p.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-blue-900/10 transition-colors" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-md mb-3">
                    {p.category}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                    {p.title}
                  </h4>
                  <div className="w-8 h-[2px] bg-slate-200 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500" />
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Simulation */}
          <div className="mt-24 flex justify-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center border border-blue-700 bg-blue-700 text-white font-bold rounded-lg">1</button>
            <button className="w-10 h-10 flex items-center justify-center border border-slate-200 hover:border-blue-700 hover:text-blue-700 font-bold rounded-lg transition-colors">2</button>
            <button className="w-10 h-10 flex items-center justify-center border border-slate-200 hover:border-blue-700 hover:text-blue-700 font-bold rounded-lg transition-colors">3</button>
          </div>
        </div>
      </section>
    </>
  )
}
