// this bit is not part of digital craft, but a personal challenge that I'm figuring out myself. When I push this, it should be about complete.
// It was a fun little logic puzzle to avoid terrible Big O.

// this is the orginal ordered list we need to resort with no negatives
const lista: Array<any> = [-10, -7, -6, -4, -2, 0, 3, 5, 8, 9];

//this is the temp array that we input to turn the negative numbers into positive ones.
var listb: Array<any> = [];

// Array above zero.
var listc: Array<any> = [];

// Final Array
var listd: Array<any> = [];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] <= 0) {
    listb.push(Math.abs(lista[i]));
  }
  //listb is [6,4,2,0]

  if (lista[i] > 0) {
    listc.push(Math.abs(lista[i]));
  }
}
//brings list c into what we expect to deal with in list b.
listc.reverse();
console.log("List b is: " + listb);
console.log("List c is: " + listc);

while (listb.length || listc.length > 0) {
  let checkb = listb.pop();
  let checkc = listc.pop();

  if (checkb === checkc) {
    listd.push(checkc);
    listd.push(checkb);
  }

  if (checkb < checkc) {
    listd.push(checkb);
    listc.push(checkc);
    continue;
  }
  if (checkb > checkc) {
    listd.push(checkc);
    listb.push(checkb);
    continue;
  }

  if (listb.length === 0) {
    if (checkb === undefined) listd.push(checkc);
  }
  if (listc.length === 0) {
    if (checkc === undefined) listd.push(checkb);
  }
}

console.log("list b");
console.log(listb);
console.log("List c:");
console.log(listc);

console.log("___________________________");
console.log(listd);
