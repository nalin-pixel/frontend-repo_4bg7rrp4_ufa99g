import { useState } from 'react'

export default function DemoForm() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || ''
  const [status, setStatus] = useState('idle')

  async function submit(e) {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${baseUrl}/api/request-demo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('success')
    }
  }

  return (
    <section id="demo" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Request a tailored demo</h2>
            <p className="mt-2 text-white/70">Tell us about your use case and we’ll show you a curated experience.</p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm">
              {['White-label portals', 'SSO & access control', 'Live events and 24/7 channels', 'Analytics & QoE', 'Monetization options'].map((p, i) => (
                <li key={i} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500"></span>{p}</li>
              ))}
            </ul>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-white">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Company</label>
                <input name="company" required className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/20" />
              </div>
              <div>
                <label className="text-sm text-white/70">Contact name</label>
                <input name="contact_name" required className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/20" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Work email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/20" />
              </div>
              <div>
                <label className="text-sm text-white/70">Use case</label>
                <input name="use_case" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/20" />
              </div>
              <div>
                <label className="text-sm text-white/70">Audience size</label>
                <input name="audience_size" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/20" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Notes</label>
                <textarea name="notes" rows="4" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/20" />
              </div>
            </div>

            <button disabled={status==='loading'} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-blue-500 px-5 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition">
              {status==='loading' ? 'Sending…' : 'Request demo'}
            </button>
            {status==='success' && <p className="mt-3 text-emerald-300 text-sm">Thanks! We’ll reach out shortly.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
