const form = document.getElementById("contact-form");

console.log("testing");
console.log(form);

form.onsubmit = () => {
  alert("Form has been submitted!!!");
};
