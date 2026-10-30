# HP12 — Kiến trúc chương trình
**Tên học phần:** Tích hợp, hoàn thiện và chia sẻ website Blog — *Sắc Việt: Văn hóa và địa danh Việt Nam*.

## A. Thông tin
| Thuộc tính | Quyết định |
|---|---|
| Đối tượng | Học sinh 13–15 tuổi, đã học HP09–HP11 |
| Căn cứ bài học | 12 bài trên LMS HP12 |
| Thời lượng | **12 × 110 = 1.320 phút = 22 giờ trên lớp** |
| Quiz | Thực hiện tại nhà, không tính thời lượng lên lớp |
| Phần mềm/công nghệ | Figma (kế thừa), HTML, CSS, JavaScript, Browser DevTools, GitHub, GitHub Pages |
| Sản phẩm cuối học phần | **Sắc Việt — Personal Interactive Web Blog** |
| Trang trọng tâm JS | **Home** (tìm kiếm/lọc/tương tác) và **Editor** (lưu bản nháp) |
| Nguyên tắc | Kế thừa website HP10, không bắt xây lại 5 trang; chuyển giao cú pháp JS đã học ở HP11 |
| Phát hành | **B10:** GitHub Pages lần đầu; **B11:** kiểm thử và cải tiến sau phát hành; **B12:** Showcase |
| Giới hạn | Không backend, xác thực, database, CRUD công khai, framework, Advanced DOM Rendering hay sắp xếp bắt buộc |
| Điều kiện tài khoản/mạng | Nếu không thể phát hành: có bản chạy offline/localhost, repository và hồ sơ quy trình; **không được ghi đã xuất bản** |

## B. Vấn đề dẫn dắt
“Làm thế nào biến bản thiết kế Figma và website HTML/CSS của em thành một Blog giới thiệu văn hóa, địa danh Việt Nam có chức năng hữu ích, được kiểm thử và chia sẻ một cách an toàn?”

## C. Cấu trúc bốn học phần
| Học phần | Kiến thức/năng lực đầu vào | Cách dùng trong HP12 |
|---|---|---|
| HP09 | UX/UI, Sitemap, User Flow, Auto Layout, Components, Styles, Figma Prototype | Đối chiếu thiết kế với giao diện thật; đánh giá trải nghiệm khám phá địa danh |
| HP10 | HTML ngữ nghĩa, CSS selectors, Box Model, Flexbox, links, assets, QA | Giữ website tĩnh và Blog Cards làm khung để thêm JS |
| HP11 **LMS cũ, không đổi** | Variables, conditions, loops, functions, event handling, DOM styling, debugging | Áp dụng cấu trúc logic quen thuộc vào website có dữ liệu mẫu |
| HP12 | DOM query/update, LocalStorage, Search, Filter, GitHub, GitHub Pages, QA | Hoàn thiện và trình diễn Blog Sắc Việt |

## D. Chuẩn đầu ra cấp học phần
Được mô tả chi tiết tại [02_ULO_MASTER.md](02_ULO_MASTER.md): ULO01 Tích hợp thiết kế–giao diện; ULO02 Tương tác JS; ULO03 Chức năng dữ liệu trình duyệt; ULO04 Quản lý–phát hành–bảo vệ sản phẩm.

## E. Chuỗi sản phẩm
- B1–B3: website có JavaScript trên giao diện; DOM + click hoạt động.
- B4: ôn tập, kiểm thử và sửa DOM/Event.
- B5: lưu và khôi phục **1 nháp văn bản** trên cùng origin.
- B6: tìm tiêu đề trong ít nhất **3 Blog Card** (bộ mẫu hiện có 6).
- B7: lọc theo ít nhất **2 danh mục**; website mẫu dùng Di sản, Thiên nhiên, Văn hóa.
- B8: repository, tệp nguồn và ít nhất 1 commit có mô tả.
- B9: kiểm thử chức năng, pre-release checklist.
- B10: kết hợp **ít nhất 3 chức năng**, hướng dẫn Pages và **xuất bản đầu tiên**.
- B11: kiểm thử lại **4 chức năng cốt lõi** (click, lưu nháp, search, filter), xử lý lỗi và phát hành bản cải tiến.
- B12: giải thích **1 quyết định UI/UX, 2 cơ chế JS, 1 chu trình gỡ lỗi có bằng chứng**.

## F. Chính sách sư phạm
Từng bài trọng tâm sử dụng Engage–Explore–Explain–Elaborate–Evaluate, phân bổ tương ứng theo [Scope & Sequence](05_SCOPE_AND_SEQUENCE.md). Học sinh dự đoán → viết/chỉnh sửa → chạy thử → giải thích → sửa lỗi → cải tiến; không đánh giá việc sao chép mã. GV cung cấp HTML/CSS và khung có sẵn phù hợp mức năng lực, giảm dần hỗ trợ theo nhiệm vụ.

## G. An toàn và trách nhiệm
- Không đưa tên đầy đủ, địa chỉ, ảnh riêng tư, mật khẩu hoặc token của học sinh lên repository công khai.
- LocalStorage lưu trên origin/trình duyệt đang dùng, **không phải chức năng đăng bài công khai**.
- Mô tả di sản phải có nguồn tin đáng tin cậy, hình ảnh tự tạo hoặc có giấy phép và ghi nguồn. Xem [nguồn văn hóa](../docs/CULTURE_SOURCES.md).
- Việc bật GitHub Pages và chia sẻ URL yêu cầu quyền truy cập phù hợp; học sinh không chia sẻ mật khẩu.
