"use strict";
// import renderProjects from "./projects.js"

// ABOUT TAB SWITCHER
const tabs = document.querySelectorAll(".tabs__input");
const infoBlocks = document.querySelectorAll(".info__box");
const headerBoxes = document.querySelectorAll(".tabs__header-box");
const projBtn = document.querySelector(".btn__proj");
const projBtn2 = document.querySelector(".btn__proj2");
const backBtn = document.querySelector(".btn__back");

// FUNCTIONS
function projListener(e) {
    e.preventDefault(e);
    const tabs = document.querySelector(".tabs");
    const info = document.querySelector(".info");
    const projects = document.querySelector(".projects");
    tabs.style.display = "none";
    info.style.display = "none";
    projects.style.display = "block";
    // renderProjects();
}

function backListener(e) {
    e.preventDefault();
    const tabs = document.querySelector(".tabs");
    const info = document.querySelector(".info");
    const projects = document.querySelector(".projects");
    projects.style.display = "none";
    tabs.style.display = "flex";
    info.style.display = "block";
}

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

projBtn.addEventListener("click", projListener);
projBtn2.addEventListener("click", projListener);
backBtn.addEventListener("click", backListener);
