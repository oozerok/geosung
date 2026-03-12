import SubBanner from "@/components/sub-banner"
import SubNav from "@/components/sub-nav"
import Link from "next/link"
import { ChevronLeft, Calendar, User, Printer, Share2 } from "lucide-react"
import { notFound } from "next/navigation"
import { NOTICES } from "@/lib/notices-data"

interface NoticeDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function NoticeDetailPage({ params }: NoticeDetailPageProps) {
  const { id } = await params
  const noticeIndex = NOTICES.findIndex((n) => n.id === parseInt(id))
  const notice = NOTICES[noticeIndex]

  if (!notice) {
    notFound()
  }

  // 이전글, 다음글 찾기 (ID 순서 기준)
  const sortedNotices = [...NOTICES].sort((a, b) => a.id - b.id);
  const currentSortedIndex = sortedNotices.findIndex(n => n.id === notice.id);
  
  const prevNotice = currentSortedIndex > 0 ? sortedNotices[currentSortedIndex - 1] : null;
  const nextNotice = currentSortedIndex < sortedNotices.length - 1 ? sortedNotices[currentSortedIndex + 1] : null;

  const customerNav = [
    { name: "공지사항", href: "/customer/notice" },
    { name: "견적문의", href: "/customer" },
  ]

  return (
    <>
      <SubBanner 
        title="공지사항" 
        currentPath={["고객지원", "공지사항", "상세보기"]} 
      />
      <SubNav items={customerNav} activeItem="공지사항" />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Action Toolbar */}
          <div className="flex justify-between items-center mb-12">
            <Link href="/customer/notice" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-700 font-bold transition-colors group">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              목록으로 돌아가기
            </Link>
            <div className="flex gap-3">
              <button className="p-2.5 rounded-full border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                <Printer className="w-5 h-5" />
              </button>
              <button className="p-2.5 rounded-full border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Notice View */}
          <article className="border-t-2 border-slate-900 shadow-sm">
            {/* Header */}
            <header className="bg-slate-50/50 p-8 md:p-12 border-b border-slate-100">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                {notice.title}
              </h3>
              <div className="flex flex-wrap gap-6 text-sm font-bold text-slate-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-slate-600">{notice.author}</span>
                </div>
                <div className="flex items-center gap-2 border-l border-slate-200 pl-6">
                  <Calendar className="w-4 h-4" />
                  <span>{notice.date}</span>
                </div>
              </div>
            </header>

            {/* Content */}
            <div className="p-8 md:p-12 min-h-[400px]">
              <div className="text-lg text-slate-600 leading-loose whitespace-pre-wrap font-medium">
                {notice.content}
              </div>
            </div>

            {/* Footer / Navigation */}
            <footer className="border-t border-slate-100">
              <div className="flex flex-col">
                {/* 다음글 (최신글 방향) */}
                <div className="border-b border-slate-100">
                  {nextNotice ? (
                    <Link href={`/customer/notice/${nextNotice.id}`} className="flex items-center group cursor-pointer hover:bg-slate-50 transition-colors">
                      <div className="w-24 md:w-32 bg-slate-50 px-6 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-center shrink-0">다음글</div>
                      <div className="px-6 py-5 text-sm font-bold text-slate-800 truncate group-hover:text-blue-700">{nextNotice.title}</div>
                    </Link>
                  ) : (
                    <div className="flex items-center">
                      <div className="w-24 md:w-32 bg-slate-50 px-6 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-center shrink-0">다음글</div>
                      <div className="px-6 py-5 text-sm font-bold text-slate-400">다음 공지사항이 없습니다.</div>
                    </div>
                  )}
                </div>
                {/* 이전글 (과거글 방향) */}
                <div>
                  {prevNotice ? (
                    <Link href={`/customer/notice/${prevNotice.id}`} className="flex items-center group cursor-pointer hover:bg-slate-50 transition-colors">
                      <div className="w-24 md:w-32 bg-slate-50 px-6 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-center shrink-0">이전글</div>
                      <div className="px-6 py-5 text-sm font-bold text-slate-800 truncate group-hover:text-blue-700">{prevNotice.title}</div>
                    </Link>
                  ) : (
                    <div className="flex items-center">
                      <div className="w-24 md:w-32 bg-slate-50 px-6 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-center shrink-0">이전글</div>
                      <div className="px-6 py-5 text-sm font-bold text-slate-400">이전 공지사항이 없습니다.</div>
                    </div>
                  )}
                </div>
              </div>
            </footer>
          </article>

          <div className="mt-16 text-center">
            <Link href="/customer/notice" className="inline-block px-12 py-4 bg-slate-900 text-white font-black rounded-lg hover:bg-black transition-all">
              목록보기
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
