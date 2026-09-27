'use client'
import Link from 'next/link'
import SeriesNavigation from '../../../components/SeriesNavigation'
import CodeSnippet from '../../../components/CodeSnippet'

const seriesStages = [
  {
    title: 'On-Device AI Is a Decision, Not a Trend',
    slug: 'on-device-fitness-coach/architecture-decision',
    completed: true,
  },
  {
    title: 'On-Device AI Decision Scorecard',
    slug: 'on-device-fitness-coach/decision-scorecard',
    completed: true,
  },
  {
    title: "Too Many On-Device AI Options? Here's How to Actually Choose",
    slug: 'on-device-fitness-coach/android-ai-stack',
    completed: true,
  },
  {
    title: 'A Production-Ready Architecture for On-Device AI on Android',
    slug: 'on-device-fitness-coach/production-architecture',
  },
  {
    title: 'Your AI Model Is Not Always Ready',
    slug: 'on-device-fitness-coach/ai-readiness',
  },
]

const architectureChain = `Compose UI
   ↓ observes state
FitnessCoachViewModel
   ↓ calls
GenerateFitnessInsightUseCase
   ↓ calls
FitnessInsightEngine  (interface)
   ↓ implemented by
GeminiNanoInsightEngine  (real, ML Kit GenAI Prompt API)
FakeInsightEngine        (previews, tests, emulator)`

const fitnessInsightEngineCode = `interface FitnessInsightEngine {
    suspend fun generateInsight(summary: ActivitySummary): FitnessInsightResult
    fun close()
}`

const useCaseCode = `class GenerateFitnessInsightUseCase(
    private val engine: FitnessInsightEngine
) {
    suspend operator fun invoke(rawActivitySummary: String): FitnessInsightResult {
        val summary = ActivitySummary.createOrNull(rawActivitySummary)
            ?: return FitnessInsightResult.InvalidInput

        return engine.generateInsight(summary)
    }
}`

const uiStateCode = `sealed interface FitnessCoachUiState {
    data object Idle : FitnessCoachUiState
    data object Loading : FitnessCoachUiState
    data class Insight(val text: String) : FitnessCoachUiState
    data object Unavailable : FitnessCoachUiState
    data class Error(val message: String) : FitnessCoachUiState
}`

export default function OnDeviceFitnessCoachPart4Post() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=On-Device%20Fitness%20Coach%20%234%3A%20A%20Production-Ready%20Architecture%20for%20On-Device%20AI%20on%20Android%20${encodeURIComponent(postUrl)}`
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
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Android
              </span>
              <span className="px-2 py-1 bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 text-xs font-medium rounded-md border border-violet-200">
                Series &bull; 4/5
              </span>
              <span className="text-sm text-gray-500">11 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              On-Device Fitness Coach #4: A Production-Ready Architecture for On-Device AI on Android
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Aug 4, 2026</span>
              <span className="mx-2">&bull;</span>
              <span>By Divya</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Here&apos;s a mistake I think a lot of us make on the first pass at an AI feature. The excitement of &ldquo;it works!&rdquo; takes over, and the model call ends up sitting right inside the composable, or the click handler, or wherever it&apos;s fastest to wire up. It runs, it demos great, everyone&apos;s happy.
            </p>

            <p className="text-gray-700 mb-4">
              Then three weeks later, someone needs to swap the runtime, or write a test, or add a loading state, and suddenly that one quick model call is tangled through half the UI layer.
            </p>

            <p className="text-gray-700 mb-6">
              This piece is about avoiding that, on purpose, from the start. It&apos;s also where Fitness Coach stops being a decision on paper and starts being an actual app.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Defining the Fitness Coach architecture
            </h2>

            <p className="text-gray-700 mb-4">
              Before writing anything, it helps to say the whole flow out loud, once, so every piece has a reason for existing.
            </p>

            <p className="text-gray-700 mb-4">
              A person&apos;s recent activity gets summarized into something bounded and safe. That summary goes to a use case, the one clear entry point for &ldquo;generate an insight.&rdquo; The use case calls an engine, an interface, nothing more. Something behind that interface actually talks to Gemini Nano. The result flows back up through a ViewModel, which turns it into UI state. Compose renders whatever that state says, and nothing more than that.
            </p>

            <p className="text-gray-700 mb-4">Written as a chain, it looks like this :</p>

            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto text-gray-800 whitespace-pre font-mono mb-4">
              {architectureChain}
            </pre>

            <p className="text-gray-700 mb-6">
              Every arrow only goes one direction. Nothing below the ViewModel knows Compose exists, and nothing above the interface knows Gemini Nano exists. That second part is really the whole architecture in one sentence.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Creating FitnessInsightEngine</h2>

            <p className="text-gray-700 mb-4">
              This interface is doing the real work here. It has exactly one job : take a bounded activity summary, hand back a result. That&apos;s it.
            </p>

            <CodeSnippet
              code={fitnessInsightEngineCode}
              language="kotlin"
              title="FitnessInsightEngine.kt"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-6">
              Nothing about Gemini Nano, ML Kit, or any SDK name shows up in this file, and that&apos;s deliberate. Whatever sits behind this interface today doesn&apos;t have to be what sits behind it in a year. The interface is the promise, the implementation is just whoever&apos;s currently keeping it.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Creating GenerateFitnessInsightUseCase
            </h2>

            <p className="text-gray-700 mb-4">
              It would be tempting to skip this and have the ViewModel call the engine directly. I get why, it&apos;s one less file. But this use case is where later work gets to live without ever touching the UI layer : input validation now, safety filtering and deterministic fallback later, anything else that needs to happen between &ldquo;here&apos;s a summary&rdquo; and &ldquo;here&apos;s an insight.&rdquo;
            </p>

            <p className="text-gray-700 mb-4">
              For now it does one honest thing : validate the summary into a bounded <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">ActivitySummary</code>, and hand it to the engine. Invalid input becomes state, not a thrown exception.
            </p>

            <CodeSnippet
              code={useCaseCode}
              language="kotlin"
              title="GenerateFitnessInsightUseCase.kt"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-6">
              Small, but it&apos;s the seam where the domain logic will grow, not the UI.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Defining the ViewModel and UI state
            </h2>

            <p className="text-gray-700 mb-4">
              The ViewModel&apos;s job is narrow on purpose : hold the use case, expose state, and nothing else. Compose watches a <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">StateFlow&lt;FitnessCoachUiState&gt;</code> and reacts to whatever it sees.
            </p>

            <CodeSnippet
              code={uiStateCode}
              language="kotlin"
              title="FitnessCoachUiState"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-6">
              Five states, each one mapping to something specific the UI shows. No ambiguity, no &ldquo;figure it out from a null.&rdquo; The <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">Unavailable</code> state matters more than it might look like, since Gemini Nano needs real supported hardware and can&apos;t run on an emulator, that state is genuinely the expected everyday experience while developing.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Keeping the runtime hidden from the UI
            </h2>

            <p className="text-gray-700 mb-4">
              This is the test I kept coming back to while building this. Could someone read <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">FitnessCoachScreen.kt</code> and <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">FitnessCoachViewModel.kt</code> and have any idea Gemini Nano is involved anywhere?
            </p>

            <p className="text-gray-700 mb-6">
              They can&apos;t, and that&apos;s the point. The Compose screen collects state and renders it, the ViewModel calls a use case, the use case calls an interface. If Gemini Nano&apos;s API changes shape next year, or a better on-device option shows up, the change happens in one file, <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">GeminiNanoInsightEngine</code>, and nothing above it needs to know.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The architecture diagram</h2>

            <p className="text-gray-700 mb-4">
              The diagram below shows the same flow as above, drawn out. Compose UI at the top, watching state. The ViewModel underneath it, exposing that state and nothing else. The use case below that, the one entry point. Then the interface, sitting right at the boundary, with two implementations branching off it : the real Gemini Nano engine on one side, the fake on the other.
            </p>

            <figure className="my-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/blog/fitness-coach-architecture.svg"
                alt="Fitness Coach architecture: Compose UI observes ViewModel, which calls GenerateFitnessInsightUseCase, which calls FitnessInsightEngine, implemented by GeminiNanoInsightEngine or FakeInsightEngine"
                className="w-full h-auto rounded-xl border border-gray-200 bg-white p-4"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                The ViewModel only ever talks to the interface, never to an implementation directly.
              </figcaption>
            </figure>

            <p className="text-gray-700 mb-6">
              That branch at the bottom is worth sitting with for a second. It&apos;s not a temporary scaffold, it&apos;s a real part of the architecture.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Why the fake matters as much as the real thing
            </h2>

            <p className="text-gray-700 mb-4">
              Something I didn&apos;t expect going in : the fake implementation isn&apos;t a throwaway, it&apos;s genuinely load-bearing. On-device generative AI right now needs specific, supported hardware, an emulator won&apos;t run it. So without a fake sitting behind the same interface, there&apos;s no way to preview the UI, no way to write a reliable test, no way to develop at all away from a real device.
            </p>

            <p className="text-gray-700 mb-6">
              <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">FakeInsightEngine</code> returns a deterministic, realistic-looking insight instantly. It lets the whole rest of the app get built and verified honestly, even before real inference ever runs on real hardware.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Building the starter sample app structure
            </h2>

            <p className="text-gray-700 mb-4">
              This part actually got built, not just described. The starter project has three packages doing exactly what their names say : <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">domain</code> holds the interface, the use case, and the result type, with zero Android or ML Kit imports anywhere in it. <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">data</code> holds both engine implementations, this is the only place in the whole app that imports ML Kit&apos;s GenAI Prompt API. <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">ui</code> holds the ViewModel and the Compose screen, and imports neither ML Kit nor anything from <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">data</code> beyond wiring at the edge.
            </p>

            <p className="text-gray-700 mb-6">
              There&apos;s a small unit test in there too, testing the use case against the fake, with zero device or network dependency. That test existing at all is the actual payoff of everything above it.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-4">
                The complete Android Studio starter lives in my Mobile-AI-Experiments repository under <code className="text-sm bg-white px-1.5 py-0.5 rounded">fitness-coach/</code>:
              </p>
              <a
                href="https://github.com/djain2405/Mobile-AI-Experiments/tree/main/fitness-coach"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm bg-white px-4 py-2 rounded border border-blue-300 hover:border-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View fitness-coach on GitHub →
              </a>
              <p className="text-gray-600 text-sm mt-3 mb-0">
                Repository: Mobile-AI-Experiments / fitness-coach
              </p>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              What this milestone does not solve yet
            </h2>

            <p className="text-gray-700 mb-4">
              Worth saying plainly : this pass does not handle what happens when Gemini Nano reports unavailable in any deeper way, or what a real fallback insight looks like. That belongs in a later post on confidence and fallbacks. Right now, the engine can report that it&apos;s unavailable, and the UI can show that honestly, and that&apos;s as far as this milestone goes on purpose.
            </p>

            <p className="text-gray-700 mb-6">
              Trying to solve everything in one architecture pass usually means solving nothing well. Better to build the seam now, and fill in the reliability logic once there&apos;s a real reason to.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Where this leaves things</h2>

            <p className="text-gray-700 mb-4">
              A clean architecture diagram and a starter GitHub project are attached alongside this piece. The project actually runs, on an emulator it&apos;ll show the real engine&apos;s honest &ldquo;unavailable&rdquo; path, since Gemini Nano needs real supported hardware to do anything else. When a supported device is in hand, the real engine is already sitting there, wired up and ready, nothing above it needs to change.
            </p>

            <p className="text-gray-700 mb-6 font-semibold">
              That&apos;s the whole idea, come along and build it with me, one honest layer at a time.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TL;DR</h2>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Hide Gemini Nano behind <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">FitnessInsightEngine</code>.</li>
              <li>• ViewModel → use case → interface → implementation.</li>
              <li>• Keep a real engine and a fake engine behind the same seam.</li>
              <li>• UI state should be explicit : Idle, Loading, Insight, Unavailable, Error.</li>
              <li>• Clone the starter under Mobile-AI-Experiments / fitness-coach and open it in Android Studio.</li>
            </ul>

            <SeriesNavigation
              seriesTitle="On-Device Fitness Coach"
              currentStage={4}
              totalStages={5}
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
