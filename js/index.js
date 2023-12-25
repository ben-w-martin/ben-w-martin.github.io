"use strict";

// CONSTANTS
const tabs = document.querySelectorAll(".tabs__input");
const infoBlocks = document.querySelectorAll(".info__box");
const headerBoxes = document.querySelectorAll(".tabs__header-box");
const exampleImg = document.querySelectorAll(".example-img");
const projBtn = document.querySelector(".btn__proj");
const projBtn2 = document.querySelector(".btn__proj2");
const backBtn = document.querySelector(".btn__back");
const modalBg = document.querySelector(".modal");

// FUNCTIONS
function projListener(e) { // Directs to project "page"
    e.preventDefault(e);
    const tabs = document.querySelector(".tabs");
    const info = document.querySelector(".info");
    const projects = document.querySelector(".projects");
    tabs.style.display = "none";
    info.style.display = "none";
    projects.style.display = "block";
}

function backListener(e) { // Directs to home
    e.preventDefault();
    const tabs = document.querySelector(".tabs");
    const info = document.querySelector(".info");
    const projects = document.querySelector(".projects");
    projects.style.display = "none";
    tabs.style.display = "flex";
    info.style.display = "block";
}

function exitModal(e) {
    modalBg.style.display = "none";
    e.target.removeEventListener("click", imageScaler);
    if (e.target) {
        exampleImg.forEach(img => {
            img.addEventListener("click", imageScaler);
            img.style.transform = "translate(-50%, -50%) scale(1)";
            img.style.top = "";
            img.style.left = "";
            img.style.zIndex = "0";
        });
    }
}

function imageScaler() {
    this.removeEventListener("click", imageScaler);
    modalBg.style.display = "block";
    this.style.transform = "translate(-50%, -50%) scale(3)";
    this.style.top = "50%";
    this.style.left = "50%";
    this.style.zIndex = "30";

    modalBg.removeEventListener("click", exitModal);
    modalBg.addEventListener("click", exitModal);
}

// EVENT LISTENERS
for (let i = 0; i < tabs.length; i++) { // Adds Ev. listeners to tabs
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

exampleImg.forEach(img => { // Ev. listeners to example images
    img.addEventListener("click", imageScaler);
});

projBtn.addEventListener("click", projListener);
projBtn2.addEventListener("click", projListener);
backBtn.addEventListener("click", backListener);
