import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-600 pt-16 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 items-start md:items-end">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-2">
              <Image src="/logo.png" alt="거성 로고" width={40} height={40} className="w-auto h-10 grayscale opacity-80" />
              <div className="flex flex-col border-l-2 border-slate-200 pl-4">
                <span className="text-2xl font-black text-slate-900 tracking-tighter">거성정밀</span>
                <span className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase">Geosung Precision</span>
              </div>
            </div>
            <br />
            
            <div className="space-y-3">
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium">
                <p><span className="text-slate-400 mr-2 font-bold">대표이사</span> 변우영</p>
                <p><span className="text-slate-400 mr-2 font-bold">사업자등록번호</span> 000-00-00000</p>
                <p><span className="text-slate-400 mr-2 font-bold">본사/공장</span> 부산광역시 사상구 낙동대로 1404번길 63</p>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium">
                <p><span className="text-slate-400 mr-2 font-bold">TEL</span> 051-301-7414</p>
                <p><span className="text-slate-400 mr-2 font-bold">FAX</span> 051-305-7414</p>
                <p><span className="text-slate-400 mr-2 font-bold">E-MAIL</span> contact@geosungprecision.com</p>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-8 font-bold uppercase tracking-wider">
              Copyright © GEOSUNG PRECISION CO., LTD. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex items-center gap-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Customer Center</div>
                <div className="text-2xl font-black text-slate-900">051-301-7414</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
