const display = document.getElementById("display");
const numbers = document.getElementById("numbers");
numbers.addEventListener("click", enterValue);
function enterValue(e) {
  display.textContent += e.target.value;
}
