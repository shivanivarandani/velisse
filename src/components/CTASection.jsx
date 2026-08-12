import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import './CTASection.css'

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container cta-section-inner">
        <Reveal>
          <span className="eyebrow">By Appointment</span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="cta-section-title">
            Private viewings, <em>held quietly</em>.
          </h2>
        </Reveal>
        <Reveal delay={2} className="cta-section-actions">
          <Link to="/contact" className="cta-link">
            Request an Appointment
            <span className="arrow" aria-hidden>&rarr;</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
