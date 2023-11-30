"use strict";

(() => {
    const exerciseSelect = document.querySelector("#exercises");

    fetch("../data/exercises.json").then(response => response.json()).then(data => {
        console.log(data);
        data[0].exercise.forEach(item => {
            const option = document.createElement("option");
            option.innerText = item.name;
            exerciseSelect.appendChild(option);
        });
    });
})();