# HP12 — Personal Interactive Web Blog

**Học phần 12 · 12 bài × 110 phút · Quiz tại nhà.** Sản phẩm cuối của hành trình HP09 (Figma) → HP10 (HTML/CSS) → HP11 (JavaScript nhập môn) → HP12 (tích hợp, lưu nháp, tìm kiếm, lọc, kiểm thử và phát hành).

## Chạy ngay
- Mở `index.html` với VS Code Live Server hoặc chạy `python -m http.server 8000` ở thư mục gốc rồi truy cập `http://localhost:8000/`.
- Không cần npm, tài khoản hoặc Internet để chạy cục bộ.
- Trang chính: `index.html`, `about.html`, `post.html`, `editor.html`, `dashboard.html`.
- Thực hành: [12 dự án bài học](lessons/README.md). Mỗi thư mục có HTML/CSS/JS, SVG, giới thiệu, kiến thức, hướng dẫn xây dựng, hướng dẫn chạy và kiểm thử.

## Các chức năng của website cuối khóa
- Trang chủ hiển thị các Blog Card từ dữ liệu giả lập; tìm kiếm theo tiêu đề, lọc danh mục và thông báo không có kết quả.
- Trang bài viết hiển thị nội dung theo liên kết ID (**mã hỗ trợ tích hợp do giáo viên cung cấp**, không phải LO bắt buộc của HP12).
- Trình soạn thảo xem trước, lưu/khôi phục/xóa bản nháp bằng `localStorage` trên cùng trình duyệt.
- Dashboard sử dụng lại danh sách bài viết mẫu (không có máy chủ, đăng nhập, CRUD công khai).
- Responsive cơ bản; ảnh SVG tự tạo, không tải từ nguồn bên ngoài.

## Hướng dẫn tài liệu
- [Tổng quan sản phẩm](docs/PROJECT_OVERVIEW.md)
- [Kiến thức và ma trận kế thừa](docs/KNOWLEDGE_MAP.md)
- [Từng bước xây dựng dự án](docs/BUILD_GUIDE.md)
- [Chạy và tương tác](docs/RUN_AND_TEST.md)
- [GitHub Pages: triển khai ở B10](docs/RELEASE_GUIDE.md)
- [Ca kiểm thử](docs/TEST_CASES.md)
- [Đối chiếu thiết kế HP09–HP10](docs/DESIGN_HANDOFF.md)

> **Lưu ý:** GitHub Pages chỉ xuất bản file tĩnh. `localStorage` của người học KHÔNG đồng bộ bản nháp với khách truy cập khác. Nội dung mẫu không có thông tin cá nhân. **Chưa tự động bật GitHub Pages**; thực hiện theo hướng dẫn B10.

