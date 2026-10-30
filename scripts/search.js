"use strict";
// Hàm thuần, có thể chạy ở trình duyệt và kiểm thử bằng Node.js không cần npm.
// Phần làm sạch dấu là mã hỗ trợ; LO05 chỉ yêu cầu so khớp tiêu đề không phân biệt hoa/thường.
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.SacVietSearch = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  function normalizeText(value) {
    return String(value ?? "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .toLocaleLowerCase("vi")
      .trim();
  }
  function filterPosts(posts, keyword, category) {
    const q = normalizeText(keyword);
    const selected = category || "all";
    if (!Array.isArray(posts)) return [];
    return posts.filter(function (post) {
      const matchesTitle = normalizeText(post.title).includes(q);
      const matchesCategory = selected === "all" || post.category === selected;
      return matchesTitle && matchesCategory;
    });
  }
  return { normalizeText: normalizeText, filterPosts: filterPosts };
});
