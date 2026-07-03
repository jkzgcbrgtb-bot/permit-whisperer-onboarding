import { ScreenIntro } from '../components/ScreenIntro'
import { Field, SelectInput, TextInput } from '../components/Field'
import { Chip } from '../components/Chip'
import type { PersistedState } from '../lib/storage'

interface Step1Props {
  state: PersistedState
  update: (patch: Partial<PersistedState>) => void
}

export function Step1({ state, update }: Step1Props) {
  return (
    <div>
      <ScreenIntro
        pill="Step 1 · About 3 minutes"
        headline="Tell us about your project"
        subtext="A few basics so we know exactly what you need."
      />
      <div className="flex flex-col gap-4">
        <Field label="What are you doing?" htmlFor="project-type">
          <SelectInput
            id="project-type"
            value={state.projectType}
            onChange={(e) => update({ projectType: e.target.value })}
          >
            <option value="">Select one</option>
            <option value="restaurant">Opening a restaurant</option>
            <option value="storefront">Opening a business (storefront)</option>
            <option value="rental">Renting out a property</option>
            <option value="remodel">Building or remodeling</option>
            <option value="home-business">Home-based business</option>
          </SelectInput>
        </Field>

        <Field label="Business / property address" htmlFor="address">
          <TextInput
            id="address"
            type="text"
            placeholder="123 Sheridan Rd, Wilmette, IL"
            value={state.address}
            onChange={(e) => update({ address: e.target.value })}
          />
        </Field>

        <Field label="Own or lease the space?" htmlFor="tenure">
          <SelectInput
            id="tenure"
            value={state.tenure}
            onChange={(e) => update({ tenure: e.target.value })}
          >
            <option value="">Select one</option>
            <option value="lease">Lease</option>
            <option value="own">Own</option>
          </SelectInput>
        </Field>

        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink">Anything else that applies?</span>
          <div className="flex gap-2">
            <Chip
              label="Serves alcohol"
              selected={state.servesAlcohol}
              onClick={() => update({ servesAlcohol: !state.servesAlcohol })}
            />
            <Chip
              label="Exterior sign"
              selected={state.exteriorSign}
              onClick={() => update({ exteriorSign: !state.exteriorSign })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
