"use strict";
import renderProjects from "./projects.js"

// ABOUT TAB SWITCHER
const tabs = document.querySelectorAll(".tabs__input");
const infoBlocks = document.querySelectorAll(".info__box");
const headerBoxes = document.querySelectorAll(".tabs__header-box");
const projBtn = document.querySelector(".btn__proj");

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

projBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const about = document.querySelector(".about");
    about.style.display = "none";
    renderProjects();
});
