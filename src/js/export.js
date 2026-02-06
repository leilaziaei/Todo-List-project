// export.js
import { getTasks } from "./storage.js";


export function exportPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let y = 10;
  getTasks().forEach(t => {
    doc.text(`Title: ${t.title} - Due: ${t.dueDate} - Priority: ${t.priority}`, 10, y);
    y += 10;
  });
  doc.save("tasks.pdf");
}

export async function exportExcel() {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Tasks");
  sheet.addRow(["Title", "Due Date", "Priority", "Notes", "Completed"]).font = { bold: true };
  getTasks().forEach(t => {
    sheet.addRow([t.title, t.dueDate, t.priority, t.notes || "Nothing", t.completed ? "Yes" : "No"]);
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "tasks.xlsx";
  a.click();
  URL.revokeObjectURL(url);
}
