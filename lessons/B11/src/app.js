"use strict";
const tasks=Array.from(document.querySelectorAll(".task"));
const status=document.querySelector("#status");
function update(){const passed=tasks.filter(function(task){return task.checked;}).length;status.textContent=passed===tasks.length?"Đã đánh dấu đủ các bước kiểm thử. Cần nộp kèm ảnh và URL thật.":"Đã kiểm tra "+passed+"/"+tasks.length+" nhóm chức năng.";}
tasks.forEach(function(task){task.addEventListener("change",update);});update();
