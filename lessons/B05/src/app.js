"use strict";
const KEY = "hp12.lesson05.draft";
const draft = document.querySelector("#draft");
const status = document.querySelector("#status");
function message(text) { status.textContent = text; }
document.querySelector("#save").addEventListener("click", function () {
  try { localStorage.setItem(KEY, draft.value); message("Đã lưu bản nháp trên trình duyệt này."); }
  catch (error) { message("Không thể lưu trong trình duyệt hiện tại."); }
});
document.querySelector("#restore").addEventListener("click", function () {
  try { const value = localStorage.getItem(KEY); if (value === null) { message("Chưa có bản nháp đã lưu."); return; } draft.value = value; message("Đã khôi phục nội dung."); }
  catch (error) { message("Không thể khôi phục bản nháp."); }
});
document.querySelector("#clear").addEventListener("click", function () {
  try { localStorage.removeItem(KEY); draft.value = ""; message("Đã xóa bản nháp."); }
  catch (error) { message("Không thể xóa bản nháp."); }
});
