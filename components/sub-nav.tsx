import Link from "next/link"

interface SubNavProps {
  items: { name: string; href: string }[]
  activeItem: string
}

export default function SubNav({ items, activeItem }: SubNavProps) {
  return (
    <div className="bg-white border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap">
          {items.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`px-8 py-5 text-sm font-bold transition-all border-b-2 ${
                item.name === activeItem 
                  ? "border-blue-700 text-blue-700 bg-blue-50/30" 
                  : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
