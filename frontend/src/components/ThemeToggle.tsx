import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem('theme')
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setActive(true)
    }
  }, [])

  const toggle = () => {
    const next = !active
    setActive(next)
    document.documentElement.classList.toggle('dark', next)
    window.localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
      aria-label="Toggle theme"
    >
      {active ? '🌙' : '☀️'}
    </button>
  )
}
