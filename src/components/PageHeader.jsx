import Reveal from './Reveal'
import './PageHeader.css'

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="page-header container">
      <Reveal>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="page-header-title">{title}</h1>
        {description && <p className="page-header-desc">{description}</p>}
      </Reveal>
    </header>
  )
}
