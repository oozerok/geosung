import BusinessDetailTemplate from "@/components/business-detail-template"
import { Settings, Cpu, ShieldCheck, Box } from "lucide-react"

export default function BusinessPage() {
  const technicalFeatures = [
    { 
      title: "고정밀 복합 가공", 
      desc: "CNC 복합선반을 활용하여 1회의 세팅으로 선삭과 밀링 공정을 동시에 수행함으로써 공차를 최소화하고 생산성을 극대화합니다.",
      icon: <Settings className="w-8 h-8" />
    },
    { 
      title: "다품종 소량 생산", 
      desc: "다양한 규격의 시제품 제작부터 소규모 프로젝트까지 유연하게 대응할 수 있는 최적화된 공정 라인을 운영하고 있습니다.",
      icon: <Box className="w-8 h-8" />
    },
    { 
      title: "난삭재 가공 기술", 
      desc: "티타늄, 인코넬, 스테인리스강 등 특수 소재 및 난삭재 가공에 대한 풍부한 경험과 특수 툴링 기술력을 보유하고 있습니다.",
      icon: <Cpu className="w-8 h-8" />
    },
    { 
      title: "철저한 검수 시스템", 
      desc: "3차원 측정기 및 정밀 측정 장비를 활용하여 가공 완료 후 전수 검사를 원칙으로 무결점 제품만을 납품합니다.",
      icon: <ShieldCheck className="w-8 h-8" />
    }
  ]

  return (
    <BusinessDetailTemplate
      title="사업분야"
      currentPath={["사업분야", "CNC 선반 가공"]}
      activeItem="CNC 선반 가공"
      tagline="CORE TECHNOLOGY"
      mainTitle={<>최첨단 설비로 구현하는 <br /> <span className="text-blue-700">CNC 선반 정밀 가공</span></>}
      description="거성정밀은 최신형 CNC 선반 설비를 바탕으로 자동차, 중장비, 유압부품 등 정밀도가 요구되는 다양한 회전체 부품을 가공하고 있습니다. 숙련된 기술진의 노하우를 결합하여 고객이 요구하는 미세 공차를 완벽하게 구현합니다."
      points={["내외경 선삭 및 정밀 나사 가공", "복합 기능을 통한 고난이도 형상 가공", "자동 공급 장치를 활용한 대량 생산"]}
      imageSrc="/cnc.png"
      imageAlt="CNC Machining"
      technicalFeatures={technicalFeatures}
      ctaTitle="기술 상담 및 견적 문의"
      ctaDesc="당사 전문가가 최적의 가공 솔루션을 제안해 드립니다."
    />
  )
}
