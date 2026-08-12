/* VÉLISSE — small HTML-template helpers shared by page scripts. */

function velisseProductCardHTML(product) {
  return `
    <a href="shop-item.html?id=${product.id}" class="product-card">
      <div class="product-card-frame">
        ${velisseMotifMarkup(product.motif, product.name)}
        <span class="product-card-plinth"></span>
      </div>
      <div class="product-card-meta">
        <span class="product-card-collection">${product.collection}</span>
        <h3 class="product-card-name">${product.name}</h3>
        <span class="product-card-price">${velisseFormatPrice(product.price, product.currency)}</span>
      </div>
    </a>
  `
}

function velisseJournalCardHTML(post) {
  return `
    <a href="journal-post.html?id=${post.id}" class="journal-card">
      <div class="journal-card-top">
        <span class="journal-card-category eyebrow">${post.category}</span>
        <span class="journal-card-date">${velisseFormatDate(post.date)}</span>
      </div>
      <h3 class="journal-card-title">${post.title}</h3>
      <p class="journal-card-excerpt">${post.excerpt}</p>
      <span class="cta-link journal-card-cta">Read <span class="arrow" aria-hidden="true">&rarr;</span></span>
    </a>
  `
}

function velisseRevealWrap(html, delay, extraClass) {
  const delayClass = delay ? `reveal-delay-${((delay - 1) % 4) + 1}` : ''
  const cls = ['reveal', delayClass, extraClass].filter(Boolean).join(' ')
  return `<div class="${cls}">${html}</div>`
}

function velisseAdPanelHTML(collection, index, reverse) {
  return `
    <article class="ad-panel${reverse ? ' is-reverse' : ''}">
      <div class="ad-panel-visual" data-parallax="0.05">
        ${velisseMotifMarkup(collection.motif, collection.name)}
      </div>
      <div class="ad-panel-copy reveal">
        <span class="ad-panel-index">${String(index + 1).padStart(2, '0')} — ${collection.year}</span>
        <h3 class="ad-panel-title">${collection.name}</h3>
        <p class="ad-panel-tagline">${collection.tagline}</p>
        <p class="ad-panel-desc">${collection.description}</p>
        <a href="collection.html?id=${collection.id}" class="cta-link">Explore the Collection <span class="arrow" aria-hidden="true">&rarr;</span></a>
      </div>
    </article>
  `
}

function velisseRenderAdPanels(containerId) {
  const el = document.getElementById(containerId)
  if (!el) return
  el.innerHTML = VELISSE_COLLECTIONS.map((c, i) => velisseAdPanelHTML(c, i, i % 2 === 1)).join('')
}
