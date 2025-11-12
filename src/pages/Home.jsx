import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative h-[92vh]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl bg-white/60 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/40 shadow-lg">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">We craft playful tech experiences that perform</h1>
              <p className="mt-4 text-slate-700">Studio for modern brands and startups. We blend interaction design, engineering, and strategy to ship real impact.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/projects" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90">
                  Explore Projects <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 bg-white text-slate-800 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50">
                  Start a project
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Latest work</h2>
          <p className="text-slate-600 mt-2">A quick taste of what we've been building recently.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow hover:shadow-xl transition-all">
                <div className="h-40 bg-gradient-to-br from-violet-200 to-blue-200" />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">Project #{i}</h3>
                  <p className="text-sm text-slate-600">Interaction, Web, Performance</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
