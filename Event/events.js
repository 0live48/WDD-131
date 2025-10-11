// Array to store all tasks
let tasks = [];

// Template to create each task's HTML
function taskTemplate(task) {
  return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span>
      </div>
    </li>`;
}

// Render all tasks to the DOM
function renderTasks(tasks) {
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";
  const html = tasks.map(taskTemplate).join("");
  listElement.innerHTML = html;
}

// Add a new task
function newTask() {
  const taskInput = document.querySelector("#todo");
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task before adding!");
    return;
  }

  tasks.push({ detail: task, completed: false });
  taskInput.value = "";
  renderTasks(tasks);
}

// Remove a task
function removeTask(taskElement) {
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector("p").innerText
  );
  taskElement.remove();
}

// Mark a task as complete/incomplete
function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector("p").innerText
  );
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

// Manage which icon was clicked (delete or complete)
function manageTasks(e) {
  const parent = e.target.closest("li");

  if (!parent) return; // click outside a task

  if (e.target.dataset.action === "delete") {
    removeTask(parent);
  } else if (e.target.dataset.action === "complete") {
    completeTask(parent);
  }
}

// Add event listeners
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

// Render any existing tasks (starts empty)
renderTasks(tasks);
