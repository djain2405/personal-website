'use client'
import Link from 'next/link'

export default function MobileAppCalmPost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=What%20Makes%20a%20Mobile%20App%20Feel%20Calm%20${encodeURIComponent(postUrl)}`
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
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                Mobile UX
              </span>
              <span className="text-sm text-gray-500">8 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes a Mobile App Feel Calm
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Jan 22, 2026</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Fast apps get attention.<br />
              Calm apps earn trust.
            </p>

            <p className="text-gray-700 mb-6">
              In a world full of notifications, prompts, banners, and interruptions, the apps that stand out in 2026 aren&apos;t just performant, they&apos;re mentally lightweight.
            </p>

            <p className="text-gray-700 mb-6">
              Calm isn&apos;t about doing less.<br />
              It&apos;s about doing the right things, at the right time, with restraint.
            </p>

            <p className="text-gray-700 mb-6">
              Here&apos;s the mental model I use to evaluate whether a mobile app feels calm, regardless of platform.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Calm Apps Interrupt Less</h2>

            <p className="text-gray-700 mb-4">
              Every dialog, permission prompt, and modal breaks a user&apos;s flow.
            </p>

            <p className="text-gray-700 mb-4">
              Calm apps:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Ask only when necessary</li>
              <li>• Delay requests until there&apos;s clear context</li>
              <li>• Avoid stacking interruptions back-to-back</li>
            </ul>

            <p className="text-gray-700 mb-6">
              If an app asks for attention before it earns trust, it creates friction instead of engagement.
            </p>

            <p className="text-gray-700 mb-6 font-semibold">
              Rule of thumb: If the user didn&apos;t initiate it, think twice before interrupting.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Calm Apps Are Predictable</h2>

            <p className="text-gray-700 mb-6">
              Predictability reduces cognitive load.
            </p>

            <p className="text-gray-700 mb-4">
              This shows up as:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Consistent navigation patterns</li>
              <li>• Familiar placement and back behavior</li>
              <li>• Transitions that explain where you&apos;re going</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Surprise might feel clever, but clarity feels calm.
            </p>

            <p className="text-gray-700 mb-6 font-semibold">
              When users can predict what happens next, they relax.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Calm Apps Don&apos;t Make the UI Jump</h2>

            <p className="text-gray-700 mb-6">
              Layout shifts create anxiety.
            </p>

            <p className="text-gray-700 mb-4">
              When content:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Reflows unexpectedly</li>
              <li>• Changes size mid-scroll</li>
              <li>• Reorders without explanation</li>
            </ul>

            <p className="text-gray-700 mb-6">
              …the app feels unstable, even if it&apos;s technically correct.
            </p>

            <p className="text-gray-700 mb-4">
              Calm apps:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Reserve space for loading states</li>
              <li>• Animate size changes deliberately</li>
              <li>• Avoid unnecessary recomposition or redraws</li>
            </ul>

            <p className="text-gray-700 mb-6 font-semibold">
              Stability is a form of kindness.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Calm Apps Reduce Decision Fatigue</h2>

            <p className="text-gray-700 mb-6">
              Too many choices is exhausting.
            </p>

            <p className="text-gray-700 mb-4">
              Calm experiences:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Highlight one primary action</li>
              <li>• Push secondary actions out of the way</li>
              <li>• Use sensible defaults</li>
              <li>• Avoid making users configure everything upfront</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Every extra decision costs mental energy.
            </p>

            <p className="text-gray-700 mb-6 font-semibold">
              Good defaults are one of the most underrated UX tools we have.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Calm Apps Handle Waiting Gracefully</h2>

            <p className="text-gray-700 mb-6">
              Waiting doesn&apos;t have to feel stressful.
            </p>

            <p className="text-gray-700 mb-4">
              Calm apps:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Show progress without drama</li>
              <li>• Avoid spinners that feel infinite</li>
              <li>• Let users keep moving when possible</li>
              <li>• Load incrementally instead of blocking everything</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Silence, freezing, or unexplained delays break trust quickly.
            </p>

            <p className="text-gray-700 mb-6 font-semibold">
              A calm app communicates even when it can&apos;t move forward yet.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Calm Apps Respect Attention</h2>

            <p className="text-gray-700 mb-6">
              The biggest difference between noisy apps and calm ones is restraint.
            </p>

            <p className="text-gray-700 mb-4">
              Calm apps:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Don&apos;t shout for attention</li>
              <li>• Don&apos;t overuse animations</li>
              <li>• Don&apos;t turn every event into a notification</li>
              <li>• Don&apos;t compete with the user&apos;s focus</li>
            </ul>

            <p className="text-gray-700 mb-6 font-semibold">
              They assume attention is valuable, not infinite.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Big Idea: Calm Is an Engineering Choice</h2>

            <p className="text-gray-700 mb-6">
              By 2025, mobile platforms made this clear:
            </p>

            <p className="text-gray-700 mb-6">
              <strong>Calm isn&apos;t just a design goal.</strong><br />
              It&apos;s shaped by:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• State management</li>
              <li>• Navigation decisions</li>
              <li>• Rendering stability</li>
              <li>• Permission timing</li>
              <li>• System integrations</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Every technical decision either adds friction or removes it.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TL;DR</h2>

            <p className="text-gray-700 mb-4">
              A mobile app feels calm when it:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Interrupts less</li>
              <li>• Behaves predictably</li>
              <li>• Keeps layouts stable</li>
              <li>• Reduces choices</li>
              <li>• Handles waiting gently</li>
              <li>• Respects attention and focus</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Users don&apos;t demand perfection.
            </p>

            <p className="text-gray-700 mb-6">
              They demand respect.
            </p>

            <p className="text-gray-700 mb-6 font-semibold">
              That&apos;s the experience I&apos;m aiming to build more of this year, across platforms.
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
