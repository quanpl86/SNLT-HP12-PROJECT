# B04 — Bài tập gỡ lỗi có chủ đích

**Không dùng đoạn sau làm phiên bản sản phẩm nộp.** Sao chép `src/app.js` ra bản dự phòng, thử thay bằng mã lỗi để thực hành tìm và sửa.

```javascript
const reveal = document.querySelector("#reveall"); // sai selector
reveal.addEventListener("clik", function () { // sai tên sự kiện
  document.querySelector("#note").textContent = "Đã sửa lỗi!";
});
```

## Nhiệm vụ
1. Trước khi chạy, dự đoán hai lỗi.
2. Mở Console, phát hiện `null` và `addEventListener` không hoạt động.
3. Sửa `#reveall` thành `#reveal` và `clik` thành `click`.
4. Kiểm thử lại bằng thao tác click và ghi nhận minh chứng.

Đối chiếu với `src/app.js` hoàn chỉnh khi đã tự thử sửa.

