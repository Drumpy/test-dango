let cartItems = [];

const cartCounter = document.getElementById("cart-count");
const featuredPrice = document.querySelectorAll("[data-featured-price]");
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

const cartItemsList = document.getElementById("cart-items-list");
const cartTotalPrice = document.getElementById("cart-total");

// ****************************************
// Event Listeners
// ****************************************

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const itemTitle = button.dataset.itemTitle;
    const itemPrice = parseFloat(button.dataset.itemPrice);
    const itemId = parseInt(button.dataset.id);
    if (itemTitle && itemPrice && itemId) {
      addItemsToCart(itemTitle, itemPrice, itemId);
      showDialog();
    }
  });
});

function updateCartDOM() {
  if (cartItemsList) {
    cartItemsList.innerHTML = cartItems
      .map(
        (item) => `
        <li class="flex items-center gap-4 py-2">
          <p>${item.itemTitle} -  $${item.itemPrice}</p>
          <button data-remove-id="${item.itemId}" class="inline-flex rounded-full items-center justify-center w-6 h-6 border-2 text-red-500" onclick="removeItemFromCart(${item.itemId})">X</button>
        </li>
      `
      )
      .join("");
  }
  updateCartTotal();
}

updateCartDOM();

function addItemsToCart(itemTitle, itemPrice, itemId) {
  cartItems.push({ itemTitle, itemPrice, itemId });
  updateCartDOM();
  updateCartCounter();
}

function updateCartCounter() {
  cartCounter.textContent = cartItems.length;
}

function updateCartTotal() {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.itemPrice;
  });
  cartTotalPrice.textContent = `${total.toFixed(2)}`;
}
