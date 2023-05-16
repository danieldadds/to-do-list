// import _ from "lodash";
import { itemGen } from "./create";
import { modifyItem } from "./modify";
import {
  btnInbox,
  btnToday,
  btnWeek,
  createPage,
  btnAddProject,
  projectList,
  today,
} from "./dom";
import "./styles.css";
import { compareAsc, addDays, format, parseISO, toDate } from "date-fns";

let mainArray = [];
let projectArray = [];

/// few test objects whilst i test the functionality

itemGen("Brush Teeth", "Brush twice daily", "16.05.2023", "High", mainArray);
itemGen("Code", "practice for 2 hours", "18.05.2023", "Completed", mainArray);
itemGen("Drink green tea", "be healthy", "16.05.2023", "Low", mainArray);
itemGen("Go gym", "get in shape", "16.05.2023", "High", mainArray);
itemGen("Go gym", "get in shape", "18.05.2023", "High", mainArray);

// create home page

createPage("Inbox", mainArray);

/// buttons and event listeners

btnInbox.addEventListener("click", function () {
  createPage("Inbox", mainArray);
});

btnToday.addEventListener("click", function () {
  createPage("Today", mainArray);
});

btnWeek.addEventListener("click", function () {
  createPage("Week", mainArray);
});

let prevent = function () {
  var form = document
    .querySelector("form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });
};

prevent();

document.getElementById("add").addEventListener("click", function () {
  event.preventDefault();
  let title = document.getElementById("add-title").value;
  let description = document.getElementById("add-description").value;
  let due = document.getElementById("add-duedate").value;

  // convert date into uk format
  due = format(parseISO(due), "dd.MM.yyyy");

  // let due = document.getElementById("add-duedate").value;
  let priority = document.getElementById("add-priority").value;
  // let array = mainArray;
  // console.log(title + description);

  console.log(mainArray);
  itemGen(title, description, due, priority, mainArray);
  createPage("Inbox", mainArray);
  console.log(mainArray);
});

document.getElementById("add-project").addEventListener("click", function () {
  let projectName = document.getElementById("project-title").value;
  projectArray.push(projectName);

  let tempLine = document.createElement("li");
  tempLine.classList.add("side-item");
  tempLine.innerText = projectName;
  projectList.appendChild(tempLine);

  console.log(projectArray);
});

// let testdate = today + 1;
// console.log(testdate);

// const today = format(new Date(), "dd.MM.yyyy");

// var date = format(new Date(), "dd.MM.yyyy");

/// get todays
// let dateOne = new Date();

// console.log(date);

// let newDate = addDays(date, 7);

// newDate = format(newDate, "dd.MM.yyyy");
// console.log(newDate);
// Add ten days to specified date

// var newDate = toDate(parseISO(date));

// newDate = addDays(parseISO(date), 2);

// addDays(parseISO(date), 2);

// addDays(parseISO("2016-01-01"), 1);
