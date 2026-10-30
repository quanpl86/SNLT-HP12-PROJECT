"use strict";
const topic=document.querySelector("#topic");
const note=document.querySelector("#speaker-note");
const speakingPoints={design:"Cho xem bản Figma HP09 và chỉ ra một điểm giống/khác trên HTML/CSS.",code:"Trình diễn click, tìm kiếm hoặc lọc. Chỉ ra phần tử DOM và điều kiện trong JS.",qa:"Kể lại một lỗi cụ thể: triệu chứng, nguyên nhân, bản sửa và kết quả kiểm thử lại."};
function update(){note.textContent=speakingPoints[topic.value]||"";}
topic.addEventListener("change",update);update();
