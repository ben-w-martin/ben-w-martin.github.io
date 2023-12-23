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
        // headerBoxes[i].style.backgroundColor = "$color-grey-a-dk";
        infoBlocks[i].style.display = "block";
    });
}
