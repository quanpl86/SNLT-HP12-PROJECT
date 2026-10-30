# Acceptance Master — 26 ca nghiệm thu
**Nguồn:** sheet `10_Acceptance` trong workbook HP12 v3.0.

> **Phát hiện sai khác nguồn:** Tiêu đề sheet ghi “25 CA” nhưng dữ liệu có **AT01–AT26**, tổng cộng **26 ca**. Bản GitHub giữ cả AT26, không xóa trường hợp kiểm thử cuối B11.

| Test ID | Bài | LO | Phạm vi | Thao tác kiểm thử | Kết quả mong đợi | Bắt buộc |
|---|---|---|---|---|---|---|
| AT01 | [B01](../lessons/B01/TEST_CASES.md) | LO01 | Figma → HTML/CSS | So sánh Header/Home với frame Figma | Nêu được hai cặp thành phần tương ứng | Bắt buộc |
| AT02 | [B01](../lessons/B01/TEST_CASES.md) | LO01 | JS kết nối | Chỉnh chuỗi trong mã JS mẫu | Home hiển thị giá trị mới, Console không lỗi | Bắt buộc |
| AT03 | [B02](../lessons/B02/TEST_CASES.md) | LO02 | DOM Query | Chọn tiêu đề và mô tả bằng selector | Hai phần tử được chọn đúng | Bắt buộc |
| AT04 | [B02](../lessons/B02/TEST_CASES.md) | LO02 | DOM Update | Thay văn bản/lớp của hai phần tử | Hai thay đổi UI quan sát được | Bắt buộc |
| AT05 | [B03](../lessons/B03/TEST_CASES.md) | LO03 | Click event | Nhấn nút Xem thêm, sau đó Thu gọn | Hai trạng thái chính xác; không tải lại trang | Bắt buộc |
| AT06 | [B04](../lessons/B04/TEST_CASES.md) | LO01–LO03 | Gỡ lỗi DOM/Event | Sửa một selector sai và một lỗi handler | Hai lỗi được kiểm thử lại | Bắt buộc |
| AT07 | [B05](../lessons/B05/TEST_CASES.md) | LO04 | LocalStorage save | Nhập văn bản và nhấn Lưu nháp | Dữ liệu được lưu theo key | Bắt buộc |
| AT08 | [B05](../lessons/B05/TEST_CASES.md) | LO04 | LocalStorage restore | Tải lại cùng origin và khôi phục nháp | Trở về đúng nội dung đã lưu | Bắt buộc |
| AT09 | [B05](../lessons/B05/TEST_CASES.md) | LO04 | Lưu nháp ≠ xuất bản | Mở website từ phiên trình duyệt độc lập không cùng storage | Không coi nháp của máy trước là nội dung được đăng công khai | Bắt buộc |
| AT10 | [B06](../lessons/B06/TEST_CASES.md) | LO05 | Search matching | Gõ từ khóa khớp tiêu đề | Các Card phù hợp hiện, còn lại ẩn | Bắt buộc |
| AT11 | [B06](../lessons/B06/TEST_CASES.md) | LO05 | Case-insensitive | Tìm cùng từ khóa viết hoa/thường | Kết quả tương đương | Bắt buộc |
| AT12 | [B06](../lessons/B06/TEST_CASES.md) | LO05 | Clear query | Xóa ô tìm kiếm | Hiện lại tất cả Blog Cards | Bắt buộc |
| AT13 | [B06](../lessons/B06/TEST_CASES.md) | LO05 | Empty results | Tìm từ khóa không tồn tại | Hiện thông báo không có kết quả | Bắt buộc |
| AT14 | [B07](../lessons/B07/TEST_CASES.md) | LO06 | Category select | Chọn 2 danh mục khác nhau | Mỗi lần hiển thị đúng nhóm bài viết | Bắt buộc |
| AT15 | [B07](../lessons/B07/TEST_CASES.md) | LO06 | Category All | Chọn Tất cả sau khi lọc | Tất cả Card xuất hiện lại | Bắt buộc |
| AT16 | [B08](../lessons/B08/TEST_CASES.md) | LO07 | Repository check | Mở repo, tìm index.html css js assets | Các file đầy đủ; không lộ thông tin cá nhân | Bắt buộc |
| AT17 | [B08](../lessons/B08/TEST_CASES.md) | LO07 | Commit evidence | Kiểm tra bản ghi thay đổi | Có ít nhất một commit mô tả được | Bắt buộc |
| AT18 | [B09](../lessons/B09/TEST_CASES.md) | LO04–LO07 | Pre-release QA | Chạy lại lưu nháp, Search, Filter, điều hướng | Không lỗi nghiêm trọng chưa xử lý | Bắt buộc |
| AT19 | [B10](../lessons/B10/TEST_CASES.md) | LO08 | Tích hợp chức năng | Chạy click, lưu nháp, Search hoặc Filter | Ít nhất 3 chức năng hoạt động trên sản phẩm tích hợp | Bắt buộc |
| AT20 | [B10](../lessons/B10/TEST_CASES.md) | LO09 | Pages URL | Mở URL Pages bằng phiên duyệt khác | Trang index.html và tài nguyên tải đúng | Bắt buộc có điều kiện |
| AT21 | [B10](../lessons/B10/TEST_CASES.md) | LO09 | Release smoke test | Kiểm thử 3 chức năng trên URL Pages | Không lỗi Console nghiêm trọng | Bắt buộc có điều kiện |
| AT22 | [B11](../lessons/B11/TEST_CASES.md) | LO08–LO09 | Live regression | Sửa 1 lỗi thực tế, cập nhật repo, kiểm tra URL | Lỗi được sửa, chức năng khác không hỏng | Bắt buộc nếu có lỗi |
| AT23 | [B11](../lessons/B11/TEST_CASES.md) | LO08–LO09 | No-defect alternate | Nếu không có lỗi, chạy lại 10 ca hồi quy | Minh chứng toàn bộ ca quan trọng đạt | Bắt buộc nếu không có lỗi |
| AT24 | [B12](../lessons/B12/TEST_CASES.md) | LO10 | Four-HP defense | Giải thích 1 UI/UX, 2 cơ chế JS và 1 debug cycle | Giải thích chính xác có bằng chứng | Bắt buộc |
| AT25 | [B12](../lessons/B12/TEST_CASES.md) | LO10 | Safety & ownership | Rà soát dữ liệu cá nhân, hình ảnh, quyền truy cập | Không công khai dữ liệu nhạy cảm; ghi nguồn | Bắt buộc |
| AT26 | [B11](../lessons/B11/TEST_CASES.md) | LO08–LO09 | Final functional gate | Chạy click, lưu nháp, Search, Category Filter trên URL sau cập nhật | Đủ 4 chức năng; nếu không public, ghi trạng thái và kiểm thử localhost | Bắt buộc |

## Chính sách đánh giá
- B10 cần bản phát hành GitHub Pages thực tế khi điều kiện cho phép; nếu không, minh chứng được đánh giá theo khả năng triển khai/offline và trạng thái phải ghi trung thực.
- **AT22 và AT23 là hai nhánh đánh giá thay thế** tùy thực tế có tìm thấy lỗi hay không; không bắt buộc học sinh phải tạo lỗi.
- AT26 xác nhận đủ bốn chức năng cốt lõi sau vòng cải tiến B11.
- Giáo viên phải ghi người thử, thao tác, Pass/Fail, ảnh/URL, nguyên nhân, bản sửa và kết quả kiểm thử lại. Không tự đánh dấu Pass vì kiểm tra tĩnh mã nguồn thành công.
