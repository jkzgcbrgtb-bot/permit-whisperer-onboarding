import { ClipboardList, ListChecks } from 'lucide-react'
import { ScreenIntro } from '../components/ScreenIntro'

export function Step6() {
  return (
    <div>
      <ScreenIntro
        pill="Step 6 · Only if needed"
        headline="Inspection scheduled"
        subtext="We'll be with you virtually if you'd like support during the visit."
      />

      <div className="flex flex-col items-center gap-2 rounded-2xl border border-hairline bg-page p-6 text-center mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-bg text-accent-text">
          <ClipboardList size={24} />
        </div>
        <div className="text-base font-medium text-ink">Thu, Aug 6 · 10:00 AM</div>
        <div className="text-sm text-muted">Health inspection — kitchen</div>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-hairline bg-card px-3 py-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-accent-text">
          <ListChecks size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium text-ink">What the inspector checks</div>
          <div className="text-xs text-muted">We'll send your prep list</div>
        </div>
      </div>
    </div>
  )
}
