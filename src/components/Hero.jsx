import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const heroImage = '/bull-premium.svg'

const particles = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  left: `${8 + (index % 7) * 12}%`,
  top: `${12 + (index % 5) * 12}%`,
  delay: `${index * 0.2}s`,
}))

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const onMove = (event) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 18
      setMouse({ x, y })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="home" ref={heroRef} aria-labelledby="hero-title" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.16),transparent_24%),linear-gradient(120deg,rgba(2,6,23,0.95),rgba(3,10,24,0.95))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:72px_72px] opacity-40" />
      <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">TradeWithBrady</p>
          <h1 id="hero-title" className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            Trade with Logic.<br />
            <span className="bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">Not Emotion.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            Swing trading, long-term investing, and disciplined risk management in one premium experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#dashboard" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:scale-[1.01]">
              Explore Dashboard
            </a>
            <a href="#journal" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10">
              Trading Journal
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
            {['Swing Trading', 'Long-Term Investing', 'Risk Management'].map((item) => (
              <li key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto flex w-full max-w-xl items-center justify-center"
          style={{ transform: prefersReducedMotion ? 'none' : `perspective(1000px) rotateX(${mouse.y * -0.05}deg) rotateY(${mouse.x * 0.05}deg)` }}
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute inset-8 rounded-full border border-cyan-400/20" />
          <div className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-full border border-white/10" />
          <div className="absolute inset-16 animate-[spin_28s_linear_infinite_reverse] rounded-full border border-emerald-400/20" />

          <motion.img
            src={heroImage}
            alt="Bull artwork representing TradeWithBrady's trading philosophy"
            width={560}
            height={560}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="relative z-10 h-[420px] w-full max-w-[420px] object-contain drop-shadow-[0_0_60px_rgba(34,211,238,0.28)] sm:h-[500px]"
            animate={prefersReducedMotion ? undefined : { y: [0, -8, 0], rotate: [0, 1, 0], scale: [1, 1.01, 1] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.03, y: -6, filter: 'drop-shadow(0 0 90px rgba(34,211,238,0.32))' }}
          />

          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="pointer-events-none absolute h-2 w-2 rounded-full bg-cyan-300/70"
              style={{ left: particle.left, top: particle.top }}
              animate={prefersReducedMotion ? undefined : { y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3.2 + particle.id * 0.2, repeat: Infinity, delay: particle.delay }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
