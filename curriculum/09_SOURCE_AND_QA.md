# Quản trị nguồn, thẩm định và trạng thái
## Nguồn và thứ tự ưu tiên
1. **Curriculum Master HP12 v3.0**: workbook `HP12_Khung_Chuong_Trinh_Hoan_Chinh_LMS_v3_0_110phut.xlsx` đã có trong cuộc hội thoại; nguồn phát biểu ULO, LO, K-ID, 12 bài, thời lượng và quy tắc sản phẩm.
2. **LMS HP12 do người dùng cung cấp**: 12 bài gốc, hiệu chỉnh chứ không thay bằng kiến trúc HP12 Markdown/Netlify cũ.
3. **LMS HP11 cũ**: giữ nguyên (10 bài); KHÔNG dùng phương án HP11 v2.0 từng đề xuất.
4. **HP09 LO Audit**: https://docs.google.com/spreadsheets/d/1ldhIDtNfMkCEk73Nx0bN20VH3_lA98dz/edit — nguồn AS-BUILT.
5. **HP10 Curriculum v1.2**: https://docs.google.com/document/d/1FDRiaUPtZkCv5hdbl1bBKwC5X7rDKhbt/edit — tài liệu tham chiếu còn trạng thái REVIEW.
6. **HP12 Drive cũ**: https://docs.google.com/document/d/1juym9f0InrfrrUll8sXVTkulLvj6uUIn/edit — khác LMS (Markdown/Netlify), **không dùng làm khung HP12 hiện hành**.

## Quyết định đã chốt
- 12×110 phút; Quiz ở nhà.
- 4 ULO, 10 LO, 15 K-ID (7 NEW + 4 TRANSFER + 4 INTEGRATE).
- B10 kết hợp **LO08 + LO09**, sở hữu **K14 NEW + K15 INTEGRATE**.
- B11 chỉ kiểm thử và cải tiến, B12 Showcase.
- Website tốt nghiệp Blog Sắc Việt về **văn hóa và địa danh Việt Nam**, được triển khai trên GitHub `quanpl86/SNLT-HP12-PROJECT`.
- Các dự án bài học đã tồn tại trong `lessons/B01–B12`; công việc này **chỉ bổ sung tài liệu và tham chiếu LO/K**, không viết lại sản phẩm.

## Checklist kiểm định trước nghiệm thu giáo án
- [x] 12 bài, mỗi bài 110 phút, Quiz tại nhà.
- [x] 10 LO có sản phẩm, tiêu chí đo được và bài sở hữu.
- [x] 15 K-ID có NEW/TRANSFER/INTEGRATE và owner.
- [x] B10 GitHub Pages, B11 không có NEW.
- [x] Chủ đề Sắc Việt, thống nhất nội dung dữ liệu mẫu.
- [ ] Pilot B05/B06/B08/B10 với nhóm học sinh 13–15 tuổi.
- [ ] Xác nhận thực tế GitHub Pages đã bật, kiểm thử URL và lưu nháp.
- [ ] Đối chiếu mã chuẩn Việt Nam/CSTA/ISTE bằng tài liệu chính thức.
- [ ] Cập nhật LMS và đồng bộ các tài liệu Drive sau phê duyệt.

## Điểm cần quản trị minh bạch
- Tệp Markdown `curriculum/` là **bản triển khai nội dung Curriculum Master** để GitHub duyệt, liên kết và version control. Workbook XLSX nguyên bản vẫn là tài liệu nguồn được lưu từ cuộc hội thoại; bản Markdown không tự chứng minh LMS đã cập nhật.
- Các ví dụ Hội An/Huế, nhóm Di sản/Thiên nhiên/Văn hóa là cách chuyển bối cảnh theo yêu cầu sau bản v3.0; không thay mã LO/K.
- Các ca kiểm thử mã nguồn tự động chỉ xác nhận tính hợp lệ tĩnh, không tự chứng minh thời lượng sư phạm 110 phút hoặc website đã chạy trên Pages.
- Nếu bản ghi nội dung thay đổi sau này, cập nhật đồng bộ LO Master, K Master, Scope & Sequence, traceability và README bài học; tránh lệch mã.

## Dữ liệu và nghiệm thu được lưu trên repository
- [4 bảng CSV](data/README.md) gồm 4 ULO, 10 LO, 15 K-ID, 12 bài học. Đây là bản dữ liệu sử dụng được để kiểm tra và nhập liệu, không thay XLSX nguyên bản.
- [Acceptance Master](10_ACCEPTANCE_MASTER.md) giữ **26 ca AT01–AT26**. Tiêu đề sheet workbook ghi “25 CA” nhưng thật sự có AT26; không được tự xóa AT26.
- Workbook nguồn vẫn ở tệp đã tạo trong phiên làm việc của người dùng; **chưa đẩy tệp nhị phân XLSX lên GitHub**. Bản trên GitHub là nội dung quản lý ở Markdown và CSV.
