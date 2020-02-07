const array = ["james", "brian", "Cenny"];

const final = array.map((x, index) => {
  return x.charAt(0).toUpperCase() + x.slice(1);
});

console.log(final);
