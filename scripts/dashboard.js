"use strict";
(function(){const root=document.querySelector("#dashboard-items");const empty=document.querySelector("#dashboard-empty");const posts=window.HP12_POSTS||[];
  posts.forEach(p=>{const row=document.createElement("article");row.className="list-item";const text=document.createElement("div");const heading=document.createElement("strong");heading.textContent=p.title;const category=document.createElement("p");category.textContent=p.category;text.append(heading,category);const link=document.createElement("a");link.href="post.html?id="+encodeURIComponent(p.id);link.textContent="Xem bài";row.append(text,link);root.append(row);});empty.hidden=posts.length!==0;
})();
