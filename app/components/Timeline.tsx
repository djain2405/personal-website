'use client'

import { motion } from 'framer-motion'
import { MapPin, Briefcase, Award, Plane } from 'lucide-react'

const timelineData = [
  {
    year: '2024',
    title: 'Senior Engineering Leader',
    description: 'Leading mobile engineering teams, speaking at global conferences',
    icon: Briefcase,
    color: 'bg-purple-500'
  },
  {
    year: '2022',
    title: 'Conference Speaker',
    description: 'Started speaking at Android Makers, Droidcon, DroidKaigi',
    icon: Award,
    color: 'bg-pink-500'
  },
  {
    year: '2020',
    title: 'US Journey Begins',
    description: 'Moved to the US, new adventures and opportunities',
    icon: Plane,
    color: 'bg-blue-500'
  },
  {
    year: '2018',
    title: 'Mobile Engineering Focus',
    description: 'Specialized in React Native and cross-platform development',
    icon: Briefcase,
    color: 'bg-green-500'
  },
  {
    year: '2014',
    title: 'Engineering Career Start',
    description: 'Started mobile development journey in India',
    icon: MapPin,
    color: 'bg-orange-500'
  }
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