"use strict";
const search = document.querySelector("#search");
const cards = Array.from(document.querySelectorAll(".card"));
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
function filterCards() {
  const keyword = search.value.trim().toLocaleLowerCase("vi");
  let visible = 0;
  cards.forEach(function (card) {
    const title = card.querySelector("h3").textContent.toLocaleLowerCase("vi");
    const match = title.includes(keyword);
    card.hidden = !match;
    if (match) visible++;
  });
  count.textContent = "Có " + visible + " / " + cards.length + " bài viết.";
  empty.hidden = visible !== 0;
}
search.addEventListener("input", filterCards);
filterCards();
