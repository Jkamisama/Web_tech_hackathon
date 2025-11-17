// Get comic ID from URL
const urlParams = new URLSearchParams(window.location.search);
const comicId = urlParams.get('id');

// Update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartCount').textContent = count;
}

// Find comic by ID
const comic = comicsData.find(c => c.id === comicId);

if (comic) {
  const container = document.getElementById('detailContainer');
  container.innerHTML = `
    <div>
      <img src="${comic.image}" alt="${comic.title}" class="detail-image" onerror="this.src='data/img/Berserk.jpg'">
    </div>
    <div class="detail-info">
      <h1>${comic.title}</h1>
      <div class="detail-meta">
        <span><strong>Author:</strong> ${comic.author}</span>
        <span><strong>Publisher:</strong> ${comic.publisher}</span>
        <span><strong>Year:</strong> ${comic.year}</span>
      </div>
      <p class="detail-description">${comic.description}</p>
      <div class="detail-meta">
        <span><strong>Genre:</strong> ${comic.genre.join(', ')}</span>
        <span><strong>Rating:</strong> ${comic.rating}/5</span>
      </div>
      <p class="detail-price">$${comic.price.toFixed(2)}</p>
      <button class="btn-add-cart" onclick="addToCart('${comic.id}')">Add to Cart</button>
    </div>
  `;
  
  // Animate elements
  anime({
    targets: '.detail-image',
    opacity: [0, 1],
    scale: [0.9, 1],
    duration: 1000,
    easing: 'easeOutQuad'
  });
  
  anime({
    targets: '.detail-info h1',
    opacity: [0, 1],
    translateX: [-50, 0],
    duration: 800,
    delay: 200,
    easing: 'easeOutQuad'
  });
  
  anime({
    targets: '.detail-meta, .detail-description, .detail-price',
    opacity: [0, 1],
    translateY: [30, 0],
    delay: anime.stagger(100, {start: 400}),
    easing: 'easeOutQuad'
  });
  
  anime({
    targets: '.btn-add-cart',
    scale: [0, 1],
    delay: 1000,
    duration: 600,
    easing: 'easeOutElastic(1, .6)'
  });
} else {
  document.getElementById('detailContainer').innerHTML = `
    <div style="text-align:center; padding: 4rem;">
      <h2 style="color: var(--neon-cyan); margin-bottom: 1rem;">Manga not found</h2>
      <p style="margin-bottom: 2rem;">Please select a manga from the browse page.</p>
      <button class="btn-primary" onclick="window.location.href='browse.html'">Browse Manga</button>
    </div>
  `;
}

// Add to cart function
function addToCart(comicId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(item => item.id === comicId);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id: comicId, quantity: 1 });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  
  // Animate button
  anime({
    targets: '.btn-add-cart',
    scale: [1, 1.2, 1],
    duration: 400,
    easing: 'easeInOutQuad'
  });
  
  alert('Added to cart!');
}

// Initialize
updateCartCount();
