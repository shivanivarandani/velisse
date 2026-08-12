import { useReveal } from '../hooks/useReveal'

// Generic scroll-reveal wrapper. `as` lets callers render the
// correct semantic tag (div, section, li…) without duplicating logic.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, isVisible] = useReveal()
  const delayClass = delay ? `reveal-delay-${delay}` : ''

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  )
}
