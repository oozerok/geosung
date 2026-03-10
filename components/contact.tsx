import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Phone, ArrowUpRight } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            완벽한 정밀 가공의 시작
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            도면과 상세 사양을 보내주시면 기술 검토 후 
            24시간 이내에 가장 효율적인 가공 방안과 견적을 제안드립니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>contact@geosung.store</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>010-XXXX-XXXX</span>
            </div>
          </div>

          <Button size="lg" className="h-16 px-10 bg-white text-slate-900 hover:bg-slate-100 rounded-full text-lg font-bold group" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              지금 바로 문의하기
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
