"use strict";
const title = document.querySelector("#article-title");
const excerpt = document.querySelector("#article-excerpt");
const badge = document.querySelector("#article-badge");
title.textContent = "Thiết kế giao diện Blog từ Figma";
excerpt.textContent = "Đây là ví dụ thay đổi nội dung và CSS class qua DOM.";
badge.textContent = "Đang nổi bật";
badge.classList.add("active");
