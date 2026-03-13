import SubBanner from "@/components/sub-banner"
import SubNav from "@/components/sub-nav"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { notFound } from "next/navigation"
import { portfolioData } from "@/lib/portfolio-data"
import Pagination from "@/components/pagination"

interface CategoryPageProps {
  params: Promise<{ category: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const ITEMS_PER_PAGE = 9

const categoryMap: Record<string, string> = {
  defense: "방위산업부품",
  hydraulic: "유압부품",
  marine: "조선기자재",
  machinery: "일반기계",
}

export default async function ProductCategoryPage({ params, searchParams }: CategoryPageProps) {
  const { category } = await params
  const { page } = await searchParams
  const categoryName = categoryMap[category]

  if (!categoryName) {
    notFound()
  }

  const currentPage = Number(page) || 1
  const filteredProducts = portfolioData.filter(p => p.slug === category)
  
  const totalItems = filteredProducts.length
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentItems = filteredProducts.slice(startIndex, endIndex)

  const portfolioNav = [
    { name: "전체보기", href: "/portfolio" },
    { name: "방위산업부품", href: "/portfolio/category/defense" },
    { name: "유압부품", href: "/portfolio/category/hydraulic" },
    { name: "조선기자재", href: "/portfolio/category/marine" },
  ]

  return (
    <>
      <SubBanner 
        title="가공사례" 
        currentPath={["가공사례", categoryName]} 
      />
      <SubNav items={portfolioNav} activeItem={categoryName} />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 bg-slate-50 p-6 rounded-2xl">
            <div className="flex gap-4">
              <span className="text-sm font-bold text-slate-500">
                {categoryName} 리스트 : <span className="text-blue-700">{totalItems}</span> items
              </span>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <div className="flex-1 md:w-64 relative">
                <input 
                  type="text" 
                  placeholder="제품명 검색"
                  className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-700 transition-colors"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
              <button className="px-6 py-2 bg-slate-900 text-white font-bold text-sm rounded-lg hover:bg-black transition-colors">
                검색
              </button>
            </div>
          </div>

          {currentItems.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {currentItems.map((p, i) => (
                  <Link key={i} href={`/portfolio/${p.id}`} className="group cursor-pointer block">
                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-sm mb-6 bg-slate-100">
                      <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-blue-900/10 transition-colors" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-md mb-3">
                        {p.category}
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">{p.title}</h4>
                      <div className="w-8 h-[2px] bg-slate-200 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500" />
                    </div>
                  </Link>
                ))}
              </div>
              
              <Pagination 
                totalItems={totalItems} 
                itemsPerPage={ITEMS_PER_PAGE} 
                currentPage={currentPage} 
                baseUrl={`/portfolio/category/${category}`}
              />
            </>
          ) : (
            <div className="py-32 text-center border-2 border-dashed border-slate-100 rounded-3xl">
              <p className="text-slate-400 font-bold">등록된 제품이 없습니다.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
