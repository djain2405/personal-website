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

const seniorReviewerPrompt = `Review this code like a senior mobile engineer.

Focus on:
- readability
- edge cases
- lifecycle issues
- performance concerns
- test coverage gaps

Explain any problems and suggest improvements.`

const edgeCasesPrompt = `Given this code, what edge cases might break it in a real mobile app?

Focus on lifecycle events, state changes, and asynchronous behavior.`

const checklistPrompt = `Based on your review, create a checklist of improvements I should consider before merging this code.`

export default function AIAugmentedMobileDev5Post() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=The%20AI-Augmented%20Mobile%20Developer%20%235%3A%20Using%20AI%20as%20a%20Second%20Code%20Reviewer%20${encodeURIComponent(postUrl)}`
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
                Series &bull; 5/6
              </span>
              <span className="text-sm text-gray-500">6 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The AI-Augmented Mobile Developer #5: Using AI as a Second Code Reviewer
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Mar 10, 2026</span>
              <span className="mx-2">&bull;</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Most developers understand the value of a good code review.
            </p>

            <p className="text-gray-700 mb-4">
              Another engineer can catch things you miss:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• edge cases</li>
              <li>• confusing logic</li>
              <li>• performance problems</li>
              <li>• architectural drift</li>
            </ul>

            <p className="text-gray-700 mb-4">
              But code reviews don&apos;t always happen instantly.
            </p>

            <p className="text-gray-700 mb-4">
              Sometimes you want a quick sanity check before opening a PR.
            </p>

            <p className="text-gray-700 mb-4">
              That&apos;s where AI can be surprisingly useful.
            </p>

            <p className="text-gray-700 mb-6 font-semibold">
              Not as a replacement for human review, but as a second set of eyes before the code leaves your branch.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why AI Works Well for Early Code Review</h2>

            <p className="text-gray-700 mb-4">
              When you&apos;ve been staring at a piece of code for hours, it&apos;s easy to miss problems.
            </p>

            <p className="text-gray-700 mb-4">
              AI has one advantage:
            </p>

            <p className="text-gray-700 mb-4 font-semibold">
              It looks at the code with zero context bias.
            </p>

            <p className="text-gray-700 mb-4">
              That makes it good at spotting things like:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• unclear naming</li>
              <li>• duplicated logic</li>
              <li>• missing edge cases</li>
              <li>• questionable structure</li>
            </ul>

            <p className="text-gray-700 mb-6">
              It&apos;s not perfect, but it&apos;s often enough to catch obvious issues early.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Ask AI to Review Like a Senior Engineer</h2>

            <p className="text-gray-700 mb-4">
              Instead of asking &ldquo;Is this code good?&rdquo;, give AI a clear review role.
            </p>

            <CodeSnippet
              code={seniorReviewerPrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-6">
              This encourages feedback that&apos;s closer to what you&apos;d get in a real review.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Catch Readability Problems</h2>

            <p className="text-gray-700 mb-4">
              Code reviews often focus heavily on readability.
            </p>

            <p className="text-gray-700 mb-4">
              AI is surprisingly good at identifying:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• confusing function names</li>
              <li>• deeply nested logic</li>
              <li>• overly complex functions</li>
              <li>• inconsistent patterns</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Sometimes the suggestions are simple, but useful.
            </p>

            <p className="text-gray-700 mb-4">
              Example feedback might include:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• breaking a function into smaller parts</li>
              <li>• improving naming</li>
              <li>• extracting reusable components</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Small improvements like these make future maintenance easier.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Surface Edge Cases You Didn&apos;t Consider</h2>

            <p className="text-gray-700 mb-4">
              Another strong use case is edge case discovery.
            </p>

            <p className="text-gray-700 mb-4">
              You might have tested the happy path, but forgotten scenarios like:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• empty data</li>
              <li>• partial results</li>
              <li>• race conditions</li>
              <li>• configuration changes</li>
            </ul>

            <CodeSnippet
              code={edgeCasesPrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-6">
              Even if the suggestions aren&apos;t perfect, they often highlight cases worth testing.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Identify Potential Performance Issues</h2>

            <p className="text-gray-700 mb-4">
              AI can also flag patterns that might cause performance issues.
            </p>

            <p className="text-gray-700 mb-4">
              For example:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• unnecessary recompositions</li>
              <li>• expensive work in UI layers</li>
              <li>• repeated data transformations</li>
              <li>• blocking operations on the main thread</li>
            </ul>

            <p className="text-gray-700 mb-6">
              It&apos;s not a profiler, but it can point out suspicious patterns.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Turn Feedback Into Action</h2>

            <p className="text-gray-700 mb-4">
              One useful trick is asking AI to convert feedback into a small checklist.
            </p>

            <CodeSnippet
              code={checklistPrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-6">
              This helps you turn vague feedback into concrete fixes.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Important Limitation</h2>

            <p className="text-gray-700 mb-4">
              AI is not a substitute for real code review.
            </p>

            <p className="text-gray-700 mb-4">
              It lacks:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• full project context</li>
              <li>• product knowledge</li>
              <li>• architectural history</li>
              <li>• team conventions</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Human reviewers are still essential.
            </p>

            <p className="text-gray-700 mb-4">
              But AI can help you arrive at the review in better shape.
            </p>

            <p className="text-gray-700 mb-6 font-semibold">
              Think of it as preparing your code before others see it.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TL;DR</h2>

            <p className="text-gray-700 mb-4">
              AI can act as a useful second reviewer when you use it to:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• check readability</li>
              <li>• surface edge cases</li>
              <li>• flag performance risks</li>
              <li>• challenge your assumptions</li>
            </ul>

            <p className="text-gray-700 mb-4">
              It won&apos;t replace human feedback.
            </p>

            <p className="text-gray-700 mb-6 font-semibold">
              But it can help you submit cleaner, more thoughtful code.
            </p>

            <SeriesNavigation
              seriesTitle="The AI-Augmented Mobile Developer"
              currentStage={5}
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
