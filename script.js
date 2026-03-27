/* ===================================================
   MADU E-COMMERCE — SCRIPT.JS
   Developer: Adx Amit
   =================================================== */

// ====================================================
// PRODUCTS DATABASE (45 real products)
// ====================================================
const products = [
  // ── ELECTRONICS ──────────────────────────────────
  {
    id: 1,
    name: "Apple iPhone 15 Pro",
    category: "electronics",
    price: 999,
    originalPrice: 1199,
    description: "6.1\" Super Retina XDR, A17 Pro chip, 48MP camera system, Titanium design.",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80",
    badge: "hot",
    rating: 4.9,
    reviews: 2841
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    category: "electronics",
    price: 1199,
    originalPrice: 1399,
    description: "6.8\" Dynamic AMOLED 2X, Snapdragon 8 Gen 3, 200MP camera, built-in S Pen.",
    image: "https://images.unsplash.com/photo-1707727672820-c084239c5f07?w=400&q=80",
    badge: "new",
    rating: 4.8,
    reviews: 1934
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    category: "electronics",
    price: 329,
    originalPrice: 399,
    description: "Industry-leading noise cancellation, 30h battery, ultra-premium comfort.",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80",
    badge: "sale",
    rating: 4.9,
    reviews: 5210
  },
  {
    id: 4,
    name: "Apple MacBook Air M3",
    category: "electronics",
    price: 1099,
    originalPrice: 1299,
    description: "Apple M3 chip, 13.6\" Liquid Retina, 18h battery life, fanless design.",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&q=80",
    badge: "hot",
    rating: 4.9,
    reviews: 3102
  },
  {
    id: 5,
    name: "iPad Pro 13-inch M4",
    category: "electronics",
    price: 1299,
    originalPrice: 1499,
    description: "Ultra Retina XDR Tandem OLED, M4 chip, Apple Pencil Pro support.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80",
    badge: "new",
    rating: 4.8,
    reviews: 1562
  },
  {
    id: 6,
    name: "Samsung 65\" QLED 4K TV",
    category: "electronics",
    price: 1499,
    originalPrice: 1999,
    description: "Quantum Dot technology, Neo QLED, 120Hz, Dolby Atmos, smart TV.",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
    badge: "sale",
    rating: 4.7,
    reviews: 892
  },
  {
    id: 7,
    name: "Logitech MX Master 3S Mouse",
    category: "electronics",
    price: 99,
    originalPrice: 129,
    description: "8000 DPI sensor, ergonomic design, silent clicks, MagSpeed scroll wheel.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
    badge: null,
    rating: 4.8,
    reviews: 4201
  },
  {
    id: 8,
    name: "DJI Mini 4 Pro Drone",
    category: "electronics",
    price: 759,
    originalPrice: 899,
    description: "4K/60fps, 3-axis stabilization, 34-min flight time, obstacle sensing.",
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=400&q=80",
    badge: "hot",
    rating: 4.8,
    reviews: 723
  },
  {
    id: 9,
    name: "Canon EOS R50 Camera",
    category: "electronics",
    price: 679,
    originalPrice: 799,
    description: "24.2MP APS-C CMOS, 4K video, dual pixel AF, compact mirrorless body.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80",
    badge: null,
    rating: 4.7,
    reviews: 611
  },
  {
    id: 10,
    name: "Apple AirPods Pro 2nd Gen",
    category: "electronics",
    price: 249,
    originalPrice: 299,
    description: "Active Noise Cancellation, Adaptive Transparency, 30h total battery.",
    image: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=400&q=80",
    badge: "sale",
    rating: 4.8,
    reviews: 7832
  },
  {
    id: 11,
    name: "PlayStation 5 Console",
    category: "electronics",
    price: 499,
    originalPrice: 549,
    description: "Custom AMD CPU & GPU, 825GB SSD, 4K 120fps gaming, haptic DualSense.",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&q=80",
    badge: "hot",
    rating: 4.9,
    reviews: 9201
  },
  {
    id: 12,
    name: "Garmin Forerunner 965 Watch",
    category: "electronics",
    price: 599,
    originalPrice: 699,
    description: "AMOLED display, training readiness, multi-band GPS, 31-day battery.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    badge: null,
    rating: 4.7,
    reviews: 445
  },
  {
    id: 13,
    name: "Google Pixel 8 Pro",
    category: "electronics",
    price: 799,
    originalPrice: 999,
    description: "6.7\" Super Actua display, Google Tensor G3, 50MP camera, 7yr updates.",
    image: "https://images.unsplash.com/photo-1598327105854-c8674faddf79?w=400&q=80",
    badge: "sale",
    rating: 4.6,
    reviews: 1098
  },
  {
    id: 14,
    name: "Bose QuietComfort Ultra Speaker",
    category: "electronics",
    price: 429,
    originalPrice: 499,
    description: "Spatial audio immersive sound, 24h battery, IP67 waterproof, Bluetooth 5.4.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
    badge: null,
    rating: 4.8,
    reviews: 2134
  },
  {
    id: 15,
    name: "ASUS ROG Zephyrus G16 Laptop",
    category: "electronics",
    price: 1799,
    originalPrice: 2199,
    description: "Intel Core Ultra 9, RTX 4090 16GB, OLED 240Hz display, 16\" QHD+.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
    badge: "hot",
    rating: 4.8,
    reviews: 786
  },

  // ── FASHION ───────────────────────────────────────
  {
    id: 16,
    name: "Nike Air Max 270 Sneakers",
    category: "fashion",
    price: 149,
    originalPrice: 179,
    description: "Max Air heel unit, mesh upper, lightweight responsive foam, iconic silhouette.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    badge: "hot",
    rating: 4.7,
    reviews: 8432
  },
  {
    id: 17,
    name: "Adidas Ultraboost 23 Running Shoes",
    category: "fashion",
    price: 179,
    originalPrice: 219,
    description: "BOOST midsole, Continental rubber outsole, Primeknit+ upper, energized run.",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80",
    badge: null,
    rating: 4.8,
    reviews: 6721
  },
  {
    id: 18,
    name: "Levi's 501 Original Jeans",
    category: "fashion",
    price: 79,
    originalPrice: 99,
    description: "Classic straight fit, 100% cotton denim, button-fly, timeless heritage style.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80",
    badge: null,
    rating: 4.6,
    reviews: 12341
  },
  {
    id: 19,
    name: "North Face Summit Series Jacket",
    category: "fashion",
    price: 349,
    originalPrice: 449,
    description: "FUTURELIGHT™ waterproof fabric, insulated, technical alpine performance.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80",
    badge: "new",
    rating: 4.8,
    reviews: 2341
  },
  {
    id: 20,
    name: "Ray-Ban Aviator Classic Sunglasses",
    category: "fashion",
    price: 169,
    originalPrice: 199,
    description: "Classic metal frame, G-15 lens, UV protection, timeless aviator design.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80",
    badge: null,
    rating: 4.7,
    reviews: 5621
  },
  {
    id: 21,
    name: "Polo Ralph Lauren Oxford Shirt",
    category: "fashion",
    price: 99,
    originalPrice: 129,
    description: "Classic Oxford weave, button-down collar, slim fit, iconic pony embroidery.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
    badge: null,
    rating: 4.6,
    reviews: 3201
  },
  {
    id: 22,
    name: "Timberland 6\" Premium Boots",
    category: "fashion",
    price: 199,
    originalPrice: 249,
    description: "Waterproof leather, anti-fatigue footbed, rubber lug outsole, rugged style.",
    image: "https://images.unsplash.com/photo-1542838191-786c04d4e0ec?w=400&q=80",
    badge: "sale",
    rating: 4.7,
    reviews: 4102
  },
  {
    id: 23,
    name: "Champion Classic Hoodie",
    category: "fashion",
    price: 59,
    originalPrice: 79,
    description: "Reverse-weave fleece, ribbed waistband and cuffs, front kangaroo pocket.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80",
    badge: null,
    rating: 4.5,
    reviews: 7841
  },
  {
    id: 24,
    name: "Calvin Klein Slim Fit T-Shirt",
    category: "fashion",
    price: 39,
    originalPrice: 55,
    description: "Soft cotton Jersey, slim fit, crew neck, minimalist CK branding.",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&q=80",
    badge: "sale",
    rating: 4.5,
    reviews: 9102
  },
  {
    id: 25,
    name: "New Balance 550 Sneakers",
    category: "fashion",
    price: 109,
    originalPrice: 139,
    description: "Retro basketball styling, foam cushioned insole, rubber outsole, leather upper.",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&q=80",
    badge: "hot",
    rating: 4.7,
    reviews: 5432
  },
  {
    id: 26,
    name: "Cashmere V-Neck Sweater",
    category: "fashion",
    price: 149,
    originalPrice: 199,
    description: "100% pure cashmere, relaxed V-neck, ribbed detail, ultra-soft luxury feel.",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",
    badge: null,
    rating: 4.8,
    reviews: 1892
  },
  {
    id: 27,
    name: "Gucci GG Belt",
    category: "fashion",
    price: 449,
    originalPrice: 520,
    description: "GG Marmont leather belt, gold-tone hardware, calfskin, iconic house branding.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    badge: "hot",
    rating: 4.9,
    reviews: 2341
  },
  {
    id: 28,
    name: "Columbia Fleece Zip-Up Jacket",
    category: "fashion",
    price: 89,
    originalPrice: 119,
    description: "Polartec® fleece, half-zip pullover, stretch binding, moisture-wicking.",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400&q=80",
    badge: null,
    rating: 4.6,
    reviews: 2891
  },
  {
    id: 29,
    name: "Converse Chuck Taylor All Star",
    category: "fashion",
    price: 69,
    originalPrice: 89,
    description: "Classic canvas, rubber toe cap, iconic All Star patch, timeless design.",
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&q=80",
    badge: "sale",
    rating: 4.6,
    reviews: 18210
  },
  {
    id: 30,
    name: "Patagonia Down Puffer Vest",
    category: "fashion",
    price: 129,
    originalPrice: 169,
    description: "700-fill-power RDS-certified down, recycled shell, zippered handwarmer pockets.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&q=80",
    badge: null,
    rating: 4.7,
    reviews: 1654
  },

  // ── ACCESSORIES ───────────────────────────────────
  {
    id: 31,
    name: "Apple Watch Series 9",
    category: "accessories",
    price: 399,
    originalPrice: 449,
    description: "S9 SiP chip, Always-On Retina, Double Tap gesture, 18h battery, carbon neutral.",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80",
    badge: "hot",
    rating: 4.8,
    reviews: 6432
  },
  {
    id: 32,
    name: "Coach Crossbody Leather Bag",
    category: "accessories",
    price: 279,
    originalPrice: 350,
    description: "Refined pebble leather, adjustable strap, zip top closure, logo lining.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80",
    badge: null,
    rating: 4.7,
    reviews: 2103
  },
  {
    id: 33,
    name: "Fossil Quartz Chronograph Watch",
    category: "accessories",
    price: 189,
    originalPrice: 229,
    description: "Multi-function chronograph, stainless steel case, leather strap, mineral glass.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&q=80",
    badge: "sale",
    rating: 4.6,
    reviews: 3891
  },
  {
    id: 34,
    name: "Samsonite Carry-On Spinner Luggage",
    category: "accessories",
    price: 299,
    originalPrice: 399,
    description: "Lightweight, spinner wheels, TSA lock, expandable, 22\" cabin compliant.",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&q=80",
    badge: null,
    rating: 4.8,
    reviews: 4210
  },
  {
    id: 35,
    name: "Anker 20000mAh Power Bank",
    category: "accessories",
    price: 49,
    originalPrice: 69,
    description: "20000mAh, 22.5W fast charge, USB-C & USB-A, ultra-high-capacity portable.",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80",
    badge: "sale",
    rating: 4.8,
    reviews: 8920
  },
  {
    id: 36,
    name: "Tiffany & Co. Pendant Necklace",
    category: "accessories",
    price: 299,
    originalPrice: 375,
    description: "Sterling silver, 16\" chain, iconic Tiffany Blue box, timeless elegance.",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    badge: "hot",
    rating: 4.9,
    reviews: 1892
  },
  {
    id: 37,
    name: "Bellroy Slim Leather Wallet",
    category: "accessories",
    price: 89,
    originalPrice: 109,
    description: "Slim design, 6-card capacity, RFID protection, premium leather, pull tab.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    badge: null,
    rating: 4.7,
    reviews: 5402
  },
  {
    id: 38,
    name: "Beats Studio Pro Headphones",
    category: "accessories",
    price: 349,
    originalPrice: 449,
    description: "Personalized spatial audio, 40h battery, ANC + transparency, USB-C & 3.5mm.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    badge: "new",
    rating: 4.7,
    reviews: 2891
  },
  {
    id: 39,
    name: "Coach Dakota Backpack",
    category: "accessories",
    price: 349,
    originalPrice: 450,
    description: "Polished pebble leather, laptop sleeve, zip closure, refined silhouette.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    badge: null,
    rating: 4.7,
    reviews: 1243
  },
  {
    id: 40,
    name: "Oakley Radar EV Path Sunglasses",
    category: "accessories",
    price: 199,
    originalPrice: 249,
    description: "Prizm lens technology, O-Matter frame, wrap-around sport design, UV shield.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
    badge: null,
    rating: 4.8,
    reviews: 3102
  },
  {
    id: 41,
    name: "Swarovski Crystal Bracelet",
    category: "accessories",
    price: 129,
    originalPrice: 169,
    description: "Precision-cut crystals, rhodium plating, magnetic clasp, Swarovski swan logo.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    badge: "hot",
    rating: 4.8,
    reviews: 2210
  },
  {
    id: 42,
    name: "Peak Design 20L Everyday Backpack",
    category: "accessories",
    price: 299,
    originalPrice: 369,
    description: "WeatherPro™ canvas, MagLatch system, Flexfold dividers, laptop sleeve 16\".",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80",
    badge: null,
    rating: 4.9,
    reviews: 1543
  },
  {
    id: 43,
    name: "Pandora Moments Snake Chain Bracelet",
    category: "accessories",
    price: 69,
    originalPrice: 89,
    description: "Sterling silver snake chain, toggle clasp, compatible with Pandora charms.",
    image: "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=400&q=80",
    badge: "sale",
    rating: 4.7,
    reviews: 6891
  },
  {
    id: 44,
    name: "Swiss+Tech Portable Tripod",
    category: "accessories",
    price: 79,
    originalPrice: 109,
    description: "360° ball head, lightweight aluminum, 63\" max height, carry bag included.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&q=80",
    badge: null,
    rating: 4.6,
    reviews: 1892
  },
  {
    id: 45,
    name: "Fossil Messenger Canvas Bag",
    category: "accessories",
    price: 119,
    originalPrice: 159,
    description: "Rugged canvas with leather trim, multiple pockets, magnetic closure, 15\" laptop.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    badge: null,
    rating: 4.5,
    reviews: 2109
  }
];

// ====================================================
// STATE
// ====================================================
let cart = JSON.parse(localStorage.getItem('madu-cart') || '[]');
let currentCategory = 'all';
let currentMaxPrice = 2000;
let searchQuery = '';
let wishlist = JSON.parse(localStorage.getItem('madu-wishlist') || '[]');

// ====================================================
// HELPER FUNCTIONS
// ====================================================
function saveCart() {
  localStorage.setItem('madu-cart', JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem('madu-wishlist', JSON.stringify(wishlist));
}

function formatPrice(n) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0 });
}

function getStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function showToast(msg, emoji = '✅') {
  const t = document.getElementById('toast');
  t.innerHTML = `${emoji} ${msg}`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ====================================================
// CART LOGIC
// ====================================================
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`${product.name} added to cart`, '🛒');

  // Smooth scroll to checkout section after short delay
  setTimeout(() => {
    const checkout = document.getElementById('checkout');
    if (checkout) checkout.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 600);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
  showToast('Item removed from cart', '🗑️');
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
}

function getCartTotal() {
  return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
}

function getCartCount() {
  return cart.reduce((acc, item) => acc + item.qty, 0);
}

function updateCartUI() {
  // Cart count badge
  const countEls = document.querySelectorAll('.cart-count');
  const count = getCartCount();
  countEls.forEach(el => {
    el.textContent = count;
    el.style.display = count === 0 ? 'none' : 'flex';
  });

  // Cart items list
  const itemsContainer = document.getElementById('cart-items');
  const emptyEl = document.getElementById('cart-empty');
  const subtotalEl = document.getElementById('cart-subtotal');

  if (!itemsContainer) return;

  if (cart.length === 0) {
    if (emptyEl) emptyEl.style.display = 'flex';
    itemsContainer.innerHTML = '';
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';

  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item" id="cart-item-${item.id}">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/70x70/1e1535/a78bfa?text=Product'">
      <div class="cart-item-info">
        <div class="cart-item-name" title="${item.name}">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">✕</button>
    </div>
  `).join('');

  if (subtotalEl) subtotalEl.textContent = formatPrice(getCartTotal());

  // Update checkout summary
  updateCheckoutSummary();
}

function updateCheckoutSummary() {
  const el = document.getElementById('checkout-items-list');
  const totalEl = document.getElementById('checkout-total');
  if (!el) return;

  if (cart.length === 0) {
    el.innerHTML = '<div class="checkout-summary-item"><span>No items in cart</span><span>—</span></div>';
    if (totalEl) totalEl.textContent = formatPrice(0);
    return;
  }

  const itemsHtml = cart.map(item => `
    <div class="checkout-summary-item">
      <span>${item.name} × ${item.qty}</span>
      <span class="amount">${formatPrice(item.price * item.qty)}</span>
    </div>
  `).join('');

  const shipping = getCartTotal() >= 100 ? 0 : 9.99;
  const total = getCartTotal() + shipping;

  el.innerHTML = itemsHtml + `
    <div class="checkout-summary-item">
      <span>Shipping</span>
      <span class="amount">${shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
    </div>
  `;

  if (totalEl) totalEl.textContent = formatPrice(total);
}

// ====================================================
// WISHLIST
// ====================================================
function toggleWishlist(id, btn) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    btn.classList.add('active');
    btn.textContent = '❤️';
    showToast('Added to wishlist', '❤️');
  } else {
    wishlist.splice(idx, 1);
    btn.classList.remove('active');
    btn.textContent = '🤍';
    showToast('Removed from wishlist', '💔');
  }
  saveWishlist();
}

// ====================================================
// FILTER LOGIC
// ====================================================
function getFilteredProducts() {
  return products.filter(p => {
    const catOk    = currentCategory === 'all' || p.category === currentCategory;
    const priceOk  = p.price <= currentMaxPrice;
    const searchOk = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery);
    return catOk && priceOk && searchOk;
  });
}

// ====================================================
// RENDER PRODUCTS
// ====================================================
function renderProducts(list) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No products found</h3>
        <p>Try adjusting your filters or search term.</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(p => {
    const isWished = wishlist.includes(p.id);
    const badgeHtml = p.badge
      ? `<span class="product-badge badge-${p.badge}">${p.badge}</span>`
      : '';

    return `
      <div class="product-card fade-in" data-id="${p.id}">
        <div class="product-img-wrap">
          ${badgeHtml}
          <button class="product-wishlist ${isWished ? 'active' : ''}" onclick="toggleWishlist(${p.id}, this)" title="Wishlist">
            ${isWished ? '❤️' : '🤍'}
          </button>
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80'">
        </div>
        <div class="product-info">
          <div class="product-category">${p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.description}</div>
          <div class="product-rating">
            <span class="stars">${getStars(p.rating)}</span>
            <span class="rating-count">(${p.reviews.toLocaleString()})</span>
          </div>
          <div class="product-footer">
            <div class="product-price">
              <span class="price-current">${formatPrice(p.price)}</span>
              ${p.originalPrice ? `<span class="price-original">${formatPrice(p.originalPrice)}</span>` : ''}
            </div>
            <button class="btn-add-cart" onclick="addToCart(${p.id})">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Trigger fade-in animations
  requestAnimationFrame(() => {
    const cards = grid.querySelectorAll('.fade-in');
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 40);
    });
  });
}

function applyFilters() {
  renderProducts(getFilteredProducts());
}

// ====================================================
// CART DRAWER
// ====================================================
function openCart() {
  document.getElementById('cart-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ====================================================
// CHECKOUT & PAYMENT
// ====================================================
function handlePayment(method) {
  const name = document.getElementById('checkout-name')?.value.trim();
  const email = document.getElementById('checkout-email')?.value.trim();
  const address = document.getElementById('checkout-address')?.value.trim();

  if (!name || !email || !address) {
    showToast('Please fill in all fields first', '⚠️');
    return;
  }

  if (cart.length === 0) {
    showToast('Your cart is empty', '🛒');
    return;
  }

  // Show success popup
  const popup = document.getElementById('payment-popup');
  const popupMethod = document.getElementById('popup-method');
  if (popup) {
    if (popupMethod) popupMethod.textContent = method;
    popup.classList.add('show');
  }
}

function closePopup() {
  const popup = document.getElementById('payment-popup');
  if (popup) popup.classList.remove('show');

  // Clear cart after successful payment
  cart = [];
  saveCart();
  updateCartUI();

  // Reset form
  const form = document.getElementById('checkout-form');
  if (form) form.reset();

  showToast('Order placed successfully! 🎉', '🚀');
}

// ====================================================
// PRICE SLIDER
// ====================================================
function initPriceSlider() {
  const slider = document.getElementById('price-slider');
  const display = document.getElementById('price-display');
  if (!slider) return;

  const maxProduct = Math.max(...products.map(p => p.price));
  slider.max = maxProduct + 200;
  slider.value = maxProduct + 200;
  currentMaxPrice = maxProduct + 200;
  if (display) display.textContent = `Up to ${formatPrice(currentMaxPrice)}`;

  slider.addEventListener('input', () => {
    currentMaxPrice = parseInt(slider.value);
    const pct = ((currentMaxPrice - parseInt(slider.min)) / (parseInt(slider.max) - parseInt(slider.min))) * 100;
    slider.style.setProperty('--val', pct + '%');
    if (display) display.textContent = `Up to ${formatPrice(currentMaxPrice)}`;
    applyFilters();
  });

  // Init gradient
  const pct = 100;
  slider.style.setProperty('--val', pct + '%');
}

// ====================================================
// SEARCH
// ====================================================
function initSearch() {
  const searchInput = document.getElementById('nav-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.toLowerCase().trim();
    applyFilters();

    // Scroll to products
    if (searchQuery.length > 0) {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
}

// ====================================================
// CATEGORY FILTER BUTTONS
// ====================================================
function initCategoryFilter() {
  const btns = document.querySelectorAll('.filter-cat-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.cat;
      applyFilters();
    });
  });
}

// ====================================================
// SCROLL ANIMATIONS (IntersectionObserver)
// ====================================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ====================================================
// SCROLL TO TOP
// ====================================================
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ====================================================
// MOBILE MENU
// ====================================================
function initMobileMenu() {
  const toggle = document.getElementById('hamburger');
  const menu   = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
    }
  });
}

// ====================================================
// COUNTER ANIMATION (Hero stats)
// ====================================================
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const startVal = 0;
  el.textContent = '0';

  requestAnimationFrame(function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(startVal + (target - startVal) * ease);
    el.textContent = target >= 1000
      ? current.toLocaleString('en-US')
      : current.toString();
    if (progress < 1) requestAnimationFrame(update);
  });
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.counter);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// ====================================================
// INIT
// ====================================================
document.addEventListener('DOMContentLoaded', () => {
  // Render products
  applyFilters();

  // Init all interactive features
  initPriceSlider();
  initSearch();
  initCategoryFilter();
  initScrollAnimations();
  initScrollTop();
  initMobileMenu();
  initCounters();

  // Update cart from localStorage
  updateCartUI();

  // Cart drawer triggers
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) cartBtn.addEventListener('click', openCart);

  const closeCartEl = document.getElementById('close-cart');
  if (closeCartEl) closeCartEl.addEventListener('click', closeCart);

  const cartOverlay = document.getElementById('cart-overlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) closeCart();
    });
  }

  // Popup close
  const popupEl = document.getElementById('payment-popup');
  if (popupEl) {
    popupEl.addEventListener('click', (e) => {
      if (e.target === popupEl) closePopup();
    });
  }

  // "Shop Now" hero button → products section
  const shopNowBtn = document.getElementById('shop-now');
  if (shopNowBtn) {
    shopNowBtn.addEventListener('click', () => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Payment buttons
  document.querySelectorAll('.pay-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      handlePayment(btn.dataset.method);
    });
  });

  console.log('%c🛍️ Madu E-Commerce Loaded!', 'color: #7c3aed; font-size: 16px; font-weight: bold;');
  console.log('%c   Developer: Adx Amit', 'color: #a78bfa; font-size: 13px;');
});
