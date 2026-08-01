import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

const stats = [
  { label: 'Trades Reviewed', value: 284, suffix: '+' },
  { label: 'Win Rate', value: 68, suffix: '%' },
  { label: 'Journal Entries', value: 132, suffix: '+' },
  { label: 'Market Sessions', value: 41, suffix: '+' },
]

function Counter({ value, suffix, label }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const duration = 1400
    const start = performance.now()
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplayValue(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(step)
    }

    const animation = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animation)
  }, [value])

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
      <p className="text-3xl font-semibold text-white" aria-live="polite">{displayValue}{suffix}</p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  )
}

export default function Performance() {
  const bars = [78, 64, 92, 54]

  return (
    <section id="performance" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 shadow-[0_0_100px_rgba(34,211,238,0.08)] backdrop-blur-xl sm:p-10">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Performance</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">The numbers behind the discipline.</h2>
          </div>
          <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">+18.4% best edge</div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Counter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Signal quality</p>
                <p className="mt-2 text-xl font-semibold text-white">High conviction setup mix</p>
              </div>
              <div className="text-sm text-slate-400">Live</div>
            </div>
            <div className="mt-8 flex h-44 items-end gap-3">
              {bars.map((bar, index) => (
                <div key={bar} className="flex-1">
                  <div className="mb-3 h-2 rounded-full bg-white/10" />
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${bar}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 + index * 0.08 }}
                    className={`rounded-t-2xl ${index % 2 === 0 ? 'bg-cyan-400/80' : 'bg-emerald-400/80'}`}
                    style={{ minHeight: '28px' }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
