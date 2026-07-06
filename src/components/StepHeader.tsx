import { KeyRound } from 'lucide-react'
import { ProgressBar } from './ProgressBar'

export function StepHeader({ label, pct }: { label: string; pct: number }) {
  return (
    <div className="px-5 pb-3 shrink-0">
      <div className="flex items-center justify-between mb-3">
        <a href="../" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-bg text-accent-text">
            <KeyRound size={16} strokeWidth={2} />
          </div>
          <span className="text-sm font-medium text-navy">Permit Whisperer</span>
        </a>
        <span className="text-sm text-muted">{label}</span>
      </div>
      <ProgressBar pct={pct} />
    </div>
  )
}
