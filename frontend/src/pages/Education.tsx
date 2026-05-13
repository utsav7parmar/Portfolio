import SectionWrapper from '../components/SectionWrapper'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="grid gap-6 lg:grid-cols-2">
        {education.map((item) => (
          <div key={item.degree} className="card-glass p-8">
            <h3 className="text-2xl font-semibold text-white">{item.degree}</h3>
            <p className="mt-2 text-sm text-cyan-300">{item.school}</p>
            <p className="mt-4 text-slate-300">{item.details}</p>
            <p className="mt-3 text-sm text-slate-400">{item.period}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
