"use strict";
const reveal = document.querySelector("#reveal");
const note = document.querySelector("#note");
const status = document.querySelector("#status");
reveal.addEventListener("click", function () {
  note.textContent = "Em đã sửa đúng logic DOM và Event!";
  status.textContent = "Nhiệm vụ ôn tập hoàn thành.";
});
