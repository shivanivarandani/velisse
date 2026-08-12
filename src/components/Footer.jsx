import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <span className="footer-mark">VÉLISSE</span>
          <p className="footer-line">Where architecture meets emotion, and form becomes feeling.</p>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <span className="eyebrow">Navigate</span>
            <Link to="/shop">Shop</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/about">About</Link>
            <Link to="/journal">Journal</Link>
          </div>
          <div className="footer-col">
            <span className="eyebrow">Client Care</span>
            <Link to="/contact">Contact</Link>
            <a href="#atelier">The Atelier</a>
            <a href="#care">Jewelry Care</a>
            <a href="#shipping">Shipping &amp; Returns</a>
          </div>
          <div className="footer-col">
            <span className="eyebrow">Follow</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
          </div>
        </div>
      </div>

      <div className="hairline container" />

      <div className="container footer-bottom">
        <span>&copy; {year} VÉLISSE. All rights reserved.</span>
        <span>Designed as an object, not a template.</span>
      </div>
    </footer>
  )
}
