//containers

import { itemGen, createItem } from "./create";
import { compareAsc, format } from "date-fns";

const container = document.getElementById("container");
const sideContainer = document.getElementById("list-titles");

//buttons

const btnInbox = document.getElementById("btn-inbox");
const btnToday = document.getElementById("btn-today");
const btnWeek = document.getElementById("btn-week");
const btnAdd = document.createElement("button");
const btnAddProject = document.getElementById("add-project");

// event listeners

btnAdd.addEventListener("click", toggleAdd);

//side menu

const projectList = document.getElementById("project-list");

//main page dom

const mainHeading = document.getElementById("main-heading");
const listContent = document.getElementById("list-content");

// dates

const today = format(new Date(), "dd.MM.yyyy");

/// page creation

function createPage(page, array) {
  //clear dom elements
  while (listContent.firstChild) {
    listContent.removeChild(listContent.firstChild);
  }
  mainHeading.innerText = page;
  // console.log(array[0].dueDate);

  if (page === "Today") {
    let dates = array.filter(function (array) {
      // filters and then returns any items from today
      return array.dueDate === today;
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

export {
  container,
  btnInbox,
  btnToday,
  btnWeek,
  btnAddProject,
  projectList,
  createPage,
};
