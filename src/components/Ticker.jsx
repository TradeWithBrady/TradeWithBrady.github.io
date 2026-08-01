const items = [
  { symbol: 'SPY', value: '+1.23%', change: 'up' },
  { symbol: 'QQQ', value: '+0.84%', change: 'up' },
  { symbol: 'NVDA', value: '+2.15%', change: 'up' },
  { symbol: 'TSLA', value: '-0.43%', change: 'down' },
  { symbol: 'BTC', value: '+1.9%', change: 'up' },
  { symbol: 'ETH', value: '+0.8%', change: 'up' },
]

export default function Ticker() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-slate-950/70" aria-label="Market ticker">
      <div className="ticker-track flex w-max gap-4 py-3 text-sm text-slate-300 sm:gap-6">
        {[...items, ...items].map((item, index) => (
          <div key={`${item.symbol}-${index}`} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 whitespace-nowrap">
            <span className="font-semibold text-white">{item.symbol}</span>
            <span className={item.change === 'up' ? 'text-emerald-400' : 'text-rose-400'}>
              {item.change === 'up' ? '▲' : '▼'}
            </span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
