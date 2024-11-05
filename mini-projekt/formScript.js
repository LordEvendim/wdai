const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email");

console.log(localStorage.getItem("email") === null);

emailInput.value = localStorage.getItem("email") ?? "";

form.addEventListener("submit", (e) => {
  alert("Form has been submitted!!!");

  console.log(emailInput.value);

  localStorage.setItem("email", emailInput.value);
});
