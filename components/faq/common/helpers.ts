const handleDeleteElementFromArr = (arr: any[], el: any) => {
  const newArr = [...arr];
  const index = arr.indexOf(el);
  newArr.splice(index, 1);
  return newArr;
};

export { handleDeleteElementFromArr };
