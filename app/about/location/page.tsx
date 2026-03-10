import { MapPin, Phone, Mail, Printer } from "lucide-react"

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Sub Hero */}
      <section className="relative pt-40 pb-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">오시는 길</h1>
          <p className="text-blue-400 font-bold tracking-widest uppercase text-sm">LOCATION</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="w-full aspect-video bg-slate-100 border-2 border-slate-900 relative">
                {/* 실제 지도 임베드 자리 (여기서는 placeholder 및 안내 텍스트) */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.353396637373!2d128.9715!3d35.1747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568e98344e4e983%3A0x6d6d6d6d6d6d6d6d!2z67aA7IKw6rSR7Jet7IucIOyCrOyDgeq1rCDsgrTrnb3rj5kgMTQwNC02Mw!5e0!3m2!1sko!2skr!4v1710000000000!5m2!1sko!2skr" 
                  className="absolute inset-0 w-full h-full grayscale border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-black text-slate-950 mb-6 pb-4 border-b-2 border-slate-900">본사 및 공장</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1 text-lg">주소</p>
                      <p className="text-slate-600 leading-relaxed">
                        부산시 사상구 낙동대로 1404번길 63 <br />
                        (삼락동 352-17, 352-18)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-blue-600 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1 text-lg">전화</p>
                      <p className="text-slate-600">051-301-7414 / 7415</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Printer className="w-6 h-6 text-blue-600 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1 text-lg">팩스</p>
                      <p className="text-slate-600">051-305-7414</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-blue-600 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1 text-lg">이메일</p>
                      <p className="text-slate-600">GS7414@NAVER.COM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div className="bg-slate-50 p-6 border-2 border-slate-100">
                  <p className="font-bold text-slate-900 mb-2">교통편 안내</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    삼락동 산업단지 내 위치하고 있으며, 차량 방문 시 내비게이션에 '낙동대로 1404번길 63'을 검색하시기 바랍니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
