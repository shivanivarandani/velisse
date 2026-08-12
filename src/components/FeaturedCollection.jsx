import { Link } from 'react-router-dom'
import products from '../data/products.json'
import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import './FeaturedCollection.css'

export default function FeaturedCollection() {
  const featured = products.filter((p) => p.featured)

  return (
    <section className="featured container">
      <div className="featured-head">
        <SectionHeading
          eyebrow="Selected Works"
          title="The Featured Collection"
          description="A rotating edit of the pieces currently defining the house — chosen for how they hold light, weight, and space."
        />
        <Reveal delay={1}>
          <Link to="/shop" className="cta-link">
            View All Pieces
            <span className="arrow" aria-hidden>&rarr;</span>
          </Link>
        </Reveal>
      </div>

      <div className="featured-grid">
        {featured.map((product, i) => (
          <Reveal key={product.id} delay={(i % 3) + 1} className="featured-item">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
