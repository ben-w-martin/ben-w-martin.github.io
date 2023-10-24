"use strict";

function dropMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        // Check if the clicked element or its parent is a .dropdown-container
        var dropdowns = document.getElementsByClassName("dropdown-container");
        for (var i = 0; i < dropdowns.length; i++) {
            var dropdown = dropdowns[i];
            if (dropdown.classList.contains('show') &&
                !dropdown.contains(event.target) &&
                !event.target.matches('.dropdown-content')) {
                dropdown.classList.remove('show');
            }
        }
    }
};
