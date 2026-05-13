import { motion } from 'framer-motion'

export default function SectionWrapper({
  id,
  title,
  children
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="py-16">
      <div className="mb-10 flex items-center gap-3 text-slate-100">
        <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-300">{title}</span>
      </div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        {children}
      </motion.div>
    </section>
  )
}
