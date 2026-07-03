import { useEffect, useState } from 'react'
import { PhoneFrame } from './components/PhoneFrame'
import { StepHeader } from './components/StepHeader'
import { BottomNav } from './components/BottomNav'
import { screens } from './data/screens'
import { clearState, loadState, saveState, type PersistedState } from './lib/storage'
import { Welcome } from './screens/Welcome'
import { Step1 } from './screens/Step1'
import { Step2 } from './screens/Step2'
import { Step3 } from './screens/Step3'
import { Step4 } from './screens/Step4'
import { Step5 } from './screens/Step5'
import { Step6 } from './screens/Step6'
import { Step7 } from './screens/Step7'

function App() {
  const [state, setState] = useState<PersistedState>(() => loadState())

  useEffect(() => {
    saveState(state)
  }, [state])

  const update = (patch: Partial<PersistedState>) => {
    setState((prev) => ({ ...prev, ...patch }))
  }

  const goBack = () => update({ currentStep: Math.max(0, state.currentStep - 1) })

  const goContinue = () => {
    if (state.currentStep === 7) {
      clearState()
      setState((prev) => ({ ...prev, currentStep: 0 }))
      return
    }
    update({ currentStep: Math.min(7, state.currentStep + 1) })
  }

  const startOver = () => {
    clearState()
    setState((prev) => ({ ...prev, currentStep: 0 }))
  }

  const screen = screens[state.currentStep]

  const continueDisabled =
    (state.currentStep === 2 && !state.agreementSigned) ||
    (state.currentStep === 4 && !state.authorizationSigned)

  return (
    <>
      <h1 className="visually-hidden">
        Permit Whisperer client onboarding — a guided flow for handling city permits and licenses
      </h1>
      <PhoneFrame>
        <StepHeader label={screen.headerLabel} pct={screen.pct} />

        <div
          key={state.currentStep}
          className="flex-1 overflow-y-auto px-5 pb-4 animate-[fadein_180ms_ease-out]"
        >
          {state.currentStep === 0 && <Welcome />}
          {state.currentStep === 1 && <Step1 state={state} update={update} />}
          {state.currentStep === 2 && <Step2 state={state} update={update} />}
          {state.currentStep === 3 && <Step3 state={state} update={update} />}
          {state.currentStep === 4 && <Step4 state={state} update={update} />}
          {state.currentStep === 5 && <Step5 />}
          {state.currentStep === 6 && <Step6 />}
          {state.currentStep === 7 && <Step7 />}
        </div>

        <BottomNav
          ctaLabel={screen.cta}
          showBack={state.currentStep > 0}
          isFinish={state.currentStep === 7}
          onBack={goBack}
          onContinue={goContinue}
          continueDisabled={continueDisabled}
        />

        <div className="pb-3 text-center shrink-0">
          <button
            type="button"
            onClick={startOver}
            className="text-xs text-muted underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Start over
          </button>
        </div>
      </PhoneFrame>
    </>
  )
}

export default App
