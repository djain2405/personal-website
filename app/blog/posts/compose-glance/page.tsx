'use client'
import Link from 'next/link'

export default function ComposeGlancePost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=Compose%20Glance%3A%20Build%20Android%20Widgets%20the%20Modern%20Way%20🪟✨%20${encodeURIComponent(postUrl)}`
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
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Android Widgets
              </span>
              <span className="text-sm text-gray-500">5 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compose Glance: Build Android Widgets the Modern Way 🪟✨
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Nov 20, 2025</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Widgets are back in style - and with Android 16 + Material You, they&apos;re a big part of how users interact with your app.
              The best part? You can now build them using <strong>Jetpack Compose Glance</strong>, which brings a Compose-like API to home-screen widgets.
            </p>

            <p className="text-gray-700 mb-6">
              No RemoteViews. No XML gymnastics. Just clean, declarative UI.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔹 What is Compose Glance?</h2>

            <p className="text-gray-700 mb-6">
              A Jetpack library that lets you build app widgets using a simplified, Compose-inspired syntax.
              It isn&apos;t full Compose, but it feels familiar - <code className="bg-gray-100 px-2 py-1 rounded text-sm">Column</code>, <code className="bg-gray-100 px-2 py-1 rounded text-sm">Row</code>, <code className="bg-gray-100 px-2 py-1 rounded text-sm">Text</code>, <code className="bg-gray-100 px-2 py-1 rounded text-sm">Button</code>, modifiers, etc.
            </p>

            <p className="text-gray-700 mb-4">
              Glance is perfect for:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>✓ Quick actions</li>
              <li>✓ Status summaries</li>
              <li>✓ Shortcuts</li>
              <li>✓ At-a-glance info</li>
            </ul>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">⚡ The Smallest Example</h2>

            <p className="text-gray-700 mb-4">
              Here&apos;s a tiny widget in Glance:
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`class GreetingWidget : GlanceAppWidget() {

    @Composable
    override fun Content() {
        Column(
            modifier = GlanceModifier
                .padding(16.dp)
                .background(Color.White)
        ) {
            Text("Hello from Glance 👋")
            Button(
                text = "Open App",
                onClick = actionStartActivity<MainActivity>()
            )
        }
    }
}`}
              </pre>
            </div>

            <p className="text-gray-700 mb-4">
              And register it:
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`class GreetingWidgetReceiver : GlanceAppWidgetReceiver() {
    override val glanceAppWidget = GreetingWidget()
}`}
              </pre>
            </div>

            <p className="text-gray-700 mb-6">
              That&apos;s a full widget - no XML, no RemoteViews, no boilerplate.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">💡 Why Use Glance?</h2>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>✨ Declarative and Compose-like</li>
              <li>✨ Material You support</li>
              <li>✨ Small footprint</li>
              <li>✨ Easy updates via <code className="bg-gray-100 px-2 py-1 rounded text-sm">updateAppWidgetState()</code></li>
              <li>✨ Faster iteration vs classic widgets</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Glance brings your home screen up to the level your app already runs on.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🪄 TL;DR</h2>

            <p className="text-gray-700 mb-4">
              Compose Glance makes widgets fun again.
              If you&apos;ve avoided widgets because of old APIs, this is your moment to try them:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>✨ Simple</li>
              <li>✨ Declarative</li>
              <li>✨ Material You-ready</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Your users get useful, glanceable info.
              You get clean, modern widget code.
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
