# Kiểm định font tiếng Việt — Sắc Việt (30/10/2026)

## Hiện tượng
Trên các tiêu đề và một số vùng chữ, nhất là dòng **SẮC VIỆT**, dấu tiếng Việt có thể lệch hoặc trông không đồng nhất do `Georgia` / `Times New Roman` bị thay thế bằng các font khác nhau tùy hệ điều hành.

## Phương án đã áp dụng
- **Font thân bài và tiêu đề:** `Noto Sans` → `Segoe UI` → `Roboto` → `Arial` → `DejaVu Sans` → `sans-serif`.
- Không cần tải font từ CDN, không yêu cầu kết nối Internet để hiển thị font.
- Điều chỉnh `line-height`, `letter-spacing`, độ đậm và cỡ chữ của tiêu đề lớn, logo và heading section để dành đủ không gian cho các dấu tiếng Việt.
- Tất cả năm trang có `<meta charset="utf-8">` và `lang="vi"`.
- Tệp SVG tiếp tục sử dụng Arial/sans-serif, các văn bản hiển thị được kiểm tra bằng ảnh chụp.

## Kết quả kỹ thuật
- GitHub Pages deploy bản sửa: https://github.com/quanpl86/SNLT-HP12-PROJECT/actions/runs/41085946156
- Chromium Desktop/Mobile smoke test: https://github.com/quanpl86/SNLT-HP12-PROJECT/actions/runs/41085946044
- Ảnh minh chứng: tải artifact `sac-viet-screenshots` trong Chromium run.
- Hồi quy mã nguồn: `tests/vietnamese-font.test.cjs`.

## Phạm vi đánh giá
Kiểm thử Chromium trên Linux chứng minh giao diện không tràn ở 375px và luồng sử dụng chính đạt. Font fallback trên các trình duyệt/thiết bị khác có thể khác nhau, nhưng danh sách font ưu tiên đều hướng tới hỗ trợ Unicode tiếng Việt. Nếu trình duyệt vẫn hiển thị bản CSS cũ sau deploy, thử tải lại bỏ cache bằng Ctrl+F5 (Windows) hoặc Cmd+Shift+R (macOS).
