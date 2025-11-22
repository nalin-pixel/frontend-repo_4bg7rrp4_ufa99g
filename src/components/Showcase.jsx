import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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
    <section id="showcase" className="py-24 relative">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_20%,rgba(217,70,239,0.12),transparent_50%),radial-gradient(600px_300px_at_90%_10%,rgba(59,130,246,0.12),transparent_50%)]" />
      </motion.div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Showcase your channels</h2>
            <p className="mt-2 text-white/70">A branded portal for live and on‑demand content your clients will love.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(channels.length ? channels : Array.from({ length: 6 })).map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <div className="aspect-video bg-gradient-to-br from-fuchsia-500/40 to-blue-500/40 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{background: 'radial-gradient(400px_160px_at_30%_30%, rgba(255,255,255,0.3), transparent), radial-gradient(500px_200px_at_70%_60%, rgba(255,255,255,0.2), transparent)'}}
                />
                {/* floating thumbnail chips */}
                <motion.div className="absolute -left-10 top-6 h-24 w-40 rounded-xl bg-white/10 border border-white/10" animate={{ x: [0, 12, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
                <motion.div className="absolute -right-10 bottom-6 h-16 w-28 rounded-xl bg-white/10 border border-white/10" animate={{ x: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
