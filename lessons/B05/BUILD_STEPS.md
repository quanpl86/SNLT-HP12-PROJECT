# Hướng dẫn từng bước – Local Draft Saver

## Chuẩn bị
Máy tính, VS Code hoặc trình soạn thảo tương đương, trình duyệt Chrome/Edge/Firefox; website HP10 có thể dùng để liên hệ nhưng không bắt buộc. Dành 110 phút cho buổi học; Quiz ở nhà.

## Thực hiện
### Bước 1
Dùng Live Server/localhost để chạy dự án trước khi thử lưu dữ liệu.

**Tự kiểm tra:** Ghi lại em dự đoán điều gì, thấy gì sau khi chạy và có lỗi nào cần sửa.

### Bước 2
Kiểm tra HTML: textarea và ba nút Save/Restore/Clear.

**Tự kiểm tra:** Ghi lại em dự đoán điều gì, thấy gì sau khi chạy và có lỗi nào cần sửa.

### Bước 3
Truy xuất ô nhập và đọc giá trị bằng thuộc tính value.

**Tự kiểm tra:** Ghi lại em dự đoán điều gì, thấy gì sau khi chạy và có lỗi nào cần sửa.

### Bước 4
Xác định một khóa KEY cố định, không chứa thông tin cá nhân.

**Tự kiểm tra:** Ghi lại em dự đoán điều gì, thấy gì sau khi chạy và có lỗi nào cần sửa.

### Bước 5
Trong click handler của nút Lưu, gọi localStorage.setItem(KEY,draft.value).

**Tự kiểm tra:** Ghi lại em dự đoán điều gì, thấy gì sau khi chạy và có lỗi nào cần sửa.

### Bước 6
Xóa nội dung trên màn hình, nhấn Khôi phục bằng getItem và quan sát.

**Tự kiểm tra:** Ghi lại em dự đoán điều gì, thấy gì sau khi chạy và có lỗi nào cần sửa.

### Bước 7
Tải lại trang, tiếp tục nhấn Khôi phục để chứng minh dữ liệu tồn tại giữa hai lần tải.

**Tự kiểm tra:** Ghi lại em dự đoán điều gì, thấy gì sau khi chạy và có lỗi nào cần sửa.

### Bước 8
Xử lý tình huống chưa lưu gì, thông báo trạng thái và thử nút Xóa.

**Tự kiểm tra:** Ghi lại em dự đoán điều gì, thấy gì sau khi chạy và có lỗi nào cần sửa.

### Bước 9
Giải thích vì sao lưu bản nháp trên trình duyệt không phải đăng bài công khai.

**Tự kiểm tra:** Ghi lại em dự đoán điều gì, thấy gì sau khi chạy và có lỗi nào cần sửa.

## Kết thúc
- Mở `TEST_CASES.md`, hoàn thành từng ca kiểm thử.
- So sánh sản phẩm với mục tiêu: Lưu và khôi phục một bản nháp văn bản bằng localStorage trên cùng trình duyệt.
- Giải thích một đoạn mã mà em đã tự điều chỉnh (không đọc thuộc lòng).

**Vận dụng mở rộng (không bắt buộc):** Đề xuất giao diện nút Lưu nổi bật theo thiết kế Figma của em.

## Phân bổ thời lượng tham khảo
- Engage: 8 phút
- Explore: 45 phút
- Explain: 10 phút
- Elaborate: 37 phút
- Evaluate: 10 phút
- **Tổng:** 110 phút. Quiz hoàn thành ở nhà.

