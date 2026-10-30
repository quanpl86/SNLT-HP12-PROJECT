
"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

test("5 trang thành phẩm và nguồn website hợp lệ", () => {
  for (const name of ["index","about","editor","post","dashboard"]) {
    const source = read(name + ".html");
    assert.match(source, /<html lang="vi"/);
    assert.match(source, /<main id="main">/);
    assert.match(source, /styles\/main.css/);
    assert.match(source, /scripts\/site.js/);
  }
});
test("Home nối đúng các script cần thiết theo thứ tự", () => {
  const source = read("index.html");
  const a = source.indexOf('src="scripts/posts.js"');
  const b = source.indexOf('src="scripts/search.js"');
  const c = source.indexOf('src="scripts/home.js"');
  assert.ok(a > 0 && b > a && c > b);
  for (const id of ["search","post-list","result-count","empty","clear-search","reset-filters"]) {
    assert.ok(source.includes('id="' + id + '"'));
  }
});
test("Editor có đủ nút và không chứa hành động đăng bài giả", () => {
  const source=read("editor.html");
  for (const id of ["draft-title","draft-body","save","restore","clear","preview-title","preview-body","draft-status"]) {
    assert.ok(source.includes('id="' + id + '"'));
  }
  assert.doesNotMatch(source,/id="publish"/);
  assert.match(source,/không có nghĩa là đăng bài/);
});
test("mã JavaScript sử dụng textContent thay vì innerHTML cho dữ liệu người dùng", () => {
  for (const name of ["home","editor","post","dashboard"]) {
    assert.doesNotMatch(read("scripts/" + name + ".js"), /\.innerHTML\s*=/);
  }
});
