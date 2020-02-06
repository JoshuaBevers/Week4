const generateListButton = document.getElementById("ListButton");
const myListArea = document.querySelector("#myList");
const nodeList = document.querySelectorAll(".inputBox");

const randArray = [{ value: "foo" }, { value: "Bar" }, { value: "Baz" }];

function generateMyList(list) {
  const listElement = document.createElement("ul");
  list.forEach(list => {
    const listItem = document.createElement("li");
    listItem.innerHTML = list.value;
    listElement.appendChild(listItem);
  });
  return listElement;
}

function clicked() {
  const theList = generateMyList(nodeList);
  myListArea.appendChild(theList);
  const randomList = generateMyList(randArray);

  myListArea.appendChild(randomList);
}

// innerHTMLList.forEach((list, index) => {
//   console.log(list);
//   list.innerHTML = tempArray[index];

// function generateMyList(element) {
//   const newText = document.createElement("p");
//   newText.innerHTML = element;
//   myListArea.appendChild(newText);
// }

// generateListButton.addEventListener("click", function(e) {
//   e.preventDefault();
//   console.log("CLICKED!");
// });

// function clicked() {
//   const nodeList = document.querySelectorAll(".inputBox");
//   console.log(nodeList);

//   nodeList.forEach(list => {
//     console.log(list.value);
//     generateMyList(list.value);
//   });
// }
