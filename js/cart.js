// AHO Jewellery — Cart Module
(function () {
  'use strict';

  const STORAGE_KEY = 'aho_cart';

  function load() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { return []; }
  }

  function save(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  function getItems() { return load(); }

  function add(productId, qty = 1) {
    const items = load();
    const existing = items.find(i => i.id === productId);
    if (existing) { existing.qty += qty; }
    else { items.push({ id: productId, qty }); }
    save(items);
    updateBadge();
    return items;
  }

  function remove(productId) {
    save(load().filter(i => i.id !== productId));
    updateBadge();
  }

  function setQty(productId, qty) {
    if (qty < 1) { remove(productId); return; }
    const items = load();
    const it = items.find(i => i.id === productId);
    if (it) { it.qty = qty; save(items); }
    updateBadge();
  }

  function clear() { save([]); updateBadge(); }

  function count() { return load().reduce((s, i) => s + i.qty, 0); }

  function total() {
    if (!window.Products) return 0;
    return load().reduce((s, i) => {
      const p = window.Products.getById(i.id);
      return s + (p ? p.price * i.qty : 0);
    }, 0);
  }

  function updateBadge() {
    document.querySelectorAll('.cart-badge').forEach(b => {
      const n = count();
      b.textContent = n;
      b.style.display = n > 0 ? 'flex' : 'none';
    });
  }

  // Render full cart page
  function renderCartPage(container) {
    if (!window.Products) return;
    const items = load();
    if (!items.length) {
      container.innerHTML = `
        <div class="empty-cart">
          <div class="empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Discover our luxurious collections</p>
          <a href="products.html" class="btn-primary">Shop Now</a>
        </div>`;
      return;
    }

    const fmt = window.Products.formatPrice;

    let rows = '';
    items.forEach(item => {
      const p = window.Products.getById(item.id);
      if (!p) return;
      rows += `
        <div class="cart-row" data-id="${p.id}">
          <div class="cart-thumb">${window.Products.getProductSVG(p)}</div>
          <div class="cart-details">
            <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
            <span class="cart-cat">${p.category}</span>
            <div class="cart-price">${fmt(p.price)}</div>
          </div>
          <div class="cart-qty">
            <button class="qty-btn minus" data-id="${p.id}">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn plus" data-id="${p.id}">+</button>
          </div>
          <div class="cart-subtotal">${fmt(p.price * item.qty)}</div>
          <button class="cart-remove" data-id="${p.id}" aria-label="Remove">✕</button>
        </div>`;
    });

    const subtotal = total();
    const shipping = subtotal >= 999 ? 0 : 149;
    const grand = subtotal + shipping;

    container.innerHTML = `
      <div class="cart-layout">
        <div class="cart-items">${rows}</div>
        <aside class="cart-summary">
          <h2>Order Summary</h2>
          <div class="summary-row"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
          <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? '<em>Free</em>' : fmt(shipping)}</span></div>
          <div class="summary-row total-row"><span>Total</span><span>${fmt(grand)}</span></div>
          ${shipping > 0 ? `<p class="free-ship-note">Add ${fmt(999 - subtotal)} more for free shipping</p>` : ''}
          <a href="checkout.html" class="btn-primary full-btn">Proceed to Checkout</a>
          <a href="products.html" class="btn-ghost full-btn">Continue Shopping</a>
        </aside>
      </div>`;

    // Events
    container.querySelectorAll('.qty-btn.minus').forEach(b =>
      b.addEventListener('click', () => { const id = +b.dataset.id; setQty(id, (load().find(i => i.id === id)?.qty || 1) - 1); renderCartPage(container); }));
    container.querySelectorAll('.qty-btn.plus').forEach(b =>
      b.addEventListener('click', () => { const id = +b.dataset.id; setQty(id, (load().find(i => i.id === id)?.qty || 1) + 1); renderCartPage(container); }));
    container.querySelectorAll('.cart-remove').forEach(b =>
      b.addEventListener('click', () => { remove(+b.dataset.id); renderCartPage(container); }));
  }

  window.Cart = { add, remove, setQty, clear, count, total, getItems, updateBadge, renderCartPage };

  document.addEventListener('DOMContentLoaded', updateBadge);
})();
