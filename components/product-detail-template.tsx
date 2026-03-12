import SubBanner from "@/components/sub-banner"
import SubNav from "@/components/sub-nav"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, CheckCircle2, Factory, ShieldCheck, Box } from "lucide-react"

interface ProductDetailProps {
  product: {
    id: string
    title: string
    category: string
    img: string
    description: string
    specs: { label: string; value: string }[]
    features: string[]
  }
}

export default function ProductDetailTemplate({ product }: ProductDetailProps) {
  const portfolioNav = [
    { name: "전체보기", href: "/portfolio" },
    { name: "방위산업부품", href: "/portfolio/defense" },
    { name: "유압부품", href: "/portfolio/hydraulic" },
    { name: "조선기자재", href: "/portfolio/marine" },
  ]

  return (
    <>
      <SubBanner 
        title="제품소개" 
        currentPath={["제품소개", product.category, product.title]} 
      />
      <SubNav items={portfolioNav} activeItem={product.category} />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-700 font-bold transition-colors group">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              목록으로 돌아가기
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Product Image */}
            <div className="lg:w-1/2 w-full sticky top-32">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
                <Image 
                  src={product.img} 
                  alt={product.title} 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-slate-900/5" />
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2 w-full">
              <div className="mb-10">
                <span className="inline-block px-4 py-1 bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-[0.2em] rounded-full mb-6">
                  {product.category}
                </span>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                  {product.title}
                </h3>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specifications Table */}
              <div className="mb-12">
                <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  제품 사양 (Specifications)
                </h4>
                <div className="border-t-2 border-slate-900">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex border-b border-slate-100">
                      <div className="w-1/3 bg-slate-50 px-6 py-4 text-sm font-black text-slate-500 uppercase tracking-wider">
                        {spec.label}
                      </div>
                      <div className="w-2/3 px-6 py-4 text-sm font-bold text-slate-800">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-12">
                <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  주요 특징 (Key Features)
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                      <span className="text-slate-700 font-bold tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-12 border-t border-slate-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-3">
                    <Factory className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">Precision<br/>Machined</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-3">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">Quality<br/>Assured</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-3">
                    <Box className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">Custom<br/>Order</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl">
          <div>
            <h4 className="text-white text-2xl font-bold mb-2">이 제품에 대해 궁금하신가요?</h4>
            <p className="text-slate-400 font-medium italic">맞춤형 제작 및 대량 생산 견적을 신속하게 안내해 드립니다.</p>
          </div>
          <Link href="/customer" className="px-12 py-5 bg-blue-600 text-white font-black rounded-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
            견적 문의하기
          </Link>
        </div>
      </section>
    </>
  )
}
