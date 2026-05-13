import ProjectCard from '../components/ProjectCard'
import SectionWrapper from '../components/SectionWrapper'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} title={project.title} description={project.description} tags={project.tags} image={project.image} />
        ))}
      </div>
    </SectionWrapper>
  )
}
