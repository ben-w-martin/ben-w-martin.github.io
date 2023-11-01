"use strict";

let currentTodos = [];
// key ids each todo-item
let key = 0;
const currentTodosUl = document.querySelector(".current-todos-ul");
const todoForm = document.getElementById("todo-form");
const clear = document.getElementById("clear");
const del = document.getElementsByClassName("del");

function currentKey() {
    key++;
    return key;
}

function removeByClass(className) {
    const elementsToRemove = currentTodosUl.querySelectorAll("." + className);
    for (let i = 0; i < elementsToRemove.length; i++) {
        const element = elementsToRemove[i];
        element.parentNode.removeChild(element);
    }
}

// takes in a value to set as a list item, and a destination to add the item.
// Creates a fragment and a li, adds li to fragment, then appends fragment to destination.
function liToFrag(val, dest) {
    const frag = document.createDocumentFragment();
    const li = document.createElement("li");
    li.className = "todo-item " + "item" + key;
    li.innerHTML = val;
    frag.appendChild(li);
    return dest.appendChild(frag);
}
function deleteItem(e) {
    console.log("hello World");
    const targetClasses = e.target.classList;
    console.log(targetClasses);
    let listClasses = document.querySelectorAll(".todo-item");
    const buttonClassArray = Array.from(targetClasses);

}

// Adds todo items
todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let newTodo = document.getElementById("newTodo").value;
    if (newTodo !== "") {
        currentTodos.push(newTodo);
        newTodo = `<input type="checkbox"> ${currentTodos[currentTodos.length - 1]} <button class="del item${currentKey()}">X</button>`;
        liToFrag(newTodo, currentTodosUl);
    }
});

// clears todo items
clear.addEventListener("click", function () {
    key = 0;
    removeByClass("todo-item");
    console.log(currentTodosUl);
});

del.addEventListener("click", deleteItem);