const operatorsArray = ["+", "*", "+"];
let numbersArray = ["1", "2", "3", "6"];

numbersArray = numbersArray.map(Number);

console.log(operatorsArray.indexOf("*"));

let multiply = operatorsArray.indexOf("*");
let total = 0;

while (multiply != -1) {
  let newNumber = numbersArray[multiply] * numbersArray[multiply + 1];
  numbersArray.splice(multiply, 2, newNumber);
  operatorsArray.splice(multiply, 1);
  multiply = operatorsArray.indexOf("*");
}

let division = operatorsArray.indexOf("/");

while (division != -1) {
  console.log("I'm going to add.");
  division = -1;
}

let addition = operatorsArray.indexOf("+");

while (addition != -1) {
  let newNumber = numbersArray[addition] * numbersArray[addition + 1];
  console.log(numbersArray);
  numbersArray.splice(addition, 2), newNumber;
  operatorsArray.splice(addition, 1);
  addition = operatorsArray.indexOf("+");
}
console.log(numbersArray);
