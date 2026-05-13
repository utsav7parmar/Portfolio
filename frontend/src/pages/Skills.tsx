import SectionWrapper from '../components/SectionWrapper'
import SkillBadge from '../components/SkillBadge'
import { certifications, skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="grid gap-10">
        <div className="card-glass p-8">
          <h2 className="text-3xl font-semibold text-white">My skillset</h2>
          <p className="mt-4 text-slate-300">Core competencies shown as clean skill badges. These reflect the technologies I use every day.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <SkillBadge key={skill.label} icon={skill.icon} label={skill.label} />
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div key={cert.name} className="card-glass p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Certification</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{cert.name}</h3>
              <p className="mt-3 text-sm text-slate-400">{cert.issuer}</p>
              <p className="mt-2 text-sm text-slate-500">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
