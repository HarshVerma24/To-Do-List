document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("add-btn");
  const input = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  // Function to add a new task
  function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") {
      return;
    }
    
    // Create a new list item for the task
    const li = document.createElement("li");
    li.className = "todo-item";

    // Create the span element that holds the task text
    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = taskText;
    // Toggle "completed" state when task text is clicked
    span.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    // Create the delete button to remove the task
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "&times;";
    deleteBtn.addEventListener("click", function () {
      todoList.removeChild(li);
    });

    // Append the text and delete button to the list item
    li.appendChild(span);
    li.appendChild(deleteBtn);
    // Append the new task to the list
    todoList.appendChild(li);

    // Reset input field and refocus for new entry
    input.value = "";
    input.focus();
  }

  // Add task when clicking the button
  addBtn.addEventListener("click", addTask);
  // Enable adding a task by pressing the Enter key
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
