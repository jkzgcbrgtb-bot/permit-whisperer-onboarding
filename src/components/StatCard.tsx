export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 rounded-xl border border-hairline bg-page px-2 py-3 text-center">
      <div className="text-base font-medium text-navy">{value}</div>
      <div className="mt-0.5 text-xs text-muted">{label}</div>
    </div>
  )
}
