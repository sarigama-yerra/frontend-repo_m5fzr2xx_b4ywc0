import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // This would normally call a backend endpoint
    setTimeout(() => setStatus('Thanks! We will reach out soon.'), 800)
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact us</h1>
        <p className="mt-2 text-slate-600">Tell us a little about your project and we’ll get back within 1–2 days.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <input required placeholder="Your name" className="px-4 py-3 rounded-lg border border-slate-200 bg-white" />
          <input required type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-slate-200 bg-white" />
          <input placeholder="Company" className="px-4 py-3 rounded-lg border border-slate-200 bg-white" />
          <textarea required rows="5" placeholder="What are you building?" className="px-4 py-3 rounded-lg border border-slate-200 bg-white" />
          <button className="mt-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white px-4 py-3 rounded-lg shadow hover:opacity-90">Send message</button>
          {status && <div className="text-sm text-slate-600">{status}</div>}
        </form>
      </div>
    </div>
  )
}
