
# Hướng dẫn dự án hoàn chỉnh — SẮC VIỆT (HP12)

## Định hướng thiết kế
Website áp dụng concept visual đã chốt: màu đỏ son, xanh ngọc, vàng ấm; nét văn hóa Việt Nam, giao diện card hiện đại và thiết bị di động. **Đây là mã website chạy được**, không phải ảnh mô phỏng. Hình minh họa bao gồm **7 tranh GPT Image đã tối ưu WebP** (Hero và 6 bài viết) cùng SVG bổ trợ; không trình bày tranh AI như ảnh tư liệu.

## Bản đồ thư mục
| Tệp / thư mục | Vai trò | Kiến thức liên quan |
|---|---|---|
| \`index.html\`, \`styles/main.css\` | Trang Home, hero, điều hướng, layout responsive | HP09 Figma, HP10 HTML/CSS |
| \`scripts/posts.js\` | 6 bài viết mẫu văn hóa/địa danh (dữ liệu giáo viên cung cấp) | Dữ liệu minh họa |
| \`scripts/search.js\` | Hàm so khớp tiêu đề, lọc danh mục; thuần JS | K09/K10/K11/K12; mở rộng tìm không dấu |
| \`scripts/home.js\` | Tạo card mẫu, hiển thị tìm kiếm/lọc và empty state | B06/B07; mẫu render hỗ trợ |
| \`post.html\`, \`scripts/post.js\` | Đọc bài theo ID, liên kết tham khảo, bài liên quan | Mã tích hợp hỗ trợ, không phải LO bắt buộc |
| \`editor.html\`, \`scripts/editor.js\` | Live preview, lưu/khôi phục/xóa một nháp | K07/K08; phần preview hỗ trợ |
| \`dashboard.html\`, \`scripts/dashboard.js\` | Thư viện và số liệu từ 6 bài mẫu | Phần hiển thị hỗ trợ |
| \`about.html\` | Giới thiệu bốn học phần và tinh thần giữ gìn văn hóa | HP09–HP12 |
| `assets/photos/*.webp` | 7 tranh GPT Image tối ưu: Hero và 6 chủ đề văn hóa, địa danh | Nội dung số; truy xuất asset |
| `assets/*.svg` | Biểu tượng và hình phụ trợ do dự án tạo | HTML/CSS asset |
| \`tests/*.test.cjs\` | Kiểm tra dữ liệu, chức năng lọc/tìm và cấu trúc | QA dự án |
| \`curriculum/\` | Master 4 ULO / 10 LO / 15 K-ID / 12 buổi | Quản lý R&D |
| \`lessons/B01–B12/\` | 12 mini project hoạt động riêng | Học liệu từng buổi |

## Các chức năng đã triển khai
1. Home responsive, bộ lọc 4 trạng thái (Tất cả, Di sản, Thiên nhiên, Văn hóa), tìm kiếm tiêu đề không phân biệt hoa/thường. Hàm hỗ trợ cho phép tìm không dấu tiếng Việt, **không phải** yêu cầu LO tối thiểu.
2. Sáu Card có link vào bài đọc riêng. Khi không có bài phù hợp, giao diện thông báo và nút đặt lại bộ lọc.
3. Trang đọc có tiêu đề, mô tả, nội dung, hình minh họa, nguồn tham khảo UNESCO (nếu có) và gợi ý bài cùng danh mục.
4. Editor: gõ tiêu đề/nội dung → xem trước ngay. Lưu bản nháp → tải lại trang → Khôi phục. Có thông báo trạng thái, đếm ký tự, xóa nháp và cảnh báo giới hạn cục bộ.
5. Thư viện bài viết tổng hợp các bài trong cùng bộ dữ liệu Home. Không có đăng nhập/CRUD/database.
6. Menu mobile có aria-expanded và hỗ trợ phím Escape.

## Nguyên tắc bảo vệ dữ liệu
- Hiển thị chuỗi từ dữ liệu và ô nhập bằng \`.textContent\`, không thực thi HTML.
- \`localStorage\` chỉ lưu trong trình duyệt cùng origin; **không** có nút đăng bài công khai.
- Không tự thu thập tên, email, ảnh riêng tư hoặc vị trí của học sinh.
- HTML/CSS/JS thuần: không thư viện ngoài, không CDN, không dữ liệu yêu cầu API key.

## Trạng thái xuất bản
Đã đưa **mã nguồn** lên GitHub; **GitHub Pages phải được bật và kiểm thử riêng** theo [Release Guide](RELEASE_GUIDE.md). Một commit thành công hoặc hình ảnh mockup **không** có nghĩa website đã công khai.
