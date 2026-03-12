import BusinessDetailTemplate from "@/components/business-detail-template"
import { Users, Settings2, ShieldCheck, Truck } from "lucide-react"

export default function BusinessAssemblyPage() {
  const technicalFeatures = [
    { 
      title: "모듈화 조립 기술", 
      desc: "개별 가공 부품을 기능별 모듈 단위로 정밀 조립하여 고객사에서 즉시 사용 가능한 상태로 납품합니다.",
      icon: <Settings2 className="w-8 h-8" />
    },
    { 
      title: "토탈 솔루션 제공", 
      desc: "소재 구매부터 가공, 후처리, 조립까지 이어지는 원스톱 공정을 통해 고객사의 공급망 관리 부담을 덜어드립니다.",
      icon: <Users className="w-8 h-8" />
    },
    { 
      title: "성능 및 작동 테스트", 
      desc: "조립 완료 후 실제 작동 환경을 시뮬레이션한 전수 검사를 통해 완벽한 구동 성능을 보장합니다.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    { 
      title: "신속한 물류 공급", 
      desc: "체계적인 생산 관리와 조립 라인 운영으로 고객사의 조립 공정 일정에 맞춘 JIT(Just-In-Time) 납품을 실현합니다.",
      icon: <Truck className="w-8 h-8" />
    }
  ]

  return (
    <BusinessDetailTemplate
      title="사업분야"
      currentPath={["사업분야", "정밀 부품 조립"]}
      activeItem="정밀 부품 조립"
      tagline="ONE-STOP SOLUTION"
      mainTitle={<>단순 가공을 넘어선 가치 창출 <br /> <span className="text-blue-700">정밀 부품 조립 및 모듈 제작</span></>}
      description="거성정밀은 정밀 가공된 각 부품들이 최상의 성능을 발휘할 수 있도록 전문적인 조립 서비스를 제공합니다. 유압 밸브 어셈블리, 방산 모듈, 기계 장치 등 높은 신뢰도가 요구되는 정밀 장치의 완벽한 조립과 검수를 수행합니다."
      points={["정밀 공차를 고려한 최적의 조립 공정 설계", "청정 작업 환경 내 조립 및 품질 검증", "기능 테스트를 통한 완제품 수준의 품질 보증"]}
      imageSrc="https://images.unsplash.com/photo-1530124560677-bdaea02c9a5b?q=80&w=1200&auto=format&fit=crop"
      imageAlt="Precision Assembly"
      technicalFeatures={technicalFeatures}
      ctaTitle="모듈 제작 상담 및 협력 제안"
      ctaDesc="복잡한 조립 공정도 거성의 기술 파트너십으로 해결하세요."
      reverse={true}
    />
  )
}
