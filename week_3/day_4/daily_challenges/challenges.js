const form = document.getElementById("myForm");
const output = document.getElementById("output");

form.addEventListener("submit", e => {
  e.preventDefault(); // stop the page from reloading

  const name = form.elements["name"].value;
  const lastname = form.elements["lastname"].value;

  const data = { name, lastname };

  output.textContent = JSON.stringify(data);
});
