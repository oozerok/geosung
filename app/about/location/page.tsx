'use client'

import { useEffect, useRef } from "react"
import Script from "next/script"
import SubBanner from "@/components/sub-banner"
import SubNav from "@/components/sub-nav"
import { MapPin, Phone, Bus, Car } from "lucide-react"

declare global {
  interface Window {
    kakao: any
  }
}

export default function AboutLocationPage() {
  const mapRef = useRef<HTMLDivElement>(null)
  
  const aboutNav = [
    { name: "인사말", href: "/about" },
    { name: "회사개요", href: "/about/overview" },
    { name: "연혁", href: "/about/history" },
    { name: "오시는길", href: "/about/location" },
  ]

  // 카카오 지도 초기화 함수
  const initMap = () => {
    if (typeof window !== "undefined" && window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        if (!mapRef.current) return

        const container = mapRef.current
        const options = {
          center: new window.kakao.maps.LatLng(35.174788, 128.975441),
          level: 3,
        }
        
        const map = new window.kakao.maps.Map(container, options)

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder()

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch('부산광역시 사상구 낙동대로 1404번길 63', function(result: any, status: any) {
          // 정상적으로 검색이 완료됐으면 
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x)

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords
            })

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords)
          } 
        })

        // 일반 지도/스카이뷰 타입 컨트롤 표시
        const mapTypeControl = new window.kakao.maps.MapTypeControl()
        map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT)

        // 줌 컨트롤 표시
        const zoomControl = new window.kakao.maps.ZoomControl()
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT)
      })
    }
  }

  return (
    <>
      {/* 카카오 지도 API 스크립트 - services 라이브러리 추가 */}
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false&libraries=services`}
        onReady={initMap}
      />

      <SubBanner 
        title="오시는길" 
        currentPath={["회사소개", "오시는길"]} 
      />
      <SubNav items={aboutNav} activeItem="오시는길" />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Map Section */}
          <div className="w-full aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-sm border border-slate-200 mb-16 relative group">
            {/* 지도 로딩 전 보여줄 스켈레톤/배경 */}
            <div ref={mapRef} className="w-full h-full bg-slate-50 flex items-center justify-center">
              <div className="text-slate-400 font-medium animate-pulse">지도를 불러오는 중입니다...</div>
            </div>
            
            {/* Map Info Label Overlay */}
            <div className="absolute top-6 left-6 p-6 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-2xl z-10 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#FAE100] rounded-xl flex items-center justify-center text-[#3C1E1E] shrink-0 shadow-lg shadow-yellow-400/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-lg font-black text-slate-900">거성정밀 (GEOSUNG)</h5>
                  <p className="text-xs text-slate-500 font-bold mt-1 tracking-tight">부산광역시 사상구 낙동대로 1404번길 63</p>
                </div>
              </div>
            </div>
            
            {/* Overlay links */}
            <div className="absolute bottom-8 right-8 flex gap-3 z-10">
              <a 
                href="https://map.kakao.com/?q=부산시 사상구 낙동대로 1404번길 63" 
                target="_blank" 
                className="px-8 py-4 bg-[#FAE100] text-[#3C1E1E] font-black rounded-full shadow-2xl hover:bg-[#ebd100] transition-all flex items-center gap-3 transform hover:-translate-y-1 scale-105"
              >
                <div className="w-6 h-6 bg-[#3C1E1E] rounded-md flex items-center justify-center text-[11px] text-[#FAE100] font-black">K</div>
                카카오맵으로 길찾기
              </a>
              <a 
                href="https://map.naver.com/v5/search/부산시 사상구 낙동대로 1404번길 63" 
                target="_blank" 
                className="px-6 py-4 bg-white text-slate-700 font-bold rounded-full shadow-xl hover:bg-slate-50 transition-all border border-slate-100 flex items-center gap-2"
              >
                <div className="w-5 h-5 bg-[#03C75A] rounded-full flex items-center justify-center text-[10px] text-white font-black">N</div>
                네이버 지도
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
                    <div className="text-lg font-bold text-slate-900">부산광역시 사상구 낙동대로 1404번길 63 (삼락동)</div>
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
