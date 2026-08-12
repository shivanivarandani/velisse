import { useMemo, useState } from 'react'
import products from '../data/products.json'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import './Shop.css'

const CATEGORIES = ['all', 'rings', 'necklaces', 'earrings', 'bracelets']

export default function Shop() {
  const [active, setActive] = useState('all')

  const filtered = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active]
  )

  return (
    <>
      <PageHeader
        eyebrow="The Full Collection"
        title="Shop"
        description="Every current piece, presented on its own — no distraction, no filler. Select a category to narrow the view."
      />

      <div className="container shop-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`shop-filter ${active === cat ? 'is-active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="container shop-grid">
        {filtered.map((product, i) => (
          <Reveal key={product.id} delay={(i % 3) + 1}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </>
  )
}
