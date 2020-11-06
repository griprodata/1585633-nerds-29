const modalLink = document.querySelector(".footer-contact-link");
const modalPopup =document.querySelector(".modal-email");
const modalClose =document.querySelector(".modal-close")
const loginLogin =document.querySelector(".login-icon")
modalLink.addEventListener("click", function (evt) {
evt.preventDefault();
modalPopup.classList.add("modal-show");
loginLogin.focus();
});

modalClose.addEventListener("click", function (evt) {
evt.preventDefault();
modalPopup.classList.remove("modal-show");
});