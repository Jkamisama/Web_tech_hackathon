# ComicVerse Hub 🎨

A modern, Apple-inspired online manga store featuring 30 legendary manga titles with full e-commerce functionality.

## ✨ Features

- **4 Pages**: Home, Browse, Manga Detail Modal, Shopping Cart
- **30 Manga Titles** with high-quality cover images
- **Apple Design**: Clean, minimal aesthetic with SF Pro font
- **Dark/Light Theme**: Toggle between themes
- **Hover Add to Cart**: Quick add from manga cards
- **Detailed Modal**: AniList-style manga information
- **Full Shopping Cart**: 
  - Quantity controls
  - Price calculations (subtotal, shipping, tax)
  - Free shipping over $50
  - Checkout flow with order confirmation
- **Filter & Sort**: By publisher, price, title, year
- **Fully Responsive**: Works on all devices
- **Smooth Animations**: Using Anime.js

## 🚀 Live Demo

Visit: **https://jkamisama.github.io/Web_tech_hackathon/**

## 🛠️ Tech Stack

- **HTML5, CSS3, Vanilla JavaScript (ES6+)**
- **Anime.js** (via CDN)
- **100% Static** - No backend required
- **GitHub Actions** for automatic deployment

## 📁 Project Structure

```
├── index.html              # Homepage with featured manga
├── browse.html             # Browse all 30 manga
├── cart.html               # Shopping cart & checkout
├── style.css               # Apple-inspired design
├── data/
│   ├── img/                # 30 manga cover images
│   └── comics.js           # Manga data (30 items)
├── scripts/
│   ├── main.js             # Core functionality & modals
│   ├── browse.js           # Browse page logic
│   └── cart.js             # Cart & checkout logic
└── .github/
    └── workflows/
        └── static.yml      # GitHub Actions deployment
```

## 🏃 Quick Start

### Option 1: Open Directly
Simply open `index.html` in your browser - no installation needed!

### Option 2: Local Server
```bash
# Using Python
python -m http.server 3000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:3000
```

Then visit: `http://localhost:3000`

## 🚀 Deployment

### GitHub Pages (Automatic)

This repo uses GitHub Actions for automatic deployment:

1. Push to `main` branch
2. GitHub Actions automatically deploys
3. Site is live at: `https://jkamisama.github.io/Web_tech_hackathon/`

### Manual Deployment

Works on any static hosting:
- **Netlify**: Drag & drop the folder
- **Vercel**: Import from GitHub
- **Cloudflare Pages**: Connect repository

No build step required!

## 🎨 Design Features

- **Apple Aesthetic**: Inspired by apple.com
- **SF Pro Display Font**: Apple's system font
- **Color Scheme**:
  - Light: White (#FFFFFF) with subtle grays
  - Dark: Pure black (#000000) with dark grays
  - Accent: Apple Blue (#007AFF)
- **Smooth Transitions**: 0.2s ease for all interactions
- **Rounded Corners**: 12-20px border radius
- **Subtle Shadows**: Depth without distraction

## 📦 What's Included

- ✅ 30 manga with complete data (author, publisher, genre, rating, price)
- ✅ All images stored locally (no external dependencies)
- ✅ Theme persistence (localStorage)
- ✅ Cart persistence (localStorage)
- ✅ Responsive grid layouts
- ✅ Modal system for manga details
- ✅ Complete checkout flow
- ✅ No npm dependencies (uses CDN)

## 🌟 Key Functionality

### Homepage
- Featured new releases (6 manga)
- Popular series (8 manga)
- Publisher spotlight cards

### Browse Page
- All 30 manga in grid
- Filter by 9 publishers
- Sort by price, title, year
- Hover to quick add

### Manga Modal
- Large cover image
- Full details (author, publisher, year, rating)
- Genre tags
- Description
- Add to cart button

### Shopping Cart
- Item list with images
- Quantity controls (+/-)
- Remove items
- Price breakdown:
  - Subtotal
  - Shipping (FREE over $50)
  - Tax (8%)
  - Total
- Checkout with confirmation

## 📄 License

Educational project - Free to use and modify

## 👨‍💻 Author

Created for Web Tech Hackathon

---

**⭐ Star this repo if you like it!**
