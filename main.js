class Calculator {
  displayString = "0";
  result = 0;
  firstOperand = 0;
  secondOperand = 0;
  nextOperation = null;
  isNewCalculation = true;
  operations = {};
  memory = 0;

  constructor() {
    this.display = document.getElementById("display");
    this.updateDisplay(this.result);
    this.operations["+"] = this.add;
    this.operations["-"] = this.subtract;
    this.operations["x"] = this.multiply;
    this.operations["÷"] = this.divide;
    this.logTerms();
  }

  updateDisplay = (value) => {
    if (this.displayString === "" && value === ".") {
      this.displayString = `0${value}`;
    } else if (this.displayString === "" || value === ".") {
      this.displayString += `${value}`;
    } else if (this.displayString !== "0" || value === ".") {
      this.displayString += `${value}`;
    } else {
      this.displayString = `${value}`;
    }

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
    // Assume the user is asking for a new calculation
    if (!this.isNewCalculation && !this.nextOperation) {
      this.clearAll();
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

    if (this.isNewCalculation && operator !== "=") {
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

  add = (a, b) => Number(a) + Number(b);

  subtract = (a, b) => Number(a) - Number(b);

  multiply = (a, b) => Number(a) * Number(b);

  divide = (a, b) => Number(a) / Number(b);

  handleHelper(helper) {
    if (helper === "AC") {
      this.clearAll();
    }
    if (helper === "CE") {
      this.clearEntry();
    }
    if (helper === "M+") {
      this.memorySave();
    }
    if (helper === "M-") {
      this.memoryClear();
    }
    if (helper === "MR") {
      this.memoryRecall();
    }
  }

  clearAll() {
    this.displayString = "";
    this.result = 0;
    this.firstOperand = 0;
    this.secondOperand = 0;
    this.nextOperation = null;
    this.isNewCalculation = true;
    this.updateDisplay(this.result);
  }

  clearEntry() {
    this.displayString = "";
    this.updateDisplay(0);
    this.isNewCalculation ? (this.firstOperand = 0) : (this.secondOperand = 0);
  }

  memorySave() {
    this.memory =
      this.displayString !== "" ? Number(this.displayString) : this.result;
  }

  memoryClear() {
    this.memory = 0;
  }

  memoryRecall() {
    this.isNewCalculation
      ? (this.firstOperand = this.memory)
      : (this.secondOperand = this.memory);
    this.displayString = "";
    this.updateDisplay(this.memory);
  }

  logTerms() {
    console.log("IS NEW CALCULATION", this.isNewCalculation);
    console.log("1st OP", this.firstOperand);
    console.log("2nd OP", this.secondOperand);
    console.log("OPERATOR", this.nextOperation);
    console.log("RESULT", this.result);
    console.log("DISPLAY", this.displayString);
    console.log("MEMORY", this.memory);
    console.log();
  }
}

const calculator = new Calculator();
document
  .getElementById("keypad")
  .addEventListener("click", calculator.handleEntry);
