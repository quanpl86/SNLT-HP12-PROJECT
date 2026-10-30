"use strict";
const tasks=Array.from(document.querySelectorAll(".task"));
const status=document.querySelector("#status");
function update(){const passed=tasks.filter(function(task){return task.checked;}).length;status.textContent=passed+" / "+tasks.length+" điều kiện hoàn thành. Việc đánh dấu không thay thế bằng chứng URL thực tế.";}
tasks.forEach(function(task){task.addEventListener("change",update);});update();
