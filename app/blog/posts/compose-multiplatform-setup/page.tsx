import Link from 'next/link'
import CodeSnippet from '../../components/CodeSnippet'
import SeriesNavigation from '../../components/SeriesNavigation'

const composeMultiplatformSeries = {
  title: "Complete Compose Multiplatform Guide",
  stages: [
    { title: "Setting Up Compose Multiplatform: From Zero to Hello World", slug: "compose-multiplatform-setup" },
    { title: "Building Your First Shared UI Components", slug: "compose-multiplatform-ui-basics" },
    { title: "Taking It to iOS", slug: "compose-multiplatform-ios" },
    { title: "Adding Real State Management (Favorites Feature)", slug: "compose-multiplatform-state-management" },
    { title: "Deploying Your Compose Multiplatform App", slug: "compose-multiplatform-deployment" }
  ]
}

export default function ComposeMultiplatformSetupPost() {
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
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              Compose Multiplatform
            </span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
              🎯 Deep Dive
            </span>
            <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
              📚 Part 1/5
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Setting Up Compose Multiplatform: From Zero to Hello World
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>September 21, 2025</span>
            <span>•</span>
            <span>15 min read</span>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Everything you need to know to start building cross-platform apps with Compose Multiplatform.
            We'll cover project setup, dependencies, and build your first shared UI that runs on both iOS and Android.
          </p>
        </div>

        {/* Series Navigation */}
        <SeriesNavigation
          seriesTitle={composeMultiplatformSeries.title}
          currentStage={1}
          totalStages={5}
          stages={composeMultiplatformSeries.stages}
        />

        {/* Article Content */}
        <article className="bg-white rounded-lg p-8 shadow-sm border">
          <div className="prose prose-lg max-w-none">

            {/* Introduction Section */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-8">
              Jetpack Compose isn't just for Android anymore. With Compose Multiplatform (CMP), you can write one UI codebase in Kotlin and run it across Android, iOS, and Desktop. In this first part of the series, we'll set up a CMP project using JetBrains' Kotlin Multiplatform Wizard and get it running on Desktop.
            </p>

            {/* Step 1 */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Generate the Project</h2>
            <p className="text-gray-700 mb-4">
              Go to <a href="https://kmp.jetbrains.com/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Kotlin Multiplatform Wizard</a>.
            </p>

            <p className="text-gray-700 mb-4">Select:</p>
            <ul className="list-none space-y-2 text-gray-700 mb-6">
              <li>✅ Android</li>
              <li>✅ iOS</li>
              <li>✅ Desktop</li>
              <li>✅ iOS UI = Compose</li>
              <li>✅ Include Tests</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Click "New Project", download, and open it in IntelliJ IDEA.
            </p>

            <p className="text-gray-700 mb-4">Your project will look like this:</p>

            <CodeSnippet
              language="text"
              title="Project Structure"
              code={`shared/
  └── src/
      ├── commonMain/   # shared UI + logic
      ├── androidMain/  # Android-specific
      ├── iosMain/      # iOS-specific
      └── desktopMain/  # Desktop-specific`}
              showLineNumbers={false}
            />

            {/* Step 2 */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Run on Desktop</h2>
            <p className="text-gray-700 mb-4">
              In <code className="bg-gray-100 px-2 py-1 rounded text-sm">desktopMain/kotlin/Main.kt</code> you'll find:
            </p>

            <CodeSnippet
              language="kotlin"
              title="Main.kt"
              code={`fun main() = application {
    Window(onCloseRequest = ::exitApplication) {
        Text("Hello, Compose Multiplatform!")
    }
}`}
            />

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Quick Tip:</strong> Select Desktop run config in IntelliJ.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-8">
              ▶ Run → Your first CMP app opens in a native window.
            </p>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-green-700">
                    <strong>Ready for More?</strong> In Part 2, we'll start building a real app UI and share it across platforms.
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