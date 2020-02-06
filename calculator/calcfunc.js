var view = "";

function add1() {
  view += "1";
  document.querySelectorAll("#view")[0].value = view;
}

function add2() {
  view += "2";
  document.querySelectorAll("#view")[0].value = view;
}
function add3() {
  view += "3";
  document.querySelectorAll("#view")[0].value = view;
}
function add4() {
  view += "4";
  document.querySelectorAll("#view")[0].value = view;
}
function add5() {
  view += "5";
  document.querySelectorAll("#view")[0].value = view;
}
function add6() {
  view += "6";
  document.querySelectorAll("#view")[0].value = view;
}
function add7() {
  view += "7";
  document.querySelectorAll("#view")[0].value = view;
}
function add8() {
  view += "8";
  document.querySelectorAll("#view")[0].value = view;
}
function add9() {
  view += "9";
  document.querySelectorAll("#view")[0].value = view;
}

function addPlus() {
  view += "+";
  document.querySelectorAll("#view")[0].value = view;
}
function addMinus() {
  view += "-";
  document.querySelectorAll("#view")[0].value = view;
}

function addDivide() {
  view += "/";
  document.querySelectorAll("#view")[0].value = view;
}
function addMultiply() {
  view += "*";
  document.querySelectorAll("#view")[0].value = view;
}

function AC() {
  view = "";
  document.querySelectorAll("#view")[0].value = view;
}

function equals() {
  //aware of issues useing eval. This won't be going on anything with security involved. Just a calc demo for class.
  result = eval(view);
  document.querySelectorAll("#view")[0].value = result;
}
