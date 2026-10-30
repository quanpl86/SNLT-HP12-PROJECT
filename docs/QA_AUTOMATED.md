# Kiểm tra tự động mã nguồn HP12

Có thể chạy tại thư mục gốc repository:

```bash
node tools/validate.mjs
```

Công cụ không phụ thuộc thư viện ngoài. Nó xác nhận:
- Có đầy đủ 5 trang, CSS, JS, SVG của dự án học phần.
- Có đầy đủ 12 thư mục bài học B01–B12, mỗi thư mục gồm mã HTML/CSS/JS, ảnh và 6 tài liệu hướng dẫn.
- Các file JavaScript biên dịch cú pháp hợp lệ theo Node VM (không phải chạy trong trình duyệt).
- Các link/ảnh/script/stylesheet trỏ tới file nội bộ có tồn tại.
- HTML có phần tử main và không trùng ID trong một trang.

## Hạn chế
**Đây là kiểm tra tĩnh, không thay thế kiểm thử tương tác thực tế.** Cần giáo viên/học sinh mở các trang bằng trình duyệt, kiểm tra các event, UI, LocalStorage, responsive và URL GitHub Pages sau khi triển khai. Xem `TEST_CASES.md` và `lessons/Bxx/TEST_CASES.md`.

Workflow `.github/workflows/validate.yml` chạy khi GitHub Actions được phép hoạt động và repository có đủ quyền. Nếu Actions bị tắt, chạy kiểm tra cục bộ bằng lệnh ở trên.

