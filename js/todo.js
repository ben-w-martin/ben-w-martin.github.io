"use strict";
(() => {
    let currentTodos = [];
    let currentTodosUl = document.querySelector(".current-todos-ul");

    const todoForm = document.getElementById("todo-form");
    todoForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // console.log(currentTodos);
        let newTodo = document.getElementById("newTodo").value;
        let fragment = document.createDocumentFragment();
        const li = document.createElement("li");

        currentTodos.push(`<input type="checkbox"> ${newTodo.trim()} <button id="delete"><img src="img/times-icon.svg" alt="Delete"></button>`);

        li.innerHTML = currentTodos[currentTodos.length -1];

        fragment.appendChild(li);
        currentTodosUl.appendChild(fragment);
    });
})();