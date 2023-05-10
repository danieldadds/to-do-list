import { itemGen } from "./create";
import { modifyItem } from "./modify";
import { container, createCard } from "./dom";
import "./styles.css";

let myArray = [];

itemGen("Brush Teeth", "Brush twice daily", "Due 20th may", "High", myArray);

itemGen("Code", "practice for 2 hours", "19th may", "Completed", myArray);
itemGen("Drink green tea", "be healthy", "17th may", "Low", myArray);
itemGen("Go gym", "get in shape", "14th may", "High", myArray);

console.log(myArray);

modifyItem.remove(myArray, 1);

console.log(myArray);

// generate card from dom
createCard(myArray);
