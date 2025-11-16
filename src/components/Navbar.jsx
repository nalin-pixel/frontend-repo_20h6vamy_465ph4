import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
          <nav className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-violet-500 to-sky-400 flex items-center justify-center shadow-inner">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-white text-lg font-semibold tracking-wider">
                <span className="bg-gradient-to-r from-violet-400 via-sky-400 to-indigo-300 bg-clip-text text-transparent">PAPERCUT</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-white/80 hover:text-white transition">Features</a>
              <a href="#showcase" className="text-sm text-white/80 hover:text-white transition">Showcase</a>
              <a href="#pricing" className="text-sm text-white/80 hover:text-white transition">Pricing</a>
              <a href="#contact" className="text-sm text-white/80 hover:text-white transition">Contact</a>
              <a href="#get-started" className="text-sm font-medium text-white px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-sky-500 hover:from-violet-500 hover:to-sky-400 shadow-lg shadow-violet-600/20">Get Started</a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-4">
              <a href="#features" className="block text-white/80">Features</a>
              <a href="#showcase" className="block text-white/80">Showcase</a>
              <a href="#pricing" className="block text-white/80">Pricing</a>
              <a href="#contact" className="block text-white/80">Contact</a>
              <a href="#get-started" className="block text-center font-medium text-white px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-sky-500">Get Started</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
