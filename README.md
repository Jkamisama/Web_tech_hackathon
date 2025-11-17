# ComicVerse Hub 🎨

A futuristic, anime.js-inspired online manga store featuring 30 legendary manga titles.

## Features

- 4 Pages: Home, Browse, Detail, Shopping Cart
- 30 Manga Titles with local images
- Anime.js animations (fade, scale, stagger effects)
- Neon cyberpunk aesthetic (#FF0099, #00E5FF, #5A00FF)
- Filter by publisher & sort by price/title/year
- Persistent shopping cart (localStorage)
- Fully responsive design

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript (ES6+)
- Anime.js for animations
- No backend required (100% static)

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run locally:
   ```bash
   npm start
   ```
   Or simply open `index.html` in your browser

## Project Structure

```
├── index.html           # Homepage
├── browse.html          # Browse all manga
├── comic-detail.html    # Manga details
├── cart.html            # Shopping cart
├── style.css            # All styles
├── data/
│   ├── img/             # 30 manga cover images
│   └── comics.js        # Manga data
└── scripts/
    ├── main.js          # Homepage
    ├── browse.js        # Browse + filters
    ├── detail.js        # Detail page
    └── cart.js          # Cart logic
```

## Deployment

Works on any static hosting:
- GitHub Pages
- Netlify
- Vercel

Just push and deploy - no build step needed!
