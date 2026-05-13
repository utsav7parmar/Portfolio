import SectionWrapper from '../components/SectionWrapper'
import { journal } from '../data/portfolioData'

export default function Journal() {
  return (
    <SectionWrapper id="journal" title="Journal">
      <div className="grid gap-6 lg:grid-cols-2">
        {journal.map((entry) => (
          <article key={entry.title} className="card-glass p-8">
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-300">{entry.category}</span>
            <h3 className="mt-4 text-2xl font-semibold text-white">{entry.title}</h3>
            <p className="mt-3 text-slate-300">{entry.summary}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
