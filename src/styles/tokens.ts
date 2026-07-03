// Brand tokens, mirrored from the Tailwind @theme block in index.css.
// Use the Tailwind utility classes (bg-navy, text-accent-text, etc.) wherever
// possible; reach for these raw values only when a class can't express it
// (e.g. inline SVG strokes).
export const colors = {
  navy: '#1F3864',
  accent: '#2E75B6',
  accentBg: '#EAF1FB',
  accentText: '#0C447C',
  success: '#1E7145',
  successBg: '#EAF3EC',
  page: '#F7F8FA',
  card: '#FFFFFF',
  hairline: '#E3E6EC',
  muted: '#6B7280',
  ink: '#1A1A1A',
} as const

export const radius = {
  control: 8,
  card: 14,
  phone: 26,
} as const
