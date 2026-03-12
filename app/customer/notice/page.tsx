"use client"

import SubBanner from "@/components/sub-banner"
import SubNav from "@/components/sub-nav"
import { Search, ChevronLeft, ChevronRight, Pin } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"
import { NOTICES } from "@/lib/notices-data"

export default function CustomerNoticePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const customerNav = [
    { name: "공지사항", href: "/customer/notice" },
    { name: "견적문의", href: "/customer" },
  ]

  // 1. 검색 필터링 로직
  const filteredNotices = useMemo(() => {
    return [...NOTICES]
      .filter(notice => 
        notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        // 공지글(isPinned)을 최상단으로, 그 외에는 ID 내림차순(최신순)
        if (a.isPinned && !b.isPinned) return -1
        if (!a.isPinned && b.isPinned) return 1
        return b.id - a.id
      })
  }, [searchTerm])

  // 2. 페이징 계산 로직
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage)
  const paginatedNotices = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredNotices.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredNotices, currentPage])

  // 검색 시 페이지를 1페이지로 리셋
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  return (
    <>
      <SubBanner 
        title="공지사항" 
        currentPath={["고객지원", "공지사항"]} 
      />
      <SubNav items={customerNav} activeItem="공지사항" />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Notice Toolbar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
            <div className="text-sm font-bold text-slate-500">
              Total <span className="text-blue-700">{filteredNotices.length}</span> notices
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <div className="flex-1 md:w-64 relative">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="제목 또는 내용 검색"
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-700 focus:bg-white transition-all font-medium"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Board Table */}
          <div className="border-t-2 border-slate-900 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200 text-slate-400 text-sm font-black uppercase tracking-widest">
                  <th className="px-6 py-5 text-center w-20">번호</th>
                  <th className="px-6 py-5">제목</th>
                  <th className="px-6 py-5 w-24">작성자</th>
                  <th className="px-6 py-5 text-center w-32">등록일</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paginatedNotices.length > 0 ? (
                  paginatedNotices.map((notice) => (
                    <tr key={notice.id} className={`group cursor-pointer hover:bg-blue-50/30 transition-colors ${notice.isPinned ? "bg-slate-50/30" : ""}`}>
                      <td className="px-6 py-5 text-center">
                        {notice.isPinned ? (
                          <div className="flex justify-center">
                            <Pin className="w-4 h-4 text-blue-600 fill-blue-600" />
                          </div>
                        ) : (
                          <span className="text-slate-400 text-sm font-medium">{notice.id}</span>
                        )}
                      </td>
                      <td className="px-6 py-5">
                        <Link href={`/customer/notice/${notice.id}`} className="text-slate-800 font-bold group-hover:text-blue-700 transition-colors block">
                          {notice.isPinned && <span className="text-blue-700 mr-2">[공지]</span>}
                          {notice.title}
                        </Link>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-slate-500 text-sm font-medium">{notice.author}</span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="text-slate-400 text-sm font-medium">{notice.date}</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-20 text-center text-slate-400 font-bold italic">
                      검색 결과가 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center border border-slate-200 text-slate-400 rounded-lg hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 flex items-center justify-center font-bold rounded-lg transition-all ${
                    currentPage === i + 1 
                      ? "bg-slate-900 text-white shadow-lg" 
                      : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center border border-slate-200 text-slate-400 rounded-lg hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
