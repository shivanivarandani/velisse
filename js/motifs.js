/* VÉLISSE — hand-drawn line-art motifs (architecture, chess, gallery,
   sculpture, jewelry silhouettes) rendered in thin gold linework in
   place of photography. */

const VELISSE_MOTIF_PATHS = {
  column: '<line x1="60" y1="14" x2="60" y2="186" /><line x1="30" y1="14" x2="90" y2="14" /><line x1="30" y1="186" x2="90" y2="186" /><line x1="60" y1="60" x2="150" y2="60" /><line x1="150" y1="60" x2="150" y2="80" /><circle cx="60" cy="60" r="4" fill="currentColor" stroke="none" />',
  chess: '<path d="M76 176 H136 M84 176 L84 150 H128 L128 176" /><path d="M88 150 C 88 110, 70 100, 78 76 C 84 58, 108 52, 118 70 C 126 84, 112 92, 118 104 C 126 118, 132 130, 124 150 Z" /><circle cx="112" cy="66" r="5" />',
  gallery: '<path d="M40 120 V60 A60 60 0 0 1 160 60 V120" /><line x1="40" y1="120" x2="40" y2="176" /><line x1="160" y1="120" x2="160" y2="176" /><line x1="24" y1="176" x2="56" y2="176" /><line x1="144" y1="176" x2="176" y2="176" /><rect x="88" y="86" width="24" height="34" />',
  sculpture: '<path d="M70 186 L60 120 L84 40 L116 40 L140 120 L130 186 Z" /><line x1="60" y1="120" x2="140" y2="120" /><line x1="84" y1="40" x2="84" y2="70" /><line x1="116" y1="40" x2="116" y2="70" />',
  ring: '<circle cx="100" cy="128" r="46" /><path d="M78 84 L100 44 L122 84 Z" /><circle cx="100" cy="66" r="4" fill="currentColor" stroke="none" />',
  necklace: '<path d="M40 40 C 40 120, 160 120, 160 40" /><path d="M84 118 L100 156 L116 118 Z" /><circle cx="100" cy="150" r="4" fill="currentColor" stroke="none" />',
  earring: '<circle cx="100" cy="50" r="10" /><line x1="100" y1="60" x2="100" y2="90" /><path d="M80 90 H120 L112 170 H88 Z" />',
  bracelet: '<ellipse cx="100" cy="100" rx="80" ry="34" /><ellipse cx="100" cy="100" rx="58" ry="20" />',
}

function velisseMotifMarkup(type, title, extraClass) {
  const inner = VELISSE_MOTIF_PATHS[type] || VELISSE_MOTIF_PATHS.column
  const cls = ['art-motif', extraClass].filter(Boolean).join(' ')
  const titleTag = title ? `<title>${title}</title>` : ''
  const a11y = title ? 'role="img"' : 'role="presentation" aria-hidden="true"'
  return `<svg class="${cls}" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round" stroke-linecap="round" ${a11y}>${titleTag}${inner}</svg>`
}
