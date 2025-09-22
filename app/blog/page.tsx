'use client'

import Link from 'next/link'
import { useState } from 'react'
import SubscriptionModal from './components/SubscriptionModal'

// Series definition
const composeMultiplatformSeries = {
  title: "Complete Compose Multiplatform Guide",
  description: "Build cross-platform apps from setup to deployment",
  stages: [
    {
      title: "Setting Up Compose Multiplatform: From Zero to Hello World",
      slug: "compose-multiplatform/setup",
      stage: 1
    },
    {
      title: "Building Your First Shared UI Components",
      slug: "compose-multiplatform/ui-basics",
      stage: 2
    },
    {
      title: "Taking It to iOS",
      slug: "compose-multiplatform/ios",
      stage: 3
    },
    {
      title: "Adding Real State Management (Favorites Feature)",
      slug: "compose-multiplatform/state-management",
      stage: 4
    },
  ]
}

const blogPosts = [
  // Compose Multiplatform Series
  {
    id: 10,
    title: "Build & Run a Compose Multiplatform App",
    excerpt: "Everything you need to know to start building cross-platform apps with Compose Multiplatform. Project setup, dependencies, and your first shared UI. Continue through all 4 parts to build a complete app.",
    category: "Compose Multiplatform",
    readTime: "15 min read",
    date: "2025-09-21",
    slug: "compose-multiplatform/setup",
    type: "deep-dive",
    series: "compose-multiplatform",
    seriesStage: 1
  },
  {
    id: 11,
    title: "Building Your First Shared UI Components",
    excerpt: "Learn to create reusable UI components that work seamlessly across iOS and Android platforms.",
    category: "Compose Multiplatform",
    readTime: "20 min read",
    date: "2025-09-22",
    slug: "compose-multiplatform/ui-basics",
    type: "deep-dive",
    series: "compose-multiplatform",
    seriesStage: 2
  },
  {
    id: 12,
    title: "Taking It to iOS",
    excerpt: "Bring your shared UI to iOS using SwiftUI and UIViewController integration.",
    category: "Compose Multiplatform",
    readTime: "25 min read",
    date: "2025-09-23",
    slug: "compose-multiplatform/ios",
    type: "deep-dive",
    series: "compose-multiplatform",
    seriesStage: 3
  },
  {
    id: 13,
    title: "Adding Real State Management (Favorites Feature)",
    excerpt: "Refine your Quotes app with proper state management using ViewModel-style approach in shared code.",
    category: "Compose Multiplatform",
    readTime: "30 min read",
    date: "2025-09-24",
    slug: "compose-multiplatform/state-management",
    type: "deep-dive",
    series: "compose-multiplatform",
    seriesStage: 4
  },
  {
    id: 5,
    title: "remember vs rememberSaveable in Jetpack Compose 🤔",
    excerpt: "If you've ever built a screen in Jetpack Compose and wondered why your state resets on rotation or process death, you've probably hit the remember vs rememberSaveable confusion. Let's break it down.",
    category: "Jetpack Compose",
    readTime: "4 min read",
    date: "2025-09-15",
    slug: "remember-vs-remembersaveable",
    type: "quick"
  },
  {
    id: 4,
    title: "App Startup API: Speed Up Your Launch in 5 Minutes",
    excerpt: "Speed matters on Android. The Jetpack App Startup API helps you clean up messy initialization code,...",
    category: "Android Development",
    readTime: "2 min read",
    date: "2025-09-10",
    slug: "app-startup-api",
    type: "quick"
  },
  {
    id: 3,
    title: "SharedPreferences vs DataStore: Which One Should You Use?",
    excerpt: "Why DataStore is the modern, async, and safer choice for Android apps...",
    category: "Android Development",
    readTime: "4 min read",
    date: "2025-09-06",
    slug: "shared-preferences-datastore",
    type: "quick"
  },
  {
    id: 1,
    title: "React Native vs Native: The Interactive Decision Guide",
    excerpt: "Stop debating and start deciding. Use this interactive tool to map your project needs to the right tech stack.",
    category: "Architecture Decision",
    readTime: "8 min read",
    date: "2025-08-30",
    slug: "react-native-vs-native-guide",
    type: "guide"
  },
  {
    id: 2,
    title: "5 React Native Performance Tips That Actually Work",
    excerpt: "Stop your app from lagging with these proven optimization techniques",
    category: "React Native",
    readTime: "3 min read",
    date: "2025-08-17",
    slug: "react-native-performance",
    type: "quick"
  }
]

export default function BlogPage() {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false)

  // Filter posts to show only part 1 of series (or posts without series)
  const displayPosts = blogPosts.filter(post =>
    !post.series || post.seriesStage === 1
  )

  return (
    <div className="min-h-screen bg-white">
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
              <Link href="/blog" className="text-blue-600 font-medium">Home</Link>
              <Link href="/blog/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/blog/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mobile Development Made Simple
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Bite-sized tips and tricks for mobile app developers.
            Learn one concept at a time, build better apps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Reading
            </Link>
            <button
              onClick={() => setIsSubscriptionModalOpen(true)}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Posts</h2>
          <p className="text-gray-600">Quick, practical tips to level up your mobile development skills</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {displayPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/posts/${post.slug}`}
              className="block"
            >
              <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-md border border-blue-200">
                      {post.category}
                    </span>
                    {post.type === 'guide' && (
                      <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-md border border-emerald-200">
                        Guide
                      </span>
                    )}
                    {post.type === 'quick' && (
                      <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-md border border-amber-200">
                        Quick Tip
                      </span>
                    )}
                    {post.series && (
                      <span className="px-2 py-1 bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 text-xs font-medium rounded-md border border-violet-200">
                        Series • {post.seriesStage}/4
                      </span>
                    )}
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
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

      <SubscriptionModal
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
      />
    </div>
  )
}