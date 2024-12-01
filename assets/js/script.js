'use strict';

document.querySelector(".button").addEventListener("click", function () {
    document.querySelector(".modal").classList.remove("hidden");
});
  
document.querySelector(".modal-close").addEventListener("click", function () {
    document.querySelector(".modal").classList.add("hidden");
});
  
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector(".form-message").textContent = "Thank you for your message!";
});
  