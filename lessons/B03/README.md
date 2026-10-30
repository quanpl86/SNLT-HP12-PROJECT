# HP12 – B03: Xử lý sự kiện

> **Curriculum Master HP12 v3.0:** **LO03** · **K05, K06** · Chuyển giao / tích hợp. Xem [LO Master](../../curriculum/03_LO_MASTER.md), [Knowledge Master](../../curriculum/04_KNOWLEDGE_MASTER.md), [Scope & Sequence](../../curriculum/05_SCOPE_AND_SEQUENCE.md) và [Product Master](../../curriculum/06_LESSON_PRODUCT_MASTER.md). Tên và mục tiêu bài học thuộc hệ thống mã **LO01–LO10, K01–K15**; ví dụ sản phẩm sử dụng Blog **Sắc Việt**.


**Bối cảnh “Sắc Việt”:** Chức năng bật/ẩn gợi ý khám phá cảnh quan Vịnh Hạ Long – Cát Bà bằng sự kiện click.

**Nội dung học tập:** Các khái niệm JavaScript/DOM/Event và tiêu chí đánh giá vẫn theo khung HP12; dữ liệu ví dụ được chuyển sang văn hóa, địa danh Việt Nam.

**Tên sản phẩm:** Quick Blog Interaction.

## Bối cảnh và giá trị
Bài này giúp học sinh chuyển từ ví dụ JavaScript đã học ở HP11 sang một thành phần thực tế trên website từ HP10. **Yêu cầu quan sát được:** Đăng ký một sự kiện click để bật/tắt phần nội dung trên website và giải thích handler.

## Đầu vào kế thừa
HP11: Event Handling từ sản phẩm Màu nền yêu thích; HP12 B02: DOM.

## Thành phần đã có trong thư mục
- `index.html`: giao diện và vùng tương tác mẫu.
- `src/style.css`: quy tắc trình bày, responsive cơ bản.
- `src/app.js`: toàn bộ logic JavaScript của bài.
- `assets/illustration.svg`: minh họa SVG tự tạo.
- `KNOWLEDGE.md`, `BUILD_STEPS.md`, `RUN_AND_INTERACT.md`, `TEST_CASES.md`, `SOURCE_MAP.md`: học liệu và kiểm thử.

## Sản phẩm đạt yêu cầu
1. Nhấn lần đầu: nội dung hiển thị và nút đổi nhãn.
2. Nhấn lần hai: nội dung ẩn, nhãn nút trở lại.
3. Trạng thái aria-expanded và thông báo khớp nội dung hiển thị.

## Phạm vi
Chỉ giải quyết chức năng của B03; không yêu cầu học sinh xây dựng lại đầy đủ website Blog hoặc dùng framework, backend hay database.

**Mở rộng không bắt buộc:** Thay gợi ý văn bản bằng câu hỏi về HP09–HP11.

