'use client'
import Link from 'next/link'
import SeriesNavigation from '../../../components/SeriesNavigation'
import ScorecardTool from './ScorecardTool'

const seriesStages = [
  {
    title: 'On-Device AI Is a Decision, Not a Trend',
    slug: 'on-device-fitness-coach/architecture-decision',
    completed: true,
  },
  {
    title: 'On-Device AI Decision Scorecard',
    slug: 'on-device-fitness-coach/decision-scorecard',
  },
  {
    title: "Too Many On-Device AI Options? Here's How to Actually Choose",
    slug: 'on-device-fitness-coach/android-ai-stack',
  },
  {
    title: 'Building Fitness Coach with Compose and FitnessInsightEngine',
    slug: 'on-device-fitness-coach/production-architecture',
    comingSoon: true,
  },
]

export default function OnDeviceFitnessCoachPart2Post() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=On-Device%20Fitness%20Coach%20%232%3A%20On-Device%20AI%20Decision%20Scorecard%20${encodeURIComponent(postUrl)}`
    window.open(linkedInUrl, '_blank', 'width=600,height=400')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <Link href="/blog" className="text-2xl font-bold text-gray-900">Mobile With Me</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/blog/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/blog/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                On-Device AI
              </span>
              <span className="px-2 py-1 bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 text-xs font-medium rounded-md border border-violet-200">
                Series &bull; 2/4
              </span>
              <span className="text-sm text-gray-500">9 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              On-Device Fitness Coach #2: On-Device AI Decision Scorecard
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Jul 28, 2026</span>
              <span className="mx-2">&bull;</span>
              <span>By Divya</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              A practical framework for deciding whether an AI feature belongs on-device, in the cloud, or
              somewhere in between.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How to use this scorecard</h2>

            <p className="text-gray-700 mb-4">
              Before evaluating models, SDKs, or runtimes, evaluate the feature itself. Score each dimension
              from 1–5 based on your specific use case :
            </p>

            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• <strong>1–2:</strong> Strongly favors cloud inference</li>
              <li>• <strong>3:</strong> Either approach could work</li>
              <li>• <strong>4–5:</strong> Strongly favors on-device inference</li>
            </ul>

            <p className="text-gray-700 mb-6">
              There isn&apos;t a &ldquo;correct&rdquo; score. The goal is to make architectural trade-offs explicit
              before choosing a technology.
            </p>

            <ScorecardTool />

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Interpreting Your Results</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5–12 points → Cloud-first</h3>
            <p className="text-gray-700 mb-4">
              Your feature is likely a better fit for cloud inference. That&apos;s not a lesser choice. Cloud
              provides flexibility, centralized updates, and access to larger models that may not realistically
              fit on mobile devices.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13–19 points → Hybrid</h3>
            <p className="text-gray-700 mb-4">
              Your feature has competing requirements. This is where many production AI experiences live.
            </p>
            <p className="text-gray-700 mb-4">A common approach is :</p>
            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• Local inference for everyday interactions</li>
              <li>• Cloud inference for more complex reasoning</li>
              <li>• Graceful fallback when devices have limited capabilities</li>
              <li>• Clear user experience when switching between the two</li>
            </ul>
            <p className="text-gray-700 mb-6 font-semibold">
              Hybrid is often the most honest representation of the product you&apos;re building.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">20–25 points → On-device</h3>
            <p className="text-gray-700 mb-4">Your product requirements strongly support local inference.</p>
            <p className="text-gray-700 mb-6">
              The next architectural decision isn&apos;t whether to run on-device. It&apos;s how. That&apos;s
              where choosing the right Android AI stack becomes important - and exactly what we&apos;ll cover in
              Part 3 of this series.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Before You Build</h2>

            <p className="text-gray-700 mb-6">
              Before writing a single line of AI code, answer these three questions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Define the user promise</h3>
            <p className="text-gray-700 mb-4">Complete this sentence :</p>
            <p className="text-gray-700 mb-4 font-medium">
              For (user), given (input), the app generates (insight) so they can (benefit).
            </p>
            <p className="text-gray-700 mb-2">Example :</p>
            <p className="text-gray-700 mb-4 italic">
              For runners, given the last two weeks of workouts, the app identifies consistency patterns so they
              can build more sustainable exercise habits.
            </p>
            <p className="text-gray-700 mb-6">
              If you can&apos;t clearly describe the user promise, the feature probably isn&apos;t well-defined yet.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Define what stays local</h3>
            <p className="text-gray-700 mb-4">
              List every piece of data that should never leave the user&apos;s device. Examples :
            </p>
            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• Workout history</li>
              <li>• Heart rate</li>
              <li>• Sleep data</li>
              <li>• Photos</li>
              <li>• Voice recordings</li>
              <li>• Location history</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Being intentional about what stays local is one of the simplest ways to build user trust.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Define the boundaries</h3>
            <p className="text-gray-700 mb-4">Complete this sentence :</p>
            <p className="text-gray-700 mb-4 font-medium">This feature will never...</p>
            <p className="text-gray-700 mb-2">Examples :</p>
            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• Diagnose illness</li>
              <li>• Replace professional advice</li>
              <li>• Present uncertain output as fact</li>
              <li>• Collect unnecessary personal data</li>
              <li>• Hide when cloud inference is being used</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Good AI products aren&apos;t defined only by what they can do. They&apos;re also defined by what
              they intentionally choose not to do.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">One Last Thought</h2>

            <p className="text-gray-700 mb-4">
              Architecture decisions shape everything that follows. Choosing a model or SDK is important, but
              it&apos;s a second-order decision.
            </p>
            <p className="text-gray-700 mb-6 font-semibold">
              First, decide where the intelligence belongs. Only then decide how you&apos;ll build it.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What&apos;s Next?</h2>

            <p className="text-gray-700 mb-6">
              In Part 3, we&apos;ll assume you&apos;ve already made that decision. Now comes the next question
              every Android developer eventually asks : ML Kit? MediaPipe? LiteRT? Gemini Nano? We&apos;ll compare
              each option, understand where it fits, and build another practical decision framework to help you
              choose the right Android AI stack - not just the newest one.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TL;DR</h2>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Score Privacy, Latency, Availability, Cost at Scale, and Engineering Complexity from 1–5.</li>
              <li>• Use the live scorecard above; totals of 5–12, 13–19, and 20–25 map to cloud, hybrid, and on-device.</li>
              <li>• Define user promise, local-only data, and boundaries before writing AI code.</li>
              <li>• Part 3 : choosing the Android AI stack (ML Kit, MediaPipe, LiteRT, Gemini Nano).</li>
            </ul>

            <SeriesNavigation
              seriesTitle="On-Device Fitness Coach"
              currentStage={2}
              totalStages={4}
              stages={seriesStages}
            />
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Share this post:</span>
                <button onClick={handleLinkedInShare} className="text-blue-600 hover:text-blue-700 transition-colors">
                  LinkedIn
                </button>
              </div>
              <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
                &larr; Back to all posts
              </Link>
            </div>
          </footer>
        </article>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-semibold">Mobile With Me</span>
          </div>
          <p className="text-gray-400 mb-6">
            Bite-sized mobile development tips, delivered fresh every week.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/blog/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
