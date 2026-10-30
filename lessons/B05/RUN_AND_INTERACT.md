# Chạy và tương tác với Local Draft Saver

1. Mở terminal tại thư mục gốc của repository `SNLT-HP12-PROJECT`.
2. Chạy `python -m http.server 8000` hoặc dùng VS Code Live Server.
3. Mở `http://localhost:8000/lessons/B05/` (nếu đổi cổng, điều chỉnh URL).
4. Quan sát giao diện trước khi thao tác và đọc mô tả yêu cầu trên trang.
5. Thực hiện các thao tác dưới đây, ghi kết quả thực tế:
   1. Nhập văn bản, Lưu, tải lại, Khôi phục thành công trên cùng origin.
   2. Xóa nháp rồi Khôi phục trả về thông báo chưa có dữ liệu.
   3. Ứng dụng đưa ra thông báo khi trình duyệt không cho sử dụng storage.
6. Nếu chức năng không chạy, mở DevTools (F12) → Console, kiểm tra URL file, selector và lỗi JS.
7. Thay một giá trị trong `src/app.js`; tải lại; giải thích sự khác nhau trước/sau.

**Lưu ý:** B05 dùng localStorage, nên chạy qua localhost hoặc HTTPS; hành vi storage khi mở bằng `file://` có thể khác theo trình duyệt. Các bài khác cũng nên chạy nhất quán qua server cục bộ.

**Tài liệu kèm:** [Hướng dẫn xây dựng](BUILD_STEPS.md) · [Kiểm thử](TEST_CASES.md).

