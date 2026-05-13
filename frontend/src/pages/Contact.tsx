import SectionWrapper from '../components/SectionWrapper'
import ContactForm from '../components/ContactForm'
import { contact, socialLinks } from '../data/portfolioData'

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Contact">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card-glass p-8">
          <h2 className="text-3xl font-semibold text-white">Let's connect</h2>
          <p className="mt-4 text-slate-300">Share your project idea, feedback, or reach out for collaborations. I respond quickly and keep communication direct.</p>
          <div className="mt-8 space-y-6 text-slate-300">
            <div>
              <p className="font-semibold text-white">Email</p>
              <p>{contact.email}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Social</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-white">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-white">Location</p>
              <p>{contact.location}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Resume</p>
              <a href={contact.resumeUrl} className="mt-3 inline-flex items-center rounded-full border border-cyan-500 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/10">
                Download my resume
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </SectionWrapper>
  )
}
