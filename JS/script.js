let emailInput = document.getElementById("email-address1");
let emailBox = document.querySelector(".email-holder");

emailInput.addEventListener("focusin", () => {
    emailBox.style.fontSize = "13px";
    emailBox.style.transform = "translateY(-10px)"
})

emailInput.addEventListener("focusout", () => {
    emailBox.style.transform = "translateY(0)"
    emailBox.style.fontSize = "18px";
})
