'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'

interface SeriesNavigationProps {
  seriesTitle: string
  currentStage: number
  totalStages: number
  stages: Array<{
    title: string
    slug: string
    completed?: boolean
    comingSoon?: boolean
  }>
}

export default function SeriesNavigation({
  seriesTitle,
  currentStage,
  totalStages,
  stages
}: SeriesNavigationProps) {
  const currentIndex = currentStage - 1
  const prevStage = currentIndex > 0 ? stages[currentIndex - 1] : null
  const nextStage = currentIndex < stages.length - 1 ? stages[currentIndex + 1] : null

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 my-8">
      {/* Series Header */}
      <div className="flex items-center gap-3 mb-4">
        <BookOpen className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-900">{seriesTitle}</h3>
        <span className="text-sm text-gray-500">
          Stage {currentStage} of {totalStages}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Progress</span>
          <span>{Math.round((currentStage / totalStages) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStage / totalStages) * 100}%` }}
          />
        </div>
      </div>

      {/* Stage List */}
      <div className="grid gap-2 mb-6">
        {stages.map((stage, index) => {
          const stageNumber = index + 1
          const isCurrent = stageNumber === currentStage
          const isCompleted = stageNumber < currentStage || stage.completed
          const isComingSoon = stage.comingSoon

          const stageContent = (
            <>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 ${
                  isCurrent
                    ? 'bg-blue-600 text-white'
                    : isCompleted
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {isCompleted && !isCurrent ? '✓' : stageNumber}
              </div>
              <span
                className={`text-sm ${
                  isCurrent ? 'font-medium text-blue-900' : isComingSoon ? 'text-gray-400' : 'text-gray-700'
                }`}
              >
                {stage.title}
              </span>
              {isComingSoon && (
                <span className="ml-auto text-xs px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full whitespace-nowrap">
                  Coming soon
                </span>
              )}
            </>
          )

          if (isComingSoon) {
            return (
              <div
                key={stage.slug}
                className="flex items-center gap-3 p-3 rounded-lg opacity-50 cursor-default select-none"
              >
                {stageContent}
              </div>
            )
          }

          return (
            <Link
              key={stage.slug}
              href={`/blog/posts/${stage.slug}`}
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                isCurrent
                  ? 'bg-blue-50 border border-blue-200'
                  : 'hover:bg-gray-50'
              }`}
            >
              {stageContent}
            </Link>
          )
        })}
      </div>

      {/* Previous/Next Navigation */}
      <div className="flex justify-between pt-4 border-t border-gray-200">
        {prevStage ? (
          <Link
            href={`/blog/posts/${prevStage.slug}`}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous: {prevStage.title}
          </Link>
        ) : (
          <div />
        )}

        {nextStage && !nextStage.comingSoon ? (
          <Link
            href={`/blog/posts/${nextStage.slug}`}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            Next: {nextStage.title}
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : nextStage?.comingSoon ? (
          <span className="flex items-center gap-2 text-sm text-gray-400 cursor-default">
            Next: {nextStage.title}
            <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full">Coming soon</span>
          </span>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}