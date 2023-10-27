"use strict";

function arrToUl(arr) {
    let arrAsUl = [];
    for (let el of arr) {
        el = "<li>" + el + "</li>"
        arrAsUl.push(el);
    }
    arrAsUl.unshift("<ul>");
    arrAsUl.push("</ul>");
    arrAsUl = arrAsUl.join("");
    return arrAsUl;
}

// console.log(arrToUl([1, 2, 3, 4, 5]));
// console.log(arrToUl(["1", "2", "3", "4", "5"]));