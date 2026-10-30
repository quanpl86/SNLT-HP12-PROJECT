# Knowledge Master — 15 đơn vị kiến thức HP12
**Phân loại:** **7 NEW + 4 TRANSFER + 4 INTEGRATE = 15**. Mã được trích theo sheet `04_Knowledge` của Curriculum Master v3.0; không thay đổi nội dung, số mã hoặc bài sở hữu.

- **NEW:** Kiến thức/kỹ năng mới ở HP12.
- **TRANSFER:** Vận dụng cấu trúc hoặc kỹ năng đã học từ HP09–HP11 vào bối cảnh mới.
- **INTEGRATE:** Kết hợp ít nhất hai kiến thức để tạo chức năng hoặc kiểm định sản phẩm.

| K-ID | Bài sở hữu | Loại | Kiến thức | WHAT / HOW dạy ở mức cốt lõi | Tiền đề | Giới hạn độ khó | LO | Minh chứng thành thạo |
|---|---|---|---|---|---|---|---|---|
| K01 | [B01](../lessons/B01/KNOWLEDGE.md) | TRANSFER | Đối chiếu Figma và HTML/CSS | Xác định 2 vùng giao diện và mã/kiểu liên quan; lập bảng thiết kế → triển khai. | HP09 Component/Style; HP10 HTML/CSS | Không thiết kế lại toàn bộ Figma. | LO01 | Nêu được 2 cặp đối chiếu. |
| K02 | [B01](../lessons/B01/KNOWLEDGE.md) | TRANSFER | Chuyển mã JS cơ bản vào website | Liên kết tệp JS với HTML và kiểm tra một thay đổi hiển thị từ đoạn mã mẫu. | HP11 Hello World, biến và trình duyệt | Không dạy DOM nâng cao ở B1. | LO01 | Một nội dung trên Home thay đổi đúng. |
| K03 | [B02](../lessons/B02/KNOWLEDGE.md) | NEW | Chọn phần tử bằng DOM Query | Giới thiệu querySelector trên selector ID/class đã biết; truy xuất có mục đích. | HP10 CSS selector; HP11 DOM style cơ bản | Không yêu cầu cây DOM sâu, nhiều API. | LO02 | Chọn đúng hai phần tử. |
| K04 | [B02](../lessons/B02/KNOWLEDGE.md) | INTEGRATE | Cập nhật văn bản/trạng thái UI | Sử dụng textContent/classList theo mẫu và CSS class kế thừa. | HP09 UI Style; HP10 CSS class; HP11 DOM | Không HTML injection hay animation. | LO02 | Cập nhật có thể quan sát, giải thích. |
| K05 | [B03](../lessons/B03/KNOWLEDGE.md) | TRANSFER | Click event và handler | Chuyển Event Handler đã học ở HP11 vào nút của Blog; có mẫu addEventListener. | HP11 B8 Event Handling | Không dạy thêm nhiều loại sự kiện. | LO03 | Click gây ra tác động đúng. |
| K06 | [B03](../lessons/B03/KNOWLEDGE.md) | INTEGRATE | Luồng Event → Function → UI | Phân biệt sự kiện, xử lý và thay đổi trạng thái hiển thị; thử trạng thái bật/tắt. | HP11 function/condition/event; B2 DOM | Không lập trình create-new-post động. | LO03 | Giải thích được luồng tương tác. |
| K07 | [B05](../lessons/B05/KNOWLEDGE.md) | NEW | Đọc và ghi .value trường nhập | Sử dụng input/textarea.value khi nhấn lưu hoặc khôi phục nháp. | HP10 Editor shell; HP11 chuỗi/biến | Chỉ một vùng văn bản bắt buộc. | LO04 | Đọc đúng và phục hồi giá trị. |
| K08 | [B05](../lessons/B05/KNOWLEDGE.md) | NEW | LocalStorage setItem/getItem | Lưu dữ liệu chuỗi theo key, khôi phục khi tải lại trang trong cùng origin. | HP11 điều kiện/chuỗi; B3 click | Không JSON CRUD, không chia sẻ liên thiết bị. | LO04 | F5 rồi lấy lại đúng văn bản. |
| K09 | [B06](../lessons/B06/KNOWLEDGE.md) | NEW | Sự kiện input cho tìm kiếm | Lấy từ khóa người dùng nhập và cập nhật kết quả tương ứng. | B5 .value; HP11 sự kiện | Không làm thuật toán tìm kiếm nâng cao. | LO05 | Gõ/xóa tạo cập nhật đúng. |
| K10 | [B06](../lessons/B06/KNOWLEDGE.md) | NEW | So khớp chuỗi tiêu đề | Sử dụng toLowerCase()/includes() ở mức thao tác chuỗi cần thiết. | HP11 điều kiện và chuỗi | Không Sort hoặc đa trường bắt buộc. | LO05 | Tìm kiếm không phân biệt hoa/thường. |
| K11 | [B06](../lessons/B06/KNOWLEDGE.md) | TRANSFER | Vòng lặp trên các Blog Card có sẵn | Duyệt NodeList bằng vòng lặp đã biết/forEach theo khung; thay đổi ẩn/hiện. | HP11 vòng lặp; HP10 Blog Cards | Không tạo Card mới từ data Array. | LO05 | Đúng số Card tương ứng điều kiện. |
| K12 | [B07](../lessons/B07/KNOWLEDGE.md) | INTEGRATE | Lọc danh mục từ thẻ bài | So sánh category với lựa chọn; dùng lại duyệt và ẩn/hiện; trạng thái rỗng. | B6; HP11 điều kiện/vòng lặp | Không lọc phức hợp, DOM rendering nâng cao. | LO06 | 2 category + All + empty state đúng. |
| K13 | [B08](../lessons/B08/KNOWLEDGE.md) | NEW | Repository và commit GitHub | Tạo repo, upload file, ghi commit bằng giao diện web; xác minh file và quyền chia sẻ. | HP10 cấu trúc tệp; HP11 mã nguồn | Không bắt buộc Git CLI, branch/merge. | LO07 | Repository có mã; ít nhất 1 commit. |
| K14 | [B10](../lessons/B10/KNOWLEDGE.md) | NEW | GitHub Pages: xuất bản từ repository | Chọn nguồn xuất bản dạng branch/folder, kích hoạt Pages, kiểm tra entry index.html và URL. | B8 GitHub repo; HP10 đường dẫn | Không Pages Actions/CI/CD. | LO09 | URL bản phát hành đầu tiên truy cập được. |
| K15 | [B10](../lessons/B10/KNOWLEDGE.md) | INTEGRATE | Kiểm thử phát hành trên URL công khai | Kiểm tra file liên kết, giao diện, JS, chức năng, quyền riêng tư; ghi kết quả, định mức lỗi. | HP09 UX; HP10 QA; HP11 debug; B9 checklist | Không yêu cầu viết test automation. | LO09 | 3 chức năng, asset, navigation đạt. |

## Mẫu ví dụ minh họa để giáo viên liên hệ *Sắc Việt* (không thay thế định nghĩa kỹ thuật)
- **K03–K04:** `document.querySelector("#article-title")` rồi `.textContent = "Phố cổ Hội An"`.
- **K05–K06:** click nút “Khám phá” để hiện thông tin về Vịnh Hạ Long – Cát Bà.
- **K07–K08:** nháp “Em muốn giới thiệu Cố đô Huế” → Lưu → tải lại → Khôi phục trên cùng trình duyệt.
- **K09–K11:** gõ `Hội An` để chỉ hiện Card có tiêu đề phù hợp; xóa từ khóa để phục hồi.
- **K12:** chọn `Di sản` để hiện Hội An, Huế; chọn `Tất cả` để hiện lại toàn bộ.
- **K13–K15:** đưa mã Blog Sắc Việt lên repository được phép; B10 cấu hình GitHub Pages và kiểm thử URL thực tế.

**Phân loại theo bài:** B01 K01–K02; B02 K03–K04; B03 K05–K06; B05 K07–K08; B06 K09–K11; B07 K12; B08 K13; B10 K14–K15. B04/B09/B11/B12 chỉ tái sử dụng K-ID.
