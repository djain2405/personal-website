'use client'
import Link from 'next/link'

export default function CredentialManagerPost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=Credential%20Manager%3A%20The%20New%20Standard%20for%20Login%20on%20Android%20🔐✨%20${encodeURIComponent(postUrl)}`
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
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Android
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Security
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                Authentication
              </span>
              <span className="text-sm text-gray-500">6 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Credential Manager: The New Standard for Login on Android 🔐✨
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Nov 15, 2025</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 text-lg font-medium">
              Passwords, passkeys, Google Sign-In, autofill… Android logins used to be a maze.
              Credential Manager fixes that by giving us one simple API for every sign-in method.
            </p>

            <p className="text-gray-700 mb-6">
              If you&apos;re still juggling multiple flows - this is your sign to upgrade.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔑 What Is Credential Manager?</h2>

            <p className="text-gray-700 mb-6">
              A unified Jetpack API that handles:
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
              <ul className="list-none pl-0 space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">🔐</span>
                  <div>
                    <strong>Passkeys</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">🔑</span>
                  <div>
                    <strong>Passwords</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">🔵</span>
                  <div>
                    <strong>Google Sign-In</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✍️</span>
                  <div>
                    <strong>Autofill</strong>
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 font-medium">
              All through a single request.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <p className="text-gray-700">
                No more branching logic. No more separate UI. No more user confusion.
              </p>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">⚡ Why It Matters</h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-6">
              <ul className="list-none pl-0 space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">🔐</span>
                  <div>
                    <strong>Passkeys by default</strong> → more secure than passwords
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">⚡</span>
                  <div>
                    <strong>Less friction</strong> → fewer taps, higher conversion
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✨</span>
                  <div>
                    <strong>Consistent UI</strong> → feels cleaner and modern
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">🚀</span>
                  <div>
                    <strong>Future-proof</strong> → Google is steering everything here
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
              <p className="text-gray-800 text-lg">
                In Android 15/16, Credential Manager is now the <strong>recommended login pathway</strong>.
              </p>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🧩 How to Use It</h2>

            <p className="text-gray-700 mb-6">
              Here&apos;s the minimum setup for fetching a login credential:
            </p>

            <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
              <pre className="text-sm text-gray-100">
                {`val request = GetCredentialRequest(
    listOf(PasswordCredentialOption(), PublicKeyCredentialOption())
)

val result = credentialManager.getCredential(context, request)
val credential = result.credential`}
              </pre>
            </div>

            <p className="text-gray-700 mb-6">
              You&apos;ll get back either:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <ul className="list-none pl-0 space-y-2 text-gray-700">
                <li>📌 A password</li>
                <li>📌 A passkey</li>
                <li>📌 A Google account (if enabled)</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 font-medium">
              All without managing separate providers.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">💡 Pro Tip</h2>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <p className="text-gray-800 mb-4">
                If you support passkeys, you automatically get password-free login with:
              </p>
              <ul className="list-none pl-0 space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">🔒</span>
                  <div>
                    <strong>Better security</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">⚡</span>
                  <div>
                    <strong>Faster UX</strong>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">🛠️</span>
                  <div>
                    <strong>Reduced support issues</strong>
                  </div>
                </li>
              </ul>
              <p className="text-gray-800 mt-4 italic">
                Your users will thank you - even if they don&apos;t know why.
              </p>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🪄 TL;DR</h2>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 mb-6 rounded-r-lg">
              <p className="text-gray-800 mb-4 text-lg font-semibold">
                Credential Manager is the future of login on Android.
              </p>
              <p className="text-gray-800 mb-4">
                If your app still uses separate sign-in flows, upgrading takes minutes and pays off immediately.
              </p>
              <p className="text-gray-800 mb-4 font-medium">
                Less code. More security. Better UX.
              </p>
              <p className="text-gray-800 text-xl font-bold">
                Win-win-win.
              </p>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🧩 Key Takeaways</h2>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <ul className="list-none pl-0 space-y-2 text-gray-700">
                <li>✅ Credential Manager unifies all Android login methods</li>
                <li>✅ Single API for passwords, passkeys, and Google Sign-In</li>
                <li>✅ Recommended approach in Android 15/16</li>
                <li>✅ Passkeys provide superior security and UX</li>
                <li>✅ Easy migration with immediate benefits</li>
              </ul>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔗 Learn More</h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Want to dive deeper into Credential Manager?
              </p>
              <a
                href="https://developer.android.com/identity/sign-in/credential-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm bg-white px-4 py-2 rounded border border-blue-300 hover:border-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Android Credential Manager Documentation →
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
