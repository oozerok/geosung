export default function Home() {
  return (

    <main>

      <section className="text-center py-32">

        <h1 className="text-5xl font-bold leading-tight">
          We Build Modern <br/>
          Web Experiences
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          최고의 웹 솔루션을 제공하는 개발 회사입니다.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-lg">
            문의하기
          </button>

          <button className="px-6 py-3 border rounded-lg">
            서비스 보기
          </button>
        </div>

      </section>
      <section className="py-20 bg-gray-50">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="p-8 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold">
              Web Development
            </h3>
            <p className="mt-4 text-gray-600">
              최신 기술로 웹 서비스를 개발합니다.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold">
              UI / UX Design
            </h3>
            <p className="mt-4 text-gray-600">
              사용자 중심 디자인을 제공합니다.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold">
              Consulting
            </h3>
            <p className="mt-4 text-gray-600">
              IT 컨설팅을 제공합니다.
            </p>
          </div>

        </div>

      </section>
      <section className="py-24 text-center">

        <h2 className="text-3xl font-bold">
          함께 프로젝트를 시작해보세요
        </h2>

        <button className="mt-8 px-8 py-4 bg-black text-white rounded-lg">
          문의하기
        </button>

      </section>
    </main>
  )
}