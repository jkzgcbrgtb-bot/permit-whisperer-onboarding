import { Pill } from './Pill'

export function ScreenIntro({
  pill,
  headline,
  subtext,
}: {
  pill: string
  headline: string
  subtext: string
}) {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <Pill>{pill}</Pill>
      <h2 className="text-lg font-medium text-ink">{headline}</h2>
      <p className="text-sm text-muted leading-relaxed">{subtext}</p>
    </div>
  )
}
