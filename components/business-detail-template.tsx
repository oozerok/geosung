import SubBanner from "@/components/sub-banner"
import SubNav from "@/components/sub-nav"
import { ReactNode } from "react"
import Link from "next/link"

interface TechnicalFeature {
  title: string
  desc: string
  icon: ReactNode
}

interface BusinessDetailTemplateProps {
  title: string
  currentPath: string[]
  activeItem: string
  tagline: string
  mainTitle: ReactNode
  description: string
  points: string[]
  imageSrc: string
  imageAlt: string
  technicalFeatures: TechnicalFeature[]
  ctaTitle: string
  ctaDesc: string
  reverse?: boolean
}

export default function BusinessDetailTemplate({
  title,
  currentPath,
  activeItem,
  tagline,
  mainTitle,
  description,
  points,
  imageSrc,
  imageAlt,
  technicalFeatures,
  ctaTitle,
  ctaDesc,
  reverse = false
}: BusinessDetailTemplateProps) {
  const businessNav = [
    { name: "CNC 선반 가공", href: "/business" },
    { name: "MCT 복합 가공", href: "/business/mct" },
    { name: "5축 및 특수가공", href: "/business/5axis" },
    // { name: "대형 부품 가공", href: "/business/large" },
  ]

  return (
    <>
      <SubBanner 
        title={title} 
        currentPath={currentPath} 
      />
      <SubNav items={businessNav} activeItem={activeItem} />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center mb-32`}>
            <div className="lg:w-1/2 w-full">
              <span className="text-blue-700 font-black text-sm tracking-[0.3em] mb-4 block uppercase">{tagline}</span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-8">
                {mainTitle}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                {description}
              </p>
              <div className="space-y-4">
                {points.map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="font-bold text-slate-800">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border border-slate-100 bg-slate-100">
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/5" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pt-24 border-t border-slate-100">
            {technicalFeatures.map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-white text-2xl font-bold mb-2">{ctaTitle}</h4>
            <p className="text-slate-400 font-medium italic">{ctaDesc}</p>
          </div>
          <Link href="/customer" className="px-12 py-5 bg-blue-600 text-white font-black rounded-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 text-center">
            견적 문의하기
          </Link>
        </div>
      </section>
    </>
  )
}
