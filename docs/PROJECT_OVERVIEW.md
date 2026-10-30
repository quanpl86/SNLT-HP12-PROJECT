# Giới thiệu sản phẩm học phần 12

## Bối cảnh
Học sinh 13–15 tuổi đã trải qua thiết kế Figma (HP09), HTML/CSS (HP10) và lập trình JavaScript nhập môn (HP11). HP12 là nơi chuyển kiến thức từ các bài tập riêng lẻ thành một Blog cá nhân có chức năng thiết thực.

## Tên và câu chuyện sản phẩm
**Sắc Việt – Blog văn hóa và địa danh Việt Nam.** Người dùng đọc bài giới thiệu về các di sản, danh thắng và nét văn hóa Việt Nam, tìm bài theo tên địa danh, lọc theo chủ đề và lưu nháp một bài viết giới thiệu trên chính trình duyệt của mình.

## Nội dung văn hóa
- **Di sản:** Hội An, Huế.
- **Thiên nhiên:** Vịnh Hạ Long – Quần đảo Cát Bà, Tràng An.
- **Văn hóa:** Múa rối nước, áo dài Việt Nam.
- **Nguyên tắc biên tập:** dùng nguồn đáng tin cậy; hình minh họa tự tạo, không sử dụng thông tin cá nhân; không gắn nhãn UNESCO cho những nội dung chưa có căn cứ.

## Yêu cầu chức năng
| Mã | Chức năng | Trang | Tình huống nghiệm thu |
|---|---|---|---|
| F01 | Đọc bài mẫu | Home/Detail | Chọn một thẻ mở đúng bài |
| F02 | Tìm kiếm tiêu đề | Home | Nhập từ khóa và thu hẹp danh sách |
| F03 | Lọc danh mục | Home | Lựa chọn danh mục và kết quả thay đổi |
| F04 | Trường hợp không có kết quả | Home | Hiện thông báo, không gây lỗi |
| F05 | Nhập/xem trước bản nháp | Editor | Nhập tiêu đề/nội dung xem trước tức thì |
| F06 | Lưu/khôi phục/xóa bản nháp | Editor | Lưu và làm mới trang rồi khôi phục trên cùng trình duyệt |
| F07 | Danh sách bài mẫu | Dashboard | Danh sách trùng tập dữ liệu Home |
| F08 | Điều hướng/hiển thị | Toàn site | Không hỏng link, responsive cơ bản |

## Phạm vi
- **Bắt buộc học sinh tự làm:** tích hợp một tương tác DOM/Event; lưu bản nháp giới thiệu địa danh; tìm kiếm theo tên địa danh/bài viết; lọc Di sản, Thiên nhiên, Văn hóa; kiểm thử và quy trình GitHub.
- **Khung tham khảo hỗ trợ giáo viên:** render Blog Cards, trang Detail theo ID và Dashboard dùng chung dữ liệu. Học sinh được đọc, sửa, kiểm thử nhưng không bị ép phải tự viết lại hệ thống này.
- **Không thuộc phạm vi:** server, xác thực, database, đăng bài công khai, đồng bộ giữa thiết bị, sắp xếp nâng cao.

## Sản phẩm bàn giao
Website chạy cục bộ và URL GitHub Pages (khi đủ điều kiện), mã nguồn, ảnh chụp minh chứng, danh sách kiểm thử, bản đối chiếu Figma–website và phản tư về lỗi đã sửa.


## Tài liệu đối chiếu di sản
Xem [CULTURE_SOURCES.md](CULTURE_SOURCES.md) về nguồn UNESCO và quy tắc trích dẫn. Các bài mang tính giới thiệu ngắn, không được sao chép nội dung dài từ nguồn ngoài.
