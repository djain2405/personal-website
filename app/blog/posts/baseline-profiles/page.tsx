'use client'
import Link from 'next/link'

export default function BaselineProfilesPost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=Baseline%20Profiles%20in%202025%3A%20The%20Easy%20Speed%20Hack%20You're%20Ignoring%20⚡%20${encodeURIComponent(postUrl)}`
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
              <Link href="/" className="text-2xl font-bold text-gray-900">Mobile With Me</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Blog Post Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Android
              </span>
              <span className="text-sm text-gray-500">5 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Baseline Profiles in 2025: The Easy Speed Hack You&apos;re Ignoring ⚡
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Oct 17, 2025</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              If your Android app still takes a few seconds to open, there&apos;s a good chance you&apos;re not using Baseline Profiles. One of the easiest and most effective speed hacks available today.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🚀 What Are Baseline Profiles?</h2>

            <p className="text-gray-700 mb-6">
              A Baseline Profile tells Android which code paths to pre-compile so your app launches and runs faster right after install, no warm-up lag.
            </p>

            <p className="text-gray-700 mb-6">
              Instead of waiting for the JIT compiler to &quot;learn&quot; what users do, the profile gives it a head start.
            </p>

            <p className="text-gray-700 mb-4 font-medium">Result:</p>
            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>✅ Faster cold starts ❄️</li>
              <li>✅ Smoother scrolling</li>
              <li>✅ Better battery efficiency</li>
            </ul>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">⚙️ How It Works (in 2025)</h2>

            <p className="text-gray-700 mb-6">
              Since <strong>Android Studio Ladybug | 2024.2.1</strong>, generating profiles is built right into Gradle; no setup pain.
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`./gradlew generateBaselineProfile`}
              </pre>
            </div>

            <p className="text-gray-700 mb-6">
              The plugin records real user journeys (like opening your main screen or scrolling a list) and stores the optimized methods in:
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`app/src/main/baselineProfiles`}
              </pre>
            </div>

            <p className="text-gray-700 mb-6">
              At install time, ART uses this profile to pre-optimize those code paths.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🧩 Bonus: Profile Installation API</h2>

            <p className="text-gray-700 mb-6">
              Android 14+ devices now let you update profiles <strong>dynamically from Play</strong> without a full app update.
            </p>

            <p className="text-gray-700 mb-6">
              That means your users benefit from faster performance automatically, as your usage evolves.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">⚡ TL;DR</h2>

            <p className="text-gray-700 mb-4">
              Baseline Profiles = free performance boost.
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>✅ Faster cold starts</li>
              <li>✅ No code changes needed</li>
              <li>✅ Built into modern Android Studio</li>
              <li>✅ Now updatable via Play</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">
              Stop shipping slow startups - it&apos;s a 5-minute fix.
            </p>
          </div>

          {/* Post Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Share this post:</span>
                <button onClick={handleLinkedInShare} className="text-blue-600 hover:text-blue-700 transition-colors">LinkedIn</button>
              </div>
              <Link
                href="/"
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
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
