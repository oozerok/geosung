import BusinessDetailTemplate from "@/components/business-detail-template"
import { Layers, Zap, Box, ShieldCheck, Target, Settings } from "lucide-react"

export default function BusinessMctPage() {
  const technicalFeatures = [
    { 
      title: "고정밀 밀링 가공", 
      desc: "고성능 주축을 활용하여 금속 소재의 평면, 곡면 및 정밀 포켓 가공을 마이크로 단위의 정밀도로 수행합니다.",
      icon: <Target className="w-8 h-8" />
    },
    { 
      title: "다양한 소재 대응", 
      desc: "알루미늄, 스테인리스, 스틸 등 다양한 금속 소재에 최적화된 절삭 조건을 적용하여 최상의 표면 조도를 확보합니다.",
      icon: <Zap className="w-8 h-8" />
    },
    { 
      title: "복합 공정 원스톱", 
      desc: "밀링, 드릴링, 탭핑 등 여러 공정을 머시닝센터 한 대에서 원스톱으로 처리하여 공정 간 오차를 최소화합니다.",
      icon: <Box className="w-8 h-8" />
    },
    { 
      title: "안정적인 대량 생산", 
      desc: "고강성 베드 설비를 통해 장시간 연속 가공 시에도 열변형을 최소화하며 전 제품의 균일한 품질을 유지합니다.",
      icon: <ShieldCheck className="w-8 h-8" />
    }
  ]

  return (
    <BusinessDetailTemplate
      title="사업분야"
      currentPath={["사업분야", "MCT 복합 가공"]}
      activeItem="MCT 복합 가공"
      tagline="PRECISION MILLING SOLUTION"
      mainTitle={<>정밀 밀링의 새로운 기준 <br /> <span className="text-blue-700">고성능 MCT 복합 가공</span></>}
      description="거성정밀의 MCT(머시닝센터) 라인은 최첨단 수직형 설비를 바탕으로 기계 부품, 금형 코어, 정밀 구조물 등 산업 전반의 핵심 부품을 생산합니다. 숙련된 엔지니어의 정밀한 CAM 설계와 최신 설비가 만나 고객이 원하는 완벽한 치수를 구현합니다."
      points={["3축 및 4축 고속 머시닝 센터 운용", "금형 및 정밀 부품의 평면/포켓 가공 특화", "반복 정밀도 확보를 통한 무결점 품질 유지"]}
      imageSrc="/mct.png"
      imageAlt="MCT Machining"
      technicalFeatures={technicalFeatures}
      ctaTitle="MCT 가공 기술 상담"
      ctaDesc="정밀한 부품 가공, 거성정밀의 기술력이 해답입니다."
      reverse={true}
    />
  )
}
