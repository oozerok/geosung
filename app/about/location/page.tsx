import SubBanner from "@/components/sub-banner"
import SubNav from "@/components/sub-nav"
import { MapPin, Phone, Printer, Bus, Car } from "lucide-react"

export default function AboutLocationPage() {
  const aboutNav = [
    { name: "인사말", href: "/about" },
    { name: "회사개요", href: "/about/overview" },
    { name: "연혁", href: "/about/history" },
    { name: "오시는길", href: "/about/location" },
  ]

  return (
    <>
      <SubBanner 
        title="오시는길" 
        currentPath={["회사소개", "오시는길"]} 
      />
      <SubNav items={aboutNav} activeItem="오시는길" />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Map Section - Real Google Map Embed with Marker */}
          <div className="w-full aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-sm border border-slate-200 mb-16 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.2721011190533!2d128.975440787349!3d35.174787964724915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ea028198f1c9%3A0x6d9f38df0e7c569b!2z6rK97IOB64Ko64-EIOu2gOyCsOyLnCDshqzshqzqtawg7IK8652964-ZIDE0MDQtNjM!5e0!3m2!1sko!2skr!4v1710123456789!5m2!1sko!2skr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="거성정밀 위치"
            ></iframe>
            
            {/* Map Info Label Overlay */}
            <div className="absolute top-6 left-6 p-6 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-2xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#03C75A] rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-green-600/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-lg font-black text-slate-900">거성정밀 (GEOSUNG)</h5>
                  <p className="text-xs text-slate-500 font-bold mt-1 tracking-tight">부산광역시 사상구 낙동대로 1404번길 63</p>
                </div>
              </div>
            </div>
            
            {/* Overlay links - Prioritizing Naver Maps */}
            <div className="absolute bottom-8 right-8 flex gap-3">
              <a 
                href="https://map.naver.com/v5/search/부산시 사상구 낙동대로 1404번길 63" 
                target="_blank" 
                className="px-8 py-4 bg-[#03C75A] text-white font-black rounded-full shadow-2xl hover:bg-[#02b351] transition-all flex items-center gap-3 transform hover:-translate-y-1 scale-105"
              >
                <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-[11px] text-[#03C75A] font-black">N</div>
                네이버 지도로 길찾기
              </a>
              <a 
                href="https://map.kakao.com/?q=부산시 사상구 낙동대로 1404번길 63" 
                target="_blank" 
                className="px-6 py-4 bg-white text-slate-700 font-bold rounded-full shadow-xl hover:bg-slate-50 transition-all border border-slate-100 flex items-center gap-2"
              >
                <div className="w-5 h-5 bg-[#FAE100] rounded-full flex items-center justify-center text-[10px] text-[#3C1E1E]">K</div>
                카카오맵
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h4 className="text-3xl font-bold text-slate-900">CONTACT INFO</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-6 p-8 bg-slate-50 border border-slate-100 rounded-2xl group hover:bg-white hover:border-blue-100 hover:shadow-xl transition-all duration-500">
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">ADDRESS</div>
                    <div className="text-lg font-bold text-slate-900">경상남도 부산시 사상구 낙동대로 1404번길 63 (삼락동)</div>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-8 bg-slate-50 border border-slate-100 rounded-2xl group hover:bg-white hover:border-blue-100 hover:shadow-xl transition-all duration-500">
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">PHONE / FAX</div>
                    <div className="text-lg font-bold text-slate-900">T. 051-301-7414 / F. 051-305-7414</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-3xl font-bold text-slate-900">TRANSPORTATION</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-xl flex items-center justify-center shrink-0">
                    <Car className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900 mb-2">승용차 이용 시</div>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">낙동대로 삼락동 방향 진입 후 낙동대로 1404번길 방면 우회전 (전용 주차 공간 완비)</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-xl flex items-center justify-center shrink-0">
                    <Bus className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900 mb-2">대중교통 이용 시</div>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">삼락동 주민센터 인근 버스 정류장 하차 후 도보 5분 거리 위치</p>
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
