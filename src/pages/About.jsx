import PageHeader from '../components/PageHeader'
import ArtMotif from '../components/ArtMotif'
import Reveal from '../components/Reveal'
import './About.css'

const PRINCIPLES = [
  {
    motif: 'column',
    title: 'Structure',
    text: 'Every piece begins as a load-bearing idea before it becomes an ornament — weight, balance, and tension resolved first, decoration second.',
  },
  {
    motif: 'sculpture',
    title: 'Mass',
    text: 'We design in volume, not outline. A ring should have presence in the hand before it has presence on the finger.',
  },
  {
    motif: 'gallery',
    title: 'Negative Space',
    text: 'What we leave out is deliberate. Empty space is not absence — it is where the eye is invited to rest.',
  },
  {
    motif: 'chess',
    title: 'Strategy',
    text: 'Like a well-played opening, a strong piece reveals its intent slowly — nothing is incidental, nothing is wasted.',
  },
]

export default function About() {
  return (
    <>
      <PageHeader eyebrow="The House" title="About VÉLISSE" />

      <section className="about-intro container">
        <Reveal className="about-intro-text">
          <p>
            VÉLISSE began as a question asked in a studio full of architecture books and no
            gemstones: what would jewelry look like if it were designed by someone who thought
            in load paths and sightlines, rather than settings and carats? The answer became
            our first collection, and the discipline has held ever since.
          </p>
        </Reveal>
      </section>

      <section className="about-principles container">
        <span className="eyebrow">Design Principles</span>
        <div className="about-principles-grid">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) + 1} className="about-principle">
              <div className="about-principle-motif">
                <ArtMotif type={p.motif} title={p.title} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-atelier container">
        <Reveal className="hairline about-rule" />
        <Reveal delay={1}>
          <p className="about-quote">
            "We don't sketch jewelry. We draft it — the way you would draft a building
            that happens to be worn."
          </p>
          <span className="about-quote-attr">— The Design Studio, VÉLISSE</span>
        </Reveal>
      </section>
    </>
  )
}
