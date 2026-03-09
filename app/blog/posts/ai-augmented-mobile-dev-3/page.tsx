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
    comingSoon: true,
  },
  {
    title: "Where AI Actually Fails in Mobile Development",
    slug: "ai-augmented-mobile-dev-6",
    comingSoon: true,
  },
]

const stackTracePrompt = `Here is a stack trace and the relevant code.

Explain:
1. what the error means in plain English
2. where the failure is most likely happening
3. the top 3 likely root causes
4. the fastest way to confirm each one`

const lifecyclePrompt = `I'm seeing this bug in a mobile app:
[describe bug]

Relevant code:
[paste code]

Help me reason about this from a lifecycle perspective.
What could happen if this screen recomposes / reloads / backgrounds / restores?
What timing-related issues should I look for?`

const concurrencyPrompt = `I have a bug that seems timing-related.

Here is the code path:
[paste code]

Can you identify possible race conditions, overlapping async work, stale state issues,
or ordering problems?
Then suggest the smallest debugging steps to validate each theory.`

const uiBugPrompt = `I have a weird UI bug:
[describe it]

Here is the screen code:
[paste code]

Can you walk through what the UI may be doing step by step?
Point out places where recomposition, unstable state, layout changes, or side effects
could be causing this behavior.`

export default function AIAugmentedMobileDev3Post() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=The%20AI-Augmented%20Mobile%20Developer%20%233%3A%20Debugging%20Mobile%20Bugs%20with%20AI%20${encodeURIComponent(postUrl)}`
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
                Series &bull; 3/6
              </span>
              <span className="text-sm text-gray-500">8 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The AI-Augmented Mobile Developer #3: Debugging Mobile Bugs with AI
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Mar 7, 2026</span>
              <span className="mx-2">&bull;</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              AI is great at generating code.<br />
              But one of the most underrated ways to use it is for something much more useful: debugging.
            </p>

            <p className="text-gray-700 mb-6">
              Not because it magically knows the answer.<br />
              But because it helps you reason faster.
            </p>

            <p className="text-gray-700 mb-6">
              When I use AI well during debugging, it becomes less like &ldquo;fix this for me&rdquo; and more like:
              help me think clearly about what could be happening.
            </p>

            <p className="text-gray-700 mb-6 font-semibold">
              That shift makes all the difference.
            </p>

            <p className="text-gray-700 mb-6">
              Here&apos;s how I use AI to debug mobile bugs more effectively.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Stack Traces: Turn Noise Into Meaning</h2>

            <p className="text-gray-700 mb-4">
              A stack trace can be useful. It can also be overwhelming.
            </p>

            <p className="text-gray-700 mb-4">
              Especially when:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• the trace is long</li>
              <li>• the real issue is buried</li>
              <li>• the crash is happening in framework code</li>
              <li>• multiple layers are involved</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Instead of staring at it and guessing, I use AI to translate it into plain English.
            </p>

            <CodeSnippet
              code={stackTracePrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-4 font-semibold">Why this works:</p>

            <p className="text-gray-700 mb-4">
              AI is good at pattern recognition, summarization, and surfacing likely explanations.
            </p>

            <p className="text-gray-700 mb-6">
              It doesn&apos;t replace investigation. It just gets you to the first useful hypothesis faster.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Lifecycle Issues: Ask AI to Map the Timing</h2>

            <p className="text-gray-700 mb-4">
              A lot of mobile bugs are not logic bugs. They&apos;re timing bugs.
            </p>

            <p className="text-gray-700 mb-4">
              Things like:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• a screen updating after it&apos;s already gone</li>
              <li>• state being reset on rotation</li>
              <li>• callbacks firing after the view is destroyed</li>
              <li>• side effects running more than once</li>
            </ul>

            <p className="text-gray-700 mb-4">
              These are frustrating because the code can look &ldquo;correct&rdquo; in isolation. This is where AI can help map the lifecycle flow.
            </p>

            <CodeSnippet
              code={lifecyclePrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-4 font-semibold">Why this works:</p>

            <p className="text-gray-700 mb-4">
              That often surfaces questions like:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• Is this effect tied to the wrong lifecycle?</li>
              <li>• Is the observer being registered twice?</li>
              <li>• Is this state actually preserved?</li>
              <li>• Could this be running after disposal?</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Sometimes the biggest value isn&apos;t the answer. It&apos;s the reminder to check the right dimension of the bug.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Concurrency Problems: Use AI to Generate Hypotheses</h2>

            <p className="text-gray-700 mb-4">
              Concurrency bugs are some of the most annoying bugs in mobile development because they can feel random, inconsistent, and impossible to reproduce.
            </p>

            <p className="text-gray-700 mb-4">
              You tap twice. You navigate quickly. A coroutine finishes later than expected. A network response overwrites newer UI state.
            </p>

            <p className="text-gray-700 mb-4">
              AI is surprisingly useful here when you ask it to think in terms of race conditions and ordering.
            </p>

            <CodeSnippet
              code={concurrencyPrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-4 font-semibold">Why this works:</p>

            <p className="text-gray-700 mb-4">
              AI can quickly point out:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• work that may overlap</li>
              <li>• missing cancellation</li>
              <li>• shared mutable state</li>
              <li>• places where old results may win over new ones</li>
            </ul>

            <p className="text-gray-700 mb-6">
              The goal is not blind trust. It&apos;s faster reasoning.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Weird UI Bugs: Use AI to Model What the UI Is Doing</h2>

            <p className="text-gray-700 mb-4">
              Some bugs are just strange.
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• a button flickers</li>
              <li>• a list jumps</li>
              <li>• a loading state flashes</li>
              <li>• a screen recomposes too often</li>
              <li>• a view looks correct, but behaves wrong</li>
            </ul>

            <p className="text-gray-700 mb-4">
              These are often the hardest to debug because they don&apos;t fail loudly. AI helps when you ask it to model the UI behavior step by step.
            </p>

            <CodeSnippet
              code={uiBugPrompt}
              language="text"
              title="Prompt (copy/paste)"
              showLineNumbers={false}
            />

            <p className="text-gray-700 mb-4 font-semibold">Why this works:</p>

            <p className="text-gray-700 mb-4">
              This is especially useful in declarative UI systems where the issue may come from:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• state being recreated</li>
              <li>• values not being remembered</li>
              <li>• recomposition boundaries</li>
              <li>• unstable inputs</li>
              <li>• side effects in the wrong place</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Sometimes you don&apos;t need a fix yet. You just need a better mental model of what the UI is doing.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. The Best Way to Use AI for Debugging</h2>

            <p className="text-gray-700 mb-4">
              The biggest mistake is asking: &ldquo;Fix this.&rdquo;
            </p>

            <p className="text-gray-700 mb-4">
              That usually produces overconfident answers.
            </p>

            <p className="text-gray-700 mb-4">
              A much better approach is asking AI to do one of these:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• explain</li>
              <li>• rank hypotheses</li>
              <li>• identify blind spots</li>
              <li>• suggest debugging steps</li>
              <li>• challenge your assumptions</li>
            </ul>

            <p className="text-gray-700 mb-6 font-semibold">
              That turns AI into a debugging partner, not a guess generator.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">My Rule of Thumb</h2>

            <p className="text-gray-700 mb-4">
              When debugging with AI, I try to give it:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• the exact error</li>
              <li>• only the relevant code</li>
              <li>• clear context</li>
              <li>• a specific question</li>
            </ul>

            <p className="text-gray-700 mb-4">
              And then I ask it to help me narrow possibilities, not pretend certainty.
            </p>

            <p className="text-gray-700 mb-6">
              Because good debugging is rarely about instantly finding the answer. It&apos;s about reducing the search space intelligently.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TL;DR</h2>

            <p className="text-gray-700 mb-4">
              AI can be genuinely useful for debugging mobile bugs when you use it to:
            </p>

            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li>• translate stack traces into plain English</li>
              <li>• reason about lifecycle timing</li>
              <li>• spot concurrency risks</li>
              <li>• model weird UI behavior step by step</li>
              <li>• generate better hypotheses, not confident guesses</li>
            </ul>

            <p className="text-gray-700 mb-6 font-semibold">
              It won&apos;t replace engineering judgment. But it can help you get unstuck faster. That&apos;s what makes it a good partner.
            </p>

            <SeriesNavigation
              seriesTitle="The AI-Augmented Mobile Developer"
              currentStage={3}
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
