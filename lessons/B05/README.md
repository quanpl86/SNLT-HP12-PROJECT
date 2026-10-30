# HP12 – B05: Quản lý lưu trữ Local

> **Curriculum Master HP12 v3.0:** **LO04** · **K07, K08** · Hình thành kiến thức. Xem [LO Master](../../curriculum/03_LO_MASTER.md), [Knowledge Master](../../curriculum/04_KNOWLEDGE_MASTER.md), [Scope & Sequence](../../curriculum/05_SCOPE_AND_SEQUENCE.md) và [Product Master](../../curriculum/06_LESSON_PRODUCT_MASTER.md). Tên và mục tiêu bài học thuộc hệ thống mã **LO01–LO10, K01–K15**; ví dụ sản phẩm sử dụng Blog **Sắc Việt**.


**Bối cảnh “Sắc Việt”:** Viết, lưu và khôi phục bản nháp giới thiệu một địa danh hoặc nét văn hóa Việt Nam.

**Nội dung học tập:** Các khái niệm JavaScript/DOM/Event và tiêu chí đánh giá vẫn theo khung HP12; dữ liệu ví dụ được chuyển sang văn hóa, địa danh Việt Nam.

**Tên sản phẩm:** Local Draft Saver.

## Bối cảnh và giá trị
Bài này giúp học sinh chuyển từ ví dụ JavaScript đã học ở HP11 sang một thành phần thực tế trên website từ HP10. **Yêu cầu quan sát được:** Lưu và khôi phục một bản nháp văn bản bằng localStorage trên cùng trình duyệt.

## Đầu vào kế thừa
HP11: biến và click Event; HP12 B03: addEventListener.

## Thành phần đã có trong thư mục
- `index.html`: giao diện và vùng tương tác mẫu.
- `src/style.css`: quy tắc trình bày, responsive cơ bản.
- `src/app.js`: toàn bộ logic JavaScript của bài.
- `assets/illustration.svg`: minh họa SVG tự tạo.
- `KNOWLEDGE.md`, `BUILD_STEPS.md`, `RUN_AND_INTERACT.md`, `TEST_CASES.md`, `SOURCE_MAP.md`: học liệu và kiểm thử.

## Sản phẩm đạt yêu cầu
1. Nhập văn bản, Lưu, tải lại, Khôi phục thành công trên cùng origin.
2. Xóa nháp rồi Khôi phục trả về thông báo chưa có dữ liệu.
3. Ứng dụng đưa ra thông báo khi trình duyệt không cho sử dụng storage.

## Phạm vi
Chỉ giải quyết chức năng của B05; không yêu cầu học sinh xây dựng lại đầy đủ website Blog hoặc dùng framework, backend hay database.

**Mở rộng không bắt buộc:** Đề xuất giao diện nút Lưu nổi bật theo thiết kế Figma của em.

