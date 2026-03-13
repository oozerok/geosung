export interface PortfolioItem {
  id: string
  title: string
  category: string
  slug: string
  img: string
  description: string
  specs: { label: string; value: string }[]
  features: string[]
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "brass-manifold-block",
    title: "Hydraulic Manifold Block",
    category: "유압부품",
    slug: "hydraulic",
    img: "/products/product1.jpg",
    description: "유압 라인의 분기 및 제어를 담당하는 고정밀 황동 매니폴드 블록입니다. 내식성이 우수한 소재를 정밀 가공하여 가혹한 환경에서도 내구성을 보장합니다.",
    specs: [
      { label: "Material", value: "Brass (C3604) / Special Alloy" },
      { label: "Processing", value: "CNC 5-Axis Machining" },
      { label: "Tolerance", value: "±0.005mm" },
      { label: "Finish", value: "Polishing & Deburring" }
    ],
    features: [
      "복잡한 내부 유로의 정밀 가공 기술",
      "고압 유체 제어에 최적화된 내압 설계",
      "완벽한 면취 가공을 통한 조립성 향상",
      "황동 소재 특유의 우수한 내식성 및 기밀성"
    ]
  },
  {
    id: "precision-needle-pin",
    title: "Precision Needle Valve Pin",
    category: "방위산업",
    slug: "defense",
    img: "/products/product2.jpg",
    description: "미세 유량 제어를 위한 초정밀 니들 밸브 핀입니다. 극도로 높은 동심도와 표면 조도가 요구되는 방산 및 항공우주 분야의 핵심 부품입니다.",
    specs: [
      { label: "Material", value: "SUS316L / Inconel" },
      { label: "Length/Dia", value: "L: 120mm / Ø: 3~6mm" },
      { label: "Roughness", value: "Ra 0.1um (Super Finishing)" },
      { label: "Concentricity", value: "0.002mm T.I.R" }
    ],
    features: [
      "마이크로 단위의 초정밀 연삭 가공",
      "고온/고압 환경에서의 열변형 최소화 설계",
      "특수 팁 형상 가공을 통한 완벽한 유량 제어",
      "전수 비파괴 검사(NDT) 완료 품목"
    ]
  },
  {
    id: "hydraulic-valve-kit",
    title: "Hydraulic Valve Assembly Kit",
    category: "유압부품",
    slug: "hydraulic",
    img: "/products/product3.jpg",
    description: "유압 제어 시스템에 사용되는 밸브 시트, 플러그, 슬리브로 구성된 정밀 부품 세트입니다. 각 부품 간의 완벽한 결합 호환성을 보장합니다.",
    specs: [
      { label: "Components", value: "Sleeve, Plug, Cube Body" },
      { label: "Material", value: "SCM440 / SUS304" },
      { label: "Heat Treat", value: "Carburizing / Nitriding" },
      { label: "Fit Class", value: "H7/g6 Precision Fit" }
    ],
    features: [
      "다품종 소량 생산 및 세트 가공 대응",
      "열처리를 통한 내마모성 및 내구성 극대화",
      "오일 홀(Oil Hole) 및 나사산의 정밀 가공",
      "조립 공차를 고려한 통합 품질 관리"
    ]
  },
  {
    id: "rotary-valve-housing",
    title: "Rotary Valve Housing",
    category: "조선기자재",
    slug: "marine",
    img: "/products/product4.jpg",
    description: "선박용 조타기 및 윈치 시스템에 적용되는 대형 로터리 밸브 하우징입니다. 다단의 단차 가공과 측면 포트 가공이 결합된 복합 형상 제품입니다.",
    specs: [
      { label: "Size", value: "Ø150 x 250mm" },
      { label: "Material", value: "Forged Steel (SF55)" },
      { label: "Processing", value: "CNC Turning & Milling Center" },
      { label: "Pressure", value: "Rated for 250 Bar" }
    ],
    features: [
      "선박용 고하중 유압 시스템 핵심 부품",
      "다축 복합 가공기를 이용한 원스톱 생산",
      "내경 호닝(Honing) 가공으로 기밀성 확보",
      "선급 인증 기준을 충족하는 소재 및 공정"
    ]
  },
  {
    id: "limit-switch-actuator",
    title: "Limit Switch Actuator",
    category: "일반기계",
    slug: "machinery",
    img: "/products/product5.jpg",
    description: "산업용 기계 설비의 위치 감지 및 제어를 위한 리미트 스위치 액추에이터 어셈블리입니다. 반복적인 기계적 접촉에도 견디는 견고한 설계가 특징입니다.",
    specs: [
      { label: "Type", value: "Roller Lever Arm Type" },
      { label: "Housing", value: "Die-cast Aluminum / Steel" },
      { label: "IP Rating", value: "IP65 (Dust/Water tight)" },
      { label: "Cycle Life", value: "1,000,000 Operations" }
    ],
    features: [
      "충격과 진동에 강한 내구성을 갖춘 하우징",
      "정밀 주조 및 후가공을 통한 원가 절감",
      "현장 설치가 용이한 컴팩트한 디자인",
      "자동화 라인 및 공작 기계 센서용 부품"
    ]
  },
  {
    id: "spindle-nose-adapter",
    title: "CNC Spindle Nose Adapter",
    category: "일반기계",
    slug: "machinery",
    img: "/products/product6.jpg",
    description: "공작기계 주축에 장착되어 공구를 고정하는 고정밀 스핀들 노즈 어댑터입니다. 고속 회전 시의 밸런스와 체결력이 핵심입니다.",
    specs: [
      { label: "Taper", value: "BT40 / BT50 Standard" },
      { label: "Material", value: "SNCM420 (Case Hardened)" },
      { label: "Run-out", value: "Less than 0.003mm" },
      { label: "Thread", value: "Precision Ground Threads" }
    ],
    features: [
      "고속 회전 시 진동 방지를 위한 동적 밸런싱",
      "침탄 열처리 후 연마를 통한 표면 경도 확보",
      "나사산 연삭으로 완벽한 체결력 구현",
      "공작기계 핵심 구동부의 정밀 부품"
    ]
  },
  {
    id: "bearing-retainer",
    title: "Split Bearing Retainer",
    category: "방위산업",
    slug: "defense",
    img: "/products/product7.jpg",
    description: "특수 차량 및 장비의 구동축을 지지하는 분할형 베어링 리테이너입니다. 곡면 가공과 체결부의 위치 정밀도가 매우 중요합니다.",
    specs: [
      { label: "Material", value: "High Tensile Steel" },
      { label: "Shape", value: "Crescent / Split Ring" },
      { label: "Processing", value: "5-Axis Contouring" },
      { label: "Surface", value: "Phosphate Coating" }
    ],
    features: [
      "자유곡면 형상의 5축 정밀 가공",
      "조립 편의성을 위한 분할 구조 설계",
      "축 하중을 효과적으로 분산시키는 구조",
      "방산 장비의 구동축 지지용 핵심 부품"
    ]
  },
  {
    id: "cartridge-valve-spindle",
    title: "Cartridge Valve Spindle",
    category: "유압부품",
    slug: "hydraulic",
    img: "/products/product8.jpg",
    description: "고압 유압 제어 밸브의 핵심 구동축인 카트리지 스핀들입니다. 나사산, 씰링부, 구동부가 하나의 축에 집약된 고난이도 가공품입니다.",
    specs: [
      { label: "Material", value: "SUS440C / SUS630" },
      { label: "Thread", value: "Fine Pitch Precision Thread" },
      { label: "Hardness", value: "HRC 50~55" },
      { label: "Concentricity", value: "0.005mm Max" }
    ],
    features: [
      "복합 CNC 선반을 이용한 일체형 가공",
      "고압 씰링 부위의 경면(Mirror) 조도 관리",
      "열처리 후 정밀 연삭으로 치수 안정성 확보",
      "건설기계 및 산업용 유압 밸브용 스풀"
    ]
  },
  {
    id: "high-pressure-plunger",
    title: "High-Pressure Plunger Head",
    category: "조선기자재",
    slug: "marine",
    img: "/products/product9.jpg",
    description: "선박 엔진 연료 펌프 또는 대형 프레스에 사용되는 고압 플런저 헤드입니다. 반복적인 충격 하중을 견디는 강인한 내구성이 필수적입니다.",
    specs: [
      { label: "Material", value: "Forged Alloy Steel" },
      { label: "Coating", value: "DLC / TiCN Coating" },
      { label: "Profile", value: "Crowned Top Surface" },
      { label: "Impact", value: "High Shock Resistance" }
    ],
    features: [
      "단조 소재 가공으로 조직 치밀도 및 강도 우수",
      "내마모 코팅을 통한 수명 연장",
      "접촉면의 곡면(Crowning) 가공으로 편하중 방지",
      "극한의 해상 환경을 고려한 내구성 설계"
    ]
  }
]
