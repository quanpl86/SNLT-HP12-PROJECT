"use strict";
(function(){
  const id=new URLSearchParams(window.location.search).get("id");const post=(window.HP12_POSTS||[]).find(p=>p.id===id);
  const title=document.querySelector("#article-title"),content=document.querySelector("#article-content"),tag=document.querySelector("#article-category"),date=document.querySelector("#article-date"),cover=document.querySelector("#article-image"),warn=document.querySelector("#article-warning");
  if(!post){title.textContent="Bài viết không tồn tại";content.textContent="";tag.textContent="KHÔNG TÌM THẤY";cover.hidden=true;warn.hidden=false;return;}
  title.textContent=post.title;content.textContent=post.content;tag.textContent=post.category;date.textContent=post.date;cover.src=post.image;cover.alt="Minh họa: "+post.title;
  const source=document.querySelector("#article-source");const container=document.querySelector("#source-container");
  if(post.sourceUrl){source.href=post.sourceUrl;source.textContent=post.sourceLabel||"Nguồn tham khảo";container.hidden=false;}else{container.hidden=true;}
})();
