"use strict";
const tasks = Array.from(document.querySelectorAll(".task"));
const status = document.querySelector("#status");
function updateProgress() {
  const done = tasks.filter(function (task) { return task.checked; }).length;
  status.textContent = "Đã đánh dấu " + done + " / " + tasks.length + " điều kiện.";
}
tasks.forEach(function (task) { task.addEventListener("change", updateProgress); });
updateProgress();
