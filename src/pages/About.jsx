import React from 'react'

export default function About() {
  const values = [
    { title: 'Playful craft', desc: 'Delightful details that make products feel alive.' },
    { title: 'Performance first', desc: 'Fast by default — speed is a feature.' },
    { title: 'Partnership', desc: 'We embed with teams to shape strategy and execution.' },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">About us</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">We are a small studio of designers and engineers who love building playful, modern products. We help startups and brands move from idea to impact, fast.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map(v => (
            <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow">
              <h3 className="font-semibold text-slate-900">{v.title}</h3>
              <p className="text-slate-600 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
