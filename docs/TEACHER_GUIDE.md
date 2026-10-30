# Hướng dẫn giáo viên triển khai dự án HP12 — Sắc Việt

## Chủ đề xuyên suốt
Website giới thiệu **văn hóa và địa danh Việt Nam**; trang chính có 6 bài viết mẫu thuộc ba chủ đề Di sản, Thiên nhiên và Văn hóa. Từ B01 đến B12, học sinh dùng các ví dụ về Huế, Hội An, Tràng An, Hạ Long – Cát Bà, múa rối nước và áo dài để học JavaScript trong bối cảnh có ý nghĩa.

## Cấu trúc học phần
12 bài × 110 phút. Quiz thực hiện ở nhà. Học sinh 13–15 tuổi, đã hoàn thành HP09 (Figma), HP10 (HTML/CSS) và HP11 (JavaScript nhập môn theo LMS cũ).

## Cách sử dụng repository
- Dự án học phần đầy đủ ở thư mục gốc; các mini project ở `lessons/B01–B12/`.
- Mỗi mini project chạy riêng với `index.html`, `src/` và `assets/`; giáo viên có thể giao học sinh làm lại phần trọng tâm bằng hướng dẫn `BUILD_STEPS.md` và kiểm tra bằng `TEST_CASES.md`.
- Thực hành nên bắt đầu từ dự đoán hành vi, không phát cho học sinh toàn bộ lời giải rồi yêu cầu sao chép.

## Lộ trình mức độ hỗ trợ
- B01–B03: cung cấp HTML và CSS, học sinh sửa các dòng JS trọng tâm.
- B04: học sinh gỡ lỗi theo nhật ký và nêu nguyên nhân.
- B05–B07: có code mẫu hoàn chỉnh và thử thách bỏ trống một số dòng; giảm hỗ trợ từng bước, ưu tiên tính năng đạt yêu cầu tối thiểu.
- B08–B09: thực hành quy trình repo và kiểm thử, không cần công nghệ mới.
- B10: học sinh phải dùng URL GitHub Pages thật; checklist không thay thế việc xuất bản.
- B11: kiểm thử sau phát hành và cải tiến, không thêm API mới.
- B12: đánh giá trình diễn, giải thích, bằng chứng và phản tư.

## Phân hóa
- Cần hỗ trợ: đưa sẵn markup và CSS, đặt sẵn ID/selector; giao 1 chức năng cốt lõi và 2 test cases.
- Đạt yêu cầu: tự hoàn thiện logic chính, test các trường hợp hợp lệ và không hợp lệ.
- Nâng cao: tinh chỉnh UI, thêm dữ liệu, kiểm thử bổ sung nhưng không ép các nhóm khác học thêm công nghệ.

## Phương án dự phòng
- Không có Internet: B01–B07/B09 chạy ở localhost; B08/B10 sử dụng mô phỏng quy trình và yêu cầu minh chứng phát hành chưa thực hiện, không đánh dấu thành công giả.
- Không đủ máy: làm theo cặp lập trình–kiểm thử, luân phiên sau một nhiệm vụ.
- Không có tài khoản GitHub đủ điều kiện: giáo viên sử dụng quy trình nhóm được phân quyền; tuyệt đối không chia sẻ mật khẩu.
- Mất bản HP10: sử dụng mẫu website ở root repo và ghi rõ là sản phẩm mẫu thay thế.

## Đánh giá
Xem `ASSESSMENT_RUBRIC.md` và `TEST_CASES.md`. Đánh giá cả chức năng, giải thích lựa chọn, kiểm thử, quá trình sửa lỗi và an toàn dữ liệu.


## Chất lượng nội dung văn hóa
Hướng dẫn học sinh mô tả tôn trọng và chính xác, đối chiếu với nguồn đáng tin cậy, không sao chép ảnh hoặc bài viết trái phép. Phân biệt di sản UNESCO với những nét văn hóa nói chung. Xem `CULTURE_SOURCES.md`.
