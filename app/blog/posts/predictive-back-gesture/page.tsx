'use client'
import Link from 'next/link'

export default function PredictiveBackGesturePost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=Predictive%20Back%20Gesture%3A%20The%20Subtle%20UX%20Win%20You%20Need%20to%20Enable%20${encodeURIComponent(postUrl)}`
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
              <span className="text-sm text-gray-500">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Predictive Back Gesture: The Subtle UX Win You Need to Enable
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Oct 27, 2025</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Android 16 is making Predictive Back Navigation the default, and it&apos;s one of those updates that looks tiny but feels huge. It&apos;s all about making navigation feel intuitive and fluid, instead of abrupt and janky.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">👀 What&apos;s Predictive Back?</h2>

            <p className="text-gray-700 mb-6">
              It&apos;s that smooth animation you see when you swipe back showing a preview of where you&apos;ll go before the action actually happens.
            </p>

            <p className="text-gray-700 mb-6">
              Instead of your app instantly popping to the previous screen, the system animates the destination in sync with your gesture, so users feel more in control.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🧩 Why It Matters</h2>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>✅ Reduces accidental exits (no more surprise app closures)</li>
              <li>✅ Adds continuity between screens</li>
              <li>✅ Feels native to Android 16&apos;s motion system and design language</li>
              <li>✅ Tiny detail, huge polish</li>
            </ul>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">⚙️ How To Enable It</h2>

            <p className="text-gray-700 mb-4">
              Just one line of setup in your activity theme or manifest:
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`<activity
    android:name=".MainActivity"
    android:enableOnBackInvokedCallback="true" />`}
              </pre>
            </div>

            <p className="text-gray-700 mb-4 font-medium">And in Compose:</p>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`BackHandler {
    // Handle back logic here
}`}
              </pre>
            </div>

            <p className="text-gray-700 mb-6">
              That&apos;s it — the system handles the predictive animation automatically.
            </p>

            <p className="text-gray-700 mb-6">
              If you&apos;re using Navigation Compose, it&apos;s already supported as long as you&apos;re on <strong>navigation-compose 2.8.0+</strong>.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">⚡ TL;DR</h2>

            <p className="text-gray-700 mb-4 font-medium">
              Predictive Back = smoother, smarter navigation.
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>✅ Prevents accidental exits</li>
              <li>✅ Improves motion continuity</li>
              <li>✅ Enabled by default on Android 16</li>
              <li>✅ One-line setup</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">
              A small change that makes your app feel premium.
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
