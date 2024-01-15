export const setArrayInArray = ({ array, len }) => {
  if (!array || array.length === 0) {
    console.log('배열이 undefined 거나 배열의 길이가 0임');
    return [];
  }

  const itemList = [];
  let list = [];
  let id = 0;

  array.forEach((data) => {
    list.push(data);

    if (list.length === len) {
      itemList.push({ id: id, renderList: list });

      id += 1;
      list = [];
    }
  });

  return itemList;
};
