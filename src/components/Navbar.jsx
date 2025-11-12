import React, { useMemo, useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, Search, X, Home, Briefcase, Newspaper, Info, Mail } from 'lucide-react'

const PAGES = [
  { name: 'Home', path: '/', icon: Home, keywords: ['home', 'start', 'landing', 'hero'] },
  { name: 'Projects', path: '/projects', icon: Briefcase, keywords: ['projects', 'work', 'portfolio', 'case studies'] },
  { name: 'News', path: '/news', icon: Newspaper, keywords: ['news', 'blog', 'updates', 'press'] },
  { name: 'About', path: '/about', icon: Info, keywords: ['about', 'company', 'team', 'mission'] },
  { name: 'Contact', path: '/contact', icon: Mail, keywords: ['contact', 'support', 'email', 'phone', 'reach'] },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return PAGES.filter(p => (
      p.name.toLowerCase().includes(q) || p.keywords.some(k => k.includes(q))
    ))
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (results.length > 0) {
      navigate(results[0].path)
      setQuery('')
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-slate-900">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500" />
            <span>BlueTech</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {PAGES.map(({ name, path }) => (
              <Link key={path} to={path} className={`text-sm font-medium transition-colors hover:text-slate-900 ${location.pathname === path ? 'text-slate-900' : 'text-slate-600'}`}>
                {name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative">
              <form onSubmit={handleSubmit} className="flex items-center bg-white/70 border border-slate-200 rounded-lg px-2">
                <Search className="h-4 w-4 text-slate-500" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search pages..."
                  className="w-40 md:w-56 px-2 py-2 bg-transparent outline-none text-sm text-slate-700 placeholder-slate-400"
                />
              </form>
              {results.length > 0 && (
                <div className="absolute mt-1 w-64 md:w-72 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden">
                  {results.map((r) => (
                    <button
                      key={r.path}
                      onClick={() => { navigate(r.path); setQuery('') }}
                      className="w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center gap-2 text-sm"
                    >
                      <r.icon className="h-4 w-4 text-slate-500" />
                      <span>{r.name}</span>
                      <span className="ml-auto text-[11px] text-slate-500">{r.path}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-white/70">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/80">
          <div className="px-4 py-3 space-y-2">
            {PAGES.map(({ name, path, icon: Icon }) => (
              <Link key={path} to={path} className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white">
                <Icon className="h-4 w-4 text-slate-500" />
                <span className="text-sm text-slate-700">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
