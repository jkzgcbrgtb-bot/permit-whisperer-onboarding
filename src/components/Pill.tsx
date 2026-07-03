import type { ReactNode } from 'react'

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full bg-accent-bg px-3 py-1 text-xs font-medium text-accent-text">
      {children}
    </span>
  )
}
