import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface ProductCardProps {
  title: string
  desc: string
  image: string
}

export default function ProductCard({
  title,
  desc,
  image
}: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)]">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500" />
        
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-wider shadow-sm border border-slate-100">
          Precision Machined
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          {desc}
        </p>
        
        <div className="flex gap-2">
          {["CNC", "MCT", "Custom"].map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-slate-50 text-slate-400 text-[10px] font-medium rounded border border-slate-100">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
