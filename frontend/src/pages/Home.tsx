import { motion } from 'framer-motion'
import ImageCard from '../components/ImageCard'
import { contact, hero, heroImages } from '../data/portfolioData'

export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="space-y-8 lg:flex-[0.6]">
          <span className="inline-flex rounded-full bg-cyan-400/15 px-4 py-2 text-sm uppercase tracking-[0.35em] text-cyan-300">
            Modern portfolio showcase
          </span>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{hero.subtitle}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#projects" className="btn-glow">{hero.cta}</a>
              <a href={contact.resumeUrl} className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-white">
                View resume
              </a>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {heroImages.map((src, index) => (
            <ImageCard key={src} src={src} alt={`Portfolio scene ${index + 1}`} className="h-72 w-full" />
          ))}
        </div>
      </div>
    </section>
  )
}
