import Reveal from './Reveal'
import './SectionHeading.css'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <Reveal className={`section-heading align-${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-heading-title">{title}</h2>
      {description && <p className="section-heading-desc">{description}</p>}
    </Reveal>
  )
}
