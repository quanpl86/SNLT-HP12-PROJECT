"use strict";
// Post-by-ID và bài liên quan là khung hỗ trợ tích hợp; không là LO bắt buộc của HP12.
(function () {
  const posts = window.HP12_POSTS || [];
  const id = new URLSearchParams(window.location.search).get("id");
  const post = posts.find(function (item) { return item.id === id; });
  const title = document.querySelector("#article-title");
  const excerpt = document.querySelector("#article-excerpt");
  const content = document.querySelector("#article-content");
  const category = document.querySelector("#article-category");
  const date = document.querySelector("#article-date");
  const cover = document.querySelector("#article-image");
  const warning = document.querySelector("#article-warning");
  const crumb = document.querySelector("#crumb-title");
  const source = document.querySelector("#article-source");
  const sourceContainer = document.querySelector("#source-container");
  const relatedSection = document.querySelector("#related-section");
  const relatedGrid = document.querySelector("#related-posts");

  if (!post) {
    title.textContent = "Không tìm thấy bài viết";
    excerpt.textContent = "Câu chuyện có thể đã được đổi tên hoặc đường dẫn chưa chính xác.";
    content.textContent = "";
    category.textContent = "THƯ VIỆN SẮC VIỆT";
    date.textContent = "";
    crumb.textContent = "Không tìm thấy";
    cover.hidden = true;
    warning.hidden = false;
    document.title = "Không tìm thấy bài viết | Sắc Việt";
    return;
  }
  document.title = post.title + " | Sắc Việt";
  title.textContent = post.title;
  crumb.textContent = post.title;
  excerpt.textContent = post.excerpt;
  category.textContent = post.category.toUpperCase();
  date.textContent = post.date;
  cover.src = post.image;
  cover.alt = "Minh họa: " + post.title;
  content.textContent = post.content;
  if (post.sourceUrl) {
    source.href = post.sourceUrl;
    source.textContent = post.sourceLabel || "Nguồn tham khảo";
    sourceContainer.hidden = false;
  } else {
    sourceContainer.hidden = true;
  }

  const related = posts.filter(function (p) { return p.id !== post.id && p.category === post.category; }).slice(0, 3);
  if (!related.length) return;
  relatedSection.hidden = false;
  related.forEach(function (item) {
    const card = document.createElement("article");
    card.className = "post-card";
    const media = document.createElement("a");
    media.className = "post-card-media";
    media.href = "post.html?id=" + encodeURIComponent(item.id);
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = "Minh họa: " + item.title;
    img.loading = "lazy";
    img.width = 720; img.height = 405;
    media.append(img);
    const body = document.createElement("div");
    body.className = "post-card-body";
    const heading = document.createElement("h3");
    heading.textContent = item.title;
    const description = document.createElement("p");
    description.textContent = item.excerpt;
    const link = document.createElement("a");
    link.href = "post.html?id=" + encodeURIComponent(item.id);
    link.textContent = "Xem câu chuyện →";
    body.append(heading, description, link);
    card.append(media, body);
    relatedGrid.append(card);
  });
})();
