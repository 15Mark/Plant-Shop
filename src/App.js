import React, { useState, useEffect } from "react";
import "./App.css";
import landingImg from "./images/landing.png";
import productsImg from "./images/products.jpg";
import cartImg from "./images/cart.jpg";

// If you prefer to type a simple path instead of importing,
// put images in the public folder (e.g., public/images/...) and set these:
// Example: const HERO_IMAGE_PATH = "/images/landing.png";
// Example: const DEFAULT_PRODUCT_THUMB_PATH = "/images/products.jpg";
const HERO_IMAGE_PATH = "/images/landing.png";
const DEFAULT_PRODUCT_THUMB_PATH = "/images/products.jpg";

const PLANTS = [
  {
    id: "aloe",
    name: "Aloe Vera",
    price: 8.5,
    category: "Succulents",
    thumb: productsImg,
    thumbPath: "/images/Aloe Vera.jpg",
  },
  {
    id: "snake",
    name: "Snake Plant",
    price: 12.0,
    category: "Air Purifiers",
    thumb: productsImg,
    thumbPath: "/images/Snake Plant.jpg",
  },
  {
    id: "pothos",
    name: "Golden Pothos",
    price: 10.0,
    category: "Trailing",
    thumb: productsImg,
    thumbPath: "/images/Golden-Pothos.jpg",
  },
  {
    id: "ficus",
    name: "Ficus Lyrata",
    price: 25.0,
    category: "Foliage",
    thumb: productsImg,
    thumbPath: "/images/Ficus-lyrata.jpg",
  },
  {
    id: "zz",
    name: "ZZ Plant",
    price: 14.0,
    category: "Air Purifiers",
    thumb: productsImg,
    thumbPath: "/images/ZZ plant.jpg",
  },
  {
    id: "string",
    name: "String of Pearls",
    price: 11.25,
    category: "Succulents",
    thumb: productsImg,
    thumbPath: "/images/String of Pearls.jpeg",
  },
];

function groupByCategory(items) {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
}

function Header({ currentPage, goTo, cartCount }) {
  return (
    <header className="site-header">
      <div className="container header-row">
        <div className="brand-and-nav">
          <button onClick={() => goTo("home")} className="brand">GreenHouse</button>
          <nav className="nav">
            <button
              onClick={() => goTo("products")}
              className={`nav-link ${currentPage === "products" ? "active" : ""}`}>
              Browse Plants
            </button>
            <button
              onClick={() => goTo("cart")}
              className={`nav-link ${currentPage === "cart" ? "active" : ""}`}>
              Cart
            </button>
          </nav>
        </div>

        <div className="header-right">
          <div className="note">Free local delivery over $50</div>

          <button onClick={() => goTo("cart")} aria-label="Cart" className="cart-btn">
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
            <span className="cart-badge">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Landing({ goTo }) {
  return (
    <main
      className="hero"
      style={{
        backgroundImage: `url(${HERO_IMAGE_PATH || landingImg})`,
      }}
    >
      <div className="hero-card">
        <h1 className="hero-title">GreenHouse</h1>
        <p className="hero-sub">
          We grow and curate low-maintenance houseplants perfect for small spaces, offices, and plant lovers
          who want cleaner indoor air and a touch of green. Each plant is hand-picked and potted with care.
        </p>
        <div className="hero-actions">
          <button onClick={() => goTo("products")} className="btn btn-primary">
            Get Started
          </button>
          <a href="#" onClick={(e) => e.preventDefault()} className="btn btn-outline">Learn more</a>
        </div>
      </div>
    </main>
  );
}

function ProductCard({ plant, onAdd, disabled }) {
  return (
    <div className="card">
      <img src={plant.thumbPath || plant.thumb} alt={plant.name} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{plant.name}</h3>
        <p className="card-sub">Category: {plant.category}</p>
        <div className="card-footer">
          <div className="price">${plant.price.toFixed(2)}</div>
          <button onClick={() => onAdd(plant)} disabled={disabled} className={`btn ${disabled ? "btn-disabled" : "btn-primary"}`}>
            {disabled ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductListing({ plants, onAddToCart, cart }) {
  const grouped = groupByCategory(plants);
  const categories = Object.keys(grouped);

  return (
    <main className="container section">
      <h2 className="section-title">Shop Plants</h2>
      <div className="section-stack">
        {categories.map((cat) => (
          <section key={cat}>
            <h3 className="category-title">{cat}</h3>
            <div className="product-grid">
              {grouped[cat].map((plant) => (
                <ProductCard
                  key={plant.id}
                  plant={plant}
                  onAdd={onAddToCart}
                  disabled={Boolean(cart[plant.id])}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

function CartItemRow({ item, onIncrease, onDecrease, onDelete }) {
  const { product, qty } = item;
  return (
    <div className="cart-row">
      <img src={product.thumbPath || product.thumb || cartImg} alt={product.name} className="cart-thumb" />
      <div className="cart-main">
        <div className="cart-name">{product.name}</div>
        <div className="cart-unit">Unit price: ${product.price.toFixed(2)}</div>
      </div>

      <div className="qty">
        <button onClick={() => onDecrease(product.id)} className="btn btn-ghost" aria-label="Decrease">-</button>
        <div className="qty-val">{qty}</div>
        <button onClick={() => onIncrease(product.id)} className="btn btn-ghost" aria-label="Increase">+</button>
      </div>

      <div className="cart-line">${(product.price * qty).toFixed(2)}</div>

      <div>
        <button onClick={() => onDelete(product.id)} className="link link-danger">Delete</button>
      </div>
    </div>
  );
}

function CartPage({ cartMap, onIncrease, onDecrease, onDelete, goTo }) {
  const items = Object.values(cartMap);
  const totalItems = items.reduce((s, it) => s + it.qty, 0);
  const totalCost = items.reduce((s, it) => s + it.qty * it.product.price, 0);

  return (
    <main className="container section">
      <h2 className="section-title">Shopping Cart</h2>

      <div className="muted">Total plants: <strong>{totalItems}</strong></div>
      <div className="muted">Total cost: <strong>${totalCost.toFixed(2)}</strong></div>

      <div className="card card-flat">
        {items.length === 0 ? (
          <div className="empty">
            <div className="mb-4">Your cart is empty.</div>
            <button onClick={() => goTo("products")} className="btn btn-primary">Continue shopping</button>
          </div>
        ) : (
          <div>
            <div className="stack">
              {items.map((it) => (
                <CartItemRow
                  key={it.product.id}
                  item={it}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  onDelete={onDelete}
                />
              ))}
            </div>

            <div className="cart-actions">
              <div className="cart-actions-left">
                <button onClick={() => goTo("products")} className="btn btn-outline">Continue shopping</button>
                <button onClick={() => alert("Coming Soon — checkout flow") } className="btn btn-primary">Checkout</button>
              </div>
              <div className="total">Total: ${totalCost.toFixed(2)}</div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState("home"); // home | products | cart

  // cartMap: { [id]: { product, qty } }
  const [cartMap, setCartMap] = useState(() => {
    try {
      const saved = localStorage.getItem("plantshop_cart");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Update localStorage whenever cartMap changes
  useEffect(() => {
    localStorage.setItem("plantshop_cart", JSON.stringify(cartMap));
  }, [cartMap]);

  // total count for header
  const cartCount = Object.values(cartMap).reduce((s, it) => s + it.qty, 0);

  // add to cart action
  function addToCart(product) {
    setCartMap((prev) => {
      // if already present, do nothing (button should be disabled already)
      if (prev[product.id]) return prev;
      const next = { ...prev, [product.id]: { product, qty: 1 } };
      return next;
    });
  }

  function increaseQty(productId) {
    setCartMap((prev) => {
      const item = prev[productId];
      if (!item) return prev;
      return { ...prev, [productId]: { ...item, qty: item.qty + 1 } };
    });
  }

  function decreaseQty(productId) {
    setCartMap((prev) => {
      const item = prev[productId];
      if (!item) return prev;
      const nextQty = item.qty - 1;
      if (nextQty <= 0) {
        const { [productId]: _rem, ...rest } = prev;
        return rest; // remove item completely
      }
      return { ...prev, [productId]: { ...item, qty: nextQty } };
    });
  }

  function deleteItem(productId) {
    setCartMap((prev) => {
      const { [productId]: _rem, ...rest } = prev;
      return rest;
    });
  }

  // navigation helper
  function goTo(pageName) {
    setPage(pageName);
    window.scrollTo(0, 0);
  }

  return (
    <div className="app">
      <Header currentPage={page} goTo={goTo} cartCount={cartCount} />

      {page === "home" && <Landing goTo={goTo} />}

      {page === "products" && (
        <ProductListing plants={PLANTS} onAddToCart={addToCart} cart={cartMap} />
      )}

      {page === "cart" && (
        <CartPage
          cartMap={cartMap}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onDelete={deleteItem}
          goTo={goTo}
        />
      )}

      <footer className="site-footer">© {new Date().getFullYear()} GreenHouse — plants & care</footer>
    </div>
  );
}
