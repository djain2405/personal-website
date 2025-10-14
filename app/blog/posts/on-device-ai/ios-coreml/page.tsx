'use client'
import Link from 'next/link'
import Image from 'next/image'
import SeriesNavigation from '../../../components/SeriesNavigation'

const onDeviceAISeries = {
  title: "On-Device AI Series",
  stages: [
    { title: "Running AI Locally on iPhone — No Cloud Needed", slug: "on-device-ai/ios-coreml" },
    { title: "On-Device AI, Part 2 — Running Image Classification on Android with TensorFlow Lite", slug: "on-device-ai/android-tflite" },
    { title: "🧠 On-Device AI, Part 3 — What Actually Happens When AI Runs on Your Phone", slug: "on-device-ai/what-happens" }
  ]
}

export default function OnDeviceAIiOSPost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=Running%20AI%20Locally%20on%20iPhone%20%E2%80%94%20No%20Cloud%20Needed%20🚀%20${encodeURIComponent(postUrl)}`
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
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                iOS
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                📚 Part 1/3
              </span>
              <span className="text-sm text-gray-500">6 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Running AI Locally on iPhone — No Cloud Needed
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
            currentStage={1}
            totalStages={3}
            stages={onDeviceAISeries.stages}
          />

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              I built a small but exciting demo this week — an on-device image classifier running entirely on my iPhone with Core ML + SwiftUI.
            </p>

            <p className="text-gray-700 mb-6">
              The app lets me choose any photo, and it instantly predicts what&apos;s in it — complete with a confidence score — all without touching the cloud.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Surprised Me</h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
              <ul className="list-none pl-0 space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">⚡</span>
                  <div>
                    <strong>Speed</strong> — Results appear instantly. No network latency, no loading spinners.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">🔒</span>
                  <div>
                    <strong>Privacy</strong> — Everything happens locally. Your photos never leave your device.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">🔋</span>
                  <div>
                    <strong>Trade-off</strong> — Accuracy improves with larger models, but so does battery use.
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 text-lg italic">
              It&apos;s wild to think how much intelligence can now fit inside a mobile device. AI isn&apos;t just happening in servers anymore — it&apos;s happening right here, in our pockets.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How It Works</h2>

            <p className="text-gray-700 mb-6">
              The architecture is surprisingly simple:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <ol className="list-decimal pl-5 space-y-2 text-gray-800">
                <li><strong>MobileNetV2 model</strong> (~17MB) runs locally via Core ML</li>
                <li><strong>SwiftUI</strong> handles the UI and image picker</li>
                <li><strong>Image → Model → Predictions</strong> (all on device, ~50ms)</li>
              </ol>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Core ML Integration</h2>

            <p className="text-gray-700 mb-4">
              Here&apos;s the core prediction logic:
            </p>

            <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
              <pre className="text-sm text-gray-100">
{`// Load the Core ML model
let model = try? MobileNetV2()

// Make prediction
if let prediction = try? model.prediction(image: pixelBuffer) {
    let label = prediction.classLabel
    let confidence = prediction.classLabelProbs[label] ?? 0

    // Display: "espresso - 92%"
    resultLabel.text = "\\(label) - \\(Int(confidence * 100))%"
}`}
              </pre>
            </div>

            <p className="text-gray-700 mb-6">
              That&apos;s it. No API keys, no network calls, no cloud infrastructure.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">On-Device vs Cloud AI</h2>

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
                    <td className="px-6 py-4 text-sm text-gray-700">Network required</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium text-green-700">Works offline</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">~500ms latency</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium text-green-700">~50ms latency</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Privacy concerns</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium text-green-700">100% private</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium text-green-700">Infinitely scalable</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Battery constrained</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium text-green-700">Complex models</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Limited model size</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">When to Use Each</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-green-900 mb-3 flex items-center">
                  <span className="mr-2">📱</span>
                  Use On-Device When:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Real-time feedback needed</li>
                  <li>✓ Privacy is critical</li>
                  <li>✓ Offline functionality required</li>
                  <li>✓ Low latency matters</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <span className="mr-2">☁️</span>
                  Use Cloud When:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Complex models needed</li>
                  <li>✓ Continuous learning required</li>
                  <li>✓ High accuracy is priority</li>
                  <li>✓ Battery life is a concern</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Demo in Action</h2>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <Image
                  src="/blog/assets/on_device_ai_ios_demo.gif"
                  alt="iPhone app classifying images with Core ML - showing instant predictions with confidence scores"
                  width={400}
                  height={800}
                  className="rounded-lg w-full max-w-md mx-auto"
                  unoptimized
                />
              </div>
              <p className="text-sm text-gray-600 text-center mt-4 italic">
                Tap &ldquo;Choose Photo&rdquo; → select any image → instant label appears with confidence score
              </p>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why On-Device AI Feels Different</h2>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 mb-6">
              <div className="grid gap-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">⚡</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast</h4>
                    <p className="text-sm text-gray-600">No latency, no waiting</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🔒</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Private</h4>
                    <p className="text-sm text-gray-600">No network calls, no data leaves device</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🔋</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reliable</h4>
                    <p className="text-sm text-gray-600">Works offline, anywhere</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <div className="border-t border-gray-300 my-8"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TL;DR</h2>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4 font-medium">
                On-device AI with Core ML is surprisingly powerful:
              </p>
              <ul className="list-none pl-0 space-y-2 text-gray-700">
                <li>✅ Instant results (~50ms)</li>
                <li>✅ Complete privacy (no cloud)</li>
                <li>✅ Works offline</li>
                <li>✅ Simple integration</li>
              </ul>
              <p className="text-gray-700 mt-4">
                If you&apos;ve been curious about bringing AI into your mobile apps, this is a fun place to start.
              </p>
            </div>
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
