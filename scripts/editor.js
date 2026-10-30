"use strict";
(function(){
  const key="hp12.draft.v1";const title=document.querySelector("#draft-title");const body=document.querySelector("#draft-body");
  const status=document.querySelector("#draft-status");const outTitle=document.querySelector("#preview-title");const outBody=document.querySelector("#preview-body");
  function preview(){outTitle.textContent=title.value.trim()||"Tiêu đề sẽ xuất hiện tại đây";outBody.textContent=body.value.trim()||"Nội dung được hiển thị dưới dạng văn bản an toàn.";}
  function report(message){status.textContent=message;}
  function save(){try{localStorage.setItem(key,JSON.stringify({title:title.value,body:body.value}));report("Đã lưu bản nháp trên trình duyệt này.");}catch(e){report("Không thể lưu trên trình duyệt hiện tại.");}}
  function restore(){try{const raw=localStorage.getItem(key);if(raw===null){report("Chưa có bản nháp đã lưu.");return;}const value=JSON.parse(raw);title.value=String(value.title||"");body.value=String(value.body||"");preview();report("Đã khôi phục bản nháp.");}catch(e){report("Không thể đọc bản nháp đã lưu.");}}
  function clearDraft(){try{localStorage.removeItem(key);title.value="";body.value="";preview();report("Đã xóa bản nháp.");}catch(e){report("Không thể xóa bản nháp trong trình duyệt hiện tại.");}}
  title.addEventListener("input",preview);body.addEventListener("input",preview);
  document.querySelector("#save").addEventListener("click",save);document.querySelector("#restore").addEventListener("click",restore);document.querySelector("#clear").addEventListener("click",clearDraft);preview();
})();
