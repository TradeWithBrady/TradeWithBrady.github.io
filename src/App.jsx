import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import gsap from 'gsap'

const tickers = [['SPY','527.84','+1.26%'],['QQQ','454.23','+1.48%'],['NVDA','1,168.88','+2.35%'],['AMD','162.45','+1.89%'],['AAPL','198.11','+0.85%'],['MSFT','432.64','+0.71%'],['AMZN','186.21','+1.05%'],['TSLA','182.63','+2.11%']]
const journalEntries = [['Breakout Play in NVDA','May 20, 2025','Swing'],['Managing Drawdowns','May 18, 2025','Mindset'],['Trend Following Rules','May 15, 2025','Process']]
const watchlist = [['NVDA','Bull Flag','High'],['AAPL','Breakout','Medium'],['QQQ','Pullback','High'],['SPY','Support Test','Medium']]

function Logo({ compact=false }) {
  return <div className={`brand ${compact?'brand-compact':''}`}>
    <div className="brand-mark"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M9 25C14 12 27 9 37 17C44 10 55 12 59 21C51 20 47 24 46 30C44 42 35 49 24 47C16 45 10 38 9 25Z"/><path d="M18 21C12 15 7 15 4 17C9 22 11 26 14 31"/><path d="M44 20C49 13 55 11 61 13C56 18 53 22 50 28"/><path d="M14 45L26 56L52 22"/><path d="M44 22H58V36"/></svg></div>
    <div className="brand-copy"><strong>TRADEWITH<span>BRADY</span></strong>{!compact&&<small>LOGIC OVER EMOTION</small>}</div>
  </div>
}

function NeonBull() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  useEffect(()=>{
    if(reduce||!ref.current) return
    const ctx=gsap.context(()=>{
      gsap.to('.charging-bull',{y:-9,rotation:.7,transformOrigin:'50% 55%',duration:2.4,ease:'sine.inOut',repeat:-1,yoyo:true})
      gsap.to('.bull-eye',{opacity:.2,duration:.7,repeat:-1,yoyo:true})
      gsap.to('.bull-front-leg',{rotation:-3,transformOrigin:'top center',duration:1.2,repeat:-1,yoyo:true,ease:'sine.inOut'})
      gsap.to('.hero-spark',{y:-28,opacity:0,duration:2.2,stagger:.14,repeat:-1,ease:'none'})
    },ref)
    return()=>ctx.revert()
  },[reduce])

  return <div ref={ref} className="bull-stage">
    <div className="bull-radial"/>
    <svg className="bull-svg" viewBox="0 0 760 560" role="img" aria-label="Animated charging neon bull">
      <defs>
        <linearGradient id="bullStroke" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2f7cff"/><stop offset=".48" stopColor="#2bd4ff"/><stop offset="1" stopColor="#20e77d"/></linearGradient>
        <radialGradient id="bullBodyFill"><stop offset="0" stopColor="#12365b" stopOpacity=".72"/><stop offset="1" stopColor="#06111e" stopOpacity=".26"/></radialGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <g className="charging-bull" stroke="url(#bullStroke)" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)">
        <path fill="url(#bullBodyFill)" strokeWidth="6" d="M112 334C128 249 188 177 282 150C355 129 444 141 500 187C535 216 551 254 546 294C541 340 509 374 458 391C395 412 321 401 271 373C229 350 184 342 112 334Z"/>
        <path fill="url(#bullBodyFill)" strokeWidth="6" d="M468 190C494 142 540 116 588 124C625 131 652 158 658 196C663 231 647 266 616 285C590 301 558 304 532 292C538 253 519 216 468 190Z"/>
        <path fill="url(#bullBodyFill)" strokeWidth="6" d="M593 172C632 154 674 162 698 190C676 184 655 193 645 214C634 239 619 259 596 273"/>
        <path fill="none" strokeWidth="8" d="M548 145C517 93 476 71 427 73C467 105 493 131 507 171"/>
        <path fill="none" strokeWidth="8" d="M628 151C660 100 698 82 730 91C704 113 685 137 672 172"/>
        <path className="bull-eye" fill="none" strokeWidth="11" d="M626 194L632 194"/>
        <path fill="none" strokeWidth="5" d="M121 309C76 287 58 251 78 218C57 230 49 258 64 286C79 313 98 327 121 334"/>
        <path className="bull-front-leg" fill="none" strokeWidth="7" d="M466 377L510 477L557 474L506 355"/>
        <path fill="none" strokeWidth="7" d="M384 397L396 500L445 500L443 390"/>
        <path fill="none" strokeWidth="7" d="M231 360L191 462L238 466L287 382"/>
        <path fill="none" strokeWidth="7" d="M303 389L280 492L330 495L355 399"/>
        <g fill="none" strokeWidth="2.3" opacity=".74">
          <path d="M144 313L218 226L301 151L350 249L437 155L500 187L475 292L546 294L458 391L355 399L271 373L231 360Z"/>
          <path d="M218 226L350 249L301 151M350 249L437 155M350 249L475 292M350 249L271 373M475 292L458 391M271 373L355 399M500 187L532 292L596 273M548 145L588 124L628 151"/>
        </g>
      </g>
    </svg>
    <svg className="hero-line" viewBox="0 0 700 520" aria-hidden="true"><path d="M10 480C95 452 95 398 164 412S257 370 304 329S381 322 422 255S504 242 545 170S625 153 686 70"/></svg>
    <div className="candles">{Array.from({length:13}).map((_,i)=><i key={i} style={{height:`${18+i*5+(i%3)*8}%`}}/>)}</div>
    <div className="sparks">{Array.from({length:16}).map((_,i)=><i className="hero-spark" key={i} style={{left:`${8+(i*6)%88}%`,top:`${10+(i*13)%78}%`}}/>)}</div>
  </div>
}

function StatCard({label,value,positive}){return <div className="stat-cell"><span>{label}</span><strong className={positive?'positive':''}>{value}</strong></div>}

export default function App(){
  const[menuOpen,setMenuOpen]=useState(false)
  const[clock,setClock]=useState('02 : 45 : 18')
  useEffect(()=>{let s=9918;const id=setInterval(()=>{s=Math.max(0,s-1);setClock(`${String(Math.floor(s/3600)).padStart(2,'0')} : ${String(Math.floor((s%3600)/60)).padStart(2,'0')} : ${String(s%60).padStart(2,'0')}`)},1000);return()=>clearInterval(id)},[])
  const fade={initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.18},transition:{duration:.65}}
  const equityPath='M25 250C60 265 82 220 110 232S158 188 195 205S252 148 286 166S330 122 365 137S410 92 448 112S492 70 535 92S584 48 625 65S675 28 725 34'
  return <div className="site-shell">
    <header className="nav-wrap"><Logo/><button className="menu-btn" onClick={()=>setMenuOpen(v=>!v)}>☰</button><nav className={menuOpen?'open':''}>{['Home','About','Approach','Dashboard','Journal','Resources','Disclaimer'].map(x=><a key={x} href={`#${x.toLowerCase()}`} onClick={()=>setMenuOpen(false)}>{x}</a>)}</nav><a className="follow-btn" href="https://x.com/TradeWithMeOnX" target="_blank" rel="noreferrer">Follow on X ↗</a></header>
    <main>
      <section id="home" className="hero-grid-section page-width">
        <motion.div className="hero-copy" initial={{opacity:0,x:-40}} animate={{opacity:1,x:0}} transition={{duration:.8}}><p className="eyebrow">SWING TRADER • LONG-TERM INVESTOR • RISK MANAGER</p><h1>Trade with<br/><span>logic.</span><br/><em>Not emotion.</em></h1><p className="lead">A personal market journal built around disciplined execution, thoughtful risk management, and continuous improvement.</p><div className="hero-actions"><a className="primary-btn" href="#dashboard">Explore Dashboard →</a><a className="secondary-btn" href="#journal">View Journal ▣</a></div><div className="reader-row"><div className="reader-dots"><i/><i/><i/><i/><span>+250</span></div><small>Trusted by readers on X</small></div></motion.div>
        <motion.div initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.15}}><NeonBull/></motion.div>
        <motion.aside className="hero-widgets" initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:.8,delay:.2}}><article className="glass widget"><small>● MARKET PULSE</small><span>S&amp;P 500</span><strong>5,278.40</strong><b>+1.23%</b><svg viewBox="0 0 120 42"><path d="M2 34L18 25L29 30L42 17L56 20L70 10L82 15L95 6L118 3"/></svg></article><article className="glass widget"><small>● FEAR &amp; GREED INDEX</small><div className="gauge"><div className="gauge-ring"/><div><strong>64</strong><span>Greed</span></div></div></article><article className="glass widget trend"><small>● MARKET TREND</small><strong>BULLISH</strong><p>Momentum is strong across major indices.</p><span className="tiny-bull">♉</span></article></motion.aside>
      </section>
      <section className="ticker-strip"><div className="ticker-track">{[...tickers,...tickers].map((t,i)=><div key={i}><b>{t[0]}</b><span>{t[1]}</span><em>{t[2]}</em><svg viewBox="0 0 45 20"><path d="M1 17L8 12L14 15L22 7L29 10L36 4L44 2"/></svg></div>)}</div></section>
      <section id="dashboard" className="dashboard page-width">
        <motion.article className="glass equity-card" {...fade}><div className="card-title"><div><small>EQUITY CURVE (ALL TIME)</small><strong className="positive">+132.7%</strong></div><button>All Time⌄</button></div><svg viewBox="0 0 760 300"><defs><linearGradient id="eqFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#20e77d" stopOpacity=".4"/><stop offset="1" stopColor="#20e77d" stopOpacity="0"/></linearGradient></defs><g className="grid-lines"><path d="M25 50H735M25 100H735M25 150H735M25 200H735M25 250H735"/></g><path d={`${equityPath}L725 275L25 275Z`} fill="url(#eqFill)"/><path d={equityPath} className="equity-line"/></svg></motion.article>
        <motion.article className="glass summary-card" {...fade}><small>PERFORMANCE SUMMARY</small><div className="summary-grid"><StatCard label="Total Return" value="+132.7%" positive/><StatCard label="Win Rate" value="61.3%"/><StatCard label="Profit Factor" value="1.87"/><StatCard label="Total Trades" value="142"/><StatCard label="Best Trade" value="+18.4%" positive/><StatCard label="Avg. Trade" value="+1.32%" positive/></div></motion.article>
        <motion.article className="glass allocation-card" {...fade}><small>ASSET ALLOCATION</small><div className="allocation"><div className="donut"><div><strong>65%</strong><span>Equities</span></div></div><ul><li><i className="green"/>Equities <b>65%</b></li><li><i className="blue"/>Cash <b>20%</b></li><li><i className="purple"/>Options <b>10%</b></li><li><i className="gold"/>Crypto <b>5%</b></li></ul></div></motion.article>
        <motion.article id="approach" className="glass process-card" {...fade}><small>TRADING PROCESS</small><div className="process">{[['⌕','1. Analyze','Scan markets & identify trends'],['▣','2. Plan','Build setups & define risk'],['◎','3. Execute','Follow plan with discipline'],['▥','4. Review','Analyze results & learn'],['↗','5. Improve','Iterate & get better']].map((p,i)=><div className="process-step" key={p[1]}><span>{p[0]}</span><b>{p[1]}</b><p>{p[2]}</p>{i<4&&<i>→</i>}</div>)}</div></motion.article>
        <motion.article id="journal" className="glass list-card" {...fade}><small>LATEST JOURNAL ENTRIES</small><ul>{journalEntries.map(j=><li key={j[0]}><div><b>{j[0]}</b><span>{j[1]}</span></div><em>{j[2]}</em></li>)}</ul><a href="#journal">View All Entries →</a></motion.article>
        <motion.article id="resources" className="glass list-card" {...fade}><small>TOP SETUPS WATCHLIST</small><ul>{watchlist.map(w=><li key={w[0]}><b>{w[0]}</b><span>{w[1]}</span><em className={w[2].toLowerCase()}>{w[2]} ↑</em></li>)}</ul><a href="#resources">View Watchlist →</a></motion.article>
      </section>
      <motion.section id="about" className="glass philosophy page-width" {...fade}><div className="quote-mark">“</div><blockquote>The market does not reward urgency.<br/>It rewards <span>preparation.</span></blockquote><div className="values">{[['✺','Discipline','Over Motivation'],['◉','Patience','Over Prediction'],['⚙','Process','Over Outcomes'],['♢','Risk First','Always'],['⬡','Protect Capital','Stay Alive']].map(v=><div key={v[1]}><b>{v[0]}</b><span>{v[1]}</span><small>{v[2]}</small></div>)}</div></motion.section>
      <section className="footer-grid page-width"><motion.article className="glass newsletter" {...fade}><small>STAY AHEAD WITH MARKET INSIGHTS</small><p>Join readers who follow weekly market breakdowns and trade ideas.</p><form onSubmit={e=>e.preventDefault()}><input type="email" placeholder="Enter your email"/><button>Subscribe →</button></form></motion.article><motion.article className="glass footer-brand" {...fade}><Logo compact/><p>Logic over emotion.<br/>Discipline over impulse.</p><div className="socials"><a href="https://x.com/TradeWithMeOnX">𝕏</a><a href="#">▶</a><a href="#">◎</a><a href="mailto:">✉</a></div></motion.article><motion.article className="glass quick-links" {...fade}><small>QUICK LINKS</small><div>{['About','Approach','Dashboard','Journal','Resources','Disclaimer'].map(x=><a key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</div></motion.article><motion.article className="glass market-status" {...fade}><small>MARKET STATUS</small><strong>Market Open</strong><p>Closes in</p><div>{clock}</div></motion.article></section>
      <section id="disclaimer" className="disclaimer page-width">Educational and informational content only. Not financial, investment, tax, or legal advice. Trading and investing involve risk, including possible loss of principal.</section>
    </main><footer><span>© {new Date().getFullYear()} TradeWithBrady. All rights reserved.</span><span>Built with ♥ for traders.</span></footer>
  </div>
}
