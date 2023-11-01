"use strict";
(() => {
    let currentTodos = [];
    const currentTodosUl = document.querySelector(".current-todos-ul");
    const todoForm = document.getElementById("todo-form");

    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const newTodo =  `<input type="checkbox"> ${document.getElementById("newTodo").value} <button id="delete"><img src="img/times-icon.svg" alt="Delete"></button>`;
        const frag = document.createDocumentFragment();
        const li = document.createElement("li");
        currentTodos.push(newTodo);
        li.innerHTML = currentTodos[currentTodos.length - 1];
        frag.appendChild(li);
        currentTodosUl.appendChild(frag);

    })
})();
