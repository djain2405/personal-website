'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Network, ArrowDown, Mail, Radio, Brain, MapPin, Battery, Users, ArrowLeft, ExternalLink } from 'lucide-react'

export default function LifeMesh() {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Back Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-purple-600"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back</span>
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center section-padding min-h-screen relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-amber-900 opacity-95">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        {/* Animated mesh network dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
                x: [
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50
                ],
                y: [
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50
                ]
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.5
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 relative z-10 max-w-5xl mx-auto"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-24 h-24 mx-auto mb-8"
          >
            <Network className="w-full h-full text-cyan-400" strokeWidth={1.5} />
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-white leading-tight">
            LifeMesh
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-300 to-amber-300 bg-clip-text text-transparent">
            When Connectivity Fails, Intelligence Takes Over.
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            An AI-driven mobile framework that lets phones connect, communicate, and coordinate - even without internet or cell towers.
          </p>

          <motion.button
            onClick={() => scrollToSection('how-it-works')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            Learn How It Works
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section id="how-it-works" className="section-padding bg-white">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              The Problem
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6 text-center">
            <p className="text-xl font-bold text-gray-800 leading-relaxed">
              Every disaster begins with silence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When networks collapse, information stops - but human need doesn&apos;t.
            </p>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From earthquakes to remote expeditions, millions lose access to vital communication when they need it most.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* The Vision Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-50 to-cyan-50">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              The Vision
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-8">
            <p className="text-xl font-bold text-center bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent leading-relaxed">
              What if phones could form their own intelligent networks?
            </p>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <p className="text-gray-700 leading-relaxed">
                LifeMesh turns smartphones into self-healing, peer-to-peer nodes powered by on-device AI. Each device becomes both a messenger and a relay - carrying critical updates through the crowd, no internet required.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* The Concept Section */}
      <section className="section-padding bg-white">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              The Concept
            </h2>
            <p className="text-lg font-semibold text-gray-700">
              On-Device AI + Mesh Networking = Offline Resilience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">Peer-to-Peer Links</h3>
              <p className="text-gray-700 leading-relaxed">
                Phones discover and connect locally over Bluetooth and Wi-Fi Direct.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">AI-Smart Routing</h3>
              <p className="text-gray-700 leading-relaxed">
                Models prioritize urgent messages (SOS, location, resources) and optimize battery + route selection.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-violet-50 to-pink-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">Context Awareness</h3>
              <p className="text-gray-700 leading-relaxed">
                Devices form adaptive networks that scale from a few users to entire field zones.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="inline-block bg-gray-100 px-8 py-6 rounded-2xl">
              <p className="text-gray-700 font-medium">
                No backend servers. No central failure point.<br />
                Just intelligent, distributed coordination.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Status Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-slate-100">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Status
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start gap-4">
                <span className="text-2xl">🏆</span>
                <span>Prototype submitted to the <strong>Global AI for Humanity Innovation Challenge</strong>.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">🔒</span>
                <span>Currently in <strong>private development</strong> and internal testing.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">📄</span>
                <span>White paper in progress - <em>&quot;LifeMesh: Offline Resilience Through On-Device Intelligence.&quot;</em></span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* About the Creator Section */}
      <section className="section-padding bg-white">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              About the Creator
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-gray-700 leading-relaxed mb-6">
              Conceptualized and built by <strong className="text-purple-600">Divya Jain</strong>, Mobile Engineering Manager and AI innovation leader.
            </p>
            <p className="text-gray-700 leading-relaxed">
              LifeMesh represents her belief that the next frontier of mobile intelligence isn&apos;t faster feeds - it&apos;s <strong>smarter connections that can save lives</strong>.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="space-y-12">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Interested in <span className="text-cyan-300 font-semibold">collaboration</span>, <span className="text-cyan-300 font-semibold">research partnership</span>, or <span className="text-cyan-300 font-semibold">humanitarian pilot testing</span>?
            </p>

            <div className="pt-4">
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 mx-auto text-lg"
                >
                  <Mail className="w-5 h-5" />
                  Let&apos;s Connect
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p className="text-sm">
          © 2025 Divya Jain. Built with passion for resilient technology.
        </p>
      </footer>
    </div>
  )
}
