let products = [];

const container = document.getElementById("products");

function showProducts(data) {

  container.innerHTML = "";

  data.forEach(item => {

    container.innerHTML += `
      <div class="product-card">

        <img src="${item.image}" alt="${item.name}">

        <div class="product-info">

          <h3>${item.name}</h3>

          <p>${item.category}</p>

          <div class="price">₹${item.price}</div>

          <a class="order-btn"
          href="https://wa.me/919286346530?text=${encodeURIComponent(`🛍️ Assalamu Alaikum

I want to order:

${item.name}

Price: ₹${item.price}

Please send me more details.`)}"
          target="_blank">

          Order Now

          </a>

        </div>

      </div>
    `;

  });

}


// Load Products from products.json

fetch("products.json")

.then(response => response.json())

.then(data => {

    products = data;

    showProducts(products);

})

.catch(error => {

    console.error("Error loading products:", error);

});


// Search

document.getElementById("search").addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const result = products.filter(item =>

        item.name.toLowerCase().includes(value) ||

        item.category.toLowerCase().includes(value)

    );

    showProducts(result);

});


// Category Filter

const buttons = document.querySelectorAll(".category button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.textContent;

        if (category === "All") {

            showProducts(products);

            return;

        }

        const filtered = products.filter(item => item.category === category);

        showProducts(filtered);

    });

});
