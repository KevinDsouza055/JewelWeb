// Jewel Jewellery - Products Data & Rendering
(function () {
  'use strict';

  const PRODUCTS = [
    // ─── NECKLACES (1–20) ───
    { id: 1, name: 'Empress Collar', category: 'necklaces', price: 4999, originalPrice: 6499, rating: 5, badge: 'Bestseller', desc: 'Triple-strand 22K gold collar with hand-set baroque pearls.' },
    { id: 2, name: 'Celestial Pendant', category: 'necklaces', price: 3299, originalPrice: 4199, rating: 4, badge: 'New', desc: 'Crescent moon pendant with pavé diamond detailing.' },
    { id: 3, name: 'Aurora Layered', category: 'necklaces', price: 5799, originalPrice: 7200, rating: 5, badge: 'Sale', desc: 'Three-tier antique gold layered necklace.' },
    { id: 4, name: 'Dew Drop Solitaire', category: 'necklaces', price: 2499, originalPrice: 3100, rating: 4, badge: '', desc: 'Delicate solitaire teardrop on a fine gold chain.' },
    { id: 5, name: 'Lotus Choker', category: 'necklaces', price: 3899, originalPrice: 4800, rating: 5, badge: 'Bestseller', desc: 'Handcrafted lotus motif choker in rose gold.' },
    { id: 6, name: 'Royal Rivière', category: 'necklaces', price: 8999, originalPrice: 11000, rating: 5, badge: 'Luxury', desc: 'Graduated diamond rivière, 18K white gold setting.' },
    { id: 7, name: 'Saffron Strand', category: 'necklaces', price: 2999, originalPrice: 3699, rating: 4, badge: '', desc: 'Warm saffron sapphire cluster strand.' },
    { id: 8, name: 'Moonveil Lariat', category: 'necklaces', price: 4199, originalPrice: 5200, rating: 4, badge: 'New', desc: 'Long lariat with moonstone drop ends.' },
    { id: 9, name: 'Midnight Chain', category: 'necklaces', price: 1999, originalPrice: 2599, rating: 3, badge: 'Sale', desc: 'Blackened silver figaro chain, lightweight luxury.' },
    { id: 10, name: 'Heritage Haar', category: 'necklaces', price: 6499, originalPrice: 8000, rating: 5, badge: 'Heritage', desc: 'Traditional temple-inspired gold haar with ruby accents.' },
    { id: 11, name: 'Pearl Illusion', category: 'necklaces', price: 3499, originalPrice: 4400, rating: 4, badge: '', desc: 'Floating freshwater pearl illusion necklace.' },
    { id: 12, name: 'Vine & Bloom', category: 'necklaces', price: 4799, originalPrice: 6000, rating: 5, badge: 'Bestseller', desc: 'Nature-inspired diamond vine necklace in yellow gold.' },
    { id: 13, name: 'Eternity Collar', category: 'necklaces', price: 7299, originalPrice: 9100, rating: 5, badge: 'Luxury', desc: 'Full eternity collar with channel-set emeralds.' },
    { id: 14, name: 'Golden Cascade', category: 'necklaces', price: 3100, originalPrice: 3900, rating: 4, badge: '', desc: 'Waterfall cascade design in polished yellow gold.' },
    { id: 15, name: 'Stardust Charm', category: 'necklaces', price: 1799, originalPrice: 2300, rating: 3, badge: 'Sale', desc: 'Petite star charm necklace with cubic zirconia.' },
    { id: 16, name: 'Topaz Torque', category: 'necklaces', price: 5299, originalPrice: 6700, rating: 4, badge: 'New', desc: 'Open torque bangle necklace with blue topaz finials.' },
    { id: 17, name: 'Regal Mangalsutra', category: 'necklaces', price: 9999, originalPrice: 12500, rating: 5, badge: 'Heritage', desc: 'Platinum mangalsutra with black diamond clusters.' },
    { id: 18, name: 'Filigree Fantasy', category: 'necklaces', price: 3799, originalPrice: 4700, rating: 4, badge: '', desc: 'Intricate filigree pendant with central amethyst.' },
    { id: 19, name: 'Sovereign Bib', category: 'necklaces', price: 6199, originalPrice: 7800, rating: 5, badge: 'Bestseller', desc: 'Bold bib necklace with multi-gemstone mosaic.' },
    { id: 20, name: 'Twilight Drop', category: 'necklaces', price: 2799, originalPrice: 3500, rating: 4, badge: 'New', desc: 'Long teardrop smoky quartz pendant.' },

    // ─── RINGS (21–40) ───
    { id: 21, name: 'Empress Solitaire', category: 'rings', price: 12999, originalPrice: 16000, rating: 5, badge: 'Luxury', desc: '2-carat oval diamond solitaire, platinum band.' },
    { id: 22, name: 'Rosette Band', category: 'rings', price: 4299, originalPrice: 5400, rating: 5, badge: 'Bestseller', desc: 'Floral rosette band with six pavé diamonds.' },
    { id: 23, name: 'Halo Dream', category: 'rings', price: 8499, originalPrice: 10600, rating: 5, badge: 'New', desc: 'Round brilliant cut with double halo setting.' },
    { id: 24, name: 'Stackable Eternity', category: 'rings', price: 2199, originalPrice: 2800, rating: 4, badge: 'Sale', desc: 'Slim eternity band, channel-set rubies.' },
    { id: 25, name: 'Serpent Coil', category: 'rings', price: 5899, originalPrice: 7300, rating: 4, badge: 'Heritage', desc: 'Snake coil ring with emerald eyes, 22K gold.' },
    { id: 26, name: 'Signet Royal', category: 'rings', price: 3699, originalPrice: 4600, rating: 4, badge: '', desc: 'Oval signet ring with monogram engraving.' },
    { id: 27, name: 'Midnight Cluster', category: 'rings', price: 6799, originalPrice: 8500, rating: 5, badge: 'Bestseller', desc: 'Black diamond cluster in white gold bezel.' },
    { id: 28, name: 'Princess Cut', category: 'rings', price: 9999, originalPrice: 12500, rating: 5, badge: 'Luxury', desc: 'Princess cut sapphire with diamond shoulders.' },
    { id: 29, name: 'Twist Infinity', category: 'rings', price: 3299, originalPrice: 4100, rating: 4, badge: 'New', desc: 'Twisted infinity shank with pear-drop diamond.' },
    { id: 30, name: 'Antique Dome', category: 'rings', price: 4799, originalPrice: 5900, rating: 4, badge: '', desc: 'Victorian dome ring, engraved rose gold.' },
    { id: 31, name: 'Sunrise Opal', category: 'rings', price: 3999, originalPrice: 5000, rating: 4, badge: 'New', desc: 'Ethiopian opal cabochon in gilded bezel.' },
    { id: 32, name: 'Tri-Stone Trilogy', category: 'rings', price: 7499, originalPrice: 9300, rating: 5, badge: 'Bestseller', desc: 'Past-present-future trilogy with three brilliant cuts.' },
    { id: 33, name: 'Floral Cocktail', category: 'rings', price: 5199, originalPrice: 6500, rating: 4, badge: '', desc: 'Large cocktail ring with central ruby and petals.' },
    { id: 34, name: 'Art Deco Shield', category: 'rings', price: 6299, originalPrice: 7900, rating: 5, badge: 'Heritage', desc: 'Geometric art deco shield, engraved platinum.' },
    { id: 35, name: 'Chevron Stack', category: 'rings', price: 1999, originalPrice: 2600, rating: 3, badge: 'Sale', desc: 'V-shaped chevron stackable band, minimalist.' },
    { id: 36, name: 'Garnet Embrace', category: 'rings', price: 3499, originalPrice: 4400, rating: 4, badge: '', desc: 'Deep red garnet wrapped in prong-set gold.' },
    { id: 37, name: 'Crystal Dome', category: 'rings', price: 2899, originalPrice: 3600, rating: 4, badge: 'New', desc: 'Domed rock crystal over gold vermeil.' },
    { id: 38, name: 'Contessa Cabochon', category: 'rings', price: 4599, originalPrice: 5800, rating: 5, badge: 'Bestseller', desc: 'Turquoise cabochon in ornate gold bezel.' },
    { id: 39, name: 'Diamond Pinky', category: 'rings', price: 3099, originalPrice: 3900, rating: 4, badge: '', desc: 'Slender pinky ring with single princess diamond.' },
    { id: 40, name: 'Sovereign Crown', category: 'rings', price: 11499, originalPrice: 14000, rating: 5, badge: 'Luxury', desc: 'Crown-inspired ring with seven diamond peaks.' },

    // ─── EARRINGS (41–60) ───
    { id: 41, name: 'Cascade Jhumka', category: 'earrings', price: 3799, originalPrice: 4800, rating: 5, badge: 'Bestseller', desc: 'Classic jhumka with gold filigree and ruby drops.' },
    { id: 42, name: 'Stardust Studs', category: 'earrings', price: 1899, originalPrice: 2400, rating: 4, badge: 'Sale', desc: 'Micro-pavé star studs in 18K yellow gold.' },
    { id: 43, name: 'Pearl Chandelier', category: 'earrings', price: 4999, originalPrice: 6200, rating: 5, badge: 'New', desc: 'Three-tier baroque pearl chandelier drops.' },
    { id: 44, name: 'Hoop Royale', category: 'earrings', price: 2599, originalPrice: 3300, rating: 4, badge: '', desc: 'Thick twisted hoops in brushed rose gold.' },
    { id: 45, name: 'Emerald Drop', category: 'earrings', price: 6799, originalPrice: 8500, rating: 5, badge: 'Luxury', desc: 'Elongated Colombian emerald drops in yellow gold.' },
    { id: 46, name: 'Feather Fringe', category: 'earrings', price: 3299, originalPrice: 4100, rating: 4, badge: 'New', desc: 'Delicate diamond-set feather fringe earrings.' },
    { id: 47, name: 'Antique Tops', category: 'earrings', price: 2199, originalPrice: 2800, rating: 4, badge: '', desc: 'Traditional antique gold tops with meenakari.' },
    { id: 48, name: 'Teardrop Halo', category: 'earrings', price: 5299, originalPrice: 6700, rating: 5, badge: 'Bestseller', desc: 'Pear-shaped diamond with halo, drop style.' },
    { id: 49, name: 'Crystal Ear Cuff', category: 'earrings', price: 1499, originalPrice: 1900, rating: 3, badge: 'Sale', desc: 'Adjustable crystal ear cuff, silver finish.' },
    { id: 50, name: 'Lotus Dangler', category: 'earrings', price: 3999, originalPrice: 4900, rating: 4, badge: 'Heritage', desc: 'Temple lotus dangle earrings with pearl centers.' },
    { id: 51, name: 'Moonstone Climber', category: 'earrings', price: 2999, originalPrice: 3800, rating: 4, badge: 'New', desc: 'Rainbow moonstone ear climber, gold fill.' },
    { id: 52, name: 'Geometric Bar', category: 'earrings', price: 2399, originalPrice: 3000, rating: 4, badge: '', desc: 'Minimalist bar earrings with hammered texture.' },
    { id: 53, name: 'Floral Cluster', category: 'earrings', price: 4599, originalPrice: 5800, rating: 5, badge: 'Bestseller', desc: 'Flower cluster with yellow sapphires and diamonds.' },
    { id: 54, name: 'Royal Kundan', category: 'earrings', price: 5799, originalPrice: 7300, rating: 5, badge: 'Heritage', desc: 'Kundan-set earrings with enamel reverse.' },
    { id: 55, name: 'Triangle Drop', category: 'earrings', price: 2899, originalPrice: 3600, rating: 4, badge: '', desc: 'Bold triangle drops in oxidized silver.' },
    { id: 56, name: 'Garnet Cluster Stud', category: 'earrings', price: 2099, originalPrice: 2700, rating: 3, badge: 'Sale', desc: 'Cluster of garnets set in rich yellow gold.' },
    { id: 57, name: 'Sapphire Huggie', category: 'earrings', price: 3499, originalPrice: 4400, rating: 4, badge: 'New', desc: 'Huggie hoops inlaid with blue sapphires.' },
    { id: 58, name: 'Crescent Drop', category: 'earrings', price: 3799, originalPrice: 4700, rating: 4, badge: '', desc: 'Crescent moon drops with star-set diamonds.' },
    { id: 59, name: 'Long Layered Chain', category: 'earrings', price: 2699, originalPrice: 3400, rating: 4, badge: 'New', desc: 'Shoulder-grazing layered chain earrings.' },
    { id: 60, name: 'Diamond Solitaire Stud', category: 'earrings', price: 7499, originalPrice: 9400, rating: 5, badge: 'Luxury', desc: '0.5ct round brilliant diamond in platinum push-backs.' },

    // ─── BRACELETS (61–80) ───
    { id: 61, name: 'Heritage Kada', category: 'bracelets', price: 8999, originalPrice: 11200, rating: 5, badge: 'Heritage', desc: 'Solid 22K gold kada with hand-engraved motifs.' },
    { id: 62, name: 'Tennis Royale', category: 'bracelets', price: 13999, originalPrice: 17500, rating: 5, badge: 'Luxury', desc: 'Full diamond tennis bracelet, 3ct total weight.' },
    { id: 63, name: 'Charm Soirée', category: 'bracelets', price: 3499, originalPrice: 4400, rating: 4, badge: 'New', desc: 'Rose gold chain with five assorted luxury charms.' },
    { id: 64, name: 'Pearl Cuff', category: 'bracelets', price: 4799, originalPrice: 6000, rating: 5, badge: 'Bestseller', desc: 'Wide cuff bracelet with baroque pearl accents.' },
    { id: 65, name: 'Serpent Bangle', category: 'bracelets', price: 5999, originalPrice: 7500, rating: 4, badge: 'Heritage', desc: 'Coiled snake bangle with ruby eyes, antique gold.' },
    { id: 66, name: 'Stackable Slim', category: 'bracelets', price: 1299, originalPrice: 1700, rating: 3, badge: 'Sale', desc: 'Set of three slim stacking bangles.' },
    { id: 67, name: 'Pavé Eternity', category: 'bracelets', price: 6499, originalPrice: 8100, rating: 5, badge: 'Bestseller', desc: 'Full pavé eternity cuff in 18K white gold.' },
    { id: 68, name: 'Geo Link', category: 'bracelets', price: 3999, originalPrice: 5000, rating: 4, badge: 'New', desc: 'Bold geometric link chain in yellow gold.' },
    { id: 69, name: 'Beaded Royale', category: 'bracelets', price: 2499, originalPrice: 3200, rating: 4, badge: '', desc: 'Alternating gold and lapis lazuli beads.' },
    { id: 70, name: 'Floral Manchette', category: 'bracelets', price: 7299, originalPrice: 9100, rating: 5, badge: 'Luxury', desc: 'Wide manchette with floral diamond clusters.' },
    { id: 71, name: 'Twisted Rope', category: 'bracelets', price: 3199, originalPrice: 4000, rating: 4, badge: '', desc: 'Classic twisted rope bangle, 22K yellow gold.' },
    { id: 72, name: 'Gemstone Bar', category: 'bracelets', price: 2999, originalPrice: 3800, rating: 4, badge: 'New', desc: 'Linear gemstone bar bracelet with rainbow stones.' },
    { id: 73, name: 'Art Deco Cuff', category: 'bracelets', price: 5499, originalPrice: 6900, rating: 5, badge: 'Heritage', desc: 'Geometric art deco cuff in engraved platinum.' },
    { id: 74, name: 'Infinity Chain', category: 'bracelets', price: 2199, originalPrice: 2800, rating: 4, badge: '', desc: 'Delicate infinity links in rose gold.' },
    { id: 75, name: 'Garnet Cluster Cuff', category: 'bracelets', price: 4299, originalPrice: 5400, rating: 4, badge: '', desc: 'Garnet cluster cuff, beaded edge detail.' },
    { id: 76, name: 'Kundan Bangles', category: 'bracelets', price: 6999, originalPrice: 8700, rating: 5, badge: 'Heritage', desc: 'Set of four kundan enamel bangles.' },
    { id: 77, name: 'Emerald Tennis', category: 'bracelets', price: 9499, originalPrice: 11900, rating: 5, badge: 'Luxury', desc: 'Colombian emerald tennis bracelet, 18K gold.' },
    { id: 78, name: 'Moonstone Cuff', category: 'bracelets', price: 3799, originalPrice: 4800, rating: 4, badge: 'New', desc: 'Open cuff adorned with five moonstone cabochons.' },
    { id: 79, name: 'Herringbone Chain', category: 'bracelets', price: 2899, originalPrice: 3700, rating: 4, badge: '', desc: 'Flat herringbone chain bracelet, polished gold.' },
    { id: 80, name: 'Diamond Station', category: 'bracelets', price: 7999, originalPrice: 9999, rating: 5, badge: 'Bestseller', desc: 'Seven-diamond station bracelet on cable chain.' },
  ];

  // SVG placeholder generator per category
  function getProductSVG(product) {
    const palettes = {
      necklaces: ['#C9A84C', '#F5E6C8', '#8B6914', '#EDD98A'],
      rings: ['#D4AF8C', '#F0E0C8', '#9B6B3A', '#E8C9A0'],
      earrings: ['#B8A9C9', '#EDE8F5', '#7B6B9A', '#D4C8E8'],
      bracelets: ['#C4B08C', '#F5F0E8', '#8B7B5A', '#E0D0B0'],
    };
    const p = palettes[product.category] || palettes.necklaces;
    const shapes = {
      necklaces: `<ellipse cx="100" cy="85" rx="55" ry="12" stroke="${p[0]}" stroke-width="3" fill="none"/>
        <path d="M45 85 Q100 140 155 85" stroke="${p[0]}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <circle cx="100" cy="140" r="14" fill="${p[0]}" opacity="0.9"/>
        <circle cx="100" cy="140" r="8" fill="${p[3]}" opacity="0.7"/>
        <circle cx="100" cy="140" r="3" fill="white" opacity="0.8"/>`,
      rings: `<circle cx="100" cy="100" r="45" fill="none" stroke="${p[0]}" stroke-width="14"/>
        <circle cx="100" cy="100" r="45" fill="none" stroke="${p[3]}" stroke-width="6" stroke-dasharray="8 6"/>
        <circle cx="100" cy="55" r="12" fill="${p[0]}"/>
        <circle cx="100" cy="55" r="7" fill="${p[3]}"/>
        <circle cx="100" cy="55" r="3" fill="white" opacity="0.9"/>`,
      earrings: `<path d="M100 40 L85 80 Q80 120 100 150 Q120 120 115 80 Z" fill="${p[0]}" opacity="0.85"/>
        <path d="M100 40 L85 80 Q80 120 100 150 Q120 120 115 80 Z" fill="none" stroke="${p[3]}" stroke-width="2"/>
        <circle cx="100" cy="40" r="10" fill="${p[0]}"/>
        <circle cx="100" cy="150" r="8" fill="${p[3]}" opacity="0.8"/>
        <circle cx="100" cy="150" r="3.5" fill="white"/>`,
      bracelets: `<rect x="40" y="80" width="120" height="38" rx="19" fill="none" stroke="${p[0]}" stroke-width="9"/>
        <rect x="40" y="80" width="120" height="38" rx="19" fill="none" stroke="${p[3]}" stroke-width="3" stroke-dasharray="10 7"/>
        <circle cx="100" cy="99" r="11" fill="${p[0]}"/>
        <circle cx="100" cy="99" r="6" fill="${p[3]}"/>
        <circle cx="100" cy="99" r="2.5" fill="white" opacity="0.9"/>`,
    };
    const shimmer = `<defs>
      <radialGradient id="bg${product.id}" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="${p[1]}"/>
        <stop offset="100%" stop-color="${p[2]}" stop-opacity="0.15"/>
      </radialGradient>
      <filter id="glow${product.id}">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="200" height="200" rx="18" fill="url(#bg${product.id})"/>`;
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      ${shimmer}
      <g filter="url(#glow${product.id})">${shapes[product.category] || shapes.necklaces}</g>
    </svg>`;
  }

  function getStars(rating) {
    return Array.from({ length: 5 }, (_, i) =>
      `<span class="star ${i < rating ? 'filled' : ''}" aria-hidden="true">★</span>`
    ).join('');
  }

  function formatPrice(n) {
    return '₹' + n.toLocaleString('en-IN');
  }

  function discount(p) {
    return Math.round((1 - p.price / p.originalPrice) * 100);
  }

  function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.id = product.id;
    card.dataset.category = product.category;

    const inWishlist = window.Wishlist && window.Wishlist.has(product.id);
    const disc = discount(product);

    card.innerHTML = `
      <div class="card-visual loading">
        <div class="card-img">${getProductSVG(product)}</div>
        ${product.badge ? `<span class="badge badge-${product.badge.toLowerCase().replace(/\s/g, '-')}">${product.badge}</span>` : ''}
        <span class="disc-pill">-${disc}%</span>
        <button class="wish-btn ${inWishlist ? 'active' : ''}" aria-label="Toggle wishlist" data-id="${product.id}">
          <svg viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="card-info">
        <span class="cat-label">${product.category}</span>
        <h3 class="product-name">
          <a href="product.html?id=${product.id}">${product.name}</a>
        </h3>
        <div class="stars">${getStars(product.rating)}</div>
        <div class="pricing">
          <span class="price-now">${formatPrice(product.price)}</span>
          <span class="price-was">${formatPrice(product.originalPrice)}</span>
        </div>
        <div class="card-actions">
          <button class="btn-cart" data-id="${product.id}">Add to Cart</button>
          <a href="product.html?id=${product.id}" class="btn-view">View</a>
        </div>
      </div>`;

    // Remove skeleton after "load"
    setTimeout(() => {
      const visual = card.querySelector('.card-visual');
      if (visual) visual.classList.remove('loading');
    }, 400);

    // Wish toggle
    card.querySelector('.wish-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      if (window.Wishlist) {
        window.Wishlist.toggle(product.id);
        const btn = e.currentTarget;
        const isNow = window.Wishlist.has(product.id);
        btn.classList.toggle('active', isNow);
        btn.querySelector('svg').setAttribute('fill', isNow ? 'currentColor' : 'none');
      }
    });

    // Add to cart
    card.querySelector('.btn-cart').addEventListener('click', (e) => {
      const btn = e.currentTarget;
      if (!window.Cart || btn.classList.contains('adding')) return;
      
      btn.classList.add('adding');
      btn.textContent = 'Adding...';
      
      setTimeout(() => {
        window.Cart.add(product.id);
        btn.classList.replace('adding', 'added');
        btn.textContent = '✦ Added';
        setTimeout(() => { btn.classList.remove('added'); btn.textContent = 'Add to Cart'; }, 1500);
      }, 600);
    });

    return card;
  }

  function showToast(msg) {
    let t = document.getElementById('jewel-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'jewel-toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2800);
  }

  function renderGrid(container, list) {
    container.innerHTML = '';
    if (!list.length) {
      container.innerHTML = '<p class="empty-msg">No products found.</p>';
      return;
    }
    list.forEach(p => container.appendChild(createProductCard(p)));
    observeCards();
  }

  function observeCards() {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.product-card').forEach(c => io.observe(c));
  }

  function getById(id) { return PRODUCTS.find(p => p.id === Number(id)); }
  function getByCategory(cat) { return cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat); }
  function search(q) {
    const qL = q.toLowerCase();
    return PRODUCTS.filter(p => p.name.toLowerCase().includes(qL) || p.category.includes(qL) || p.desc.toLowerCase().includes(qL));
  }

  window.Products = { PRODUCTS, getById, getByCategory, search, renderGrid, createProductCard, getProductSVG, getStars, formatPrice, showToast };
})();
