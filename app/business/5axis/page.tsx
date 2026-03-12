import BusinessDetailTemplate from "@/components/business-detail-template"
import { Layers, Zap, ShieldCheck, Cpu } from "lucide-react"

export default function Business5AxisPage() {
  const technicalFeatures = [
    { 
      title: "5축 동시 가공 기술", 
      desc: "공작물의 5개면을 한 번의 세팅으로 가공하여 위치 정밀도를 극대화하고 공정 리드타임을 획기적으로 단축합니다.",
      icon: <Layers className="w-8 h-8" />
    },
    { 
      title: "복잡한 3D 형상 구현", 
      desc: "일반 3축으로는 불가능한 정밀 제어 부품 등 복잡한 곡면과 기하학적 형상을 완벽하게 가공합니다.",
      icon: <Zap className="w-8 h-8" />
    },
    { 
      title: "고정밀 품질 보증", 
      desc: "첨단 5축 제어 시스템과 숙련된 엔지니어의 최적화된 툴패스 설계를 통해 마이크로 단위의 정밀도를 유지합니다.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    { 
      title: "특수 소재 가공", 
      desc: "티타늄, 인코넬 등 방위 산업에 사용되는 난삭재에 최적화된 고강성 가공 솔루션을 제공합니다.",
      icon: <Cpu className="w-8 h-8" />
    }
  ]

  return (
    <BusinessDetailTemplate
      title="사업분야"
      currentPath={["사업분야", "5축 및 특수 가공"]}
      activeItem="5축 및 특수 가공"
      tagline="HIGH-TECH MACHINING"
      mainTitle={<>한계 없는 정밀함의 실현 <br /> <span className="text-blue-700">5축 및 고난이도 특수 가공</span></>}
      description="거성정밀은 최신형 5축 가공기(D2-5AX)를 통해 대한민국 방위산업의 핵심 부품을 생산합니다. 복잡한 형상일수록 거성정밀의 진가가 발휘됩니다."
      points={["복합 형상 원스톱 가공 솔루션", "방산용 고강도 특수 소재 가공", "공정 단축을 통한 원가 경쟁력 확보"]}
      imageSrc="https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?q=80&w=1200&auto=format&fit=crop"
      imageAlt="5-Axis Machining"
      technicalFeatures={technicalFeatures}
      ctaTitle="특수 가공 기술 상담"
      ctaDesc="도면만으로 구현하기 힘든 아이디어도 실물로 제작해 드립니다."
    />
  )
}
