# Ma trận truy vết — LO → K-ID → Bài → Sản phẩm → Minh chứng
**Nguồn:** sheet `09_TruyVet` và `03_LO_Master` của Curriculum Master HP12 v3.0; các liên kết chỉ đến mã nguồn/học liệu thực tế.

| LO / vai trò | Bài học | Knowledge | Sản phẩm | Hành vi quan sát/đánh giá | Minh chứng |
|---|---|---|---|---|---|
| LO01 | [B01](../lessons/B01/README.md) | K01; K02 | Home JS Connected | Thay một nội dung Home bằng JS, so sánh hai vùng Figma–HTML/CSS | Trước/sau + Console |
| LO02 | [B02](../lessons/B02/README.md) | K03; K04 | Blog Content Highlight | Truy xuất hai phần tử DOM, đổi văn bản hoặc class | Hai phần tử + giải thích |
| LO03 | [B03](../lessons/B03/README.md) | K05; K06 | Quick Blog Interaction | Click để hiện/ẩn phần mô tả địa danh | Hai trạng thái + demo |
| Ôn LO01–LO03 | [B04](../lessons/B04/README.md) | Ôn K01–K06 | DOM & Event Repair Pack | Gỡ 2 lỗi DOM/Event | Issue log + test lại |
| LO04 | [B05](../lessons/B05/README.md) | K07; K08 | Local Draft Saver | Lưu và khôi phục một nháp sau F5 | Video F5 + mã |
| LO05 | [B06](../lessons/B06/README.md) | K09; K10; K11 | Blog Keyword Search | Tìm tiêu đề, không phân biệt hoa/thường, xử lý rỗng | Bốn ca kiểm thử |
| LO06 | [B07](../lessons/B07/README.md) | K12 | Category Filter v1 | Lọc ít nhất hai nhóm Di sản/Thiên nhiên/Văn hóa | Demo/ca chọn Tất cả |
| LO07 | [B08](../lessons/B08/README.md) | K13 | GitHub Release Starter | Repository + commit | URL repo + ảnh commit |
| Ôn LO04–LO07 | [B09](../lessons/B09/README.md) | Ôn K07–K13 | Pre-release QA Pack | Kiểm thử các chức năng trước phát hành | Pass/Fail + issue log |
| LO08; LO09 | [B10](../lessons/B10/README.md) | Tái dùng K01–K13; K14; K15 | First Published Blog v1.0 | MVP tích hợp 3 chức năng và xuất bản GitHub Pages | URL + 3 chức năng |
| Ôn LO08–LO09 | [B11](../lessons/B11/README.md) | Tái dùng K01–K15 | Published Blog Improved v1.1 | Test hồi quy, sửa lỗi và cập nhật | Commit/ảnh trước sau |
| LO10 | [B12](../lessons/B12/README.md) | Tái dùng K01–K15 | Four-HP Web Portfolio | Trình diễn 1 UI decision, 2 JS mechanisms, 1 bugfix cycle | Video/demo + báo cáo |

## Trace tới từng K-ID (owner)
- **LO01** → `K01`, `K02` → [B01](../lessons/B01/KNOWLEDGE.md).
- **LO02** → `K03`, `K04` → [B02](../lessons/B02/KNOWLEDGE.md).
- **LO03** → `K05`, `K06` → [B03](../lessons/B03/KNOWLEDGE.md).
- **LO04** → `K07`, `K08` → [B05](../lessons/B05/KNOWLEDGE.md).
- **LO05** → `K09`, `K10`, `K11` → [B06](../lessons/B06/KNOWLEDGE.md).
- **LO06** → `K12` → [B07](../lessons/B07/KNOWLEDGE.md).
- **LO07** → `K13` → [B08](../lessons/B08/KNOWLEDGE.md).
- **LO09** → `K14`, `K15` → [B10](../lessons/B10/KNOWLEDGE.md).
- **LO08** tích hợp K01–K13 ở B10; **LO10** vận dụng K01–K15 ở B12.
- **B04/B09/B11** củng cố hoặc kiểm thử, không cấp mã K-ID mới.

## Kiểm tra tính nhất quán
1. Tất cả 10 LO có bài sở hữu; B10 có 2 LO riêng, không chuyển GitHub Pages sang B11.
2. Tất cả 15 K-ID có bài sở hữu đúng theo Knowledge Master.
3. Mỗi bài có tên sản phẩm, đường dẫn tới code, các tiêu chí có thể kiểm thử; xem [Product Master](06_LESSON_PRODUCT_MASTER.md).
4. Các ca kiểm thử sản phẩm trong [docs/TEST_CASES.md](../docs/TEST_CASES.md) chỉ là tập kiểm thử website; chúng **không thay thế** hồ sơ đánh giá LO và các ca kiểm thử LMS.
