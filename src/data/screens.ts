export interface ScreenConfig {
  id: number
  headerLabel: string
  pct: number
  cta: string
}

// Drives the header label, progress bar fill, and bottom-nav button label
// for each of the 8 screens (0 = welcome, 1-7 = numbered steps).
export const screens: ScreenConfig[] = [
  { id: 0, headerLabel: 'Welcome', pct: 6, cta: 'Get started' },
  { id: 1, headerLabel: 'Step 1 of 7', pct: 20, cta: 'Continue' },
  { id: 2, headerLabel: 'Step 2 of 7', pct: 34, cta: 'Sign & pay' },
  { id: 3, headerLabel: 'Step 3 of 7', pct: 48, cta: 'Continue' },
  { id: 4, headerLabel: 'Step 4 of 7', pct: 62, cta: 'Sign authorization' },
  { id: 5, headerLabel: 'Step 5 of 7', pct: 76, cta: 'Continue' },
  { id: 6, headerLabel: 'Step 6 of 7', pct: 88, cta: 'Continue' },
  { id: 7, headerLabel: 'Step 7 of 7', pct: 100, cta: 'Finish' },
]
