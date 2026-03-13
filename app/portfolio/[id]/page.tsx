import ProductDetailTemplate from "@/components/product-detail-template"
import { notFound } from "next/navigation"
import { portfolioData } from "@/lib/portfolio-data"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params
  const product = portfolioData.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return <ProductDetailTemplate product={product} />
}
