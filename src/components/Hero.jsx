import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Enterprise-grade live & VOD delivery
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Stream, manage, and monetize your video at scale
          </h1>

          <p className="mt-4 text-white/80 text-lg">
            A modern, API-first streaming platform for product launches, webinars, training, and 24/7 channels. Built for reliability, security, and branding.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#demo" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-blue-500 px-5 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition">
              Request a Demo
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">
              Explore Features
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/70">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              99.99% Uptime
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              Multi-CDN
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              DRM & SSO
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              White-label
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
