import { Link } from 'react-router-dom'
import ArtMotif from './ArtMotif'
import { useParallax } from '../hooks/useParallax'
import './Hero.css'

export default function Hero() {
  const motifRef = useParallax(0.08)

  return (
    <section className="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow">Est. as an idea, cast as an object</span>
          <h1 className="hero-title">
            Jewelry, <em>drafted</em>
            <br />
            like architecture.
          </h1>
          <p className="hero-sub">
            VÉLISSE is a jewelry house for those who read a room before they read a ring —
            objects of balance, mass, and quiet consequence.
          </p>
          <Link to="/shop" className="cta-link hero-cta">
            Enter the Atelier
            <span className="arrow" aria-hidden>&rarr;</span>
          </Link>
        </div>

        <div className="hero-visual" ref={motifRef}>
          <ArtMotif type="column" title="Featured piece — the Meridian line" />
          <span className="hero-visual-ring" />
        </div>
      </div>

      <div className="hero-foot container">
        <span className="hero-index">01 — Cantilever Collection</span>
        <span className="hero-scroll">
          <span className="hero-scroll-line" />
          Scroll
        </span>
      </div>
    </section>
  )
}
