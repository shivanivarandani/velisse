import { useParams, Navigate, Link } from 'react-router-dom'
import collections from '../data/collections.json'
import products from '../data/products.json'
import ArtMotif from '../components/ArtMotif'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import './CollectionDetail.css'

export default function CollectionDetail() {
  const { id } = useParams()
  const collection = collections.find((c) => c.id === id)

  if (!collection) return <Navigate to="/collections" replace />

  const items = products.filter((p) => p.collection === id)

  return (
    <article>
      <section className="collection-hero container">
        <Reveal className="collection-hero-visual">
          <ArtMotif type={collection.motif} title={collection.name} />
        </Reveal>
        <Reveal delay={1} className="collection-hero-copy">
          <Link to="/collections" className="eyebrow">&larr; All Collections</Link>
          <h1 className="collection-hero-title">{collection.name}</h1>
          <p className="collection-hero-tagline">{collection.tagline}</p>
          <p className="collection-hero-desc">{collection.description}</p>
        </Reveal>
      </section>

      <section className="container collection-grid">
        {items.map((product, i) => (
          <Reveal key={product.id} delay={(i % 3) + 1}>
            <ProductCard product={product} />
          </Reveal>
        ))}
        {items.length === 0 && (
          <p className="collection-empty">New pieces from this collection are in the atelier — check back soon.</p>
        )}
      </section>
    </article>
  )
}
