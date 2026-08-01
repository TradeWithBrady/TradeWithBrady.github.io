import { motion } from 'motion/react'

const entries = [
  { title: 'Trade Review', text: 'Captured the breakout with a clean stop, then let the position breathe.' },
  { title: 'Lessons Learned', text: 'The best edge is patience; over-trading is costly when the market is quiet.' },
  { title: 'Mistakes', text: 'A rushed entry after a false signal reminded me to wait for confirmation.' },
  { title: 'Psychology', text: 'The calmest weeks often produce the strongest long-term compounding.' },
]

export default function Journal() {
  return (
    <section id="journal" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Journal</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">A disciplined record of decisions and outcomes.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {entries.map((entry, index) => (
            <motion.article
              key={entry.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-white">{entry.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{entry.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
