import React from 'react'

const posts = [
  { title: 'We raised a seed round', date: 'Sep 10, 2025', excerpt: 'Fueling our mission to craft playful tech for everyone.' },
  { title: 'Design systems for speed', date: 'Aug 21, 2025', excerpt: 'How we ship fast while staying consistent.' },
  { title: 'Performance playbook', date: 'Jul 05, 2025', excerpt: 'Lessons learned tuning Lighthouse to 95+.' },
]

export default function News() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">News & Insights</h1>
        <p className="mt-2 text-slate-600">Updates, stories, and learnings from the studio.</p>
        <div className="mt-8 space-y-6">
          {posts.map(p => (
            <article key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow hover:shadow-lg transition-shadow">
              <div className="text-xs text-slate-500">{p.date}</div>
              <h3 className="text-xl font-semibold text-slate-900 mt-1">{p.title}</h3>
              <p className="text-slate-600">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
