import ImageCard from '../components/ImageCard'
import SectionWrapper from '../components/SectionWrapper'
import { about } from '../data/portfolioData'

export default function About() {
  return (
    <SectionWrapper id="about" title="About">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="card-glass p-8">
            <h2 className="text-3xl font-semibold text-white">About me</h2>
            <p className="mt-5 text-slate-300">{about.headline}</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {about.paragraphs.map((paragraph) => (
              <div key={paragraph} className="card-glass p-6 text-slate-300">
                <p>{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card-glass overflow-hidden p-0">
          <ImageCard src={about.image} alt="About portfolio" className="h-full min-h-[420px] w-full" />
        </div>
      </div>
    </SectionWrapper>
  )
}
