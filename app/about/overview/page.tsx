import SubBanner from "@/components/sub-banner"
import SubNav from "@/components/sub-nav"
import { Building2, User, MapPin, Calendar, Users, Briefcase, Mail, Phone, Target, CheckCircle, ShieldCheck, Zap } from "lucide-react"

export default function AboutOverviewPage() {
  const aboutNav = [
    { name: "인사말", href: "/about" },
    { name: "회사개요", href: "/about/overview" },
    { name: "연혁", href: "/about/history" },
    { name: "오시는길", href: "/about/location" },
  ]

  const infoItems = [
    { label: "회사명", value: "거성정밀", icon: <Building2 className="w-5 h-5" /> },
    { label: "대표자", value: "변우영", icon: <User className="w-5 h-5" /> },
    // { label: "설립일", value: "2000년 9월 16일", icon: <Calendar className="w-5 h-5" /> },
    // { label: "인원현황", value: "11명 (사무직 1명, 생산부 10명)", icon: <Users className="w-5 h-5" /> },
    { label: "사업종목", value: "유압, 기계, 방산, 조선기자재 정밀가공", icon: <Briefcase className="w-5 h-5" /> },
    { label: "이메일", value: "contact@geosungprecision.com", icon: <Mail className="w-5 h-5" /> },
    { label: "연락처", value: "TEL: 051-301-7414 / FAX: 051-305-7414", icon: <Phone className="w-5 h-5" /> },
    { label: "주소", value: "부산시 사상구 낙동대로 1404번길 63, 352-17, 352-18 (삼락동)", icon: <MapPin className="w-5 h-5" /> },
  ]

  return (
    <>
      <SubBanner 
        title="회사개요" 
        currentPath={["회사소개", "회사개요"]} 
      />
      <SubNav items={aboutNav} activeItem="회사개요" />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">기업 정보</h3>
            <p className="text-slate-500 font-medium">거성정밀의 기본 정보를 안내해 드립니다.</p>
            <div className="w-12 h-1 bg-blue-700 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-32">
            {infoItems.map((item, i) => (
              <div key={i} className="bg-white p-8 flex items-start gap-6 group hover:bg-blue-50/50 transition-colors">
                <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-lg font-bold text-slate-900 leading-snug break-all">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Management Philosophy & Core Values Section */}
          <div className="space-y-12">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-black text-sm tracking-[0.3em] uppercase">Management Goals</span>
              <h4 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">거성정밀이 지켜나가는 가치</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Philosophy Card */}
              <div className="relative group p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-slate-200/40 overflow-hidden hover:-translate-y-2 transition-all duration-500">
                <div className="absolute -right-4 -top-4 text-[12rem] font-black text-slate-50 leading-none select-none group-hover:text-blue-50 transition-colors">01</div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30">
                    <Target className="w-8 h-8" />
                  </div>
                  <h5 className="text-2xl font-black text-slate-900 mb-6">경영철학</h5>
                  <p className="text-slate-600 font-bold text-lg mb-8 leading-relaxed">
                    "품질제일주의와 고객중심경영으로 <br />사회에 공헌하는 기업"
                  </p>
                  <ul className="space-y-4">
                    {[
                      "철저한 품질관리 시스템 운영",
                      "고객 가치 창출 최우선",
                      "지속적인 기술 혁신 및 개발"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-500 font-medium">
                        <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Core Values Card */}
              <div className="relative group p-10 bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-slate-900/20 overflow-hidden hover:-translate-y-2 transition-all duration-500">
                <div className="absolute -right-4 -top-4 text-[12rem] font-black text-white/5 leading-none select-none group-hover:text-white/10 transition-colors">02</div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white text-slate-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h5 className="text-2xl font-black text-white mb-6">핵심가치</h5>
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      { title: "최고의 기술력", desc: "수십 년 축적된 독보적 가공 노하우", icon: <Zap className="w-5 h-5 text-yellow-400" /> },
                      { title: "무결점 품질", desc: "오차 없는 완벽한 제품 생산 지향", icon: <ShieldCheck className="w-5 h-5 text-green-400" /> },
                      { title: "약속된 납기", desc: "신뢰를 바탕으로 한 정확한 기한 준수", icon: <CheckCircle className="w-5 h-5 text-blue-400" /> }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                        <div className="mt-1">{item.icon}</div>
                        <div>
                          <div className="text-white font-bold">{item.title}</div>
                          <div className="text-white/50 text-sm">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
