'use client'
import Link from 'next/link'

export default function RememberVsRememberSaveablePost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=remember%20vs%20rememberSaveable%20in%20Jetpack%20Compose%20🤔%20${encodeURIComponent(postUrl)}`
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
                Jetpack Compose
              </span>
              <span className="text-sm text-gray-500">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              remember vs rememberSaveable in Jetpack Compose 🤔
            </h1>
            <p className="text-gray-600 text-lg">
              If you&apos;ve ever built a screen in Jetpack Compose and wondered why your state resets on rotation or process death, you&apos;ve probably hit the remember vs rememberSaveable confusion. Let&apos;s break it down.
            </p>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>September 15, 2025</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">remember 🧠</h2>
            <p className="text-gray-700 mb-4">
              Stores state only in memory.
            </p>
            <p className="text-gray-700 mb-4">
              Survives recompositions.
            </p>
            <p className="text-gray-700 mb-6">
              BUT… lost on configuration changes (rotation, dark mode toggle) or process death.
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`var text by remember { mutableStateOf("") }`}
              </pre>
            </div>

            <p className="text-gray-700 mb-6">
              👉 Good for ephemeral UI state (scroll position, animations, toggles).
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">rememberSaveable 💾</h2>
            <p className="text-gray-700 mb-4">
              Stores state in memory + Bundle (or custom saver).
            </p>
            <p className="text-gray-700 mb-4">
              Survives recompositions and config changes.
            </p>
            <p className="text-gray-700 mb-6">
              Restores automatically after process death.
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`var text by rememberSaveable { mutableStateOf("") }`}
              </pre>
            </div>

            <p className="text-gray-700 mb-6">
              👉 Use for user inputs (form fields, text, selections) that should persist across rotations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">When rememberSaveable Fails</h2>
            <p className="text-gray-700 mb-4">
              <strong>Custom objects need custom savers:</strong>
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`// ❌ This won't work - custom objects need custom savers
data class User(val name: String, val age: Int)
var user by rememberSaveable { mutableStateOf(User("", 0)) } // Crashes!

// ✅ This works - with custom saver
var user by rememberSaveable(
    saver = Saver(
        save = { mapOf("name" to it.name, "age" to it.age) },
        restore = { User(it["name"] as String, it["age"] as Int) }
    )
) { mutableStateOf(User("", 0)) }`}
              </pre>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Performance Consideration</h2>
            <p className="text-gray-700 mb-6">
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">rememberSaveable</code> has slight overhead since it serializes to Bundle, so don&apos;t use it for frequently changing states like animation values.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Quick Decision Tree</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Text input, form data, user selections</strong> → <code className="bg-gray-100 px-2 py-1 rounded text-sm">rememberSaveable</code></li>
              <li><strong>Animation states, scroll positions, temporary UI flags</strong> → <code className="bg-gray-100 px-2 py-1 rounded text-sm">remember</code></li>
              <li><strong>Custom objects</strong> → <code className="bg-gray-100 px-2 py-1 rounded text-sm">remember</code> + manual save/restore OR custom saver</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Real-World Examples</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Form Input (Use rememberSaveable)</h3>
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`@Composable
fun LoginForm() {
    var email by rememberSaveable { mutableStateOf("") }
    var password by rememberSaveable { mutableStateOf("") }

    Column {
        TextField(
            value = email,
            onValueChange = { email = it },
            label = { Text("Email") }
        )
        TextField(
            value = password,
            onValueChange = { password = it },
            label = { Text("Password") }
        )
    }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Animation State (Use remember)</h3>
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`@Composable
fun AnimatedButton() {
    var isPressed by remember { mutableStateOf(false) }
    val scale by animateFloatAsState(
        targetValue = if (isPressed) 0.9f else 1f
    )

    Button(
        modifier = Modifier
            .scale(scale)
            .pointerInput(Unit) {
                detectTapGestures(
                    onPress = {
                        isPressed = true
                        tryAwaitRelease()
                        isPressed = false
                    }
                )
            },
        onClick = { }
    ) {
        Text("Press me")
    }
}`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">TL;DR ⚡</h3>
              <p className="text-blue-800 mb-2">
                Use <code className="bg-blue-100 px-2 py-1 rounded text-sm">remember</code> for short-lived UI states.
              </p>
              <p className="text-blue-800 mb-2">
                Use <code className="bg-blue-100 px-2 py-1 rounded text-sm">rememberSaveable</code> when the state matters across rotations or process death.
              </p>
              <p className="text-blue-800">
                Think of it like this:
                <br />
                🧠 <code className="bg-blue-100 px-2 py-1 rounded text-sm">remember</code> = memory only
                <br />
                💾 <code className="bg-blue-100 px-2 py-1 rounded text-sm">rememberSaveable</code> = memory + save/restore
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Wrapping Up</h2>
            <p className="text-gray-700 mb-6">
              The key is understanding the lifecycle of your state and choosing the right tool for the job. When in doubt, ask yourself: &quot;Would my users be frustrated if this state disappeared after a rotation?&quot; If yes, use <code className="bg-gray-100 px-2 py-1 rounded text-sm">rememberSaveable</code>.
            </p>

            <p className="text-gray-700">
              What state management patterns have you found most useful in Compose? Share your experiences!
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
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}