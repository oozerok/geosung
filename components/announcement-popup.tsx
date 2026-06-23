"use client"

import { useState, useEffect } from "react"
import { X, AlertTriangle } from "lucide-react"

export default function AnnouncementPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check localStorage to see if the popup should be hidden
    const hidePopupUntil = localStorage.getItem("hide_small_batch_popup_until")
    if (!hidePopupUntil || new Date().getTime() > parseInt(hidePopupUntil, 10)) {
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleHideFor24Hours = () => {
    const expireTime = new Date().getTime() + 24 * 60 * 60 * 1000 // 24 hours from now
    localStorage.setItem("hide_small_batch_popup_until", expireTime.toString())
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 transition-all duration-300">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header pattern/accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-50 hover:text-slate-700 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-10">
          {/* Icon and Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-black text-amber-600 tracking-widest uppercase block mb-1">Notice</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                소량 가공 문의 접수 제한 안내
              </h3>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 text-slate-600 font-medium text-sm md:text-base leading-relaxed mb-8">
            <p>
              항상 거성정밀을 신뢰하고 찾아주시는 고객 여러분께 깊은 감사를 드립니다.
            </p>
            <p className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-700 font-bold">
              현재 거성정밀은 <span className="text-blue-600">중대형 및 부품 양산 프로젝트 전용 가공 라인의 효율적인 집중 가동</span>에 모든 역량을 쏟고 있습니다.
            </p>
            <p>
              양산 공정의 완성도를 극대화하고 대형 프로젝트의 철저한 납기 준수 및 품질 보증을 보장하기 위해, 당분간 일부 소형 단품 작업의 신규 접수가 일시 제한됨을 양해 부탁드립니다.
            </p>
            <div className="pl-4 border-l-2 border-amber-500 text-amber-800 bg-amber-50/50 p-3 rounded-r-xl text-sm font-semibold">
              ⚠️ <span className="font-extrabold text-amber-900">접수 제한 대상:</span> 1회성 소량 제작, 단품 샘플 가공, 개인 고객 문의
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={handleHideFor24Hours}
              className="text-slate-400 hover:text-slate-600 font-bold text-sm transition-colors py-2 px-4 rounded-xl hover:bg-slate-50 w-full sm:w-auto text-center cursor-pointer"
            >
              오늘 하루 이 창 열지 않기
            </button>
            <button
              onClick={handleClose}
              className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl text-sm hover:bg-slate-800 transition-colors w-full sm:w-auto text-center cursor-pointer"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
