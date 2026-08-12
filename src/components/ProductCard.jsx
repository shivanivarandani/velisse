import { Link } from 'react-router-dom'
import ArtMotif from './ArtMotif'
import './ProductCard.css'

const formatPrice = (price, currency) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(price)

export default function ProductCard({ product }) {
  return (
    <Link to={`/shop/${product.id}`} className="product-card">
      <div className="product-card-frame">
        <ArtMotif type={product.motif} title={product.name} />
        <span className="product-card-plinth" />
      </div>
      <div className="product-card-meta">
        <span className="product-card-collection">{product.collection}</span>
        <h3 className="product-card-name">{product.name}</h3>
        <span className="product-card-price">{formatPrice(product.price, product.currency)}</span>
      </div>
    </Link>
  )
}
