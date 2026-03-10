import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 mb-6 block">
              GEOSUNG PRECISION
            </Link>
            <p className="text-slate-600 max-w-sm mb-6 leading-relaxed">
              최고의 정밀 가공 기술로 미래를 만들어가는 거성정밀입니다. 
              CNC 선반, MCT 밀링 가공 분야의 든든한 파트너가 되어드리겠습니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">회사소개</Link></li>
              <li><Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors">가공기술</Link></li>
              <li><Link href="/equipment" className="text-slate-600 hover:text-blue-600 transition-colors">보유설비</Link></li>
              <li><Link href="/product" className="text-slate-600 hover:text-blue-600 transition-colors">가공사례</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4 text-slate-600">
              <li>부산 사상구 낙동대로1404번길 63</li>
              <li>T. 051-301-7414</li>
              <li>F. 031-XXX-XXXX</li>
              <li>E. contact@geosung.store</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Geosung Precision. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-slate-400 hover:text-slate-600 text-xs">이용약관</Link>
            <Link href="#" className="text-slate-400 hover:text-slate-600 text-xs font-bold">개인정보처리방침</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
