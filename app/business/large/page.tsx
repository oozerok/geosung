import BusinessDetailTemplate from "@/components/business-detail-template"
import { Factory, Settings2, ShieldCheck, Box } from "lucide-react"

export default function BusinessLargePage() {
  const technicalFeatures = [
    { 
      title: "중대형 부품 전문", 
      desc: "6.5호기급 대형 MCT 및 10인치 CNC 선반을 활용하여 중량물 및 대형 구조물 부품을 안정적으로 가공합니다.",
      icon: <Factory className="w-8 h-8" />
    },
    { 
      title: "고강성 가공 능력", 
      desc: "대형 부품 가공 시 발생하는 진동을 최소화하는 고강성 설비를 통해 장시간 가공에도 치수 안정성을 유지합니다.",
      icon: <Settings2 className="w-8 h-8" />
    },
    { 
      title: "대형 슬리브/조인트 특화", 
      desc: "조선 및 해양 기자재에 사용되는 대형 실린더 슬리브, 특수 조인트 등 회전체 대형 부품 가공에 독보적 노하우를 보유하고 있습니다.",
      icon: <Box className="w-8 h-8" />
    },
    { 
      title: "대형 부품 전용 검수", 
      desc: "대형 부품의 기하학적 공차를 정밀하게 측정할 수 있는 검사 인프라를 통해 완벽한 품질의 대형물을 납품합니다.",
      icon: <ShieldCheck className="w-8 h-8" />
    }
  ]

  return (
    <BusinessDetailTemplate
      title="사업분야"
      currentPath={["사업분야", "대형 부품 가공"]}
      activeItem="대형 부품 가공"
      tagline="LARGE-SCALE MACHINING"
      mainTitle={<>웅장함 속에 담긴 정밀함 <br /> <span className="text-blue-700">중대형 및 중장비 부품 가공</span></>}
      description="거성정밀은 소형 부품을 넘어 중장비, 조선 엔진, 산업용 대형 감속기 등 묵직한 힘이 필요한 산업의 핵심 부품을 생산합니다. 대형 설비 인프라와 숙련된 기술이 만났습니다."
      points={["중대형 프레임 및 구조물 정밀 가공", "조선·해양용 엔진 핵심 부품 양산", "대형 회전체 부품의 초정밀 동심도 확보"]}
      imageSrc="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop"
      imageAlt="Large-Scale Machining"
      technicalFeatures={technicalFeatures}
      ctaTitle="대형물 가공 견적 문의"
      ctaDesc="거대한 부품도 거성정밀의 기술력이 닿으면 정밀한 예술품이 됩니다."
      reverse={true}
    />
  )
}
