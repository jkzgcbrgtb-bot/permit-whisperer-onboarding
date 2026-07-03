import { ArrowLeft } from 'lucide-react'

interface BottomNavProps {
  ctaLabel: string
  showBack: boolean
  isFinish: boolean
  onBack: () => void
  onContinue: () => void
  continueDisabled?: boolean
}

export function BottomNav({
  ctaLabel,
  showBack,
  isFinish,
  onBack,
  onContinue,
  continueDisabled,
}: BottomNavProps) {
  return (
    <div className="shrink-0 border-t border-hairline px-5 py-4 flex items-center gap-3">
      {showBack ? (
        <button
          type="button"
          aria-label="Go back"
          onClick={onBack}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-hairline text-muted shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ArrowLeft size={18} />
        </button>
      ) : null}
      <button
        type="button"
        onClick={onContinue}
        disabled={continueDisabled}
        className={`h-11 flex-1 rounded-lg text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
          isFinish
            ? 'bg-success focus-visible:outline-success'
            : 'bg-navy focus-visible:outline-navy'
        }`}
      >
        {ctaLabel}
      </button>
    </div>
  )
}
