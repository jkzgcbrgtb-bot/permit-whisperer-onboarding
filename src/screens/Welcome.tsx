import { KeyRound } from 'lucide-react'
import { StatCard } from '../components/StatCard'

export function Welcome() {
  return (
    <div className="flex flex-col items-center text-center gap-5 pt-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-bg text-accent-text">
        <KeyRound size={30} strokeWidth={2} />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-medium text-ink">Let's get your permits handled</h2>
        <p className="text-sm text-muted leading-relaxed">
          Tell us what you're opening or renting out. We research everything, fill out the forms,
          and file them for you.
        </p>
      </div>
      <div className="flex w-full gap-2">
        <StatCard value="$400" label="flat fee" />
        <StatCard value="4" label="things you do" />
        <StatCard value="~5 min" label="to start" />
      </div>
    </div>
  )
}
