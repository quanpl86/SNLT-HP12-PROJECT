
"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const search = require("../scripts/search.js");
const root = path.resolve(__dirname, "..");
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "scripts/posts.js"), "utf8"), context);
const posts = context.window.HP12_POSTS;

test("có 6 bài viết mẫu, đủ ba danh mục và ID duy nhất", () => {
  assert.equal(posts.length, 6);
  assert.equal(new Set(posts.map(p => p.id)).size, posts.length);
  assert.deepEqual(new Set(posts.map(p => p.category)), new Set(["Di sản", "Thiên nhiên", "Văn hóa"]));
});

test("mỗi bài có dữ liệu cần thiết và ảnh địa phương", () => {
  for (const post of posts) {
    assert.ok(post.title && post.category && post.excerpt && post.content);
    assert.ok(post.image.startsWith("assets/"), post.title);
    assert.ok(fs.existsSync(path.join(root, post.image)), post.image);
    assert.ok(post.image.startsWith("assets/photos/") && post.image.endsWith(".webp"), post.title);
    assert.ok(post.imageAlt && post.imageCaption, post.title);
    assert.ok(post.content.length >= 600, "Bài viết quá ngắn: " + post.title);
  }
});

test("tìm kiếm hỗ trợ chữ hoa và không dấu", () => {
  assert.equal(search.filterPosts(posts, "HOI AN", "all").length, 1);
  assert.equal(search.filterPosts(posts, "huế", "all").length, 1);
  assert.equal(search.filterPosts(posts, "HA LONG", "all").length, 1);
  assert.equal(search.filterPosts(posts, "AO DAI", "all").length, 1);
});

test("lọc danh mục Di sản, Thiên nhiên, Văn hóa", () => {
  assert.equal(search.filterPosts(posts, "", "Di sản").length, 2);
  assert.equal(search.filterPosts(posts, "", "Thiên nhiên").length, 2);
  assert.equal(search.filterPosts(posts, "", "Văn hóa").length, 2);
  assert.equal(search.filterPosts(posts, "", "all").length, 6);
});

test("kết hợp từ khóa và danh mục, trường hợp rỗng", () => {
  assert.equal(search.filterPosts(posts, "Hội An", "Di sản").length, 1);
  assert.equal(search.filterPosts(posts, "Hội An", "Văn hóa").length, 0);
  assert.equal(search.filterPosts(posts, "abcxyz-not-exist", "all").length, 0);
  assert.equal(search.filterPosts([], "x", "all").length, 0);
});

test("tất cả đường dẫn liên kết bài viết đều có ID", () => {
  for (const post of posts) {
    const url = new URL("https://example.test/post.html?id=" + encodeURIComponent(post.id));
    assert.equal(url.searchParams.get("id"), post.id);
  }
});
