// Alive both email forms by adding transition and incorrect red border
let emailInputs = [
    { input: document.getElementById("email-address1"), box: document.getElementById("eh1"), error: document.getElementById("emailError1") },
    { input: document.getElementById("email-address2"), box: document.getElementById("eh2"), error: document.getElementById("emailError2") }
];

function handleFocusIn(inputBox) {
    inputBox.style.fontSize = "13px";
    inputBox.style.transform = "translateY(-10px)";
}

function handleFocusOut(input, inputBox, errorBox) {
    if (input.value === "") {
        inputBox.style.transform = "translateY(0)";
        inputBox.style.fontSize = "18px";
        input.style.borderColor = "red";
        errorBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 16 16" role="img" data-icon="CircleXSmall" aria-hidden="true" class="default-ltr-cache-0 e1vkmu651">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="red"></path>
                              </svg> Email is required.`;
    } else {
        input.style.borderColor = "green";
        errorBox.innerHTML = "";
    }
}

emailInputs.forEach(({ input, box, error }) => {
    input.addEventListener("focusin", () => handleFocusIn(box));
    input.addEventListener("focusout", () => handleFocusOut(input, box, error));
});