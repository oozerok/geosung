import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  baseUrl: string
}

export default function Pagination({ totalItems, itemsPerPage, currentPage, baseUrl }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  if (totalPages <= 1) return null

  const getPageUrl = (page: number) => {
    return `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}page=${page}`
  }

  return (
    <div className="mt-24 flex justify-center gap-2">
      {/* Previous Button */}
      <Link
        href={getPageUrl(currentPage - 1)}
        className={`w-10 h-10 flex items-center justify-center border rounded-lg transition-colors ${
          currentPage > 1
            ? "border-slate-200 hover:border-blue-700 hover:text-blue-700 text-slate-600"
            : "border-slate-100 text-slate-300 pointer-events-none"
        }`}
        aria-disabled={currentPage <= 1}
      >
        <ChevronLeft className="w-5 h-5" />
      </Link>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={getPageUrl(page)}
          className={`w-10 h-10 flex items-center justify-center border font-bold rounded-lg transition-colors ${
            currentPage === page
              ? "border-blue-700 bg-blue-700 text-white"
              : "border-slate-200 hover:border-blue-700 hover:text-blue-700 text-slate-600"
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Next Button */}
      <Link
        href={getPageUrl(currentPage + 1)}
        className={`w-10 h-10 flex items-center justify-center border rounded-lg transition-colors ${
          currentPage < totalPages
            ? "border-slate-200 hover:border-blue-700 hover:text-blue-700 text-slate-600"
            : "border-slate-100 text-slate-300 pointer-events-none"
        }`}
        aria-disabled={currentPage >= totalPages}
      >
        <ChevronRight className="w-5 h-5" />
      </Link>
    </div>
  )
}
