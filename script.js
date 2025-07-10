const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");

function renderProducts(productList) {
  grid.innerHTML = "";
  productList.forEach(product => {
    const link = `https://wa.me/6281234567890?text=Halo%20saya%20ingin%20pesan%20${encodeURIComponent(product.name)}`;
    grid.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Rp${product.price.toLocaleString()}</p>
        <a href="${link}" target="_blank">Beli Sekarang</a>
      </div>
    `;
  });
}

function filterCategory(category) {
  const filtered = category === 'All' ? products : products.filter(p => p.category === category);
  renderProducts(filtered);
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  renderProducts(filtered);
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

renderProducts(products);