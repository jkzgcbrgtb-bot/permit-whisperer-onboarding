import { Building2, HeartPulse, UtensilsCrossed, Wine } from 'lucide-react'
import type { ReactNode } from 'react'
import { ScreenIntro } from '../components/ScreenIntro'
import { ChecklistRow, type RowState } from '../components/ChecklistRow'

interface Filing {
  title: string
  subtitle: string
  state: RowState
  icon: ReactNode
}

const filings: Filing[] = [
  {
    title: 'City business registration',
    subtitle: 'Approved',
    state: 'done',
    icon: <Building2 size={18} />,
  },
  {
    title: 'Health plan review',
    subtitle: 'In review',
    state: 'active',
    icon: <HeartPulse size={18} />,
  },
  {
    title: 'Food establishment license',
    subtitle: 'Submitted',
    state: 'active',
    icon: <UtensilsCrossed size={18} />,
  },
  {
    title: 'Liquor license',
    subtitle: 'Queued — longest lead time',
    state: 'todo',
    icon: <Wine size={18} />,
  },
]

export function Step5() {
  return (
    <div>
      <ScreenIntro
        pill="Step 5 · We're on it"
        headline="We're handling everything"
        subtext="No action needed from you right now — we'll keep this list updated."
      />

      <div className="flex flex-col gap-2">
        {filings.map((filing) => (
          <ChecklistRow
            key={filing.title}
            icon={filing.icon}
            title={filing.title}
            subtitle={filing.subtitle}
            state={filing.state}
          />
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-accent-bg px-3 py-3 text-xs text-accent-text">
        Filing fee due: $75 city registration — pay the city directly
      </div>
    </div>
  )
}
