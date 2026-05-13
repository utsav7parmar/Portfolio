import { socialLinks } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Built by Utsav Parmar — modern portfolio with smooth motion.</p>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-sm text-slate-200 transition hover:text-cyan-300">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
