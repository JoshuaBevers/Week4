const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

const arr2 = arr1.sort();
console.log(arr2);
let counter = 0;
let most = 0;
let highest;

for (let i = 0; i < arr2.length; i++) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === arr2[i + 1]) {
      counter += 1;
      if (counter >= most) {
        highest = arr2[i];
      }
    }
  }
}
console.log(highest);
