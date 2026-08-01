import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import gsap from 'gsap'

const tickers = [
  ['SPY', '527.84', '+1.26%'], ['QQQ', '454.23', '+1.48%'], ['NVDA', '1,168.88', '+2.35%'],
  ['AMD', '162.45', '+1.89%'], ['AAPL', '198.11', '+0.85%'], ['MSFT', '432.64', '+0.71%'],
  ['AMZN', '186.21', '+1.05%'], ['TSLA', '182.63', '+2.11%'],
]

const journalEntries = [
  ['Breakout Play in NVDA', 'May 20, 2025', 'Swing'],
  ['Managing Drawdowns', 'May 18, 2025', 'Mindset'],
  ['Trend Following Rules', 'May 15, 2025', 'Process'],
]

const watchlist = [
  ['NVDA', 'Bull Flag', 'High'], ['AAPL', 'Breakout', 'Medium'], ['QQQ', 'Pullback', 'High'], ['SPY', 'Support Test', 'Medium'],
]

function Logo({ compact = false }) {
  return (
    <div className={`brand ${compact ? 'brand-compact' : ''}`}>
      <div className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 64 64">
          <path d="M10 28 C14 14 28 10 37 18 C43 10 54 11 58 20 C50 19 47 23 46 29 C44 40 36 48 25 47 C17 46 11 40 10 28Z" />
          <path d="M18 22 C13 16 9 15 5 17 C9 21 12 24 14 29" />
          <path d="M43 20 C48 13 54 11 60 13 C55 17 52 21 50 27" />
          <path d="M14 44 L26 55 L51 22" />
          <path d="M43 22 H57 V36" />
        </svg>
      </div>
      <div className="brand-copy">
        <strong>TRADEWITH<span>BRADY</span></strong>
        {!compact && <small>LOGIC OVER EMOTION</small>}
      </div>
    </div>
  )
}

function NeonBull() {
  const bullRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !bullRef.current) return
    const ctx = gsap.context(() => {
      gsap.to('.bull-group', { y: -10, duration: 2.8, ease: 'sine.inOut', repeat: -1, yoyo: true })
      gsap.to('.bull-eye', { opacity: 0.25, duration: 1.1, repeat: -1, yoyo: true })
      gsap.to('.hero-spark', { y: -30, opacity: 0, duration: 2.4, stagger: 0.18, repeat: -1, ease: 'none' })
    }, bullRef)
    return () => ctx.revert()
  }, [reduce])

  return (
    <div ref={bullRef} className="bull-stage">
      <div className="bull-radial" />
      <svg className="bull-svg" viewBox="0 0 720 560" role="img" aria-label="Animated neon bull illustration">
        <defs>
          <linearGradient id="bullStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2f7cff"/><stop offset=".5" stopColor="#2bd4ff"/><stop offset="1" stopColor="#20e77d"/>
          </linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <g className="bull-group" fill="none" stroke="url(#bullStroke)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)">
          <path d="M155 330 C175 215 270 130 385 142 C474 151 532 205 544 292 C554 373 488 434 392 437 C322 439 279 408 236 372 C207 348 183 340 155 330Z"/>
          <path d="M405 150 C461 95 528 102 573 151 C601 183 609 225 598 266 C580 228 551 210 518 211"/>
          <path d="M551 152 C599 114 650 122 681 164 C647 151 616 166 603 198 C592 227 572 256 540 269"/>
          <path d="M516 150 C484 94 446 70 402 68 C438 103 461 128 480 169"/>
          <path d="M595 154 C626 96 659 78 695 86 C669 109 650 132 637 171"/>
          <path d="M247 370 L214 492 L261 492 L299 403"/>
          <path d="M361 425 L355 518 L403 518 L420 431"/>
          <path d="M463 422 L486 514 L533 514 L503 394"/>
          <path d="M154 304 C104 280 84 239 109 203 C84 218 76 251 95 283 C113 312 134 325 154 330"/>
          <path className="bull-eye" d="M608 194 L614 194" strokeWidth="10"/>
          <path d="M190 290 L285 184 L376 277 L474 184 L524 342 L392 437 L236 372Z M285 184 L474 184 M376 277 L236 372 M376 277 L524 342 M190 290 L376 277 M247 370 L376 277 M361 425 L392 437 M463 422 L524 342" strokeWidth="2.2" opacity=".62"/>
        </g>
      </svg>
      <svg className="hero-line" viewBox="0 0 700 520" aria-hidden="true"><path d="M10 480 C95 452 95 398 164 412 S257 370 304 329 S381 322 422 255 S504 242 545 170 S625 153 686 70"/></svg>
      <div className="candles">{Array.from({ length: 13 }).map((_, i) => <i key={i} style={{height: `${18 + i * 5 + (i % 3) * 8}%`}} />)}</div>
      <div className="sparks">{Array.from({ length: 16 }).map((_, i) => <i className="hero-spark" key={i} style={{left:`${8 + (i * 6)%88}%`, top:`${10 + (i * 13)%78}%`}} />)}</div>
    </div>
  )
}

function StatCard({ label, value, positive }) {
  return <div className="stat-cell"><span>{label}</span><strong className={positive ? 'positive' : ''}>{value}</strong></div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [clock, setClock] = useState('02 : 45 : 18')
  const equityPath = useMemo(() => 'M25 250 C60 265 82 220 110 232 S158 188 195 205 S252 148 286 166 S330 122 365 137 S410 92 448 112 S492 70 535 92 S584 48 625 65 S675 28 725 34', [])

  useEffect(() => {
    let seconds = 2 * 3600 + 45 * 60 + 18
    const id = setInterval(() => {
      seconds = Math.max(0, seconds - 1)
      const h = String(Math.floor(seconds / 3600)).padStart(2, '0')
      const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
      const s = String(seconds % 60).padStart(2, '0')
      setClock(`${h} : ${m} : ${s}`)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .18 }, transition: { duration: .65 } }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <Logo />
        <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">☰</button>
        <nav className={menuOpen ? 'open' : ''}>
          {['Home','About','Approach','Dashboard','Journal','Resources','Disclaimer'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <a className="follow-btn" href="https://x.com/TradeWithMeOnX" target="_blank" rel="noreferrer">Follow on X ↗</a>
      </header>

      <main>
        <section id="home" className="hero-grid-section page-width">
          <motion.div className="hero-copy" initial={{opacity:0,x:-40}} animate={{opacity:1,x:0}} transition={{duration:.8}}>
            <p className="eyebrow">SWING TRADER • LONG-TERM INVESTOR • RISK MANAGER</p>
            <h1>Trade with<br/><span>logic.</span><br/><em>Not emotion.</em></h1>
            <p className="lead">A personal market journal built around disciplined execution, thoughtful risk management, and continuous improvement.</p>
            <div className="hero-actions"><a className="primary-btn" href="#dashboard">Explore Dashboard →</a><a className="secondary-btn" href="#journal">View Journal ▣</a></div>
            <div className="reader-row"><div className="reader-dots"><i/><i/><i/><i/><span>+250</span></div><small>Trusted by readers on X</small></div>
          </motion.div>
          <motion.div initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.15}}><NeonBull /></motion.div>
          <motion.aside className="hero-widgets" initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:.8,delay:.2}}>
            <article className="glass widget"><small>● MARKET PULSE</small><span>S&amp;P 500</span><strong>5,278.40</strong><b>+1.23%</b><svg viewBox="0 0 120 42"><path d="M2 34 L18 25 L29 30 L42 17 L56 20 L70 10 L82 15 L95 6 L118 3"/></svg></article>
            <article className="glass widget"><small>● FEAR &amp; GREED INDEX</small><div className="gauge"><div className="gauge-ring"/><div><strong>64</strong><span>Greed</span></div></div></article>
            <article className="glass widget trend"><small>● MARKET TREND</small><strong>BULLISH</strong><p>Momentum is strong across major indices.</p><span className="tiny-bull">♉</span></article>
          </motion.aside>
        </section>

        <section className="ticker-strip"><div className="ticker-track">{[...tickers,...tickers].map((t,i)=><div key={i}><b>{t[0]}</b><span>{t[1]}</span><em>{t[2]}</em><svg viewBox="0 0 45 20"><path d="M1 17 L8 12 L14 15 L22 7 L29 10 L36 4 L44 2"/></svg></div>)}</div></section>

        <section id="dashboard" className="dashboard page-width">
          <motion.article className="glass equity-card" {...fade}>
            <div className="card-title"><div><small>EQUITY CURVE (ALL TIME)</small><strong className="positive">+132.7%</strong></div><button>All Time⌄</button></div>
            <svg viewBox="0 0 760 300"><defs><linearGradient id="eqFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#20e77d" stopOpacity=".4"/><stop offset="1" stopColor="#20e77d" stopOpacity="0"/></linearGradient></defs><g className="grid-lines"><path d="M25 50H735M25 100H735M25 150H735M25 200H735M25 250H735"/></g><path d={`${equityPath} L725 275 L25 275Z`} fill="url(#eqFill)"/><path d={equityPath} className="equity-line"/></svg>
          </motion.article>

          <motion.article className="glass summary-card" {...fade}><small>PERFORMANCE SUMMARY</small><div className="summary-grid"><StatCard label="Total Return" value="+132.7%" positive/><StatCard label="Win Rate" value="61.3%"/><StatCard label="Profit Factor" value="1.87"/><StatCard label="Total Trades" value="142"/><StatCard label="Best Trade" value="+18.4%" positive/><StatCard label="Avg. Trade" value="+1.32%" positive/></div></motion.article>

          <motion.article className="glass allocation-card" {...fade}><small>ASSET ALLOCATION</small><div className="allocation"><div className="donut"><div><strong>65%</strong><span>Equities</span></div></div><ul><li><i className="green"/>Equities <b>65%</b></li><li><i className="blue"/>Cash <b>20%</b></li><li><i className="purple"/>Options <b>10%</b></li><li><i className="gold"/>Crypto <b>5%</b></li></ul></div></motion.article>

          <motion.article id="approach" className="glass process-card" {...fade}><small>TRADING PROCESS</small><div className="process">{[['⌕','1. Analyze','Scan markets & identify trends'],['▣','2. Plan','Build setups & define risk'],['◎','3. Execute','Follow plan with discipline'],['▥','4. Review','Analyze results & learn'],['↗','5. Improve','Iterate & get better']].map((p,i)=><div className="process-step" key={p[1]}><span>{p[0]}</span><b>{p[1]}</b><p>{p[2]}</p>{i<4&&<i>→</i>}</div>)}</div></motion.article>

          <motion.article id="journal" className="glass list-card" {...fade}><small>LATEST JOURNAL ENTRIES</small><ul>{journalEntries.map(j=><li key={j[0]}><div><b>{j[0]}</b><span>{j[1]}</span></div><em>{j[2]}</em></li>)}</ul><a href="#journal">View All Entries →</a></motion.article>

          <motion.article id="resources" className="glass list-card" {...fade}><small>TOP SETUPS WATCHLIST</small><ul>{watchlist.map(w=><li key={w[0]}><b>{w[0]}</b><span>{w[1]}</span><em className={w[2].toLowerCase()}>{w[2]} ↑</em></li>)}</ul><a href="#resources">View Watchlist →</a></motion.article>
        </section>

        <motion.section id="about" className="glass philosophy page-width" {...fade}><div className="quote-mark">“</div><blockquote>The market does not reward urgency.<br/>It rewards <span>preparation.</span></blockquote><div className="values">{[['✺','Discipline','Over Motivation'],['◉','Patience','Over Prediction'],['⚙','Process','Over Outcomes'],['♢','Risk First','Always'],['⬡','Protect Capital','Stay Alive']].map(v=><div key={v[1]}><b>{v[0]}</b><span>{v[1]}</span><small>{v[2]}</small></div>)}</div></motion.section>

        <section className="footer-grid page-width">
          <motion.article className="glass newsletter" {...fade}><small>STAY AHEAD WITH MARKET INSIGHTS</small><p>Join readers who follow weekly market breakdowns and trade ideas.</p><form onSubmit={e=>e.preventDefault()}><input type="email" placeholder="Enter your email"/><button>Subscribe →</button></form></motion.article>
          <motion.article className="glass footer-brand" {...fade}><Logo compact/><p>Logic over emotion.<br/>Discipline over impulse.</p><div className="socials"><a href="https://x.com/TradeWithMeOnX">𝕏</a><a href="#">▶</a><a href="#">◎</a><a href="mailto:">✉</a></div></motion.article>
          <motion.article className="glass quick-links" {...fade}><small>QUICK LINKS</small><div>{['About','Approach','Dashboard','Journal','Resources','Disclaimer'].map(x=><a key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</div></motion.article>
          <motion.article className="glass market-status" {...fade}><small>MARKET STATUS</small><strong>Market Open</strong><p>Closes in</p><div>{clock}</div></motion.article>
        </section>

        <section id="disclaimer" className="disclaimer page-width">Educational and informational content only. Not financial, investment, tax, or legal advice. Trading and investing involve risk, including possible loss of principal.</section>
      </main>
      <footer><span>© {new Date().getFullYear()} TradeWithBrady. All rights reserved.</span><span>Built with ♥ for traders.</span></footer>
    </div>
  )
}

export default App
