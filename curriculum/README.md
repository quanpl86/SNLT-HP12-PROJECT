# Curriculum Master — HP12: SẮC VIỆT
**Trạng thái:** R&D LOCK về định hướng/nội dung theo quyết định trong hội thoại, **chưa phải xác nhận cập nhật LMS hay phê duyệt phát hành**.
**Căn cứ:** Workbook `HP12_Khung_Chuong_Trinh_Hoan_Chinh_LMS_v3_0_110phut.xlsx` (17 bảng nghiệp vụ + Dashboard); khung LMS 12 bài là nguồn chính; HP11 giữ nguyên LMS cũ. **Chuyển bối cảnh sản phẩm** từ Blog học công nghệ thành Blog *Sắc Việt — Văn hóa và địa danh Việt Nam*; giữ cấu trúc LO, K-ID và thời lượng.

## Mục lục quản lý chương trình
1. [Curriculum Architecture](01_CURRICULUM_ARCHITECTURE.md)
2. [ULO Master (4 chuẩn đầu ra cấp học phần)](02_ULO_MASTER.md)
3. [LO Master (10 mục tiêu)](03_LO_MASTER.md)
4. [Knowledge Master (15 K-ID)](04_KNOWLEDGE_MASTER.md)
5. [Scope & Sequence (12 bài)](05_SCOPE_AND_SEQUENCE.md)
6. [Lesson Product Master](06_LESSON_PRODUCT_MASTER.md)
7. [Ma trận truy vết LO–K-ID–Bài–Sản phẩm](07_TRACEABILITY_MATRIX.md)
8. [Kế thừa HP09–HP11 và tiêu chuẩn đánh giá](08_HP09_HP12_ALIGNMENT.md)
9. [Quản trị nguồn và thẩm định](09_SOURCE_AND_QA.md)
10. [Acceptance Master — 26 ca nghiệm thu](10_ACCEPTANCE_MASTER.md)
11. [Dữ liệu CSV: ULO, LO, K-ID, Scope & Sequence](data/README.md)

**Vị trí mã nguồn:** [website hoàn chỉnh](../README.md) và [12 bài học](../lessons/README.md).

## Quy tắc quản trị
- `LO01`–`LO10` và `K01`–`K15` là mã nội bộ của Curriculum Master HP12 v3.0, không phải mã chuẩn CSTA/ISTE.
- Bài B04/B09 là **ôn tập**; B11 là **kiểm thử, cải tiến**; B12 **Showcase**: không có kỹ thuật cốt lõi mới.
- **B10** sở hữu cả LO08 và LO09; K14 (NEW: GitHub Pages) và K15 (INTEGRATE: kiểm thử phát hành).
- Các công nghệ hỗ trợ trong mã nguồn website hoàn chỉnh (ví dụ render từ Array, post detail theo ID) không tự động là kiến thức bắt buộc học sinh viết lại.
- Đầu ra bắt buộc: tương tác click/DOM, lưu nháp cục bộ, tìm kiếm, lọc danh mục, repository, kiểm thử, xuất bản khi đủ điều kiện và minh chứng tổng kết bốn học phần.
- Bản mô tả dùng chủ đề Sắc Việt; số bài viết mẫu hiện tại là 6, nhưng LO05 yêu cầu **tối thiểu 3 Blog Card**, không cần sửa LO theo số lượng mẫu.
- Thẩm định bằng sản phẩm/ca kiểm thử, không theo số dòng mã. Các mã chuẩn bên ngoài chỉ được ánh xạ sau khi đối chiếu tài liệu chính thức.
