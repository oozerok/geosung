"use client"

import SubBanner from "@/components/sub-banner"
import SubNav from "@/components/sub-nav"
import { Send, Phone, Mail, Clock, Loader2, FileUp, X } from "lucide-react"
import { useState } from "react"
import Turnstile from "react-turnstile"

export default function CustomerInquiryPage() {
  const [token, setToken] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const customerNav = [
    { name: "공지사항", href: "/customer/notice" },
    { name: "견적문의", href: "/customer" },
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    const allowedExtensions = ["pdf", "step", "stp", "dwg"]
    const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase()
    
    if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
      alert("허용되지 않은 확장자입니다. (PDF, STEP, DWG 파일만 가능)")
      e.target.value = ""
      return
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      alert("파일 크기는 10MB를 초과할 수 없습니다.")
      e.target.value = ""
      return
    }

    setFile(selectedFile)
  }

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const base64String = reader.result as string
        // data:...base64, 부분 제거하고 순수 데이터만 추출
        resolve(base64String.split(",")[1])
      }
      reader.onerror = (error) => reject(error)
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!token) {
      alert("보안 검증(Turnstile)을 완료해 주세요.")
      return
    }

    setIsSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)

    let attachment = null
    if (file) {
      try {
        const base64Content = await fileToBase64(file)
        attachment = {
          filename: file.name,
          content: base64Content
        }
      } catch (error) {
        alert("파일 처리 중 오류가 발생했습니다.")
        setIsSubmitting(false)
        return
      }
    }

    const payload = {
      company: formData.get("company"),
      manager: formData.get("manager"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      content: formData.get("content"),
      token: token,
      attachment: attachment
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })

      const data = await res.json()

      if (data.success) {
        alert("문의가 정상적으로 접수되었습니다. 확인 후 연락드리겠습니다.")
        form.reset()
        setToken(null)
        setFile(null)
      } else {
        alert(data.error || "전송에 실패했습니다. 다시 시도해 주세요.")
      }
    } catch (error) {
      alert("서버 통신 중 오류가 발생했습니다.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SubBanner 
        title="견적문의" 
        currentPath={["고객지원", "견적문의"]} 
      />
      <SubNav items={customerNav} activeItem="견적문의" />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6">QUICK CONTACT</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    궁금하신 사항이나 견적 문의를 남겨주시면 <br />
                    담당자가 확인 후 신속하게 연락드리겠습니다.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl flex items-center gap-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Phone</div>
                      <div className="text-xl font-black text-slate-900">051-301-7414</div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-6">
                    <div className="w-12 h-12 bg-white text-slate-400 rounded-xl flex items-center justify-center shrink-0 border border-slate-200">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</div>
                      <div className="text-lg font-bold text-slate-900">contact@geosungprecision.com</div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-6">
                    <div className="w-12 h-12 bg-white text-slate-400 rounded-xl flex items-center justify-center shrink-0 border border-slate-200">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Working Hours</div>
                      <div className="text-sm font-bold text-slate-900">평일 09:00 - 18:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="p-10 lg:p-16 bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-200/50">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-black text-slate-900 ml-1">업체명 <span className="text-red-500">*</span></label>
                      <input required name="company" type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-blue-700 focus:bg-white transition-all font-medium" placeholder="회사명을 입력하세요" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-slate-900 ml-1">담당자명 <span className="text-red-500">*</span></label>
                      <input required name="manager" type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-blue-700 focus:bg-white transition-all font-medium" placeholder="성함을 입력하세요" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-black text-slate-900 ml-1">연락처 <span className="text-red-500">*</span></label>
                      <input required name="phone" type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-blue-700 focus:bg-white transition-all font-medium" placeholder="010-0000-0000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-slate-900 ml-1">이메일 <span className="text-red-500">*</span></label>
                      <input required name="email" type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-blue-700 focus:bg-white transition-all font-medium" placeholder="example@email.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-900 ml-1">문의제목 <span className="text-red-500">*</span></label>
                    <input required name="subject" type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-blue-700 focus:bg-white transition-all font-medium" placeholder="제목을 입력하세요" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-900 ml-1">문의내용 <span className="text-red-500">*</span></label>
                    <textarea required name="content" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-blue-700 focus:bg-white transition-all font-medium min-h-[200px]" placeholder="상세한 문의 내용을 입력해 주세요 (가공 수량, 소재, 납기 등)"></textarea>
                  </div>

                  {/* 파일 첨부 영역 */}
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-900 ml-1">도면 첨부 (선택)</label>
                    <div className="relative">
                      <input 
                        type="file" 
                        id="file-upload" 
                        className="hidden" 
                        onChange={handleFileChange}
                        accept=".pdf,.step,.stp,.dwg"
                      />
                      {!file ? (
                        <label 
                          htmlFor="file-upload" 
                          className="flex items-center justify-between w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors border-dashed border-2"
                        >
                          <div className="flex items-center gap-3">
                            <FileUp className="w-5 h-5 text-slate-400" />
                            <span className="text-slate-400 font-medium text-sm">PDF, STEP, DWG 파일 (최대 10MB)</span>
                          </div>
                          <div className="px-4 py-1 bg-slate-200 text-slate-600 text-xs font-bold rounded-md">파일 선택</div>
                        </label>
                      ) : (
                        <div className="flex items-center justify-between w-full px-6 py-4 bg-blue-50 border border-blue-100 rounded-xl">
                          <div className="flex items-center gap-3 overflow-hidden">
                            <FileUp className="w-5 h-5 text-blue-600 shrink-0" />
                            <span className="text-blue-700 font-bold text-sm truncate">{file.name}</span>
                            <span className="text-blue-400 text-xs shrink-0">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => setFile(null)}
                            className="p-1 hover:bg-blue-100 rounded-full text-blue-600 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Turnstile
                      sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                      onVerify={(token) => setToken(token)}
                    />
                  </div>

                  <div className="pt-4">
                    <button 
                      disabled={isSubmitting}
                      className="w-full py-5 bg-blue-700 text-white font-black rounded-xl text-lg flex items-center justify-center gap-3 hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/10 group disabled:bg-slate-400"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                      ) : (
                        <>
                          문의하기 제출
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
