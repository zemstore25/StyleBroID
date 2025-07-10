let products = []; // dari data.js
let cart = [];
let wishlist = [];

function displayProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>Rp${product.price.toLocaleString()}</p>
      <div class="buttons">
        <button onclick="addToCart(${product.id})">🛒</button>
        <button onclick="addToWishlist(${product.id})">❤️</button>
        <a href="https://wa.me/6281234567890?text=Saya%20mau%20beli%20${encodeURIComponent(product.name)}" target="_blank">Beli Sekarang</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterCategory(category) {
  if (category === "All") {
    displayProducts();
  } else {
    products = allProducts.filter(p => p.category === category);
    displayProducts();
  }
}

function addToCart(id) {
  const item = allProducts.find(p => p.id === id);
  if (!cart.includes(item)) cart.push(item);
  alert(`Ditambahkan ke keranjang: ${item.name}`);
}

function addToWishlist(id) {
  const item = allProducts.find(p => p.id === id);
  if (!wishlist.includes(item)) wishlist.push(item);
  alert(`Ditambahkan ke wishlist: ${item.name}`);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

window.onload = () => {
  products = allProducts;
  displayProducts();
};