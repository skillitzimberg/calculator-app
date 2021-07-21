class Calculator {
  displayString = "";
  result = 0;
  firstOperand = 0;
  secondOperand = 0;
  nextOperation = null;
  isFirstOperand = true;
  operations = {};

  constructor(display) {
    this.display = display;
    this.operations["+"] = this.add;
    this.operations["-"] = this.subtract;
    this.operations["x"] = this.multiply;
  }

  handleEntry = (e) => {
    if (e.target.className === "operation") {
      this.handleOperator(e.target.value);
    }

    if (e.target.className === "number") {
      this.handleNumber(e.target.value);
    }
    this.logTerms();
  };

  handleNumber(value) {
    this.updateDisplay(value);
    if (this.isFirstOperand) {
      this.firstOperand = Number(this.displayString);
    } else {
      this.secondOperand = Number(this.displayString);
    }
  }

  updateDisplay = (value) => {
    this.displayString += value;
    this.display.textContent = this.displayString;
  };

  handleOperator(operator) {
    this.displayString = "";
    if (this.isFirstOperand) {
      this.nextOperation = operator;
      this.isFirstOperand = !this.isFirstOperand;
    } else {
      this.handleOperation(this.nextOperation);
      this.nextOperation = operator;
    }
  }

  handleOperation(operator) {
    this.result = this.operations[operator](
      this.firstOperand,
      this.secondOperand
    );
    this.updateDisplay(this.result);
    this.firstOperand = this.result;
    this.displayString = "";
  }

  add = (a, b) => {
    return Number(a) + Number(b);
  };

  subtract = (a, b) => {
    return Number(a) - Number(b);
  };

  multiply = (a, b) => {
    return Number(a) * Number(b);
  };

  logTerms() {
    console.log("USING 1st OP", this.isFirstOperand);
    console.log("1st OP", this.firstOperand);
    console.log("2nd OP", this.secondOperand);
    console.log("OPERATOR", this.nextOperation);
    console.log("RESULT", this.result);
    console.log("DISPLAY", this.displayString);
    console.log();
  }
}

const calculator = new Calculator(document.getElementById("display"));
document
  .getElementById("keypad")
  .addEventListener("click", calculator.handleEntry);
