const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");

const btnLogins = document.querySelectorAll("#btn-login");
// const btnCloseLog = document.getElementById("btn-logClose");
const modalLogin = document.getElementById("modal-login");
const register = document.getElementById("register");
const login = document.getElementById("login");

btnLogins.forEach((btnLogin) => {
  btnLogin.addEventListener("click", () => {
    menu.classList.add("hidden");
    modalLogin.classList.remove("hidden");
    register.classList.remove("hidden");
  });
});

// btnCloseLog.addEventListener("click", () => {
//   modalLogin.classList.add("hidden");
// });

// openMenu.addEventListener("click", () => {
//   menu.classList.add("block");
//   menu.classList.remove("hidden");
// });

// closeMenu.addEventListener("click", () => {
//   menu.classList.add("hidden");
//   menu.classList.remove("block");
// });

// SIDEBAR
const closeSidebar = document.getElementById("close-sidebar");

closeSidebar.addEventListener("click", () => {
  alert("hasil");
});
