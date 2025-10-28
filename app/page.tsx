'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Sparkles, MapPin, Code, Mic, BookOpen, Mail, Github, Linkedin, Twitter, ExternalLink, Play } from 'lucide-react'
import Link from 'next/link'
import AnimatedCounter from './components/AnimatedCounter'
import SkillCloud from './components/SkillCloud'
import Timeline from './components/Timeline'
import ContactForm from './components/ContactForm'

// Speaking events data
const speakingEvents = [
  {
    title: 'Android Makers',
    description: 'Jetpack DataStore',
    videoUrl: 'https://youtu.be/rKGZTvL9vdg?si=adVeAWvHNNaoNoR7', // Replace with your actual video URL
    thumbnail: 'https://img.youtube.com/vi/rKGZTvL9vdg/maxresdefault.jpg',
    year: '2022'
  },
  {
    title: 'Droidcon Italy',
    description: 'Clean Architecture with Jetpack Compose',
    videoUrl: 'https://youtu.be/25VjadHR0zs?si=Y6SKujqZWVIbRYnq',
    thumbnail: '/images/speaking/droidcon_italy.png',
    year: '2021'
  },
  {
    title: 'DroidKaigi',
    description: 'Kotlin Multiplatform',
    videoUrl: 'https://youtu.be/pKMXXiV_aGc?si=iTCmnED3ae0_YnYP',
    thumbnail: 'https://img.youtube.com/vi/pKMXXiV_aGc/maxresdefault.jpg',
    year: '2021'
  }
]

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center section-padding gradient-bg min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 mx-auto mb-8"
          >
            <Sparkles className="w-full h-full text-purple-600" />
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Building Apps, <br />Connecting People ✨
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-700">
            I&apos;m <span className="font-bold text-purple-600">Divya</span> – Engineering Leader, App Builder, Speaker, Explorer, Manifestor.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
            >
              Work With Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section-padding max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-8 text-center">
            About Me
          </motion.h2>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              {/* Journey Introduction */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-l-4 border-purple-400">
                <div className="flex items-center gap-3 text-lg">
                  <MapPin className="text-purple-600 flex-shrink-0" />
                  <span className="font-medium text-gray-800">
                    India → US → building apps → speaking on global stages → manifesting big dreams ✨
                  </span>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Code className="text-purple-600 w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        Engineering Leadership & Mobile Innovation
                      </h3>
                      <div className="space-y-1">
                        <p className="text-gray-700">🌟 10+ years crafting mobile experiences & scaling engineering teams</p>
                        <p className="text-gray-600">💡 Leading humans + building apps that make life easier & more fun</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-pink-100 rounded-lg">
                      <Mic className="text-pink-600 w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        Global Tech Conference Speaker
                      </h3>
                      <p className="text-gray-700">🎤 Shared insights at Android Makers, Droidcon, DroidKaigi & beyond</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Sparkles className="text-blue-600 w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        Passionate Explorer & Dreamer
                      </h3>
                      <div className="space-y-1">
                        <p className="text-gray-700">💫 Growth mindset & manifestation enthusiast</p>
                        <p className="text-gray-600">✈️ Road tripper, camper, and forever curious about the world</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-purple-200 to-pink-200 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-white shadow-lg">
                  {/* Using regular img tag for better compatibility */}
                  <img
                    src="/images/profile.png?v=2"
                    alt="Divya - Engineering Leader and Speaker"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      console.error('Image failed to load:', e);
                      e.currentTarget.src = '/images/placeholder.svg';
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                <AnimatedCounter end={12} suffix="+" />
              </div>
              <p className="text-gray-600 text-sm leading-tight">Years in Mobile Engineering & Leadership</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">
                <AnimatedCounter end={20} suffix="+" />
              </div>
              <p className="text-gray-600 text-sm leading-tight">Apps & Features Launched (directly impacting large users)</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <p className="text-gray-600 text-sm leading-tight">Global Tech Conferences Spoken At</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <p className="text-gray-600 text-sm leading-tight">Engineers Mentored</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <p className="text-gray-600 text-sm leading-tight">National Parks Explored 🌍 (and counting!)</p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills & Expertise</h3>
            <SkillCloud />
          </motion.div>
        </motion.div>
      </section>

      {/* Journey Timeline */}
      <section className="bg-gray-100 section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            My Journey
          </motion.h2>
          <Timeline />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-white section-padding shadow-inner">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-12 text-center">
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              className="group p-8 bg-gray-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">GameTime App</h3>
              <p className="text-gray-700 mb-6">Gametime is the app that helps *you* score deals to all your favorite events! Now featuring Gametime Ticket Coverage, the most comprehensive service and protection policy in ticketing - included free with all purchases. Gametime is the top app for deals on last minute tickets to sports, concerts, and theater.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Cross-Platform</span>
              </div>
              <div className="flex gap-3">
                <button
                  className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors cursor-pointer"
                  onClick={() => window.open('https://apps.apple.com/us/app/gametime-last-minute-tickets/id630687854', '_blank')}
                >
                  App Store <ExternalLink className="w-4 h-4" />
                </button>
                <button
                  className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors cursor-pointer"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.gametime.gametime&hl=en_US', '_blank')}
                >
                  Play Store <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group p-8 bg-gray-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">HiRoad App</h3>
              <p className="text-gray-700 mb-6">Insurance app that rewards safe driving with personalized rates and real-time feedback. Helping drivers save money while staying safe on the road.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Swift</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Kotlin</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Native APIs</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Insurance Tech</span>
              </div>
              <div className="flex gap-3">
                <button
                  className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors cursor-pointer"
                  onClick={() => window.open('https://apps.apple.com/us/app/hiroad-car-insurance/id1269731942', '_blank')}
                >
                  App Store <ExternalLink className="w-4 h-4" />
                </button>
                <button
                  className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors cursor-pointer"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=xyz.blueowl.mobile.hiroad&hl=en_US', '_blank')}
                >
                  Play Store <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group p-8 bg-gray-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => window.open('https://github.com/djain2405/trivia-game', '_blank')}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Trivia Game</h3>
              <p className="text-gray-700 mb-6">Interactive multiplayer trivia game with real-time scoring, multiple game modes, and engaging UI. Perfect for team building!</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">HTML5</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">CSS3</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Node.js</span>
              </div>
              <button className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors cursor-pointer">
                View on GitHub <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <p className="text-gray-600 mb-6">Want to see more of my work?</p>
            <button
              className="btn-secondary"
              onClick={() => window.open('https://github.com/djain2405', '_blank')}
            >
              View All Projects on GitHub
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Speaking Section */}
      <section className="section-padding max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-8 text-center">
            Speaking
          </motion.h2>

          <motion.div variants={fadeInUp} className="text-center space-y-8">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Clips from my talks at <span className="font-semibold">Android Makers</span>, <span className="font-semibold">Droidcon</span>, <span className="font-semibold">DroidKaigi</span> & more.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {speakingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => window.open(event.videoUrl, '_blank')}
                >
                  <div className="relative w-full h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    {event.thumbnail ? (
                      <img
                        src={event.thumbnail}
                        alt={`${event.title} thumbnail`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Mic className="w-12 h-12 text-purple-600" />
                    )}

                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-3 shadow-lg">
                        <Play className="w-8 h-8 text-purple-600 fill-current" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg group-hover:text-purple-600 transition-colors">{event.title}</h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{event.year}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{event.description}</p>

                    {/* Watch video link */}
                    <div className="flex items-center gap-2 text-purple-600 font-medium text-sm pt-2 group-hover:text-purple-700 transition-colors">
                      <Play className="w-4 h-4" />
                      Watch Talk
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn-secondary"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
            >
              Book Me To Speak
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section className="bg-gray-100 section-padding">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-12 text-center">
            Latest from the Blog
          </motion.h2>

          {/* Featured Post */}
          <motion.div variants={fadeInUp} className="mb-12">
            <Link href="/blog/posts/predictive-back-gesture">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                      ⚡ Latest Post
                    </span>
                    <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                      Android UX
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform">
                    Predictive Back Gesture: The Subtle UX Win You Need to Enable
                  </h3>

                  <p className="text-white/90 text-lg mb-6">
                    Android 16 is making Predictive Back Navigation the default and it&apos;s one of those updates that looks tiny but feels huge. Learn how to enable this smooth navigation feature in your app.
                  </p>

                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <span>Oct 27, 2025</span>
                    <span>•</span>
                    <span>4 min read</span>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    <span>Read Full Article</span>
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/blog">
              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">Mobile With Me</h3>
                <p className="text-gray-600 mb-6">Bite-sized mobile development tips & tricks. Quick, practical insights to level up your iOS & Android skills.</p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  <span>Read Blog</span>
                  <BookOpen className="w-4 h-4" />
                </div>
              </motion.div>
            </Link>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => window.open('https://leadbuildmanifest.substack.com/', '_blank')}
            >
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-pink-600 transition-colors">Lead Build Manifest Newsletter</h3>
              <p className="text-gray-600 mb-6">Weekly insights at the intersection of tech leadership, mobile app development, and manifestation mindset.. Join the community!</p>
              <div className="flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors">
                <span>Subscribe on Substack</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding text-center max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-8">
            Let&apos;s Collab 🌟
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-12">
            Have an idea, project, or just want to say hi? I&apos;d love to hear from you!
          </motion.p>

          <motion.div variants={fadeInUp} className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/djain2405" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-300">
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/divyajain2405/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-300">
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a href="mailto:divyajain2405@gmail.com" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-300">
              <Mail className="w-6 h-6 text-red-500" />
            </a>
          </motion.div>

          <ContactForm />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 border-t border-gray-200">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          © 2025 Deevaa. Made with ✨ and lots of coffee. All Rights Reserved.
        </motion.p>
      </footer>
    </div>
  )
}