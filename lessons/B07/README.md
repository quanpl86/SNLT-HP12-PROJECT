# HP12 – B07: Lọc bài viết theo danh mục

**Sản phẩm:** Category Filter v1

## Giới thiệu và bối cảnh
Bài học phân loại các chủ đề Di sản, Thiên nhiên và Văn hóa trong hành trình kết thúc bốn học phần thiết kế và lập trình Web Blog Sắc Việt. **Yêu cầu quan sát:** Tái sử dụng tìm kiếm và điều kiện để lọc Blog Card theo danh mục, xử lý trường hợp không có kết quả.

**Kiến thức kế thừa:** HP12 B06: tìm kiếm và duyệt Card; HP11: if, vòng lặp; HP09: bố cục Blog Card.

## Cấu trúc source/asset
- `index.html`: giao diện bài học có thể chạy độc lập.
- `src/style.css`: bố cục, màu sắc và các trạng thái.
- `src/app.js`: mã JavaScript hoàn chỉnh.
- `assets/illustration.svg`: asset SVG tự tạo, không phụ thuộc Internet.
- `KNOWLEDGE.md`, `BUILD_STEPS.md`, `RUN_AND_INTERACT.md`, `TEST_CASES.md`, `SOURCE_MAP.md`: tài liệu học tập và nghiệm thu.

## Tiêu chí hoàn thành
1. Chọn Di sản: hiển thị hai bài Hội An và Cố đô Huế.
2. Chọn Thiên nhiên: chỉ bài Vịnh Hạ Long – Cát Bà hiển thị.
3. Tìm Hội An trong danh mục Văn hóa: thông báo không có kết quả.
4. Chọn Tất cả và xóa từ khóa: hiện đủ bốn bài.

**Không thuộc phạm vi bắt buộc:** backend, database, framework hay công nghệ mới vượt mục tiêu.

**Mở rộng:** Thêm Card mới về múa rối nước thuộc danh mục Văn hóa và kiểm thử lại.

