import Link from 'next/link'
import Image from 'next/image'
import CodeSnippet from '../../../components/CodeSnippet'
import SeriesNavigation from '../../../components/SeriesNavigation'

const composeMultiplatformSeries = {
  title: "Complete Compose Multiplatform Guide",
  stages: [
    { title: "Setting Up Compose Multiplatform: From Zero to Hello World", slug: "compose-multiplatform/setup", completed: true },
    { title: "Building Your First Shared UI Components", slug: "compose-multiplatform/ui-basics", completed: true },
    { title: "Taking It to iOS", slug: "compose-multiplatform/ios", completed: true },
    { title: "Adding Real State Management (Favorites Feature)", slug: "compose-multiplatform/state-management" }
  ]
}

export default function ComposeMultiplatformStateManagementPost() {
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
              Series • 4/4
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Adding Real State Management (Favorites Feature)
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed">
            Refine your Quotes app with proper state management using ViewModel-style approach in shared code.
            Learn how to centralize state and manage favorites consistently across all platforms.
          </p>
        </div>

        {/* Series Navigation */}
        <SeriesNavigation
          seriesTitle={composeMultiplatformSeries.title}
          currentStage={4}
          totalStages={4}
          stages={composeMultiplatformSeries.stages}
        />

        {/* Article Content */}
        <article className="bg-white rounded-lg p-8 shadow-sm border">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-8">
              We&apos;ve got our Quotes app running across Android, iOS, and Desktop with shared UI. In this final part, let&apos;s refine the favorite/unfavorite feature and introduce proper state management.
            </p>

            <p className="text-gray-700 mb-8">
              Instead of holding mutable lists directly in the composable, we&apos;ll manage state using a ViewModel-style approach in shared code.
            </p>

            {/* Step 1 */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Create a Quote Model</h2>
            <p className="text-gray-700 mb-4">
              We already have a basic model:
            </p>

            <CodeSnippet
              language="kotlin"
              title="Quote.kt"
              code={`data class Quote(
    val id: Int,
    val text: String,
    val author: String,
    val isFavorite: Boolean = false
)`}
            />

            <p className="text-gray-700 mb-8">
              Adding an <code className="bg-gray-100 px-2 py-1 rounded text-sm">id</code> helps with stable updates.
            </p>

            {/* Step 2 */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Create a ViewModel (Shared Logic)</h2>
            <p className="text-gray-700 mb-4">
              Inside <code className="bg-gray-100 px-2 py-1 rounded text-sm">commonMain</code>, add:
            </p>

            <CodeSnippet
              language="kotlin"
              title="QuotesViewModel.kt"
              code={`class QuotesViewModel {
                private val _quotes = mutableStateListOf(
                  Quote(1, "Compose once, run anywhere.", "JetBrains"),
                  Quote(2, "Simplicity is the soul of efficiency.", "Austin Freeman"),
                  Quote(3, "Stay hungry, stay foolish.", "Steve Jobs")
              )
              val quotes: SnapshotStateList<Quote> = _quotes


              fun toggleFavorite(id: Int) {
                val index = _quotes.indexOfFirst { it.id == id }
                if (index != -1) {
                    _quotes[index] = _quotes[index].copy(isFavorite = !_quotes[index].isFavorite)
                }
            }
}`}
            />

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>👉 This centralizes the app&apos;s state in one place.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Update the Screen</h2>
            <p className="text-gray-700 mb-4">
              Now our UI observes the ViewModel&apos;s state instead of owning it directly.
            </p>

            <CodeSnippet
              language="kotlin"
              title="QuotesScreen.kt"
              code={`@Composable
fun QuotesScreen(viewModel: QuotesViewModel = QuotesViewModel()) {
  val quotes = viewModel.quotes

    LazyColumn {
        items(quotes.size) { index ->
            val quote = quotes[index]
            QuoteCard(
                text = quote.text,
                author = quote.author,
                isFavorite = quote.isFavorite
            ) {
                viewModel.toggleFavorite(quote.id)
            }
        }
    }
}`}
            />

            {/* Step 4 */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Run It</h2>
            <p className="text-gray-700 mb-4">
              On Desktop → <code className="bg-gray-100 px-2 py-1 rounded text-sm">Run Window {`{ QuotesScreen() }`}</code>.
            </p>
            <p className="text-gray-700 mb-4">
              On Android → <code className="bg-gray-100 px-2 py-1 rounded text-sm">setContent {`{ QuotesScreen() }`}</code>.
            </p>
            <p className="text-gray-700 mb-8">
              On iOS → <code className="bg-gray-100 px-2 py-1 rounded text-sm">ComposeUIViewController {`{ QuotesScreen() }`}</code>.
            </p>

            <p className="text-gray-700 mb-8">
              Now, toggling a favorite updates everywhere consistently.
            </p>

            {/* Outro */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Outro</h2>
            <p className="text-gray-700 mb-4">
              And that&apos;s a wrap 🎉 You&apos;ve built a cross-platform Quotes App with real state management:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>One shared UI codebase.</li>
              <li>ViewModel-style state handling.</li>
              <li>Favorites that persist across recompositions.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              From here, you could extend this with persistence (SQLDelight), or live data sources (Ktor), but the foundation is already solid.
            </p>

            {/* Final Result Screenshot */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Result</h2>
            <p className="text-gray-700 mb-4">
              Here&apos;s what our completed Quotes app looks like on Android:
            </p>

            <div className="mb-8 flex justify-center">
              <div className="max-w-xs rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 bg-gradient-to-b from-gray-50 to-gray-100 p-2">
                <Image
                  src="/images/quotes_of_the_day_screenshot.png"
                  alt="Quotes of the Day app showing three quotes with favorite/unfavorite buttons"
                  width={300}
                  height={600}
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-green-700">
                    <strong>🎉 Series Complete!</strong> You&apos;ve successfully built a complete Compose Multiplatform app
                    with shared UI and state management across Android, iOS, and Desktop.
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