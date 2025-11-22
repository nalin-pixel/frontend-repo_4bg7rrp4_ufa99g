import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Vibrant gradient veils */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/90 pointer-events-none" />
      <div className="pointer-events-none absolute -top-32 -left-32 h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-blue-500/20 blur-3xl" />

      {/* Floating glow orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-10 top-24 h-28 w-28 rounded-full bg-gradient-to-br from-fuchsia-400/60 to-blue-400/60 blur-xl"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-20 bottom-24 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/60 to-cyan-400/60 blur-xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 0.6 }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Enterprise-grade live & VOD delivery
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
          >
            Stream, manage, and monetize your video at scale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 text-white/80 text-lg"
          >
            A modern, API-first streaming platform for product launches, webinars, training, and 24/7 channels. Built for reliability, security, and branding.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#demo" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-blue-500 px-5 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition">
              Request a Demo
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">
              Explore Features
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/70"
          >
            {['99.99% Uptime', 'Multi-CDN', 'DRM & SSO', 'White-label'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-lg border border-white/10 bg-white/5 p-4"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="mx-auto h-8 w-4 rounded-full border border-white/20 relative">
          <motion.span className="absolute left-1/2 top-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/70" animate={{ y: [0, 18, 0], opacity: [1, 0.2, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  )
}
