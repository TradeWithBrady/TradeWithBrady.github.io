import { motion } from 'motion/react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Journal', href: '#journal' },
  { label: 'Performance', href: '#performance' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/70 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-5">
        <a href="#home" aria-label="TradeWithBrady home" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            TB
          </span>
          TradeWithBrady
        </a>

        <nav aria-label="Primary navigation" className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300 sm:gap-5 lg:gap-7">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="rounded-full px-2 py-1 transition hover:text-white hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#dashboard"
          className="inline-flex self-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:-translate-y-0.5 hover:bg-emerald-400/20 lg:self-auto"
        >
          Explore
        </a>
      </div>
    </motion.header>
  )
}
