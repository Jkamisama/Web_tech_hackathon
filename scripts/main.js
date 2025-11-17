// Theme Management
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  const moonIcon = document.getElementById('moonIcon');
  const sunIcon = document.getElementById('sunIcon');
  if (moonIcon && sunIcon) {
    if (newTheme === 'dark') {
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
    } else {
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
    }
  }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');
if (moonIcon && sunIcon) {
  if (savedTheme === 'dark') {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  } else {
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
  }
}

// Update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountEl = document.getElementById('cartCount');
  if (cartCountEl) {
    cartCountEl.textContent = count;
    cartCountEl.style.display = count > 0 ? 'flex' : 'none';
  }
}

// Create manga card with quick add button
function createComicCard(comic) {
  return `
    <div class="comic-card">
      <div class="comic-card-image-wrapper" onclick="openMangaModal('${comic.id}')">
        <img src="${comic.image}" alt="${comic.title}" onerror="this.src='data/img/Berserk.jpg'">
        <button class="quick-add" onclick="event.stopPropagation(); quickAddToCart('${comic.id}', this)">
          <svg style="width: 16px; height: 16px; margin-right: 6px; display: inline-block; vertical-align: middle;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Add to Cart
        </button>
      </div>
      <div class="comic-info" onclick="openMangaModal('${comic.id}')">
        <h3 class="comic-title">${comic.title}</h3>
        <p class="comic-author">${comic.author}</p>
        <p class="comic-price">$${comic.price.toFixed(2)}</p>
      </div>
    </div>
  `;
}

// Quick add to cart from card
function quickAddToCart(mangaId, button) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(item => item.id === mangaId);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id: mangaId, quantity: 1 });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  
  // Visual feedback
  const originalHTML = button.innerHTML;
  button.innerHTML = '<svg style="width: 16px; height: 16px; margin-right: 6px; display: inline-block; vertical-align: middle;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Added!';
  button.style.background = '#30D158';
  setTimeout(() => {
    button.innerHTML = originalHTML;
    button.style.background = '';
  }, 1500);
}

// Open manga modal
function openMangaModal(mangaId) {
  const manga = comicsData.find(m => m.id === mangaId);
  if (!manga) return;
  
  const modal = document.getElementById('mangaModal');
  const content = document.getElementById('modalContent');
  
  content.innerHTML = `
    <div class="manga-header">
      <img src="${manga.image}" alt="${manga.title}" class="manga-banner">
    </div>
    <div class="manga-content">
      <div class="manga-main">
        <img src="${manga.image}" alt="${manga.title}" class="manga-cover">
        <div class="manga-info">
          <h1>${manga.title}</h1>
          <div class="manga-meta">
            <div class="meta-item">
              <span class="meta-label">Author</span>
              <span class="meta-value">${manga.author}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Publisher</span>
              <span class="meta-value">${manga.publisher}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Year</span>
              <span class="meta-value">${manga.year}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Rating</span>
              <span class="meta-value">${manga.rating}/5 ⭐</span>
            </div>
          </div>
          <div class="manga-genres">
            ${manga.genre.map(g => `<span class="genre-tag">${g}</span>`).join('')}
          </div>
          <p class="manga-description">${manga.description}</p>
          <p class="manga-price">$${manga.price.toFixed(2)}</p>
          <div class="manga-actions">
            <button class="btn-add-cart" onclick="addToCartFromModal('${manga.id}', this)">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Add to cart from modal
function addToCartFromModal(mangaId, button) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(item => item.id === mangaId);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id: mangaId, quantity: 1 });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  
  // Visual feedback
  button.textContent = '✓ Added to Cart!';
  button.classList.add('added');
  setTimeout(() => {
    button.textContent = 'Add to Cart';
    button.classList.remove('added');
  }, 2000);
}

// Close modal
function closeModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById('mangaModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Load new releases (first 6)
function loadNewReleases() {
  const container = document.getElementById('newReleases');
  if (!container) return;
  const newReleases = comicsData.slice(0, 6);
  container.innerHTML = newReleases.map(createComicCard).join('');
}

// Load popular series (8 items)
function loadPopularSeries() {
  const container = document.getElementById('popularSeries');
  if (!container) return;
  const popular = comicsData.slice(6, 14);
  container.innerHTML = popular.map(createComicCard).join('');
}

// Filter by publisher
function filterByPublisher(publisher) {
  localStorage.setItem('filterPublisher', publisher);
  window.location.href = 'browse.html';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Initialize
updateCartCount();
if (document.getElementById('newReleases')) {
  loadNewReleases();
}
if (document.getElementById('popularSeries')) {
  loadPopularSeries();
}
