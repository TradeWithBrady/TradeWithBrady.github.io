import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Dashboard from './components/Dashboard'
import Performance from './components/Performance'
import Timeline from './components/Timeline'
import Journal from './components/Journal'
import Footer from './components/Footer'

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 280)
    return () => window.clearTimeout(timer)
  }, [])

  if (!ready) {
    return (
      <div className="loading-shell min-h-screen bg-[#05070b] text-slate-100">
        <div className="loading-card">
          <div className="loading-shimmer" />
          <div className="mt-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
            Loading market intelligence
          </div>
          <div className="mt-4 h-2 w-full rounded-full bg-white/10">
            <div className="loading-line h-2 rounded-full" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-shell min-h-screen bg-[#05070b] text-slate-100">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Ticker />
        <Dashboard />
        <Performance />
        <Timeline />
        <Journal />
      </main>
      <Footer />
    </div>
  )
}
