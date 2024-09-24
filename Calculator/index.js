let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayValue = '';


function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue || '0';
}


function clearCalculator() {
  firstNumber = null;
  secondNumber = null;
  operator = null;
  displayValue = '';
  updateDisplay();
}


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Can't divide by zero!";
  }
  return a / b;
}


function roundToTwoDecimalPlaces(num) {
  return Math.round(num * 100) / 100;
}


function operate(operator, a, b) {
  let result;
  switch (operator) {
    case '+':
      result = add(a, b);
      break;
    case '-':
      result = subtract(a, b);
      break;
    case '*':
      result = multiply(a, b);
      break;
    case '/':
      result = divide(a, b);
      break;
    default:
      result = null;
  }
  return typeof result === 'number' ? roundToTwoDecimalPlaces(result) : result;
}


const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.textContent;
    displayValue += value;
    updateDisplay();
  });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (firstNumber === null) {
      firstNumber = parseFloat(displayValue);
      displayValue = '';
    }
    operator = e.target.textContent;
    // displayValue += operator;

  });
});


document.getElementById('equals').addEventListener('click', () => {
  if (firstNumber !== null && operator !== null) {
    secondNumber = parseFloat(displayValue);
    const result = operate(operator, firstNumber, secondNumber);
    displayValue = result.toString();
    firstNumber = result;
    secondNumber = null;
    operator = null;
    updateDisplay();
  }
});


document.getElementById('clear').addEventListener('click', clearCalculator);
