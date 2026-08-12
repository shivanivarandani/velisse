# velisse
A Jewelry Brand
Bougie

VÉLISSE is a static site — plain HTML, CSS, and JavaScript, no build step, no dependencies.

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Edit content

Products, collections, and journal posts live in [js/data.js](js/data.js) — edit the arrays there, no rebuild needed.

## Deploy

Push to `main`. [.github/workflows/deploy.yml](.github/workflows/deploy.yml) publishes the site to GitHub Pages automatically (Settings → Pages → Source: GitHub Actions, one-time setup).
