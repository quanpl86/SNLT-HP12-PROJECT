# Danh mục 12 dự án bài học HP12 — Sắc Việt

Mỗi thư mục **B01–B12** là một mini project độc lập, chứa: `index.html`, mã nguồn `src/`, ảnh `assets/`, và 6 tài liệu Markdown (giới thiệu, kiến thức, xây dựng từng bước, chạy/tương tác, kiểm thử, sơ đồ source).

| Bài | Chủ đề | Sản phẩm chạy trực tiếp |
|---|---|---|
| B01 | Ứng dụng JavaScript lên website | [Home JS Connected](B01/) |
| B02 | Tương tác với DOM | [Blog Content Highlight](B02/) |
| B03 | Xử lý sự kiện | [Quick Blog Interaction](B03/) |
| B04 | Ôn tập 1 | [DOM & Event Repair Pack](B04/) |
| B05 | LocalStorage | [Local Draft Saver](B05/) |
| B06 | Tìm kiếm bài viết | [Blog Keyword Search](B06/) |
| B07 | Lọc danh mục | [Category Filter v1](B07/) |
| B08 | GitHub cơ bản | [GitHub Release Starter](B08/) |
| B09 | Ôn tập 2 | [Pre-release QA Pack](B09/) |
| B10 | Hoàn thiện và phát hành | [First Published Blog v1.0](B10/) |
| B11 | Kiểm thử sau phát hành | [Published Blog Improved v1.1](B11/) |
| B12 | Showcase HP09–HP12 | [Four-HP Web Portfolio](B12/) |

## Chạy mọi mini project
Tại thư mục gốc repository: `python -m http.server 8000`, sau đó mở `http://localhost:8000/lessons/B01/` (đổi B01 theo bài). Có thể dùng VS Code Live Server. Không cần npm hoặc thư viện tải từ Internet.

## Nguyên tắc triển khai
- Mini project chạy được độc lập, nhưng **website tốt nghiệp thực tế nằm tại thư mục gốc**.
- B08 và B10 có bảng kiểm tương tác để học; việc commit/publish vẫn phải thực hiện thực sự trên GitHub.
- B04/B09/B11 là vận dụng/kiểm thử; không tăng kiến thức công nghệ lõi.
- 12 bài × 110 phút; Quiz thực hiện tại nhà.


## Bối cảnh xuyên suốt
Tất cả ví dụ và dữ liệu mẫu đều xoay quanh **văn hóa, di sản và địa danh Việt Nam**. B06 tìm bài theo tên Hội An/Huế; B07 phân loại Di sản, Thiên nhiên và Văn hóa; B05 viết bản nháp giới thiệu một nơi chốn hoặc nét văn hóa. Các LOs và cơ chế JavaScript không thay đổi.
