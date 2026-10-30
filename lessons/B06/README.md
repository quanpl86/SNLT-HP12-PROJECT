# HP12 – B06: Tìm kiếm bài viết

> **Curriculum Master HP12 v3.0:** **LO05** · **K09, K10, K11** · Hình thành kiến thức. Xem [LO Master](../../curriculum/03_LO_MASTER.md), [Knowledge Master](../../curriculum/04_KNOWLEDGE_MASTER.md), [Scope & Sequence](../../curriculum/05_SCOPE_AND_SEQUENCE.md) và [Product Master](../../curriculum/06_LESSON_PRODUCT_MASTER.md). Tên và mục tiêu bài học thuộc hệ thống mã **LO01–LO10, K01–K15**; ví dụ sản phẩm sử dụng Blog **Sắc Việt**.


**Bối cảnh “Sắc Việt”:** Tìm kiếm trong bốn Card mẫu: Hội An, Huế, Hạ Long – Cát Bà và nghệ thuật múa rối nước.

**Nội dung học tập:** Các khái niệm JavaScript/DOM/Event và tiêu chí đánh giá vẫn theo khung HP12; dữ liệu ví dụ được chuyển sang văn hóa, địa danh Việt Nam.

**Tên sản phẩm:** Blog Keyword Search.

## Bối cảnh và giá trị
Bài học sử dụng dữ liệu về Phố cổ Hội An, Cố đô Huế, Vịnh Hạ Long – Cát Bà và múa rối nước để vận dụng JavaScript đã học ở HP11 trên HTML/CSS từ HP10. **Yêu cầu quan sát được:** Xây dựng tìm kiếm theo tiêu đề cho một danh sách Blog Card đã có và xử lý trường hợp không có kết quả.

## Đầu vào kế thừa
HP11: vòng lặp và if; HP12 B02: DOM; B03: sự kiện.

## Thành phần đã có trong thư mục
- `index.html`: giao diện và vùng tương tác mẫu.
- `src/style.css`: quy tắc trình bày, responsive cơ bản.
- `src/app.js`: toàn bộ logic JavaScript của bài.
- `assets/illustration.svg`: minh họa SVG tự tạo.
- `KNOWLEDGE.md`, `BUILD_STEPS.md`, `RUN_AND_INTERACT.md`, `TEST_CASES.md`, `SOURCE_MAP.md`: học liệu và kiểm thử.

## Sản phẩm đạt yêu cầu
1. Tìm Hội An hiển thị đúng Card Phố cổ Hội An.
2. Tìm chữ thường huế vẫn thấy Card Quần thể di tích Cố đô Huế.
3. Từ khóa không tồn tại hiển thị thông báo rỗng.
4. Xóa từ khóa hiển thị lại cả bốn Card.

## Phạm vi
Chỉ giải quyết chức năng của B06; không yêu cầu học sinh xây dựng lại đầy đủ website Blog hoặc dùng framework, backend hay database.

**Mở rộng không bắt buộc:** Thêm một Card về HP11 và kiểm tra chức năng vẫn hoạt động.

