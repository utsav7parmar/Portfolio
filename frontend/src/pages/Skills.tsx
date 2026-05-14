import { useState } from 'react'
import { motion } from 'framer-motion'

interface SkillItem {
  name: string
  image: string
}

const skills: SkillItem[] = [
  { name: 'Python', image: 'https://cdn.simpleicons.org/python/ffffff' },
  { name: 'Machine Learning', image: 'https://cdn.simpleicons.org/tensorflow/ffffff' },
  { name: 'Deep Learning', image: 'https://cdn.simpleicons.org/pytorch/ffffff' },
  { name: 'NLP', image: 'https://cdn.simpleicons.org/huggingface/ffffff' },
  { name: 'Pandas', image: 'https://cdn.simpleicons.org/pandas/ffffff' },
  { name: 'NumPy', image: 'https://cdn.simpleicons.org/numpy/ffffff' },
  { name: 'Scikit-learn', image: 'https://cdn.simpleicons.org/scikitlearn/ffffff' },
  { name: 'TensorFlow', image: 'https://cdn.simpleicons.org/tensorflow/ffffff' },
  { name: 'PyTorch', image: 'https://cdn.simpleicons.org/pytorch/ffffff' },
  { name: 'Matplotlib', image: 'https://cdn.simpleicons.org/matplotlib/ffffff' },
  { name: 'Seaborn', image: 'https://cdn.simpleicons.org/seaborn/ffffff' },
  { name: 'Statistics', image: 'https://img.icons8.com/ios-filled/96/ffffff/statistics.png' },
  { name: 'Probability', image: 'https://img.icons8.com/ios-filled/96/ffffff/probability.png' },
  { name: 'SQL', image: 'https://cdn.simpleicons.org/mysql/ffffff' },
  { name: 'Power BI', image: 'https://cdn.simpleicons.org/powerbi/ffffff' },
  { name: 'FastAPI', image: 'https://cdn.simpleicons.org/fastapi/ffffff' },
  { name: 'Django', image: 'https://cdn.simpleicons.org/django/ffffff' },
  { name: 'React', image: 'https://cdn.simpleicons.org/react/ffffff' },
  { name: 'HTML', image: 'https://cdn.simpleicons.org/html5/ffffff' },
  { name: 'CSS', image: 'https://cdn.simpleicons.org/css3/ffffff' },
  { name: 'GitHub', image: 'https://cdn.simpleicons.org/github/ffffff' },
  { name: 'Data Structures & Algorithms', image: 'https://img.icons8.com/ios-filled/96/ffffff/source-code.png' }
]

const rowSize = 11
const machineLearningSkills = skills.slice(0, rowSize)
const otherSkills = skills.slice(rowSize, rowSize * 2)

const certificationData = [
  {
    title: 'AWS Cloud Foundations',
    image: '/images/aws-cloud-foundations.png',
    subtitle: 'AWS Academy Certified',
    date: '2022'
  },
  {
    title: 'AWS Machine Learning Foundations',
    image: '/images/aws-machine-learning.png',
    subtitle: 'AWS Academy Certified',
    date: '2022'
  }
]

const repeatedMachineLearningSkills = [...machineLearningSkills, ...machineLearningSkills]
const repeatedOtherSkills = [...otherSkills, ...otherSkills]

function SkillTile({ skill }: { skill: SkillItem }) {
  return (
    <div className="group flex min-w-[7.5rem] flex-col items-center justify-center gap-3 rounded-[1.9rem] border border-cyan-400/15 bg-slate-950/60 px-4 py-5 text-center shadow-[0_22px_70px_rgba(14,165,233,0.14)] backdrop-blur-3xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-cyan-300/30 hover:bg-slate-900/90">
      <img
        src={skill.image}
        alt={skill.name}
        title={skill.name}
        className="h-14 w-14 rounded-3xl bg-slate-950/90 p-3 transition duration-300 group-hover:scale-110"
        loading="lazy"
        onError={(event) => {
          const target = event.currentTarget
          if (!target.dataset.fallback) {
            target.dataset.fallback = 'true'
            target.src = 'https://cdn.simpleicons.org/github/ffffff'
          }
        }}
      />
    </div>
  )
}

export default function Skills() {
  const [isPausedML, setIsPausedML] = useState(false)
  const [isPausedOther, setIsPausedOther] = useState(false)

  return (
    <section id="skills" className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 lg:px-12">
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
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
            
          </div>
        </div>

        <div className="grid gap-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-slate-950/70 px-4 py-6 shadow-[0_24px_80px_rgba(14,165,233,0.10)] backdrop-blur-xl"
            onMouseEnter={() => setIsPausedML(true)}
            onMouseLeave={() => setIsPausedML(false)}
            onTouchStart={() => setIsPausedML(true)}
            onTouchEnd={() => setIsPausedML(false)}
          >
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">
                Machine learning skills
              </span>
              <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                Hover to pause
              </span>
            </div>
            <div className="pointer-events-none overflow-hidden">
              <div
                className="flex flex-nowrap min-w-[200%] items-center gap-5"
                style={{
                  animation: `marqueeLeft 30s linear infinite`,
                  animationPlayState: isPausedML ? 'paused' : 'running'
                }}
              >
                {repeatedMachineLearningSkills.map((skill, index) => (
                  <SkillTile key={`ml-${skill.name}-${index}`} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-fuchsia-400/10 bg-slate-950/70 px-4 py-6 shadow-[0_24px_80px_rgba(244,114,182,0.10)] backdrop-blur-xl"
            onMouseEnter={() => setIsPausedOther(true)}
            onMouseLeave={() => setIsPausedOther(false)}
            onTouchStart={() => setIsPausedOther(true)}
            onTouchEnd={() => setIsPausedOther(false)}
          >
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm uppercase tracking-[0.28em] text-fuchsia-300/80">
                Remaining skills
              </span>
              <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                Hover to pause
              </span>
            </div>
            <div className="pointer-events-none overflow-hidden">
              <div
                className="flex flex-nowrap min-w-[200%] items-center gap-5"
                style={{
                  animation: `marqueeLeft 32s linear infinite`,
                  animationPlayState: isPausedOther ? 'paused' : 'running'
                }}
              >
                {repeatedOtherSkills.map((skill, index) => (
                  <SkillTile key={`other-${skill.name}-${index}`} skill={skill} />
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
