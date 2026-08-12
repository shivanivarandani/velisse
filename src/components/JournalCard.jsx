import { Link } from 'react-router-dom'
import './JournalCard.css'

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

export default function JournalCard({ post }) {
  return (
    <Link to={`/journal/${post.id}`} className="journal-card">
      <div className="journal-card-top">
        <span className="journal-card-category eyebrow">{post.category}</span>
        <span className="journal-card-date">{formatDate(post.date)}</span>
      </div>
      <h3 className="journal-card-title">{post.title}</h3>
      <p className="journal-card-excerpt">{post.excerpt}</p>
      <span className="cta-link journal-card-cta">
        Read
        <span className="arrow" aria-hidden>&rarr;</span>
      </span>
    </Link>
  )
}
