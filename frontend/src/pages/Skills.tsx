import { useState } from 'react'
import { motion } from 'framer-motion'

interface SkillItem {
  name: string
  icon: string
}

const skills: SkillItem[] = [
  { name: 'Python', icon: 'python' },
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'React', icon: 'react' },
  { name: 'Django', icon: 'django' },
  { name: 'Flask', icon: 'flask' },
  { name: 'API', icon: 'postman' },
  { name: 'Git / GitHub', icon: 'github' },
  { name: 'Machine Learning', icon: 'tensorflow' },
  { name: 'Deep Learning', icon: 'pytorch' },
  { name: 'NLP', icon: 'huggingface' },
  { name: 'DSA', icon: 'code' },
  { name: 'Statistics', icon: 'pandas' },
  { name: 'Probability', icon: 'numpy' }
]

const libraries: SkillItem[] = [
  { name: 'Pandas', icon: 'pandas' },
  { name: 'NumPy', icon: 'numpy' },
  { name: 'Matplotlib', icon: 'matplotlib' },
  { name: 'Seaborn', icon: 'seaborn' },
  { name: 'Scikit-learn', icon: 'scikitlearn' },
  { name: 'TensorFlow', icon: 'tensorflow' },
  { name: 'PyTorch', icon: 'pytorch' }
]

const certificationData = [
  {
    title: 'AWS Cloud Foundations',
    image: '/images/aws-cloud-foundations.png',
    subtitle: 'AWS Academy Certified',
    date: '2025'
  },
  {
    title: 'AWS Machine Learning Foundations',
    image: '/images/aws-machine-learning.png',
    subtitle: 'AWS Academy Certified',
    date: '2025'
  }
]

const repeatedSkills = [...skills, ...skills]
const repeatedLibraries = [...libraries, ...libraries]

function SkillTile({ skill }: { skill: SkillItem }) {
  return (
    <div className="group flex min-w-[7.5rem] flex-col items-center justify-center gap-3 rounded-[1.9rem] border border-cyan-400/15 bg-slate-950/60 px-4 py-5 text-center shadow-[0_22px_70px_rgba(14,165,233,0.14)] backdrop-blur-3xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-cyan-300/30 hover:bg-slate-900/90">
      <img
        src={`https://skillicons.dev/icons?i=${skill.icon}`}
        alt={skill.name}
        className="h-12 w-12 rounded-3xl bg-slate-950/90 p-2 transition duration-300 group-hover:scale-110"
        loading="lazy"
      />
      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-300">
        {skill.name}
      </span>
    </div>
  )
}

export default function Skills() {
  const [isPausedLeft, setIsPausedLeft] = useState(false)
  const [isPausedRight, setIsPausedRight] = useState(false)

  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 lg:px-12">
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_48px_120px_rgba(14,165,233,0.14)] backdrop-blur-3xl"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800/80 p-8 shadow-[0_30px_90px_rgba(56,189,248,0.12)] before:absolute before:-left-24 before:top-0 before:h-80 before:w-96 before:rounded-full before:bg-cyan-400/10 before:blur-3xl after:absolute after:-right-24 after:bottom-0 after:h-72 after:w-96 after:rounded-full after:bg-fuchsia-500/10 after:blur-3xl">
          <div className="relative z-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.36em] text-cyan-300/80">
              Tech Stack & Skills
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Technologies and tools I use to build scalable AI and software solutions.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              A polished, futuristic showcase of modern web, cloud, AI, and database tooling with premium motion and glassmorphism styling.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-slate-950/70 px-4 py-6 shadow-[0_24px_80px_rgba(14,165,233,0.10)] backdrop-blur-xl"
            onMouseEnter={() => setIsPausedLeft(true)}
            onMouseLeave={() => setIsPausedLeft(false)}
            onTouchStart={() => setIsPausedLeft(true)}
            onTouchEnd={() => setIsPausedLeft(false)}
          >
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">
                Infinite slide — left
              </span>
              <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                Hover to pause
              </span>
            </div>
            <div className="pointer-events-none overflow-hidden">
              <div
                className="flex min-w-[200%] items-center gap-5"
                style={{
                  animation: `marqueeLeft 28s linear infinite`,
                  animationPlayState: isPausedLeft ? 'paused' : 'running'
                }}
              >
                {repeatedSkills.map((skill, index) => (
                  <SkillTile key={`${skill.icon}-left-${index}`} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[2rem] border border-fuchsia-400/10 bg-slate-950/70 px-4 py-6 shadow-[0_24px_80px_rgba(244,114,182,0.10)] backdrop-blur-xl"
            onMouseEnter={() => setIsPausedRight(true)}
            onMouseLeave={() => setIsPausedRight(false)}
            onTouchStart={() => setIsPausedRight(true)}
            onTouchEnd={() => setIsPausedRight(false)}
          >
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm uppercase tracking-[0.28em] text-fuchsia-300/80">
                Infinite slide — right
              </span>
              <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                Hover to pause
              </span>
            </div>
            <div className="pointer-events-none overflow-hidden">
              <div
                className="flex min-w-[200%] items-center gap-5"
                style={{
                  animation: `marqueeRight 32s linear infinite`,
                  animationPlayState: isPausedRight ? 'paused' : 'running'
                }}
              >
                {repeatedLibraries.map((skill, index) => (
                  <SkillTile key={`${skill.icon}-right-${index}`} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 text-slate-400 shadow-[0_24px_60px_rgba(15,23,42,0.35)]">
          <p className="text-sm leading-6 text-slate-300 sm:text-base">
            Built for desktop, tablet, and mobile with soft neon glow, premium gradients, and advanced animation. This Skills section blends high-end SaaS portfolio polish with modern AI engineer styling.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {certificationData.map((cert) => (
              <div key={cert.title} className="group flex flex-col items-center gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/70 px-6 py-5 text-center shadow-[0_18px_80px_rgba(14,165,233,0.12)] transition duration-300 hover:shadow-[0_24px_100px_rgba(56,189,248,0.18)]">
                <img src={cert.image} alt={cert.title} className="h-44 w-44 object-contain" />
                <div>
                  <p className="text-base font-semibold text-white">{cert.title}</p>
                  <p className="mt-1 text-sm text-cyan-300">{cert.subtitle}</p>
                  <p className="mt-2 text-sm text-slate-400">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
