'use client'

import { motion } from 'framer-motion'
import { MapPin, Briefcase, Award, Plane } from 'lucide-react'

const timelineData = [
  {
    year: '2023',
    title: 'Engineering Manager',
    description: 'From builder to leader - growing teams, scaling systems, and shipping outcomes.',
    icon: Briefcase,
    color: 'bg-purple-600',
  },
  {
    year: '2020–Present',
    title: 'Global Conference Speaker',
    description: 'Sharing on Android, architecture, and delightful UX at Droidcon, DroidKaigi, Android Makers & more.',
    icon: Award,
    color: 'bg-pink-500',
  },
  {
    year: '2014',
    title: 'US Chapter Begins',
    description: 'Moved to the USA - bigger canvas, bigger challenges, bigger growth.',
    icon: Plane,
    color: 'bg-blue-500',
  },
  {
    year: '2012',
    title: 'First App Published',
    description: 'Released my debut app - first users, first reviews, first “we’re so back” moment.',
    icon: Award,
    color: 'bg-green-500',
  },
  {
    year: '2011',
    title: 'Career Kickoff (India)',
    description: 'Jumped into mobile dev - learning fast, shipping faster, building the foundation.',
    icon: Briefcase,
    color: 'bg-orange-500',
  },
]

export default function Timeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative flex items-start"
          >
            {/* Timeline dot */}
            <div className={`relative z-10 w-12 h-12 ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
              <item.icon className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="ml-8 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {item.year}
                </span>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}