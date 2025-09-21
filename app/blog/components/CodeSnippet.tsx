'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeSnippetProps {
  code: string
  language: string
  title?: string
  showLineNumbers?: boolean
}

export default function CodeSnippet({
  code,
  language,
  title,
  showLineNumbers = true
}: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code: ', err)
    }
  }

  const lines = code.split('\n')

  return (
    <div className="my-6 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span className="text-sm font-medium text-gray-300">{title}</span>
          <span className="text-xs text-gray-400 uppercase">{language}</span>
        </div>
      )}

      <div className="relative">
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors group"
          title="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400 group-hover:text-white" />
          )}
        </button>

        <pre className="p-4 pr-16 overflow-x-auto text-sm">
          <code className="text-gray-300">
            {showLineNumbers ? (
              lines.map((line, index) => (
                <div key={index} className="flex">
                  <span className="text-gray-500 select-none w-8 text-right mr-4 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="flex-1">{line}</span>
                </div>
              ))
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  )
}