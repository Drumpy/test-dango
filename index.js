let cartItems = [];

const cartCounter = document.getElementById("cart-count");
const featuredPrice = document.querySelectorAll("[data-featured-price]");
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

const cartItemsList = document.getElementById("cart-items-list");
const cartTotalPrice = document.getElementById("cart-total");

const cartDialog = document.getElementById("cart-dialog");
const closeDialogButton = document.getElementById("close-dialog");

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

// ****************************************
// Functions
// ****************************************

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

function removeItemFromCart(itemId) {
  cartItems = cartItems.filter((item) => item.itemId !== itemId);
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

// ****************************************
// Dialog
// ****************************************

if (closeDialogButton) {
  closeDialogButton.addEventListener("click", closeDialog);
}

function showDialog() {
  if (cartDialog) {
    cartDialog.showModal();
  }
}

function closeDialog() {
  if (cartDialog) {
    cartDialog.close();
  }
}

// ****************************************
// Navbar
// ****************************************

const navbarButton = document.querySelector("#navbar-button");
const navbarElement = document.querySelector("#navbar");

if (navbarButton && navbarElement) {
  navbarButton.addEventListener("click", () => {
    navbarElement.classList.toggle("hidden");
  });
}
