import { Check, Loader2 } from 'lucide-react'
import type { ReactNode } from 'react'

export type RowState = 'done' | 'active' | 'todo'

interface ChecklistRowProps {
  icon: ReactNode
  title: string
  subtitle: string
  state: RowState
  onClick?: () => void
}

export function ChecklistRow({ icon, title, subtitle, state, onClick }: ChecklistRowProps) {
  const interactive = state === 'todo' && !!onClick
  const rowClasses = `flex w-full items-center gap-3 rounded-xl border border-hairline bg-card px-3 py-3 text-left ${
    interactive
      ? 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
      : ''
  }`

  const content = (
    <>
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
          state === 'done'
            ? 'bg-success-bg text-success'
            : state === 'active'
              ? 'bg-accent-bg text-accent-text'
              : 'bg-page text-muted'
        }`}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium text-ink truncate">{title}</div>
        <div className="text-xs text-muted truncate">{subtitle}</div>
      </div>
      <div className="shrink-0">
        {state === 'done' ? (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success-bg text-success">
            <Check size={14} strokeWidth={2.5} />
          </span>
        ) : state === 'active' ? (
          <Loader2 size={18} className="animate-spin text-accent" />
        ) : null}
      </div>
    </>
  )

  if (interactive) {
    return (
      <button type="button" onClick={onClick} className={rowClasses}>
        {content}
      </button>
    )
  }

  return <div className={rowClasses}>{content}</div>
}
