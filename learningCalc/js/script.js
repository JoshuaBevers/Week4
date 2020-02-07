"use strict";

const input = document.querySelector("#input"), // input/output button
  numbers = document.querySelectorAll(".numbers div"), // number buttons
  operators = document.querySelectorAll(".operators div"), // operator buttons
  result = document.querySelector("#result"), // equal button
  clear = document.querySelector("#clear"); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed

let lastString = "";
let currentString = "";

function checkRepeat(character) {
  currentString = character;
  if (currentString === lastString) {
    lastString = currentString;
    return false;
  } else {
    lastString = currentString;
    return true;
  }
}

numbers.forEach(number => {
  number.addEventListener("click", function(e) {
    lastString = number.innerHTML;
    input.innerHTML += number.innerHTML;
  });
});

operators.forEach(oper => {
  oper.addEventListener("click", function(e) {
    if (checkRepeat(oper.innerHTML) === true) {
      input.innerHTML += oper.innerHTML;
    }
  });
});

clear.addEventListener("click", function(e) {
  input.innerHTML = "";
});

result.addEventListener("click", function(e) {
  input.innerHTML = calculation();
});

function calculation() {
  const inputString = input.innerHTML;
  let numbersArray = inputString.split(/\+|\-|\*|\//g);
  let operatorsArray = inputString.replace(/[0-9]|\./g, "").split("");
  console.log(numbersArray);
  console.log(operatorsArray);

  //multiply loop
  let multiply = operatorsArray.indexOf("*");
  while (multiply != -1) {
    let newNumber = numbersArray[multiply] * numbersArray[multiply + 1];
    numbersArray.splice(multiply, 2, newNumber);
    operatorsArray.splice(multiply, 1);
    multiply = operatorsArray.indexOf("*");
  }

  //divide loop
  let divide = operatorsArray.indexOf("/");
  while (divide != -1) {
    let newNumber = numbersArray[divide] / numbersArray[divide + 1];
    numbersArray.splice(divide, 2, newNumber);
    operatorsArray.splice(divide, 1);
    divide = operatorsArray.indexOf("/");
  }

  //add loop
  let add = operatorsArray.indexOf("+");
  while (add != -1) {
    let newNumber =
      parseFloat(numbersArray[add]) + parseFloat(numbersArray[add + 1]);
    numbersArray.splice(add, 2, newNumber);
    operatorsArray.splice(add, 1);
    add = operatorsArray.indexOf("+");
  }

  // subtract loop
  let subtract = operatorsArray.indexOf("-");
  while (subtract != -1) {
    let newNumber = numbersArray[subtract] - numbersArray[subtract + 1];
    numbersArray.splice(subtract, 2, newNumber);
    operatorsArray.splice(subtract, 1);
    subtract = operatorsArray.indexOf("-");
  }

  return numbersArray;
}
