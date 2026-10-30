# Cách dùng repository làm bộ học liệu giảng dạy

**1. Chọn dự án:** Vào `lessons/B01` ... `B12` theo buổi hoặc website tổng kết ở root. Mini project là ví dụ chạy độc lập; dự án root là mô hình đầu ra hoàn chỉnh.

**2. Cách giao nhiệm vụ học sinh:**
- Đọc `README.md` của bài để hiểu sản phẩm.
- Đọc `KNOWLEDGE.md` để liên hệ kiến thức đã học; xác định phần NEW/TRANSFER/INTEGRATE theo giáo án.
- Mở `BUILD_STEPS.md`: mỗi bước yêu cầu học sinh dự đoán và tự sửa mã.
- Khởi động theo `RUN_AND_INTERACT.md`; giáo viên có thể giấu đáp án hoàn chỉnh `src/app.js` khi ra thử thách.
- Kiểm thử theo `TEST_CASES.md` và nộp minh chứng thực tế.

**3. Tránh quá tải:** Cung cấp HTML/CSS hoàn chỉnh; chỉ yêu cầu học sinh tự viết phần JS cốt lõi. Không biến B08/B10 thành buổi giảng đồng thời toàn bộ Git, GitHub Actions và Pages.

**4. GitHub Pages:** Root site chứa index.html và assets. Giảng viên/chủ repo cần tự bật Pages hoặc cấp quyền phù hợp. Các link dạng đường dẫn tương đối để hoạt động ở repository project-site.

**5. Hạn chế:** Không tự động kiểm tra khả năng truy cập bên ngoài, không lưu bài công khai từ LocalStorage. Không yêu cầu đăng tải dữ liệu cá nhân của học sinh.

