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
    completed: true,
  },
  {
    title: 'Your AI Model Is Not Always Ready',
    slug: 'on-device-fitness-coach/ai-readiness',
  },
]

const inferenceChain = `Compose UI
      ↓
ViewModel
      ↓
GenerateFitnessInsightUseCase
      ↓
FitnessInsightEngine
      ↓
GeminiNanoInsightEngine`

const readinessBoundary = `                       FitnessAiReadinessManager
                         │
                         │ availability
                         │ download
                         │ warm-up
                         ▼
Compose UI ← ViewModel ← AiReadinessState`

const readinessJobList = `Ask whether the capability is available
            ↓
Trigger download when needed
            ↓
Observe download progress
            ↓
Warm up the inference engine
            ↓
Expose readiness to the app
            ↓
Release resources when finished`

const modelDelivery = `Gemini Nano + ML Kit
        ↓
AICore-managed model
        ↓
checkStatus() / download()

Custom LiteRT model
        ↓
Your model artifact
        ↓
Potentially Play for On-device AI`

const lifecycleAscii = `                         ┌─────────────┐
                         │  Checking   │
                         └──────┬──────┘
                                │
      ┌───────────────┬─────────┼───────────────┬──────────────┐
      │               │         │               │              │
      ▼               ▼         ▼               ▼              ▼
DownloadRequired  Downloading  Available    Unavailable      Failed
      │          (in AICore)    │
      ▼               │         │
   Download           ▼         │
      │           Check again   │
      ▼                         │
   Warm-up ◄────────────────────┘
      │
 ┌────┴────┐
 │         │
 ▼         ▼
Ready    Failed ──► Try again
 │
 ▼
Inference
 │
 ▼
Close`

const readinessStateCode = `sealed interface AiReadinessState {
    data object Checking : AiReadinessState
    data object DownloadRequired : AiReadinessState
    data class Downloading(
        val bytesDownloaded: Long,
        val bytesToDownload: Long? = null
    ) : AiReadinessState
    data object WarmingUp : AiReadinessState
    data object Ready : AiReadinessState
    data object Unavailable : AiReadinessState
    data class Failed(
        val reason: ReadinessFailure
    ) : AiReadinessState
}`

const readinessManagerCode = `interface FitnessAiReadinessManager {
    suspend fun checkReadiness(): AiReadinessState
    fun prepare(): Flow<AiReadinessState>
    fun download(): Flow<AiReadinessState>
    fun close()
}`

const checkReadinessCode = `class GeminiNanoAiReadinessManager(
    private val model: GenerativeModel
) : FitnessAiReadinessManager {
    override suspend fun checkReadiness(): AiReadinessState {
        return try {
            when (model.checkStatus()) {
                FeatureStatus.AVAILABLE ->
                    AiReadinessState.Ready
                FeatureStatus.DOWNLOADABLE ->
                    AiReadinessState.DownloadRequired
                FeatureStatus.DOWNLOADING ->
                    AiReadinessState.Downloading(
                        bytesDownloaded = 0L
                    )
                FeatureStatus.UNAVAILABLE ->
                    AiReadinessState.Unavailable
                else ->
                    AiReadinessState.Failed(
                        ReadinessFailure.Unknown
                    )
            }
        } catch (e: GenAiException) {
            AiReadinessState.Failed(
                ReadinessFailure.StatusCheckFailed
            )
        }
    }
}`

const downloadCode = `override fun download(): Flow<AiReadinessState> = flow {
    var bytesToDownload: Long? = null
    var completed = false
    var failed = false
    model.download()
        .catch { e ->
            if (e !is GenAiException) throw e
            failed = true
        }
        .collect { status ->
            when (status) {
                is DownloadStatus.DownloadStarted -> {
                    bytesToDownload = status.bytesToDownload
                    emit(AiReadinessState.Downloading(0L, bytesToDownload))
                }
                is DownloadStatus.DownloadProgress ->
                    emit(
                        AiReadinessState.Downloading(
                            status.totalBytesDownloaded,
                            bytesToDownload
                        )
                    )
                is DownloadStatus.DownloadCompleted -> completed = true
                is DownloadStatus.DownloadFailed -> failed = true
            }
        }
    when {
        failed -> emit(AiReadinessState.Failed(ReadinessFailure.DownloadFailed))
        completed -> emitAll(warmUp())   // downloaded is not the same as loaded
        else -> emit(checkReadiness())
    }
}`

const prepareCode = `override fun prepare(): Flow<AiReadinessState> = flow {
    emit(AiReadinessState.Checking)
    when (val state = checkReadiness()) {
        AiReadinessState.Ready -> emitAll(warmUp())
        else -> emit(state)
    }
}

private fun warmUp(): Flow<AiReadinessState> = flow {
    emit(AiReadinessState.WarmingUp)
    emit(
        try {
            model.warmup()
            AiReadinessState.Ready
        } catch (e: GenAiException) {
            AiReadinessState.Failed(ReadinessFailure.WarmupFailed)
        }
    )
}`

const readinessJobCode = `readinessJob?.cancel()
readinessJob = viewModelScope.launch {
    readinessManager.prepare().collect { _readiness.value = it }
}`

const configurationCode = `data class FitnessAiConfiguration(
    val promptVersion: Int,
    val summarySchemaVersion: Int,
    val validationVersion: Int,
    @ModelReleaseStage val releaseStage: Int = ModelReleaseStage.STABLE,
    @ModelPreference val modelPreference: Int = ModelPreference.FULL
)`

const clientCode = `val model = Generation.getClient(generationConfig {
    modelConfig = modelConfig {
        releaseStage = ModelReleaseStage.STABLE
        preference = ModelPreference.FULL
    }
})`

const closeCode = `override fun close() {
    model.close()
}`

const experienceRows = [
  ['Checking', '“Preparing on-device coaching…”'],
  ['Download required', 'Explain the one-time setup and offer Download'],
  ['Downloading', 'Show progress, with a real percentage when the size is known'],
  ['Warming up', '“Almost ready…”'],
  ['Ready', 'Enable Generate insight'],
  ['Unavailable', 'Explain that on-device coaching is not available right now, and still offer a rule-based suggestion'],
  ['Failed', 'Offer a clear retry path'],
]

export default function OnDeviceFitnessCoachPart5Post() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=On-Device%20Fitness%20Coach%20%235%3A%20Your%20AI%20Model%20Is%20Not%20Always%20Ready%20${encodeURIComponent(postUrl)}`
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
                Series &bull; 5/5
              </span>
              <span className="text-sm text-gray-500">14 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              On-Device Fitness Coach #5: Your AI Model Is Not Always Ready
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Sep 27, 2026</span>
              <span className="mx-2">&bull;</span>
              <span>By Divya</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              The user opens Fitness Coach, taps Generate insight, and...
            </p>

            <p className="text-gray-700 mb-4">nothing happens.</p>

            <p className="text-gray-700 mb-4">Not because the prompt is bad.</p>

            <p className="text-gray-700 mb-4">Not because the model returned nonsense.</p>

            <p className="text-gray-700 mb-4">The model simply isn&apos;t ready yet.</p>

            <p className="text-gray-700 mb-4">
              Maybe Gemini Nano is supported on the device but still needs to be downloaded. Maybe that download is already happening. Maybe AICore is still getting itself set up. Maybe the feature isn&apos;t available on this device at all.
            </p>

            <p className="text-gray-700 mb-4">
              This is one of those parts of on-device AI that disappears beautifully in demos.
            </p>

            <p className="text-gray-700 mb-4">We spend a lot of time talking about inference.</p>

            <p className="text-gray-700 mb-6">
              But inference has a lifecycle before it ever has an answer.
            </p>

            <p className="text-gray-700 mb-4">
              In Part 4 of this series, we created a boundary around our AI runtime:
            </p>

            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto text-gray-800 whitespace-pre font-mono mb-4">
              {inferenceChain}
            </pre>

            <p className="text-gray-700 mb-4">
              Nothing above <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">FitnessInsightEngine</code> needs to know that Gemini Nano exists.
            </p>

            <p className="text-gray-700 mb-4">Great.</p>

            <p className="text-gray-700 mb-6">
              Now we need to deal with everything that happens before <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">GeminiNanoInsightEngine</code> can actually do its job.
            </p>

            <p className="text-gray-700 mb-6">
              And there is more there than I originally expected.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              &ldquo;Available on this device&rdquo; is not the same as &ldquo;ready right now&rdquo;
            </h2>

            <p className="text-gray-700 mb-4">
              With ML Kit&apos;s GenAI Prompt API, we are not packaging Gemini Nano inside the Fitness Coach APK ourselves.
            </p>

            <p className="text-gray-700 mb-4">
              Gemini Nano runs through Android&apos;s AICore system service. AICore manages the distribution of Gemini Nano and handles future updates, and lets applications access it for on-device inference.
            </p>

            <p className="text-gray-700 mb-4">
              That is lovely because I really do not want Fitness Coach becoming a model-distribution company on the side.
            </p>

            <p className="text-gray-700 mb-4">But it does not mean the app gets to assume this:</p>

            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto text-gray-800 whitespace-pre font-mono mb-6">
              {`User taps button
      ↓
Model exists
      ↓
Inference`}
            </pre>

            <p className="text-gray-700 mb-4">The Prompt API exposes four availability states:</p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• UNAVAILABLE</li>
              <li>• DOWNLOADABLE</li>
              <li>• DOWNLOADING</li>
              <li>• AVAILABLE</li>
            </ul>

            <p className="text-gray-700 mb-4">
              AVAILABLE means the required model assets are downloaded and ready to use. DOWNLOADABLE means the feature can run on the device, but the assets are not downloaded yet. DOWNLOADING means exactly what it sounds like.
            </p>

            <p className="text-gray-700 mb-4">
              UNAVAILABLE needs a little more care. It can mean the device does not support the feature. But according to Google&apos;s setup guidance, it can also mean AICore hasn&apos;t yet fetched the latest configuration after the device was set up or reset. (Devices with an unlocked bootloader are not supported either.)
            </p>

            <p className="text-gray-700 mb-4">That last nuance matters.</p>

            <p className="text-gray-700 mb-4">
              I originally had an Unsupported state in my architecture.
            </p>

            <p className="text-gray-700 mb-4">
              Looking at the actual API more closely made me change my mind.
            </p>

            <p className="text-gray-700 mb-4">
              UNAVAILABLE does not always mean &ldquo;this phone will never support this.&rdquo;
            </p>

            <p className="text-gray-700 mb-6">
              Sometimes it means &ldquo;not right now.&rdquo;
            </p>

            <p className="text-gray-700 mb-4">
              So instead of translating Google&apos;s states too aggressively, Fitness Coach gets its own product-level lifecycle.
            </p>

            <CodeSnippet
              code={readinessStateCode}
              language="kotlin"
              title="AiReadinessState"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-4">
              Google&apos;s API tells us what is happening in the runtime.
            </p>

            <p className="text-gray-700 mb-4">
              Our state tells Fitness Coach what that means for the product.
            </p>

            <p className="text-gray-700 mb-6">
              I think that distinction is important.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              I started with a ModelManager. Then I renamed it.
            </h2>

            <p className="text-gray-700 mb-4">
              The roadmap for this series originally called for a ModelManager.
            </p>

            <p className="text-gray-700 mb-4">That name made sense when I wrote it.</p>

            <p className="text-gray-700 mb-4">
              But once I started looking at what Fitness Coach actually owns, it felt slightly dishonest.
            </p>

            <p className="text-gray-700 mb-4">We are not really managing Gemini Nano.</p>

            <p className="text-gray-700 mb-4">AICore is.</p>

            <p className="text-gray-700 mb-4">Our application needs to manage readiness.</p>

            <p className="text-gray-700 mb-4">So I would rather call this:</p>

            <CodeSnippet
              code={readinessManagerCode}
              language="kotlin"
              title="FitnessAiReadinessManager"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-6">
              Just like <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">FitnessInsightEngine</code>, it is an interface with no SDK names in it. Fitness Coach has a Gemini Nano implementation, plus fake and unavailable versions so the whole lifecycle can be seen on an emulator and tested on the JVM.
            </p>

            <p className="text-gray-700 mb-4">Its job is narrow:</p>

            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto text-gray-800 whitespace-pre font-mono mb-6">
              {readinessJobList}
            </pre>

            <p className="text-gray-700 mb-6">
              And importantly, it does not generate fitness insights.
            </p>

            <p className="text-gray-700 mb-4">
              That remains the responsibility of <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">FitnessInsightEngine</code>.
            </p>

            <p className="text-gray-700 mb-4">
              So our architecture has now gained another small boundary:
            </p>

            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto text-gray-800 whitespace-pre font-mono mb-4">
              {readinessBoundary}
            </pre>

            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto text-gray-800 whitespace-pre font-mono mb-6">
              {inferenceChain}
            </pre>

            <p className="text-gray-700 mb-4">
              <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">FitnessInsightEngine</code> owns inference.
            </p>

            <p className="text-gray-700 mb-4">
              <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">FitnessAiReadinessManager</code> owns readiness.
            </p>

            <p className="text-gray-700 mb-6">
              Two different problems. Two different responsibilities.
            </p>

            <p className="text-gray-700 mb-6">
              One detail matters here: in Gemini mode, both implementations share a single <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">GenerativeModel</code>. The client we check and warm up is the same client that runs inference.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Checking availability before showing the feature
            </h2>

            <p className="text-gray-700 mb-4">
              Google&apos;s current guidance is to call <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">checkStatus()</code> before showing any related UI. That avoids dropping someone into a feature that cannot actually run yet.
            </p>

            <p className="text-gray-700 mb-4">At its simplest:</p>

            <CodeSnippet
              code={checkReadinessCode}
              language="kotlin"
              title="GeminiNanoAiReadinessManager.kt"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-4">This looks almost boring.</p>

            <p className="text-gray-700 mb-6">I like boring here.</p>

            <p className="text-gray-700 mb-6">
              One small thing about DOWNLOADING: it means a download is already in progress, possibly one AICore started on its own. The official docs don&apos;t describe a way to attach to that download and follow its progress. So Fitness Coach shows that coaching is being prepared and lets the user check again, rather than pretending to know the percentage.
            </p>

            <p className="text-gray-700 mb-4">
              The interesting part is what the application does with each state.
            </p>

            <p className="text-gray-700 mb-4">
              If Fitness Coach sees Ready, the Generate insight action can be enabled.
            </p>

            <p className="text-gray-700 mb-4">
              If it sees DownloadRequired, there is a real product decision to make.
            </p>

            <p className="text-gray-700 mb-4">
              If it sees Unavailable, pretending that the feature exists anyway helps nobody.
            </p>

            <p className="text-gray-700 mb-6">
              Lifecycle state is useful only when the product actually responds to it.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Downloading is part of the experience too
            </h2>

            <p className="text-gray-700 mb-4">
              When <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">checkStatus()</code> returns DOWNLOADABLE, the Prompt API exposes <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">download()</code>, which returns a <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">Flow&lt;DownloadStatus&gt;</code>.
            </p>

            <p className="text-gray-700 mb-4">
              That flow can report when the download starts, its progress, when it completes, or when it fails. The start event also tells us how many bytes need to be downloaded, so we keep it and show a real progress bar.
            </p>

            <p className="text-gray-700 mb-4">
              Our manager translates that flow into application state too:
            </p>

            <CodeSnippet
              code={downloadCode}
              language="kotlin"
              title="download()"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-4">Notice what happens when the download completes.</p>

            <p className="text-gray-700 mb-4">It does not jump straight to Ready.</p>

            <p className="text-gray-700 mb-6">We&apos;ll get to why in a second.</p>

            <p className="text-gray-700 mb-4">But first, I want to step away from code.</p>

            <p className="text-gray-700 mb-4">
              Because the API returning download progress is not the interesting part.
            </p>

            <p className="text-gray-700 mb-4">The interesting part is this:</p>

            <p className="text-gray-700 mb-6">What does the person using the app see?</p>

            <p className="text-gray-700 mb-4">
              &ldquo;AI unavailable&rdquo; is technically true when something has not been downloaded.
            </p>

            <p className="text-gray-700 mb-6">It is also a pretty bad explanation.</p>

            <p className="text-gray-700 mb-4">Fitness Coach can say something clearer:</p>

            <p className="text-gray-700 mb-4">
              On-device coaching needs a one-time download before it can run.
            </p>

            <p className="text-gray-700 mb-4">While it downloads:</p>

            <p className="text-gray-700 mb-4">Getting on-device coaching ready...</p>

            <p className="text-gray-700 mb-4">If it fails:</p>

            <p className="text-gray-700 mb-6">
              We couldn&apos;t finish setting up on-device coaching. Try again.
            </p>

            <p className="text-gray-700 mb-4">
              The implementation state might be DownloadFailed.
            </p>

            <p className="text-gray-700 mb-6">
              The human experience does not need to sound like an exception log.
            </p>

            <p className="text-gray-700 mb-6">
              That translation from technical state to useful product behavior is exactly why I do not want the SDK state leaking directly into Compose.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Downloaded still does not mean fast
            </h2>

            <p className="text-gray-700 mb-4">Now imagine the model assets are there.</p>

            <p className="text-gray-700 mb-4">
              <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">checkStatus()</code> says AVAILABLE.
            </p>

            <p className="text-gray-700 mb-4">We are done, right?</p>

            <p className="text-gray-700 mb-6">Almost.</p>

            <p className="text-gray-700 mb-4">
              The first inference can still take longer because the runtime needs to load Gemini Nano into memory and initialize its components.
            </p>

            <p className="text-gray-700 mb-4">
              The Prompt API exposes an optional suspending <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">warmup()</code> function for exactly this. Google recommends calling it well before the first inference to reduce the latency of that first call.
            </p>

            <p className="text-gray-700 mb-4">
              That&apos;s why <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">download()</code> above hands over to warm-up instead of emitting Ready. And it&apos;s why preparation emits progress, not just a final answer:
            </p>

            <CodeSnippet
              code={prepareCode}
              language="kotlin"
              title="prepare() and warmUp()"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-6">
              Returning a Flow here is deliberate. If <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">prepare()</code> only returned a final state, the UI could never show &ldquo;Almost ready...&rdquo; while warm-up is running. It would just go from nothing to done.
            </p>

            <p className="text-gray-700 mb-6">
              It also keeps failures honest. A failed status check is reported as StatusCheckFailed, a failed download as DownloadFailed, and a failed warm-up as WarmupFailed. They are different problems, so they are different states.
            </p>

            <p className="text-gray-700 mb-6">
              For this particular product, I start preparing when the user enters the coaching experience rather than waiting until they tap Generate insight.
            </p>

            <p className="text-gray-700 mb-4">
              That gives us a chance to prepare before they ask for the result.
            </p>

            <p className="text-gray-700 mb-6">
              But I would not turn that into &ldquo;warm everything as early as possible.&rdquo;
            </p>

            <p className="text-gray-700 mb-4">Warm-up costs resources too.</p>

            <p className="text-gray-700 mb-6">
              It is an optimization tied to a real interaction, not an excuse to eagerly initialize AI across the whole app.
            </p>

            <p className="text-gray-700 mb-6">
              Part 6 of this series will get much deeper into that performance tradeoff.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Coroutines or WorkManager?
            </h2>

            <p className="text-gray-700 mb-4">
              This was one of the questions in my original roadmap because &ldquo;background work&rdquo; has a habit of becoming a slightly overloaded phrase in Android.
            </p>

            <p className="text-gray-700 mb-4">Something runs asynchronously?</p>

            <p className="text-gray-700 mb-4">WorkManager!</p>

            <p className="text-gray-700 mb-6">Except... no.</p>

            <p className="text-gray-700 mb-6">
              Android&apos;s guidance makes an important distinction. Coroutines are the normal tool for asynchronous work that only matters while the app is in a valid lifecycle state. <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">viewModelScope</code>, for example, automatically cancels its coroutines when that ViewModel is cleared. WorkManager is designed for reliable work that needs to keep going even after the user leaves the app.
            </p>

            <p className="text-gray-700 mb-4">
              For Fitness Coach, that gives us a pretty simple split.
            </p>

            <p className="text-gray-700 mb-4">
              Availability checks, interactive download state, warm-up, and inference belong in ordinary coroutine-based application flows.
            </p>

            <CodeSnippet
              code={readinessJobCode}
              language="kotlin"
              title="FitnessCoachViewModel"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-6">
              Keeping a single <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">readinessJob</code> also means repeated taps can&apos;t start two downloads side by side.
            </p>

            <p className="text-gray-700 mb-6">
              I do not need to wrap <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">warmup()</code> in WorkManager just because it happens away from the main thread.
            </p>

            <p className="text-gray-700 mb-6">
              And I do not need to build a second model-download scheduler on top of ML Kit simply because downloading sounds like background work. The Prompt API already exposes the model download flow through AICore.
            </p>

            <p className="text-gray-700 mb-6">
              WorkManager becomes useful when the work itself needs persistence beyond the current interaction.
            </p>

            <p className="text-gray-700 mb-6">
              Durable analytics uploads, periodic synchronization, or other tasks that still need to happen after the screen disappears are a much better fit. Android describes WorkManager as the best option for most tasks that need to continue even if the user leaves the app. It is not a general solution for every asynchronous operation.
            </p>

            <p className="text-gray-700 mb-4">This distinction seems small.</p>

            <p className="text-gray-700 mb-6">
              It is also the difference between using Android&apos;s lifecycle tools intentionally and simply reaching for whichever API has &ldquo;work&rdquo; in the name.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              A quick detour: who actually delivers the model?
            </h2>

            <p className="text-gray-700 mb-4">
              There is another subtle distinction worth making, because &ldquo;on-device AI model delivery&rdquo; means very different things depending on the runtime.
            </p>

            <p className="text-gray-700 mb-4">Fitness Coach currently uses Gemini Nano through ML Kit.</p>

            <p className="text-gray-700 mb-4">The app does not package the Gemini Nano model itself.</p>

            <p className="text-gray-700 mb-6">
              AICore manages the underlying foundation model. Our application reacts to the capability status, and can proactively request the required assets when the Prompt API reports them as downloadable.
            </p>

            <p className="text-gray-700 mb-6">
              If we eventually moved Fitness Coach to our own LiteRT model, this becomes a different problem entirely.
            </p>

            <p className="text-gray-700 mb-6">
              Google Play now has Play for On-device AI, currently in beta, for distributing custom ML models through AI packs. Those can use install-time, fast-follow, or on-demand delivery.
            </p>

            <p className="text-gray-700 mb-4">So:</p>

            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto text-gray-800 whitespace-pre font-mono mb-6">
              {modelDelivery}
            </pre>

            <p className="text-gray-700 mb-4">Same general idea of &ldquo;the model needs to arrive.&rdquo;</p>

            <p className="text-gray-700 mb-6">Very different ownership.</p>

            <p className="text-gray-700 mb-6">
              And this is another reason I like keeping Fitness Coach behind the <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">FitnessInsightEngine</code> and <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">FitnessAiReadinessManager</code> interfaces.
            </p>

            <p className="text-gray-700 mb-6">
              Changing the runtime can change the entire delivery strategy without changing what Compose thinks an insight is.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Version the pieces you actually own
            </h2>

            <p className="text-gray-700 mb-4">
              Versioning gets slightly weird in an AICore world.
            </p>

            <p className="text-gray-700 mb-4">
              Traditionally, if I shipped a model inside the app, I could point to:
            </p>

            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto text-gray-800 whitespace-pre font-mono mb-4">
              fitness_model_v4.tflite
            </pre>

            <p className="text-gray-700 mb-4">Nice and obvious.</p>

            <p className="text-gray-700 mb-6">Gemini Nano is system managed.</p>

            <p className="text-gray-700 mb-6">
              The Prompt API now supports model configuration through two concepts: release stage and preference. STABLE is the default release stage and the one Google recommends for production. PREVIEW exposes newer model versions where available. The preference can favor FULL capabilities or FAST inference. Not every combination is supported on every device, so availability still needs to be checked after the client is created.
            </p>

            <p className="text-gray-700 mb-4">
              That means I track the parts of Fitness Coach that we control:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• App version</li>
              <li>• ML Kit dependency version (currently <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">com.google.mlkit:genai-prompt:1.0.0-beta4</code>)</li>
              <li>• Prompt version</li>
              <li>• ActivitySummary schema version</li>
              <li>• Output validation version</li>
              <li>• Model release stage</li>
              <li>• Model preference</li>
            </ul>

            <p className="text-gray-700 mb-6">
              I would not pretend Fitness Coach owns the Gemini Nano binary when it does not.
            </p>

            <p className="text-gray-700 mb-4">The internal configuration is small:</p>

            <CodeSnippet
              code={configurationCode}
              language="kotlin"
              title="FitnessAiConfiguration"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-4">And it&apos;s what the client is actually created with:</p>

            <CodeSnippet
              code={clientCode}
              language="kotlin"
              title="Generation.getClient"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-6">
              Once readiness reaches Ready, Fitness Coach logs this configuration alongside <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">getBaseModelName()</code>.
            </p>

            <p className="text-gray-700 mb-4">Why bother?</p>

            <p className="text-gray-700 mb-6">
              Because when output behavior changes six months from now, &ldquo;the AI got weird&rdquo; is not a useful debugging strategy.
            </p>

            <p className="text-gray-700 mb-6">
              Knowing that app version 3.4 used prompt version 7 with a stable/full configuration gives us something concrete to investigate.
            </p>

            <p className="text-gray-700 mb-6">
              The Prompt API itself is currently in beta and is not covered by an SLA or deprecation policy, so isolating and tracking this integration is especially useful while the API continues to evolve.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              DataStore can remember context. It cannot decide readiness.
            </h2>

            <p className="text-gray-700 mb-4">I also considered persisting some of this state.</p>

            <p className="text-gray-700 mb-6">
              DataStore is a good fit for small persisted application settings and metadata. It stores key-value pairs or typed objects, and it is built on Kotlin coroutines and Flow.
            </p>

            <p className="text-gray-700 mb-4">So Fitness Coach might remember things like:</p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Coaching enabled by the user</li>
              <li>• Last successful preparation time</li>
              <li>• Selected AI mode</li>
              <li>• Prompt/configuration version</li>
            </ul>

            <p className="text-gray-700 mb-4">What I would not persist and trust forever is:</p>

            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto text-gray-800 whitespace-pre font-mono mb-6">
              modelReady = true
            </pre>

            <p className="text-gray-700 mb-4">Because the runtime has its own reality.</p>

            <p className="text-gray-700 mb-4">The device can change.</p>

            <p className="text-gray-700 mb-4">AICore can change.</p>

            <p className="text-gray-700 mb-4">Configuration can change.</p>

            <p className="text-gray-700 mb-6">Our requested model configuration can change.</p>

            <p className="text-gray-700 mb-4">The source of truth for right now remains:</p>

            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto text-gray-800 whitespace-pre font-mono mb-6">
              model.checkStatus()
            </pre>

            <p className="text-gray-700 mb-4">Persisted state gives us context.</p>

            <p className="text-gray-700 mb-6">It does not overrule the runtime.</p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Cleanup is part of lifecycle too
            </h2>

            <p className="text-gray-700 mb-6">
              There is one last lifecycle state that is much less exciting than inference but still real.
            </p>

            <p className="text-gray-700 mb-6">Done.</p>

            <p className="text-gray-700 mb-6">
              <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">GenerativeModel</code> exposes <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">close()</code> to release the resources behind the content-generation engine once it is no longer needed. The API documents it as safe to call multiple times.
            </p>

            <p className="text-gray-700 mb-4">
              So whatever owns the lifecycle of the <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">GenerativeModel</code> also needs a cleanup path:
            </p>

            <CodeSnippet
              code={closeCode}
              language="kotlin"
              title="close()"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-6">
              In Fitness Coach, the ViewModel&apos;s <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">onCleared()</code> closes both the readiness manager and the engine. They share one client, and that&apos;s fine, precisely because <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">close()</code> is safe to call more than once.
            </p>

            <p className="text-gray-700 mb-4">Lifecycle does not end at Ready.</p>

            <p className="text-gray-700 mb-6">
              That one is easy to forget because no demo has ever received applause for closing resources correctly.
            </p>

            <p className="text-gray-700 mb-6">Still matters.</p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Putting the whole lifecycle together
            </h2>

            <p className="text-gray-700 mb-4">
              At this point, the Fitness Coach path looks more like this:
            </p>

            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto text-gray-800 whitespace-pre font-mono mb-4">
              {lifecycleAscii}
            </pre>

            <p className="text-gray-700 mb-4">
              Failed can come from any step (the status check, the download, or the warm-up), and every one of them offers a way to try again.
            </p>

            <p className="text-gray-700 mb-4">
              Drawn out, that same path looks like this:
            </p>

            <figure className="my-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/blog/fitness-coach-ai-lifecycle.svg"
                alt="Fitness Coach AI readiness lifecycle: Checking branches to download required, downloading, available, unavailable, or failed. Download and available both lead to warm-up, then ready or failed. Ready continues to inference and close. Failed offers try again."
                className="w-full h-auto rounded-xl border border-gray-200 bg-white p-4"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                Every state has a product consequence. Failed can be tried again from the status check, the download, or the warm-up.
              </figcaption>
            </figure>

            <p className="text-gray-700 mb-6">
              And the thing I want to emphasize is not really the number of states.
            </p>

            <p className="text-gray-700 mb-6">It is this:</p>

            <p className="text-gray-700 mb-6 font-semibold">
              Every state has a product consequence.
            </p>

            <p className="text-gray-700 mb-4">
              Fitness Coach can translate them into experiences a person actually understands:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Runtime situation</th>
                    <th className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Fitness Coach experience</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {experienceRows.map(([situation, experience]) => (
                    <tr key={situation} className="border-b border-gray-100 last:border-b-0">
                      <td className="px-4 py-3 font-medium text-gray-900 align-top whitespace-nowrap">{situation}</td>
                      <td className="px-4 py-3">{experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-6">
              That is much nicer than letting someone tap a button and discover the lifecycle through an exception.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-4">
                If you want to see all of this without a Gemini Nano device, the sample app has a Fake (needs download) debug mode. It walks through download, warm-up, and ready on any emulator. The complete Android Studio project lives in my Mobile-AI-Experiments repository under <code className="text-sm bg-white px-1.5 py-0.5 rounded">fitness-coach/</code>:
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
              What this milestone still does not solve
            </h2>

            <p className="text-gray-700 mb-4">We can now get Fitness Coach from:</p>

            <p className="text-gray-700 mb-4">Maybe this feature works here?</p>

            <p className="text-gray-700 mb-4">to:</p>

            <p className="text-gray-700 mb-4">The runtime is ready for inference.</p>

            <p className="text-gray-700 mb-6">That is progress.</p>

            <p className="text-gray-700 mb-4">
              It still leaves some very real questions unanswered.
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• How quickly does the first insight appear?</li>
              <li>• What happens if the user asks for another insight while one is already running?</li>
              <li>• What happens if the activity summary changes halfway through inference?</li>
              <li>• How much memory are we using?</li>
              <li>• What does this feel like on a slower supported device?</li>
            </ul>

            <p className="text-gray-700 mb-4">Those are performance problems.</p>

            <p className="text-gray-700 mb-6">
              They deserve their own decisions rather than being stuffed into a lifecycle manager because it was convenient.
            </p>

            <p className="text-gray-700 mb-6">
              So Part 6 will focus on responsiveness, cancellation, concurrency, and measuring actual inference performance.
            </p>

            <p className="text-gray-700 mb-4">After that, Part 7 gets into the even messier question:</p>

            <p className="text-gray-700 mb-6">
              What happens when the model runs perfectly... and the answer is still not good enough to show?
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Where this leaves us</h2>

            <p className="text-gray-700 mb-4">
              When I started thinking about this part of the series, I called it &ldquo;model management.&rdquo;
            </p>

            <p className="text-gray-700 mb-6">
              After building through it, I think the lesson is simpler.
            </p>

            <p className="text-gray-700 mb-6">
              The model being on the device does not mean the model is ready.
            </p>

            <p className="text-gray-700 mb-4">
              There is a whole journey between those two things.
            </p>

            <p className="text-gray-700 mb-4">Availability.</p>
            <p className="text-gray-700 mb-4">Download.</p>
            <p className="text-gray-700 mb-4">Initialization.</p>
            <p className="text-gray-700 mb-4">Warm-up.</p>
            <p className="text-gray-700 mb-4">Failure.</p>
            <p className="text-gray-700 mb-4">Readiness.</p>
            <p className="text-gray-700 mb-6">Cleanup.</p>

            <p className="text-gray-700 mb-6">
              Once those transitions become normal application state instead of hidden SDK behavior, the architecture gets a lot easier to reason about.
            </p>

            <p className="text-gray-700 mb-4">The model can take its time getting ready.</p>

            <p className="text-gray-700 mb-6 font-semibold">
              The product just needs to know what to do while it does.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TL;DR</h2>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• AVAILABLE is not the same as ready. Fitness Coach has its own <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">AiReadinessState</code>.</li>
              <li>• <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">FitnessAiReadinessManager</code> owns readiness. <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">FitnessInsightEngine</code> owns inference.</li>
              <li>• Download completion hands off to warm-up. Warm-up is what emits Ready.</li>
              <li>• Use coroutines for checks, download, warm-up, and inference. Save WorkManager for work that must outlive the screen.</li>
              <li>• Do not persist <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">modelReady = true</code>. Ask <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">checkStatus()</code>.</li>
              <li>• Close the shared <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">GenerativeModel</code> when the ViewModel is cleared.</li>
            </ul>

            <SeriesNavigation
              seriesTitle="On-Device Fitness Coach"
              currentStage={5}
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
