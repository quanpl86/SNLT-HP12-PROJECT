"use strict";
const topic=document.querySelector("#topic");
const note=document.querySelector("#speaker-note");
const speakingPoints={design:"Cho xem Figma Blog Sắc Việt HP09 và chỉ ra một điểm giống/khác trên HTML/CSS.",code:"Trình diễn tìm kiếm Hội An, lọc Di sản hoặc click vào bài viết. Giải thích DOM và điều kiện JS.",qa:"Kể lại một lỗi cụ thể: triệu chứng, nguyên nhân, bản sửa và kết quả kiểm thử lại."};
function update(){note.textContent=speakingPoints[topic.value]||"";}
topic.addEventListener("change",update);update();
