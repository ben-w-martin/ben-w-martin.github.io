"use strict";

function dropMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        // Check if the clicked element or its parent is a .dropdown-container
        let dropdowns = document.getElementsByClassName("dropdown-container");
        for (let i = 0; i < dropdowns.length; i++) {
            let dropdown = dropdowns[i];
            if (dropdown.classList.contains('show') &&
                !dropdown.contains(event.target) &&
                !event.target.matches('.dropdown-content')) {
                dropdown.classList.remove('show');
            }
        }
    }
};


