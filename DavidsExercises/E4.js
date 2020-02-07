const input = 123456789;

let stringified = input.toString();
let final = "";

for (let i = 0; i <= stringified.length - 1; i++) {
  final += stringified.charAt(i) + "-";
}

console.log(final);
