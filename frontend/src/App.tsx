import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Journal from './pages/Journal'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-cyan-500/20 to-transparent opacity-80 blur-3xl" />
        <Home />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-6 sm:px-8">
          <About />
          <Skills />
          <Experience />
          <Education />
          <Journal />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
