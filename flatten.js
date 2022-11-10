const flatten = function(array) {

  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(element) === false) {
      newArray.push(element);
      continue;
    }
    for (let j = 0; j < element.length; j++) {
      newArray.push(element[j]);
    }
  }
  return newArray;
};

module.exports = flatten;