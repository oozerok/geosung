import ProductCard from "@/components/product-card"

export default function ProductsPage() {
  const products = [
    {
      title: "알루미늄 정밀 하우징",
      desc: "CNC 5축 가공을 통한 고정밀 알루미늄 하우징 제작 사례입니다. 전자 기기용으로 사용됩니다.",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "스테인리스 정밀 샤프트",
      desc: "초정밀 공차가 요구되는 의료기기용 스테인리스 샤프트 가공 사례입니다.",
      image: "https://images.unsplash.com/photo-1590950672600-b6c867202390?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "산업용 금형 베이스",
      desc: "MCT 대형 가공을 통한 고강도 특수강 금형 베이스 제작 사례입니다.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "티타늄 임플란트 부품",
      desc: "난삭재인 티타늄을 활용한 고정밀 의료용 부품 가공 사례입니다.",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "자동화 설비 지그",
      desc: "반도체 라인 자동화 설비에 들어가는 특수 지그 제작 사례입니다.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "자동차 조향 부품",
      desc: "내구성이 강조되는 자동차 조향 장치 핵심 부품 가공 사례입니다.",
      image: "https://images.unsplash.com/photo-1581092921461-7d656054830b?q=80&w=1000&auto=format&fit=crop"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Sub Hero Section */}
      <section className="relative pt-40 pb-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            가공 사례
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            거성정밀의 정밀한 기술력이 담긴 주요 제작 사례를 확인해 보세요. 
            다양한 재질과 까다로운 공정의 부품을 완벽하게 구현합니다.
          </p>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                desc={product.desc}
                image={product.image}
              />
            ))}
          </div>

          {/* Contact CTA in Sub Page */}
          <div className="mt-24 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">원하시는 제품의 견적이 궁금하신가요?</h2>
            <p className="text-slate-600 mb-10">도면을 보내주시면 상세한 기술 검토와 견적을 제안드립니다.</p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-blue-200">
                무료 견적 상담
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
