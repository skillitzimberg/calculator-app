const display = document.getElementById("display");
const keypad = document.getElementById("keypad");

keypad.addEventListener("click", handleEntry);

let result = 0;
let nextOperation = null;
let displayString = "";

function handleEntry(e) {
  if (e.target.className === "operation") {
    nextOperation = e.target.value;
  }

  if (e.target.className === "number") {
    nextOperation === null
      ? enterValue(e.target.value)
      : operations[nextOperation](e.target.value);
  }
}

function enterValue(value) {
  displayString += value;
  display.textContent = displayString;
  result = Number(displayString);
}

function add(value) {
  result += Number(value);
  display.textContent = result;
  nextOperation = null;
  displayString = "";
}

const operations = {
  "+": add,
};
