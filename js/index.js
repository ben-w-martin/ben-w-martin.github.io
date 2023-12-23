"use strict";

// ABOUT TAB SWITCHER
const tabs = document.querySelectorAll(".tabs__input");
const infoBlocks = document.querySelectorAll(".info__box");
const headerBoxes = document.querySelectorAll(".tabs__header-box");

// EVENT LISTENERS
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("change", function () {
        infoBlocks.forEach(block => {
            block.style.display = "none";
        })
        headerBoxes.forEach(box => {
            box.style.backgroundColor = "transparent";
        })
        headerBoxes[i].style.backgroundColor = "rgba(98, 98, 98, 0.2)";
        infoBlocks[i].style.display = "block";
    });
}
