import { useParams, Navigate, Link } from 'react-router-dom'
import journal from '../data/journal.json'
import ArtMotif from '../components/ArtMotif'
import Reveal from '../components/Reveal'
import './JournalPost.css'

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

export default function JournalPost() {
  const { id } = useParams()
  const post = journal.find((p) => p.id === id)

  if (!post) return <Navigate to="/journal" replace />

  return (
    <article className="journal-post">
      <header className="journal-post-header container">
        <Reveal>
          <Link to="/journal" className="eyebrow">&larr; Journal</Link>
          <span className="journal-post-meta">{post.category} — {formatDate(post.date)}</span>
          <h1 className="journal-post-title">{post.title}</h1>
        </Reveal>
      </header>

      <div className="journal-post-motif">
        <ArtMotif type={post.motif} title={post.title} />
      </div>

      <div className="container journal-post-body">
        {post.body.map((para, i) => (
          <Reveal as="p" key={i} delay={(i % 3) + 1}>
            {para}
          </Reveal>
        ))}
      </div>
    </article>
  )
}
