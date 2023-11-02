"use strict";

let currentTodos = [];
// key ids each todo-item
let key = -1;
const currentTodosUl = document.querySelector(".current-todos-ul");
const todoForm = document.getElementById("todo-form");
const clear = document.getElementById("clear");
const delButtons = document.getElementsByClassName("del");

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
    const targetClasses = e.target.classList;
    const classToRemove = targetClasses[1];
    const elementsToRemove = currentTodosUl.querySelectorAll("." + classToRemove);

    elementsToRemove.forEach(element => {
        // element committing suicide
        element.parentNode.removeChild(element);
    })
    --key;
    console.log(key);
}

// Adds todo items
todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let newTodo = document.getElementById("newTodo").value;
    if (newTodo !== "") {
        currentTodos.push(newTodo);
        newTodo = `<input name="check-item" type="checkbox"> ${currentTodos[currentTodos.length - 1]} <button class="del item${currentKey()}">X</button>`;
        liToFrag(newTodo, currentTodosUl);
        listenersForDel();
        console.log(key);
    }
});

// clears todo items
clear.addEventListener("click", function () {
    key = -1;
    removeByClass("todo-item");
});

// adds listener to each new list item created.
function listenersForDel() {
    delButtons[key].addEventListener("click", deleteItem);
}