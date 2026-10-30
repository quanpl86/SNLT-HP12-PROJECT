# Chạy và tương tác với Quick Blog Interaction

1. Mở terminal tại thư mục gốc của repository `SNLT-HP12-PROJECT`.
2. Chạy `python -m http.server 8000` hoặc dùng VS Code Live Server.
3. Mở `http://localhost:8000/lessons/B03/` (nếu đổi cổng, điều chỉnh URL).
4. Quan sát giao diện trước khi thao tác và đọc mô tả yêu cầu trên trang.
5. Thực hiện các thao tác dưới đây, ghi kết quả thực tế:
   1. Nhấn lần đầu: nội dung hiển thị và nút đổi nhãn.
   2. Nhấn lần hai: nội dung ẩn, nhãn nút trở lại.
   3. Trạng thái aria-expanded và thông báo khớp nội dung hiển thị.
6. Nếu chức năng không chạy, mở DevTools (F12) → Console, kiểm tra URL file, selector và lỗi JS.
7. Thay một giá trị trong `src/app.js`; tải lại; giải thích sự khác nhau trước/sau.

**Lưu ý:** B05 dùng localStorage, nên chạy qua localhost hoặc HTTPS; hành vi storage khi mở bằng `file://` có thể khác theo trình duyệt. Các bài khác cũng nên chạy nhất quán qua server cục bộ.

**Tài liệu kèm:** [Hướng dẫn xây dựng](BUILD_STEPS.md) · [Kiểm thử](TEST_CASES.md).

