"use strict";
(function () {
  const posts=window.HP12_POSTS||[];
  const grid=document.querySelector("#post-list");
  const search=document.querySelector("#search");
  const category=document.querySelector("#category");
  const count=document.querySelector("#result-count");
  const empty=document.querySelector("#empty");
  function card(post){
    const item=document.createElement("article"); item.className="card";
    const picture=document.createElement("img");picture.src=post.image;picture.alt="Minh họa: "+post.title;picture.loading="lazy";
    const body=document.createElement("div");body.className="card-body";
    const label=document.createElement("span");label.className="tag";label.textContent=post.category;
    const heading=document.createElement("h3");heading.textContent=post.title;
    const excerpt=document.createElement("p");excerpt.textContent=post.excerpt;
    const link=document.createElement("a");link.href="post.html?id="+encodeURIComponent(post.id);link.textContent="Đọc bài →";
    body.append(label,heading,excerpt,link);item.append(picture,body);return item;
  }
  function render(){
    const query=search.value.trim().toLocaleLowerCase("vi");const chosen=category.value;
    const found=posts.filter(p=>p.title.toLocaleLowerCase("vi").includes(query)&&(chosen==="all"||p.category===chosen));
    grid.replaceChildren(...found.map(card));count.textContent="Hiển thị "+found.length+" / "+posts.length+" bài viết";empty.hidden=found.length!==0;
  }
  search.addEventListener("input",render);category.addEventListener("change",render);render();
})();
