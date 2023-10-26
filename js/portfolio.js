"use strict";

function dropMenu() {
    document.getElementById("contact-dropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        let dropdowns = document.getElementsByClassName("dropdown-container")
        for (let i = 0; i < dropdowns.length; i++) {
            let dropdown = dropdowns[i];
            if (dropdown.classList.contains("show") &&
                !event.target.matches("dropdown-items") &&
                !dropdown.contains(event.target)) {
                dropdown.classList.remove("show");
            }
        }
    }
}

// function runCode(e) {
//     e.preventDefault();
// }

