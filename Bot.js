// ==UserScript==
// @name         BingBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Bing
// @author       Ekaterina Bashta
// @match        https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links
let search = document.getElementsByName("search")[0];
let keywords = ["Кто такой frontend-разработчик?", "Самые востребованные IT-профессии в 2022 году", "Кто такой веб-разработчик и чем он занимается?"];
  document.getElementsByName("q")[0].value;
let keyword = keywords[getRandom(0, keywords.length)];

if (search !== undefined) {
  document.getElementsByName("q")[0].value = keyword;
  search.click();
} else {

 for (let i=0; i<links.length; i++) {
    if (links[i].href.indexOf("blog.skillfactory.ru") !== -1) {
      console.log("Нашел строку" + links[i]);
      let link = links[i];
      link.click();
      break;
    }
  }
}
function getRandom(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}
