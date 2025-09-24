'use client'
import Link from 'next/link'

export default function StateFlowVsSharedFlowPost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=StateFlow%20vs%20SharedFlow:%20When%20to%20Use%20Which%20⚡%20${encodeURIComponent(postUrl)}`
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
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                Kotlin Flow
              </span>
              <span className="text-sm text-gray-500">3 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              StateFlow vs SharedFlow: When to Use Which ⚡
            </h1>
            <p className="text-gray-600 text-lg">
              Kotlin&apos;s Flow APIs are powerful, but many devs trip up on StateFlow vs SharedFlow. Both are hot flows, but they shine in different situations.
            </p>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>September 23, 2025</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔹 StateFlow</h2>
            <p className="text-gray-700 mb-4">
              Holds a single up-to-date value (like LiveData).
            </p>
            <p className="text-gray-700 mb-4">
              Always has an initial value.
            </p>
            <p className="text-gray-700 mb-4">
              Collectors immediately get the latest state.
            </p>
            <p className="text-gray-700 mb-6">
              Perfect for UI state that needs to be observed continuously.
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`val uiState = MutableStateFlow(Loading)`}
              </pre>
            </div>

            <p className="text-gray-700 mb-8">
              👉 Use when you want your UI to always reflect the current state.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔹 SharedFlow</h2>
            <p className="text-gray-700 mb-4">
              No initial value.
            </p>
            <p className="text-gray-700 mb-4">
              Can replay a set number of past emissions.
            </p>
            <p className="text-gray-700 mb-6">
              Great for one-off events (navigation, toasts, error messages).
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`val events = MutableSharedFlow<UiEvent>()`}
              </pre>
            </div>

            <p className="text-gray-700 mb-8">
              👉 Use when you want to broadcast events without holding onto state.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">TL;DR ⚡</h3>
              <p className="text-blue-800 mb-2">
                <strong>StateFlow = state holder 🧠</strong>
              </p>
              <p className="text-blue-800 mb-2">
                <strong>SharedFlow = event broadcaster 📢</strong>
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Think of it this way:</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-3">
                <strong>StateFlow:</strong> &quot;What&apos;s the app&apos;s current mood?&quot;
              </p>
              <p className="text-gray-700">
                <strong>SharedFlow:</strong> &quot;What just happened that the UI should react to?&quot;
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Differences Summary</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">StateFlow</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">SharedFlow</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Initial Value</td>
                    <td className="border border-gray-300 px-4 py-2">Always has one</td>
                    <td className="border border-gray-300 px-4 py-2">No initial value</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Use Case</td>
                    <td className="border border-gray-300 px-4 py-2">State management</td>
                    <td className="border border-gray-300 px-4 py-2">Event broadcasting</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">New Collectors</td>
                    <td className="border border-gray-300 px-4 py-2">Get latest value immediately</td>
                    <td className="border border-gray-300 px-4 py-2">Only get future emissions</td>
                  </tr>
                </tbody>
              </table>
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
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}