"use strict";

let currentTodos = [];
let keyList = [];
// key ids each todo-item
let key = 0;
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
    key = getRandomInt(0, 100);
    if (!keyList.includes(key)) {
        keyList.push(key);
    } else {
        key = getRandomInt(0, 100);
        keyList.push(key);
    }
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
    currentTodos.shift();
}

// Adds todo items
todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    keyGen();
    let newTodo = document.getElementById("newTodo").value;
    if (currentTodos.length < 100) {
        if (newTodo !== "") {
            currentTodos.push(newTodo);
            newTodo = `<input name="check-item" type="checkbox"> ${currentTodos[currentTodos.length - 1]} <button class="del item${key}">X</button>`;
            liToFrag(newTodo, currentTodosUl);
            listenersForDel();
            console.log(key);
        }
    }
});

// clears todo items
clear.addEventListener("click", function () {
    keyList = [];
    currentTodos = [];
    removeByClass("todo-item");
});

// adds listener to each new list item created.
function listenersForDel() {
    console.log(currentTodos);
    delButtons[currentTodos.length - 1].addEventListener("click", deleteItem);
}