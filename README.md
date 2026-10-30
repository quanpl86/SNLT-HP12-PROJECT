# SẮC VIỆT — Blog văn hóa và địa danh Việt Nam | HP12

**Học phần 12 · 12 bài × 110 phút · Quiz tại nhà.** Sản phẩm cuối của hành trình HP09 (Figma) → HP10 (HTML/CSS) → HP11 (JavaScript nhập môn) → HP12 (tích hợp, lưu nháp, tìm kiếm, lọc, kiểm thử và phát hành).

## Hồ sơ chương trình — Curriculum Master HP12
Bộ hồ sơ nguồn quản lý học phần nằm tại **[curriculum/README.md](curriculum/README.md)**. Từ đây có [4 ULO](curriculum/02_ULO_MASTER.md), [10 LO](curriculum/03_LO_MASTER.md), [15 K-ID](curriculum/04_KNOWLEDGE_MASTER.md), [12 bài và thời lượng](curriculum/05_SCOPE_AND_SEQUENCE.md), [mô tả sản phẩm](curriculum/06_LESSON_PRODUCT_MASTER.md), [ma trận truy vết](curriculum/07_TRACEABILITY_MATRIX.md) và [kế thừa HP09–HP11](curriculum/08_HP09_HP12_ALIGNMENT.md).

**Quy tắc R&D:** B10 xuất bản GitHub Pages (LO08–LO09; K14–K15), B11 kiểm thử/sửa lỗi không có công nghệ mới. HP11 giữ nguyên khung LMS cũ. Tên sản phẩm/câu chuyện được đặt trong chủ đề **Sắc Việt**.

## Chạy ngay
- Mở `index.html` với VS Code Live Server hoặc chạy `python -m http.server 8000` ở thư mục gốc rồi truy cập `http://localhost:8000/`.
- Không cần npm, tài khoản hoặc Internet để chạy cục bộ.
- Trang chính: `index.html`, `about.html`, `post.html`, `editor.html`, `dashboard.html`.
- Thực hành: [12 dự án bài học](lessons/README.md). Mỗi thư mục có HTML/CSS/JS, SVG, giới thiệu, kiến thức, hướng dẫn xây dựng, hướng dẫn chạy và kiểm thử.

## Các chức năng của website cuối khóa
- Trang chủ hiển thị **6 bài viết mẫu** về Hội An, Huế, Hạ Long–Cát Bà, Tràng An, múa rối nước và áo dài. Tìm kiếm theo tiêu đề, lọc **Di sản / Thiên nhiên / Văn hóa** và thông báo không có kết quả.
- Trang bài viết hiển thị nội dung theo ID, kèm nguồn tham khảo UNESCO ở các bài viết di sản (**mã hỗ trợ tích hợp do giáo viên cung cấp**, không phải LO bắt buộc của HP12).
- Trình soạn thảo xem trước, lưu/khôi phục/xóa bản nháp bằng `localStorage` trên cùng trình duyệt.
- Dashboard sử dụng lại danh sách bài viết mẫu (không có máy chủ, đăng nhập, CRUD công khai).
- Responsive cơ bản; minh họa đặc trưng địa danh/trang phục Việt Nam bằng **SVG tự tạo**, không tải ảnh bên ngoài.
- Tất cả ví dụ B01–B12 sử dụng bối cảnh khám phá văn hóa và địa danh Việt Nam; kiến thức lập trình và LOs vẫn theo khung LMS HP12.

## Hướng dẫn tài liệu
- [Tổng quan sản phẩm](docs/PROJECT_OVERVIEW.md)
- [Kiến thức và ma trận kế thừa](docs/KNOWLEDGE_MAP.md)
- [Từng bước xây dựng dự án](docs/BUILD_GUIDE.md)
- [Chạy và tương tác](docs/RUN_AND_TEST.md)
- [GitHub Pages: triển khai ở B10](docs/RELEASE_GUIDE.md)
- [Ca kiểm thử](docs/TEST_CASES.md)
- [Đối chiếu thiết kế HP09–HP10](docs/DESIGN_HANDOFF.md)

> **Lưu ý:** GitHub Pages chỉ xuất bản file tĩnh. `localStorage` của người học KHÔNG đồng bộ bản nháp với khách truy cập khác. Nội dung mẫu không có thông tin cá nhân. **Chưa tự động bật GitHub Pages**; thực hiện theo hướng dẫn B10.


## Nguồn nội dung về di sản
Tham khảo [bảng nguồn và nguyên tắc biên tập](docs/CULTURE_SOURCES.md). Nội dung mẫu phục vụ bài học, không phải tài liệu du lịch chính thức.
