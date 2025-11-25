'use client'
import Link from 'next/link'

export default function ComposePerformancePost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=Compose%20Performance%3A%20Why%20Your%20UI%20Re-renders%20Too%20Much%20🔄⚡%20${encodeURIComponent(postUrl)}`
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
                Jetpack Compose
              </span>
              <span className="text-sm text-gray-500">6 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compose Performance: Why Your UI Re-renders Too Much 🔄⚡
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Nov 24, 2025</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Jetpack Compose is powerful - but if you&apos;ve ever wondered &quot;why is my UI recomposing so often?&quot; you&apos;re not alone.
              Most performance issues come down to a few simple patterns that accidentally trigger unnecessary renders.
            </p>

            <p className="text-gray-700 mb-6">
              Here&apos;s the bite-sized breakdown 👇
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔥 1. Unstable Parameters = Extra Recomposition</h2>

            <p className="text-gray-700 mb-4">
              If you pass objects that change on every call (lists, lambdas, data classes without <code className="bg-gray-100 px-2 py-1 rounded text-sm">@Stable</code>/<code className="bg-gray-100 px-2 py-1 rounded text-sm">@Immutable</code>), Compose considers them new every time.
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`@Composable
fun MyList(items: List<String>) { ... }  // if items changes → full recompose`}
              </pre>
            </div>

            <p className="text-gray-700 mb-4 font-semibold">Fix:</p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>✓ Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">remember</code> for state holders</li>
              <li>✓ Prefer immutable data</li>
              <li>✓ Mark stable models when possible</li>
            </ul>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔥 2. State in the Wrong Place</h2>

            <p className="text-gray-700 mb-4">
              If a parent holds all the state, the entire child tree re-renders when anything changes.
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`var text by remember { mutableStateOf("") }
Parent(text) // re-renders whole subtree`}
              </pre>
            </div>

            <p className="text-gray-700 mb-4 font-semibold">Fix:</p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>✓ Hoist only the state you need</li>
              <li>✓ Keep local UI-only state in the child</li>
            </ul>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔥 3. Derived Values Calculated Every Time</h2>

            <p className="text-gray-700 mb-4">
              If you compute expensive logic inside a composable without memoizing it, you force recompositions to work harder.
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`val filtered = items.filter { ... }  // recalculated on every recompose`}
              </pre>
            </div>

            <p className="text-gray-700 mb-4 font-semibold">Fix:</p>

            <p className="text-gray-700 mb-4">
              Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">derivedStateOf</code> for computed state:
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`val filtered by remember { derivedStateOf { items.filter { ... } } }`}
              </pre>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔥 4. Missing key in Lazy Lists</h2>

            <p className="text-gray-700 mb-4">
              If Compose can&apos;t uniquely identify list items, it re-renders more than necessary — sometimes the whole list.
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`items(items) { item -> ... } // bad`}
              </pre>
            </div>

            <p className="text-gray-700 mb-4 font-semibold">Fix:</p>

            <p className="text-gray-700 mb-4">
              Specify a stable key:
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`items(items, key = { it.id }) { item -> ... }`}
              </pre>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔥 5. Recreating Objects in Compose</h2>

            <p className="text-gray-700 mb-4">
              If you recreate a coroutine scope, animation, or modifier each time, you trigger extra recomposition or work.
            </p>

            <p className="text-gray-700 mb-4 font-semibold">Fix:</p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>✓ Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">rememberCoroutineScope()</code></li>
              <li>✓ Store animations in <code className="bg-gray-100 px-2 py-1 rounded text-sm">remember</code></li>
              <li>✓ Avoid rebuilding heavyweight modifiers</li>
            </ul>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🪄 TL;DR</h2>

            <p className="text-gray-700 mb-4">
              If your Compose UI re-renders too much, check for:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>✔ Unstable parameters</li>
              <li>✔ State lifted too high</li>
              <li>✔ Missing <code className="bg-gray-100 px-2 py-1 rounded text-sm">remember</code> / <code className="bg-gray-100 px-2 py-1 rounded text-sm">derivedStateOf</code></li>
              <li>✔ LazyList without keys</li>
              <li>✔ Objects recreated every frame</li>
            </ul>

            <p className="text-gray-700 mb-4">
              A few tweaks = a massive performance upgrade.
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
