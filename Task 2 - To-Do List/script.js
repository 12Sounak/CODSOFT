const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must Write something");
  } else {
    let li = document.createElement("li");
    li.setAttribute("id", new Date().valueOf());
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      let id = e.target.id;
      console.log(id);
      let newText = prompt("Edit task:");
      console.log(newText);
      if (newText !== null && newText !== "") {
        console.log("inside if");
        document.getElementById(id).innerHTML = newText;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        document.getElementById(id).appendChild(span);
        saveData();
      }
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function edit() {
  let newText = prompt("Edit task:", li.textContent.trim());
  if (newText !== null && newText !== "") {
    li.textContent = newText;
    saveData();
  }
}
