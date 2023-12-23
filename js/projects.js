"use strict";

export default renderProjects;

function renderProjects() {
const aboutCon = document.querySelector(".about__container");
const projects = document.createElement("div");
const natours = document.createElement("div");
const trillo = document.createElement("div");
const natoursHeading = document.createElement("h2");
const trilloHeading = document.createElement("h2");

projects.classList.add("projects");
natours.classList.add("projects__natours");
trillo.classList.add("projects__trillo");

natoursHeading.classList.add("heading-secondary");
natoursHeading.innerHTML = "Natours";
trilloHeading.classList.add("heading-secondary");
trilloHeading.innerHTML = "Trillo";

natours.appendChild(natoursHeading);
trillo.appendChild(trilloHeading);

projects.appendChild(natours);
projects.appendChild(trillo);
aboutCon.appendChild(projects);
}