'use client'
import Link from 'next/link'
import { Download } from 'lucide-react'
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

const fitnessInsightEngineCode = `interface FitnessInsightEngine {
    suspend fun generateInsight(
        summary: ActivitySummary
    ): FitnessInsight
}`

const implementationTree = `FitnessInsightEngine
        |
        ├── GeminiNanoFitnessInsightEngine
        ├── LiteRtFitnessInsightEngine
        ├── CloudFitnessInsightEngine
        └── RuleBasedFitnessInsightEngine`

export default function OnDeviceFitnessCoachPart3Post() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=On-Device%20Fitness%20Coach%20%233%3A%20Too%20Many%20On-Device%20AI%20Options%3F%20Here%E2%80%99s%20How%20to%20Actually%20Choose%20${encodeURIComponent(postUrl)}`
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
                Series &bull; 3/5
              </span>
              <span className="text-sm text-gray-500">12 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              On-Device Fitness Coach #3: Too Many On-Device AI Options? Here&apos;s How to Actually Choose
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Jul 29, 2026</span>
              <span className="mx-2">&bull;</span>
              <span>By Divya</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Open the Android AI docs for the first time and... it is a lot.
            </p>

            <p className="text-gray-700 mb-4">
              ML Kit. MediaPipe. LiteRT. LiteRT-LM. Gemini Nano. Plus whatever new name appears at the next Google I/O.
            </p>

            <p className="text-gray-700 mb-4">
              It is easy to freeze up. Or worse, pick whichever option had the flashiest demo and try to make the use case fit later.
            </p>

            <p className="text-gray-700 mb-4">I would rather flip that order.</p>

            <p className="text-gray-700 mb-6 font-semibold">
              Start with the task. Then let the task point you toward the technology.
            </p>

            <p className="text-gray-700 mb-6">
              None of these options is universally better. They live at different layers, solve different kinds of problems, and give developers very different levels of control. So before comparing them, there is one important distinction to clear up.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              First, ML Kit and Gemini Nano Are Not Competing Options
            </h2>

            <p className="text-gray-700 mb-4">ML Kit now covers two broad categories.</p>

            <p className="text-gray-700 mb-4">
              The first is its familiar set of task-specific APIs for problems such as text recognition, barcode scanning, face detection, language identification, and object detection.
            </p>

            <p className="text-gray-700 mb-4">
              The second is its GenAI APIs, which use Gemini Nano through Android&apos;s AICore service for on-device generative tasks such as summarization, rewriting, proofreading, image description, and custom prompting.
            </p>

            <p className="text-gray-700 mb-4">So the real comparison is not quite :</p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-4 rounded-r-lg">
              <p className="text-gray-800 italic mb-0">ML Kit vs. Gemini Nano</p>
            </div>

            <p className="text-gray-700 mb-4">It is closer to :</p>

            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
              <li>ML Kit task-specific APIs</li>
              <li>ML Kit GenAI APIs, powered by Gemini Nano</li>
              <li>MediaPipe Tasks</li>
              <li>LiteRT or LiteRT-LM</li>
            </ol>

            <p className="text-gray-700 mb-6">
              Small distinction. Big difference when making an architecture decision.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Four Paths, in Plain Terms</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. ML Kit Task-Specific APIs</h3>

            <p className="text-gray-700 mb-4">
              ML Kit is often the easiest place to begin when the problem is already common and clearly defined.
            </p>

            <p className="text-gray-700 mb-2">Think :</p>
            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• Scanning a barcode</li>
              <li>• Recognizing text in an image</li>
              <li>• Detecting a face</li>
              <li>• Identifying a language</li>
              <li>• Translating text</li>
            </ul>

            <p className="text-gray-700 mb-4">
              These APIs give you a higher-level interface, so you can focus more on the product experience and less on managing the model itself. This is a good fit when your task already has a supported API and you do not need deep control over the underlying model.
            </p>

            <p className="text-gray-700 mb-6">
              The tradeoff is that you are working within the task and output shapes the API provides.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. ML Kit GenAI APIs, Powered by Gemini Nano</h3>

            <p className="text-gray-700 mb-4">
              ML Kit&apos;s GenAI APIs are the higher-level path for supported on-device generative experiences.
            </p>

            <p className="text-gray-700 mb-4">
              The Prompt API can take text, or a combination of text and image input, and return text or structured output. Other GenAI APIs cover more specific tasks such as summarization, rewriting, proofreading, and image description.
            </p>

            <p className="text-gray-700 mb-2">This path fits use cases such as :</p>
            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• Summarizing a bounded piece of text</li>
              <li>• Rewriting a short message</li>
              <li>• Producing a brief natural-language insight</li>
              <li>• Generating structured output from a controlled prompt</li>
              <li>• Describing an image on-device</li>
            </ul>

            <p className="text-gray-700 mb-4">
              It lets you use Gemini Nano without selecting, packaging, optimizing, and shipping your own language model.
            </p>

            <p className="text-gray-700 mb-4">That simplicity comes with boundaries.</p>

            <p className="text-gray-700 mb-6">
              The Prompt API is currently in beta, availability depends on the device, and an app has to handle states such as available, downloadable, downloading, and unavailable. The APIs rely on AICore, and developers still need to validate latency, quality, supported devices, and fallback behavior for their own feature.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. MediaPipe Tasks</h3>

            <p className="text-gray-700 mb-4">
              MediaPipe Tasks is especially useful for customizable vision, audio, gesture, and real-time media pipelines.
            </p>

            <p className="text-gray-700 mb-2">Think :</p>
            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• Pose detection</li>
              <li>• Hand tracking</li>
              <li>• Image segmentation</li>
              <li>• Gesture recognition</li>
              <li>• Audio classification</li>
              <li>• Processing live camera frames</li>
            </ul>

            <p className="text-gray-700 mb-4">
              MediaPipe provides cross-platform task APIs, ready-to-run models, and room to configure or customize the pipeline for your application. For example, a workout app that analyzes a user&apos;s exercise form through the camera might use MediaPipe Pose Landmarker to detect body landmarks from images or live video.
            </p>

            <p className="text-gray-700 mb-4">
              MediaPipe has also offered an LLM Inference API, but that API is now in maintenance-only mode. Google recommends LiteRT-LM for new on-device LLM deployments.
            </p>

            <p className="text-gray-700 mb-6">
              So for a new generative text feature, MediaPipe would not be my starting point.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. LiteRT and LiteRT-LM</h3>

            <p className="text-gray-700 mb-4">
              LiteRT is Google&apos;s lower-level on-device runtime for deploying custom machine-learning and generative-AI models. This is the path for deeper control.
            </p>

            <p className="text-gray-700 mb-2">You might use LiteRT when :</p>
            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• No higher-level API covers the task</li>
              <li>• You already have a custom model</li>
              <li>• You need control over model inputs and outputs</li>
              <li>• You need to optimize for specific device hardware</li>
              <li>• You want ownership of model delivery and versioning</li>
              <li>• You need a model architecture tailored to your product</li>
            </ul>

            <p className="text-gray-700 mb-4">
              LiteRT does not mean you have to train a model from scratch. You can use, convert, or optimize an existing compatible model. What changes is how much of the model and runtime lifecycle your team owns.
            </p>

            <p className="text-gray-700 mb-4">
              For language models specifically, LiteRT-LM is the production-oriented orchestration layer built for running LLM pipelines with LiteRT across supported platforms and hardware.
            </p>

            <p className="text-gray-700 mb-2">
              This gives you flexibility, but flexibility has a price. Your team now owns more of the work around :
            </p>
            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• Model selection</li>
              <li>• Conversion and optimization</li>
              <li>• App size or model delivery</li>
              <li>• Hardware acceleration</li>
              <li>• Device compatibility</li>
              <li>• Performance testing</li>
              <li>• Version management</li>
              <li>• Runtime failures</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Sometimes that ownership is exactly what the product needs. Sometimes it is simply more machinery than the first version requires.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Android On-Device AI Stack Cheat Sheet
            </h2>

            <p className="text-gray-700 mb-4 font-semibold">Start with the task, not the SDK.</p>

            <a
              href="/downloads/android-on-device-ai-stack-cheat-sheet.pdf"
              download
              className="inline-flex items-center gap-2 mb-6 px-4 py-2.5 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download one-page PDF
            </a>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Option</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Best for</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">What your team owns</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Complexity</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Device considerations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-gray-900 font-medium">ML Kit task APIs</td>
                    <td className="px-4 py-3 text-gray-700">Common, well-defined vision and language tasks</td>
                    <td className="px-4 py-3 text-gray-700">Product integration, state, errors, and UX</td>
                    <td className="px-4 py-3 text-gray-700">Low</td>
                    <td className="px-4 py-3 text-gray-700">Often broad, but varies by API and delivery mode</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-900 font-medium">ML Kit GenAI APIs + Gemini Nano</td>
                    <td className="px-4 py-3 text-gray-700">On-device summarization, rewriting, prompting, and short generated output</td>
                    <td className="px-4 py-3 text-gray-700">Prompting, evaluation, availability handling, and UX</td>
                    <td className="px-4 py-3 text-gray-700">Moderate</td>
                    <td className="px-4 py-3 text-gray-700">Supported devices only; runtime status must be checked</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-900 font-medium">MediaPipe Tasks</td>
                    <td className="px-4 py-3 text-gray-700">Customizable vision, audio, gesture, and live media pipelines</td>
                    <td className="px-4 py-3 text-gray-700">Pipeline configuration, model choice, and performance</td>
                    <td className="px-4 py-3 text-gray-700">Moderate</td>
                    <td className="px-4 py-3 text-gray-700">Depends on the task, model, input mode, and hardware</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-900 font-medium">LiteRT / LiteRT-LM</td>
                    <td className="px-4 py-3 text-gray-700">Custom ML or generative models that need deeper runtime control</td>
                    <td className="px-4 py-3 text-gray-700">Model selection, optimization, delivery, compatibility, and lifecycle</td>
                    <td className="px-4 py-3 text-gray-700">High</td>
                    <td className="px-4 py-3 text-gray-700">Depends heavily on the model and target devices</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Fitness Coach Actually Needs</h2>

            <p className="text-gray-700 mb-4">
              Let us bring this back to the sample app running through this series.
            </p>

            <p className="text-gray-700 mb-2">
              Fitness Coach receives a bounded summary of recent activity, such as :
            </p>
            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• Workout frequency</li>
              <li>• Average workout duration</li>
              <li>• Active days</li>
              <li>• Rest days</li>
              <li>• Simple consistency patterns</li>
            </ul>

            <p className="text-gray-700 mb-4">It returns one short, supportive insight :</p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-4 rounded-r-lg">
              <p className="text-gray-800 italic mb-0">
                &ldquo;Your most consistent weeks included shorter weekday workouts. A 25-minute session tomorrow may be easier to sustain.&rdquo;
              </p>
            </div>

            <p className="text-gray-700 mb-4">The task can be described in one sentence :</p>

            <p className="text-gray-700 mb-4 font-semibold">
              Structured, privacy-sensitive activity data goes in, and one short natural-language insight comes out.
            </p>

            <p className="text-gray-700 mb-4">That tells us quite a lot.</p>

            <p className="text-gray-700 mb-4">
              This is not primarily a vision task. It is not audio processing. It is not a barcode, recognition, extraction, or classification problem with a predefined output.
            </p>

            <p className="text-gray-700 mb-6">
              And for the first version, we do not need to train, optimize, package, and maintain our own language model.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Fitness Coach Decision Record</h2>

            <p className="text-gray-700 mb-6">Here is the decision more explicitly.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">ML Kit task-specific APIs</h3>
            <p className="text-gray-700 mb-2 font-semibold">Not selected.</p>
            <p className="text-gray-700 mb-6">
              The output is not a predefined classification, recognition, or extraction result. We need a short generated sentence shaped by a bounded activity summary.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">MediaPipe Tasks</h3>
            <p className="text-gray-700 mb-2 font-semibold">Not selected.</p>
            <p className="text-gray-700 mb-6">
              The feature is not centered on camera, audio, gesture, or real-time media processing. MediaPipe may become useful later if Fitness Coach adds features such as pose analysis or exercise-form feedback, but it does not match the current task.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">LiteRT-LM</h3>
            <p className="text-gray-700 mb-2 font-semibold">Deferred.</p>
            <p className="text-gray-700 mb-6">
              It could run a custom on-device language model and give us deeper control. For the first version, that would also mean taking on model selection, packaging, optimization, compatibility, and delivery before we have proven that the feature needs that level of ownership.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              ML Kit GenAI Prompt API, Powered by Gemini Nano
            </h3>
            <p className="text-gray-700 mb-2 font-semibold">Selected as the first candidate.</p>
            <p className="text-gray-700 mb-2">It matches the shape of the task :</p>
            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• Bounded input</li>
              <li>• Short generated text</li>
              <li>• Local processing</li>
              <li>• No custom model required</li>
              <li>• Lower model-lifecycle ownership for the first version</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Notice that I am calling it the first candidate, not the permanent answer.
            </p>

            <p className="text-gray-700 mb-2">Before treating the decision as final, I would still validate :</p>
            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• Device coverage</li>
              <li>• Model availability behavior</li>
              <li>• Output quality</li>
              <li>• Response latency</li>
              <li>• Prompt and token constraints</li>
              <li>• Safety boundaries</li>
              <li>• Deterministic fallback behavior</li>
            </ul>

            <p className="text-gray-700 mb-6">
              A runtime can look perfect on paper and still be wrong for the real product.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              One Thing Matters More Than the Pick Itself
            </h2>

            <p className="text-gray-700 mb-4">
              Whatever runtime we choose, the ViewModel and UI do not need to know what runs underneath.
            </p>

            <p className="text-gray-700 mb-4">We can put the capability behind a simple interface :</p>

            <CodeSnippet
              code={fitnessInsightEngineCode}
              language="kotlin"
              title="FitnessInsightEngine.kt"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-4">
              The rest of the app depends on <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">FitnessInsightEngine</code>. Not Gemini Nano. Not ML Kit. Not LiteRT-LM.
            </p>

            <p className="text-gray-700 mb-4">
              That gives us room to begin with one implementation and change later without rewriting the entire application.
            </p>

            <p className="text-gray-700 mb-4">For example :</p>

            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto text-gray-800 whitespace-pre font-mono mb-4">
              {implementationTree}
            </pre>

            <p className="text-gray-700 mb-4">
              If device coverage is limited, the app can use the rule-based implementation. If a custom local model becomes worthwhile later, LiteRT-LM can sit behind the same interface. If the product eventually adds an opt-in cloud experience, that can become another implementation too.
            </p>

            <p className="text-gray-700 mb-6 font-semibold">
              The architecture holds even when the technology changes.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">A Quick Decision Path</h2>

            <p className="text-gray-700 mb-6">
              When evaluating your own Android AI feature, start here.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Is this a common, well-defined task?</h3>
            <p className="text-gray-700 mb-2">Examples :</p>
            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• Text recognition</li>
              <li>• Barcode scanning</li>
              <li>• Translation</li>
              <li>• Face detection</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Start with an <strong>ML Kit task-specific API</strong>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              2. Does the feature need short on-device generated text or structured output?
            </h3>
            <p className="text-gray-700 mb-2">Examples :</p>
            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• Summarization</li>
              <li>• Rewriting</li>
              <li>• Guided insight generation</li>
              <li>• Short custom prompting</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Evaluate <strong>ML Kit GenAI APIs powered by Gemini Nano</strong>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              3. Is it a customizable vision, audio, gesture, or live media pipeline?
            </h3>
            <p className="text-gray-700 mb-2">Examples :</p>
            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• Pose detection</li>
              <li>• Segmentation</li>
              <li>• Gesture recognition</li>
              <li>• Audio classification</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Evaluate <strong>MediaPipe Tasks</strong>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              4. Do you need to bring your own model or control the runtime deeply?
            </h3>
            <p className="text-gray-700 mb-4">
              For a custom traditional ML model, evaluate <strong>LiteRT</strong>.
            </p>
            <p className="text-gray-700 mb-6">
              For an on-device language model, evaluate <strong>LiteRT-LM</strong>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              5. Does one path fail to cover all product and device requirements?
            </h3>
            <p className="text-gray-700 mb-6">
              Consider a <strong>hybrid architecture</strong>, with each implementation behind the same product interface.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Before You Commit</h2>

            <p className="text-gray-700 mb-6">Before writing code, capture four things.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Classify the task</h3>
            <p className="text-gray-700 mb-2">Write one sentence describing :</p>
            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• The input</li>
              <li>• The output</li>
              <li>• Whether each is structured or open-ended</li>
              <li>• Whether the data is privacy-sensitive</li>
              <li>• Whether the feature needs to work offline</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">List the candidates</h3>
            <p className="text-gray-700 mb-6">
              Include every option that could realistically perform the task. Do not include a runtime only because it is popular.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Record the decision</h3>
            <p className="text-gray-700 mb-2">Write down :</p>
            <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
              <li>• What was selected</li>
              <li>• Why it fits</li>
              <li>• Why each alternative was deferred or rejected</li>
              <li>• What assumptions would cause the decision to change</li>
            </ul>
            <p className="text-gray-700 mb-6">
              The reasons matter as much as the final choice.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Hide the implementation</h3>
            <p className="text-gray-700 mb-6">
              Create an interface around the product capability before connecting it to the UI. Your architecture will age much better than any individual SDK name.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Takeaway</h2>

            <p className="text-gray-700 mb-4">
              The Android AI ecosystem feels confusing when we begin with the list of tools. It becomes much simpler when we begin with the job.
            </p>

            <p className="text-gray-700 mb-4">
              For Fitness Coach, the first candidate is ML Kit&apos;s GenAI Prompt API powered by Gemini Nano because the feature needs bounded, private, on-device text generation without the complexity of owning a custom language model.
            </p>

            <p className="text-gray-700 mb-4">
              That may change as we test it. And that is okay.
            </p>

            <p className="text-gray-700 mb-4">
              The goal is not to choose the newest runtime or commit to one forever.
            </p>

            <p className="text-gray-700 mb-6 font-semibold">
              Choose the smallest amount of technology that honestly fits the task, and build the architecture so you can change your mind later.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What&apos;s Next?</h2>

            <p className="text-gray-700 mb-6">
              In Part 4, we will take this decision and turn it into a production-minded Android architecture using Compose, ViewModel, StateFlow, coroutines, a model manager, and the <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">FitnessInsightEngine</code> abstraction. That is where the feature starts becoming a real app.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TL;DR</h2>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Start with the task, not the SDK list.</li>
              <li>• ML Kit task APIs, ML Kit GenAI + Gemini Nano, MediaPipe, and LiteRT/LiteRT-LM solve different layers of problems.</li>
              <li>• Fitness Coach&apos;s first candidate : ML Kit GenAI Prompt API powered by Gemini Nano.</li>
              <li>• Hide the runtime behind a product interface so you can swap implementations later.</li>
              <li>• Download the one-page cheat sheet for a quick reference.</li>
              <li>• Part 4 : production architecture with Compose, ViewModel, and FitnessInsightEngine.</li>
            </ul>

            <SeriesNavigation
              seriesTitle="On-Device Fitness Coach"
              currentStage={3}
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
