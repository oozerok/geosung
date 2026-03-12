import BusinessDetailTemplate from "@/components/business-detail-template"
import { Repeat, Cpu, Clock, CheckCircle } from "lucide-react"

export default function BusinessAutoPage() {
  const technicalFeatures = [
    { 
      title: "초고속 대량 생산", 
      desc: "자동 소재 공급 장치(Bar Feeder)를 통해 24시간 연속 가공이 가능하며, 대량 주문에 대한 신속한 대응이 가능합니다.",
      icon: <Repeat className="w-8 h-8" />
    },
    { 
      title: "미세 소경 가공", 
      desc: "전자 부품, 의료 기기 등 초소형 부품에 특화된 자동선반 기술로 머리카락 굵기 수준의 정밀 가공을 수행합니다.",
      icon: <Cpu className="w-8 h-8" />
    },
    { 
      title: "생산 비용 최적화", 
      desc: "공정 간소화 및 고효율 사이클 타임 설계를 통해 고객사에게 가장 합리적인 단가와 최상의 품질을 동시에 제공합니다.",
      icon: <Clock className="w-8 h-8" />
    },
    { 
      title: "균일한 품질 유지", 
      desc: "무인 자동화 공정 중에도 실시간 공구 파손 감지 및 치수 보정 시스템을 통해 전 제품의 균일한 품질을 보장합니다.",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ]

  return (
    <BusinessDetailTemplate
      title="사업분야"
      currentPath={["사업분야", "자동선반 가공"]}
      activeItem="자동선반 가공"
      tagline="MASS PRODUCTION"
      mainTitle={<>멈추지 않는 생산 효율 <br /> <span className="text-blue-700">고효율 자동선반 시스템</span></>}
      description="소형 정밀 부품의 대량 생산을 위해 구축된 거성정밀의 자동선반 라인은 첨단 CNC 자동 가공기를 통해 높은 생산성과 정밀도를 동시에 실현합니다. 전자, 자동차, 광학 기기 등 정밀한 소형 부품이 필요한 모든 산업군에 최적의 솔루션을 제공합니다."
      points={["24시간 무인 자동화 생산 시스템 구축", "소구경 샤프트 및 특수 핀 정밀 가공", "복합 공정을 통한 완성도 높은 부품 생산"]}
      imageSrc="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1200&auto=format&fit=crop"
      imageAlt="Automatic Lathe"
      technicalFeatures={technicalFeatures}
      ctaTitle="대량 생산 견적 문의"
      ctaDesc="효율적인 공정 설계로 원가 절감을 도와드립니다."
    />
  )
}
