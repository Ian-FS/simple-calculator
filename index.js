const keys = document.querySelectorAll("button");
const input = document.querySelector("input");

keys.forEach((key) => {
  key.addEventListener("click", (event) => {
    input.value += event.target.innerHTML;
  });
});
