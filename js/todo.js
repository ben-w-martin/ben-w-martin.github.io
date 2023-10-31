"use strict";

function addTodo() {
    console.log("test");
}

document.getElementById("todo-form").addEventListener("submit", function (event) {
    event.preventDefault();
});