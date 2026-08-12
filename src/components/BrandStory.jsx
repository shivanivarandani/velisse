import Reveal from './Reveal'
import './BrandStory.css'

export default function BrandStory() {
  return (
    <section className="brand-story">
      <div className="brand-story-glow" aria-hidden />
      <div className="container brand-story-inner">
        <Reveal className="hairline brand-story-rule" />
        <Reveal delay={1}>
          <p className="brand-story-quote">
            Where <em>architecture</em> meets emotion,
            <br />
            and form becomes <em>feeling</em>.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <p className="brand-story-body">
            VÉLISSE was founded on a single conviction: that a piece of jewelry can be
            engineered with the same rigor as a building, and felt with the same intimacy
            as a private gesture. Every collection begins not with a stone, but with a
            structural idea — cantilever, mass, negative space, balance — drawn from the
            architects, sculptors, and artists we return to again and again.
          </p>
        </Reveal>
        <Reveal delay={3} className="hairline brand-story-rule" />
      </div>
    </section>
  )
}
