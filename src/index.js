import _ from "lodash";
import { itemGen } from "./create";
import { modifyItem } from "./modify";
import { btnInbox, btnToday, btnWeek, createPage } from "./dom";
import "./styles.css";

let myArray = [];

/// few test objects whilst i test the functionality

itemGen("Brush Teeth", "Brush twice daily", "20MAY", "High", myArray);
itemGen("Code", "practice for 2 hours", "19MAY", "Completed", myArray);
itemGen("Drink green tea", "be healthy", "17MAY", "Low", myArray);
itemGen("Go gym", "get in shape", "11MAY", "High", myArray);
itemGen("Go gym", "get in shape", "11MAY", "High", myArray);

// generate cards from dom

// createCard(myArray);

console.log("test");

// create home page

createPage("Inbox", myArray);

/// buttons and event listeners

btnInbox.addEventListener("click", function () {
  createPage("Inbox", myArray);
});

btnToday.addEventListener("click", function () {
  createPage("Today", myArray);
});

btnWeek.addEventListener("click", function () {
  createPage("Week", myArray);
});

let prevent = function () {
  var form = document
    .querySelector("form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });
};

prevent();
const formSend = document
  .getElementById("add")
  .addEventListener("click", function () {
    let title = document.getElementById("add-title").value;
    let description = document.getElementById("add-description").value;
    let due = document.getElementById("add-duedate").value;
    let priority = document.getElementById("add-priority").value;
    console.log(title + description);
    itemGen(title, description, due, priority, myArray);
    createPage("Inbox", myArray);
  });
