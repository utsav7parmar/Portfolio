export default function SkillBadge({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-white">
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </span>
  )
}
