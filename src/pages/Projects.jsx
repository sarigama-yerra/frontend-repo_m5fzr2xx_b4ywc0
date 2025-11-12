import React from 'react'

const projects = [
  { title: 'Neon Commerce', tags: ['Ecommerce', 'Next.js', 'Stripe'], desc: 'High-converting storefront with playful 3D interactions.' },
  { title: 'Orbit CRM', tags: ['SaaS', 'React', 'MongoDB'], desc: 'Customer platform with realtime analytics and onboarding flows.' },
  { title: 'Pulse Health', tags: ['Healthcare', 'Design', 'API'], desc: 'Patient engagement app with secure messaging and reports.' },
  { title: 'Volt AI', tags: ['AI', 'Python', 'FastAPI'], desc: 'Prototype lab for generative product experiments.' },
]

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Projects</h1>
        <p className="mt-2 text-slate-600">A curated selection of our recent work.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow hover:shadow-lg transition-shadow">
              <div className="h-40 rounded-xl bg-gradient-to-br from-violet-200 to-blue-200" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{p.title}</h3>
              <p className="text-slate-600 text-sm">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
