const modifyItem = (() => {
  // remove list item
  const remove = (array, content) => {
    // console.log(array + content);
    // array.remove(content);
  };

  // modify list item
  const edit = (array, oldContent, newContent) => {};
  return {
    remove,
    edit,
  };
})();

export { modifyItem };
