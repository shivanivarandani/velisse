import journal from '../data/journal.json'
import PageHeader from '../components/PageHeader'
import JournalCard from '../components/JournalCard'
import Reveal from '../components/Reveal'
import './Journal.css'

export default function Journal() {
  return (
    <>
      <PageHeader
        eyebrow="Notes from the Studio"
        title="Journal"
        description="Essays on architecture, design process, and the ideas that sit behind each collection."
      />

      <div className="container journal-list">
        {journal.map((post, i) => (
          <Reveal key={post.id} delay={(i % 4) + 1}>
            <JournalCard post={post} />
          </Reveal>
        ))}
      </div>
    </>
  )
}
