"use strict";
const reveal = document.querySelector("#reveal");
const note = document.querySelector("#note");
const status = document.querySelector("#status");
reveal.addEventListener("click", function () {
  note.textContent = "Em đã sửa đúng tương tác giới thiệu Phố cổ Hội An!";
  status.textContent = "Nhiệm vụ ôn tập hoàn thành.";
});
