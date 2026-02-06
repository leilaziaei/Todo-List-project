// darkMode.js
export function setDarkMode(isDark, titleHeader, toggleBtn) {
  document.body.classList.toggle("dark-mode", isDark);
  toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  titleHeader.style.color = isDark ? "#fff" : "#000";
  localStorage.setItem("ThemMode", isDark ? "dark" : "light");
}

export function loadDarkMode(titleHeader, toggleBtn) {
  const mode = localStorage.getItem("ThemMode");
  const isDark = mode === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  titleHeader.style.color = isDark ? "#fff" : "#000";
}
