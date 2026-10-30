# Hướng dẫn chạy, sử dụng và tương tác

## Chạy cục bộ (khuyến nghị)
1. Tải repository về máy bằng `git clone https://github.com/quanpl86/SNLT-HP12-PROJECT.git` hoặc Download ZIP.
2. Mở terminal tại thư mục gốc.
3. Chạy `python -m http.server 8000` (nếu có Python) hoặc dùng VS Code Live Server.
4. Mở `http://localhost:8000/`. Nếu cổng bị sử dụng, đổi sang 8001 và truy cập URL tương ứng.
5. Không dùng `file://` để kiểm thử LocalStorage vì cách xử lý có thể khác nhau theo trình duyệt.

## Kịch bản tương tác
- **Home:** nhập `Hội An` vào ô tìm kiếm → còn bài Hội An; xóa từ khóa → đủ 6 bài; chọn `Di sản` → có Hội An, Huế; chọn `Thiên nhiên` → có Hạ Long–Cát Bà, Tràng An; nhập `khôngtồntại` → thông báo rỗng.
- **Bài viết:** nhấn Đọc bài → xem đúng địa danh, minh họa và nội dung; ở các bài có nguồn UNESCO, thử mở liên kết nguồn; sửa query ID thành ID không có trong tập dữ liệu → thông báo không tìm thấy.
- **Editor:** thử viết “Em muốn giới thiệu Hội An” → quan sát Preview; nhấn Lưu → tải lại trang → Khôi phục → dữ liệu cũ xuất hiện; nhấn Xóa nháp → dữ liệu bị xóa.
- **Dashboard:** danh sách cùng dữ liệu mẫu với Home; nhấn Xem bài.
- **About:** đối chiếu chuỗi HP09→HP12.

## Kiểm thử kỹ thuật
- Sử dụng DevTools Console để kiểm tra lỗi JS.
- Thử chiều rộng trình duyệt 375px và desktop 1280px; không để nội dung chính tràn màn hình.
- Kiểm tra quyền riêng tư: không nhập dữ liệu nhận diện cá nhân vào repository hoặc bài viết mẫu.
- Nếu lưu không thành công ở chế độ riêng tư hoặc trình duyệt khóa storage, trình bày cơ chế và đánh giá phần thông báo lỗi.

## Đầu ra minh chứng
Ảnh thao tác trước/sau, danh sách các bước kiểm thử, lỗi phát hiện, cách sửa và bản trình diễn ngắn.

