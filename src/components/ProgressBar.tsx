export function ProgressBar({ pct }: { pct: number }) {
  return (
    <div
      className="h-1.5 w-full rounded-full bg-hairline overflow-hidden"
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-accent transition-[width] duration-300 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
