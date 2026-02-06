// tasks.js
import { addTask } from "./storage.js";

export function createTaskObject(title, dueDate, priority, notes) {
  return {
    id: Date.now(),
    title,
    dueDate,
    priority,
    notes,
    completed: false,
  };
}

export function addNewTask(task) {
  addTask(task);
}
