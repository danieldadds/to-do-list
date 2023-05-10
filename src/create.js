// item complier

const itemGen = (tile, description, due, priority, array) => {
  let tempItem = createItem(tile, description, due, priority);
  array.push(tempItem);
};

// create item factory

const createItem = (title, description, dueDate, priority) => {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
  };
};

// // add to array
// const addToArray = (array, object) => {
//   array.push(object);
// };

export { createItem, itemGen };
