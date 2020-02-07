function e1() {
  let user = "Please input something.";
  let userArray = [];
  userArray.push(user);

  if (Array.isArray(userArray)) {
    return true;
  } else return false;
}
e1();
