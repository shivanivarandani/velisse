import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import './Contact.css'

const initialForm = { name: '', email: '', interest: 'Private Viewing', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact"
        description="For private viewings, bespoke commissions, or press inquiries — the atelier is by appointment only."
      />

      <div className="container contact-grid">
        <Reveal className="contact-info">
          <div className="contact-info-block">
            <span className="eyebrow">The Atelier</span>
            <p>24 Ashworth Row<br />New York, NY 10013</p>
          </div>
          <div className="contact-info-block">
            <span className="eyebrow">Correspondence</span>
            <p>
              <a href="mailto:atelier@velisse.com">atelier@velisse.com</a>
              <br />
              <a href="tel:+12125550134">+1 (212) 555-0134</a>
            </p>
          </div>
          <div className="contact-info-block">
            <span className="eyebrow">Hours</span>
            <p>Tuesday — Saturday<br />By appointment, 11am – 6pm</p>
          </div>
        </Reveal>

        <Reveal delay={1} className="contact-form-wrap">
          {submitted ? (
            <div className="contact-success">
              <span className="eyebrow">Received</span>
              <p>
                Thank you, {form.name.split(' ')[0] || 'there'}. Your inquiry has been noted —
                a member of the atelier will respond within two business days.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
              </div>

              <div className="contact-field">
                <label htmlFor="interest">Inquiry Type</label>
                <select id="interest" name="interest" value={form.interest} onChange={handleChange}>
                  <option>Private Viewing</option>
                  <option>Bespoke Commission</option>
                  <option>Press &amp; Partnerships</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required value={form.message} onChange={handleChange} />
              </div>

              <button type="submit" className="cta-link contact-submit">
                Send Inquiry
                <span className="arrow" aria-hidden>&rarr;</span>
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </>
  )
}
