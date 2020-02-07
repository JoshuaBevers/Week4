const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

arr2 = arr1.sort();
final = [];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] != arr2[i + 1]) {
    final.push(arr2[i]);
  }
}
console.log(final);
