"use strict";

function dropMenu() {
    document.getElementById("contact-dropdown").classList.toggle("show");
    document.getElementById("contact-dropdown").animate(".show");

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

// scrolls smooth with href="#" clicks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// function runCode(e) {
//     e.preventDefault();
// }

// const user = {
//     name: 'Hedy Lamarr',
//     imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//     imageSize: 90,
// };
//
// export default function Profile() {
//     return (
//         <>
//             <h1>{user.name}</h1>
//             <img
//                 className="avatar"
//                 src={user.imageUrl}
//                 alt={'Photo of ' + user.name}
//                 style={{
//                     width: user.imageSize,
//                     height: user.imageSize
//                 }}
//             />
//         </>
//     );
// }

