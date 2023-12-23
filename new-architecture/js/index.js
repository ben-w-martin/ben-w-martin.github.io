"use strict";

// ABOUT TAB SWITCHER
const tabs = document.querySelectorAll(".about__input");
const infoBlocks = document.querySelectorAll(".about__tab");

// EVENT LISTENERS
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("change", function () {
        infoBlocks.forEach(block => {
            block.style.display = "none";
        })
        infoBlocks[i].style.display = "block";
    });
}
