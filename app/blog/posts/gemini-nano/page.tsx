'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function GeminiNanoPost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=Gemini%20Nano%20%26%20On-Device%20AI%3A%20What%20Android%20Devs%20Need%20to%20Know%20🤖📱%20${encodeURIComponent(postUrl)}`
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
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                Gemini Nano
              </span>
              <span className="text-sm text-gray-500">5 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🤖 Gemini Nano &amp; On-Device AI: What Android Devs Need to Know 📱
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Nov 6, 2025</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 text-lg font-medium">
              AI is moving from the cloud to your device&apos;s chip. Google&apos;s Gemini Nano - a lightweight LLM running entirely on-device, brings AI inference directly to Android. No network calls. No latency. No data leaving the device.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">⚡ Why This Changes Everything</h2>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
              <ul className="list-none pl-0 space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">⚡</span>
                  <div>
                    <strong>Sub-second responses</strong> → perfect for chat, smart replies, content summaries
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">🔌</span>
                  <div>
                    <strong>Works offline</strong> → features run without connectivity
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">🔒</span>
                  <div>
                    <strong>Privacy-first architecture</strong> → user data stays on device
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">🔋</span>
                  <div>
                    <strong>Battery-optimized</strong> → designed for mobile constraints via AICore API
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🧩 How to Build With It</h2>

            <p className="text-gray-700 mb-6">
              Google&apos;s <strong>AICore Service</strong> gives you direct access to Gemini Nano for text inference:
            </p>

            <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
              <pre className="text-sm text-gray-100">
                {`val request = AiTextRequest(
    prompt = "Summarize this conversation:"
)
val result = aiCore.generateText(request)
Log.d("AIResult", result.text)`}
              </pre>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <ul className="list-none pl-0 space-y-2 text-gray-700">
                <li>✅ No API keys</li>
                <li>✅ No cloud dependencies</li>
                <li>✅ Just local AI</li>
              </ul>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">💡 Build This Today</h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-6">
              <ul className="list-disc pl-5 space-y-3 text-gray-800">
                <li>
                  <strong>Smart reply generation</strong> for messaging apps
                </li>
                <li>
                  <strong>On-device caption summaries</strong> for video content
                </li>
                <li>
                  <strong>Context-aware assistants</strong> (&ldquo;Driving detected—launch navigation?&rdquo;)
                </li>
                <li>
                  <strong>Private, offline translation</strong> for short-form text
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🎥 Quick Demo</h2>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-lg">

                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <Image
                    src="/blog/assets/gemini_nano.gif"
                    alt="Gemini Nano inference in action"
                    width={400}
                    height={800}
                    className="rounded-lg w-full max-w-md mx-auto"
                    unoptimized
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center mt-4 italic">
                Watch Gemini Nano generate smart replies in real-time, completely offline
              </p>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🎯 The Bottom Line</h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
              <p className="text-gray-800 mb-4 text-lg">
                Gemini Nano puts <strong>privacy-preserving intelligence</strong> directly in users&apos; pockets.
              </p>
              <p className="text-gray-800 mb-4">
                Fast. Private. Offline-capable.
              </p>
              <p className="text-gray-800 mb-4 font-medium">
                This is the shift from <span className="text-blue-600">cloud-first AI</span> to <span className="text-purple-600">edge-first AI</span>.
              </p>
              <p className="text-gray-800 text-xl font-semibold mt-6">
                If 2023 was &ldquo;AI everywhere,&rdquo; 2025 is &ldquo;AI right here.&rdquo;
              </p>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🧩 Key Takeaways</h2>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <ul className="list-none pl-0 space-y-2 text-gray-700">
                <li>✅ Gemini Nano brings LLM inference on-device</li>
                <li>✅ AICore API provides easy integration</li>
                <li>✅ Perfect for smart replies, summaries, and context-aware features</li>
                <li>✅ Works completely offline with zero latency</li>
                <li>✅ Privacy-first: no data leaves the device</li>
              </ul>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔗 Learn More</h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Want to dive deeper into Gemini Nano and on-device AI?
              </p>
              <a
                href="https://developer.android.com/ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm bg-white px-4 py-2 rounded border border-blue-300 hover:border-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Android AI Documentation →
              </a>
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
