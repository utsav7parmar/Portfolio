import { navLinks } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#home" className="text-xl font-semibold tracking-tight text-cyan-300">
          Utsav Parmar
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.path} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="#contact" className="rounded-full border border-cyan-500 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/10">
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}
