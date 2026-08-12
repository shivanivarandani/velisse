import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="not-found container">
      <span className="eyebrow">404</span>
      <h1>This piece isn't on display.</h1>
      <p>The page you're looking for has been moved, sold, or never cast.</p>
      <Link to="/" className="cta-link">
        Return Home
        <span className="arrow" aria-hidden>&rarr;</span>
      </Link>
    </section>
  )
}
