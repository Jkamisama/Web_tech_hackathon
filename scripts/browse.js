let filteredComics = [...comicsData];

// Create manga card with quick add
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

// Render comics
function renderComics() {
  const container = document.getElementById('browseGrid');
  container.innerHTML = filteredComics.map(createComicCard).join('');
}

// Filter by publisher
function filterComics() {
  const publisher = document.getElementById('publisherFilter').value;
  
  if (publisher === 'all') {
    filteredComics = [...comicsData];
  } else {
    filteredComics = comicsData.filter(comic => comic.publisher === publisher);
  }
  
  sortComics();
}

// Sort comics
function sortComics() {
  const sortBy = document.getElementById('sortFilter').value;
  
  switch(sortBy) {
    case 'title':
      filteredComics.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'price-low':
      filteredComics.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredComics.sort((a, b) => b.price - a.price);
      break;
    case 'year':
      filteredComics.sort((a, b) => b.year - a.year);
      break;
  }
  
  renderComics();
}

// Event listeners
document.getElementById('publisherFilter').addEventListener('change', filterComics);
document.getElementById('sortFilter').addEventListener('change', sortComics);

// Check for filter from homepage
const savedFilter = localStorage.getItem('filterPublisher');
if (savedFilter) {
  document.getElementById('publisherFilter').value = savedFilter;
  localStorage.removeItem('filterPublisher');
  filterComics();
}

// Initialize
renderComics();
