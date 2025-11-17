// Render cart
function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cartItems');
  const totalContainer = document.getElementById('cartTotal');
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Browse our manga collection to add items</p>
        <button class="btn-primary" onclick="window.location.href='browse.html'" style="margin-top: 20px;">
          <span>Browse Manga</span>
        </button>
      </div>
    `;
    totalContainer.innerHTML = '';
    return;
  }
  
  let subtotal = 0;
  const cartHTML = cart.map(item => {
    const comic = comicsData.find(c => c.id === item.id);
    if (!comic) return '';
    
    const itemTotal = comic.price * item.quantity;
    subtotal += itemTotal;
    
    return `
      <div class="cart-item">
        <img src="${comic.image}" alt="${comic.title}" onerror="this.src='data/img/Berserk.jpg'">
        <div class="cart-item-info">
          <h3>${comic.title}</h3>
          <p>${comic.author}</p>
          <p style="color: var(--text-secondary); margin-top: 4px;">$${comic.price.toFixed(2)} each</p>
        </div>
        <div>
          <div class="cart-controls">
            <button onclick="updateQuantity('${item.id}', -1)">−</button>
            <span style="font-size: 1.1rem; font-weight: 600; min-width: 30px; text-align: center;">${item.quantity}</span>
            <button onclick="updateQuantity('${item.id}', 1)">+</button>
          </div>
          <p style="margin: 12px 0; font-size: 1.2rem; font-weight: 600;">$${itemTotal.toFixed(2)}</p>
          <button class="btn-remove" onclick="removeItem('${item.id}')">Remove</button>
        </div>
      </div>
    `;
  }).join('');
  
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  
  container.innerHTML = cartHTML;
  totalContainer.innerHTML = `
    <div class="cart-summary">
      <div class="summary-row">
        <span>Subtotal</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Shipping</span>
        <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Tax (8%)</span>
        <span>$${tax.toFixed(2)}</span>
      </div>
      <div class="summary-row total">
        <span>Total</span>
        <span>$${total.toFixed(2)}</span>
      </div>
      ${subtotal < 50 ? '<p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 12px;">Add $' + (50 - subtotal).toFixed(2) + ' more for free shipping!</p>' : ''}
      <button class="btn-checkout" onclick="checkout()">Proceed to Checkout</button>
    </div>
  `;
}

// Update quantity
function updateQuantity(comicId, change) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cart.find(i => i.id === comicId);
  
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeItem(comicId);
      return;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
  }
}

// Remove item
function removeItem(comicId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== comicId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

// Checkout
function checkout() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  
  // Show success message
  const container = document.getElementById('cartItems');
  const totalContainer = document.getElementById('cartTotal');
  
  container.innerHTML = `
    <div class="checkout-success">
      <div class="success-icon">
        <svg style="width: 80px; height: 80px; color: var(--success);" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <h2>Order Confirmed!</h2>
      <p>Thank you for your purchase. Your manga will be shipped within 2-3 business days.</p>
      <p style="margin-top: 12px; color: var(--text-secondary);">
        Order confirmation has been sent to your email.
      </p>
      <button class="btn-primary" onclick="window.location.href='index.html'" style="margin-top: 32px;">
        <span>Continue Shopping</span>
      </button>
    </div>
  `;
  totalContainer.innerHTML = '';
  
  // Clear cart
  localStorage.removeItem('cart');
  updateCartCount();
}

// Initialize
renderCart();
