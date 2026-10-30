# B08 — Thực hành GitHub thực tế (chưa xuất bản)

1. Tạo repository cá nhân/nhóm theo hướng dẫn của giáo viên. Không upload mã vào repository chung khi chưa được phân quyền.
2. Sử dụng **Upload files** trên giao diện GitHub để đưa HTML/CSS/JS và asset lên, hoặc dùng Git cơ bản:

```bash
git init
git add index.html src assets README.md
git commit -m "feat: them giao dien va tuong tac blog"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

3. Các dòng lệnh trên là **ví dụ cho một thư mục dự án mới**. Nếu đã clone repository hoặc đang có lịch sử Git, không chạy `git init`/`remote add` máy móc. Thay USERNAME và REPOSITORY bằng nơi học sinh được phép ghi.
4. Đối chiếu tệp vừa push với tệp ở máy, kiểm tra tab Commits.
5. Sửa README, tạo một commit có ý nghĩa và kiểm tra lịch sử.
6. **Không bật Pages ở B08.** Giữ việc xuất bản cho B10.
7. Không công khai dữ liệu riêng tư hoặc token.

