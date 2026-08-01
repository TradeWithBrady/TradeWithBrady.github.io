import { motion } from 'motion/react'

const cards = [
  { title: 'Market Pulse', value: 'Momentum Strong', detail: 'Risk-on sentiment with steady breadth' },
  { title: 'Fear & Greed', value: '64 / 100', detail: 'Greed remains constructive' },
  { title: 'Risk Score', value: 'Moderate', detail: 'Position sizing remains disciplined' },
]

const watchlist = [
  { ticker: 'NVDA', price: '$1,168.88', change: '+2.15%', trend: 'Bullish' },
  { ticker: 'AAPL', price: '$198.11', change: '+0.85%', trend: 'Momentum' },
  { ticker: 'QQQ', price: '$454.23', change: '+1.48%', trend: 'Strong' },
  { ticker: 'SPY', price: '$527.84', change: '+1.26%', trend: 'Steady' },
]

export default function Dashboard() {
  const chartPath = 'M0 88 C24 72, 38 66, 58 70 S 92 82, 116 66 S 144 54, 168 60 S 194 72, 218 48 S 244 36, 260 40 L260 120 L0 120 Z'

  return (
    <section id="dashboard" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Dashboard</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">A clearer view of the market and your edge.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-400 sm:text-lg">Crafted to feel like a premium trading platform with clean signals, intelligent framing, and calm execution.</p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileHover={{ y: -4, scale: 1.01 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_0_90px_rgba(34,211,238,0.08)] backdrop-blur-xl">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Market Pulse</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Momentum remains constructive</p>
                </div>
                <div className="inline-flex self-start rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">+1.24%</div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                  <span>SPY / QQQ breadth</span>
                  <span className="text-emerald-400">Positioning improved</span>
                </div>
                <svg viewBox="0 0 260 120" className="h-36 w-full" aria-label="Market strength chart">
                  <defs>
                    <linearGradient id="panelGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(34,211,238,0.45)" />
                      <stop offset="100%" stopColor="rgba(16,185,129,0.12)" />
                    </linearGradient>
                  </defs>
                  <g className="stroke-slate-800">
                    {[20, 40, 60, 80, 100].map((line) => (
                      <line key={line} x1="0" y1={line} x2="260" y2={line} stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                    ))}
                  </g>
                  <path d={chartPath} fill="url(#panelGlow)" />
                  <path d="M0 88 C24 72, 38 66, 58 70 S 92 82, 116 66 S 144 54, 168 60 S 194 72, 218 48 S 244 36, 260 40" fill="none" stroke="#67e8f9" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {cards.map((card) => (
                  <div key={card.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                    <p className="text-sm text-slate-400">{card.title}</p>
                    <p className="mt-3 text-xl font-semibold text-white">{card.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{card.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }} whileHover={{ y: -4, scale: 1.01 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Performance</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Today’s Focus</p>
                </div>
                <div className="text-sm text-slate-400">Risk-managed conviction</div>
              </div>
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-slate-200">
                <p className="text-lg font-medium leading-8">Watch for continuation setups after support holds near prior breakout levels.</p>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }} whileHover={{ y: -4, scale: 1.01 }} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Watchlist</p>
                <p className="mt-2 text-2xl font-semibold text-white">Live names to monitor</p>
              </div>
            </div>
            <div className="space-y-3">
              {watchlist.map((item) => (
                <div key={item.ticker} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/20 hover:bg-white/10">
                  <div>
                    <p className="font-semibold text-white">{item.ticker}</p>
                    <p className="text-sm text-slate-400">{item.trend}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-white">{item.price}</p>
                    <p className="text-sm text-emerald-400">{item.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
