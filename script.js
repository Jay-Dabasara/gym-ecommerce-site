function buyProduct(productName) {
  alert(`${productName} added to cart! ✅`);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(productName);

  localStorage.setItem("cart", JSON.stringify(cart));
}

function showCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let list = document.getElementById("cart-list");
  list.innerHTML = ""; 

  if (cart.length === 0) {
    list.innerHTML = "<li>Cart is empty</li>";
    return;
  }

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}
