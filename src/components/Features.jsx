import { motion } from 'framer-motion'
import { ShieldCheck, Cog, Megaphone, Users, CreditCard, BarChart3 } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Security & Compliance', desc: 'SSO, RBAC, audit logs, watermarking, DRM and region restrictions for enterprise-grade protection.' },
  { icon: Cog, title: 'Developer-first', desc: 'REST + Webhooks + SDKs. Provision channels, upload media, and automate workflows.' },
  { icon: Megaphone, title: 'Branding & Experiences', desc: 'Custom portals, player themes, overlays, and interactive widgets to match your brand.' },
  { icon: Users, title: 'Audience Tools', desc: 'Registration, gated content, Q&A, polls, and email capture to drive engagement.' },
  { icon: CreditCard, title: 'Monetization', desc: 'Subscriptions, pay-per-view, coupons, entitlement APIs and reporting.' },
  { icon: BarChart3, title: 'Analytics', desc: 'Real-time dashboards, retention curves, QoE metrics and exportable reports.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_0%,rgba(217,70,239,0.15),transparent_40%),radial-gradient(600px_circle_at_80%_20%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything you need to stream at scale</h2>
          <p className="mt-2 text-white/70">A single platform for live events, on-demand libraries, and 24/7 channels.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-500 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-white/70 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
