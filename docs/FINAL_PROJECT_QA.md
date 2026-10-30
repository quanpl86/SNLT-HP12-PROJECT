
# Bộ kiểm thử hoàn thiện sản phẩm Sắc Việt

## 1. Chạy thử trên localhost
Tại **thư mục gốc repository**: chạy \`python -m http.server 8000\` và truy cập \`http://localhost:8000/\`.

| ID | Trang | Hành động | Kết quả mong đợi |
|---|---|---|---|
| FP01 | Home | Mở ở desktop ~1280px | Hero, 6 card, filter và footer hiển thị |
| FP02 | Home | Mở ở mobile ~375px | Không tràn ngang; menu có thể mở/đóng |
| FP03 | Home | Nhập \`HOI AN\` | Một card Hội An |
| FP04 | Home | Nhập \`áo dài\` / \`ao dai\` | Một card áo dài |
| FP05 | Home | Chọn Di sản | Hai bài Hội An và Huế |
| FP06 | Home | Chọn Thiên nhiên | Hai bài Hạ Long – Cát Bà và Tràng An |
| FP07 | Home | Chọn Văn hóa | Hai bài múa rối nước và áo dài |
| FP08 | Home | Chọn Văn hóa + tìm Hội An | Hiện thông báo không có kết quả |
| FP09 | Home | Nhấn Hiện tất cả bài viết | Xóa từ khóa và lọc; đủ 6 card |
| FP10 | Home | Tìm xong nhấn nút × | Xóa từ khóa; giữ danh mục hiện tại |
| FP11 | Detail | Chọn một card | Đúng bài, hình, nội dung và nguồn phù hợp |
| FP12 | Detail | Mở \`post.html?id=invalid\` | Thông báo không tìm thấy, không lỗi JS |
| FP13 | Editor | Gõ title/content | Preview cập nhật và đếm ký tự |
| FP14 | Editor | Lưu → F5 → Khôi phục | Khôi phục đúng hai trường ở cùng origin |
| FP15 | Editor | Xóa nháp → Khôi phục | Thông báo chưa có nháp |
| FP16 | Editor | Nhập HTML/script ở textarea | Chỉ hiện text; không chạy mã |
| FP17 | Dashboard | Mở thư viện | Đủ 6 bài; số đếm danh mục 2/2/2 |
| FP18 | About | Xem nội dung HP09→HP12 | Nội dung không sai về chương trình |
| FP19 | Mọi trang | Dùng Tab / Enter / Escape | Tiêu điểm rõ; menu mobile hỗ trợ phím |
| FP20 | Github Pages | Mở URL được GitHub xác nhận | CSS/JS/images/links hoạt động tại đường dẫn dự án |

**Không đánh dấu FP20 PASS nếu chưa có URL GitHub Pages thực tế.** Lưu ảnh, mã commit và lỗi đã sửa.

## 2. Tự động
\`\`\`bash
node tools/validate.mjs
node --test tests/*.test.cjs
\`\`\`
Lệnh đầu kiểm tra cú pháp JS/cấu trúc/link, lệnh sau kiểm tra tìm kiếm/danh mục/dữ liệu & cấu trúc trang. **Kiểm tra tự động không thay thế kiểm thử trên trình duyệt**.
