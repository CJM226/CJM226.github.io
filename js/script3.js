"use strict";
// Header Underline https://codepen.io/alphardex/pen/JjoqbNP
var underlineMenuItems = document.querySelectorAll(".underline-menu li");
underlineMenuItems[0].classList.add("active");
underlineMenuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        underlineMenuItems.forEach(function (item) { return item.classList.remove("active"); });
        item.classList.add("active");
    });
});
// Full Page Burger Navigation https://codepen.io/alphardex/pen/NWPBwYe
var burgerMenuToggle = document.querySelector("#burger-toggle");
var burgerMenuLinks = document.querySelectorAll(".burger-nav li a");
burgerMenuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        burgerMenuToggle.checked = false;
    });
});

// Cross Bar Glitch Text https://codepen.io/alphardex/pen/VwLLLNG
var random = function (min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
};
var crossBarGlitchTexts = document.querySelectorAll(".cross-bar-glitch");
crossBarGlitchTexts.forEach(function (text) {
    var content = text.textContent;
    text.textContent = "";
    var slice = text.dataset.slice;
    var glitchText = document.createElement("div");
    glitchText.className = "glitch";
    glitchText.style.setProperty("--slice-count", slice);
    for (var i = 0; i <= Number(slice); i++) {
        var span = document.createElement("span");
        span.textContent = content;
        span.style.setProperty("--i", "" + (i + 1));
        if (i !== Number(slice)) {
            span.style.animationDelay = 800 + random(100, 300) + "ms";
        }
        glitchText.append(span);
    }
    text.appendChild(glitchText);
    var bars = document.createElement("div");
    bars.className = "bars";
    for (var i = 0; i < 5; i++) {
        var bar = document.createElement("div");
        bar.className = "bar";
        bars.append(bar);
    }
    text.append(bars);
});
// Staggered Rise In Text https://codepen.io/alphardex/pen/qBEmGbw
var staggeredRiseInTexts = document.querySelectorAll(".staggered-rise-in");
staggeredRiseInTexts.forEach(function (text) {
    var letters = text.textContent.split("");
    text.textContent = "";
    letters.forEach(function (letter, i) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = i / 20 + "s";
        text.append(span);
    });
});
// Observe the elements which have animations to fire.
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { rootMargin: "0px 0px -140px" });
var titles = document.querySelectorAll(".titles > *");
titles.forEach(function (title) { return observer.observe(title); });
var paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function (p) { return observer.observe(p); });
var profileCards = document.querySelectorAll(".card");
profileCards.forEach(function (profileCard) { return observer.observe(profileCard); });
var timeline = document.querySelector(".timeline");
observer.observe(timeline);
var marker = document.querySelector(".marker");
observer.observe(marker);
var placeName = document.querySelector(".place-name");
observer.observe(placeName);
var map = document.querySelector("#map");
observer.observe(map);
var sponsorList = document.querySelectorAll(".sponsors-list li");
sponsorList.forEach(function (sponsor) { return observer.observe(sponsor); });
// Baidu Map API
var bmap = new BMap.Map("map");
var point = new BMap.Point(113.950148, 22.553891);
bmap.centerAndZoom(point, 18);