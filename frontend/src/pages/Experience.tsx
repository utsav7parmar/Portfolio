import SectionWrapper from '../components/SectionWrapper'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="grid gap-6">
        {experience.map((item) => (
          <div key={item.role} className="card-glass p-8">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                <p className="text-sm text-cyan-300">{item.company}</p>
              </div>
              <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">{item.period}</span>
            </div>
            <p className="text-slate-300">{item.details}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
