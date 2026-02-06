// render.js
import { getTasks, saveTask, updateTask, deleteTask } from "./storage.js";

export function renderTask(task, index, container) {
  const taskDiv = document.createElement("div");
  taskDiv.className = `task ${task.priority}`;
  taskDiv.dataset.index = index;

  if (task.completed) taskDiv.classList.add("completed");

  taskDiv.innerHTML = `
    <p><span class="task-text">${task.title} - Due: ${task.dueDate} - Note: ${task.notes || "Nothing"}</span></p>
    <div>
      <button class="complete-btn">${task.completed ? "Completed" : "Complete"}</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  container.appendChild(taskDiv);
}

export function updateTaskList(container, filteredTasks = null) {
  container.innerHTML = "";
  const tasks = getTasks();
  const list = filteredTasks || tasks;

  list.forEach((task) => {
    const index = tasks.findIndex(t => t.id === task.id);
    renderTask(task, index, container);
  });
}
