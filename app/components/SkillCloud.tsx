'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Server, Cloud, Users, Mic2, Brain, Zap } from 'lucide-react'

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Android/Kotlin', icon: '🤖' },
      { name: 'React Native', icon: '⚛️' },
      { name: 'iOS/Swift', icon: '🍎' },
      { name: 'Flutter', icon: '💙' }
    ]
  },
  {
    title: 'Leadership & Soft Skills',
    icon: Users,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Team Leadership', icon: '👥' },
      { name: 'Public Speaking', icon: '🎤' },
      { name: 'Mentoring', icon: '🌱' },
      { name: 'Product Strategy', icon: '🎯' }
    ]
  },
  {
    title: 'Languages & Frameworks',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'TypeScript', icon: '📘' },
      { name: 'JavaScript', icon: '🟡' },
      { name: 'Node.js', icon: '💚' },
      { name: 'Python', icon: '🐍' }
    ]
  },
  {
    title: 'Cloud & Backend',
    icon: Cloud,
    color: 'from-green-500 to-teal-500',
    skills: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'REST APIs', icon: '🔗' },
      { name: 'GraphQL', icon: '🚀' }
    ]
  },
]

export default function SkillCloud() {
  return (
    <div className="space-y-8">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
          className="space-y-4"
        >
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
              <category.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: categoryIndex * 0.1 + skillIndex * 0.05,
                  duration: 0.3
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group text-center"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors text-sm">
                    {skill.name}
                  </h4>
                </div>

                {/* Subtle accent dot */}
                <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Additional Expertise Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100"
      >
        <div className="flex items-center gap-3 mb-4">
          <Brain className="w-6 h-6 text-purple-600" />
          <h3 className="text-xl font-bold text-gray-900">Additional Expertise</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            'Agile Leadership', 'Scalable Architecture Design', 'Cross-platform Development', 'Code & Design Reviews',
            'UI/UX with Impact', 'Team Building & Mentorship', 'Conference Speaking', 'Technical Writing & Knowledge Sharing',
            'CI/CD & DevOps'
          ].map((expertise, index) => (
            <motion.span
              key={expertise}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-200 cursor-default border border-gray-200 hover:border-purple-300"
            >
              {expertise}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}