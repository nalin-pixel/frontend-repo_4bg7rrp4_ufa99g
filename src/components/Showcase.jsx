import { useEffect, useState } from 'react'

export default function Showcase() {
  const [channels, setChannels] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/channels`)
        const data = await res.json()
        setChannels(data.channels || [])
      } catch (e) {
        setChannels([])
      }
    }
    load()
  }, [baseUrl])

  return (
    <section id="showcase" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Showcase your channels</h2>
            <p className="mt-2 text-white/70">A branded portal for live and on‑demand content your clients will love.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(channels.length ? channels : Array.from({ length: 6 })).map((c, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
              <div className="aspect-video bg-gradient-to-br from-fuchsia-500/40 to-blue-500/40 relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{background: 'radial-gradient(400px 160px at 30% 30%, rgba(255,255,255,0.3), transparent), radial-gradient(500px 200px at 70% 60%, rgba(255,255,255,0.2), transparent)'}} />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">{c?.name || 'Sample Channel'}</h3>
                    <p className="text-white/60 text-sm">{c?.description || 'Live + VOD • Branded player • Secure access'}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-md border ${c?.is_live ? 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10' : 'text-white/60 border-white/10'}`}>{c?.is_live ? 'LIVE' : 'Ready'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
