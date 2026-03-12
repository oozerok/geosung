import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"

interface SubBannerProps {
  title: string
  subtitle?: string
  bgImage?: string
  currentPath: string[]
}

export default function SubBanner({ 
  title, 
  subtitle = "Precision Engineering & Manufacturing Leader",
  bgImage = "/banner4.png",
  currentPath 
}: SubBannerProps) {
  return (
    <div className="relative h-[300px] lg:h-[400px] overflow-hidden flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={bgImage} alt={title} className="w-full h-full object-cover brightness-[0.4]" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-8">
        <h2 className="text-white text-4xl lg:text-6xl font-black mb-6 tracking-tight animate-in slide-in-from-top duration-700">
          {title}
        </h2>
        <p className="text-white/70 text-lg font-medium tracking-widest uppercase animate-in slide-in-from-bottom duration-700">
          {subtitle}
        </p>
      </div>

      {/* Breadcrumbs - seogyung style bottom bar */}
      <div className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-sm border-t border-white/10 h-14 flex items-center">
        <div className="container mx-auto px-6 flex items-center gap-2 text-white/60 text-sm font-bold">
          <Link href="/" className="hover:text-white transition-colors">
            <Home className="w-4 h-4" />
          </Link>
          {currentPath.map((path, i) => (
            <div key={path} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <span className={i === currentPath.length - 1 ? "text-white" : "hover:text-white transition-colors"}>
                {path}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
