// storage.js
// مدیریت آرایه tasks و LocalStorage

let tasksData = []; // آرایه داخلی، reference ثابت

export function getTasks() {
  return tasksData;
}

export function loadTask() {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    tasksData = JSON.parse(stored);
  }
}

export function saveTask() {
  localStorage.setItem("tasks", JSON.stringify(tasksData));
}

export function addTask(task) {
  tasksData.push(task);
  saveTask();
}

export function updateTask(index, updatedTask) {
  tasksData[index] = updatedTask;
  saveTask();
}

export function deleteTask(index) {
  tasksData.splice(index, 1);
  saveTask();
}
