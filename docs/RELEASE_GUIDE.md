# Hướng dẫn xuất bản GitHub Pages — thực hiện ở B10

## Điều kiện đầu vào
- Đã hoàn thành B08: có repository và commit mã nguồn.
- Đã hoàn thành B09: các tính năng tối thiểu chạy cục bộ và đã ghi kết quả kiểm thử.
- Có kết nối Internet và quyền sử dụng tài khoản GitHub theo quy định lớp học.

## Các bước với repository hiện tại
1. Kiểm tra repository chứa `index.html` ở **thư mục gốc** và các thư mục `styles/`, `scripts/`, `assets/`.
2. Vào repository trên GitHub → **Settings** → **Pages**.
3. Trong **Build and deployment**, nếu có tùy chọn, chọn **Deploy from a branch**.
4. Chọn Branch **main** và thư mục **/(root)** → **Save**.
5. Sau khi GitHub thông báo xuất bản thành công, mở **URL được hiển thị trong mục Pages**. Không tự đoán URL hoặc khẳng định đã xuất bản khi chưa kiểm tra.
6. Kiểm tra Home, About, một link bài viết, Editor, tìm kiếm và lọc trên URL thực tế.
7. Ghi đường dẫn, thời điểm kiểm thử, kết quả và lỗi vào hồ sơ dự án.

## Cập nhật B11
- Sửa file trong repository → commit → đợi GitHub Pages triển khai lại theo trạng thái hiển thị trong GitHub → tải lại trang (hard refresh nếu cần) → kiểm thử lại.
- Tránh dùng đường dẫn bắt đầu bằng dấu `/` vì website dự án GitHub Pages có thể ở dưới đường dẫn chứa tên repository; mã mẫu ưu tiên đường dẫn tương đối.

## Hạn chế và an toàn
- GitHub Pages là hosting tĩnh; không cung cấp server hay cơ sở dữ liệu.
- Dữ liệu `localStorage` chỉ nằm trong trình duyệt của người truy cập; lưu nháp không làm bài viết hiện trên website công khai.
- Không đưa mật khẩu, token, dữ liệu cá nhân hoặc ảnh riêng tư vào repository công khai.
- Nếu lớp không thể sử dụng GitHub Pages, sử dụng website chạy localhost + hồ sơ kiểm thử và trình bày rõ chưa triển khai công khai.

