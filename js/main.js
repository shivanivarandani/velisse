/* VÉLISSE — shared behavior: nav, scroll-reveal, parallax, helpers.
   Runs on every page. Plain script, no bundler, no modules. */

function velisseFormatPrice(price, currency) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(price)
}

function velisseFormatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function velisseGetParam(name) {
  return new URLSearchParams(window.location.search).get(name)
}

function velisseInitNavbar() {
  const navbar = document.getElementById('navbar')
  if (!navbar) return

  const toggle = document.getElementById('navToggle')
  const setScrolled = () => navbar.classList.toggle('is-scrolled', window.scrollY > 24)
  setScrolled()
  window.addEventListener('scroll', setScrolled, { passive: true })

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = navbar.classList.toggle('menu-open')
      toggle.setAttribute('aria-expanded', String(isOpen))
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu')
      document.body.style.overflow = isOpen ? 'hidden' : ''
    })

    navbar.querySelectorAll('.navbar-overlay-link').forEach((link) => {
      link.addEventListener('click', () => {
        navbar.classList.remove('menu-open')
        toggle.setAttribute('aria-expanded', 'false')
        document.body.style.overflow = ''
      })
    })
  }
}

function velisseInitReveal() {
  const items = document.querySelectorAll('.reveal')
  if (!items.length) return

  if (typeof IntersectionObserver === 'undefined') {
    items.forEach((el) => el.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
  )

  items.forEach((el) => observer.observe(el))
}

function velisseInitParallax() {
  const items = document.querySelectorAll('[data-parallax]')
  if (!items.length) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  let ticking = false

  const update = () => {
    items.forEach((node) => {
      const speed = parseFloat(node.dataset.parallax) || 0.1
      const rect = node.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter
      node.style.transform = `translate3d(0, ${(distanceFromCenter * -speed).toFixed(2)}px, 0)`
    })
    ticking = false
  }

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(update)
      ticking = true
    }
  }

  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
}

function velisseInitFooterYear() {
  document.querySelectorAll('.js-year').forEach((el) => {
    el.textContent = new Date().getFullYear()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  velisseInitNavbar()
  velisseInitReveal()
  velisseInitParallax()
  velisseInitFooterYear()
})
