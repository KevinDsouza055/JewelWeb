// Jewel Jewellery — Wishlist Module
(function () {
  'use strict';

  const STORAGE_KEY = 'jewel_wishlist';

  function load() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { return []; }
  }

  function save(ids) { localStorage.setItem(STORAGE_KEY, JSON.stringify(ids)); }

  function has(id) { return load().includes(Number(id)); }

  function toggle(id) {
    const ids = load();
    const n = Number(id);
    const idx = ids.indexOf(n);
    if (idx === -1) ids.push(n);
    else ids.splice(idx, 1);
    save(ids);
    updateBadge();
    return idx === -1; // true = added
  }

  function remove(id) {
    save(load().filter(i => i !== Number(id)));
    updateBadge();
  }

  function getAll() { return load(); }
  function count() { return load().length; }

  function updateBadge() {
    document.querySelectorAll('.wish-badge').forEach(b => {
      const n = count();
      b.textContent = n;
      b.style.display = n > 0 ? 'flex' : 'none';
    });
  }

  function renderWishlistPage(container) {
    if (!window.Products) return;
    const ids = load();
    if (!ids.length) {
      container.innerHTML = `
        <div class="empty-cart">
          <div class="empty-icon">♡</div>
          <h2>Your wishlist is empty</h2>
          <p>Save the pieces that speak to you</p>
          <a href="products.html" class="btn-primary">Explore Collection</a>
        </div>`;
      return;
    }
    const grid = document.createElement('div');
    grid.className = 'product-grid';
    ids.forEach(id => {
      const p = window.Products.getById(id);
      if (p) grid.appendChild(window.Products.createProductCard(p));
    });
    container.innerHTML = '';
    container.appendChild(grid);
    // observe
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
      }, { threshold: 0.1 });
      grid.querySelectorAll('.product-card').forEach(c => io.observe(c));
    }
  }

  window.Wishlist = { has, toggle, remove, getAll, count, updateBadge, renderWishlistPage };

  document.addEventListener('DOMContentLoaded', updateBadge);
})();
