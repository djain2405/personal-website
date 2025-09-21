import Link from 'next/link'
import CodeSnippet from '../../components/CodeSnippet'
import SeriesNavigation from '../../components/SeriesNavigation'

const composeMultiplatformSeries = {
  title: "Complete Compose Multiplatform Guide",
  stages: [
    { title: "Setting Up Compose Multiplatform: From Zero to Hello World", slug: "compose-multiplatform-setup", completed: true },
    { title: "Building Your First Shared UI Components", slug: "compose-multiplatform-ui-basics" },
    { title: "Taking It to iOS", slug: "compose-multiplatform-ios" },
    { title: "Adding Real State Management (Favorites Feature)", slug: "compose-multiplatform-state-management" },
    { title: "Deploying Your Compose Multiplatform App", slug: "compose-multiplatform-deployment" }
  ]
}

export default function ComposeMultiplatformUIBasicsPost() {
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
              Series • 2/5
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Building Your First Shared UI Components
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>September 22, 2025</span>
            <span>•</span>
            <span>20 min read</span>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Learn to create reusable UI components that work seamlessly across iOS and Android platforms.
            We'll build interactive components with state management and explore how to handle platform differences.
          </p>
        </div>

        {/* Series Navigation */}
        <SeriesNavigation
          seriesTitle={composeMultiplatformSeries.title}
          currentStage={2}
          totalStages={5}
          stages={composeMultiplatformSeries.stages}
        />

        {/* Article Content */}
        <article className="bg-white rounded-lg p-8 shadow-sm border">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-8">
              Now that our CMP project is set up, let&apos;s build something useful. In this part, we&apos;ll create a small app: Quotes of the Day. We&apos;ll show a list of quotes, with the ability to favorite/unfavorite them — all written in shared UI code.
            </p>

            {/* Step 1 */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Create QuoteCard</h2>
            <p className="text-gray-700 mb-4">
              Inside <code className="bg-gray-100 px-2 py-1 rounded text-sm">commonMain</code>:
            </p>

            <CodeSnippet
              language="kotlin"
              title="QuoteCard.kt"
              code={`@Composable
fun QuoteCard(
    text: String,
    author: String,
    isFavorite: Boolean,
    onToggleFavorite: () -> Unit
) {
    Card(modifier = Modifier.padding(8.dp).fillMaxWidth()) {
        Column(Modifier.padding(16.dp)) {
            Text(text, style = MaterialTheme.typography.bodyLarge)
            Spacer(Modifier.height(8.dp))
            Text("- $author", style = MaterialTheme.typography.labelMedium)
            Spacer(Modifier.height(8.dp))
            Button(onClick = onToggleFavorite) {
                Text(if (isFavorite) "★ Unfavorite" else "☆ Favorite")
            }
        }
    }
}`}
            />

            {/* Step 2 */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Add QuotesScreen</h2>

            <CodeSnippet
              language="kotlin"
              title="QuotesScreen.kt"
              code={`data class Quote(val text: String, val author: String, var favorite: Boolean = false)

@Composable
fun QuotesScreen() {
    var quotes by remember {
        mutableStateOf(
            listOf(
                Quote("Compose once, run anywhere.", "JetBrains"),
                Quote("Simplicity is the soul of efficiency.", "Austin Freeman"),
                Quote("Stay hungry, stay foolish.", "Steve Jobs")
            )
        )
    }

    LazyColumn {
        items(quotes.size) { index ->
            val quote = quotes[index]
            QuoteCard(
                text = quote.text,
                author = quote.author,
                isFavorite = quote.favorite
            ) {
                quotes = quotes.toMutableList().also {
                    it[index] = it[index].copy(favorite = !quote.favorite)
                }
            }
        }
    }
}`}
            />

            {/* Step 3 */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Run on Android</h2>
            <p className="text-gray-700 mb-4">
              In <code className="bg-gray-100 px-2 py-1 rounded text-sm">androidMain/MainActivity.kt</code>:
            </p>

            <CodeSnippet
              language="kotlin"
              title="MainActivity.kt"
              code={`class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent { QuotesScreen() }
    }
}`}
            />

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Quick Tip:</strong> Select androidApp → ▶ Run → your app runs in emulator/device.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-green-700">
                    <strong>Continue the Journey:</strong> You now have a shared UI running on Desktop and Android. In Part 3, we&apos;ll bring iOS into the mix.
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