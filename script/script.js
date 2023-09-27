let phnBook = [];

let nameRef = document.getElementById("name");
let numRef = document.getElementById("phone");
let tableRef = document.getElementById("tbody");
let btnRef = document.getElementById("btn");

const getRN = (max = 1000) => {
  return Math.floor(Math.random() * max);
};

editstate = 0;

let render = () => {
  let tbody = "";
  for (let entry of phnBook) {
    tbody += `
        <tr>
        <th scope="row">${entry.id}</th>
            <td>${entry.name}</td>
            <td>${entry.number}</td>
            <td><button class="btn btn-danger" onclick="del(${entry.id})">Delete</button></td>
            <td><button class="btn border" onclick="edit(${entry.id})">Edit</button></td>
        </tr>`;
  }
  tableRef.innerHTML = tbody;
};

let enter = () => {
  if (editstate === 0) {
    console.log("work");
    phnBook.push({ id: getRN(), name: nameRef.value, number: numRef.value });
    render();
    nameRef.value = "";
    numRef.value = "";
  } else {
    phnBook = phnBook.map((a) => {
        console.log(a);
        if (a.id == editstate)
        {
            console.log(a.id)
            return { ...a, name: nameRef.value, number: numRef.value };
        }
        else{
            return a;
        }
     });
    render();
    editstate = 0;
    btnRef.innerText = "Enter";
    nameRef.value = "";
    numRef.value = "";
  }
};
let del = (id) => {
  phnBook = phnBook.filter((entry) => entry.id !== id);
  render();
};
let edit = (id) => {
  editstate = id;
  let edititem = phnBook.find((phn) => phn.id === id);
  nameRef.value = edititem.name;
  numRef.value = edititem.number;
  btnRef.innerText = "Edit";
  console.log(editstate);
};
