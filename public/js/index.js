let numbers = document.querySelectorAll(".number-calc");
let operations = document.querySelectorAll(".fas");
let value1 = 0;
let value2 = 0;
let secondNumberCheck = false;

let display = document.querySelector(".display");
let clear = document.querySelector(".AC");

clear.addEventListener("click", clearDisplay);

for (let number of numbers) {
  number.addEventListener("click", updateDisplay);
}

for (let operation of operations) {
  operation.addEventListener("click", doCalculation);
}

function updateDisplay() {
  if (!secondNumberCheck) {
    if (display.textContent == 0) {
      value1 = this.textContent;
      display.textContent = value1;
      return;
    }
    value1 = this.textContent;
    display.textContent += value1;
  } else {
    if (display.textContent == 0) {
      value2 = this.textContent;
      display.textContent = value2;
      return;
    }
    value2 = this.textContent;
    display.textContent += value2;
  }
}

function doCalculation() {
  display.textContent = 0;
  secondNumberCheck = true;
}

function clearDisplay() {
  display.textContent = 0;
  value1 = 0;
  value2 = 0;
}
