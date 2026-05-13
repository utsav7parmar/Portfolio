export default function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card-glass">
      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      <ul className="space-y-2 text-slate-300">
        {items.map((skill) => (
          <li key={skill} className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
