"use strict";
const test=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const css=fs.readFileSync(path.join(root,"styles/main.css"),"utf8");

test("Website dùng font có hỗ trợ chữ Việt ở cả body và display",()=>{
 const body=css.match(/--font-body:([^;]+);/);
 const display=css.match(/--font-display:([^;]+);/);
 assert.ok(body&&display);
 assert.match(body[1],/Noto Sans/);
 assert.match(display[1],/Noto Sans/);
 assert.doesNotMatch(display[1],/Georgia|Times New Roman/);
 assert.match(css,/body\{[^}]*font-family:var\(--font-body\)/);
 assert.match(css,/h1,h2\{font-family:var\(--font-display\)/);
});

test("Tiêu đề lớn có khoảng cách dòng đủ cho dấu tiếng Việt",()=>{
 const rule=css.match(/\.hero-copy h1\{[^}]+\}/);
 assert.ok(rule,"Thiếu CSS hero title");
 assert.match(rule[0],/line-height:1\.27/);
 assert.doesNotMatch(rule[0],/white-space:nowrap/);
});

test("Cả năm trang khai báo UTF-8 và ngôn ngữ tiếng Việt",()=>{
 for(const name of ["index","about","post","editor","dashboard"]){
  const html=fs.readFileSync(path.join(root,name+".html"),"utf8");
  assert.match(html,/<html lang="vi">/);
  assert.match(html,/<meta charset="utf-8">/);
 }
});
