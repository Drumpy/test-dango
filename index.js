const cartDialog = document.getElementById("cart-dialog");
const closeDialogButton = document.getElementById("close-dialog");

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
