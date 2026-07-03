import { Check, PenLine } from 'lucide-react'

export function SignRow({
  label,
  signed,
  onToggle,
}: {
  label: string
  signed: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      aria-pressed={signed}
      onClick={onToggle}
      className="flex w-full items-center gap-3 rounded-xl border border-hairline bg-card px-3 py-3.5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
          signed ? 'bg-success-bg text-success' : 'bg-accent-bg text-accent-text'
        }`}
      >
        {signed ? <Check size={18} strokeWidth={2.5} /> : <PenLine size={16} />}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium text-ink">{label}</div>
        <div className="text-xs text-muted">{signed ? 'Signed' : 'Tap to sign'}</div>
      </div>
    </button>
  )
}
