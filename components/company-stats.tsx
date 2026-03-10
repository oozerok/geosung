export default function CompanyStats() {

  const stats = [
    { label: "가공 경력", value: "15+" },
    { label: "보유 설비", value: "20+" },
    { label: "납품 업체", value: "120+" },
    { label: "가공 품목", value: "500+" },
  ]

  return (

    <section className="py-20 bg-gray-50">

      <div className="container mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {stats.map((s,i)=>(
            <div key={i}>
              <div className="text-3xl font-bold text-blue-700">
                {s.value}
              </div>
              <div className="text-gray-600 mt-2">
                {s.label}
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>

  )
}