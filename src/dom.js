//containers

import { itemGen } from "./create";

const container = document.getElementById("container");
const sideContainer = document.getElementById("list-titles");

//buttons

const btnInbox = document.getElementById("btn-inbox");
const btnToday = document.getElementById("btn-today");
const btnWeek = document.getElementById("btn-week");
const btnAdd = document.createElement("button");

// event listeners

btnAdd.addEventListener("click", toggleAdd);

//main page dom

const mainHeading = document.getElementById("main-heading");
const listContent = document.getElementById("list-content");

// form dom

/// page creation

function createPage(page, array) {
  //clear dom elements
  while (listContent.firstChild) {
    listContent.removeChild(listContent.firstChild);
  }
  mainHeading.innerText = page;
  console.log(array[0].dueDate);

  if (page === "Today") {
    let dates = array.filter(function (array) {
      return array.dueDate === "11MAY";
    });
    createList(dates);
  } else if (page === "Inbox") {
    for (let index = 0; index < array.length; index++) {
      let dates = [];

      dates.push(array[index]);
      createList(dates);
    }
    let btnAdd = document.createElement("button");
    btnAdd.innerText = "Add";
    listContent.appendChild(btnAdd);
    btnAdd.classList.add("add-main");
    btnAdd.addEventListener("click", toggleAdd);
  }

  // let dates = array.filter(function (array) {
  //   return array.dueDate === "11MAY";
  // });
}

//// list creation

function createList(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    let newLine = document.createElement("li");
    newLine.classList.add("main-list");
    let lineContent = document.createTextNode(
      array[index].title + " " + array[index].dueDate
    );

    newLine.appendChild(lineContent);
    listContent.appendChild(newLine);
  }
}

/// toggle add button

function toggleAdd() {
  const formElement = document.getElementById("add-form");
  if (formElement.style.display === "none") {
    formElement.style.display = "block";
  } else {
    formElement.style.display = "none";
  }
}

export { container, btnInbox, btnToday, btnWeek, createPage };
