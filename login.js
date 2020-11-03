const loginLink = document.querySelector(".footer-contact-link");
const loginPopup =document.querySelector(".modal-email");
const loginClose =document.querySelector(".modal-close")
const loginLogin =document.querySelector(".login-icon")
loginLink.addEventListener("click",function (evt) {
evt.preventDefault();
loginPopup.classList.add("modal-show");
loginLogin.focus();
});

loginClose.addEventListener("click", function (evt) {
evt.preventDefault();
loginPopup.classList.remove("modal-show");
});