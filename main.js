class Calculator {
  displayString = "";
  result = 0;
  firstOperand = 0;
  secondOperand = 0;
  nextOperation = null;
  isNewCalculation = true;
  operations = {};

  constructor(display) {
    this.display = display;
    this.updateDisplay(this.result);
    this.operations["+"] = this.add;
    this.operations["-"] = this.subtract;
    this.operations["x"] = this.multiply;
    this.operations["÷"] = this.divide;
  }

  updateDisplay = (value) => {
    this.isNewCalculation && !this.displayString
      ? (this.displayString = value)
      : (this.displayString += value);
    this.display.textContent = this.displayString;
  };

  handleEntry = (e) => {
    if (e.target.className === "number") {
      this.handleNumber(e.target.value);
    }

    if (e.target.className === "operation") {
      this.handleOperator(e.target.value);
    }

    if (e.target.className === "helper") {
      this.handleHelper(e.target.value);
    }

    this.logTerms();
  };

  handleNumber(value) {
    if (!this.isNewCalculation && !this.nextOperation) {
      this.reset();
    }

    if (value === ".") document.getElementById("decimal").disabled = true;
    this.updateDisplay(value);
    if (this.isNewCalculation) {
      this.firstOperand = Number(this.displayString);
    } else {
      this.secondOperand = Number(this.displayString);
    }
  }

  handleOperator(operator) {
    this.displayString = "";
    document.getElementById("decimal").disabled = false;

    if (this.isNewCalculation) {
      this.nextOperation = operator;
      this.isNewCalculation = !this.isNewCalculation;
    } else if (this.nextOperation === null) {
      this.nextOperation = operator;
    } else if (operator !== "=") {
      this.handleOperation(this.nextOperation);
      this.nextOperation = operator;
    } else {
      this.handleOperation(this.nextOperation);
      this.nextOperation = null;
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

  handleHelper(helper) {
    if (helper === "AC") {
      this.reset();
    }
  }

  reset() {
    this.displayString = "";
    this.result = 0;
    this.firstOperand = 0;
    this.secondOperand = 0;
    this.nextOperation = null;
    this.isNewCalculation = true;
    this.updateDisplay(this.result);
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

  divide = (a, b) => {
    return Number(a) / Number(b);
  };

  logTerms() {
    console.log("IS NEW CALCULATION", this.isNewCalculation);
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
