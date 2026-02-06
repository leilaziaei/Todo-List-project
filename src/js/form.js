// form.js
export function clearForm() {
  document.querySelector("#taskTitle").value = "";
  document.querySelector("#taskDueDate").value = "";
  document.querySelector("#taskPriority").value = "low";
  document.querySelector("#taskNotes").value = "";
}
