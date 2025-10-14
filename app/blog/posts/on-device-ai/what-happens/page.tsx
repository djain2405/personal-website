'use client'
import Link from 'next/link'
import SeriesNavigation from '../../../components/SeriesNavigation'

const onDeviceAISeries = {
  title: "On-Device AI Series",
  stages: [
    { title: "Running AI Locally on iPhone — No Cloud Needed", slug: "on-device-ai/ios-coreml", completed: true },
    { title: "On-Device AI, Part 2 — Running Image Classification on Android with TensorFlow Lite", slug: "on-device-ai/android-tflite", completed: true },
    { title: "On-Device AI, Part 3 — What Actually Happens When AI Runs on Your Phone", slug: "on-device-ai/what-happens" }
  ]
}

export default function OnDeviceAIWhatHappensPost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=🧠%20On-Device%20AI%2C%20Part%203%20%E2%80%94%20What%20Actually%20Happens%20When%20AI%20Runs%20on%20Your%20Phone%20🚀%20${encodeURIComponent(postUrl)}`
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
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                Technical Deep Dive
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                📚 Part 3/3
              </span>
              <span className="text-sm text-gray-500">8 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              On-Device AI, Part 3 — What Actually Happens When AI Runs on Your Phone
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Oct 13, 2025</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Series Navigation */}
          <SeriesNavigation
            seriesTitle={onDeviceAISeries.title}
            currentStage={3}
            totalStages={3}
            stages={onDeviceAISeries.stages}
          />

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              In the last two posts, I shared how I built an on-device image classifier, first on iPhone (Core ML + SwiftUI), then on Android (TensorFlow Lite + Jetpack Compose).
            </p>

            <p className="text-gray-700 mb-6">
              Both apps could recognize what&apos;s in a photo and return a confidence score, all without using the cloud.
            </p>

            <p className="text-gray-700 mb-6 font-medium">
              But what&apos;s actually happening when your phone does that in just a few milliseconds?
            </p>

            <p className="text-gray-700 mb-6">
              Let&apos;s break it down.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔄 From Photo to Prediction: The Simple Flow</h2>

            <p className="text-gray-700 mb-6">
              No matter the platform, the process looks something like this:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
              <div className="space-y-4 text-gray-800">
                <div className="flex items-start">
                  <span className="mr-3 text-xl font-bold">1️⃣</span>
                  <div>
                    <strong>You choose a photo.</strong>
                    <p className="mt-1">Your app resizes it to the right shape and format so the model can understand it.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-xl font-bold">2️⃣</span>
                  <div>
                    <strong>The model is already on your phone,</strong> either bundled with the app or downloaded when you first use it.
                    <p className="mt-1">It&apos;s a small file (like <code>model.tflite</code> or <code>MobileNetV2.mlmodel</code>) that contains the "knowledge" the AI learned while training — patterns for recognizing objects, faces, or text.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-xl font-bold">3️⃣</span>
                  <div>
                    <strong>The phone loads that model into a lightweight AI engine.</strong>
                    <ul className="mt-1 list-disc pl-5 space-y-1">
                      <li>On iPhones, that&apos;s <strong>Core ML</strong>, which can run on the Apple Neural Engine (ANE), GPU, or CPU.</li>
                      <li>On Android, it&apos;s <strong>TensorFlow Lite</strong>, which uses NNAPI or GPU delegates for speed.</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-xl font-bold">4️⃣</span>
                  <div>
                    <strong>The model analyzes the photo.</strong>
                    <p className="mt-1">Each image becomes numbers (pixels), then math happens — millions of small calculations performed into a few milliseconds.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-xl font-bold">5️⃣</span>
                  <div>
                    <strong>You get a result and confidence score.</strong>
                    <p className="mt-1">The model outputs probabilities; for e.g., "espresso 92%." Your app shows it in the UI.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6 text-lg font-medium">
              That&apos;s the magic! And it all happens right there, inside the phone&apos;s chip.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">⚙️ Why This Works So Fast</h2>

            <p className="text-gray-700 mb-6">
              Phones today come with specialized hardware built for AI.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="mr-2">🍎</span>
                  Apple Neural Engine (ANE)
                </h3>
                <p className="text-sm text-gray-700">Optimized for Core ML inference</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="mr-2">🤖</span>
                  Android NNAPI / GPU Delegates
                </h3>
                <p className="text-sm text-gray-700">Route heavy math to faster processors</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              These chips are designed to run neural networks the same way graphics chips render 3D games — quickly, efficiently, and without draining too much battery.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔒 Why This Matters</h2>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 mb-6">
              <div className="grid gap-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🧠</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Speed</h4>
                    <p className="text-sm text-gray-600">No network round-trip, so results appear instantly.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🔒</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Privacy</h4>
                    <p className="text-sm text-gray-600">Photos and data never leave the device.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🔋</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reliability</h4>
                    <p className="text-sm text-gray-600">Works offline, anywhere in the world.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              For developers, it also means lower server costs and no waiting on network APIs.
            </p>

            <p className="text-gray-700 mb-6">
              For users, it means experiences that feel smarter, faster, and more personal — like magic that doesn&apos;t depend on the internet.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🌐 Cloud AI vs On-Device AI (at a Glance)</h2>

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
                    <td className="px-6 py-4 text-sm text-gray-700">Needs internet</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium text-green-700">Works offline</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Data sent to servers</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium text-green-700">Data stays on device</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Can run large models</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Must fit in device memory</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Adds latency (~500 ms+)</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium text-green-700">Instant (~50 ms)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Easy to update centrally</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Bundled or downloaded locally</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-6 text-lg">
              Most real-world apps use a <strong>hybrid approach</strong>:
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-gray-800">
                Quick, lightweight AI on-device + heavier processing in the cloud only when needed.
              </p>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🧩 Why This Shift Matters for Mobile</h2>

            <p className="text-gray-700 mb-6">
              The shift to on-device AI isn&apos;t just technical. It&apos;s philosophical.
            </p>

            <p className="text-gray-700 mb-6 text-lg font-medium italic">
              It&apos;s about moving intelligence closer to the user.
            </p>

            <p className="text-gray-700 mb-6">
              Instead of depending on distant servers, our phones are becoming self-reliant, able to understand, generate, and respond instantly.
            </p>

            <p className="text-gray-700 mb-6">
              It&apos;s the difference between an app asking for permission to be smart and one that just is.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🪄 TL;DR</h2>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <ul className="list-none pl-0 space-y-2 text-gray-700">
                <li>✅ On-device AI means the model runs locally on your phone</li>
                <li>✅ It&apos;s faster, more private, and works offline</li>
                <li>✅ Core ML (iOS) and TensorFlow Lite (Android) are the engines behind it</li>
                <li>✅ The future of AI is not somewhere out there — it&apos;s right here, in your hand</li>
              </ul>
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
