var button = document.getElementById("btn");

var row = 1;
// button.addEventListener("onclick", view());

function view() {
  var currfirstName = document.getElementById("firstName");
  var currlastName = document.getElementById("lastName");
  var curremail = document.getElementById("email");

  if (localStorage.getItem("firstnames") == null) {
    let temp = [];
    localStorage.setItem("firstnames", JSON.stringify(temp));
  }
  if (localStorage.getItem("lastnames") == null) {
    let temp = [];
    localStorage.setItem("lastnames", JSON.stringify(temp));
  }
  if (localStorage.getItem("email") == null) {
    let temp = [];
    localStorage.setItem("email", JSON.stringify(temp));
  }

  var firstName = JSON.parse(localStorage.getItem("firstnames"));
  var lastName = JSON.parse(localStorage.getItem("lastnames"));
  var email = JSON.parse(localStorage.getItem("email"));

  // console.log(firstName);
  // console.log(lastName);
  // console.log(email);

  firstName.push(currfirstName.value);
  lastName.push(currlastName.value);
  email.push(curremail.value);

  localStorage.setItem("firstnames", JSON.stringify(firstName));
  localStorage.setItem("lastnames", JSON.stringify(lastName));
  localStorage.setItem("email", JSON.stringify(email));

  currfirstName.value = "";
  currlastName.value = "";
  curremail.value = "";

  //    var table2 = document.getElementById('table2');
  //    var newRow = table2.insertRow(row);

  //    var cell1 = newRow.insertCell(0);
  //    var cell2 = newRow.insertCell(1);
  //    var cell3 = newRow.insertCell(2);

  //    cell1.innerHTML = firstName;
  //    cell2.innerHTML = lastName;
  //    cell3.innerHTML = email;
}
