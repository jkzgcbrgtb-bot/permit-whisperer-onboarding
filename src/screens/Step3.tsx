import { FileText, IdCard, Ruler, Info } from 'lucide-react'
import type { ReactNode } from 'react'
import { ScreenIntro } from '../components/ScreenIntro'
import { ChecklistRow } from '../components/ChecklistRow'
import type { PersistedState } from '../lib/storage'

interface Step3Props {
  state: PersistedState
  update: (patch: Partial<PersistedState>) => void
}

interface DocDef {
  key: string
  title: string
  icon: ReactNode
  defaultDone?: boolean
}

const docs: DocDef[] = [
  { key: 'photo-id', title: 'Owner photo ID', icon: <IdCard size={18} />, defaultDone: true },
  { key: 'lease', title: 'Signed lease', icon: <FileText size={18} />, defaultDone: true },
  { key: 'floor-plan', title: 'Kitchen floor plan', icon: <Ruler size={18} /> },
  { key: 'food-cert', title: 'Food-manager certificate', icon: <IdCard size={18} /> },
]

export function Step3({ state, update }: Step3Props) {
  return (
    <div>
      <ScreenIntro
        pill="Step 3 · Upload once"
        headline="Send us your documents"
        subtext="Upload what you have. We'll flag anything else we need."
      />

      <div className="flex flex-col gap-2">
        {docs.map((doc) => {
          const done = doc.defaultDone || !!state.documents[doc.key]
          return (
            <ChecklistRow
              key={doc.key}
              icon={doc.icon}
              title={doc.title}
              subtitle={done ? 'Done' : 'Tap to upload'}
              state={done ? 'done' : 'todo'}
              onClick={
                done ? undefined : () => update({ documents: { ...state.documents, [doc.key]: true } })
              }
            />
          )
        })}
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-xl bg-accent-bg px-3 py-3 text-xs text-accent-text">
        <Info size={14} className="mt-0.5 shrink-0" />
        <span>Don't have one? Send what you have — we'll help with the rest.</span>
      </div>
    </div>
  )
}
