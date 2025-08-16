'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'React Native', level: 95, color: 'bg-blue-500' },
  { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
  { name: 'iOS/Swift', level: 85, color: 'bg-gray-700' },
  { name: 'Android/Kotlin', level: 88, color: 'bg-green-600' },
  { name: 'Node.js', level: 80, color: 'bg-green-500' },
  { name: 'Firebase', level: 85, color: 'bg-yellow-500' },
  { name: 'GraphQL', level: 75, color: 'bg-pink-500' },
  { name: 'AWS', level: 70, color: 'bg-orange-500' },
  { name: 'Leadership', level: 92, color: 'bg-purple-500' },
  { name: 'Public Speaking', level: 88, color: 'bg-red-500' },
]

export default function SkillCloud() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-sm">{skill.name}</span>
              <span className="text-xs text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full ${skill.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}