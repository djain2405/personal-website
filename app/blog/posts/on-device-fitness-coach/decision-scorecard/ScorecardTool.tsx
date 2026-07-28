'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  Zap,
  WifiOff,
  LineChart,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

type DimensionId = 'privacy' | 'latency' | 'availability' | 'cost' | 'engineering'

type Band = 'cloud' | 'hybrid' | 'on-device' | null

type Dimension = {
  id: DimensionId
  label: string
  icon: LucideIcon
  askYourself: string
  cloud12: string
  neutral3: string
  onDevice45: string
}

const DIMENSIONS: Dimension[] = [
  {
    id: 'privacy',
    label: 'Privacy',
    icon: Shield,
    askYourself: 'Would users reasonably expect this data to stay on their device?',
    cloud12: 'Low-sensitivity or already shared data',
    neutral3: 'Mixed sensitivity',
    onDevice45: 'Health, financial, biometric, or highly personal data',
  },
  {
    id: 'latency',
    label: 'Latency',
    icon: Zap,
    askYourself: 'How quickly must the feature respond?',
    cloud12: 'Seconds are acceptable',
    neutral3: 'Moderate responsiveness',
    onDevice45: 'Needs to feel instantaneous or real-time',
  },
  {
    id: 'availability',
    label: 'Availability',
    icon: WifiOff,
    askYourself: 'Should the feature continue working without internet?',
    cloud12: 'Always connected',
    neutral3: 'Sometimes offline',
    onDevice45: 'Must work fully offline',
  },
  {
    id: 'cost',
    label: 'Cost at Scale',
    icon: LineChart,
    askYourself: 'How will inference cost grow as your user base grows?',
    cloud12: 'Cloud cost is acceptable',
    neutral3: 'Similar either way',
    onDevice45: 'Cloud costs become significant at scale',
  },
  {
    id: 'engineering',
    label: 'Engineering Complexity',
    icon: Wrench,
    askYourself: 'Can your team support local model management?',
    cloud12: 'Prefer centralized APIs',
    neutral3: 'Some local capability',
    onDevice45: 'Comfortable managing model lifecycle, compatibility, and updates',
  },
]

const INITIAL_SCORES: Record<DimensionId, number | null> = {
  privacy: null,
  latency: null,
  availability: null,
  cost: null,
  engineering: null,
}

function getBand(total: number): Exclude<Band, null> {
  if (total <= 12) return 'cloud'
  if (total <= 19) return 'hybrid'
  return 'on-device'
}

function meterPercent(total: number): number {
  return ((total - 5) / 20) * 100
}

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-xl border border-gray-200 bg-white/90 p-4 shadow-sm ${className}`}>
    {children}
  </div>
)

export default function ScorecardTool() {
  const [scores, setScores] = useState(INITIAL_SCORES)

  const { total, complete, band, meterLabel } = useMemo(() => {
    const values = DIMENSIONS.map((d) => scores[d.id])
    const complete = values.every((v) => v !== null)
    if (!complete) {
      return { total: 0, complete: false, band: null as Band, meterLabel: 'Score all five dimensions' }
    }
    const total = values.reduce((sum, v) => sum + (v as number), 0)
    const band = getBand(total)
    const labels: Record<Exclude<Band, null>, string> = {
      cloud: 'Cloud-first',
      hybrid: 'Hybrid',
      'on-device': 'On-device',
    }
    return { total, complete, band, meterLabel: labels[band] }
  }, [scores])

  const setScore = (id: DimensionId, value: number) => {
    setScores((prev) => ({ ...prev, [id]: value }))
  }

  const markerLeft = complete ? `${meterPercent(total)}%` : '50%'

  return (
    <div
      className="my-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 via-white to-violet-50/50 p-6 md:p-8"
      aria-label="On-device AI decision scorecard"
    >
      <div className="grid gap-4 md:grid-cols-5">
        <Card className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Your total</p>
          <p className="mt-2 text-3xl font-bold text-gray-900" aria-live="polite">
            {complete ? total : '—'}
            <span className="text-lg font-normal text-gray-500"> / 25</span>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            {complete ? (
              <>
                Suggested direction: <span className="font-semibold text-gray-900">{meterLabel}</span>
              </>
            ) : (
              'Choose a score from 1 to 5 for each dimension below.'
            )}
          </p>
        </Card>

        <Card className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Placement spectrum</p>
          <div className="mt-3 flex justify-between text-xs text-gray-500">
            <span>Cloud</span>
            <span>Hybrid</span>
            <span>On-device</span>
          </div>
          <div className="relative mt-2 h-3 overflow-hidden rounded-full bg-gray-200/80">
            <div className="absolute inset-0 flex">
              <div className="h-full w-1/3 bg-sky-200/80" />
              <div className="h-full w-1/3 bg-violet-200/80" />
              <div className="h-full w-1/3 bg-emerald-200/80" />
            </div>
            {complete && (
              <motion.div
                className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-gradient-to-br from-blue-600 to-purple-600 shadow-md"
                initial={{ left: '50%' }}
                animate={{ left: markerLeft }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                aria-hidden
              />
            )}
          </div>
          <p className="mt-2 text-xs text-gray-500">5–12 cloud · 13–19 hybrid · 20–25 on-device</p>
        </Card>
      </div>

      <div className="mt-6 space-y-4">
        {DIMENSIONS.map((dim) => {
          const Icon = dim.icon
          return (
            <Card key={dim.id}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-gradient-to-br from-blue-500/15 to-purple-500/15 p-2">
                      <Icon className="h-4 w-4 text-purple-700" aria-hidden />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">{dim.label}</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">{dim.askYourself}</p>
                  <div className="mt-3 grid gap-2 text-xs text-gray-600 sm:grid-cols-3">
                    <div className="rounded-lg bg-sky-50 px-3 py-2 ring-1 ring-sky-100">
                      <span className="font-semibold text-sky-900">1–2 (Cloud)</span>
                      <p className="mt-1">{dim.cloud12}</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 px-3 py-2 ring-1 ring-gray-100">
                      <span className="font-semibold text-gray-800">3</span>
                      <p className="mt-1">{dim.neutral3}</p>
                    </div>
                    <div className="rounded-lg bg-emerald-50 px-3 py-2 ring-1 ring-emerald-100">
                      <span className="font-semibold text-emerald-900">4–5 (On-device)</span>
                      <p className="mt-1">{dim.onDevice45}</p>
                    </div>
                  </div>
                </div>
                <div className="shrink-0">
                  <p className="mb-2 text-xs font-medium text-gray-500">Score</p>
                  <div
                    className="flex gap-1"
                    role="radiogroup"
                    aria-label={`Score for ${dim.label}`}
                  >
                    {[1, 2, 3, 4, 5].map((value) => {
                      const selected = scores[dim.id] === value
                      return (
                        <button
                          key={value}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          onClick={() => setScore(dim.id, value)}
                          className={`flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ${
                            selected
                              ? 'border-purple-600 bg-purple-600 text-white'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-purple-50'
                          }`}
                        >
                          {value}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <Card className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">Live interpretation</h3>
        {!complete && (
          <p className="mt-2 text-sm text-gray-600">Score all five dimensions to see a recommendation.</p>
        )}
        {complete && band === 'cloud' && (
          <div className="mt-3 space-y-2 text-sm text-gray-700">
            <p className="font-semibold text-sky-900">5–12 points → Cloud-first</p>
            <p>
              Your feature is likely a better fit for cloud inference. That&apos;s not a lesser choice. Cloud
              provides flexibility, centralized updates, and access to larger models that may not realistically
              fit on mobile devices.
            </p>
          </div>
        )}
        {complete && band === 'hybrid' && (
          <div className="mt-3 space-y-2 text-sm text-gray-700">
            <p className="font-semibold text-violet-900">13–19 points → Hybrid</p>
            <p>Your feature has competing requirements. This is where many production AI experiences live.</p>
            <p>A common approach is:</p>
            <ul className="list-none space-y-1 pl-0">
              <li>• Local inference for everyday interactions</li>
              <li>• Cloud inference for more complex reasoning</li>
              <li>• Graceful fallback when devices have limited capabilities</li>
              <li>• Clear user experience when switching between the two</li>
            </ul>
            <p className="font-medium">
              Hybrid is often the most honest representation of the product you&apos;re building.
            </p>
          </div>
        )}
        {complete && band === 'on-device' && (
          <div className="mt-3 space-y-2 text-sm text-gray-700">
            <p className="font-semibold text-emerald-900">20–25 points → On-device</p>
            <p>Your product requirements strongly support local inference.</p>
            <p>
              The next architectural decision isn&apos;t whether to run on-device. It&apos;s how. That&apos;s
              where choosing the right Android AI stack becomes important - and exactly what we&apos;ll cover
              in Part 3 of this series.
            </p>
          </div>
        )}
      </Card>
    </div>
  )
}
