import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  const socials = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@example.com' },
  ]

  return (
    <footer className="relative mt-20 border-t border-white/20 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500" />
              <span className="font-semibold">BlueTech</span>
            </div>
            <p className="mt-4 text-sm text-slate-300 max-w-xs">We build delightful digital products for ambitious teams. Design-first, performance-obsessed.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>Blog</li>
              <li>Docs</li>
              <li>Guides</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Follow us</h4>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ name, icon: Icon, href }) => (
                <a key={name} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-md text-sm">
                  <Icon className="h-4 w-4" />
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">© {new Date().getFullYear()} BlueTech Labs. All rights reserved.</div>
      </div>
    </footer>
  )
}
