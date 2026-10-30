"use strict";
// Thư viện xem dữ liệu mẫu, không phải hệ thống quản lý bài đăng.
(function () {
  const posts = window.HP12_POSTS || [];
  const root = document.querySelector("#dashboard-items");
  const empty = document.querySelector("#dashboard-empty");
  const counters = {
    total: document.querySelector("#stats-total"),
    heritage: document.querySelector("#stats-heritage"),
    nature: document.querySelector("#stats-nature"),
    culture: document.querySelector("#stats-culture")
  };
  counters.total.textContent = String(posts.length).padStart(2, "0");
  counters.heritage.textContent = String(posts.filter(function (p) { return p.category === "Di sản"; }).length).padStart(2, "0");
  counters.nature.textContent = String(posts.filter(function (p) { return p.category === "Thiên nhiên"; }).length).padStart(2, "0");
  counters.culture.textContent = String(posts.filter(function (p) { return p.category === "Văn hóa"; }).length).padStart(2, "0");

  posts.forEach(function (post) {
    const row = document.createElement("article");
    row.className = "library-row";
    const image = document.createElement("img");
    image.src = post.image;
    image.alt = "Minh họa: " + post.title;
    image.loading = "lazy";
    image.width = 170;
    image.height = 110;
    const text = document.createElement("div");
    const tag = document.createElement("span");
    tag.className = "library-category";
    tag.textContent = post.category;
    const heading = document.createElement("h3");
    heading.textContent = post.title;
    const description = document.createElement("p");
    description.textContent = post.excerpt;
    text.append(tag, heading, description);
    const link = document.createElement("a");
    link.href = "post.html?id=" + encodeURIComponent(post.id);
    link.textContent = "Đọc bài →";
    row.append(image, text, link);
    root.append(row);
  });
  empty.hidden = posts.length > 0;
})();
