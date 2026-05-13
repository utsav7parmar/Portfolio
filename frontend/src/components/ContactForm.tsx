import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSending(true)
    setStatus('')

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch('/api/contact/', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        setStatus('Message sent successfully — thank you!')
        event.currentTarget.reset()
      } else {
        const result = await response.json()
        setStatus(result.detail || 'Unable to send message. Please try again.')
      }
    } catch (error) {
      setStatus('Network error. Please try again later.')
    }

    setSending(false)
  }

  return (
    <form onSubmit={handleSubmit} className="card-glass grid gap-6 p-8">
      <div className="grid gap-4 lg:grid-cols-2">
        <input name="name" type="text" placeholder="Your name" required />
        <input name="email" type="email" placeholder="Your email" required />
      </div>
      <input name="subject" type="text" placeholder="Subject" required />
      <textarea name="message" rows={5} placeholder="Tell me about your idea or feedback" required />
      <button type="submit" className="btn-glow" disabled={sending}>
        {sending ? 'Sending...' : 'Send message'}
      </button>
      {status && <p className="text-sm text-cyan-200">{status}</p>}
    </form>
  )
}
