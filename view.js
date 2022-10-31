let firstName = JSON.parse(localStorage.getItem("firstnames"));
let lastName = JSON.parse(localStorage.getItem("lastnames"));
let email = JSON.parse(localStorage.getItem("email"));

let row = 1;

for (let i = 0; i < firstName.length; ++i) {

    if(firstName[i]=="")
    continue;

  let table2 = document.getElementById("table2");
  let newRow = table2.insertRow(row);

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);

  cell1.innerHTML = firstName[i];
  cell2.innerHTML = lastName[i];
  cell3.innerHTML = email[i];
  if (firstName[i] != null && lastName[i] != null && email[i] != null) {
    let html = "";
    html += `
                <button id="delete_${i}" onclick="deleteDetails(${i})">Delete</button>
                <button id="edit_${i}" onclick="editDetails(${i})">Edit</button>
            `;
    cell4.innerHTML = html;
  }
  row++;
}

function deleteDetails(item) {
  console.log("Delete " + item)
  firstName.splice(item, 1);
  lastName.splice(item, 1);
  email.splice(item, 1);
  localStorage.setItem("firstnames", JSON.stringify(firstName));
    localStorage.setItem("lastnames", JSON.stringify(lastName));
    localStorage.setItem("email", JSON.stringify(email));
  location.reload();


  
}

function editDetails(item)
{
    console.log("Edit " + item);
    var para = new URLSearchParams();
para.append("index", item);
location.href = "./edit.html?" + para.toString();
    }
