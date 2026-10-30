# Bộ kiểm thử nghiệm thu cuối học phần

| ID | Thao tác | Kết quả mong đợi |
|---|---|---|
| T01 | Mở Home ở desktop | Tiêu đề Sắc Việt và 6 Card văn hóa/địa danh hiển thị |
| T02 | Mở Home ở 375px | Nội dung chính không tràn ngang |
| T03 | Tìm `Hội An` | Chỉ Card phù hợp còn hiển thị |
| T04 | Xóa từ khóa | Hiển thị lại cả 6 Card mẫu |
| T05 | Lọc `Di sản` | Chỉ hai bài thuộc danh mục Di sản |
| T06 | Nhập từ khóa không tồn tại | Hiện thông báo không tìm thấy |
| T07 | Kết hợp từ khóa + danh mục | Kết quả thỏa đồng thời cả hai |
| T08 | Nhấn Đọc bài | Mở đúng nội dung bài |
| T09 | Mở `post.html?id=unknown` | Hiện thông báo không tìm thấy |
| T10 | Nhập tiêu đề/nội dung Editor | Preview cập nhật |
| T11 | Lưu, tải lại, Khôi phục | Hai trường khôi phục dữ liệu đã lưu |
| T12 | Xóa nháp, thử Khôi phục | Thông báo chưa có bản nháp |
| T13 | Nhập `<img src=x onerror=alert(1)>` vào Editor | Chỉ hiển thị văn bản, không thực thi HTML |
| T14 | Mở Dashboard | Tên 6 bài văn hóa/địa danh trùng dữ liệu Home |
| T15 | Tại URL GitHub Pages sau khi bật | Các liên kết và asset hoạt động |
| T16 | B11 cập nhật một file/commit | Phiên bản công khai phản ánh cập nhật khi triển khai hoàn tất |

| T17 | Chọn Thiên nhiên, tìm `Tràng An` | Chỉ bài Tràng An phù hợp |
| T18 | Chọn Văn hóa, tìm `Huế` | Không có kết quả và có thông báo rõ |
| T19 | Mở bài Hội An/Huế/Hạ Long/Tràng An | Liên kết nguồn UNESCO mở được bằng URL tương ứng |

**Biểu mẫu ghi bằng chứng:** ID – Ngày – Pass/Fail – Ảnh/chú thích – Nguyên nhân – Sửa lỗi – Kết quả kiểm thử lại. Không đánh dấu T15/T16 PASS khi chưa thực tế xuất bản.
