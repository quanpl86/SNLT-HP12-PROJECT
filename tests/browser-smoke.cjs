"use strict";
// E2E smoke test của website cuối khóa. Dùng Playwright trong CI, không phải runtime của học sinh.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { spawn } = require("node:child_process");
const { chromium } = require("playwright");
const origin = "http://127.0.0.1:8765";
const root = path.resolve(__dirname, "..");
const artifacts = path.join(root, "test-artifacts");
fs.mkdirSync(artifacts, { recursive: true });
const server = spawn("python3", ["-m", "http.server", "8765", "--bind", "127.0.0.1"], { cwd: root, stdio: "ignore" });
let browser;
async function ready() {
  for (let attempt=0; attempt<60; attempt++) {
    try { const response=await fetch(origin + "/index.html"); if(response.ok)return; }
    catch (_) {}
    await new Promise(resolve=>setTimeout(resolve,300));
  }
  throw new Error("Local HTTP server did not start");
}
async function run() {
  await ready();
  browser=await chromium.launch({ headless:true });
  const page=await browser.newPage({viewport:{width:1366,height:900},deviceScaleFactor:1});
  const errors=[];
  page.on("pageerror",e=>errors.push(e.message));
  page.on("console",msg=>{if(msg.type()==="error")errors.push(msg.text());});

  await page.goto(origin+"/index.html");
  await page.locator(".post-card").first().waitFor();
  assert.equal(await page.locator(".post-card").count(), 6, "Home has 6 blog cards");
  const heroOk = await page.locator(".hero-photo-frame img").evaluate(img => img.complete && img.naturalWidth > 0 && img.getAttribute("src").includes("viet-nam-hero-gpt.webp"));
  assert.equal(heroOk,true,"Hero GPT Image loads");
  const imageCount=await page.locator(".post-card img").evaluateAll(imgs=>imgs.filter(img=>img.complete && img.naturalWidth>0 && img.src.includes("/assets/photos/")).length);
  assert.equal(imageCount,6,"All six GPT Image article pictures load");
  await page.screenshot({path:path.join(artifacts,"desktop-home.png"),fullPage:true});

  await page.locator("#search").fill("HOI AN");
  assert.equal(await page.locator(".post-card").count(),1,"non-accent query");
  assert.match(await page.locator(".post-card h3").first().innerText(),/Hội An/);
  await page.locator("#search").fill("khongco000");
  assert.equal(await page.locator(".post-card").count(),0);
  assert.equal(await page.locator("#empty").isVisible(),true);
  await page.locator("#reset-filters").click();
  assert.equal(await page.locator(".post-card").count(),6);

  await page.locator('[data-category="Di sản"]').click();
  assert.equal(await page.locator(".post-card").count(),2);
  await page.locator('[data-category="Thiên nhiên"]').click();
  assert.equal(await page.locator(".post-card").count(),2);
  await page.locator('[data-category="Văn hóa"]').click();
  assert.equal(await page.locator(".post-card").count(),2);
  await page.locator('[data-category="all"]').click();
  assert.equal(await page.locator(".post-card").count(),6);

  await page.locator(".post-card-bottom a").first().click();
  await page.locator("#article-title").waitFor();
  assert.match(await page.locator("#article-title").innerText(),/Hội An/);
  assert.equal(await page.locator("#article-warning").isVisible(),false);
  assert.equal(await page.locator("#source-container").isVisible(),true);
  assert.equal(await page.locator("#article-image-caption").isVisible(),true);
  await page.goto(origin+"/post.html?id=unknown");
  assert.equal(await page.locator("#article-warning").isVisible(),true);

  await page.goto(origin+"/editor.html");
  await page.locator("#draft-title").fill("Em yêu Cố đô Huế");
  await page.locator("#draft-body").fill("Dự án giới thiệu văn hóa Việt Nam và kiến trúc Huế.");
  assert.equal(await page.locator("#preview-title").innerText(),"Em yêu Cố đô Huế");
  await page.locator("#save").click();
  await page.reload();
  await page.locator("#restore").click();
  assert.equal(await page.locator("#draft-title").inputValue(),"Em yêu Cố đô Huế");
  assert.match(await page.locator("#draft-body").inputValue(),/kiến trúc Huế/);
  await page.locator("#clear").click();
  await page.locator("#restore").click();
  assert.match(await page.locator("#draft-status").innerText(),/Chưa có bản nháp/);

  await page.goto(origin+"/dashboard.html");
  assert.equal(await page.locator(".library-row").count(),6);
  assert.equal(await page.locator("#stats-total").innerText(),"06");

  await page.setViewportSize({width:375,height:812});
  await page.goto(origin+"/index.html");
  await page.locator(".post-card").first().waitFor();
  const widths=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,inner:window.innerWidth}));
  assert.ok(widths.scroll<=widths.inner+2, "horizontal overflow "+widths.scroll+" > "+widths.inner);
  await page.locator("[data-nav-toggle]").click();
  assert.equal(await page.locator("[data-nav-toggle]").getAttribute("aria-expanded"),"true");
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("[data-nav-toggle]").getAttribute("aria-expanded"),"false");
  await page.screenshot({path:path.join(artifacts,"mobile-home.png"),fullPage:true});
  assert.deepEqual(errors,[],"No browser console/page errors");
  console.log("PASS E2E — Home 6 posts; search; category; detail; editor; dashboard; mobile nav; responsive.");
}
run().catch(e=>{console.error("FAIL E2E:",e.stack||e);process.exitCode=1;}).finally(async()=>{if(browser)await browser.close();server.kill();});
