// Select elements

const headlineInput = document.getElementById("headlineInput");
const updateButton = document.getElementById("updateButton");
const ctaHeadline = document.getElementById("ctaHeadline");

// Add event listener

updateButton.addEventListener("click", function () {
    ctaHeadline.textContent = headlineInput.value;
});
