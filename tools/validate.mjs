// HP12: kiểm định cấu trúc mã, cú pháp JavaScript và đường dẫn tài nguyên.
// Chạy bằng Node.js 20+; không cần cài package.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
let checks = 0, failures = 0, jsCount = 0, htmlCount = 0;
function assert(ok, message) { checks++; if (!ok) { failures++; console.error("FAIL", message); } }
const exists = p => fs.existsSync(path.join(root,p));
const required = ["index.html","about.html","post.html","editor.html","dashboard.html",
  "styles/main.css","scripts/site.js","scripts/posts.js","scripts/home.js",
  "scripts/editor.js","scripts/post.js","scripts/dashboard.js","assets/brand.svg"];
required.forEach(f => assert(exists(f), "Thiếu tệp dự án học phần: " + f));
const docs = ["README.md","KNOWLEDGE.md","BUILD_STEPS.md","RUN_AND_INTERACT.md","TEST_CASES.md","SOURCE_MAP.md"];
for(let n=1;n<=12;n++){
  const b = "lessons/B" + String(n).padStart(2,"0") + "/";
  ["index.html","src/app.js","src/style.css","assets/illustration.svg",...docs].forEach(f => assert(exists(b+f),"Thiếu tài nguyên bài "+b+f));
}
function walk(dir) {
  for (const f of fs.readdirSync(dir,{withFileTypes:true})) {
    const target=path.join(dir,f.name);
    if(f.isDirectory())walk(target);
    else if(f.isFile() && (target.endsWith(".js")||target.endsWith(".mjs"))){
      const source=fs.readFileSync(target,"utf8");
      try{new vm.Script(source,{filename:target});assert(true,"JS syntax "+target);jsCount++;}
      catch(e){assert(false,"Lỗi cú pháp JS "+path.relative(root,target)+": "+e.message);}
    }
    else if(f.isFile() && target.endsWith(".html"))checkHtml(target);
  }
}
function checkHtml(file) {
  htmlCount++;
  const text=fs.readFileSync(file,"utf8");
  assert(/<html\b/i.test(text)&&/<main\b/i.test(text), "Thiếu html/main trong "+file);
  const ids=[...text.matchAll(/\bid=["']([^"']+)["']/g)].map(x=>x[1]);
  assert(new Set(ids).size===ids.length,"Trùng ID trong "+file);
  const srcs=[...text.matchAll(/<(?:script|link|img|a)\b[^>]*?\b(?:src|href)=["']([^"']+)["']/g)];
  for(const v of srcs) {
    const url=v[1];
    if(!url||url.startsWith("#")||/^(?:https?:|mailto:|data:|javascript:)/i.test(url))continue;
    const resolved=path.resolve(path.dirname(file),url.split("?")[0].split("#")[0]);
    assert(fs.existsSync(resolved), "Liên kết không tồn tại "+path.relative(root,file)+" → "+url);
  }
}
walk(root);
console.log("Đã kiểm tra:", checks, "điều kiện,", jsCount, "tệp JavaScript và", htmlCount, "tệp HTML.");
if(failures){ console.error(failures,"điều kiện không đạt."); process.exitCode=1;}
else console.log("PASS: cấu trúc, cú pháp JS và các đường dẫn tệp cục bộ cơ bản.");

