export function Chip({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`h-9 rounded-full border px-3.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        selected
          ? 'border-accent bg-accent-bg text-accent-text'
          : 'border-hairline bg-card text-muted'
      }`}
    >
      {label}
    </button>
  )
}
