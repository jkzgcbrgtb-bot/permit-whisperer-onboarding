import { Lock } from 'lucide-react'
import { ScreenIntro } from '../components/ScreenIntro'
import { SignRow } from '../components/SignRow'
import type { PersistedState } from '../lib/storage'

interface Step2Props {
  state: PersistedState
  update: (patch: Partial<PersistedState>) => void
}

export function Step2({ state, update }: Step2Props) {
  return (
    <div>
      <ScreenIntro
        pill="Step 2 · Sign & pay"
        headline="Review your agreement"
        subtext="Our flat fee covers our work. Government filing fees are separate and paid directly to each agency."
      />

      <div className="rounded-2xl border border-hairline bg-page p-4 mb-4">
        <div className="flex items-center justify-between text-sm text-ink">
          <span>Permit Whisperer service</span>
          <span className="font-medium">$400.00</span>
        </div>
        <div className="flex items-center justify-between text-sm text-muted mt-2">
          <span>Government filing fees</span>
          <span>paid to agency</span>
        </div>
        <div className="my-3 h-px bg-hairline" />
        <div className="flex items-center justify-between text-sm font-medium text-navy">
          <span>Due today</span>
          <span>$400.00</span>
        </div>
      </div>

      <SignRow
        label="e-sign"
        signed={state.agreementSigned}
        onToggle={() => update({ agreementSigned: !state.agreementSigned })}
      />

      <div className="flex items-center gap-1.5 mt-3 text-xs text-muted">
        <Lock size={12} />
        <span>Secure signature & payment</span>
      </div>
    </div>
  )
}
