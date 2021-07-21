class Calculator {
  result = 0;
  displayString = "";
  nextOperation = null;
  operations = {};

  constructor(display) {
    this.display = display;
    this.operations["+"] = this.add;
  }

  handleEntry = (e) => {
    if (e.target.className === "operation") {
      this.nextOperation = e.target.value;
    }

    if (e.target.className === "number") {
      this.nextOperation === null
        ? this.enterValue(e.target.value)
        : this.operations[this.nextOperation](e.target.value);
    }
  };

  enterValue = (value) => {
    this.displayString += value;
    this.display.textContent = this.displayString;
    this.result = Number(this.displayString);
  };

  add = (value) => {
    this.result += Number(value);
    this.display.textContent = this.result;
    this.nextOperation = null;
    this.displayString = "";
  };
}

const calculator = new Calculator(document.getElementById("display"));
document
  .getElementById("keypad")
  .addEventListener("click", calculator.handleEntry);
