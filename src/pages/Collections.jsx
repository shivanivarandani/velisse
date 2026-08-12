import PageHeader from '../components/PageHeader'
import ArtDirectedPanels from '../components/ArtDirectedPanels'

export default function Collections() {
  return (
    <>
      <PageHeader
        eyebrow="Bodies of Work"
        title="Collections"
        description="Each collection is built around a single structural idea, drawn from architecture, strategy games, and sculpture — then translated, piece by piece, into gold."
      />
      <ArtDirectedPanels />
    </>
  )
}
