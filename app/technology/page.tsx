import SubBanner from "@/components/sub-banner"
import SubNav from "@/components/sub-nav"

export default function TechnologyEquipmentPage() {
  const techNav = [
    { name: "주요설비", href: "/technology" },
    // { name: "품질인증", href: "/technology/certification" },
  ]

  const equipmentList = [
    { name: "SKT100", spec: "6인치", maker: "위아", count: 2, date: "2010.7" },
    { name: "SE2200L", spec: "8인치", maker: "위아", count: 2, date: "2025.9" },
    { name: "SKT200", spec: "8인치", maker: "위아", count: 2, date: "2011.11" },
    { name: "SE2200A", spec: "6인치", maker: "위아", count: 2, date: "2025.9" },
    { name: "SE2600", spec: "10인치", maker: "위아", count: 2, date: "2025.10" },
    { name: "SE2200L", spec: "8인치", maker: "위아", count: 4, date: "2025.10" },
    { name: "VESTA-1000", spec: "머시닝센터 5호기", maker: "화천", count: 1, date: "2014.07" },
    { name: "D2-5AX", spec: "MACHINING CENTER", maker: "화천", count: 1, date: "2023.03" },
    { name: "D2-5AX", spec: "MACHINING CENTER", maker: "화천", count: 1, date: "2019.02" },
    { name: "VX400", spec: "4호기", maker: "위아", count: 1, date: "2008.7" },
    { name: "VX400", spec: "4호기", maker: "위아", count: 1, date: "2010.9" },
    { name: "두산 Mynx6500/50", spec: "머시닝센터 6.5호기", maker: "두산", count: 1, date: "2012.07" },
    { name: "F500", spec: "머시닝센터 5호기", maker: "현대 위아", count: 1, date: "2012.09" },
    { name: "VESTA-1000+10K", spec: "머시닝센터 5호기", maker: "화천", count: 2, date: "2020.03" },
    { name: "LYNK2100A, 2100LB", spec: "터닝센터 6/8인치", maker: "두산", count: 3, date: "2023.07" },
    { name: "DNM 4500", spec: "머시닝센터", maker: "디엔솔루션즈", count: 2, date: "2025.09" },
  ]

  return (
    <>
      <SubBanner 
        title="주요설비" 
        currentPath={["기술현황", "주요설비"]} 
      />
      <SubNav items={techNav} activeItem="주요설비" />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">생산 설비 현황</h3>
            <p className="text-slate-500 font-medium">거성정밀이 보유한 최첨단 정밀 가공 설비를 소개합니다.</p>
            <div className="w-12 h-1 bg-blue-700 mx-auto mt-6" />
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-8 py-5 text-sm font-black text-slate-400 uppercase tracking-widest">기계명</th>
                  <th className="px-8 py-5 text-sm font-black text-slate-400 uppercase tracking-widest">인치/규격</th>
                  <th className="px-8 py-5 text-sm font-black text-slate-400 uppercase tracking-widest">제조회사</th>
                  <th className="px-8 py-5 text-sm font-black text-slate-400 uppercase tracking-widest">대수</th>
                  <th className="px-8 py-5 text-sm font-black text-slate-400 uppercase tracking-widest">제작날짜</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {equipmentList.map((eq, i) => (
                  <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                    <td className="px-8 py-5 font-bold text-slate-900">{eq.name}</td>
                    <td className="px-8 py-5 text-slate-600 font-medium">{eq.spec}</td>
                    <td className="px-8 py-5 text-slate-600 font-medium">{eq.maker}</td>
                    <td className="px-8 py-5 text-blue-700 font-black">{eq.count}</td>
                    <td className="px-8 py-5 text-slate-400 font-medium">{eq.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video relative group">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800" alt="Factory" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video relative group">
              <img src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?q=80&w=800" alt="Machinery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video relative group">
              <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800" alt="Production" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
