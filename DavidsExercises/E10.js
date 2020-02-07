array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];

for (let i = 0; i < array2.length; i++) {
  if (array1[i] && array2[i] != undefined) {
    let result = array1[i] + array2[i];
    console.log(result);
  }
  if (array1[i] === undefined) {
    let result = array2[i];
    console.log(result);
  }
  if (array2[i] === undefined) {
    let result = array1[i];
    console.log(result);
  }
}
