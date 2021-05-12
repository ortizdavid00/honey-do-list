// Selecting Elements
let addTodoButton = document.getElementById("addTodo");
let todoContainer = document.getElementById("todoContainer");
let inputField = document.getElementById("inputField");

// Adding tasks to list
addTodoButton.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  todoContainer.appendChild(paragraph);
  inputField.value = "";

  // Single click to complete task
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  // Double click to remove task
  paragraph.addEventListener("dblclick", function () {
    todoContainer.removeChild(paragraph);
  });
});

// Submit task with 'Enter'
document
  .getElementById("inputField")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("addTodo").click();
    }
  });
