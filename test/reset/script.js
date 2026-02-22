const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page refresh

    const taskText = input.value;

    // Create new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    taskList.appendChild(li);

    // Reset input field
    input.value = "";
});