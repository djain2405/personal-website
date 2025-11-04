'use client'
import Link from 'next/link'
import SeriesNavigation from '../../../components/SeriesNavigation'

const onDeviceAISeries = {
  title: "On-Device AI Series",
  stages: [
    { title: "Running AI Locally on iPhone - No Cloud Needed", slug: "on-device-ai/ios-coreml", completed: true },
    { title: "On-Device AI, Part 2 - Running Image Classification on Android with TensorFlow Lite", slug: "on-device-ai/android-tflite", completed: true },
    { title: "On-Device AI, Part 3 - What Actually Happens When AI Runs on Your Phone", slug: "on-device-ai/what-happens", completed: true },
    { title: "On-Device AI, Part 4 - Designing AI Experiences That Feel Magical", slug: "on-device-ai/designing-ai-experiences" }
  ]
}

export default function DesigningAIExperiencesPost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=🎨%20On-Device%20AI%2C%20Part%204%20%E2%80%94%20Designing%20AI%20Experiences%20That%20Feel%20Magical%20${encodeURIComponent(postUrl)}`
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
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                On-Device AI
              </span>
              <span className="px-3 py-1 bg-pink-100 text-pink-800 text-sm font-medium rounded-full">
                UX Design
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                📚 Part 4/4
              </span>
              <span className="text-sm text-gray-500">6 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎨 On-Device AI, Part 4 - Designing AI Experiences That Feel Magical
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Nov 3, 2025</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Series Navigation */}
          <SeriesNavigation
            seriesTitle={onDeviceAISeries.title}
            currentStage={4}
            totalStages={4}
            stages={onDeviceAISeries.stages}
          />

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 text-lg">
              We&apos;ve seen what on-device AI can do.
              <br />
              Now let&apos;s talk about how it <em>feels</em>.
            </p>

            <p className="text-gray-700 mb-6">
              Over the past few weeks, I&apos;ve built on-device demos for iPhone (Core ML) and Android (TensorFlow Lite), both recognize what&apos;s in a photo in milliseconds.
            </p>

            <p className="text-gray-700 mb-6">
              But accuracy alone doesn&apos;t make AI feel intelligent.
              <br />
              <strong>Design does.</strong>
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">💡 The Real Challenge: Perception</h2>

            <p className="text-gray-700 mb-6">
              When AI runs locally, everything is fast, so users expect magic.
              <br />
              That means the micro-moments matter more than the math.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
              <div className="space-y-4 text-gray-800">
                <div className="flex items-start">
                  <span className="mr-3 text-lg font-bold">Feedback:</span>
                  <p>How quickly does the UI respond to an action?</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-lg font-bold">Emotion:</span>
                  <p>Does the interaction feel confident or hesitant?</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-lg font-bold">Trust:</span>
                  <p>Does the user understand why a prediction appeared?</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6 text-lg font-medium italic">
              A well-timed animation can create more trust than an extra 5% accuracy.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🪄 A Tiny Demo: Smart Label v2</h2>

            <p className="text-gray-700 mb-6">
              I rebuilt my image-classifier demo to focus purely on experience.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Here&apos;s what changed:</strong>
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 mb-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 text-purple-600">✨</span>
                  <div>
                    The result appears with a <strong>soft spring animation</strong> (speed feels human).
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-purple-600">✨</span>
                  <div>
                    The confidence number is replaced by a <strong>phrase</strong> - &ldquo;Definitely,&rdquo; &ldquo;Probably,&rdquo; or &ldquo;Maybe.&rdquo;
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-purple-600">✨</span>
                  <div>
                    The <strong>color pulse changes with confidence</strong> (green = certain, yellow = unsure).
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-purple-600">✨</span>
                  <div>
                    A <strong>subtle haptic tap</strong> confirms that something happened.
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 text-lg">
              It&apos;s still the same AI model.
              <br />
              But it feels like a <strong>conversation</strong> - not computation.
            </p>

            {/* Demo Section */}
            <div className="my-8 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">📱 See It In Action</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col items-center">
                  <div className="mb-3 text-center">
                    <span className="text-sm font-semibold text-gray-700 bg-white px-3 py-1 rounded-full border border-gray-200">
                      Demo video
                    </span>
                  </div>
                  <div className="border-4 border-white rounded-2xl shadow-lg overflow-hidden">
                    <img
                      src="/blog/assets/smart_label_demo.gif"
                      alt="iOS Smart Label Demo"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* <div className="flex flex-col items-center">
                  <div className="mb-3 text-center">
                    <span className="text-sm font-semibold text-gray-700 bg-white px-3 py-1 rounded-full border border-gray-200">
                      Android • Compose + TFLite
                    </span>
                  </div>
                  <div className="border-4 border-white rounded-2xl shadow-lg overflow-hidden">
                    <img
                      src="/blog/assets/on_device_ai_android_demo.gif"
                      alt="Android Smart Label Demo"
                      className="w-full h-auto"
                    />
                  </div>
                </div> */}
              </div>

              <div className="text-center">
                <a
                  href="https://github.com/djain2405/Mobile-AI-Experiments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-md"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Source Code on GitHub
                </a>
              </div>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🧠 Why This Matters</h2>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <p className="text-gray-800 text-lg font-mono text-center">
                AI perception = (speed × feedback) + emotion
              </p>
            </div>

            <p className="text-gray-700 mb-6">
              When intelligence happens instantly, design becomes the storyteller.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>On-device AI gives us:</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-semibold text-gray-900">Speed</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🔒</div>
                <div className="font-semibold text-gray-900">Privacy</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">📶</div>
                <div className="font-semibold text-gray-900">Offline access</div>
              </div>
            </div>

            <p className="text-gray-700 mb-6 text-lg font-medium">
              Design turns that into something users can <em>feel</em>.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🧩 The Takeaway</h2>

            <p className="text-gray-700 mb-6">
              On-device AI is the new frontier of &ldquo;human-in-the-loop&rdquo; design.
              <br />
              The technology lives in silicon; the magic lives in the milliseconds.
            </p>

            <p className="text-gray-700 mb-4">
              If you&apos;re building mobile experiences powered by AI, start with empathy:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
              <ul className="space-y-2 text-gray-800">
                <li>• How will it feel when it&apos;s right?</li>
                <li>• And how will it guide users when it&apos;s wrong?</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 text-lg font-medium italic">
              That&apos;s where the future of AI lives — not just on-device, but in-experience.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🪄 TL;DR</h2>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <ul className="list-none pl-0 space-y-2 text-gray-700">
                <li>✅ Built a UX-focused on-device AI demo</li>
                <li>✅ Used animation, tone, and feedback to build trust</li>
                <li>✅ Showed that design &gt; accuracy for perceived intelligence</li>
                <li>✅ Next up → Shipping and iterating AI features at scale</li>
              </ul>
            </div>
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
