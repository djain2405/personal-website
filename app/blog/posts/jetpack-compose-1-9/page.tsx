'use client'
import Link from 'next/link'

export default function JetpackCompose19Post() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=What's%20New%20in%20Jetpack%20Compose%201.9%3A%20Smoother%2C%20Faster%2C%20and%20More%20Expressive%20🎨%20${encodeURIComponent(postUrl)}`
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
              What&apos;s New in Jetpack Compose 1.9: Smoother, Faster, and More Expressive 🎨
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Oct 11, 2025</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Jetpack Compose 1.9 just dropped — and it&apos;s all about performance, polish, and flexibility. If you&apos;ve been shipping Compose UIs, this update is worth a quick look.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">⚡ 1. Performance That Feels Faster</h2>

            <p className="text-gray-700 mb-6">
              Scrolling and lazy lists got smoother across the board. The Compose runtime now optimizes recompositions more aggressively — meaning less UI jank, even in complex layouts.
            </p>

            <p className="text-gray-700 mb-6 font-medium">
              TL;DR: Compose 1.9 = more frames, fewer skips.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🌫️ 2. New Shadow & Styling APIs</h2>

            <p className="text-gray-700 mb-6">
              You can now add realistic elevation shadows and layer effects more easily with new modifiers like <code className="bg-gray-100 px-2 py-1 rounded text-sm">graphicsLayer</code> updates.
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`Box(
    modifier = Modifier
        .shadow(
            elevation = 8.dp,
            shape = RoundedCornerShape(12.dp),
            clip = false
        )
        .background(Color.White)
)`}
              </pre>
            </div>

            <p className="text-gray-700 mb-6">
              Finally — shadows that actually look crisp across light/dark themes.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🪟 3. Better Large-Screen & Foldable Support</h2>

            <p className="text-gray-700 mb-6">
              Google&apos;s pushing adaptive design harder than ever. The 1.9 update improves <code className="bg-gray-100 px-2 py-1 rounded text-sm">TwoPaneLayout</code>, window insets handling, and adaptive navigation components for tablets + foldables.
            </p>

            <p className="text-gray-700 mb-6">
              If you&apos;re building for multi-form factors — this release is gold.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">💬 4. Text Input & Autofill Improvements</h2>

            <p className="text-gray-700 mb-6">
              Text fields got smoother typing latency and more reliable autofill behavior. Small tweak, big UX win.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TL;DR 🚀</h2>

            <p className="text-gray-700 mb-4">
              Jetpack Compose 1.9 is a quality-of-life upgrade.
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>✅ Smoother performance</li>
              <li>✅ Prettier shadows</li>
              <li>✅ Smarter adaptive layouts</li>
              <li>✅ Better typing experience</li>
            </ul>

            <p className="text-gray-700 mb-4">
              If you haven&apos;t updated yet — now&apos;s the time.
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
