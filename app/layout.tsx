import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "거성정밀 | CNC / MCT 정밀가공 전문기업",
  description: "최고의 정밀 가공 기술로 완벽한 품질을 약속드리는 거성정밀입니다.",
  icons: {
    icon: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="ko">
      <body className="bg-white text-gray-900">

        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}