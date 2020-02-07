const arr = [
  "Sometimes",
  "I",
  "give",
  "myself",
  "the",
  "creeps",
  "Sometimes",
  "my",
  "mind",
  "plays",
  "tricks",
  "on",
  "me",
  "It",
  "all",
  "keeps",
  "adding",
  "up",
  "I",
  "think",
  "I'm",
  "cracking",
  "up",
  "Am",
  "I",
  "just",
  "paranoid?"
];

let step1 = arr.map(x => {
  if (x.length < 5) {
    return x;
  } else return null;
});
const final = step1.filter(Boolean);
console.log(final);
