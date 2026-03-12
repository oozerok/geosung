import ProductDetailTemplate from "@/components/product-detail-template"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{ id: string }>
}

const productsData = [
  {
    id: "limit-vv-body",
    title: "LIMIT V/V Body (Small)",
    category: "유압부품",
    img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1000",
    description: "고압 유압 시스템의 정밀한 흐름 제어를 위해 설계된 리미트 밸브 바디입니다. 가혹한 환경에서도 안정적인 성능을 보장합니다.",
    specs: [
      { label: "Material", value: "S45C / Aluminum Alloy" },
      { label: "Processing", value: "CNC Precision Turning & Milling" },
      { label: "Tolerance", value: "±0.005mm" },
      { label: "Application", value: "Hydraulic Control Systems" }
    ],
    features: [
      "고압 내구성 설계 및 정밀 가공",
      "미세 오차 없는 완벽한 실링 표면 처리",
      "내식성 향상을 위한 특수 표면 처리 공정",
      "전수 검사를 통한 무결점 품질 보증"
    ]
  },
  {
    id: "precision-block-a",
    title: "Precision Block A-Type",
    category: "방위산업",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000",
    description: "엄격한 군사 규격을 만족하는 고강도 정밀 블록입니다. 방위산업용 핵심 모듈의 베이스 구조물로 사용됩니다.",
    specs: [
      { label: "Material", value: "High Strength Steel / SUS304" },
      { label: "Processing", value: "Multi-axis MCT Compound Machining" },
      { label: "Weight", value: "Customized by specification" },
      { label: "Certification", value: "Defense Industry Standard" }
    ],
    features: [
      "군사 규격을 충족하는 고정밀 형상 가공",
      "진동 및 충격에 강한 고강성 구조 구현",
      "복합 공정을 통한 일체형 정밀 가공",
      "3차원 측정기를 이용한 정밀 치수 검증"
    ]
  },
  {
    id: "engine-sleeve-250",
    title: "Engine Sleeve 250mm",
    category: "조선기자재",
    img: "https://images.unsplash.com/photo-1559139225-421502ef4848?q=80&w=1000",
    description: "대형 선박 엔진의 핵심 실린더 보호 및 가이드 역할을 수행하는 고내구성 슬리브입니다.",
    specs: [
      { label: "Diameter", value: "Ø250mm (Customizable)" },
      { label: "Material", value: "Cast Iron / Special Alloy Steel" },
      { label: "Surface Finish", value: "Mirror Polishing (Honning)" },
      { label: "Durability", value: "Enhanced Wear Resistance" }
    ],
    features: [
      "대형 엔진 구동 환경에 최적화된 내마모성",
      "호닝 가공을 통한 최상의 내경 조도 확보",
      "열처리를 통한 고온 강도 및 변형 방지",
      "선박용 핵심 엔진 부품의 품질 규격 준수"
    ]
  },
  {
    id: "control-valve-joint",
    title: "Control Valve Joint",
    category: "유압부품",
    img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?q=80&w=1000",
    description: "유압 시스템의 배관 연결과 압력 조절을 담당하는 정밀 조인트 부품입니다.",
    specs: [
      { label: "Thread", value: "High Precision NPT/PT Threads" },
      { label: "Pressure", value: "Up to 350 Bar" },
      { label: "Material", value: "SUS316L / Brass" },
      { label: "Type", value: "Straight / Elbow / Tee" }
    ],
    features: [
      "누설 방지를 위한 고정밀 나사산 가공",
      "고압 환경에서의 안정적인 기밀성 유지",
      "콤팩트한 설계를 통한 공간 효율성 극대화",
      "다양한 유압 라인 규격에 맞춤 대응"
    ]
  },
  {
    id: "connecting-rod-core",
    title: "Connecting Rod Core",
    category: "일반기계",
    img: "https://images.unsplash.com/photo-1530124560677-bdaea02c9a5b?q=80&w=1000",
    description: "엔진 및 압축기의 직선운동을 회전운동으로 변환하는 핵심 동력 전달 부품입니다.",
    specs: [
      { label: "Process", value: "Forging & CNC Finishing" },
      { label: "Tolerance", value: "±0.01mm" },
      { label: "Material", value: "Forged Steel / Alloy" },
      { label: "Balance", value: "High Precision Dynamic Balance" }
    ],
    features: [
      "고속 회전 시의 진동 최소화를 위한 밸런싱",
      "단조 소재의 강성을 살린 정밀 가공",
      "응력 집중을 방지하는 매끄러운 곡선 가공",
      "가혹한 구동 환경에서의 피로 파괴 저항성"
    ]
  },
  {
    id: "main-shaft-pinion",
    title: "Main Shaft Pinion",
    category: "일반기계",
    img: "https://images.unsplash.com/photo-1622744761448-f58694031649?q=80&w=1000",
    description: "동력 전달 시스템의 기어비 조절과 회전력 전달을 위한 고정밀 피니언 샤프트입니다.",
    specs: [
      { label: "Gear Type", value: "Spur / Helical Pinion" },
      { label: "Material", value: "SCM440 / Special Steel" },
      { label: "Heat Treatment", value: "High Frequency Induction Hardening" },
      { label: "Precision", value: "AGMA Class 10 or higher" }
    ],
    features: [
      "소음 및 마찰을 최소화한 기어 치형 가공",
      "고주파 열처리를 통한 기어 치면 경도 확보",
      "샤프트 동심도 및 평형도의 완벽한 관리",
      "중장비 및 산업용 감속기 핵심 부품"
    ]
  },
  {
    id: "defense-housing-unit",
    title: "Defense Housing Unit",
    category: "방위산업",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    description: "군사용 전자 장비 및 제어 시스템을 보호하는 고정밀 알루미늄 하우징 유닛입니다.",
    specs: [
      { label: "Material", value: "AL 6061-T6 / AL 7075" },
      { label: "Coating", value: "Anodizing / Hard Coating" },
      { label: "Weight", value: "Ultra-lightweight design" },
      { label: "IP Rating", value: "Equivalent to IP67/68" }
    ],
    features: [
      "방산용 경량화 가공 기술",
      "전자파 차단 및 방수 기능을 위한 정밀 공차",
      "복잡한 내부 방열 구조의 입체 가공",
      "특수 표면 처리를 통한 내환경성 강화"
    ]
  },
  {
    id: "hydraulic-piston-rod",
    title: "Hydraulic Piston Rod",
    category: "유압부품",
    img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1000",
    description: "유압 실린더의 구동을 담당하는 핵심 부품으로, 고하중 지지력과 매끄러운 동작을 보장합니다.",
    specs: [
      { label: "Diameter", value: "Ø20mm ~ Ø150mm" },
      { label: "Coating", value: "Hard Chrome Plating" },
      { label: "Roughness", value: "Ra 0.2um or lower" },
      { label: "Straightness", value: "0.05mm / 1000mm" }
    ],
    features: [
      "크롬 도금 및 연마를 통한 거울 표면 처리",
      "씰(Seal) 수명 연장을 위한 초정밀 조도 관리",
      "고하중 작업 시의 휨 방지 강성 설계",
      "다양한 건설기계 및 산업용 실린더 호환"
    ]
  },
  {
    id: "marine-joint-assembly",
    title: "Marine Joint Assembly",
    category: "조선기자재",
    img: "https://images.unsplash.com/photo-1559139225-421502ef4848?q=80&w=1000",
    description: "선박 내 해수 및 연료 라인의 연결을 담당하는 내부식성 정밀 조인트 어셈블리입니다.",
    specs: [
      { label: "Standard", value: "JIS / ANSI / DIN Compliant" },
      { label: "Material", value: "Stainless Steel (Duplex) / Bronze" },
      { label: "Testing", value: "Hydrostatic Test Certified" },
      { label: "Corrosion", value: "C5-M (Marine) Class Ready" }
    ],
    features: [
      "해수 부식에 강한 특수 소재 가공 기술",
      "진동이 심한 선박 엔진룸 내 신뢰성 확보",
      "모듈형 조립을 통한 간편한 현장 설치",
      "선급 인증 기준에 부합하는 철저한 품질 관리"
    ]
  }
]

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params
  const product = productsData.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return <ProductDetailTemplate product={product} />
}
