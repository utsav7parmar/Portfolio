import { motion } from 'framer-motion'
import ImageCard from './ImageCard'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image?: string
}

export default function ProjectCard({ title, description, tags, image }: ProjectCardProps) {
  return (
    <motion.article whileHover={{ y: -6 }} className="card-glass group overflow-hidden">
      {image ? (
        <ImageCard src={image} alt={title} className="h-56 w-full" />
      ) : (
        <div className="h-56 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-slate-900 to-violet-500/10 p-4" />
      )}
      <div className="mt-6 space-y-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-slate-300">{description}</p>
        <div className="flex flex-wrap gap-2 pt-3">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
