import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Dashboard from './components/Dashboard'
import Performance from './components/Performance'
import Timeline from './components/Timeline'
import Journal from './components/Journal'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070b] text-slate-100">
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
