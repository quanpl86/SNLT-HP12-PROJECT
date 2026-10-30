# Hướng dẫn xây dựng sản phẩm cuối HP12 — Sắc Việt

## Chuẩn bị
1. Kế thừa thiết kế Figma và website HTML/CSS từ HP09–HP10. Nếu không có dự án cũ, sử dụng bộ HTML/CSS mẫu trong repository.
2. Mở thư mục repository bằng VS Code. Kiểm tra cấu trúc `index.html`, `styles/`, `scripts/`, `assets/`.
3. Khởi động Live Server hoặc máy chủ cục bộ. Không phát triển trực tiếp trên URL GitHub Pages.

## Chặng 1 — B01–B04: DOM và sự kiện
1. Xác định phần tử trong HTML bằng ID hoặc CSS selector.
2. Liên kết file `scripts/site.js`, kiểm tra bằng Console.
3. Dùng `document.querySelector` để chọn phần tử; dùng `.textContent` để cập nhật mà không thực thi HTML do người dùng nhập.
4. Gắn `addEventListener("click", handler)` cho một nút; thử nhấn nhiều lần.
5. Kiểm tra các lỗi chọn sai ID, chạy JS trước khi DOM tồn tại, không tìm được phần tử.

## Chặng 2 — B05: Bản nháp cục bộ
1. Tạo ô Title/Content, nút Lưu và Khôi phục.
2. Đọc `.value` của input và textarea.
3. Khi nhấn Lưu, dùng `localStorage.setItem(key, value)`. Nếu lưu hai trường, có thể sử dụng mẫu `JSON.stringify` đã cung cấp.
4. Tải lại trang; gọi `localStorage.getItem(key)` khi nhấn Khôi phục.
5. Kiểm tra chưa có dữ liệu, dữ liệu bị xóa và hạn chế truy cập bộ nhớ; thông báo rõ cho người dùng.

## Chặng 3 — B06–B07: Tìm kiếm và lọc
1. Dùng 6 bài viết mẫu về Việt Nam trong `scripts/posts.js` hoặc những Card tĩnh về địa danh do giáo viên cung cấp.
2. Nhận từ khóa khi người dùng nhập; đổi thành chữ thường; so sánh với tiêu đề.
3. Chỉ hiển thị bài phù hợp; thông báo số kết quả hoặc không có kết quả.
4. Thêm lựa chọn **Di sản / Thiên nhiên / Văn hóa**; kết hợp điều kiện tìm theo tiêu đề + danh mục.
5. Kiểm tra từ khóa rỗng, chữ hoa/thường, danh mục không có bài, các tổ hợp điều kiện.

## Chặng 4 — B08–B09: Quản lý nguồn và kiểm thử
1. Tạo repository cá nhân hoặc theo hướng dẫn của giáo viên, không chia sẻ quyền ghi lên repo giảng viên.
2. Ghi thay đổi bằng commit có ý nghĩa; kiểm tra các file được đưa lên đúng.
3. Hoàn thành các tình huống kiểm thử trong `TEST_CASES.md` và sửa lỗi cốt lõi.

## Chặng 5 — B10–B12: Hoàn thiện, xuất bản, đánh giá
1. B10: tích hợp website, kiểm tra liên kết tương đối, kích hoạt GitHub Pages theo `RELEASE_GUIDE.md`, truy cập URL được GitHub cung cấp.
2. B11: thử lại tính năng trên website công khai, sửa lỗi, commit và cập nhật; lưu ảnh trước/sau.
3. B12: trình diễn thiết kế Figma, cấu trúc HTML/CSS, một sự kiện JS, tìm kiếm/lọc, lưu nháp và những giới hạn của sản phẩm.

**Đánh giá:** mỗi lần bổ sung chức năng phải có dự đoán → chạy thử → giải thích → sửa lỗi → kiểm thử lại. Không đánh giá bằng số dòng mã.


## Biên tập nội dung văn hóa
Đối chiếu mô tả di sản với các nguồn trong `CULTURE_SOURCES.md`. Dùng ảnh tự tạo hoặc ảnh có quyền sử dụng rõ ràng; ghi nguồn khi giới thiệu thông tin được tra cứu. Không yêu cầu học sinh nhập địa chỉ cá nhân hoặc hình ảnh riêng tư.
