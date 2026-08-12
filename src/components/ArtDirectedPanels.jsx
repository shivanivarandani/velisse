import { Link } from 'react-router-dom'
import collections from '../data/collections.json'
import ArtMotif from './ArtMotif'
import Reveal from './Reveal'
import { useParallax } from '../hooks/useParallax'
import './ArtDirectedPanels.css'

function Panel({ collection, index, reverse }) {
  const motifRef = useParallax(0.05)

  return (
    <article className={`ad-panel ${reverse ? 'is-reverse' : ''}`}>
      <div className="ad-panel-visual" ref={motifRef}>
        <ArtMotif type={collection.motif} title={collection.name} />
      </div>

      <Reveal as="div" className="ad-panel-copy">
        <span className="ad-panel-index">{String(index + 1).padStart(2, '0')} — {collection.year}</span>
        <h3 className="ad-panel-title">{collection.name}</h3>
        <p className="ad-panel-tagline">{collection.tagline}</p>
        <p className="ad-panel-desc">{collection.description}</p>
        <Link to={`/collections/${collection.id}`} className="cta-link">
          Explore the Collection
          <span className="arrow" aria-hidden>&rarr;</span>
        </Link>
      </Reveal>
    </article>
  )
}

export default function ArtDirectedPanels() {
  return (
    <section className="ad-panels">
      {collections.map((collection, i) => (
        <Panel key={collection.id} collection={collection} index={i} reverse={i % 2 === 1} />
      ))}
    </section>
  )
}
