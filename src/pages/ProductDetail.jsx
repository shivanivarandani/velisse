import { Link, useParams, Navigate } from 'react-router-dom'
import products from '../data/products.json'
import collections from '../data/collections.json'
import ArtMotif from '../components/ArtMotif'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import './ProductDetail.css'

const formatPrice = (price, currency) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(price)

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) return <Navigate to="/shop" replace />

  const collection = collections.find((c) => c.id === product.collection)
  const related = products.filter((p) => p.collection === product.collection && p.id !== product.id).slice(0, 3)

  return (
    <article className="product-detail">
      <div className="container product-detail-grid">
        <Reveal className="product-detail-visual">
          <ArtMotif type={product.motif} title={product.name} />
        </Reveal>

        <Reveal delay={1} className="product-detail-info">
          <Link to={`/collections/${product.collection}`} className="eyebrow product-detail-collection">
            {collection?.name ?? product.collection}
          </Link>
          <h1 className="product-detail-name">{product.name}</h1>
          <span className="product-detail-price">{formatPrice(product.price, product.currency)}</span>
          <p className="product-detail-desc">{product.description}</p>

          <dl className="product-detail-specs">
            <div>
              <dt>Materials</dt>
              <dd>{product.materials}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd className="capitalize">{product.category}</dd>
            </div>
          </dl>

          <Link to="/contact" className="cta-link">
            Inquire About This Piece
            <span className="arrow" aria-hidden>&rarr;</span>
          </Link>
        </Reveal>
      </div>

      {related.length > 0 && (
        <div className="container product-detail-related">
          <span className="eyebrow">From the Same Collection</span>
          <div className="product-detail-related-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
