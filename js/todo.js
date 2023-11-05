"use strict";

let currentTodos = {
    items: [],
    key: 0,
};
let keyList = [];
// key ids each todo-item
// let key = 0;
const currentTodosUl = document.querySelector(".current-todos-ul");
const todoForm = document.getElementById("todo-form");
const clear = document.getElementById("clear");
const delButtons = document.getElementsByClassName("del");

function getRandomInt(min, max) {
    if (typeof min === "boolean" || typeof max === "boolean" ||
        min === null || max === null) {
        return NaN;
    }
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function keyGen() {
    currentTodos.key = getRandomInt(0, 100);
    if (!keyList.includes(currentTodos.key)) {
        keyList.push(currentTodos.key);
    } else {
        currentTodos.key = getRandomInt(0, 100);
        keyList.push(currentTodos.key);
    }
    return currentTodos.key;
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
    li.className = "todo-item " + "item" + currentTodos.key;
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
    currentTodos.items.shift();
}

// Adds todo items
todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputValueReset = document.getElementById("newTodo");
    keyGen();
    let newTodo = document.getElementById("newTodo").value;
    inputValueReset.value = "";
    if (currentTodos.items.length < 100) {
        if (newTodo !== "") {
            currentTodos.items.push(newTodo);
            newTodo = `<input name="check-item" type="checkbox"> ${currentTodos.items[currentTodos.items.length - 1]} <button class="del item${currentTodos.key}">X</button>`;
            liToFrag(newTodo, currentTodosUl);
            listenersForDel();

        }
    }
});

// clears todo items
clear.addEventListener("click", function () {
    keyList = [];
    currentTodos.items = [];
    removeByClass("todo-item");
    const inputValueReset = document.getElementById("newTodo");
    inputValueReset.value = "";
});

// adds listener to each new list item created.
function listenersForDel() {
    delButtons[currentTodos.items.length - 1].addEventListener("click", deleteItem);
}