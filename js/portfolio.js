"use strict";

function dropMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn' ) && !event.target.matches('.dropdown-content')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        // Close all dropdowns except for the clicked one
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show') && event.target !== openDropdown) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Prevent the menu from closing when clicking inside the .dropdown-content
document.querySelector('.dropdown-content').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the window.onclick handler
});
