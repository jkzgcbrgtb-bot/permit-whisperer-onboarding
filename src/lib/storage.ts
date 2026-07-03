const KEY = 'permit-whisperer-onboarding'

export interface PersistedState {
  currentStep: number
  projectType: string
  address: string
  tenure: string
  servesAlcohol: boolean
  exteriorSign: boolean
  agreementSigned: boolean
  documents: Record<string, boolean>
  authorizationSigned: boolean
}

export const defaultState: PersistedState = {
  currentStep: 0,
  projectType: '',
  address: '',
  tenure: '',
  servesAlcohol: false,
  exteriorSign: false,
  agreementSigned: false,
  documents: {},
  authorizationSigned: false,
}

export function loadState(): PersistedState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return defaultState
    return { ...defaultState, ...JSON.parse(raw) }
  } catch {
    return defaultState
  }
}

export function saveState(state: PersistedState) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // localStorage unavailable (private mode, quota) — app still works in memory
  }
}

export function clearState() {
  try {
    localStorage.removeItem(KEY)
  } catch {
    // ignore
  }
}
