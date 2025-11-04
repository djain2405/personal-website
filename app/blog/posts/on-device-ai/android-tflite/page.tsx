'use client'
import Link from 'next/link'
import Image from 'next/image'
import SeriesNavigation from '../../../components/SeriesNavigation'

const onDeviceAISeries = {
  title: "On-Device AI Series",
  stages: [
    { title: "Running AI Locally on iPhone - No Cloud Needed", slug: "on-device-ai/ios-coreml", completed: true },
    { title: "On-Device AI, Part 2 - Running Image Classification on Android with TensorFlow Lite", slug: "on-device-ai/android-tflite" },
    { title: "🧠 On-Device AI, Part 3 - What Actually Happens When AI Runs on Your Phone", slug: "on-device-ai/what-happens" },
    { title: "On-Device AI, Part 4 - Designing AI Experiences That Feel Magical", slug: "on-device-ai/designing-ai-experiences" }
  ]
}

export default function OnDeviceAIAndroidPost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=On-Device%20AI%2C%20Part%202%20%E2%80%94%20Running%20Image%20Classification%20on%20Android%20with%20TensorFlow%20Lite%20🚀%20${encodeURIComponent(postUrl)}`
    window.open(linkedInUrl, '_blank', 'width=600,height=400')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      {/* Blog Post Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                On-Device AI
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Android
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                📚 Part 2/4
              </span>
              <span className="text-sm text-gray-500">7 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🧠 On-Device AI, Part 2 - Running Image Classification on Android with TensorFlow Lite
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Oct 12, 2025</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Series Navigation */}
          <SeriesNavigation
            seriesTitle={onDeviceAISeries.title}
            currentStage={2}
            totalStages={3}
            stages={onDeviceAISeries.stages}
          />

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Earlier, I explored how on-device AI works on iPhone using Core ML + SwiftUI.
            </p>

            <p className="text-gray-700 mb-6">
              Now, I wanted to bring the same idea to Android — using TensorFlow Lite.
            </p>

            <p className="text-gray-700 mb-6">
              Same concept: pick an image → run the model directly on the phone → get an instant prediction with a confidence score.
            </p>

            <p className="text-gray-700 mb-6 font-medium">
              No APIs. No servers. Just pure local inference.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">⚡ What Surprised Me</h2>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-r-lg">
              <ul className="list-none pl-0 space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">⚡</span>
                  <div>
                    <strong>Speed</strong> — still incredibly fast. Inference averages ~40–60 ms on a mid-range Pixel.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">🔒</span>
                  <div>
                    <strong>Privacy</strong> — identical to iOS: everything happens locally, nothing touches the network.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">🔧</span>
                  <div>
                    <strong>Setup</strong> — TensorFlow Lite needs a few extra steps (model conversion + interpreter setup) but feels flexible once configured.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">🔋</span>
                  <div>
                    <strong>Battery trade-off</strong> — quantized models make a huge difference in efficiency.
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔧 How It Works</h2>

            <p className="text-gray-700 mb-6">
              The architecture mirrors the iOS version, just with Android building blocks:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li><strong>TensorFlow Lite model:</strong> mobilenet_v1_224.tflite (≈ 5 MB)</li>
                <li><strong>Jetpack Compose</strong> for the UI</li>
                <li><strong>ImageClassifier API</strong> from TensorFlow Lite Task Library</li>
                <li><strong>Output →</strong> label + confidence score</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 font-medium">
              Everything runs completely offline.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">💻 Core Code Snippet</h2>

            <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
              <pre className="text-sm text-gray-100">
                {`val classifier = ImageClassifier.createFromFileAndOptions(
    context,
    "mobilenet_v1_224.tflite",
    ImageClassifier.ImageClassifierOptions.builder()
        .setMaxResults(1)
        .build()
)

val bitmap = ... // image from gallery or camera
val result = classifier.classify(TensorImage.fromBitmap(bitmap))
val top = result.firstOrNull()?.categories?.firstOrNull()

textResult.text = "\${top?.label} - \${(top?.score ?: 0f) * 100}%"`}
              </pre>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <ul className="list-none pl-0 space-y-2 text-gray-700">
                <li>✅ No API keys</li>
                <li>✅ No network calls</li>
                <li>✅ Fully on-device inference</li>
              </ul>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">☁️ On-Device vs Cloud (Android Edition)</h2>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Cloud AI</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">On-Device AI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Requires internet</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium text-green-700">Works offline</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">~600 ms latency</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium text-green-700">~50 ms latency</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Privacy concerns</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium text-green-700">100% local</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium text-green-700">Unlimited compute</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Battery / RAM constrained</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🎥 Demo in Action</h2>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <Image
                  src="/blog/assets/on_device_ai_android_demo.gif"
                  alt="Android app classifying images with TensorFlow Lite - showing instant predictions with confidence scores"
                  width={400}
                  height={800}
                  className="rounded-lg w-full max-w-md mx-auto"
                  unoptimized
                />
              </div>
              <p className="text-sm text-gray-600 text-center mt-4 italic">
                Tap &ldquo;Choose Image&rdquo; → select any photo → instant label appears with a confidence score
              </p>
            </div>

            <p className="text-gray-700 mb-6 text-lg">
              Seeing it run in real time on an Android phone feels the same way the Core ML demo did — shockingly instant.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔋 Takeaways</h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-6">
              <p className="text-gray-800 mb-4">
                Running AI locally isn&apos;t just possible on Android - it&apos;s becoming the expected direction.
              </p>
              <p className="text-gray-800 mb-4">
                With TensorFlow Lite, Gemini Nano, and new on-device APIs, Android is closing the gap between mobile UX and AI intelligence.
              </p>
              <p className="text-gray-800 font-medium italic">
                This experiment reaffirmed something I felt on iOS:
              </p>
              <p className="text-gray-800 mt-2">
                <strong>AI doesn&apos;t need to live in massive cloud servers anymore.</strong>
              </p>
              <p className="text-gray-800">
                <strong>It can live right inside your phone - fast, private, and personal.</strong>
              </p>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🧩 TL;DR</h2>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <ul className="list-none pl-0 space-y-2 text-gray-700">
                <li>✅ Built the same image-classification demo on Android</li>
                <li>✅ Used TensorFlow Lite + Jetpack Compose</li>
                <li>✅ Runs entirely offline (~50 ms inference)</li>
                <li>✅ Maintains privacy and performance</li>
                <li>✅ Mirrors Core ML workflow — different tools, same magic</li>
              </ul>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔗 View the Code</h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                The complete working code for the iOS and Android demo is available in my GitHub repository:
              </p>
              <a
                href="https://github.com/djain2405/Mobile-AI-Experiments"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm bg-white px-4 py-2 rounded border border-blue-300 hover:border-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub →
              </a>
              <p className="text-gray-600 text-sm mt-3">
                Repository: Mobile-AI-Experiments
              </p>
            </div>

            <div className="border-t border-gray-300 my-6"></div>
          </div>

          {/* Post Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Share this post:</span>
                <button onClick={handleLinkedInShare} className="text-blue-600 hover:text-blue-700 transition-colors">LinkedIn</button>
              </div>
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Back to all posts
              </Link>
            </div>
          </footer>
        </article>
      </main>

      {/* Footer */}
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
