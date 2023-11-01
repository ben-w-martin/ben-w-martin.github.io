"use strict";

(() => {
    let currentTodos = [];
    const currentTodosUl = document.querySelector(".current-todos-ul");
    const todoForm = document.getElementById("todo-form");
    const clear = document.getElementById("clear");

    // takes in a value to set as a list item, and a destination to add the item.
    // Creates a fragment and a li, adds li to fragment, then appends fragment to destination.
    function liToFrag(val, dest) {
        const frag = document.createDocumentFragment();
        const li = document.createElement("li");
        li.className = "todo-item"
        li.innerHTML = val;
        frag.appendChild(li);
        return dest.appendChild(frag);
    }

    // Adds todo items
    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let newTodo = document.getElementById("newTodo").value;
        if (newTodo !== "") {
            currentTodos.push(newTodo);
            newTodo = `<input type="checkbox"> ${currentTodos[currentTodos.length - 1]} <button id="delete"><img src="img/times-icon.svg" alt="Delete"></button>`;
            liToFrag(newTodo, currentTodosUl);
        }
    });

    // clears todo items
    clear.addEventListener("click", function () {
        const children = currentTodosUl.querySelectorAll(".todo-item");
        function removeByClass (className) {
            const elementsToRemove = currentTodosUl.querySelectorAll("." + className);
            for (let i = 0; i < elementsToRemove.length; i++) {
                const element = elementsToRemove[i];
                element.parentNode.removeChild(element);
            }
        }
            removeByClass("todo-item");
            console.log(currentTodosUl);
        // currentTodosUl.removeChild(child);
    });

})();


// (() => {
//     let currentTodos = [];
//     const currentTodosUl = document.querySelector(".current-todos-ul");
//     const todoForm = document.getElementById("todo-form");
//
//     todoForm.addEventListener("submit", function (e) {
//         e.preventDefault();
//         const newTodo =  `<input type="checkbox"> ${document.getElementById("newTodo").value} <button id="delete"><img src="img/times-icon.svg" alt="Delete"></button>`;
//         const frag = document.createDocumentFragment();
//         const li = document.createElement("li");
//         currentTodos.push(newTodo);
//         li.innerHTML = currentTodos[currentTodos.length - 1];
//         frag.appendChild(li);
//         currentTodosUl.appendChild(frag);
//
//     })
// })();
