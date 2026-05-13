export default function SkillBadge({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="group relative flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-slate-900/80 transition hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/50" title={label}>
      <span className="text-3xl">{icon}</span>
      <div className="invisible absolute -bottom-10 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-slate-950 px-2 py-1 text-xs text-slate-300 group-hover:visible">
        {label}
      </div>
    </div>
  )
}
