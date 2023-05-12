//containers

const container = document.getElementById("container");
const sideContainer = document.getElementById("list-titles");

//buttons

const btnInbox = document.getElementById("btn-inbox");
const btnToday = document.getElementById("btn-today");
const btnWeek = document.getElementById("btn-week");

//main page dom

const mainHeading = document.getElementById("main-heading");
const listContent = document.getElementById("list-content");

// lines

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

// //// card generation

// function createCard(myArray) {
//   let sideList = document.createElement("ul");

//   // loop through array to append all dom elements

//   for (let index = 0; index < myArray.length; index++) {
//     //title dom
//     let card = document.createElement("div");
//     card.setAttribute("id", "card");
//     let titleElement = document.createElement("h1");
//     let titleContent = document.createTextNode(myArray[index].title);

//     titleElement.appendChild(titleContent);
//     card.appendChild(titleContent);

//     // description dom
//     let desElement = document.createElement("p");
//     let desContent = document.createTextNode(myArray[index].description);
//     desElement.appendChild(desContent);
//     card.appendChild(desContent);
//     // due date dom
//     let dateElement = document.createElement("p");
//     let dateContent = document.createTextNode(myArray[index].dueDate);
//     dateElement.appendChild(dateContent);
//     card.appendChild(dateContent);
//     /// priority dom
//     let priorityElement = document.createElement("p");
//     let priorityContent = document.createTextNode(myArray[index].priority);
//     priorityElement.appendChild(priorityContent);
//     card.appendChild(priorityContent);

//     container.appendChild(card);

//     //// list sidebar dom

//     let listItem = document.createElement("li");
//     let listText = document.createTextNode(myArray[index].title);

//     listItem.setAttribute("id", "side-list-title");

//     listItem.appendChild(listText);

//     sideList.appendChild(listItem);

//     sideContainer.appendChild(sideList);

//     /// priority color setters

//     switch (myArray[index].priority) {
//       case "High":
//         listItem.style.backgroundColor = "red";
//         break;
//       case "Low":
//         listItem.style.backgroundColor = "orange";
//         break;
//       case "Completed":
//         listItem.style.backgroundColor = "green";
//         break;
//     }
//   }
// }

export { container, btnInbox, btnToday, btnWeek, createPage };
