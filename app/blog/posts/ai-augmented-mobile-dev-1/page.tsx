'use client'
import Link from 'next/link'
import CodeSnippet from '../../components/CodeSnippet'
import SeriesNavigation from '../../components/SeriesNavigation'

const seriesStages = [
  {
    title: "My 30-Minute Daily Workflow",
    slug: "ai-augmented-mobile-dev-1",
  },
  {
    title: "5 Prompts I Use Constantly",
    slug: "ai-augmented-mobile-dev-2",
  },
  {
    title: "Debugging Mobile Bugs with AI",
    slug: "ai-augmented-mobile-dev-3",
  },
  {
    title: "Using AI to Learn New Mobile APIs Faster",
    slug: "ai-augmented-mobile-dev-4",
  },
  {
    title: "Using AI as a Second Code Reviewer",
    slug: "ai-augmented-mobile-dev-5",
  },
  {
    title: "Where AI Actually Fails in Mobile Development",
    slug: "ai-augmented-mobile-dev-6",
    comingSoon: true,
  },
]

const specPrompt = `I'm building [feature].
Context: [app type, constraints].
Create a bite-sized implementation plan with:
1) assumptions
2) data model
3) API surface
4) UI states
5) edge cases
6) test plan
Keep it to 10 bullets max.`

const draftPrompt = `Generate a minimal, production-lean starter implementation for [Android/iOS] that includes:
- UI state sealed type / enum
- ViewModel (or equivalent)
- One screen with loading/empty/error/success
Keep it minimal and readable.`

const debugPrompt = `Here's the stack trace + relevant code.

1. Explain what's happening in plain English.
2. Give 3 likely root causes (ranked).
3. For each, give the smallest experiment to confirm/deny.`

const reviewPrompt = `Review this code like a senior mobile engineer.
Flag: lifecycle issues, performance traps, state bugs, accessibility, and test gaps.
Be specific and propose improvements.`

export default function AIAugmentedMobileDev1Post() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=The%20AI-Augmented%20Mobile%20Developer%20%231%3A%20My%2030-Minute%20Daily%20Workflow%20${encodeURIComponent(postUrl)}`
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
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                AI Workflow
              </span>
              <span className="px-2 py-1 bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 text-xs font-medium rounded-md border border-violet-200">
                Series &bull; 1/6
              </span>
              <span className="text-sm text-gray-500">10 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The AI-Augmented Mobile Developer #1: My 30-Minute Daily Workflow
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Mar 4, 2026</span>
              <span className="mx-2">&bull;</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              AI isn&apos;t replacing mobile developers.<br />
              But it is becoming the best &ldquo;second brain&rdquo; we&apos;ve ever had, if you use it intentionally.
            </p>

            <p className="text-gray-700 mb-4">
              The mistake I see most people make is treating AI like:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• autocomplete for entire features, or</li>
              <li>• a magic search engine.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The better model is:
            </p>

            <p className="text-gray-700 mb-6 font-semibold">
              AI as a structured partner that accelerates thinking and reduces busywork.
            </p>

            <p className="text-gray-700 mb-6">
              Here&apos;s the 30-minute daily workflow I use to turn AI into a reliable coding copilot, without losing engineering judgment.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step 1 (5 min): Turn Your Task Into a Spec</h2>

            <p className="text-gray-700 mb-6">
              Before you write code, ask AI to turn your vague goal into a small spec.
            </p>

            <CodeSnippet
              code={specPrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-4">
              Why this works:
            </p>

            <p className="text-gray-700 mb-6">
              It prevents wandering and gives you a checklist you can execute quickly.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step 2 (10 min): Generate a &ldquo;Starter Draft&rdquo; (Not Final Code)</h2>

            <p className="text-gray-700 mb-4">
              Use AI for what it&apos;s best at: blank page &rarr; first draft.
            </p>

            <p className="text-gray-700 mb-4">
              Good AI asks for mobile scaffolding:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Compose screen skeleton with UI states</li>
              <li>• SwiftUI view scaffolding</li>
              <li>• Basic ViewModel structure</li>
              <li>• Data mapping helpers</li>
              <li>• Test scaffolding (unit + UI tests)</li>
            </ul>

            <CodeSnippet
              code={draftPrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-6 font-semibold">
              Rule: AI writes scaffolding. You write the real logic and integrations.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step 3 (10 min): Debug Faster With &ldquo;Explain + Hypothesize&rdquo;</h2>

            <p className="text-gray-700 mb-6">
              When something breaks, don&apos;t ask AI &ldquo;fix it.&rdquo;<br />
              Ask it to reason.
            </p>

            <CodeSnippet
              code={debugPrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-6">
              This turns AI into a debugging partner instead of a guess machine.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step 4 (5 min): Use AI as a &ldquo;PR Reviewer&rdquo;</h2>

            <p className="text-gray-700 mb-4">
              Before you open a PR, ask AI to review for:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Edge cases</li>
              <li>• Performance traps</li>
              <li>• Lifecycle bugs</li>
              <li>• Privacy/security footguns</li>
              <li>• Naming and readability</li>
            </ul>

            <CodeSnippet
              code={reviewPrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-6">
              This catches things humans miss when they&apos;re &ldquo;too close&rdquo; to the work.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Guardrails: How to Avoid AI Traps</h2>

            <p className="text-gray-700 mb-6">
              AI is powerful, but it&apos;s not a source of truth.
            </p>

            <p className="text-gray-700 mb-4">
              Use AI for:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Scaffolding</li>
              <li>• Exploration</li>
              <li>• Reasoning about tradeoffs</li>
              <li>• Test ideas</li>
              <li>• Documentation digestion</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Don&apos;t use AI for:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Security-critical logic without review</li>
              <li>• Complex concurrency without validation</li>
              <li>• &ldquo;Copy/paste whole features&rdquo;</li>
              <li>• Anything you can&apos;t explain afterward</li>
            </ul>

            <p className="text-gray-700 mb-6 font-semibold">
              Litmus test: If I can&apos;t explain the code clearly, it doesn&apos;t ship.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TL;DR</h2>

            <p className="text-gray-700 mb-4">
              A great AI workflow isn&apos;t &ldquo;AI writes my app.&rdquo;<br />
              It&apos;s:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• 5 min: clarify the spec</li>
              <li>• 10 min: generate a starter draft</li>
              <li>• 10 min: debug with hypotheses</li>
              <li>• 5 min: pre-PR review</li>
            </ul>

            <p className="text-gray-700 mb-6 font-semibold">
              That&apos;s how AI becomes a productivity partner, without lowering your bar.
            </p>

            <SeriesNavigation
              seriesTitle="The AI-Augmented Mobile Developer"
              currentStage={1}
              totalStages={6}
              stages={seriesStages}
            />
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
                &larr; Back to all posts
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
