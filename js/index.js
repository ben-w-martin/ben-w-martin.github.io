"use strict";

(() => {

// CONSTANTS
    const tabs = document.querySelectorAll(".tabs__input");
    const infoBlocks = document.querySelectorAll(".info__box");
    const headerBoxes = document.querySelectorAll(".tabs__header-box");
    const projBtn = document.querySelector(".btn__proj");
    const projBtn2 = document.querySelector(".btn__proj2");
    const backBtn = document.querySelector(".btn__back");
    const main = document.querySelector("#main");

// FUNCTIONS
    function projListener(e) { // Directs to project "page"
        e.preventDefault();

        const tabs = document.querySelector(".tabs");
        const info = document.querySelector(".info");
        const projects = document.querySelector(".projects");

        window.scrollTo({
            top: projects,
            behavior: "smooth"
        })

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

    projBtn.addEventListener("click", projListener);
    projBtn2.addEventListener("click", projListener);
    backBtn.addEventListener("click", backListener);

})();
