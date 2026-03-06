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
]

const implementationPlanPrompt = `I'm building a mobile feature: [describe feature].

Context:
- Platform: Android / iOS
- Architecture: [MVVM / Clean / etc]

Create a small implementation plan including:
1. data model
2. UI states
3. edge cases
4. test cases
5. potential pitfalls`

const uiScaffoldingPrompt = `Generate a minimal Compose (or SwiftUI) screen that includes:

- loading state
- empty state
- error state
- success state

Keep the implementation simple and readable.`

const debugPrompt = `Here is a stack trace and the relevant code.

Explain:
1. what the error means
2. the three most likely causes
3. the fastest way to confirm each cause`

const refactorPrompt = `Refactor this code to improve:

- readability
- naming
- structure

Do not change the logic.
Explain the improvements.`

const reviewPrompt = `Review this mobile code like a senior engineer.

Look for:
- performance issues
- lifecycle bugs
- state management problems
- edge cases
- test gaps`

export default function AIAugmentedMobileDev2Post() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=The%20AI-Augmented%20Mobile%20Developer%20%232%3A%205%20Prompts%20I%20Use%20Constantly%20${encodeURIComponent(postUrl)}`
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
                Series &bull; 2/2
              </span>
              <span className="text-sm text-gray-500">8 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The AI-Augmented Mobile Developer #2: 5 Prompts I Use Constantly
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Mar 5, 2026</span>
              <span className="mx-2">&bull;</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              In the first post of this series, I shared my 30-minute AI workflow for mobile development.
            </p>

            <p className="text-gray-700 mb-6">
              But the real productivity boost doesn&apos;t come from AI alone, it comes from good prompts.
            </p>

            <p className="text-gray-700 mb-6">
              Over time, I&apos;ve settled on a small set of prompts that I use almost every day while building mobile apps.
            </p>

            <p className="text-gray-700 mb-6">
              Here are five that consistently save me time.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Turn a vague task into an implementation plan</h2>

            <p className="text-gray-700 mb-4">
              Before writing code, I often ask AI to help structure the work.
            </p>

            <CodeSnippet
              code={implementationPlanPrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-4 font-semibold">Why this helps:</p>
            <p className="text-gray-700 mb-6">
              It converts a vague idea into a clear checklist.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Generate minimal UI scaffolding</h2>

            <p className="text-gray-700 mb-4">
              AI is excellent at turning a concept into a basic UI skeleton.
            </p>

            <CodeSnippet
              code={uiScaffoldingPrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-4 font-semibold">Why this helps:</p>
            <p className="text-gray-700 mb-6">
              You avoid staring at a blank file and can immediately start refining.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Debug a confusing error</h2>

            <p className="text-gray-700 mb-4">
              Instead of searching forums for an hour, I often paste the error and ask AI to reason through it.
            </p>

            <CodeSnippet
              code={debugPrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-4 font-semibold">Why this helps:</p>
            <p className="text-gray-700 mb-6">
              It turns debugging into hypothesis testing instead of guessing.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Refactor messy code</h2>

            <p className="text-gray-700 mb-4">
              AI is surprisingly good at improving readability.
            </p>

            <CodeSnippet
              code={refactorPrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-4 font-semibold">Why this helps:</p>
            <p className="text-gray-700 mb-6">
              You get a second opinion on code clarity.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Do a quick code review</h2>

            <p className="text-gray-700 mb-4">
              Before opening a PR, I often run one last check.
            </p>

            <CodeSnippet
              code={reviewPrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-4 font-semibold">Why this helps:</p>
            <p className="text-gray-700 mb-6">
              It often catches things that are easy to overlook.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Real Trick</h2>

            <p className="text-gray-700 mb-4">
              The best prompts are not complicated.
            </p>

            <p className="text-gray-700 mb-4">
              They are specific, structured, and grounded in real engineering tasks.
            </p>

            <p className="text-gray-700 mb-6 font-semibold">
              AI becomes useful when you treat it like a thought partner, not an autopilot.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TL;DR</h2>

            <p className="text-gray-700 mb-4">Five prompts I use constantly:</p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Turn tasks into implementation plans</li>
              <li>• Generate UI scaffolding</li>
              <li>• Debug errors with hypotheses</li>
              <li>• Refactor messy code</li>
              <li>• Run a quick code review</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Small habits, but they add up.
            </p>

            <SeriesNavigation
              seriesTitle="The AI-Augmented Mobile Developer"
              currentStage={2}
              totalStages={2}
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
