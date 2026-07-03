import type { ReactNode } from 'react'

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-page flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-[390px] rounded-[26px] border border-hairline bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col h-[780px] max-h-[92vh]">
        <div className="flex items-center justify-center py-2 shrink-0">
          <div className="h-1.5 w-20 rounded-full bg-hairline" />
        </div>
        {children}
      </div>
    </div>
  )
}
