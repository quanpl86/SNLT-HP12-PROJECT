"use strict";
const button = document.querySelector("#toggle");
const detail = document.querySelector("#detail");
const status = document.querySelector("#status");
function toggleDetail() {
  detail.hidden = !detail.hidden;
  const visible = !detail.hidden;
  button.textContent = visible ? "Ẩn gợi ý" : "Hiện gợi ý";
  button.setAttribute("aria-expanded", String(visible));
  status.textContent = visible ? "Đang hiển thị gợi ý." : "Nội dung đang được ẩn.";
}
button.addEventListener("click", toggleDetail);
