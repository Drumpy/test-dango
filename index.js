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
