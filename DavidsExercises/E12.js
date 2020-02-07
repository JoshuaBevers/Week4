const arr1 = [1, 2, 3];
const arr2 = [2, 30, 1];

let merged = arr1.join(arr2);

let toArray = merged.split(",");
let sorted = toArray.sort();
let final = [];

for (let i = 0; i < sorted.length; i++) {
  if (sorted[i] != sorted[i + 1]) {
    final.push(sorted[i]);
  }
}
console.log(final);
