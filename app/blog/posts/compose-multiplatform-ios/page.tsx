import Link from 'next/link'
import CodeSnippet from '../../components/CodeSnippet'
import SeriesNavigation from '../../components/SeriesNavigation'

const composeMultiplatformSeries = {
  title: "Complete Compose Multiplatform Guide",
  stages: [
    { title: "Setting Up Compose Multiplatform: From Zero to Hello World", slug: "compose-multiplatform-setup", completed: true },
    { title: "Building Your First Shared UI Components", slug: "compose-multiplatform-ui-basics", completed: true },
    { title: "Taking It to iOS", slug: "compose-multiplatform-ios" },
    { title: "Adding Real State Management (Favorites Feature)", slug: "compose-multiplatform-state-management" }
  ]
}

export default function ComposeMultiplatformNavigationPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/blog" className="text-xl font-bold text-gray-900">Mobile With Me</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 text-sm">← Back to Blog</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="bg-white rounded-lg p-8 mb-8 shadow-sm border">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-md border border-blue-200">
              Compose Multiplatform
            </span>
            <span className="px-2 py-1 bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 text-xs font-medium rounded-md border border-violet-200">
              Series • 3/4
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Taking It to iOS
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>September 23, 2025</span>
            <span>•</span>
            <span>25 min read</span>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            So far we&apos;ve built shared UI and run it on Desktop + Android. Now let&apos;s take the same code to iOS.
            Learn how to bridge your Kotlin UI to iOS using SwiftUI and UIViewController.
          </p>
        </div>

        {/* Series Navigation */}
        <SeriesNavigation
          seriesTitle={composeMultiplatformSeries.title}
          currentStage={3}
          totalStages={4}
          stages={composeMultiplatformSeries.stages}
        />

        {/* Article Content */}
        <article className="bg-white rounded-lg p-8 shadow-sm border">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-8">
              So far we&apos;ve built shared UI and run it on Desktop + Android. Now let&apos;s take the same code to iOS.
            </p>

            {/* Step 1 */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Create ViewController in iosMain</h2>

            <CodeSnippet
              language="kotlin"
              title="MainViewController.kt (iosMain)"
              code={`fun MainViewController() = ComposeUIViewController {
    QuotesScreen()
}`}
            />

            {/* Step 2 */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Hook into Swift</h2>
            <p className="text-gray-700 mb-4">
              In <code className="bg-gray-100 px-2 py-1 rounded text-sm">iosApp</code>:
            </p>

            <CodeSnippet
              language="swift"
              title="ContentView.swift"
              code={`struct ContentView: UIViewControllerRepresentable {
    func makeUIViewController(context: Context) -> UIViewController {
        MainViewController()
    }
    func updateUIViewController(_ uiViewController: UIViewController, context: Context) {}
}`}
            />

            {/* Step 3 */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Run in Simulator</h2>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Quick Tip:</strong> Select iosApp run config in IntelliJ, or open in Xcode.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-8">
              ▶ Run → your app launches in iOS Simulator with the same UI.
            </p>


            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-green-700">
                    <strong>Continue Learning:</strong> Move on to Part 4 to learn about adding real state management
                    with a ViewModel-style approach for handling favorites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

      </main>
    </div>
  )
}