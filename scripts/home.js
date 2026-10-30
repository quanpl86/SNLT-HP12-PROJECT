"use strict";
// B06 (LO05): tìm kiếm theo tiêu đề; B07 (LO06): lọc danh mục.
// Các Blog Card được dựng từ dữ liệu có sẵn, là mã tham khảo hỗ trợ giáo viên.
(function () {
  const posts = window.HP12_POSTS || [];
  const search = document.querySelector("#search");
  const grid = document.querySelector("#post-list");
  const count = document.querySelector("#result-count");
  const empty = document.querySelector("#empty");
  const clear = document.querySelector("#clear-search");
  const reset = document.querySelector("#reset-filters");
  const chips = Array.from(document.querySelectorAll("[data-category]"));
  if (!search || !grid || !window.SacVietSearch) return;
  let selectedCategory = "all";

  function createCard(post) {
    const article = document.createElement("article");
    article.className = "post-card";
    const media = document.createElement("a");
    media.className = "post-card-media";
    media.href = "post.html?id=" + encodeURIComponent(post.id);
    media.setAttribute("aria-label", "Đọc bài: " + post.title);
    const image = document.createElement("img");
    image.src = post.image;
    image.alt = post.imageAlt || ("Tranh minh họa: " + post.title);
    image.loading = "lazy";
    image.width = 1440;
    image.height = 810;
    const tag = document.createElement("span");
    tag.className = "post-card-category";
    tag.textContent = post.category;
    media.append(image, tag);
    const body = document.createElement("div");
    body.className = "post-card-body";
    const heading = document.createElement("h3");
    heading.textContent = post.title;
    const excerpt = document.createElement("p");
    excerpt.textContent = post.excerpt;
    const bottom = document.createElement("div");
    bottom.className = "post-card-bottom";
    const link = document.createElement("a");
    link.href = "post.html?id=" + encodeURIComponent(post.id);
    link.textContent = "Khám phá câu chuyện";
    const arrow = document.createElement("span");
    arrow.className = "post-card-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";
    bottom.append(link, arrow);
    body.append(heading, excerpt, bottom);
    article.append(media, body);
    return article;
  }

  function render() {
    const filtered = window.SacVietSearch.filterPosts(posts, search.value, selectedCategory);
    grid.replaceChildren(...filtered.map(createCard));
    count.textContent = "Đang hiển thị " + filtered.length + " / " + posts.length + " câu chuyện";
    empty.hidden = filtered.length > 0;
    clear.hidden = search.value.length === 0;
  }
  function selectCategory(next) {
    selectedCategory = next;
    chips.forEach(function (chip) {
      const active = chip.dataset.category === selectedCategory;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    render();
  }
  function resetFilters() {
    search.value = "";
    selectCategory("all");
    search.focus();
  }
  search.addEventListener("input", render);
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () { selectCategory(chip.dataset.category); });
  });
  clear.addEventListener("click", function () { search.value = ""; render(); search.focus(); });
  reset.addEventListener("click", resetFilters);
  render();
})();
