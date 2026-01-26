'use client'
import Link from 'next/link'

export default function MobileAppTrustworthyPost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=What%20Makes%20a%20Mobile%20App%20Feel%20Trustworthy%20${encodeURIComponent(postUrl)}`
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
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Mobile Trust
              </span>
              <span className="text-sm text-gray-500">9 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes a Mobile App Feel Trustworthy
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Jan 25, 2026</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Fast apps get attention.<br />
              Calm apps reduce friction.<br />
              But trustworthy apps are the ones users return to.
            </p>

            <p className="text-gray-700 mb-6">
              Trust in mobile apps isn&apos;t built through privacy policies or security badges.
              It&apos;s built through behavior : the small, repeated signals an app sends every time someone uses it.
            </p>

            <p className="text-gray-700 mb-6">
              Here&apos;s how I think about trust as a mobile developer, across Android, iOS, and modern declarative stacks.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Trust Starts With Predictability</h2>

            <p className="text-gray-700 mb-6">
              Nothing erodes trust faster than surprise.
            </p>

            <p className="text-gray-700 mb-4">
              Users lose confidence when:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• They&apos;re logged out without warning</li>
              <li>• Navigation suddenly changes</li>
              <li>• State disappears after a background switch</li>
              <li>• Back behaves differently than expected</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Trustworthy apps:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Preserve state</li>
              <li>• Respect system navigation</li>
              <li>• Behave consistently across sessions</li>
            </ul>

            <p className="text-gray-700 mb-6 font-semibold">
              Predictability isn&apos;t boring, it&apos;s reassuring.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Permission Timing Is a Trust Signal</h2>

            <p className="text-gray-700 mb-6">
              Asking for access is not neutral.
            </p>

            <p className="text-gray-700 mb-4">
              When an app asks for permissions:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Too early → it feels intrusive</li>
              <li>• Too late → it feels suspicious</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Trustworthy apps:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Ask after intent is clear</li>
              <li>• Explain through behavior, not dialogs</li>
              <li>• Defer anything that isn&apos;t immediately necessary</li>
            </ul>

            <p className="text-gray-700 mb-6 font-semibold">
              If a user understands why you&apos;re asking, trust is already halfway built.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Authentication Should Fade Into the Background</h2>

            <p className="text-gray-700 mb-6">
              Re-auth prompts, broken sessions, and repeated login screens quietly damage trust.
            </p>

            <p className="text-gray-700 mb-4">
              Strong login flows:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Stay out of the way</li>
              <li>• Use system-managed credentials when possible</li>
              <li>• Don&apos;t interrupt a user mid-flow</li>
            </ul>

            <p className="text-gray-700 mb-6 font-semibold">
              When users don&apos;t have to think about authentication, they feel safer not less secure.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Trust Is Lost When Progress Disappears</h2>

            <p className="text-gray-700 mb-4">
              Few things feel worse than:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• A form resetting</li>
              <li>• A draft disappearing</li>
              <li>• A flow restarting after a configuration change</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Trustworthy apps treat user effort as sacred.
            </p>

            <p className="text-gray-700 mb-4">
              That means:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Saving state early</li>
              <li>• Restoring seamlessly</li>
              <li>• Never punishing users for interruptions they didn&apos;t cause</li>
            </ul>

            <p className="text-gray-700 mb-6 font-semibold">
              Reliability is a form of respect.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Calm + Fast Enable Trust</h2>

            <p className="text-gray-700 mb-6">
              Trust doesn&apos;t exist in isolation.
            </p>

            <p className="text-gray-700 mb-4">
              Apps that feel trustworthy usually also:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Respond quickly</li>
              <li>• Avoid unnecessary interruptions</li>
              <li>• Keep layouts stable</li>
              <li>• Communicate waiting clearly</li>
            </ul>

            <p className="text-gray-700 mb-6 font-semibold">
              Speed and calm create the conditions for trust.<br />
              Without them, even secure apps feel unreliable.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. AI Must Behave, Not Explain</h2>

            <p className="text-gray-700 mb-6">
              As AI becomes more common in mobile apps, trust depends less on disclaimers and more on behavior.
            </p>

            <p className="text-gray-700 mb-4">
              Trustworthy AI:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Is predictable</li>
              <li>• Respects privacy</li>
              <li>• Doesn&apos;t overreach</li>
              <li>• Helps quietly</li>
            </ul>

            <p className="text-gray-700 mb-6 font-semibold">
              If AI feels unpredictable or invasive, trust collapses; no matter how powerful it is.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Big Idea: Trust Is an Engineering Outcome</h2>

            <p className="text-gray-700 mb-6">
              Trust isn&apos;t just a product or design goal.
            </p>

            <p className="text-gray-700 mb-4">
              It&apos;s shaped by:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• State management decisions</li>
              <li>• Navigation handling</li>
              <li>• Permission strategy</li>
              <li>• Error recovery</li>
              <li>• Performance discipline</li>
            </ul>

            <p className="text-gray-700 mb-6 font-semibold">
              Every technical choice either builds confidence or chips away at it.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TL;DR</h2>

            <p className="text-gray-700 mb-4">
              A mobile app feels trustworthy when it:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Behaves predictably</li>
              <li>• Respects user intent</li>
              <li>• Preserves progress</li>
              <li>• Asks for less</li>
              <li>• Interrupts thoughtfully</li>
              <li>• Makes reliability the default</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Trust isn&apos;t something your app claims to have.<br />
              It&apos;s something your app earns, quietly, over time.
            </p>

            <p className="text-gray-700 mb-6 font-semibold">
              This completes the mental model I&apos;m carrying forward:<br />
              Fast. Calm. Trustworthy.
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
