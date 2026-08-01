const heroImage = '/final.png'

export default function Hero() {

  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="hero-backdrop absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:72px_72px] opacity-35" />
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-[-5%] top-[15%] h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
            Premium market intelligence
          </div>
          <h1 id="hero-title" className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            Trade with Logic.<br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-400 bg-clip-text text-transparent">Not Emotion.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            Swing trading, long-term investing, and disciplined risk management in one premium experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#dashboard" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 shadow-[0_18px_60px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:scale-[1.01]">
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
        </div>

        <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center">
          <img
            src={heroImage}
            alt="Bull artwork representing TradeWithBrady's trading philosophy"
            width={768}
            height={768}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="relative z-10 h-auto w-full max-w-[640px] object-contain mix-blend-screen"
          />
        </div>
      </div>
    </section>
  )
}
