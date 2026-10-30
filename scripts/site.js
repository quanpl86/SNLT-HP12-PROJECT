"use strict";
// Menu responsive dùng chung cho tất cả các trang.
// HTML/CSS vẫn hiển thị nội dung ngay cả khi JavaScript không khả dụng.
(function () {
  const toggle = document.querySelector("[data-nav-toggle]");
  const navigation = document.querySelector("#site-navigation");
  if (!toggle || !navigation) return;
  function setOpen(open) {
    navigation.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Đóng menu điều hướng" : "Mở menu điều hướng");
  }
  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  navigation.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });
  document.addEventListener("click", function (event) {
    if (!toggle.contains(event.target) && !navigation.contains(event.target)) setOpen(false);
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 700) setOpen(false);
  });
})();
