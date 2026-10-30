# Bộ ảnh GPT Image — Blog SẮC VIỆT
**Nguồn:** Bảy ảnh GPT Image do người dùng cung cấp; đã chuyển sang WebP để tăng tốc tải trang, không đổi chủ đề hay cấu trúc website. Cùng bối cảnh học tập HP09–HP12.

| Vị trí sử dụng | Tệp ảnh | Kích thước | Chủ đề |
|---|---|---|---|
| Hero trang chủ và ảnh xem trước Editor | [viet-nam-hero-gpt.webp](../assets/photos/viet-nam-hero-gpt.webp) | 1600×900 | Nhà cổ, núi, sông, cánh diều, hoa sen (tranh phong cảnh tổng hợp) |
| Bài viết Hội An | [hoi-an-gpt.webp](../assets/photos/hoi-an-gpt.webp) | 1440×810 | Đèn lồng phố cổ, con thuyền và ánh hoàng hôn |
| Bài viết Huế | [hue-gpt.webp](../assets/photos/hue-gpt.webp) | 1440×810 | Không khí cung đình Huế và mặt nước |
| Bài viết Hạ Long – Cát Bà | [ha-long-cat-ba-gpt.webp](../assets/photos/ha-long-cat-ba-gpt.webp) | 1440×810 | Đảo đá vôi và vịnh biển |
| Bài viết Tràng An | [trang-an-gpt.webp](../assets/photos/trang-an-gpt.webp) | 1440×810 | Thuyền, núi đá vôi và cảnh quan sông nước |
| Bài viết múa rối nước | [mua-roi-nuoc-gpt.webp](../assets/photos/mua-roi-nuoc-gpt.webp) | 1440×810 | Biểu diễn rối nước dân gian |
| Bài viết áo dài | [ao-dai-gpt.webp](../assets/photos/ao-dai-gpt.webp) | 1440×810 | Trang phục áo dài trên phố cổ |

## Nguyên tắc sử dụng
- Hình chỉ là **tranh minh họa nghệ thuật bằng GPT Image**, không dùng để chứng thực vị trí địa lý, lịch sử, kiến trúc chính xác hay danh hiệu di sản.
- Các thông tin về Hội An, Huế, Hạ Long – Cát Bà, Tràng An sử dụng [nguồn tham khảo UNESCO](CULTURE_SOURCES.md), **tách biệt** với nguồn ảnh AI.
- Ảnh được lưu trong repository, không liên kết nóng tới dịch vụ tạo ảnh, không yêu cầu tài khoản hoặc API khi đọc trang.
- Mỗi bài có `imageAlt` và `imageCaption`; trang đọc hiển thị chú thích. Hero hiển thị `alt` riêng.
- Học sinh vận dụng kiến thức HTML/CSS/JavaScript để thay hình, viết lại chú thích phù hợp và kiểm thử đường dẫn tương đối; không cần tự tạo ảnh mới để đạt LO.

## Kiểm thử
`node tools/validate.mjs` kiểm tra file/đường dẫn; `node --test tests/*.test.cjs` kiểm tra dữ liệu và ảnh; Playwright smoke kiểm tra tải thực tế Hero và 6 thẻ bài viết trên Chromium.
