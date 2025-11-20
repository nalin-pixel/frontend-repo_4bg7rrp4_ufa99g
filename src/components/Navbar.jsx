import { useState } from 'react'
import { Menu, Play, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-xl bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border border-white/10 mt-4 px-4">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-500 ring-1 ring-white/20">
              <Play className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold">FlowStream</span>
            <span className="hidden md:inline-flex text-xs text-white/60 bg-white/5 px-2 py-1 rounded-md border border-white/10">
              B2B Platform
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
            <a href="#showcase" className="text-white/80 hover:text-white transition">Showcase</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
            <a href="#demo" className="text-white/80 hover:text-white transition inline-flex items-center gap-1">Solutions <ChevronDown className="h-4 w-4" /></a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="text-white/80 hover:text-white text-sm">Contact Sales</a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-blue-500 px-4 py-2 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition">
              Request Demo
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/80">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 rounded-xl bg-slate-900/80 backdrop-blur border border-white/10 p-4 space-y-2">
            <a href="#features" className="block text-white/90 py-2">Features</a>
            <a href="#showcase" className="block text-white/90 py-2">Showcase</a>
            <a href="#pricing" className="block text-white/90 py-2">Pricing</a>
            <a href="#demo" className="block text-white/90 py-2">Request Demo</a>
          </div>
        </div>
      )}
    </header>
  )
}
