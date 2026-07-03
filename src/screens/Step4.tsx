import { ScreenIntro } from '../components/ScreenIntro'
import { SignRow } from '../components/SignRow'
import type { PersistedState } from '../lib/storage'

interface Step4Props {
  state: PersistedState
  update: (patch: Partial<PersistedState>) => void
}

export function Step4({ state, update }: Step4Props) {
  return (
    <div>
      <ScreenIntro
        pill="Step 4 · The green light"
        headline="Authorize us to file for you"
        subtext="One last signature and we take it from here."
      />

      <div className="rounded-2xl border border-hairline bg-page p-4 mb-4">
        <p className="text-sm text-ink leading-relaxed italic">
          "I authorize The Permit Whisperer to prepare and submit the permit and license
          applications for my project at the address above, and to communicate with the relevant
          agencies on my behalf."
        </p>
      </div>

      <SignRow
        label="Your e-signature"
        signed={state.authorizationSigned}
        onToggle={() => update({ authorizationSigned: !state.authorizationSigned })}
      />

      <p className="mt-3 text-xs text-muted">
        Needs a notary? You can do it online in minutes.
      </p>
    </div>
  )
}
