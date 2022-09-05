// ==UserScript==
// @name         BingBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Bing
// @author       Ekaterina Bashta
// @match        https://www.bing.com/*
// @match        https://blog.skillfactory.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links
let search = document.getElementsByName("search")[0];
let keywords = ["Кто такой frontend-разработчик?", "Самые востребованные IT-профессии в 2022 году", "Кто такой веб-разработчик и чем он занимается?", "Полезные библиотеки для Python"];
let keyword = keywords[getRandom(0, keywords.length)];
let BingInput = document.getElementsByName("q")[0];
let sb_bp = document.getElementsByClassName("sb_bp")[5]

if (search !== undefined) {
  let i = 0;

  let timerId = setInterval(function() {
    BingInput.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);
      setTimeout(()=>{
        search.click();
      }, getRandom(1000, 2500));

    }
  }, 300);


}else if (location.hostname == "blog.skillfactory.ru") {
  console.log("Мы на целевом сайте");
  setInterval(()=>{
    let index = getRandom(0, links.length);
    if (getRandom(0, 101) > 70) {
      location.href = "https://www.bing.com/";
    }
    if (links[index].href.indexOf("blog.skillfactory.ru") !== -1) {
      links[index].click();
    }

  }, getRandom(3000, 4500));


} else {
  let nextBingPage = true;
  for (let i=0; i<links.length; i++) {
    if (links[i].href.indexOf("blog.skillfactory.ru") !== -1) {
      console.log("Нашел строку " + links[i]);
      let link = links[i];
      nextBingPage = false;
      setTimeout(()=>{
        link.click();
      }, getRandom(3500, 4500))
      break;
    }
  }
  if (document.querySelector(".sb_pagS").innerText == "4") {
    nextBingPage = false;
    location.href = "https://www.bing.com/";
  }
  if (nextBingPage) {
    setTimeout(()=>{
      sb_bp.click()
    }, getRandom(3000, 5000));
  }
}
function getRandom(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}


