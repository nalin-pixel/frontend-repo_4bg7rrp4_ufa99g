import { motion } from 'framer-motion'

export default function Pricing() {
  const tiers = [{
    name: 'Launch',
    price: 'Custom',
    points: ['Up to 5 channels', '100 hours VOD', 'Basic analytics', 'Email support']
  },{
    name: 'Scale',
    price: 'Custom',
    points: ['Unlimited channels', 'SSO & RBAC', 'Advanced analytics', 'Priority support']
  },{
    name: 'Enterprise',
    price: 'Custom',
    points: ['Multi-CDN', 'DRM & watermarking', 'SLA 99.99%', 'Dedicated CSM']
  }]

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_80%_30%,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Simple, scalable pricing</h2>
          <p className="mt-2 text-white/70">Start with a package and scale up with usage.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 text-white relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <motion.div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" whileHover={{ scale: 1.1 }} />
              <div className="text-sm text-white/60">{t.name}</div>
              <div className="mt-2 text-3xl font-bold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                {t.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500"></span>
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#demo" className="mt-6 inline-flex rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition">Talk to sales</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
