import { BellRing, CheckCircle2, FolderCheck, Star } from 'lucide-react'

export function Step7() {
  return (
    <div className="flex flex-col items-center text-center gap-5 pt-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-bg text-success">
        <CheckCircle2 size={32} strokeWidth={2} />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-medium text-ink">You're all set</h2>
        <p className="text-sm text-muted leading-relaxed">
          Every permit is approved and in hand. Here's your summary — and we'll remind you before
          anything needs renewing.
        </p>
      </div>

      <div className="flex w-full flex-col gap-2 text-left">
        <div className="flex items-center gap-3 rounded-xl border border-hairline bg-card px-3 py-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-success-bg text-success">
            <FolderCheck size={18} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-medium text-ink">Permit packet</div>
            <div className="text-xs text-muted">3 approved documents</div>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-hairline bg-card px-3 py-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-success-bg text-success">
            <BellRing size={18} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-medium text-ink">Renewal reminders</div>
            <div className="text-xs text-muted">On, first one Apr 1</div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 text-xs text-muted">
        <Star size={12} />
        <span>Mind leaving us a review?</span>
      </div>
    </div>
  )
}
