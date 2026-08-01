export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} TradeWithBrady. Built for disciplined traders.</p>
        <nav aria-label="Footer navigation" className="flex gap-4">
          <a href="#home" className="transition hover:text-white">Home</a>
          <a href="#dashboard" className="transition hover:text-white">Dashboard</a>
          <a href="#journal" className="transition hover:text-white">Journal</a>
        </nav>
      </div>
    </footer>
  )
}
