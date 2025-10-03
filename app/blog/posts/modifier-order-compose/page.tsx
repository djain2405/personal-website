'use client'
import Link from 'next/link'

export default function ModifierOrderComposePost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=Modifier%20Order%20in%20Jetpack%20Compose%3A%20Why%20It%20Breaks%20Your%20UI%20🎨%20${encodeURIComponent(postUrl)}`
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
              <span className="text-sm text-gray-500">3 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modifier Order in Jetpack Compose: Why It Breaks Your UI 🎨
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Oct 2, 2025</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              In Jetpack Compose, modifier order matters more than most devs realize. Swapping two modifiers can completely change how your UI looks.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Example 1: Padding + Background</h2>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`Box(
    modifier = Modifier
        .padding(16.dp)
        .background(Color.Red)
)`}
              </pre>
            </div>

            <p className="text-gray-700 mb-6">
              👉 The red background is smaller, because padding is applied first.
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`Box(
    modifier = Modifier
        .background(Color.Red)
        .padding(16.dp)
)`}
              </pre>
            </div>

            <p className="text-gray-700 mb-6">
              👉 Now the background fills the box, and padding applies inside it.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Example 2: Clip + Border</h2>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`Image(
    painter = painterResource(id = R.drawable.avatar),
    contentDescription = null,
    modifier = Modifier
        .clip(CircleShape)
        .border(2.dp, Color.Black, CircleShape)
)`}
              </pre>
            </div>

            <p className="text-gray-700 mb-6">
              👉 The border follows the circle because clip came first.
              Switch them, and you&apos;ll get a square border around a circle.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TL;DR ⚡</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Modifiers apply in order, top to bottom.</li>
              <li>Think of them as a chain of transformations.</li>
              <li>Always check the sequence if your UI looks &quot;off.&quot;</li>
            </ul>

            <p className="text-gray-700 mb-4">
              In Compose, one misplaced modifier can mean the difference between a pixel-perfect design and a broken layout.
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
