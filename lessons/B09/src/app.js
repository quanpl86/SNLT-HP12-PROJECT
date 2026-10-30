"use strict";
const cards=Array.from(document.querySelectorAll(".card"));
const search=document.querySelector("#search");
const matchStatus=document.querySelector("#match-status");
function filter(){const keyword=search.value.trim().toLocaleLowerCase("vi");let count=0;cards.forEach(function(card){const matched=card.textContent.toLocaleLowerCase("vi").includes(keyword);card.hidden=!matched;if(matched)count++;});matchStatus.textContent=count+" kết quả phù hợp.";}
search.addEventListener("input",filter);filter();
const key="hp12.lesson09.test";const draft=document.querySelector("#draft");const draftStatus=document.querySelector("#draft-status");
document.querySelector("#save").addEventListener("click",function(){try{localStorage.setItem(key,draft.value);draftStatus.textContent="Đã lưu nháp kiểm thử.";}catch(e){draftStatus.textContent="Trình duyệt chặn lưu."}});
document.querySelector("#restore").addEventListener("click",function(){try{const old=localStorage.getItem(key);draft.value=old===null?"":old;draftStatus.textContent=old===null?"Không có dữ liệu đã lưu.":"Đã khôi phục.";}catch(e){draftStatus.textContent="Không thể khôi phục.";}});
