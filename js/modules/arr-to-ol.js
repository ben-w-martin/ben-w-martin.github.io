"use strict";

function arrToOl(arr) {
    let arrAsOl = [];
    for (let el of arr) {
        el = "<li>" + el + "</li>"
        arrAsOl.push(el);
    }
    arrAsOl.unshift("<ol>");
    arrAsOl.push("</ol>");
    arrAsOl = arrAsOl.join("");
    return arrAsOl;
}

// console.log(arrToOl([1, 2, 3, 4, 5]));
// console.log(arrToOl(["1", "2", "3", "4", "5"]));
