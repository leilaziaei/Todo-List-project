// filter.js
import { getTasks } from "./storage.js";

export function getFilteredTasks(search = "", priority = "", sort = "") {
  let result = [...getTasks()];

  if (search) {
    result = result.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));
  }

  if (priority) {
    result = result.filter(t => t.priority === priority);
  }

  if (sort === "asc") result.sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate));
  else if (sort === "desc") result.sort((a,b) => new Date(b.dueDate) - new Date(a.dueDate));

  return result;
}
