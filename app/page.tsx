import Hero from "@/components/hero"
import KeyProducts from "@/components/key-products"
import Services from "@/components/services"
import Equipment from "@/components/equipment"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <KeyProducts />
      <Services />
      <Equipment />
      <Contact />
    </main>
  )
}
