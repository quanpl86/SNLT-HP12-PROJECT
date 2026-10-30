"use strict";
// Editor lưu 1 bản nháp (title + body) trong localStorage. Không có chức năng đăng bài.
(function () {
  const KEY = "hp12.draft.v1";
  const title = document.querySelector("#draft-title");
  const body = document.querySelector("#draft-body");
  const previewTitle = document.querySelector("#preview-title");
  const previewBody = document.querySelector("#preview-body");
  const titleCount = document.querySelector("#title-count");
  const bodyCount = document.querySelector("#body-count");
  const status = document.querySelector("#draft-status");
  const storageIndicator = document.querySelector("#storage-indicator");
  const saveButton = document.querySelector("#save");
  const restoreButton = document.querySelector("#restore");
  const clearButton = document.querySelector("#clear");

  function showStatus(message, type) {
    status.textContent = message;
    status.classList.toggle("is-success", type === "success");
    status.classList.toggle("is-error", type === "error");
  }
  function updatePreview() {
    previewTitle.textContent = title.value.trim() || "Tiêu đề sẽ xuất hiện ở đây...";
    previewBody.textContent = body.value.trim() || "Hãy bắt đầu viết để thấy nội dung hiển thị tại đây. Dữ liệu được hiển thị dưới dạng văn bản an toàn.";
    titleCount.textContent = title.value.length + " / 100";
    bodyCount.textContent = body.value.length + " / 3000";
  }
  function setStorageIndicator(saved) {
    storageIndicator.textContent = saved ? "✓ Có nháp đã lưu" : "Bản nháp cục bộ";
  }
  function findSavedDraft() {
    try { return localStorage.getItem(KEY); }
    catch (error) { return null; }
  }
  function save() {
    if (!title.value.trim() && !body.value.trim()) {
      showStatus("Hãy nhập tiêu đề hoặc nội dung trước khi lưu bản nháp.", "error");
      return;
    }
    try {
      const draft = JSON.stringify({ title: title.value, body: body.value });
      localStorage.setItem(KEY, draft);
      setStorageIndicator(true);
      showStatus("✓ Đã lưu bản nháp trên trình duyệt hiện tại. Em có thể tải lại trang để thử khôi phục.", "success");
    } catch (error) {
      showStatus("Không thể lưu bản nháp. Hãy kiểm tra quyền lưu trữ của trình duyệt.", "error");
    }
  }
  function restore() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw === null) {
        showStatus("Chưa có bản nháp nào được lưu trên trình duyệt này.", "error");
        setStorageIndicator(false);
        return;
      }
      const data = JSON.parse(raw);
      if (!data || typeof data.title !== "string" || typeof data.body !== "string") {
        throw new Error("Dữ liệu bản nháp không đúng định dạng");
      }
      title.value = data.title.slice(0, 100);
      body.value = data.body.slice(0, 3000);
      updatePreview();
      setStorageIndicator(true);
      showStatus("✓ Đã khôi phục bản nháp được lưu trước đó.", "success");
    } catch (error) {
      showStatus("Không thể khôi phục bản nháp. Dữ liệu có thể bị thay đổi hoặc trình duyệt chặn lưu trữ.", "error");
    }
  }
  function clear() {
    try {
      localStorage.removeItem(KEY);
      title.value = "";
      body.value = "";
      updatePreview();
      setStorageIndicator(false);
      showStatus("Bản nháp đã được xóa trên trình duyệt này.", "success");
    } catch (error) {
      showStatus("Không thể xóa bản nháp trên trình duyệt hiện tại.", "error");
    }
  }

  title.addEventListener("input", updatePreview);
  body.addEventListener("input", updatePreview);
  saveButton.addEventListener("click", save);
  restoreButton.addEventListener("click", restore);
  clearButton.addEventListener("click", clear);
  updatePreview();
  setStorageIndicator(findSavedDraft() !== null);
})();
