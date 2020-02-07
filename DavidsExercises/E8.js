const arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];

console.log(arr[0][0]);

for (let i = 0; i < arr.length; i++) {
  for (let y = 0; y < arr[i].length; y++) {
    console.log(arr[i][y]);
  }
}
