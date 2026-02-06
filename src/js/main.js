import { loadTask, getTasks, addTask, updateTask, deleteTask } from "./storage.js";
import { createTaskObject } from "./tasks.js";
import { updateTaskList } from "./render.js";
import { getFilteredTasks } from "./filter.js";
import { loadDarkMode, setDarkMode } from "./darkMode.js";
import { exportPDF, exportExcel } from "./export.js";
import { clearForm } from "./form.js";

const addTaskBtn = document.querySelector("#addTaskBtn");
const taskCategories = document.querySelector("#taskCategories");
const searchTasks = document.querySelector("#searchTasks");
const filterPriority = document.querySelector("#filterPriority");
const sortByDate = document.querySelector("#sortByDate");
const darkModeToggle = document.querySelector("#darkModeToggle");
const titleHeader = document.querySelector("#titleHeder");
const exportTasksBtnPdf = document.querySelector("#exportTasksBtnPdf");
const exportTasksBtnecxel = document.querySelector(".exportTasksBtnecxel");

window.addEventListener("DOMContentLoaded", () => {
  loadDarkMode(titleHeader, darkModeToggle);
  loadTask();
  updateTaskList(taskCategories, getFilteredTasks());
});

addTaskBtn.addEventListener("click", () => {
  const title = document.querySelector("#taskTitle").value.trim();
  const dueDate = document.querySelector("#taskDueDate").value;
  const priority = document.querySelector("#taskPriority").value;
  const notes = document.querySelector("#taskNotes").value.trim();

  if (!title) return;
  const task = createTaskObject(title, dueDate, priority, notes);
  addTask(task);
  updateTaskList(taskCategories, getFilteredTasks());

  clearForm(); // ← اینجا اضافه می‌کنیم

});

taskCategories.addEventListener("click", (e) => {
  const taskDiv = e.target.closest(".task");
  if (!taskDiv) return;

  const index = Number(taskDiv.dataset.index);
  if (e.target.classList.contains("complete-btn")) {
    const task = getTasks()[index];
    task.completed = !task.completed;
    updateTask(index, task);
  } else if (e.target.classList.contains("delete-btn")) {
    deleteTask(index);
  } else return;

  updateTaskList(taskCategories, getFilteredTasks());
});

searchTasks.addEventListener("input", () =>
  updateTaskList(taskCategories, getFilteredTasks(searchTasks.value, filterPriority.value, sortByDate.value))
);
filterPriority.addEventListener("change", () =>
  updateTaskList(taskCategories, getFilteredTasks(searchTasks.value, filterPriority.value, sortByDate.value))
);
sortByDate.addEventListener("change", () =>
  updateTaskList(taskCategories, getFilteredTasks(searchTasks.value, filterPriority.value, sortByDate.value))
);

darkModeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");
  setDarkMode(isDark, titleHeader, darkModeToggle);
});

exportTasksBtnPdf.addEventListener("click", exportPDF);
exportTasksBtnecxel.addEventListener("click", exportExcel);
