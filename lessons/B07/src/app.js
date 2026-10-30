"use strict";
const search = document.querySelector("#search");
const category = document.querySelector("#category");
const cards = Array.from(document.querySelectorAll(".card"));
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
function filterCards() {
  const term = search.value.trim().toLocaleLowerCase("vi");
  const chosen = category.value;
  let shown = 0;
  cards.forEach(function (card) {
    const title = card.querySelector("h3").textContent.toLocaleLowerCase("vi");
    const validTitle = title.includes(term);
    const validCategory = chosen === "all" || card.dataset.category === chosen;
    const show = validTitle && validCategory;
    card.hidden = !show;
    if (show) shown++;
  });
  count.textContent = "Có " + shown + " bài viết phù hợp.";
  empty.hidden = shown !== 0;
}
search.addEventListener("input", filterCards);
category.addEventListener("change", filterCards);
filterCards();
